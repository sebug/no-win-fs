module Main where

import Data.Void
import Data.Tuple
import Data.Maybe
import Data.Either
import Data.Foldable (foldMap)
import Data.Foreign.Class

import qualified Data.String as S

import qualified Data.StrMap as StrMap

import Control.Functor (($>))
import Control.Plus (empty)

import Control.Alt
import Control.Bind
import Control.Monad.Eff
import Control.Monad.Eff.Class
import Control.Monad.Aff

import DOM
import Debug.Trace

import Data.DOM.Simple.Document
import Data.DOM.Simple.Element
import Data.DOM.Simple.Types
import Data.DOM.Simple.Window

import Halogen
import Halogen.Signal
import Halogen.Component

import qualified Halogen.HTML as H
import qualified Halogen.HTML.Attributes as A
import qualified Halogen.HTML.Events as A
import qualified Halogen.HTML.Events.Forms as A
import qualified Halogen.HTML.Events.Handler as E
import qualified Halogen.HTML.Events.Monad as E

import Network.HTTP.Affjax

initialMessage :: String
initialMessage = S.joinWith "\n"
                 [ "Oh, hello"
                 , "world" ]

appendToBody :: forall eff. HTMLElement -> Eff (dom :: DOM | eff) Unit
appendToBody e = document globalWindow >>= (body >=> flip appendChild e)

-- The state of the application
data State = State Boolean String (Maybe String)

data Input
  = SetBusy
  | SetMessage String
  | SetResult String

ui :: forall p eff. Component p (E.Event (HalogenEffects (ajax :: AJAX | eff))) Input Input
ui = component (render <$> stateful (State false initialMessage Nothing) update)
  where
    render :: State -> H.HTML p (E.Event (HalogenEffects (ajax :: AJAX | eff)) Input)
    render (State busy message result) =
      H.div [ ] $
            [ H.h1 [ A.id_ "header" ] [ H.text "Ajax example" ]
            , H.h2_ [ H.text "Initial Message" ]
            , H.p_ [ H.textarea [ A.value message
                                , A.onInput (A.input SetMessage)
                                ] [] ]
            , H.p_ [ H.button [ A.disabled busy
                              , A.onClick (\_ -> pure (handler message))
                              ] [ H.text "Transform" ] ]
            , H.p_ [ H.text (if busy then "Transforming..." else "") ]
            ] ++ flip foldMap result \transformedMessage ->
            [ H.div [ A.initializer initialized, A.finalizer finalized ]
                    [ H.h2_ [ H.text "transformed message" ]
                    , H.div_ [ H.text transformedMessage ]
                    ] ]

update :: State -> Input -> State
update (State _ message rslt) SetBusy = State true message rslt
update (State busy _ _) (SetMessage message) = State busy message Nothing
update (State busy message _) (SetResult rslt) = State false message (Just rslt)

-- Called when the component is initialized
initialized :: forall eff. E.Event (HalogenEffects (ajax :: AJAX | eff)) Input
initialized = do
  liftEff $ trace "UI initialized"
  empty

-- Called when the component is finalized
finalized :: forall eff. E.Event (HalogenEffects (ajax :: AJAX | eff)) Input
finalized = do
  liftEff $ trace "UI finalized"
  empty

-- Handle a request to an external service
handler :: forall eff. String -> E.Event (HalogenEffects (ajax :: AJAX | eff)) Input
handler message = E.yield SetBusy `E.andThen` \_ -> E.async transformMessageAff
    where
      transformMessageAff :: Aff (HalogenEffects (ajax :: AJAX | eff)) Input
      transformMessageAff = do
          result <- post "/api/transform" message
          let response = result.response
          return case readProp "transformed" response <|> readProp "error" response of
              Right transformedMessage -> SetResult transformedMessage
              Left _ -> SetResult "Invalid response"

main = do
  Tuple node driver <- runUI ui
  appendToBody node







