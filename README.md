# No-Win-fs
A playground for a combination of Nowin and F#.

Compiled and tested on my Mac using Mono latest.

If you're on MacOS X, you'll have to run the following command for browserify
to work (to increase the number of allowed files to be opened in parallel):

     ulimit -n 2560

To build

     npm install
     pulp dep update
     ./build.sh
