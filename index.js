// Q.1 Pattern 
function printPattern1(lines) {
    for (let i = 1; i <= lines; i=i+2) {
        let pattern = "";
        // Print spaces
        for (let j = 1; j <= lines - i; j++) {
            pattern += " ";
        }
        // Print stars
        for (let k = 1; k <= i; k++) {
            pattern += k+" ";
        }
        console.log(pattern);
    }
}
printPattern1(9);

// Q.2 Pattern 
function printPattern2(lines) {
    for (let i = 1; i <= lines; i=i+2) {
        let pattern = "";
        // Print spaces
        for (let j = 1; j <= lines - i; j++) {
            pattern += " ";
        }
        // Print stars
        for (let k = 1; k <= i; k++) {
            pattern += k+" ";
        }
        console.log(pattern);
    }
}
printPattern2(9);
