async function fetchQuiz() {
    try {
        const response = await axios.get('http://localhost:3000/api/v1/questions', {
        params:{
            limit:15,
            offset:0,
        },
            withCredentials: true,
        });
        response.data.data.map((Question, idx) => {
            displayQuestions(Question, idx);
        });
    } catch (error) {
        console.error('Failed to fetch quiz:', error);
    }
}
function displayQuestions(Question, idx) {
    const section = document.createElement("section");
    section.setAttribute("id", Question.id);
    let span = document.createElement("span");
    span.innerText = `Q${idx + 1}. ` + Question.question;
    section.appendChild(span);
    section.appendChild(document.createElement("br"));
    Question.options.map((option, optionIdx) => {
        let input = document.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("id", `q${idx}-option${optionIdx}`);
        input.setAttribute("name", `q${idx}`);
        section.appendChild(input);

        let label = document.createElement("label");
        label.setAttribute("for", `q${idx}-option${optionIdx}`);
        label.innerText = option;
        section.appendChild(label);
        section.appendChild(document.createElement("br"));
    });
    document.getElementById("questionsContainer").appendChild(section);
}
async function submitQuiz() {
    let payload = [];
    const questions = document.getElementById("questionsContainer").children;

    for (let i = 0; i < questions.length; i++) {
        const questionId = questions[i].id;
        let selectedAnswer = Array.from(questions[i].querySelectorAll('input[type="radio"]'))
            .filter(input => input.checked)
        selectedAnswer = selectedAnswer[0].id[selectedAnswer[0].id.length-1];
        payload.push({
            question_id: questionId,
            selected_answer: selectedAnswer
        });
    }
    try {
        const response = await axios.post('http://localhost:3000/api/v1/bulkResponses', payload, {
            withCredentials: true,
        });
        
    } catch (error) {
        console.error('Failed to submit quiz:', error);
    }
    const showResultHeading = document.getElementById("QuizResult-Heading");
    showResultHeading.hidden = false;
    QuizTotalScore();
    QuizFeedback();
}

async function QuizTotalScore(){
    const totalScore = document.getElementById("totalScore");
    try {
        var QuizScore = await axios.get("http://localhost:3000/api/v1/score",{
            withCredentials:true,
        })
    } catch (error) {
        console.log("Failed to get score due to"+error);
    }
    totalScore.innerHTML= `Total Score: ${QuizScore.data.data}`;
}

async function QuizFeedback(){
    const feedbackContainer = document.getElementById("feedbackContainer");
    try {
        var response = await axios.get("http://localhost:3000/api/v1/quizFeedback",{
            withCredentials:true,
        });
    } catch (error) {
        console.log("Unable to get feedback due to "+error);
    }
    const feedback = response.data.data; 
    feedback.map((question , idx)=>{
        let section = document.createElement("section");
        let questionSpan = document.createElement("span");
        questionSpan.innerText = `Q${idx+1}. ${question.question}`;
        let yourAnsSpan = document.createElement("span");
        yourAnsSpan.innerText = `Submitted Answer: ${question.selected_answer}`;
        let correctAnsSpan = document.createElement("span");
        correctAnsSpan.innerText = `Correct Answer: ${question.correct_answer}`;
        let scoreSpan = document.createElement("span");
        scoreSpan.innerHTML = `Question Score: ${question.is_correct == false?0:1}/1`;

        section.appendChild(questionSpan);
        section.appendChild(document.createElement("br"));
        section.appendChild(yourAnsSpan);
        section.appendChild(document.createElement("br"));
        section.appendChild(correctAnsSpan);
        section.appendChild(document.createElement("br"));
        section.appendChild(scoreSpan);
        section.appendChild(document.createElement("br"));
        feedbackContainer.appendChild(section);
        feedbackContainer.appendChild(document.createElement("br"));
    });
}

fetchQuiz();