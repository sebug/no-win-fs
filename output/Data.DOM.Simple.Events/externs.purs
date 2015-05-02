-- Generated by psc-make version 0.6.8
module Data.DOM.Simple.Events where
import Data.DOM.Simple.Unsafe.Events ()
import Prelude ()
import Data.DOM.Simple.Events ()
import Prim ()
import Prelude ()
import Control.Monad.Eff ()
import Control.Monad ()
import Data.DOM.Simple.Types ()
import Data.DOM.Simple.Window ()
import Data.DOM.Simple.Ajax ()
import Data.DOM.Simple.Unsafe.Events ()
import DOM ()
{-  UI Events  -}
--  XXX this is slightly ham-handed, since
--  <http://www.w3.org/TR/DOM-Level-3-Events/#interface-UIEvent>
--  specifies that only some kinds of elements are valid targets for
--  each of these events.  Might make to refactor more carefully based
--  on what targets can accept what handlers.
--  XXX Should this be in the Prelude?
{-  Mouse Events  -}
{-  Keyboard Events  -}
{-  Generic properties and methods available on all events.  -}
--  XXX Should this be in the Prelude?
{-  Generic properties and methods available on all events.  -}
--  XXX this should really be returning an HTMLAbstractView...
{-  Generic properties and methods available on all events.  -}
--  XXX Should this be in the Prelude?
{-  Generic properties and methods available on all events.  -}
{-  Generic properties and methods available on all events.  -}
data UIEventType = LoadEvent  | UnloadEvent  | AbortEvent  | ErrorEvent  | SelectEvent  | ResizeEvent  | ScrollEvent 
data KeyLocation = KeyLocationStandard  | KeyLocationLeft  | KeyLocationRight  | KeyLocationNumpad 
data KeyboardEventType = KeydownEvent  | KeypressEvent  | KeyupEvent 
data MouseEventType = MouseMoveEvent  | MouseOverEvent  | MouseEnterEvent  | MouseOutEvent  | MouseLeaveEvent 
class UIEventTarget b where
  addUIEventListener :: forall e t ta. (Data.DOM.Simple.Events.UIEvent e) => Data.DOM.Simple.Events.UIEventType -> (e -> Control.Monad.Eff.Eff (dom :: DOM.DOM | t) Prelude.Unit) -> b -> Control.Monad.Eff.Eff (dom :: DOM.DOM | ta) Prelude.Unit
  removeUIEventListener :: forall e t ta. (Data.DOM.Simple.Events.UIEvent e) => Data.DOM.Simple.Events.UIEventType -> (e -> Control.Monad.Eff.Eff (dom :: DOM.DOM | t) Prelude.Unit) -> b -> Control.Monad.Eff.Eff (dom :: DOM.DOM | ta) Prelude.Unit
class (Data.DOM.Simple.Events.Event e) <= UIEvent e where
  view :: forall eff. e -> Control.Monad.Eff.Eff (dom :: DOM.DOM | eff) Data.DOM.Simple.Types.HTMLWindow
  detail :: forall eff. e -> Control.Monad.Eff.Eff (dom :: DOM.DOM | eff) Prim.Number
class KeyboardEventTarget b where
  addKeyboardEventListener :: forall e t ta. (Data.DOM.Simple.Events.KeyboardEvent e) => Data.DOM.Simple.Events.KeyboardEventType -> (e -> Control.Monad.Eff.Eff (dom :: DOM.DOM | t) Prelude.Unit) -> b -> Control.Monad.Eff.Eff (dom :: DOM.DOM | ta) Prelude.Unit
  removeKeyboardEventListener :: forall e t ta. (Data.DOM.Simple.Events.KeyboardEvent e) => Data.DOM.Simple.Events.KeyboardEventType -> (e -> Control.Monad.Eff.Eff (dom :: DOM.DOM | t) Prelude.Unit) -> b -> Control.Monad.Eff.Eff (dom :: DOM.DOM | ta) Prelude.Unit
class (Data.DOM.Simple.Events.Event e) <= KeyboardEvent e where
  keyboardEventType :: forall eff. e -> Control.Monad.Eff.Eff (dom :: DOM.DOM | eff) Data.DOM.Simple.Events.KeyboardEventType
  key :: forall eff. e -> Control.Monad.Eff.Eff (dom :: DOM.DOM | eff) Prim.String
  keyCode :: forall eff. e -> Control.Monad.Eff.Eff (dom :: DOM.DOM | eff) Prim.Number
  keyLocation :: forall eff. e -> Control.Monad.Eff.Eff (dom :: DOM.DOM | eff) Data.DOM.Simple.Events.KeyLocation
  altKey :: forall eff. e -> Control.Monad.Eff.Eff (dom :: DOM.DOM | eff) Prim.Boolean
  ctrlKey :: forall eff. e -> Control.Monad.Eff.Eff (dom :: DOM.DOM | eff) Prim.Boolean
  metaKey :: forall eff. e -> Control.Monad.Eff.Eff (dom :: DOM.DOM | eff) Prim.Boolean
  shiftKey :: forall eff. e -> Control.Monad.Eff.Eff (dom :: DOM.DOM | eff) Prim.Boolean
