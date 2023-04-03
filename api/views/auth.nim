import prologue
import std/uri, std/strformat
import oauth2

proc loginToSpotify*(ctx: Context) {.async.} =
  let
    env = loadPrologueEnv("../.env")
    state = generateState()
    scope = "user-read-private user-read-email"
    queryParams = encodeQuery({
      "response_type": "code",
      "client_id": env.get("SPOTIFY_CLIENT_ID"),
      "scope": scope,
      "redirect_uri": "http://localhost:8080/api/v1/auth/spotify/callback",
      "state": state
    })

  resp redirect(&"https://accounts.spotify.com/authorize?{queryParams}")

# Handle callback data
proc spotifyCallback*(ctx: Context) {.async.} =
  let
    code = ctx.getQueryParamsOption("code")
    state = ctx.getQueryParamsOption("state")

  if $state == "":
    resp "There was a problem authenticating the user. Please try again, if the error persists please reach out!", Http401
  else:
    # Get bearer Token
    discard

  resp plainTextResponse(&"code: {code}, state: {state}")