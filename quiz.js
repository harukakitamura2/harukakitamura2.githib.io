const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const quizQuestions = [
    {
     // create quiz questions
        question: "Haruka Kitamura has completed a PhD in:",
        answers: {
            a: "Computer coding",
            b: "Behavioural Neuroscience",
            c: "Forensic Psychology",
            d: "Human-computer interaction"
        },
        correctAnswer: "b"
    },
    {
        question: "Haruka Kitamura works at:",
        answers: {
            a: "Queensland Health",
            b: "University of Sunshine Coast",
            c: "Queensland University of Technology",
            d: "All of the above"
        },
        correctAnswer: "c"
    },
    {
        question: "Haruka's research skills include:",
        answers: {
            a: "Physiological data acquisition",
            b: "Planning and scheduling",
            c: "Leadership",
            d: "Programming languages"
        },
        correctAnswer: "a"
    },
    {
        question: "Haruka is super passionate about:",
        answers: {
            a: "GSR and HRV data acquisition",
            b: "Statistical analysis",
            c: "Data collection",
            d: "All of the above and more!"
        },
        correctAnswer: "d"
    }
];

function buildQuiz(){
    // step 2 variable to store the HTML output 
    const output = [];
    // step 3 create a for loop which will loop through the quiz questions array
    for(i=0; i<quizQuestions.length; i++){
        // step 4 variable to store the list of possible answers
        const answers = [];
        // step 5 for each available answer to this question add a html radio button
        for(letter in quizQuestions[i].answers){
            answers.push(
                '<label>'
                + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                + letter + ': '
                + quizQuestions[i].answers[letter]
                + '</label>'
                 );
            }
        // step 6 add this question and its answers to the output
        output.push(
            '<div class="question">' + quizQuestions[i].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
        // step 7 combine out output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join('');
}

function showResults() {
    //gather answer containers from our quiz 
    var answerContainers = quizContainer.querySelectorAll('.answers');
    //keep track of user's answers
    var numCorrect = 0; 
        // for each question find the selected answer
        for(i=0; i<quizQuestions.length; i++){
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
                //if answer is correct add to the number of correct answers
                if(userAnswer===quizQuestions[i].correctAnswer){
                    numCorrect++;
                    //colour the answers green 
                    answerContainers[i].style.color = 'lightgreen';
                }
                // if answer is wrong or blank
                else{
                    // color the answers red 
                    answerContainers[i].style.color = 'red';
                }
            }
            // show number of correct answers out of total
            if (numCorrect === 0) {
            resultsContainer.innerHTML = "That wasn't your best effort - you didn't get a single answer correct.";
            }
            if (numCorrect === 1) {
            resultsContainer.innerHTML = "There's room for improvement there! You only got one correct answer.";
            }
            if (numCorrect === 2) {
                resultsContainer.innerHTML = "That was okay! You got a score of 2 out of 4 for your responses. Have another go to see if you can improve on that.";
            }
            if (numCorrect === 3) {
                resultsContainer.innerHTML = "Congratulations! You got a good score of 3 out of 4 for your responses. You know Haruka pretty well!";
            }
            if (numCorrect === 4) {
                resultsContainer.innerHTML = "Congratulations! You got a perfect score of 4 out of 4 for your responses. You know Haruka so well!";
            }
}

//load quiz
buildQuiz();

//add event handler for users to submit quiz 
submitButton.onclick = function() {
    showResults();
}







    
    
    
    

