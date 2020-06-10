// Complete-This-Code

// List of questions (statement + answer)
const questions = [
    {
      statement: "2+2?",
      answer: "2+2 = 4"
    },
    {
      statement: "In which year did Christopher Columbus discover America?",
      answer: "1492"
    },
    {
      statement:
        "What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?",
      answer: "The E letter"
    }
  ];

  const content = document.querySelector('#content');

  questions.forEach((question, index) => {
    const statement = document.createElement('p');
    const showAnswer = document.createElement('button');

    showAnswer.innerText = 'Show answer';
    showAnswer.id = index;

    showAnswer.addEventListener('click', e => {
        const answer = document.createElement('p');
        answer.innerText = questions[parseInt(e.target.id)].answer;
        e.target.parentNode.replaceChild(answer, e.target);
    });

    statement.innerHTML = `<strong>Question ${index}:</strong> <em>${question.statement}</em>`;
    content.appendChild(statement);
    content.appendChild(showAnswer);
  });