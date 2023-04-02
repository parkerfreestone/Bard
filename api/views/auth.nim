import prologue, std/json

proc index*(ctx: Context) {.async.} =
  var info = %*
    [
      { "hello": "world!" }
    ]

  resp jsonResponse(info)
