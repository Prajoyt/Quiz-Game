const quesJSON = [
  {
    correctAnswer: '1928',
    answers: ['1928', '1932', '1936', '1940'],
    question: 'India won its first Olympic hockey gold in...?'
  },
  {
    correctAnswer: '1957',
    answers: ['1955', '1956', '1957', '1966'],
    question: 'In which year did Milkha Singh win the first National title in the 400 m race?'
  },
  {
    correctAnswer: 'Brian Lara',
    answers: ['Sachin Tendulkar', 'Rahul Dravid', 'Steve Smith', 'Brian Lara'],
    question: 'Which player has scored the most runs in a single Test innings?'
  },
  {
    correctAnswer: 'Ajit Wadekar',
    answers: ['Vinoo Mankad', 'Nawab Pataudi', 'Ajit Wadekar', 'Kapil Dev'],
    question: 'Who was the 1st ODI captain for India?'
  },
  {
    correctAnswer: '1951',
    answers: ['1951', '1967', '1982', '1956'],
    question: 'The Asian Games were held in Delhi for the first time in...?'
  },

  {
    correctAnswer: 'Ahmedabad',
    answers: ['Mumbai', 'New Delhi', 'Ahmedabad', 'Kolkata'],
    question: 'Where did the 1st ODI match was played in India?'
  },
  {
    correctAnswer: 'K.D.Jadhav',
    answers: ['P.T.Usha', 'Milka Singh', 'Malleshwari', 'K.D.Jadhav'],
    question: 'Who was the first Indian to win an individual medal in Olympics?'
  },
  {
    correctAnswer: '10',
    answers: ['10', '2', '6', '8'],
    question: 'How many gold medals have been won by India in the Olympics so far?'
  },
  {
    correctAnswer: 'Barcelona',
    answers: ['Liverpool', 'Chelsea', 'RealMadrid', 'Barcelona'],
    question: 'Lionel Messi has played for which club'
  },
  {
    correctAnswer: 'Amarnath',
    answers: ['Kapil Dev', 'Sunil Gavaskar', 'Roger Binny', 'Amarnath'],
    question: 'Who was the man of the match of the 1983 World Cup Final?'
  },
]











/*const questionObj =
{
  category: 'Food & Drink',
  id: 'qa-1',
  correctAnswer: 'Three',
  answers: ['Two', 'Three', 'Four', 'Five'],
  question:
    "How many pieces of bun are in a Mcdonald's Big Mac?",

  category: 'Food & Drink',
  id: 'qa-1',
  correctAnswer: 'Three',
  answers: ['Two', 'Three', 'Four', 'Five'],
  question:
    "How many pieces of bun are in a Mcdonald's Big Mac?",



};*/

// //Destructuring the object
// const { correctAnswer, answers, question } = quesJSON;

//console.log(correctAnswer, answers, question);

let currentQues = 0;
let score = 0;
let totalQues=quesJSON.length;

let questionEL = document.querySelector('#question');
let optionsEL = document.querySelector('#options');
let scoreEL = document.querySelector('#score');

let nextEl=document.querySelector('#next')
//console.log(questionEL,optionsEL,scoreEL);

nextEl.addEventListener('click',()=>{
  scoreEL.textContent = `Score:${score}/${totalQues}`
  nextQuestion()

})





function showQuestion() {
  //Destructuring the object
  const { correctAnswer, answers, question } = quesJSON[currentQues];

  //Manipulating the Dom ,setting the text content
  questionEL.textContent = question;

  //populating the option div with buttons
  answers.map((value) => {
    const btn = document.createElement('button');
    btn.textContent = value;
    optionsEL.appendChild(btn);

    //adding event listener to the button to check correct answers
    btn.addEventListener('click', () => {
      console.log(value == correctAnswer);
      console.log(typeof (value), typeof (correctAnswer));
      //console.log(value.equals(correctAnswer));
      if (value == correctAnswer) {
        score++
      } else {
        score = score - 0.25
      }
      console.log(score, 'correct');
      scoreEL.textContent = `Score:${score}/${totalQues}`
      nextQuestion();
    })

  })



}
showQuestion()

function nextQuestion() {
  currentQues++;
  //console.log(currentQues);
  optionsEL.textContent=''
  if (currentQues >= quesJSON.length) {
    questionEL.textContent = `Quiz Completed with score ${score}`
    nextEl.remove()
  } else {
    showQuestion()
  }
}











