import std/strformat
import prologue

import ./views/auth

const API_PREFIX = "/api"
const API_VERSION = "/v1"

let urlPatterns* = @[
  # Auth patterns
  pattern(&"{API_PREFIX}{API_VERSION}/auth/spotify/login", loginToSpotify),
  pattern(&"{API_PREFIX}{API_VERSION}/auth/spotify/callback", spotifyCallback)
]
