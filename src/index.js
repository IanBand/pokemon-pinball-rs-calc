const weights = {
    pika: 5,
    catch: 5,
    evo: 7.5,
    slot: 1,
    travel: 5
}
const weightScalar = 100000;
const state = {}
const history = [];

const subtotalElement   = document.getElementById("subtotal");
const multiplierElement = document.getElementById("multiplier");
const totalElement      = document.getElementById("total");

function reset(){
    history.length = 0; // fun way of clearing an array
    for(const key in weights){
        state[key] = 0;
    }
    state.multiplier = 1;
    calcTotals();
}

function addScore(key){
    state[key]++;
    history.push(key);
    calcTotals();
}

function addMult(addition){
    state.multiplier += addition;
    history.push(addition);
    calcTotals();
}

function undo(){
    if(history.length == 0) return;
    const action = history.pop();
    if(typeof action == "number"){
        state.multiplier -= action;
    }
    else if(typeof action == "string"){
        state[action] -= 1;
    }
    else{
        console.error("undo failed():", action);
    }
    calcTotals();
}

function calcTotals(){
    console.log(state);
    const report = {subtotal: 0, multiplier: 1, total: 0};
    for(const key in weights){
        report.subtotal += state[key] * weights[key] * weightScalar;
    }
    report.multiplier = state.multiplier;
    report.total = report.multiplier * report.subtotal;

    console.log(report);

    totalElement.innerText      = report.total.toLocaleString('en-US');
    subtotalElement.innerText   = report.subtotal.toLocaleString('en-US');
    multiplierElement.innerText = report.multiplier;

}

reset();