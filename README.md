# Babel Base Setup [![Build Status](https://travis-ci.org/soenkekluth/babel-base-setup.svg?branch=master)](https://travis-ci.org/soenkekluth/babel-base-setup) [![Build Status](http://46.101.136.206/api/badges/soenkekluth/babel-base-setup/status.svg)](http://46.101.136.206/soenkekluth/babel-base-setup)

[![Greenkeeper badge](https://badges.greenkeeper.io/soenkekluth/babel-base-setup.svg)](https://greenkeeper.io/)
A starting point for new Projects using Babel


docker build -t babel-base-setup .

run `docker run -p 3000:3000 -p 3001:3001 --name babel-base -v $(pwd)/src:/usr/local/src/src --sig-proxy=false babel-base-setup`
