-- Generated by psc-make version 0.6.8
module Control.Monad.Aff.Par where
import Prelude ()
import Data.Monoid ()
import Control.Monad.Aff.AVar ()
import Control.Monad.Aff ()
import Data.Either ()
import Control.Plus ()
import Prim ()
import Prelude ()
import Control.Monad.Aff ()
import Control.Monad.Aff.AVar ()
import Data.Either ()
import Data.Monoid ()
import Control.Apply ()
import Control.Alt ()
import Control.Plus ()
import Control.Alternative ()
import Control.Monad.Error.Class ()
--  | Returns the first value, or the first error if both error.
--  | Extracts the `Aff` from the `Par`.
--  | Returns the first value, or the first error if both error.
newtype Par (e :: # !) (a :: *) = Par (Control.Monad.Aff.AVar.AffAVar e a)
foreign import runPar :: forall e a. Control.Monad.Aff.Par.Par e a -> Control.Monad.Aff.AVar.AffAVar e a
foreign import instance semigroupPar :: (Prelude.Semigroup a) => Prelude.Semigroup (Control.Monad.Aff.Par.Par e a)
foreign import instance monoidPar :: (Data.Monoid.Monoid a) => Data.Monoid.Monoid (Control.Monad.Aff.Par.Par e a)
foreign import instance functorPar :: Prelude.Functor (Control.Monad.Aff.Par.Par e)
foreign import instance applyPar :: Prelude.Apply (Control.Monad.Aff.Par.Par e)
foreign import instance applicativePar :: Prelude.Applicative (Control.Monad.Aff.Par.Par e)
foreign import instance altPar :: Control.Alt.Alt (Control.Monad.Aff.Par.Par e)
foreign import instance plusPar :: Control.Plus.Plus (Control.Monad.Aff.Par.Par e)
foreign import instance alternativePar :: Control.Alternative.Alternative (Control.Monad.Aff.Par.Par e)
