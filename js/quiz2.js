let questionOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let givenAnswers = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
showQuestion(0);

function showQuestion(i) {
    let activeQuestion = questions[questionOrder[i]];
    let optionsHTML = "";
    function text_or_number_value(i) {
        if (-1 != givenAnswers[i]) { return givenAnswers[i] }
        else { return "" }
    }
    document.getElementById('questionBox').innerText = activeQuestion.question;
    
    switch (activeQuestion.type) {
        case "multipleChoice":
            for (q in activeQuestion.options) {
                let chosen = (q == givenAnswers[i]) ? "chosen" : "";
                optionsHTML += `<button onclick="fillAnswer(${i}, ${q})" class="option ${chosen}">${activeQuestion.options[q]}</button>`;
            }
        break;

        case "text":
            optionsHTML = `<input type="text" id="question${i}" onchange="fillAnswer(${i}, 'question${i}')" value="${text_or_number_value(i)}">`;
        break;
        case "number":
            optionsHTML = `<input type="number" id="question${i}" onchange="fillAnswer(${i}, 'question${i}')" value="${text_or_number_value(i)}">`;
        break;
        default:
            optionsHTML = `${activeQuestion.type} is not a type`;
    }
    document.getElementById('answers').innerHTML = optionsHTML;

    for (q in questionOrder) { document.getElementById(`buttonQuestion${q}`).classList.remove('active'); }
    document.getElementById(`buttonQuestion${i}`).classList.add('active')
}

function fillAnswer(i, a) {
    if (isNaN(a)) { a = document.getElementById(a).value.toLowerCase(); }
    givenAnswers[i] = a;
    setClass(`buttonQuestion${i}`, 'filled');

    if (questions[questionOrder[i]].type == 'multipleChoice') {
        document.getElementById('answers').childNodes.forEach(function (button, n) {
            if (a == n) { button.classList.add('chosen'); }
            else { button.classList.remove('chosen') }
        })
    }
}
function checkAnswers() {
    for (i in questionOrder) {
        if (checkAnswer(i)) { setClass(`buttonQuestion${i}`, 'right'); }
        else { setClass(`buttonQuestion${i}`, 'wrong'); }
    }
}
function checkAnswer(i) {
    let answer = questions[questionOrder[i]].answer;
    let qType = questions[questionOrder[i]].type;
    let givnAns = givenAnswers[i]
    if (
        qType == 'multipleChoice' && answer == givnAns ||
        qType == 'number' && answer == Number(givnAns) ||
        qType == 'text' && answer.indexOf(givnAns) != -1
        ) { return true }
    else { return false }
}

function setClass(id, addClass) {
    document.getElementById(id).classList.remove('filled', 'right', 'wrong');
    document.getElementById(id).classList.add(addClass);
}