const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
  {
    "question": "What part of the body is this? 👃",
    "choice1": "Ear",
    "choice2": "Eyes ",
    "choice3": "Nose",
    "choice4": "Hands",
    "answer": 3
  },
  {
    question:"What part of the body is this? 👅",
    choice1: "Tongue",
    choice2: "Ear",
    choice3: "Eyes",
    choice4: "Hands",
    answer: 1
  },

  {
    question:"What part of the body is this? 👂",
    choice1: "Hands",
    choice2: "Eyes",
    choice3: "Shoulder",
    choice4: "Ear",
    answer: 4
  },
  {
    question: "What part of the body is this? 👐",
    choice1: "Eyes",
    choice2: "Hair",
    choice3: "Head",
    choice4: "Hands",
    answer: 4
  },
  {
    question: "What part of the body is this? 👣",
    choice1: "Eyes",
    choice2: "Hair",
    choice3: "Feet",
    choice4: "Hands",
    answer: 3
  },
  {
    question: "What part of the body is this? 🦵",
    choice1: "Eyes",
    choice2: "Hair",
    choice3: "Hands",
    choice4: "Knee",
    answer: 4
  },
  {
    question: "What part of the body is this? 🧠",
    choice1: "Eyes",
    choice2: "Hair",
    choice3: "Brain",
    choice4: "Hands",
    answer: 3
  },
  {
    question: "What part of the body is this? 👄",
    choice1: "Ear",
    choice2: "Mouth",
    choice3: "Arm",
    choice4: "Knee",
    answer: 2
  },
  {
    question: "What part of the body is this? 🦷",
    choice1: "Tooth",
    choice2: "Hair",
    choice3: "Ear",
    choice4: "Brain",
    answer: 1
  },
  {
    question: "What part of the body is this? 👀",
    choice1: "Mouth",
    choice2: "Eyes",
    choice3: "Ear",
    choice4: "Tooth",
    answer: 2
  },
  {
    question: "What kind of color is this?  💛",
    choice1: "Orange",
    choice2: "Blue",
    choice3: "Yellow",
    choice4: "Red",
    answer: 3
  }, 
  {
    question: "What kind of color is this?  🧡",
    choice1: "Orange",
    choice2: "Red",
    choice3: "Blue",
    choice4: "Yellow",
    answer: 1
  }, 
  {
    question: "What kind of color is this?  💙",
    choice1: "Orange",
    choice2: "Green",
    choice3: "Blue",
    choice4: "Black",
    answer: 3
  }, 
  {
    question: "What kind of color is this?  💚",
    choice1: "Pink",
    choice2: "Green",
    choice3: "Red",
    choice4: "Blue",
    answer: 2
  }, 
  {
    question: "What kind of color is this?  💜",
    choice1: "Red",
    choice2: "Blue",
    choice3: "Yellow",
    choice4: "Violet",
    answer: 4
  }, 
  {
    question: "What kind of color is this?  💗",
    choice1: "Green",
    choice2: "Pink",
    choice3: "Black",
    choice4: "Blue",
    answer: 2
  }, 
  {
    question: "What kind of color is this?  🤎",
    choice1: "Blue",
    choice2: "Violet",
    choice3: "Brown",
    choice4: "Yellow",
    answer: 3
  }, 
  {
    question: "What kind of color is this?  🖤",
    choice1: "Black",
    choice2: "Violet",
    choice3: "Green",
    choice4: "Yellow",
    answer: 1
  }, 
  {
    question: "What kind of color is this?  ❤️",
    choice1: "White",
    choice2: "Black",
    choice3: "Red",
    choice4: "Green",
    answer: 3
  }, 
  {
    question: "What kind of color is this?  🤍",
    choice1: "Green",
    choice2: "Black",
    choice3: "Red",
    choice4: "White",
    answer: 4
  },
  {
    question: "It's start with a letter?  🤴",
    choice1: "L",
    choice2: "K",
    choice3: "B",
    choice4: "O",
    answer: 2
  },
  {
    question: "It's start with a letter?  🏡",
    choice1: "B",
    choice2: "L",
    choice3: "H",
    choice4: "U",
    answer: 3
  },
  {
    question: "It's start with a letter?  🐕",
    choice1: "D",
    choice2: "H",
    choice3: "C",
    choice4: "L",
    answer: 1
  },
  {
    question: "It's start with a letter?  🌻",
    choice1: "E",
    choice2: "H",
    choice3: "F",
    choice4: "G",
    answer: 3
  },
  {
    question: "It's start with a letter?  🍭",
    choice1: "A",
    choice2: "C",
    choice3: "L",
    choice4: "F",
    answer: 3
  },
  {
    question: "It's start with a letter?  🐷",
    choice1: "P",
    choice2: "H",
    choice3: "L",
    choice4: "D",
    answer: 1
  },
  {
    question: "It's start with a letter?  🐘",
    choice1: "S",
    choice2: "E",
    choice3: "L",
    choice4: "J",
    answer: 2
  },
  {
    question: "It's start with a letter?  🚙",
    choice1: "S",
    choice2: "R",
    choice3: "C",
    choice4: "A",
    answer: 3
  },
  {
    question: "It's start with a letter?  🐻",
    choice1: "B",
    choice2: "O",
    choice3: "X",
    choice4: "Z",
    answer: 1
  },
  {
    question: "It's start with a letter?  👸",
    choice1: "Y",
    choice2: "G",
    choice3: "M",
    choice4: "Q",
    answer: 4
  },
  {
    question: "What shape is this?  🟦",
    choice1: "Square",
    choice2: "Oval",
    choice3: "Rectangle",
    choice4: "Circle",
    answer: 1
  },
  {
    question: "What shape is this? 🔹",
    choice1: "Square",
    choice2: "Rectangle",
    choice3: "Diamond",
    choice4: "Circle",
    answer: 3
  },
  {
    question: "What shape is this? ⬮",
    choice1: "Oval",
    choice2: "Rectangle",
    choice3: "Circle",
    choice4: "Diamond",
    answer: 1
  },
  {
    question: "What shape is this? ❤️",
    choice1: "Square",
    choice2: "Heart",
    choice3: "Oval",
    choice4: "Diamond",
    answer: 2
  },
  {
    question: "What shape is this? ➜",
    choice1: "Square",
    choice2: "Heart",
    choice3: "Diamond",
    choice4: "Arrow",
    answer: 4
  },
  {
    question: "What shape is this? ⭐",
    choice1: "Square",
    choice2: "Star",
    choice3: "Circle",
    choice4: "Arrow",
    answer: 2
  },
  {
    question: "What shape is this? ⬢",
    choice1: "Square",
    choice2: "Arrow",
    choice3: "Hexagon",
    choice4: "Star",
    answer: 3
  },
  {
    question: "What shape is this? ⬟",
    choice1: "Pentagon",
    choice2: "Square",
    choice3: "Hexagon",
    choice4: "Star",
    answer: 1
  },
  {
    question: "What shape is this? ▲",
    choice1: "Pentagon",
    choice2: "Circle",
    choice3: "Hexagon",
    choice4: "Triangle",
    answer: 4
  },
  {
    question: "What shape is this? ▭",
    choice1: "Pentagon",
    choice2: "Square",
    choice3: "Hexagon",
    choice4: "Rectangle",
    answer: 4
  },
  {
    question: "How many sides are there in a HEXAGON? ⬢",
    choice1: "9",
    choice2: "6",
    choice3: "8",
    choice4: "5",
    answer: 2
  },
  {
    question: "How many sides are there in a PENTAGON? ⬠",
    choice1: "8",
    choice2: "10",
    choice3: "7",
    choice4: "5",
    answer: 4
  },
  
  {
    question: "How many sides are there in a OVAL? ⬭",
    choice1: "0",
    choice2: "2",
    choice3: "6",
    choice4: "7",
    answer: 1
  },
  {
    question: "How many sides are there in a RECTANGLE? ▭",
    choice1: "2",
    choice2: "5",
    choice3: "9",
    choice4: "4",
    answer:4
  },
  {
    question: "How many sides are there in a SQUARE?🟩",
    choice1: "5",
    choice2: "4",
    choice3: "3",
    choice4: "8",
    answer:2
  },
  {
    question: "How many sides are there in a DIAMOND? ♦️",
    choice1: "4",
    choice2: "1",
    choice3: "5",
    choice4: "7",
    answer:1
  },
  {
    question: "How many sides are there in a CIRCLE? 🔴",
    choice1: "2",
    choice2: "6",
    choice3: "8",
    choice4: "0",
    answer:4
  },
  {
    question: "How many sides are there in a STAR? ⭐",
    choice1: "5",
    choice2: "9",
    choice3: "4",
    choice4: "0",
    answer:1
  }
  
];


//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    //go to the end page
    return window.location.assign("end.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  //Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};

startGame();
