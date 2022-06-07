let level = 0;
let randomWords = [];
let easyWords = ['apple', 'gene'];
let mediumWords = ['article', 'trident'];
let hardWords = ['aposthrophe', 'justification'];

// Select game difficulty and push correct array 

function changeDifficulty(difficulty = 0) {
  
    level = difficulty
    randomWords = []; // if you remove this, your array gets bigger and bigger
    
    if (level === 0) {
        randomWords.push(...mediumWords)
    } else if (level === 1) {
        randomWords.push(...easyWords)
    } else if (level === 2) {
        randomWords.push(...mediumWords)
    } else if (level === 3){
        randomWords.push(...hardWords)
    }
  
  // lets see what our words are
  console.log(randomWords);
  
  getWord();
  
}

// Generate random word
function getWord() {
    let answer = randomWords[Math.floor(Math.random()*randomWords.length)]
    console.log(answer);
}

// Call functions
changeDifficulty();