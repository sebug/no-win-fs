-- Generated by psc-make version 0.6.8
module Halogen.Internal.VirtualDOM where
import Data.Function ()
import Halogen.Internal.VirtualDOM ()
import Prim ()
import Prelude ()
import DOM ()
import Data.DOM.Simple.Types ()
import Data.Int ()
import Data.Maybe ()
import Data.Monoid ()
import Data.Nullable ()
import Data.Function ()
import Control.Monad.Eff ()
import Control.Monad.ST ()
--  | A third-party widget
--  | Virtual DOM nodes
--  | Property collections
--  | Patch sets, used to update the DOM
--  | Create a property from a key/value pair.
--  | 
--  | Properties named `data-*` will be added as attributes, and any other properties will
--  | be set directly.
--  |
--  | Users should use caution when creating custom attributes, and understand how they will
--  | be added to the DOM here.
--  | Create a property from an event handler
--  | Create a property from an initializer
--  | Create a property from an finalizer
--  | Create a DOM node from a virtual DOM tree
--  | Calculate the differences between two virtual DOM trees
--  | Apply a set of patches to the DOM
--  | Create a virtual DOM tree which represents a single text node
--  | Create a virtual DOM tree which represents an element with properties
--  | Create a virtual DOM tree from a `Widget`
data Widget (eff :: # !) (i :: *)
data Props
data Patch
data VTree
foreign import widget :: forall eff res ctx val. Data.Function.Fn6 val Prim.String Prim.String ((res -> Control.Monad.Eff.Eff eff Prelude.Unit) -> Control.Monad.Eff.Eff eff { node :: Data.DOM.Simple.Types.HTMLElement, context :: ctx }) (Data.Function.Fn4 val val ctx Data.DOM.Simple.Types.HTMLElement (Control.Monad.Eff.Eff eff (Data.Nullable.Nullable Data.DOM.Simple.Types.HTMLElement))) (Data.Function.Fn2 ctx Data.DOM.Simple.Types.HTMLElement (Control.Monad.Eff.Eff eff Prelude.Unit)) (Halogen.Internal.VirtualDOM.Widget eff res)
foreign import vwidget :: forall eff i. (i -> Control.Monad.Eff.Eff eff Prelude.Unit) -> Halogen.Internal.VirtualDOM.Widget eff i -> Halogen.Internal.VirtualDOM.VTree
foreign import vnode :: Prim.String -> Halogen.Internal.VirtualDOM.Props -> [Halogen.Internal.VirtualDOM.VTree] -> Halogen.Internal.VirtualDOM.VTree
foreign import vtext :: Prim.String -> Halogen.Internal.VirtualDOM.VTree
foreign import patch :: forall eff. Halogen.Internal.VirtualDOM.Patch -> Data.DOM.Simple.Types.HTMLElement -> Control.Monad.Eff.Eff (dom :: DOM.DOM | eff) Data.DOM.Simple.Types.HTMLElement
foreign import diff :: Halogen.Internal.VirtualDOM.VTree -> Halogen.Internal.VirtualDOM.VTree -> Halogen.Internal.VirtualDOM.Patch
foreign import createElement :: Halogen.Internal.VirtualDOM.VTree -> Data.DOM.Simple.Types.HTMLElement
foreign import finalizerProp :: forall eff. Control.Monad.Eff.Eff eff Prelude.Unit -> Halogen.Internal.VirtualDOM.Props
foreign import initProp :: forall eff. Control.Monad.Eff.Eff eff Prelude.Unit -> Halogen.Internal.VirtualDOM.Props
foreign import handlerProp :: forall eff event. Data.Function.Fn2 Prim.String (event -> Control.Monad.Eff.Eff eff Prelude.Unit) Halogen.Internal.VirtualDOM.Props
foreign import prop :: forall value. Data.Function.Fn2 Prim.String value Halogen.Internal.VirtualDOM.Props
foreign import emptyProps :: Halogen.Internal.VirtualDOM.Props
foreign import instance semigroupProps :: Prelude.Semigroup Halogen.Internal.VirtualDOM.Props
foreign import instance monoidProps :: Data.Monoid.Monoid Halogen.Internal.VirtualDOM.Props
foreign import instance functorWidget :: Prelude.Functor (Halogen.Internal.VirtualDOM.Widget eff)
