-- Generated by psc-make version 0.6.8
module Data.DOM.Simple.NodeList where
import Data.DOM.Simple.Unsafe.NodeList ()
import Prelude ()
import Data.DOM.Simple.Unsafe.Utils ()
import Data.DOM.Simple.NodeList ()
import Data.Traversable ()
import Data.Array ()
import Prim ()
import Prelude ()
import DOM ()
import Control.Monad.Eff ()
import Data.Maybe ()
import Data.Array ()
import Data.Traversable ()
import Data.DOM.Simple.Unsafe.NodeList ()
import Data.DOM.Simple.Types ()
import Data.DOM.Simple.Unsafe.Utils ()
class NodeListInst b where
  length :: forall eff. b -> Control.Monad.Eff.Eff (dom :: DOM.DOM | eff) Prim.Number
  item :: forall eff. Prim.Number -> b -> Control.Monad.Eff.Eff (dom :: DOM.DOM | eff) (Data.Maybe.Maybe Data.DOM.Simple.Types.HTMLElement)
foreign import nodeListToArray' :: forall eff. DOM.NodeList -> Control.Monad.Eff.Eff (dom :: DOM.DOM | eff) [Data.DOM.Simple.Types.HTMLElement]
foreign import nodeListToArray :: forall eff. DOM.NodeList -> Control.Monad.Eff.Eff (dom :: DOM.DOM | eff) [Data.DOM.Simple.Types.HTMLElement]
foreign import instance nodeList :: Data.DOM.Simple.NodeList.NodeListInst DOM.NodeList
