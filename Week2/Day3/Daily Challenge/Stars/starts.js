
// O(N)

function starsOneLoop(n) {
    for (let i = 1; i < n; i++) {
        console.log("*".repeat(i));
    }
}

starsOneLoop(6);

console.log('\n');

// O(N^2)

function starsNestedLoop(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            process.stdout.write('*');
        }
        console.log();
    }
}

starsNestedLoop(6);