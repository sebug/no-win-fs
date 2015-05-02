module Data.Bifoldable where

import Data.Const
import Data.Either
import Data.Monoid
import Data.Monoid.All
import Data.Monoid.Any
import Data.Tuple

import Control.Apply
import Control.Bind

-- | `Bifoldable` represents data structures with two type arguments which can be 
-- | folded.
-- | 
-- | A fold for such a structure requires two step functions, one for each type 
-- | argument. Type class instances should choose the appropriate step function based
-- | on the type of the element encountered at each point of the fold.
-- | 
class Bifoldable p where
  bifoldr :: forall a b c. (a -> c -> c) -> (b -> c -> c) -> c -> p a b -> c
  bifoldl :: forall a b c. (c -> a -> c) -> (c -> b -> c) -> c -> p a b -> c
  bifoldMap :: forall m a b. (Monoid m) => (a -> m) -> (b -> m) -> p a b -> m

instance bifoldableTuple :: Bifoldable Tuple where
  bifoldMap f g (Tuple a b) = f a <> g b
  bifoldr f g z (Tuple a b) = f a (g b z)
  bifoldl f g z (Tuple a b) = g (f z a) b

instance bifoldableEither :: Bifoldable Either where
  bifoldMap f _ (Left a) = f a
  bifoldMap _ g (Right b) = g b
  bifoldr f _ z (Left a) = f a z
  bifoldr _ g z (Right b) = g b z
  bifoldl f _ z (Left a) = f z a
  bifoldl _ g z (Right b) = g z b

instance bifoldableConst :: Bifoldable Const where
  bifoldMap f _ (Const a) = f a
  bifoldr f _ z (Const a) = f a z
  bifoldl f _ z (Const a) = f z a

-- | Fold a data structure, accumulating values in a monoidal type.
bifold :: forall t m. (Bifoldable t, Monoid m) => t m m -> m
bifold = bifoldMap id id

-- | Traverse a data structure, accumulating effects using an `Applicative` functor,
-- | ignoring the final result.
bitraverse_ :: forall t f a b c d. (Bifoldable t, Applicative f) => (a -> f c) -> (b -> f d) -> t a b -> f Unit
bitraverse_ f g = bifoldr ((*>) <<< f) ((*>) <<< g) (pure unit)

-- | A version of `bitraverse_` with the data structure as the first argument.
bifor_ :: forall t f a b c d. (Bifoldable t, Applicative f) => t a b -> (a -> f c) -> (b -> f d) -> f Unit
bifor_ t f g = bitraverse_ f g t

-- | Collapse a data structure, collecting effects using an `Applicative` functor,
-- | ignoring the final result.
bisequence_ :: forall t f a b. (Bifoldable t, Applicative f) => t (f a) (f b) -> f Unit
bisequence_ = bitraverse_ id id

-- | Test whether a predicate holds at any position in a data structure.
biany :: forall t a b. (Bifoldable t) => (a -> Boolean) -> (b -> Boolean) -> t a b -> Boolean
biany p q = runAny <<< bifoldMap (Any <<< p) (Any <<< q)

-- | Test whether a predicate holds at all positions in a data structure.
biall :: forall t a b. (Bifoldable t) => (a -> Boolean) -> (b -> Boolean) -> t a b -> Boolean
biall p q = runAll <<< bifoldMap (All <<< p) (All <<< q)
