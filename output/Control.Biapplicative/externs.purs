-- Generated by psc-make version 0.6.8
module Control.Biapplicative where
import Prim ()
import Prelude ()
import Data.Const ()
import Data.Tuple ()
import Control.Biapply ()
--  | `Biapplicative` captures type constructors of two arguments which support lifting of
--  | functions of zero or more arguments, in the sense of `Applicative`.
--  | `Biapplicative` captures type constructors of two arguments which support lifting of
--  | functions of zero or more arguments, in the sense of `Applicative`.
--  | `Biapplicative` captures type constructors of two arguments which support lifting of
--  | functions of zero or more arguments, in the sense of `Applicative`.
class (Control.Biapply.Biapply w) <= Biapplicative w where
  bipure :: forall a b. a -> b -> w a b
foreign import instance biapplicativeTuple :: Control.Biapplicative.Biapplicative Data.Tuple.Tuple
foreign import instance biapplicativeConst :: Control.Biapplicative.Biapplicative Data.Const.Const
