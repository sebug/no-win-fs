-- Generated by psc-make version 0.6.8
module Network.HTTP.RequestHeader where
import Prelude ()
import Network.HTTP.MimeType ()
import Prim ()
import Prelude ()
import Network.HTTP.MimeType ()
data RequestHeader = Accept Network.HTTP.MimeType.MimeType | ContentType Network.HTTP.MimeType.MimeType | RequestHeader Prim.String Prim.String
foreign import requestHeaderValue :: Network.HTTP.RequestHeader.RequestHeader -> Prim.String
foreign import requestHeaderName :: Network.HTTP.RequestHeader.RequestHeader -> Prim.String
foreign import instance eqRequestHeader :: Prelude.Eq Network.HTTP.RequestHeader.RequestHeader
foreign import instance showRequestHeader :: Prelude.Show Network.HTTP.RequestHeader.RequestHeader
