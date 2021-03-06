-- Generated by psc-make version 0.6.8
module Control.Monad.Eff.Ref where
import Control.Monad.Eff.Ref ()
import Prelude ()
import Prim ()
import Prelude ()
import Control.Monad.Eff ()
--  | The effect associated with the use of global mutable variables.
--  | A value of type `RefVal a` represents a mutable reference
--  | which holds a value of type `a`.
--  | Create a new mutable reference containing the specified value.
--  | Read the current value of a mutable reference
--  | Update the value of a mutable reference by applying a function
--  | to the current value.
--  | Update the value of a mutable reference to the specified value.
--  | Update the value of a mutable reference by applying a function
--  | to the current value.
foreign import data RefVal :: * -> *
foreign import data Ref :: !
foreign import writeRef :: forall s r. Control.Monad.Eff.Ref.RefVal s -> s -> Control.Monad.Eff.Eff (ref :: Control.Monad.Eff.Ref.Ref | r) Prelude.Unit
foreign import modifyRef :: forall s r. Control.Monad.Eff.Ref.RefVal s -> (s -> s) -> Control.Monad.Eff.Eff (ref :: Control.Monad.Eff.Ref.Ref | r) Prelude.Unit
foreign import modifyRef' :: forall s b r. Control.Monad.Eff.Ref.RefVal s -> (s -> { retVal :: b, newState :: s }) -> Control.Monad.Eff.Eff (ref :: Control.Monad.Eff.Ref.Ref | r) b
foreign import readRef :: forall s r. Control.Monad.Eff.Ref.RefVal s -> Control.Monad.Eff.Eff (ref :: Control.Monad.Eff.Ref.Ref | r) s
foreign import newRef :: forall s r. s -> Control.Monad.Eff.Eff (ref :: Control.Monad.Eff.Ref.Ref | r) (Control.Monad.Eff.Ref.RefVal s)
