/*
Chessboard
Write a program that creates a string that represents an 8�8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size
= 8 and change the program so that it works for any size, outputting a grid
of the given width and height
*/

function chessboard(size){
    console.log("Chessboard of "+size+"*"+size+"\n");
    var string = "";

    for (var i = 1; i <= (size*size); i++) {
        if(i===(size*size)-1){
            break;
        }

        if(i%(size+1) === 0){
            string = string.concat('\n');

        } 
        
        else if(i%2 === 0) {
            string = string.concat('#');
        } 
        
        else if(i%2 !=0) {
            string = string.concat(' ');
        }
    }

    console.log(string);
}

var chessboard8 = chessboard(8);
var chessboard10 = chessboard(10);