-- Generated by psc-make version 0.6.8
module Halogen.HTML where
import Prelude ()
import Data.Bifunctor ()
import Halogen.HTML ()
import Data.Monoid ()
import Prim ()
import Prelude ()
import Data.Void ()
import Data.Maybe ()
import Data.Tuple ()
import Data.Foreign ()
import Data.Function ()
import Data.Monoid ()
import Data.StrMap ()
import Data.String ()
import Data.Foldable ()
import Data.Bifunctor ()
import Control.Monad.Eff ()
import Control.Monad.Eff.Unsafe ()
import Control.Monad.ST ()
import Halogen.Internal.VirtualDOM ()
import Halogen.HTML.Attributes ()
--  | A type-safe wrapper for a HTML tag name
--  | An initial encoding of HTML nodes.
--  | Create a tag name
--  | Unwrap a `TagName` to get the tag name as a `String`.
--  | Replace placeholder nodes with HTML documents.
data TagName
data HTML (p :: *) (i :: *) = Text Prim.String | Element Halogen.HTML.TagName [Halogen.HTML.Attributes.Attr i] [Halogen.HTML.HTML p i] | Placeholder p
foreign import wbr_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import wbr :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import video_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import video :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import var_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import var :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import ul_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import ul :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import u_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import u :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import tt_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import tt :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import track_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import track :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import tr_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import tr :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import title_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import title :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import time_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import time :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import thead_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import thead :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import th_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import th :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import tfoot_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import tfoot :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import textarea_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import textarea :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import td_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import td :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import tbody_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import tbody :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import table_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import table :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import sup_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import sup :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import summary_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import summary :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import sub_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import sub :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import style_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import style :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import strong_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import strong :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import strike_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import strike :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import span_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import span :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import source_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import source :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import small_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import small :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import select_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import select :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import section_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import section :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import script_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import script :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import samp_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import samp :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import s_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import s :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import ruby_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import ruby :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import rt_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import rt :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import rp_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import rp :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import q_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import q :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import progress_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import progress :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import pre_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import pre :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import param_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import param :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import p_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import p :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import output_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import output :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import option_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import option :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import optgroup_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import optgroup :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import ol_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import ol :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import object_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import object :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import noscript_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import noscript :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import noframes_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import noframes :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import nav_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import nav :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import meter_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import meter :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import meta_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import meta :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import menuitem_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import menuitem :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import menu_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import menu :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import mark_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import mark :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import map_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import map :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import main_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import main :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import link_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import link :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import li_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import li :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import legend_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import legend :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import label_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import label :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import keygen_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import keygen :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import kbd_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import kbd :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import ins_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import ins :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import input_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import input :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import img_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import img :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import iframe_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import iframe :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import i_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import i :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import html_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import html :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import hr_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import hr :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import header_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import header :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import head_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import head :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import h6_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import h6 :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import h5_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import h5 :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import h4_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import h4 :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import h3_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import h3 :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import h2_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import h2 :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import h1_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import h1 :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import frameset_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import frameset :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import frame_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import frame :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import form_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import form :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import footer_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import footer :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import font_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import font :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import figure_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import figure :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import figcaption_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import figcaption :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import fieldset_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import fieldset :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import embed_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import embed :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import em_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import em :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import dt_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import dt :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import dl_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import dl :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import div_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import div :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import dir_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import dir :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import dialog_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import dialog :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import dfn_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import dfn :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import details_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import details :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import del_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import del :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import dd_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import dd :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import datalist_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import datalist :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import colgroup_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import colgroup :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import col_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import col :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import code_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import code :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import cite_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import cite :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import center_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import center :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import caption_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import caption :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import canvas_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import canvas :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import button_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import button :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import br_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import br :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import body_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import body :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import blockquote_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import blockquote :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import big_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import big :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import bdo_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import bdo :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import bdi_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import bdi :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import basefont_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import basefont :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import base_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import base :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import b_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import b :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import audio_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import audio :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import aside_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import aside :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import article_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import article :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import area_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import area :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import applet_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import applet :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import address_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import address :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import acronym_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import acronym :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import abbr_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import abbr :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import a_ :: forall p i. [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import a :: forall p i. [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import runTagName :: Halogen.HTML.TagName -> Prim.String
foreign import tagName :: Prim.String -> Halogen.HTML.TagName
foreign import graft :: forall a b i. Halogen.HTML.HTML a i -> (a -> Halogen.HTML.HTML b i) -> Halogen.HTML.HTML b i
foreign import element :: forall p i. Halogen.HTML.TagName -> [Halogen.HTML.Attributes.Attr i] -> [Halogen.HTML.HTML p i] -> Halogen.HTML.HTML p i
foreign import placeholder :: forall p i. p -> Halogen.HTML.HTML p i
foreign import text :: forall p i. Prim.String -> Halogen.HTML.HTML p i
foreign import instance bifunctorHTML :: Data.Bifunctor.Bifunctor Halogen.HTML.HTML
foreign import instance functorHTML :: Prelude.Functor (Halogen.HTML.HTML p)