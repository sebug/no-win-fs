-- Generated by psc-make version 0.6.8
module Data.Bifunctor.Product where
import Data.Bifunctor ()
import Control.Biapply ()
import Control.Biapplicative ()
import Data.Monoid.Endo ()
import Data.Bifoldable ()
import Prelude ()
import Data.Monoid.Dual ()
import Data.Bitraversable ()
import Prim ()
import Prelude ()
import Data.Bifoldable ()
import Data.Bifunctor ()
import Data.Bitraversable ()
import Data.Foldable ()
import Data.Monoid ()
import Data.Monoid.Dual ()
import Data.Monoid.Endo ()
import Data.Traversable ()
import Control.Apply ()
import Control.Biapplicative ()
import Control.Biapply ()
--  | The product of two `Bifunctor`s.
--  todo: simplify bifoldr/bifoldl a little bit
--  todo: simplify bifoldr/bifoldl a little bit
data Product (f :: * -> * -> *) (g :: * -> * -> *) (a :: *) (b :: *) = Pair (f a b) (g a b)
foreign import instance productBifunctor :: (Data.Bifunctor.Bifunctor f, Data.Bifunctor.Bifunctor g) => Data.Bifunctor.Bifunctor (Data.Bifunctor.Product.Product f g)
foreign import instance productBiapply :: (Control.Biapply.Biapply f, Control.Biapply.Biapply g) => Control.Biapply.Biapply (Data.Bifunctor.Product.Product f g)
foreign import instance productBiapplicative :: (Control.Biapplicative.Biapplicative f, Control.Biapplicative.Biapplicative g) => Control.Biapplicative.Biapplicative (Data.Bifunctor.Product.Product f g)
foreign import instance productBifoldable :: (Data.Bifoldable.Bifoldable f, Data.Bifoldable.Bifoldable g) => Data.Bifoldable.Bifoldable (Data.Bifunctor.Product.Product f g)
foreign import instance productBitraversable :: (Data.Bitraversable.Bitraversable f, Data.Bitraversable.Bitraversable g) => Data.Bitraversable.Bitraversable (Data.Bifunctor.Product.Product f g)
