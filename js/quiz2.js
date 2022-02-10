questionOrder = [];
for (i=0; i<=questions.length || i >= 10; i++)

function showQuestion(i) {
    console.log(questionOrder[i])
    document.getElementById('questionBox').innerText = questionOrder[i]['question'];
}
showQuestion(0);