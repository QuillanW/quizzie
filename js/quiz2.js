let questionOrder = [0, 1, 2, 3];

showQuestion(0);
function showQuestion(i) {
    let question = questions[questionOrder[i]];
    let qType = question['type']
    document.getElementById('questionBox').innerText = question['question'];

    let inerHTML = '';
    if (qType == 'multipleChoice') {
        for (q in question['options']) {
            inerHTML += `
            <button onclick="fillAnswer(${i}, ${q})" class="option">${question['options'][q]}</button>
            `
        }
    } else if (qType == 'text' || qType == 'number') {
        inerHTML = `
            <input type="${qType}" id="question${i}">
            <button onclick="fillAnswer(${i}, 'question${i}')">submit</button>
        `
    }
    document.getElementById('answers').innerHTML = inerHTML;
}

let givenAnswers = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
function fillAnswer(i, a) {
    if (isNaN(a)) { a = document.getElementById(a).value.toLowerCase(); }
    givenAnswers[i] = a;
    console.log(givenAnswers)
}
function checkAnswers() {
    for (i in questionOrder) {
        if (checkAnswer(i) == true) {
            console.log(true);
            document.getElementById(`buttonQuestion${Number(i) + 1}`).classList.add('right');
        } else {
            console.log(false)
            document.getElementById(`buttonQuestion${Number(i) + 1}`).classList.add('wrong');
        }
    }
}

function checkAnswer(i) {
    let answer = questions[questionOrder[i]]['answer'];
    let qType = questions[questionOrder[i]]['type'];
    let givnAns = givenAnswers[i]
    if (
        qType == 'multipleChoice' && answer == givnAns ||
        qType == 'number' && answer == Number(givnAns) ||
        qType == 'text' && answer.indexOf(givnAns) != -1
        ) { return true }
    else { return false }
}