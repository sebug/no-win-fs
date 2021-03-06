-- Generated by psc-make version 0.6.8
module Data.Tuple where
import Prelude ()
import Data.Monoid ()
import Data.Tuple ()
import Control.Lazy ()
import Data.Array ()
import Prim ()
import Prelude ()
import Control.Comonad ()
import Control.Extend ()
import Control.Lazy ()
import Data.Array ()
import Data.Monoid ()
--  | A simple product type for wrapping a pair of component values.
--  | Allows `Tuple`s to be rendered as a string with `show` whenever there are
--  | `Show` instances for both component types.
--  | Allows `Tuple`s to be checked for equality with `==` and `/=` whenever
--  | there are `Eq` instances for both component types.
--  | Allows `Tuple`s to be compared with `compare`, `>`, `>=`, `<` and `<=`
--  | whenever there are `Ord` instances for both component types. To obtain
--  | the result, the `fst`s are `compare`d, and if they are `EQ`ual, the
--  | `snd`s are `compare`d.
--  | The `Semigroup` instance enables use of the associative operator `<>` on
--  | `Tuple`s whenever there are `Semigroup` instances for the component
--  | types. The `<>` operator is applied pairwise, so:
--  | ```purescript
--  | (Tuple a1 b1) <> (Tuple a2 b2) = Tuple (a1 <> a2) (b1 <> b2)
--  | ```
--  | The `Functor` instance allows functions to transform the contents of a
--  | `Tuple` with the `<$>` operator, applying the function to the second
--  | component, so:
--  | ```purescript
--  | f <$> (Tuple x y) = Tuple x (f y)
--  | ````
--  | The `Functor` instance allows functions to transform the contents of a
--  | `Tuple` with the `<*>` operator whenever there is a `Semigroup` instance
--  | for the `fst` component, so:
--  | ```purescript
--  | (Tuple a1 f) <*> (Tuple a2 x) == Tuple (a1 <> a2) (f x)
--  | ```
--  | Rakes two lists and returns a list of corresponding pairs.
--  | If one input list is short, excess elements of the longer list are discarded.
--  | Transforms a list of pairs into a list of first components and a list of
--  | second components.
--  | Turn a function of two arguments into a function that expects a tuple.
--  | Exchange the first and second components of a tuple.
--  | Returns the second component of a tuple.
--  | Allows `Tuple`s to be rendered as a string with `show` whenever there are
--  | `Show` instances for both component types.
--  | The `Semigroup` instance enables use of the associative operator `<>` on
--  | `Tuple`s whenever there are `Semigroup` instances for the component
--  | types. The `<>` operator is applied pairwise, so:
--  | ```purescript
--  | (Tuple a1 b1) <> (Tuple a2 b2) = Tuple (a1 <> a2) (b1 <> b2)
--  | ```
--  | The `Functor` instance allows functions to transform the contents of a
--  | `Tuple` with the `<$>` operator, applying the function to the second
--  | component, so:
--  | ```purescript
--  | f <$> (Tuple x y) = Tuple x (f y)
--  | ````
--  | Returns the first component of a tuple.
--  | Allows `Tuple`s to be checked for equality with `==` and `/=` whenever
--  | there are `Eq` instances for both component types.
--  | Allows `Tuple`s to be compared with `compare`, `>`, `>=`, `<` and `<=`
--  | whenever there are `Ord` instances for both component types. To obtain
--  | the result, the `fst`s are `compare`d, and if they are `EQ`ual, the
--  | `snd`s are `compare`d.
--  | Turn a function that expects a tuple into a function of two arguments.
--  | The `Functor` instance allows functions to transform the contents of a
--  | `Tuple` with the `<*>` operator whenever there is a `Semigroup` instance
--  | for the `fst` component, so:
--  | ```purescript
--  | (Tuple a1 f) <*> (Tuple a2 x) == Tuple (a1 <> a2) (f x)
--  | ```
data Tuple (a :: *) (b :: *) = Tuple a b
foreign import swap :: forall a b. Data.Tuple.Tuple a b -> Data.Tuple.Tuple b a
foreign import unzip :: forall a b. [Data.Tuple.Tuple a b] -> Data.Tuple.Tuple [a] [b]
foreign import zip :: forall a b. [a] -> [b] -> [Data.Tuple.Tuple a b]
foreign import uncurry :: forall a b c. (a -> b -> c) -> Data.Tuple.Tuple a b -> c
foreign import curry :: forall a b c. (Data.Tuple.Tuple a b -> c) -> a -> b -> c
foreign import snd :: forall a b. Data.Tuple.Tuple a b -> b
foreign import fst :: forall a b. Data.Tuple.Tuple a b -> a
foreign import instance showTuple :: (Prelude.Show a, Prelude.Show b) => Prelude.Show (Data.Tuple.Tuple a b)
foreign import instance eqTuple :: (Prelude.Eq a, Prelude.Eq b) => Prelude.Eq (Data.Tuple.Tuple a b)
foreign import instance ordTuple :: (Prelude.Ord a, Prelude.Ord b) => Prelude.Ord (Data.Tuple.Tuple a b)
foreign import instance semigroupoidTuple :: Prelude.Semigroupoid Data.Tuple.Tuple
foreign import instance semigroupTuple :: (Prelude.Semigroup a, Prelude.Semigroup b) => Prelude.Semigroup (Data.Tuple.Tuple a b)
foreign import instance monoidTuple :: (Data.Monoid.Monoid a, Data.Monoid.Monoid b) => Data.Monoid.Monoid (Data.Tuple.Tuple a b)
foreign import instance functorTuple :: Prelude.Functor (Data.Tuple.Tuple a)
foreign import instance applyTuple :: (Prelude.Semigroup a) => Prelude.Apply (Data.Tuple.Tuple a)
foreign import instance applicativeTuple :: (Data.Monoid.Monoid a) => Prelude.Applicative (Data.Tuple.Tuple a)
foreign import instance bindTuple :: (Prelude.Semigroup a) => Prelude.Bind (Data.Tuple.Tuple a)
foreign import instance monadTuple :: (Data.Monoid.Monoid a) => Prelude.Monad (Data.Tuple.Tuple a)
foreign import instance extendTuple :: Control.Extend.Extend (Data.Tuple.Tuple a)
foreign import instance comonadTuple :: Control.Comonad.Comonad (Data.Tuple.Tuple a)
foreign import instance lazyTuple :: (Control.Lazy.Lazy a, Control.Lazy.Lazy b) => Control.Lazy.Lazy (Data.Tuple.Tuple a b)
foreign import instance lazyLazy1Tuple :: (Control.Lazy.Lazy1 l1, Control.Lazy.Lazy1 l2) => Control.Lazy.Lazy (Data.Tuple.Tuple (l1 a) (l2 b))
foreign import instance lazyLazy2Tuple :: (Control.Lazy.Lazy2 l1, Control.Lazy.Lazy2 l2) => Control.Lazy.Lazy (Data.Tuple.Tuple (l1 a b) (l2 c d))
