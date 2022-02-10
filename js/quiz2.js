let questionOrder = [questions[0], questions[1], questions[2]];
let givenAnswers = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
showQuestion(0);

function showQuestion(i) {
    let question = questionOrder[i];
    let qType = question['type']
    document.getElementById('questionBox').innerText = question['question'];

    let inerHTML = '';
    if (qType == 'multipleChoice') {
        for (q in question['options']) {
            inerHTML += `
            <button onclick="fillAnswer(${i}, ${q})" class="option">${question['options'][q]}</button>
            `
        }
    } else if (qType == 'text') {
        inerHTML = `
            <input type="text" id="question${i}">
            <button onclick="fillAnswer(${i}, 'question${i}')">submit</button>
        `
    }
    document.getElementById('answers').innerHTML = inerHTML
}
function fillAnswer(i, a) {
    if (isNaN(a)) { a = document.getElementById(a).value; }
    givenAnswers[i] = a;
}


function checkAnswer() {
}