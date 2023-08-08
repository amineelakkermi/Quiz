
let questions = [
    {
        numb: 1,
        question: "What does HTML stand for?",
        answer: "C. Hyper Text Markup Language",
        options: [
            "A. Hyper Type Multi Language",
            "B. Hyper Text Multiple Language",
            "C. Hyper Text Markup Language",
            "D. Home Text Multi Language"
        ]
    },
    {
        numb: 2,
        question: "What does CSS stand for?",
        answer: "A. Cascading Style Sheet",
        options: [
            "A. Cascading Style Sheet",
            "B. Cute Style Sheet",
            "C. Computer Style Sheet",
            "D. Codehal Style Sheet"
        ]
    },
    {
        numb: 3,
        question: "What does PHP stand for?",
        answer: "A. Hypertext Preprocessor",
        options: [
            "A. Hypertext Preprocessor",
            "B. Hometext Programming",
            "C. Hypertext Preprogramming",
            "D. Programming Hypertext Preprocessor"
        ]
    },
    {
        numb: 4,
        question: "What does SQL stand for?",
        answer: "D. Structured Query Language",
        options: [
            "A. Strength Query Language",
            "B. Stylesheet Query Language",
            "C. Science Question Language",
            "D. Structured Query Language"
        ]
    },
    {
        numb: 5,
        question: "What does XML stand for?",
        answer: "D. Extensible Markup Language",
        options: [
            "A. Excellent Multiple Language",
            "B. Explore Multiple Language",
            "C. Extra Markup Language",
            "D. Extensible Markup Language"
        ]
    }
];







let home = document.getElementById('home');
let start = document.getElementById('start');
let popupInfo = document.getElementById('popup-info');
let exit = document.getElementById('exit');
let next = document.getElementById('next');
let quizContainer = document.getElementById('quiz-container');
let quizOptions = document.querySelector('.quiz-options-list');
let next1 = document.getElementById('next1');
let nbrQuestion = document.querySelector('.nbrQuestion');
let questionsBox = document.querySelector('.questions');
let scores = document.querySelector('.scores');
let quizResult = document.getElementById('quiz-result');
let gotoHome = document.getElementById('gotoHome');
let tryAgain = document.getElementById('tryAgain');
let resultScore = document.getElementById('result-score');
let circularProgress = document.getElementById('circular-progress');
let progressValue = document.getElementById('progress-value');


start.onclick = () => {
    popupInfo.classList.add('active');
    home.classList.add('active');
}

exit.onclick = () => {
    popupInfo.classList.remove('active');
    home.classList.remove('active');
}

next.onclick = () => {
    quizContainer.classList.add('active');
    popupInfo.classList.remove('active');
    
    showQuestion(0);
    incrementer(1);
    next1.classList.add('desactiver');
    

}

var nombre = 0;
var compt = 1;
var yourScore = 0;



next1.onclick = () => {
    if(compt < questions.length){
    nombre++;
    compt++;
    showQuestion(nombre);
    incrementer(compt);


     
    next1.classList.remove('active');
    next1.classList.add('desactiver');

    }
    else
    {
       
        quizResult.classList.add('active');
        circularValue()
        nombre = 0;
        compt = 1;
        yourScore = 0;
    }
}



function showQuestion(index){
    questionsBox.textContent = `${questions[index].numb} . ${questions[index].question}`;
    quizOptions.innerHTML = `
    <span class = "option">${questions[index].options[0]}</span>
    <span class = "option">${questions[index].options[1]}</span>
    <span class = "option">${questions[index].options[2]}</span>
    <span class = "option">${questions[index].options[3]}</span>
    `
    let option = document.querySelectorAll('.option');
    
    for(let i = 0 ; i < option.length ; i++){
        
        option[i].setAttribute('onclick' , 'optionSelected(this)');
        
    }

}


function optionSelected(answer){
    let userAnswer = answer.textContent;
    let correctAnswer = questions[nombre].answer;
    let allOption = quizOptions.children.length;
 

    if ( userAnswer == correctAnswer ){
        answer.classList.add('correct');
        yourScore++;
        theScore();
      
    }else{
        answer.classList.add('incorrect');
    } 

    for(let i = 0 ; i < allOption ; i++){

    if (quizOptions.children[i].textContent == correctAnswer){
    
        quizOptions.children[i].setAttribute('class' , 'option correct');

    }
    }

    for(let i = 0 ; i  < allOption ; i++){

    quizOptions.children[i].classList.add('disabled');

    }
    next1.classList.remove('desactiver');
    next1.classList.add('active');
    
}


function incrementer(){
    nbrQuestion.innerHTML = `${compt} of ${questions.length} Questions`;
}

function theScore(){
    scores.textContent = `Scores: ${yourScore} / ${questions.length}`;
}


gotoHome.addEventListener('click' , function(){
    quizResult.classList.remove('active');
    quizContainer.classList.remove('active');
    popupInfo.classList.remove('active');
    home.classList.remove('active');

})



tryAgain.onclick = () => {
   quizResult.classList.remove('active');

   showQuestion(nombre);
   incrementer(compt);
   theScore();
   
}



function circularValue(){
    resultScore.textContent = `Your Score ${yourScore} out of ${questions.length}`;
    let resultatDuScore = (yourScore * 100) / 5;
    

    let progressStartValue = 0;
    let speed = 30;
    let progress = setInterval(() => {
    progressStartValue++;
    progressValue.textContent = `${progressStartValue}%`;
    circularProgress.style.background = `conic-gradient(#c40094 ${progressStartValue * 3.6}deg , rgba(255 , 255 , 255 , 0.1) 0deg`;
    if( progressStartValue == resultatDuScore  )
    clearInterval(progress);
    } , speed)
}