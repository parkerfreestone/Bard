import prologue
import ./urls

let
  settings = loadSettings(".config/config.debug.json")

var app = newApp(settings)

app.addRoute(urls.urlPatterns, "")
app.run()
