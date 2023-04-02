import std/strformat
import prologue

import ./views/auth

const API_PREFIX = "/api/v1"

let urlPatterns* = @[
  # Auth patterns
  pattern(&"{API_PREFIX}/auth", index)
]