questionOrder = [questions[0], questions[1]];

function showQuestion(i) {
    console.log(questionOrder[i])
    document.getElementById('questionBox').innerText = questionOrder[i]['question'];
}
showQuestion(0);