#!/usr/bin/env sh
set -e
# build
npm run build
# navegar a dist
cd dist

git init
git chekout -b main
git add -A
git commit -m 'deploy'

git push -f git@github.com:EniDev911/pokeapi-react.git main:gh-pages

cd -
