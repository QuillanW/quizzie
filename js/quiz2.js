let questionOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

showQuestion(0);
function showQuestion(i) {
    let question = questions[questionOrder[i]];
    let qType = question['type']
    document.getElementById('questionBox').innerText = question['question'];

    let inerHTML = '';
    if (qType == 'multipleChoice') {
        for (q in question['options']) {
            inerHTML += `<button onclick="fillAnswer(${i}, ${q})" class="option">${question['options'][q]}</button>`
        }
    }
    else if (qType == 'text' || qType == 'number') {
        inerHTML = `<input type="${qType}" id="question${i}" onchange="fillAnswer(${i}, 'question${i}')">`
    }
    document.getElementById('answers').innerHTML = inerHTML;
    for (q in questionOrder) { document.getElementById(`buttonQuestion${q}`).classList.remove('active'); }
    document.getElementById(`buttonQuestion${i}`).classList.add('active')
}

let givenAnswers = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
function fillAnswer(i, a) {
    if (isNaN(a)) { a = document.getElementById(a).value.toLowerCase(); }
    givenAnswers[i] = a;
    document.getElementById(`buttonQuestion${i}`).classList.add('filled')
}
function checkAnswers() {
    for (i in questionOrder) {
        let button = document.getElementById(`buttonQuestion${i}`);
        button.classList.remove('filled', 'right', 'wrong');
        if (checkAnswer(i) == true) { button.classList.add('right'); }
        else { button.classList.add('wrong'); }
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