-- Generated by psc-make version 0.6.8
module Data.List.Lazy where
import Control.Monad.ListT ()
import Prelude ()
import Data.List.Lazy ()
import Data.Lazy ()
import Data.Monoid ()
import Prim ()
import Prelude ()
import Data.Lazy ()
import Data.Maybe ()
import Data.Tuple ()
import Data.Monoid ()
import Data.Foldable ()
import Data.Unfoldable ()
import Data.Traversable ()
import Control.Monad.ListT ()
newtype LazyList (a :: *) = LazyList (Data.List.Lazy.List a)
type List = Control.Monad.ListT.ListT Data.Lazy.Lazy
foreign import zipWith' :: forall f a b c. (Prelude.Monad f) => (a -> b -> f c) -> Control.Monad.ListT.ListT f a -> Control.Monad.ListT.ListT f b -> Control.Monad.ListT.ListT f c
foreign import zipWith :: forall f a b c. (Prelude.Monad f) => (a -> b -> c) -> Control.Monad.ListT.ListT f a -> Control.Monad.ListT.ListT f b -> Control.Monad.ListT.ListT f c
foreign import wrapLazy :: forall f a. (Prelude.Monad f) => Data.Lazy.Lazy (Control.Monad.ListT.ListT f a) -> Control.Monad.ListT.ListT f a
foreign import wrapEffect :: forall f a. (Prelude.Monad f) => f (Control.Monad.ListT.ListT f a) -> Control.Monad.ListT.ListT f a
foreign import unLazyList :: forall a. Data.List.Lazy.LazyList a -> Data.List.Lazy.List a
foreign import unfold :: forall f a z. (Prelude.Monad f) => (z -> f (Data.Maybe.Maybe (Data.Tuple.Tuple z a))) -> z -> Control.Monad.ListT.ListT f a
foreign import uncons :: forall f a. (Prelude.Monad f) => Control.Monad.ListT.ListT f a -> f (Data.Maybe.Maybe (Data.Tuple.Tuple a (Control.Monad.ListT.ListT f a)))
foreign import toArray :: forall f a. (Prelude.Monad f) => Control.Monad.ListT.ListT f a -> f [a]
foreign import takeWhile :: forall f a. (Prelude.Applicative f) => (a -> Prim.Boolean) -> Control.Monad.ListT.ListT f a -> Control.Monad.ListT.ListT f a
foreign import take :: forall f a. (Prelude.Applicative f) => Prim.Number -> Control.Monad.ListT.ListT f a -> Control.Monad.ListT.ListT f a
foreign import tail :: forall f a. (Prelude.Monad f) => Control.Monad.ListT.ListT f a -> f (Data.Maybe.Maybe (Control.Monad.ListT.ListT f a))
foreign import singleton :: forall f a. (Prelude.Applicative f) => a -> Control.Monad.ListT.ListT f a
foreign import repeat :: forall f a. (Prelude.Monad f) => a -> Control.Monad.ListT.ListT f a
foreign import prepend' :: forall f a. (Prelude.Applicative f) => a -> Data.Lazy.Lazy (Control.Monad.ListT.ListT f a) -> Control.Monad.ListT.ListT f a
foreign import prepend :: forall f a. (Prelude.Applicative f) => a -> Control.Monad.ListT.ListT f a -> Control.Monad.ListT.ListT f a
foreign import nil :: forall f a. (Prelude.Applicative f) => Control.Monad.ListT.ListT f a
foreign import mapMaybe :: forall f a b. (Prelude.Functor f) => (a -> Data.Maybe.Maybe b) -> Control.Monad.ListT.ListT f a -> Control.Monad.ListT.ListT f b
foreign import iterate :: forall f a. (Prelude.Monad f) => (a -> a) -> a -> Control.Monad.ListT.ListT f a
foreign import head :: forall f a. (Prelude.Monad f) => Control.Monad.ListT.ListT f a -> f (Data.Maybe.Maybe a)
foreign import fromEffect :: forall f a. (Prelude.Applicative f) => f a -> Control.Monad.ListT.ListT f a
foreign import fromArray :: forall f a. (Prelude.Monad f) => [a] -> Control.Monad.ListT.ListT f a
foreign import filter :: forall f a. (Prelude.Functor f) => (a -> Prim.Boolean) -> Control.Monad.ListT.ListT f a -> Control.Monad.ListT.ListT f a
foreign import dropWhile :: forall f a. (Prelude.Applicative f) => (a -> Prim.Boolean) -> Control.Monad.ListT.ListT f a -> Control.Monad.ListT.ListT f a
foreign import drop :: forall f a. (Prelude.Applicative f) => Prim.Number -> Control.Monad.ListT.ListT f a -> Control.Monad.ListT.ListT f a
foreign import cons' :: forall f a. (Prelude.Applicative f) => Data.Lazy.Lazy a -> Data.Lazy.Lazy (Control.Monad.ListT.ListT f a) -> Control.Monad.ListT.ListT f a
foreign import catMaybes :: forall f a. (Prelude.Functor f) => Control.Monad.ListT.ListT f (Data.Maybe.Maybe a) -> Control.Monad.ListT.ListT f a
foreign import instance foldableLazyList :: Data.Foldable.Foldable Data.List.Lazy.LazyList
