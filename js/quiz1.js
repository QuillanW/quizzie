"use strict"
function select(selected) {
    for (let i = 1; i < 11; i++) {
        document.getElementById('box'+i).style.display = 'none';
      }
    
    document.getElementById('box'+selected).style.display = 'block';
}

let answers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

function makeQuestions() {
  var container = document.getElementById('questions');
  for (let i = 1; i < (questions.length + 1); i++) {
    var newQuestion = document.createElement('div');
    newQuestion.id = 'box' + i;
    newQuestion.classList.add('contentBox');
    var newQuestionQN = document.createElement('h2');
    newQuestionQN.innerHTML = 'Vraag ' + i;
    newQuestion.appendChild(newQuestionQN);
    var newQuestionQ = document.createElement('h3');
    newQuestionQ.innerHTML = questions[i-1]['question'];
    newQuestion.appendChild(newQuestionQ);
    var newQuestionAB = document.createElement('div');
    newQuestionAB.id = 'answers'
    for (let l = 1; l < 5; l++) {
      var newQuestionA = document.createElement('button');
      newQuestionA.classList.add('answerButton');
      newQuestionA.id = 'answer' + l;
      newQuestionA.innerHTML = questions[i-1]['options'][l-1]
      newQuestionA.addEventListener('click', answer);
      newQuestionAB.appendChild(newQuestionA);
    }
    newQuestion.appendChild(newQuestionAB);
    container.appendChild(newQuestion);
  };

  console.log('Questions created!');
}

function answer() {
  var answered = (event.target.parentElement.parentElement.id).replace("box","") - 1;
  var answered1 = (event.target.id).replace('answer', '');
  let correct = false;

  if (answered1 == (questions[answered]['answer'])) {
    correct = true
  } else {
    correct = false
  }
  if (correct == true) {
    answers.splice(answered, 1, 1)
    document.getElementById('corrector' + (answered + 1)).classList.remove('incorrect')
    document.getElementById('corrector' + (answered + 1)).classList.add('correct')
  } else if (correct == false) {
    answers.splice(answered, 1, 0)
    document.getElementById('corrector' + (answered + 1)).classList.remove('correct')
    document.getElementById('corrector' + (answered + 1)).classList.add('incorrect')
  }

console.log(answered, correct)

  var button = 'btn' + (answered + 1)
  document.getElementById(button).classList.add('answered')
}

function finish() {
  if (window.confirm("Weet je zeker dat je de quiz wilt beëindigen?")) {
    result()
  }
}

function result() {
  for (let i = 1; i < 11; i++) {
    document.getElementById('box'+i).style.display = 'none'
  }
  document.getElementById('questionSelect').style.display = 'none'
  document.getElementById('resultPage').style.display = 'block'
  let score = 0;
  for (let i = 0; i < 10; i++) {
    score = score + answers[i]
  }
  document.getElementById('result').innerHTML = score + "/10";
}

function restart() {
  document.location.reload()
}