-- Generated by psc-make version 0.6.8
module Data.Foreign.Class where
import Prelude ()
import Data.Foreign ()
import Data.Traversable ()
import Data.Array ()
import Data.Foreign.Class ()
import Data.Foreign.Null ()
import Data.Foreign.Undefined ()
import Data.Foreign.NullOrUndefined ()
import Data.Either ()
import Data.Foreign.Index ()
import Prim ()
import Prelude ()
import Data.Array ()
import Data.Foreign ()
import Data.Foreign.Index ()
import Data.Foreign.Null ()
import Data.Foreign.Undefined ()
import Data.Foreign.NullOrUndefined ()
import Data.Traversable ()
import Data.Either ()
--  | A type class instance for this class can be written for a type if it
--  | is possible to attempt to _safely_ coerce a `Foreign` value to that
--  | type.
--  |
--  | Instances are provided for standard data structures, and the `F` monad
--  | can be used to construct instances for new data structures.
--  | A type class instance for this class can be written for a type if it
--  | is possible to attempt to _safely_ coerce a `Foreign` value to that
--  | type.
--  |
--  | Instances are provided for standard data structures, and the `F` monad
--  | can be used to construct instances for new data structures.
--  | A type class instance for this class can be written for a type if it
--  | is possible to attempt to _safely_ coerce a `Foreign` value to that
--  | type.
--  |
--  | Instances are provided for standard data structures, and the `F` monad
--  | can be used to construct instances for new data structures.
--  | Attempt to read a data structure from a JSON string
--  | Attempt to read a foreign value, handling errors using the specified function
--  | Attempt to read a property of a foreign value at the specified index
class IsForeign a where
  read :: Data.Foreign.Foreign -> Data.Foreign.F a
foreign import readProp :: forall a i. (Data.Foreign.Class.IsForeign a, Data.Foreign.Index.Index i) => i -> Data.Foreign.Foreign -> Data.Foreign.F a
foreign import readWith :: forall a e. (Data.Foreign.Class.IsForeign a) => (Data.Foreign.ForeignError -> e) -> Data.Foreign.Foreign -> Data.Either.Either e a
foreign import readJSON :: forall a. (Data.Foreign.Class.IsForeign a) => Prim.String -> Data.Foreign.F a
foreign import instance foreignIsForeign :: Data.Foreign.Class.IsForeign Data.Foreign.Foreign
foreign import instance stringIsForeign :: Data.Foreign.Class.IsForeign Prim.String
foreign import instance booleanIsForeign :: Data.Foreign.Class.IsForeign Prim.Boolean
foreign import instance numberIsForeign :: Data.Foreign.Class.IsForeign Prim.Number
foreign import instance arrayIsForeign :: (Data.Foreign.Class.IsForeign a) => Data.Foreign.Class.IsForeign [a]
foreign import instance nullIsForeign :: (Data.Foreign.Class.IsForeign a) => Data.Foreign.Class.IsForeign (Data.Foreign.Null.Null a)
foreign import instance undefinedIsForeign :: (Data.Foreign.Class.IsForeign a) => Data.Foreign.Class.IsForeign (Data.Foreign.Undefined.Undefined a)
foreign import instance nullOrUndefinedIsForeign :: (Data.Foreign.Class.IsForeign a) => Data.Foreign.Class.IsForeign (Data.Foreign.NullOrUndefined.NullOrUndefined a)
