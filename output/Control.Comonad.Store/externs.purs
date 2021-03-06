-- Generated by psc-make version 0.6.8
module Control.Comonad.Store where
import Data.Tuple ()
import Prelude ()
import Data.Identity ()
import Control.Comonad.Store.Trans ()
import Prim ()
import Prelude ()
import Control.Comonad.Store.Trans ()
import Data.Identity ()
import Data.Tuple ()
--  | The `Store` comonad is a synonym for the `StoreT` comonad transformer, applied
--  | to the `Identity` monad.
--  | Create a value in context in the `Store` comonad.
--  | Unwrap a value in the `Store` comonad.
type Store (s :: *) (a :: *) = Control.Comonad.Store.Trans.StoreT s Data.Identity.Identity a
foreign import store :: forall s a. (s -> a) -> s -> Control.Comonad.Store.Store s a
foreign import runStore :: forall s a. Control.Comonad.Store.Store s a -> Data.Tuple.Tuple (s -> a) s
