-- Generated by psc-make version 0.6.8
module Control.Lazy where
import Control.Lazy ()
import Prim ()
import Prelude ()
--  | A version of `Lazy` for type constructors of two type arguments.
--  | A version of `Lazy` for type constructors of one type argument.
--  | The `Lazy` class represents types which allow evaluation of values
--  | to be _deferred_.
--  |
--  | Usually, this means that a type contains a function arrow which can
--  | be used to delay evaluation.
--  | The `Lazy` class represents types which allow evaluation of values
--  | to be _deferred_.
--  |
--  | Usually, this means that a type contains a function arrow which can
--  | be used to delay evaluation.
--  | A version of `Lazy` for type constructors of one type argument.
--  | A version of `Lazy` for type constructors of two type arguments.
--  | A version of `Lazy` for type constructors of two type arguments.
--  | A version of `fix` for type constructors of two type arguments.
--  | A version of `Lazy` for type constructors of one type argument.
--  | A version of `fix` for type constructors of one type argument.
--  | The `Lazy` class represents types which allow evaluation of values
--  | to be _deferred_.
--  |
--  | Usually, this means that a type contains a function arrow which can
--  | be used to delay evaluation.
--  | `fix` defines a value as the fixed point of a function.
--  |
--  | The `Lazy` instance allows us to generate the result lazily.
class Lazy2 l where
  defer2 :: forall a b. (Prelude.Unit -> l a b) -> l a b
class Lazy1 l where
  defer1 :: forall a. (Prelude.Unit -> l a) -> l a
class Lazy l where
  defer :: (Prelude.Unit -> l) -> l
foreign import fix2 :: forall l a b. (Control.Lazy.Lazy2 l) => (l a b -> l a b) -> l a b
foreign import fix1 :: forall l a. (Control.Lazy.Lazy1 l) => (l a -> l a) -> l a
foreign import fix :: forall l a. (Control.Lazy.Lazy l) => (l -> l) -> l