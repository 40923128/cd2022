echo off
set message=%1
pelican markdown -o blog -s local_publishconf.py
git add .
git commit -m %message%
git push
