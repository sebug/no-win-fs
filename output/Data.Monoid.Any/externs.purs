-- Generated by psc-make version 0.6.8
module Data.Monoid.Any where
import Prelude ()
import Prim ()
import Prelude ()
import Data.Monoid ()
--  | Boolean monoid and semigroup under disjunction.
--  |
--  | ``` purescript
--  | Any x <> Any y == Any (x || y)
--  | mempty :: Any == Any false
--  | ```
newtype Any = Any Prim.Boolean
foreign import runAny :: Data.Monoid.Any.Any -> Prim.Boolean
foreign import instance eqAny :: Prelude.Eq Data.Monoid.Any.Any
foreign import instance ordAny :: Prelude.Ord Data.Monoid.Any.Any
foreign import instance showAny :: Prelude.Show Data.Monoid.Any.Any
foreign import instance semigroupAny :: Prelude.Semigroup Data.Monoid.Any.Any
foreign import instance monoidAny :: Data.Monoid.Monoid Data.Monoid.Any.Any
