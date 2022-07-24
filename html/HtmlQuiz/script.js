
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');

const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions,correctQuestionIndex;
let quizScore =0;


startButton.addEventListener('click',startGame);

nextButton.addEventListener('click' ,() =>{
    currentQuestionIndex++;
    setNextQuestion();
});


function startGame(){
    startButton.classList.add('hide');
    shuffledQuestions=questions.sort(() =>Math.random() -0.5);
    correctQuestionIndex=0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
    quizScore=0;

}

function setNextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[correctQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText= question.question;
    question.answers.forEach(answer) =>{
        const button =document.createElement('button')
        button.innerText=answer.text;
        button.classList.add('btn');
        if(answer.correct) {
            button.dataset.correct =answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button)
    }
}



function resetState(){
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.remoteChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e){
    const selectedButton=e.target
    const correct =selectedButton.dataset.correct

    setStatusClass(document.body,correct)
    Array.from(answerButtonsElement.children).forEach((button)=>{
        setStatusClass(button,button.dataset.correct)
    })
    if(shuffledQuestions.length > correctQuestionIndex +1){
        nextButton.classList.remove("hide");
    }else {
        startButton.innerText ="Restart";
        startButton.classList.remove.("hide");
    }
    if(selectedButton.dataset = correct) {
        quizScore++
    }
    document.getElementById("right-answers")
}

function setStatusClass(element,correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add("correct")
    }else {
        element.classList.add('wrong').innerText=quizScore
    }
}




function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
const questions = [
    {
        question: 'Which one of theses is a Javascript framework?',
        answers: [
            { text: 'Python', correct: false},
            { text: 'Django', correct: false},
            { text: 'React', correct: true},
            { text: 'Eclipse', correct: false},
        ],
    },
    {
        question: 'What is the name of the former Ghanaian president?',
        answers: [
            { text: 'Mahama', correct: true},
            { text: 'Lil-Wayne', correct: false},
            { text: 'Akwasi Boadu', correct: false},
            { text: 'Atta-Mills', correct: false},
        ],
    },
    {
        question: 'How many planets are there?',
        answers: [
            { text: '2', correct: false},
            { text: '16', correct: false},
            { text: '5', correct: false},
            { text: '9', correct: true},
        ],
    },
]
