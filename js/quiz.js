function select(selected) {
    for (let i = 1; i < 11; i++) {
        document.getElementById('box'+i).style.display = 'none';
      }
    
    document.getElementById('box'+selected).style.display = 'block';
}

let answers = []

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

}