class MouseEventTarget b where
  addMouseEventListener :: forall e t ta. (Data.DOM.Simple.Events.MouseEvent e) => Data.DOM.Simple.Events.MouseEventType -> (e -> Control.Monad.Eff.Eff (dom :: DOM.DOM | t) Prelude.Unit) -> b -> Control.Monad.Eff.Eff (dom :: DOM.DOM | ta) Prelude.Unit
  removeMouseEventListener :: forall e t ta. (Data.DOM.Simple.Events.MouseEvent e) => Data.DOM.Simple.Events.MouseEventType -> (e -> Control.Monad.Eff.Eff (dom :: DOM.DOM | t) Prelude.Unit) -> b -> Control.Monad.Eff.Eff (dom :: DOM.DOM | ta) Prelude.Unit
class (Data.DOM.Simple.Events.Event e) <= MouseEvent e where
  mouseEventType :: forall eff. e -> Control.Monad.Eff.Eff (dom :: DOM.DOM | eff) Data.DOM.Simple.Events.MouseEventType
  screenX :: forall eff. e -> Control.Monad.Eff.Eff (dom :: DOM.DOM | eff) Prim.Number
  screenY :: forall eff. e -> Control.Monad.Eff.Eff (dom :: DOM.DOM | eff) Prim.Number
class Event e where
  eventTarget :: forall eff a. e -> Control.Monad.Eff.Eff (dom :: DOM.DOM | eff) a
  stopPropagation :: forall eff. e -> Control.Monad.Eff.Eff (dom :: DOM.DOM | eff) Prelude.Unit
  preventDefault :: forall eff. e -> Control.Monad.Eff.Eff (dom :: DOM.DOM | eff) Prelude.Unit
class Read s where
  read :: Prim.String -> s
foreign import toKeyLocation :: Prim.Number -> Data.DOM.Simple.Events.KeyLocation
foreign import instance eventDOMEvent :: Data.DOM.Simple.Events.Event Data.DOM.Simple.Types.DOMEvent
foreign import instance mouseEventTypeShow :: Prelude.Show Data.DOM.Simple.Events.MouseEventType
foreign import instance mouseEventTypeRead :: Data.DOM.Simple.Events.Read Data.DOM.Simple.Events.MouseEventType
foreign import instance mouseEventDOMEvent :: Data.DOM.Simple.Events.MouseEvent Data.DOM.Simple.Types.DOMEvent
foreign import instance mouseEventTargetHTMLWindow :: Data.DOM.Simple.Events.MouseEventTarget Data.DOM.Simple.Types.HTMLWindow
foreign import instance mouseEventTargetHTMLDocument :: Data.DOM.Simple.Events.MouseEventTarget Data.DOM.Simple.Types.HTMLDocument
foreign import instance mouseEventTargetHTMLElement :: Data.DOM.Simple.Events.MouseEventTarget Data.DOM.Simple.Types.HTMLElement
foreign import instance keyboardEventTypeShow :: Prelude.Show Data.DOM.Simple.Events.KeyboardEventType
foreign import instance keyboardEventTypeRead :: Data.DOM.Simple.Events.Read Data.DOM.Simple.Events.KeyboardEventType
foreign import instance keyboardEventDOMEvent :: Data.DOM.Simple.Events.KeyboardEvent Data.DOM.Simple.Types.DOMEvent
foreign import instance keyboardEventTargetHTMLWindow :: Data.DOM.Simple.Events.KeyboardEventTarget Data.DOM.Simple.Types.HTMLWindow
foreign import instance keyboardEventTargetHTMLDocument :: Data.DOM.Simple.Events.KeyboardEventTarget Data.DOM.Simple.Types.HTMLDocument
foreign import instance keyboardEventTargetHTMLElement :: Data.DOM.Simple.Events.KeyboardEventTarget Data.DOM.Simple.Types.HTMLElement
foreign import instance uiEventTypeShow :: Prelude.Show Data.DOM.Simple.Events.UIEventType
foreign import instance uiEventTypeRead :: Data.DOM.Simple.Events.Read Data.DOM.Simple.Events.UIEventType
foreign import instance uiEventDOMEvent :: Data.DOM.Simple.Events.UIEvent Data.DOM.Simple.Types.DOMEvent
foreign import instance uiEventTargetHTMLWindow :: Data.DOM.Simple.Events.UIEventTarget Data.DOM.Simple.Types.HTMLWindow