const questions = [
    {
        question: ' When was first official international football match was played?',
        answer :[
            {text:'1929',correct:false},
            {text:'1872',correct:true},
            {text:'1902',correct:false},
            {text:'1893',correct:false}
        ]
    },

    {
        question: 'who is the goat in football?',
        answer :[
            {text:'Neymar',correct:false},
            {text:'Ronaldo',correct:false},
            {text:'Mbappe',correct:false},
            {text:'Messi',correct:true}
        ]
    },

    {
        question: 'which country have most world cup in football?',
        answer :[
            {text:'Brazil',correct:true},
            {text:'Germany',correct:false},
            {text:'Spain',correct:false},
            {text:'argentina',correct:false}
        ]
    },

    {
        question: ' Which country became the first nation to win the Football World Cup?',
        answer :[
            {text:'Argentina',correct:false},
            {text:'Belgium',correct:false},
            {text:'Uruguay',correct:true},
            {text:'Brazil',correct:false}
        ]
    }
];


const questionelement = document.getElementById('question');
const answerbutton = document.getElementById('answer_button');
const nextbutton = document.getElementById('btn_next');

let currentquestionindex = 0;
let score = 0;

function startquiz(){
    currentquestionindex = 0;
    score = 0;
    nextbutton.innerHTML = 'Next';
    showquestion();
}

function  showquestion(){
    resetState();
    let currentquestion = questions[currentquestionindex];
    let questionNo = currentquestionindex + 1;
     questionelement.innerHTML = questionNo + '. ' + currentquestion.question;

   currentquestion.answer.forEach(answer =>{
    let button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');
    answerbutton.appendChild(button);
    if(answer.correct){
        button.dataset.correct = answer.correct;
    }
    button.addEventListener('click',selectAnswer);
   })

   }

   function resetState(){
    nextbutton.style.display='none';
    while(answerbutton.firstChild){
        answerbutton.removeChild(answerbutton.firstChild)
    }
   }


   function selectAnswer(e){
       const selectbtn = e.target;
       const isCorrect = selectbtn.dataset.correct === 'true'

       if(isCorrect){
        selectbtn.classList.add('correct')
        score++
       }else{
        selectbtn.classList.add('incorrect');
       }

       Array.from(answerbutton.children).forEach(button =>{
        if(button.dataset.correct === 'true'){
            button.classList.add('correct')
        }
        button.disabled = 'true'
       })

       nextbutton.style.display = 'block';
   }

   function showscore(){
    resetState()
    questionelement.innerHTML=`your score ${score} out of ${questions.length}`
    nextbutton.innerHTML = 'play again'
    nextbutton.style.display= 'block'
   }

     function handlenextbutton(){
        currentquestionindex++;
        if(currentquestionindex < questions.length){
            showquestion();
        }else{
            showscore();
        }
     }


   nextbutton.addEventListener('click',function(){
    if(currentquestionindex < questions.length){
           handlenextbutton();
    }else{
        startquiz();
    }
   })

   startquiz();



