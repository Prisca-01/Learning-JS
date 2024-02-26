console.log("Hello World!")


let mockConsole = {
    log(message) {
        return console.log(message)
    }
}
mockConsole.log("Hello")

function sum(a, b) {
    let sum = a + b;
    console.log(sum);

    return sum

}
sum(6,9)
sum(7,9)

