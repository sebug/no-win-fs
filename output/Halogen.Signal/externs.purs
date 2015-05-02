-- Generated by psc-make version 0.6.8
module Halogen.Signal where
import Halogen.Signal ()
import Data.Tuple ()
import Prelude ()
import Data.Profunctor ()
import Data.Profunctor.Strong ()
import Data.Profunctor.Choice ()
import Prim ()
import Prelude ()
import Data.Tuple ()
import Data.Either ()
import Data.Profunctor ()
import Data.Profunctor.Strong ()
import Data.Profunctor.Choice ()
--  | Convert a `SF1` to a `SF` by ignoring its initial value
--  | Creates a stateful `SF` based on a function which returns an output value
--  | Convert a `SF` to a `SF1` by providing an initial value
--  | Creates a stateful `SF1`
--  | Run a `SF1` to obtain the initial value and remaining signal
--  | Run a `SF` by providing an input
--  | Create a `SF` which hides a piece of internal state of type `s`.
--  | A `SF` which returns the latest input
--  | Get the current value of a `SF1`
--  | A variant of `mergeWith` which takes an additional function to destructure
--  | its inputs.
--  | Merge two non-empty signals, outputting the latest value from both
--  | signals at each step.
--  | A `SF` which compares consecutive inputs using a helper function
data SF1 (i :: *) (o :: *)
data SF (i :: *) (o :: *)
foreign import mergeWith' :: forall a b c d i r. (i -> Data.Either.Either a b) -> (c -> d -> r) -> Halogen.Signal.SF1 a c -> Halogen.Signal.SF1 b d -> Halogen.Signal.SF1 i r
foreign import mergeWith :: forall a b c d r. (c -> d -> r) -> Halogen.Signal.SF1 a c -> Halogen.Signal.SF1 b d -> Halogen.Signal.SF1 (Data.Either.Either a b) r
foreign import tail :: forall i o. Halogen.Signal.SF1 i o -> Halogen.Signal.SF i o
foreign import head :: forall i o. Halogen.Signal.SF1 i o -> o
foreign import startingAt :: forall i o. Halogen.Signal.SF i o -> o -> Halogen.Signal.SF1 i o
foreign import loop :: forall s i o. s -> Halogen.Signal.SF (Data.Tuple.Tuple s i) (Data.Tuple.Tuple s o) -> Halogen.Signal.SF i o
foreign import differencesWith :: forall i d. (i -> i -> d) -> i -> Halogen.Signal.SF i d
foreign import stateful' :: forall s i o. s -> (s -> i -> Data.Tuple.Tuple o s) -> Halogen.Signal.SF i o
foreign import stateful :: forall s i o. s -> (s -> i -> s) -> Halogen.Signal.SF1 i s
foreign import input :: forall i. Halogen.Signal.SF i i
foreign import runSF1 :: forall i o. Halogen.Signal.SF1 i o -> { next :: Halogen.Signal.SF i o, result :: o }
foreign import runSF :: forall i o. Halogen.Signal.SF i o -> i -> Halogen.Signal.SF1 i o
foreign import instance functorSF :: Prelude.Functor (Halogen.Signal.SF i)
foreign import instance functorSF1 :: Prelude.Functor (Halogen.Signal.SF1 i)
foreign import instance applySF :: Prelude.Apply (Halogen.Signal.SF i)
foreign import instance applySF1 :: Prelude.Apply (Halogen.Signal.SF1 i)
foreign import instance applicativeSF :: Prelude.Applicative (Halogen.Signal.SF i)
foreign import instance applicativeSF1 :: Prelude.Applicative (Halogen.Signal.SF1 i)
foreign import instance profunctorSF :: Data.Profunctor.Profunctor Halogen.Signal.SF
foreign import instance profunctorSF1 :: Data.Profunctor.Profunctor Halogen.Signal.SF1
foreign import instance strongSF :: Data.Profunctor.Strong.Strong Halogen.Signal.SF
foreign import instance choiceSF :: Data.Profunctor.Choice.Choice Halogen.Signal.SF
foreign import instance semigroupoidSF :: Prelude.Semigroupoid Halogen.Signal.SF
foreign import instance semigroupoidSF1 :: Prelude.Semigroupoid Halogen.Signal.SF1
foreign import instance categorySF :: Prelude.Category Halogen.Signal.SF