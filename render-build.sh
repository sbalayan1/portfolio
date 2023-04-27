#!/usr/bin/env bash
#exit on error
set -o errexit

rm -rf build
npm install && npm run build