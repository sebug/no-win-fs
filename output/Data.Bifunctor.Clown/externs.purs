-- Generated by psc-make version 0.6.8
module Data.Bifunctor.Clown where
import Prelude ()
import Data.Bifunctor.Clown ()
import Data.Foldable ()
import Data.Monoid ()
import Data.Traversable ()
import Data.Bitraversable ()
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
data Clown (f :: * -> *) (a :: *) (b :: *) = Clown (f a)
foreign import runClown :: forall f a b. Data.Bifunctor.Clown.Clown f a b -> f a
foreign import instance clownBifunctor :: (Prelude.Functor f) => Data.Bifunctor.Bifunctor (Data.Bifunctor.Clown.Clown f)
foreign import instance clownFunctor :: Prelude.Functor (Data.Bifunctor.Clown.Clown f a)
foreign import instance clownBiapply :: (Prelude.Apply f) => Control.Biapply.Biapply (Data.Bifunctor.Clown.Clown f)
foreign import instance clownBiapplicative :: (Prelude.Applicative f) => Control.Biapplicative.Biapplicative (Data.Bifunctor.Clown.Clown f)
foreign import instance clownBifoldable :: (Data.Foldable.Foldable f) => Data.Bifoldable.Bifoldable (Data.Bifunctor.Clown.Clown f)
foreign import instance clownFoldable :: Data.Foldable.Foldable (Data.Bifunctor.Clown.Clown f a)
foreign import instance clownBitraversable :: (Data.Traversable.Traversable f) => Data.Bitraversable.Bitraversable (Data.Bifunctor.Clown.Clown f)
foreign import instance clownTraversable :: Data.Traversable.Traversable (Data.Bifunctor.Clown.Clown f a)