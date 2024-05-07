// Q.1 Pattern 
function printPattern1(lines) {
    for (let i = 1; i <= lines; i = i + 2) {
        let pattern = "";
        for (let j = 1; j <= lines - i; j++) {
            pattern += " ";
        }
        for (let k = 1; k <= i; k++) {
            pattern += k + " ";
        }
        console.log(pattern);
        console.log();
    }
}
printPattern1(9);

// Q.2 Pattern 
let rows = 5;
function secondPattern(rows) {
    let pattern = "";
    for (let n = 1; n <= rows; n++) {
        for (let space = 1; space <= rows - n; space++) {
            pattern += "  ";
        }
        for (let num = 1; num <= n; num++) {
            pattern += num + " ";
        }
        pattern += "\n";
        pattern += "\n";
    }
    for (let n = 1; n <= rows; n++) {
        for (let space = 1; space <= n; space++) {
            pattern += "  ";
        }
        for (let num = 1; num <= rows - n; num++) {
            pattern += num + " ";
        }
        pattern += "\n";
        pattern += "\n";
    }
    console.log(pattern);
}
secondPattern(rows);

// Q.3 Pattern 
function thirdPattern(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = i; j >= 1; j--) {
            row += j + " ";
        }
        console.log(row);
        console.log();
    }

    for (let i = n - 1; i >= 1; i--) {
        let row = "";
        for (let j = i; j >= 1; j--) {
            row += j + " ";
        }
        console.log(row);
        console.log();
    }
}
thirdPattern(rows);


//Q 4: Pattern 
function printfourthPattern(lines) {
    for (let i = 1; i <= lines; i = i + 2) {
        let pattern = "";
        for (let k = 1; k < i; k++) {
            pattern +=  " ";
        }
        for (let j = 1; j <= lines - i+1; j++) {
            pattern += j+" ";
        }
        for (let k = 1; k <= i; k++) {
            pattern +=  " ";
        }
        console.log(pattern);
        console.log();
    }
}


printfourthPattern(9);