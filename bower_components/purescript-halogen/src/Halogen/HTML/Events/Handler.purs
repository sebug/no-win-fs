-- | This module defines the `EventHandler` functor, which can be used
-- | to perform standard operations on HTML events.

module Halogen.HTML.Events.Handler 
  ( EventHandler()
  
  , preventDefault 
  , stopPropagation
  , stopImmediatePropagation
  
  , runEventHandler
  ) where

import DOM

import Data.Maybe
import Data.Tuple
import Data.Array ()
import Data.Foldable (for_)

import Control.Apply ((*>))
import Control.Plus (empty)
import Control.Monad.Eff

import Control.Monad.Writer
import Control.Monad.Writer.Trans
import Control.Monad.Writer.Class

import Halogen.HTML.Events.Types

data EventUpdate 
  = PreventDefault
  | StopPropagation
  | StopImmediatePropagation

-- | This monad supports the following operations on events:
-- |
-- | - `preventDefault`
-- | - `stopPropagation`
-- | - `stopImmediatePropagation`
-- |
-- | It can be used as follows:
-- |
-- | ```purescript
-- | import Control.Functor (($>))
-- |
-- | H.a (E.onclick \_ -> E.preventDefault $> ClickHandler) (H.text "Click here")
-- | ```
newtype EventHandler a = EventHandler (Writer [EventUpdate] a)
     
unEventHandler :: forall a. EventHandler a -> Writer [EventUpdate] a
unEventHandler (EventHandler mw) = mw
     
-- | Call the `preventDefault` method on the current event
preventDefault :: EventHandler Unit
preventDefault = EventHandler (tell [PreventDefault])
     
-- | Call the `stopPropagation` method on the current event
stopPropagation :: EventHandler Unit
stopPropagation = EventHandler (tell [StopPropagation])
     
-- | Call the `stopImmediatePropagation` method on the current event
stopImmediatePropagation :: EventHandler Unit
stopImmediatePropagation = EventHandler (tell [StopImmediatePropagation])
      
instance functorEventHandler :: Functor EventHandler where
  (<$>) f (EventHandler mw) = EventHandler (f <$> mw)

instance applyEventHandler :: Apply EventHandler where
  (<*>) (EventHandler mw1) (EventHandler mw2) = EventHandler (mw1 <*> mw2)

instance applicativeEventHandler :: Applicative EventHandler where
  pure = EventHandler <<< pure

instance bindEventHandler :: Bind EventHandler where
  (>>=) (EventHandler mw) f = EventHandler (mw >>= unEventHandler <<< f)
  
instance monadEventHandler :: Monad EventHandler
  
foreign import preventDefaultImpl
  "function preventDefaultImpl(e) {\
  \  return function() {\
  \    e.preventDefault();\
  \  };\
  \}" :: forall eff fields. Event fields -> Eff (dom :: DOM | eff) Unit
  
foreign import stopPropagationImpl
  "function stopPropagationImpl(e) {\
  \  return function() {\
  \    e.stopPropagation();\
  \  };\
  \}" :: forall eff fields. Event fields -> Eff (dom :: DOM | eff) Unit
  
foreign import stopImmediatePropagationImpl
  "function stopImmediatePropagationImpl(e) {\
  \  return function() {\
  \    e.stopImmediatePropagation();\
  \  };\
  \}" :: forall eff fields. Event fields -> Eff (dom :: DOM | eff) Unit
      
-- | This function can be used to update an event and return the wrapped value
runEventHandler :: forall a fields eff. Event fields -> EventHandler a -> Eff (dom :: DOM | eff) a
runEventHandler e (EventHandler mw) = 
  case runWriter mw of
    Tuple a eus -> for_ eus applyUpdate *> return a
  where
  applyUpdate :: EventUpdate -> Eff (dom :: DOM | eff) Unit
  applyUpdate PreventDefault            = preventDefaultImpl e
  applyUpdate StopPropagation           = stopPropagationImpl e
  applyUpdate StopImmediatePropagation  = stopImmediatePropagationImpl e