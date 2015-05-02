#!/bin/sh
fsharpc Server.fs -r lib/Nowin.dll
pulp build
mkdir -p dist
pulp browserify > dist/src.js
