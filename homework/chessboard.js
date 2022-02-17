let size = 3;
let halfOfSize = size / 2;
if (size < 1) {
    console.log("You cannot have a size less than one.");
} else if (size == 1) {
    console.log("#");
} else if (size % 2 == 0) {
    while (halfOfSize > !0) {
        let line = "";
        for (let i = 0; i < size / 2; i++) {
            line = line + " ";
            line = line + "#";
        }
        console.log(line);
        line = "";
        for (let j = 0; j < size / 2; j++) {
            line = line + "#";
            line = line + " ";
        }
        console.log(line);
        halfOfSize--;
    }
} else {
    let line = "";
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (i % 2 == 1) {
                line += " ";
            } else {
                line += "#";
            }
        }
    }
}

//  # # #
// # # #
//  # # #
// # # #
//  # # #
// # # # #
//  # # #