#! /bin/bash

# need to add a upstream repository
# git remote add upstream https://github.com/OriginalRepo/OriginalProject.git
git fetch upstream

git checkout master

git merge upstream/master

git push origin master