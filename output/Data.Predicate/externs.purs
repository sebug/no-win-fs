-- Generated by psc-make version 0.6.8
module Data.Predicate where
import Prelude ()
import Prim ()
import Prelude ()
import Data.Functor.Contravariant ()
--  | An adaptor allowing `>$<` to map over the inputs of a predicate.
newtype Predicate (a :: *) = Predicate (a -> Prim.Boolean)
foreign import runPredicate :: forall a. Data.Predicate.Predicate a -> a -> Prim.Boolean
foreign import instance contravariantPredicate :: Data.Functor.Contravariant.Contravariant Data.Predicate.Predicate
