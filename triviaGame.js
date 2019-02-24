var questions = [
  {
    prompt: "1.) Roses are red.", 
    answer: true
  },
  {
    prompt: "2.) Grass is black.", 
    answer: false
  },
  {
    prompt: "3.) Violets are blue.", 
    answer: true
  },
  {
    prompt: "4.) Apples are orange", 
    answer: false
  },
  {
    prompt: "5.) Sugar is sweet", 
    answer: true
  }
]
var currentQuestion = 0;
var score = 0;
var question = document.getElementById("quiz")
question.innerHTML = questions[currentQuestion].prompt
var trueBtn = document.getElementById("btnT")
var falseBtn = document.getElementById("btnF")
var previousBtn = document.getElementById("btnP")
var nextBtn = document.getElementById("btnN")
//check answer
function submitAnswer(answer){
var correctAnswer = questions[currentQuestion].answer
if(correctAnswer === answer){
  alert("YES!")
  score++;
} else{
  alert("WRONG!")
}
if(currentQuestion < questions.length - 1){

  question.innerHTML = questions[currentQuestion].prompt

} else{
  alert("Game Over, YOUR SCORE: " + score)
}
}
function nextQuestion(){
  if(currentQuestion < questions.length - 1){
  currentQuestion++;
    question.innerHTML = questions[currentQuestion].prompt
  }
}
function previousQuestion(){
  if(currentQuestion < questions.length - 1){
  currentQuestion--;
    question.innerHTML = questions[currentQuestion].prompt
  }
}
//check if question is incorrect, arrow function used to return the function and not call it.   prevent function from being called immediately without the user.  waits for call instead of invoking immediately.
trueBtn.addEventListener("click", () => submitAnswer(true))
falseBtn.addEventListener("click", () => submitAnswer(false))
nextBtn.addEventListener("click", () => nextQuestion())
previousBtn.addEventListener("click", () => previousQuestion())



  

