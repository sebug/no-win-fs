-- Generated by psc-make version 0.6.8
module Control.Monad.Aff.Class where
import Prelude ()
import Prim ()
import Prelude ()
import Control.Monad.Aff ()
class MonadAff e m where
  liftAff :: forall a. Control.Monad.Aff.Aff e a -> m a
foreign import instance monadAffAff :: Control.Monad.Aff.Class.MonadAff e (Control.Monad.Aff.Aff e)
