#!/bin/sh

set -e

export "NODE_ENV"="production";
yarn webpack;
