module Server

open System
open System.Threading.Tasks
open System.Net
open System.IO
open System.Collections.Generic

type OwinEnvironment = {
    httpMethod: string;
    requestBody: Stream;
    requestPath: string;
    responseBody: Stream;
    responseHeaders: IDictionary<string, string[]>;
    setResponseStatusCode: (int -> unit);
    setResponseReasonPhrase: (string -> unit)
    }

let getOwinEnvironment (env: IDictionary<string , obj>) = {
    httpMethod = env.["owin.RequestMethod"] :?> string;
    requestBody = env.["owin.RequestBody"] :?> Stream;
    requestPath = env.["owin.RequestPath"] :?> string;
    responseBody = env.["owin.ResponseBody"] :?> Stream;
    responseHeaders = env.["owin.ResponseHeaders"] :?> IDictionary<string, string[]>;
    setResponseStatusCode =
        fun (statusCode: int) -> env.["owin.ResponseStatusCode"] <- statusCode
    setResponseReasonPhrase =
        fun (reasonPhrase: string) -> env.["owin.ResponseReasonPhrase"] <- reasonPhrase
    }

let transform (request: string) : string =
    sprintf "%s transformed" request

let jsonResult (result: string) : string =
    let newlinesTransformed = result.Replace("\n", "\\n")
    sprintf "{ \"transformed\": \"%s\" }" newlinesTransformed

let thePage =
    """
    <!DOCTYPE html>
    <html>
    <head>
    <title>A first example in F#</title>
    </head>
    <body>
    <script src="/dist/src.js"></script>
    </body>
    </html>"""

let handleOwinEnvironment (owin: OwinEnvironment) : unit =
    use writer = new StreamWriter(owin.responseBody)
    match owin.httpMethod with
        | "POST" ->
            use reader = new StreamReader(owin.requestBody)
            reader.ReadToEnd()
            |> transform
            |> jsonResult
            |> writer.Write
        | "GET" ->
            match owin.requestPath with
                | "/dist/src.js" ->
                    let content = File.ReadAllText("dist/src.js")
                    owin.responseHeaders.["Content-Type"] <- [| "text/javascript" |]
                    owin.setResponseStatusCode 200
                    writer.Write(content)
                | _ ->
                    owin.responseHeaders.["Content-Type"] <- [| "text/html" |]
                    owin.setResponseStatusCode 200
                    writer.Write(thePage)
        | _ ->
            printfn "Got other type of request: %s" owin.httpMethod
            owin.setResponseStatusCode 400
            owin.setResponseReasonPhrase "Bad Request"
            writer.Write("Only POST requests are allowed")

let endWithCompletedTask = fun x -> Task.FromResult(null) :> Task

let port = 8888

[<EntryPoint>]
let main argv =
    use server =
        Nowin.ServerBuilder
            .New()
            .SetEndPoint(new IPEndPoint(IPAddress.Any, port))
            .SetOwinApp(fun env ->
                        env
                        |> getOwinEnvironment
                        |> handleOwinEnvironment
                        |> endWithCompletedTask)
            .Build()

    server.Start()

    printfn "Server listening on http://localhost:%i/ \nhit <enter> to stop." port
    Console.ReadLine() |> ignore
    0

