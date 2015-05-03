-- Generated by psc-make version 0.6.8
module Halogen.Themes.Bootstrap3.InputGroup where
import Halogen.HTML ()
import Halogen.HTML.Attributes ()
import Halogen.Themes.Bootstrap3 ()
import Prelude ()
import Data.Foldable ()
import Prim ()
import Prelude ()
import Data.Maybe ()
import Data.Foldable ()
import Halogen.HTML ()
import Halogen.HTML.Attributes ()
import Halogen.Themes.Bootstrap3 ()
--  | Represents an input group add-on element
--  |
--  | We need to distinguish buttons from regular add-ons because of the 
--  | different CSS classes
--  | Create an input group.
--  |
--  | An input group consists of a control with optional elements placed before and after.
data AddOn (p :: *) (i :: *) = RegularAddOn (Halogen.HTML.HTML p i) | ButtonAddOn (Halogen.HTML.HTML p i)
foreign import inputGroup :: forall p i. Data.Maybe.Maybe (Halogen.Themes.Bootstrap3.InputGroup.AddOn p i) -> Halogen.HTML.HTML p i -> Data.Maybe.Maybe (Halogen.Themes.Bootstrap3.InputGroup.AddOn p i) -> Halogen.HTML.HTML p i