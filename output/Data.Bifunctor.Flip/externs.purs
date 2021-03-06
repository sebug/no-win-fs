-- Generated by psc-make version 0.6.8
module Data.Bifunctor.Flip where
import Prelude ()
import Data.Bifunctor ()
import Data.Bifunctor.Flip ()
import Control.Biapply ()
import Control.Biapplicative ()
import Data.Bifoldable ()
import Data.Monoid ()
import Data.Bitraversable ()
import Data.Traversable ()
import Prim ()
import Prelude ()
import Data.Bifoldable ()
import Data.Bifunctor ()
import Data.Bitraversable ()
import Data.Foldable ()
import Data.Monoid ()
import Data.Traversable ()
import Control.Apply ()
import Control.Biapplicative ()
import Control.Biapply ()
--  | Flips the order of the type arguments of a `Bifunctor`, creating a
--  | `Functor` instance for the first type argument.
--  | Remove the `Flip` constructor.
data Flip (p :: * -> * -> *) (a :: *) (b :: *) = Flip (p b a)
foreign import runFlip :: forall p a b. Data.Bifunctor.Flip.Flip p a b -> p b a
foreign import instance flipBifunctor :: (Data.Bifunctor.Bifunctor p) => Data.Bifunctor.Bifunctor (Data.Bifunctor.Flip.Flip p)
foreign import instance flipFunctor :: (Data.Bifunctor.Bifunctor p) => Prelude.Functor (Data.Bifunctor.Flip.Flip p a)
foreign import instance flipBiapply :: (Control.Biapply.Biapply p) => Control.Biapply.Biapply (Data.Bifunctor.Flip.Flip p)
foreign import instance flipBiapplicative :: (Control.Biapplicative.Biapplicative p) => Control.Biapplicative.Biapplicative (Data.Bifunctor.Flip.Flip p)
foreign import instance flipBifoldable :: (Data.Bifoldable.Bifoldable p) => Data.Bifoldable.Bifoldable (Data.Bifunctor.Flip.Flip p)
foreign import instance flipFoldable :: (Data.Bifoldable.Bifoldable p) => Data.Foldable.Foldable (Data.Bifunctor.Flip.Flip p a)
foreign import instance flipBitraversable :: (Data.Bitraversable.Bitraversable p) => Data.Bitraversable.Bitraversable (Data.Bifunctor.Flip.Flip p)
foreign import instance flipTraversable :: (Data.Bitraversable.Bitraversable p) => Data.Traversable.Traversable (Data.Bifunctor.Flip.Flip p a)
