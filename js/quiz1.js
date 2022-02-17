function select(selected) {
    for (let i = 1; i < 11; i++) {
        document.getElementById('box'+i).style.display = 'none';
      }
    
    document.getElementById('box'+selected).style.display = 'block';
}

let answers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

function answer(correct) {
  answered = (event.target.parentElement.parentElement.id).replace("box","") - 1;
  if (correct == true) {
    answers.splice(answered, 1, 1)
  } else if (correct == false) {
    answers.splice(answered, 1, 0)
  }
  button = 'btn' + (answered + 1)
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