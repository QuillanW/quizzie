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
    console.log('Correct')
    answers.splice(answered, 1, 1)
  } else if (correct == false) {
    console.log('Incorrect')
    answers.splice(answered, 1, 0)
  } else {
    console.log('ERROR')
  }
  localStorage.setItem('answered', answers)
}

function finish() {
  if (window.confirm("Weet je zeker dat je de quiz wilt beëindigen?")) {
    window.location.replace("result.html")
  }
}

function result() {
  var answered = localStorage.getItem('answered')
  console.log(answered)
  let results = 0;
  for (let i = 0; i < 10; i++) {
      console.log(answered[i]);
  }
  console.log(results)
  document.getElementById('result').value = results + "/10";
}