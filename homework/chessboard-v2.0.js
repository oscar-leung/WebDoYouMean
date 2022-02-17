// Chessboard
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
// When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

let size = 10;

if (size < 0) {
    console.log("You cannot have a size less than zero");
} else if (size == 1) {
    console.log("#");
} else {
    for (var i = 0; i < size; i++) {
        // outer loop – number of lines
        let line = "";
        for (var j = 0; j < size; j++) {
            // inner loop - building the lines
            if ((i + j) % 2 == 0) {
                line += " ";
            } else {
                line += "#";
            }
        }
        console.log(line);
    }
}