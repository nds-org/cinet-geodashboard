# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) 
and this project adheres to [Semantic Versioning](http://semver.org/).

## 0.0.7
- Switched Map SelectClusterInteraction from flat to spiral. Solves a problem
with cluster whose locations have the same lat/lon.

## 0.0.6
- Switched back to `HashRouter` since `BrowserRouter` doesn't work when app is 
  deployed at `/geodashboard`.

## 0.0.5 - 2021-11-08
- Testing `BrowserRouter` in react-router when deploying app at `/geodashboard`.

## 0.0.4 - 2021-11-05
- Working when deployed at `/gedashboard` on Kubernetes cluster.
- Testing `HashRouter` in react-router when deploying app at `/geodashboard`.
