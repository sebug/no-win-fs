-- Generated by psc-make version 0.6.8
module Control.Monad.Eff.Class where
import Prelude ()
import Control.Monad.Trans ()
import Control.Monad.Eff.Class ()
import Prim ()
import Prelude ()
import Data.Monoid ()
import Control.Monad.Eff ()
import Control.Monad.Maybe.Trans ()
import Control.Monad.Error.Trans ()
import Control.Monad.State.Trans ()
import Control.Monad.Writer.Trans ()
import Control.Monad.Reader.Trans ()
import Control.Monad.RWS.Trans ()
import Control.Monad.Trans ()
--  | The `MonadEff` class captures those monads which support native effects.
--  |
--  | Instances are provided for `Eff` itself, and the standard monad transformers.
--  |
--  | `liftEff` can be used in any appropriate monad transformer stack to lift an action
--  | of type `Eff eff a` into the monad.
--  |
--  | Note that `MonadEff` is parameterized by the row of effects, so type inference can be
--  | tricky. It is generally recommended to either work with a polymorphic row of effects,
--  | or a concrete, closed row of effects such as `(trace :: Trace)`.
--  | The `MonadEff` class captures those monads which support native effects.
--  |
--  | Instances are provided for `Eff` itself, and the standard monad transformers.
--  |
--  | `liftEff` can be used in any appropriate monad transformer stack to lift an action
--  | of type `Eff eff a` into the monad.
--  |
--  | Note that `MonadEff` is parameterized by the row of effects, so type inference can be
--  | tricky. It is generally recommended to either work with a polymorphic row of effects,
--  | or a concrete, closed row of effects such as `(trace :: Trace)`.
--  | The `MonadEff` class captures those monads which support native effects.
--  |
--  | Instances are provided for `Eff` itself, and the standard monad transformers.
--  |
--  | `liftEff` can be used in any appropriate monad transformer stack to lift an action
--  | of type `Eff eff a` into the monad.
--  |
--  | Note that `MonadEff` is parameterized by the row of effects, so type inference can be
--  | tricky. It is generally recommended to either work with a polymorphic row of effects,
--  | or a concrete, closed row of effects such as `(trace :: Trace)`.
class (Prelude.Monad m) <= MonadEff eff m where
  liftEff :: forall a. Control.Monad.Eff.Eff eff a -> m a
foreign import instance monadEffEff :: Control.Monad.Eff.Class.MonadEff eff (Control.Monad.Eff.Eff eff)
foreign import instance monadEffMaybe :: (Prelude.Monad m, Control.Monad.Eff.Class.MonadEff eff m) => Control.Monad.Eff.Class.MonadEff eff (Control.Monad.Maybe.Trans.MaybeT m)
foreign import instance monadEffError :: (Prelude.Monad m, Control.Monad.Eff.Class.MonadEff eff m) => Control.Monad.Eff.Class.MonadEff eff (Control.Monad.Error.Trans.ErrorT e m)
foreign import instance monadEffState :: (Prelude.Monad m, Control.Monad.Eff.Class.MonadEff eff m) => Control.Monad.Eff.Class.MonadEff eff (Control.Monad.State.Trans.StateT s m)
foreign import instance monadEffWriter :: (Prelude.Monad m, Data.Monoid.Monoid w, Control.Monad.Eff.Class.MonadEff eff m) => Control.Monad.Eff.Class.MonadEff eff (Control.Monad.Writer.Trans.WriterT w m)
foreign import instance monadEffReader :: (Prelude.Monad m, Control.Monad.Eff.Class.MonadEff eff m) => Control.Monad.Eff.Class.MonadEff eff (Control.Monad.Reader.Trans.ReaderT r m)
foreign import instance monadEffRWS :: (Prelude.Monad m, Data.Monoid.Monoid w, Control.Monad.Eff.Class.MonadEff eff m) => Control.Monad.Eff.Class.MonadEff eff (Control.Monad.RWS.Trans.RWST r w s m)