function randomNumber(item) {
  return Math.floor(Math.random() * item);
}

const mlbbRound = {
  person: ["Pharsa", "Valir", "Lunoks", "Natasha", "Dshonson"],
  line: ["Gold", "Mid", "Exp", "Roum", "Jungle"],
  end: ["Winner", "Loser"],
};

let answer;
let result;
let randRes;

function answerPrint() {
  answer = [];
  result = [];

  for (item in mlbbRound) {
    randRes = randomNumber(item.length - 1);
    switch (item) {
      case "person":
        answer.push(mlbbRound.person[randRes]);
        break;
      case "line":
        answer.push(mlbbRound.line[randRes]);
        break;
      case "end":
        answer.push(mlbbRound.end[randRes]);
        break;
    }
  }
  result.push(
    `Your person: ${answer[0]} <br />
  Your line: ${answer[1]} <br />
  You are: ${answer[2]}`
  );
}

const button = document.querySelector("button");
function buttonClick() {
  answerPrint();
  const mlbb = document.querySelector("#pushme");
  mlbb.innerHTML = result;
  mlbb.style.cssText = `
    font-size: 1.5rem;
    font-weight: 500;
  `;
}

button.onclick = buttonClick;

let tagirButton = document.getElementById("tagir");
let tagir = document.getElementById("passport");
let i = 1;

function reverse() {
  if (i === 1) {
    i = -1;
  } else {
    i = 1;
  }
  tagir.style.transform = `scaleX(${i})`;
}
tagirButton.onclick = reverse;
