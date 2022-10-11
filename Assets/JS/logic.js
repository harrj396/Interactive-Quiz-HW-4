// variables to keep track of quiz state
  let shuffledQuestions, currentQuestion;
  let currentQuestionIndex = 0
  var seconds = 60

// my questions
var questions = [
  {
  title: 'this is my test question, pick 2!',
  choices: [
    {text: 'one', correct: false},
    {text: 'two', correct: true},
    {text: 'three', correct: false},
    {text: 'four', correct: false},
  ]
  // more questions here!
  },
  {
    title: 'this is my test question, pick 1!',
    choices: [
      {text: 'one', correct: true},
      {text: 'two', correct: false},
      {text: 'three', correct: false},
      {text: 'four', correct: false},
    ]
    // more questions here!
    }

]

// ////////////////////////////////////////////////////////////////////////////
  // variables to reference DOM
var questionsJS = document.querySelector('.questionSection');
var startScreenJS = document.querySelector('.startScreen')
var questionsSectionJS = document.querySelector('.questionsSection')

/// FUNCTION TO START THE QUIZ
function startQuiz() {
  
  startScreenJS.classList.add('hide');
  questionsSectionJS.classList.remove('hide');
  currentQuestions = 0

  clockTick();
  getQuestion();
}

/// FUNCTION TO GET/SHOW EACH QUESTION ///
function getQuestion() { 
  var question = questions[currentQuestionIndex]
  //Grab H2 with ID of question-title w/ document.element
  // Set value of H2 = to questions.title
  // take div id-choices to make buttons with docuemnt.create with append, loop over choices

  //   resetState()
//   showQuestion(shuffledQuestions[questions])
}

// function showQuestion(questions) {
//   if (currentQuestionIndex > 3) {
      
//   }
// }
  // update title with current question

  // clear out any old question choices

  // loop over choices
    // FOR {
      // create new button for each choice
  
      // display on the page
      
    // } 


/// FUNCTION FOR CLICKING A QUESTION ///
function questionClick(event) {

  // if the clicked element is not a choice button, do nothing.
  if (something) {

  }

  if (something) {
  // check if user guessed wrong
    // penalize time

    // display new time on page

    // give them feedback, letting them know it's wrong
  } else {
    // give them feedback, letting them know it's right
  }

  // flash right/wrong feedback on page for a short period of time

  // move to next question

  // check if we've run out of questions
    // if so, end the quiz
    // else, get the next question
}

/// FUNCTION TO END THE QUIZ ///
function quizEnd() {
  // stop timer

  // show end screen

  // show final score

  // hide questions section
}

/// FUNCTION FOR UPDATING THE TIME ///
function clockTick() {
  // update time

  // check if user ran out of time
}

function saveHighscore() {
  // get value of input box - for initials

  // make sure value wasn't empty
    // get saved scores from localstorage, or if not any, set to empty array

    // format new score object for current user

    // save to localstorage

    // redirect to next page
}

/// CLICK EVENTS ///
  // user clicks button to submit initials

  // user clicks button to start quiz

  // user clicks on element containing choices
