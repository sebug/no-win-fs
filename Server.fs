module Server

open System
open System.Threading.Tasks
open System.Net
open System.IO
open System.Collections.Generic

type OwinEnvironment = {
    httpMethod: string;
    requestBody: Stream;
    responseBody: Stream;
    responseHeaders: IDictionary<string, string[]>;
    setResponseStatusCode: (int -> unit);
    setResponseReasonPhrase: (string -> unit)
    }

let getOwinEnvironment (env: IDictionary<string , obj>) = {
    httpMethod = env.["owin.RequestMethod"] :?> string;
    requestBody = env.["owin.RequestBody"] :?> Stream;
    responseBody = env.["owin.ResponseBody"] :?> Stream;
    responseHeaders = env.["owin.ResponseHeaders"] :?> IDictionary<string, string[]>;
    setResponseStatusCode =
        fun (statusCode: int) -> env.["owin.ResponseStatusCode"] <- statusCode
    setResponseReasonPhrase =
        fun (reasonPhrase: string) -> env.["owin.ResponseReasonPhrase"] <- reasonPhrase
    }

let transform (request: string) : string =
    sprintf "%s transformed" request

let thePage =
    """
    <!DOCTYPE html>
    <html>
    <head>
    <title>A first example in F#</title>
    </head>
    <body>
    <h1>Some title</h1>
    <form method="POST" action="http://localhost:8888/">
    <input name=test />
    <input type=submit />
    </form>
    </body>
    </html>"""

let handleOwinEnvironment (owin: OwinEnvironment) : unit =
    use writer = new StreamWriter(owin.responseBody)
    match owin.httpMethod with
        | "POST" ->
            use reader = new StreamReader(owin.requestBody)
            writer.Write(transform(reader.ReadToEnd()))
        | "GET" ->
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
                        printfn "Invoked"
                        env
                        |> getOwinEnvironment
                        |> handleOwinEnvironment
                        |> endWithCompletedTask)
            .Build()

    server.Start()

    printfn "Server listening on http://localhost:%i/ \nhit <enter> to stop." port
    Console.ReadLine() |> ignore
    0

