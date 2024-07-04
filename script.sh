#!/bin/bash
# for i in {1..30}
# do
#    magick "images/c_$i.jpeg" -quality 50 -define webp:lossless=true "./images/c_$i.webp"
# done

for i in {1..5}
do
   magick "images/b_$i.png" -quality 50 -define webp:lossless=true "./images/b_$i.webp"
done
