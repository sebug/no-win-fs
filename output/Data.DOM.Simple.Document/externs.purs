-- Generated by psc-make version 0.6.8
module Data.DOM.Simple.Document where
import Prelude ()
import Data.DOM.Simple.Unsafe.Element ()
import Data.DOM.Simple.Unsafe.Utils ()
import Data.DOM.Simple.Unsafe.Document ()
import Prim ()
import Prelude ()
import DOM ()
import Control.Monad.Eff ()
import Data.DOM.Simple.Types ()
import Data.DOM.Simple.Element ()
import Data.DOM.Simple.Unsafe.Utils ()
import Data.DOM.Simple.Unsafe.Element ()
import Data.DOM.Simple.Unsafe.Document ()
class Document b where
  title :: forall eff. b -> Control.Monad.Eff.Eff (dom :: DOM.DOM | eff) Prim.String
  setTitle :: forall eff. Prim.String -> b -> Control.Monad.Eff.Eff (dom :: DOM.DOM | eff) Prelude.Unit
  body :: forall eff. b -> Control.Monad.Eff.Eff (dom :: DOM.DOM | eff) Data.DOM.Simple.Types.HTMLElement
  setBody :: forall eff. Data.DOM.Simple.Types.HTMLElement -> b -> Control.Monad.Eff.Eff (dom :: DOM.DOM | eff) Prelude.Unit
foreign import instance htmlDocumentElement :: Data.DOM.Simple.Element.Element Data.DOM.Simple.Types.HTMLDocument
foreign import instance htmlDocument :: Data.DOM.Simple.Document.Document Data.DOM.Simple.Types.HTMLDocument
foreign import instance showHtmlDocument :: Prelude.Show Data.DOM.Simple.Types.HTMLDocument