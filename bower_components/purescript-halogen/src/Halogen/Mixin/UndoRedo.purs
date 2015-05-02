-- | This module provides a generic undo/redo capability.

module Halogen.Mixin.UndoRedo 
  ( UndoRedoInput(..)
  , UndoRedoState()
  
  , SupportsUndoRedo
  , fromUndoRedo
  , toUndoRedo

  , undo
  , redo

  , canUndo
  , canRedo
  , getState
  , undoRedoState
  
  , withUndoRedo
  ) where

import Data.Maybe
import Data.Tuple

data Stack a = Empty | Push a (Stack a)

pop :: forall a. Stack a -> Maybe (Tuple a (Stack a))
pop (Push a s) = Just (Tuple a s)
pop Empty = Nothing

depth :: forall a. Stack a -> Number
depth Empty = 0
depth (Push _ s) = 1 + depth s

null :: forall a. Stack a -> Boolean
null Empty = true
null _ = false
  
-- | Adds two new input types:
-- |
-- | - `Undo` - move to the previous state
-- | - `Redo` - move to the next state
data UndoRedoInput = Undo | Redo

-- | This type class identifies those input types which support the Undo and Redo actions
class SupportsUndoRedo input where
  fromUndoRedo :: UndoRedoInput -> input
  toUndoRedo :: input -> Maybe UndoRedoInput

-- | The undo action
undo :: forall i. (SupportsUndoRedo i) => i
undo = fromUndoRedo Undo

-- | The redo action
redo :: forall i. (SupportsUndoRedo i) => i
redo = fromUndoRedo Redo

-- | Modifies the state type to include its _past_ and _future_.
data UndoRedoState s = UndoRedoState (Stack s) s (Stack s)

-- | `true` if the state supports the undo operation. 
canUndo :: forall s. UndoRedoState s -> Boolean
canUndo (UndoRedoState past _ _) = not (null past)

-- | `true` if the state supports the redo operation.
canRedo :: forall s. UndoRedoState s -> Boolean
canRedo (UndoRedoState _ _ future) = not (null future) 

-- | Get the state at the current time
getState :: forall s. UndoRedoState s -> s
getState (UndoRedoState _ present _) = present

-- | Create a state with no past and no future
undoRedoState :: forall s. s -> UndoRedoState s
undoRedoState s = UndoRedoState Empty s Empty

-- | Lift a step function to support the undo and redo operations.
-- |
-- | The view should use the `canUndo` and `canRedo` functions to determine whether or not
-- | to enable the corresponding controls.
withUndoRedo :: forall s i. (SupportsUndoRedo i) => (s -> i -> s) -> UndoRedoState s -> i -> UndoRedoState s
withUndoRedo f st i = withUndo' st (toUndoRedo i)
  where
  withUndo' st@(UndoRedoState past s future) (Just Undo) = fromMaybe st $ do
    Tuple prev rest <- pop past
    return $ UndoRedoState rest prev (Push s future)
  withUndo' st@(UndoRedoState past s future) (Just Redo) = fromMaybe st $ do
    Tuple next rest <- pop future
    return $ UndoRedoState (Push s past) next rest
  withUndo' (UndoRedoState past s _) Nothing = 
    UndoRedoState (Push s past) (f s i) Empty
