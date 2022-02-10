questionOrder = [questions[0], questions[1]];

function showQuestion(i) {
    let question = questionOrder[i]
    console.log(question);
    document.getElementById('questionBox').innerText = question['question'];

    let inenerHTML = '';
    if (question['type'] == 'multipleChoice') {
        for (q in question['options']) {
            console.log(question['options'][q])
            inenerHTML += `
            <button onclick="checkAnswer" class="mcOption">${question['options'][q]}</button>
            `
        }
    }
    document.getElementById('answers').innerHTML = inenerHTML
}
showQuestion(0);