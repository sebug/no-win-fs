-- Generated by psc-make version 0.6.8
module Data.Bifunctor.Join where
import Prelude ()
import Data.Bifunctor ()
import Data.Bifunctor.Join ()
import Control.Biapply ()
import Control.Biapplicative ()
import Data.Bifoldable ()
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
--  | `Join` turns a `Bifunctor` into a `Functor` by equating the
--  | two type arguments.
--  | Remove the `Join` constructor.
data Join (p :: * -> * -> *) (a :: *) = Join (p a a)
foreign import runJoin :: forall p a. Data.Bifunctor.Join.Join p a -> p a a
foreign import instance joinFunctor :: (Data.Bifunctor.Bifunctor p) => Prelude.Functor (Data.Bifunctor.Join.Join p)
foreign import instance joinApply :: (Control.Biapply.Biapply p) => Prelude.Apply (Data.Bifunctor.Join.Join p)
foreign import instance joinApplicative :: (Control.Biapplicative.Biapplicative p) => Prelude.Applicative (Data.Bifunctor.Join.Join p)
foreign import instance joinFoldable :: (Data.Bifoldable.Bifoldable p) => Data.Foldable.Foldable (Data.Bifunctor.Join.Join p)
foreign import instance joinTraversable :: (Data.Bitraversable.Bitraversable p) => Data.Traversable.Traversable (Data.Bifunctor.Join.Join p)
