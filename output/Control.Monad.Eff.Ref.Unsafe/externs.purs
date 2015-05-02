-- Generated by psc-make version 0.6.8
module Control.Monad.Eff.Ref.Unsafe where
import Prim ()
import Prelude ()
import Control.Monad.Eff ()
import Control.Monad.Eff.Ref ()
--  | This handler function unsafely removes the `Ref` effect from an
--  | effectful action.
--  |
--  | This function might be used when it is impossible to prove to the
--  | typechecker that a particular mutable reference does not escape
--  | its scope.
foreign import unsafeRunRef :: forall eff a. Control.Monad.Eff.Eff (ref :: Control.Monad.Eff.Ref.Ref | eff) a -> Control.Monad.Eff.Eff eff a
