let results = [null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// Your Code Here!
let rollDieButton = document.querySelector("#roll")
let result = document.querySelector("#result")
let graph = document.querySelector("#graph")
let roll1000 = document.querySelector("#rollB")

console.log(rollDieButton)
console.log(result)
console.log(graph)

function rolldie() {
    console.log(results)
    let roll = parseInt(result.textContent)
    roll = Math.floor(Math.random() * 6) + 1
    return (roll)
}
function rollTwoDie() {
    let oneDie = rolldie()
    let twoDie = rolldie()
    let sum = oneDie + twoDie
    result.innerHTML = `You rolled a ${sum}!`
    results[sum] += 1
    renderGraph()
}



function renderGraph(){
    graph.innerHTML = ''
    for (let i = 2; i < results.length; i += 1) {
        let newDiceRoll = results[i];
        let repeatedNumber = document.createElement('div')
        repeatedNumber.innerHTML = ` You rolled a ${i} : ${newDiceRoll} times`
        graph.append(repeatedNumber)
 }
}
rollDieButton.addEventListener("click", rollTwoDie);

function rollDice(){
    results = [null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 2; i <= 1000; i += 1) {
        let thousand = rollTwoDie();
        results[thousand] += 1;
    }
    renderGraph();
}
roll1000.addEventListener("click", rollDice)



