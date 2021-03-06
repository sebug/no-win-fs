-- Generated by psc-make version 0.6.8
module Halogen.HTML.Events.Handler where
import Control.Monad.Writer.Class ()
import Prelude ()
import Halogen.HTML.Events.Handler ()
import Control.Monad.Writer ()
import Control.Apply ()
import Data.Foldable ()
import Prim ()
import Prelude ()
import DOM ()
import Data.Maybe ()
import Data.Tuple ()
import Data.Array ()
import Data.Foldable ()
import Control.Apply ()
import Control.Plus ()
import Control.Monad.Eff ()
import Control.Monad.Writer ()
import Control.Monad.Writer.Trans ()
import Control.Monad.Writer.Class ()
import Halogen.HTML.Events.Types ()
--  | This monad supports the following operations on events:
--  |
--  | - `preventDefault`
--  | - `stopPropagation`
--  | - `stopImmediatePropagation`
--  |
--  | It can be used as follows:
--  |
--  | ```purescript
--  | import Control.Functor (($>))
--  |
--  | H.a (E.onclick \_ -> E.preventDefault $> ClickHandler) (H.text "Click here")
--  | ```
--  | Call the `stopPropagation` method on the current event
--  | Call the `stopImmediatePropagation` method on the current event
--  | This function can be used to update an event and return the wrapped value
--  | Call the `preventDefault` method on the current event
data EventHandler (a :: *)
foreign import runEventHandler :: forall a fields eff. Halogen.HTML.Events.Types.Event fields -> Halogen.HTML.Events.Handler.EventHandler a -> Control.Monad.Eff.Eff (dom :: DOM.DOM | eff) a
foreign import stopImmediatePropagation :: Halogen.HTML.Events.Handler.EventHandler Prelude.Unit
foreign import stopPropagation :: Halogen.HTML.Events.Handler.EventHandler Prelude.Unit
foreign import preventDefault :: Halogen.HTML.Events.Handler.EventHandler Prelude.Unit
foreign import instance functorEventHandler :: Prelude.Functor Halogen.HTML.Events.Handler.EventHandler
foreign import instance applyEventHandler :: Prelude.Apply Halogen.HTML.Events.Handler.EventHandler
foreign import instance applicativeEventHandler :: Prelude.Applicative Halogen.HTML.Events.Handler.EventHandler
foreign import instance bindEventHandler :: Prelude.Bind Halogen.HTML.Events.Handler.EventHandler
foreign import instance monadEventHandler :: Prelude.Monad Halogen.HTML.Events.Handler.EventHandler
