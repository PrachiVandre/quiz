window.onload = function () {
  show(0);
}

// Validation


document.onkeydown = function(e) {
  if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 ||     e.keyCode === 117 || e.keycode === 17 || e.keycode === 85)) {//ctrl+u Alt+c, Alt+v will also be disabled sadly.
      alert('Not allowed');
  }
  return false;
};

//Questions
let questions = [
  {
    id: 1,
    question: "Which function of an Array object calls a function for each element in the array?",
    answer: "forEach()",
    options: [
      "forEach()",
      "every()",
      "forEvery()",
      "each()"
    ]
  },
  {
    id: 2,
    question: "Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?",
    answer: "alert(“GeeksforGeeks”);",
    options: [
      "alertbox(“GeeksforGeeks”);",
      "msg(“GeeksforGeeks”);",
      "msgbox(“GeeksforGeeks”);",
      "alert(“GeeksforGeeks”);"
    ]
  },
  {
    id: 3,
    question: "Which of the following is not a reserved word in JavaScript?",
    answer: "program",
    options: [
      "interface",
      "throws",
      "program",
      "short"
    ]
  },
  {
    id: 4,
    question: "Choose the correct JavaScript syntax to change the content of the HTML code.",
    answer: "document.getElementById(“geek”).innerHTML=”I am a Geek”;",
    options: [
      "document.getElement(“geek”).innerHTML=”I am a Geek”;",
      "document.getElementById(“geek”).innerHTML=”I am a Geek”;",
      "document.getId(“geek”)=”I am a Geek”;",
      "document.getElementById(“geek”).innerHTML=I am a Geek;"
    ]
  },
  {
    id: 5,
    question: "JavaScript is a ________ Side Scripting Language.",
    answer: "ISP",
    options: [
      "Server",
      "ISP",
      "Browser",
      "None of the above"
    ]
  }
];

// To save username in session storage
function submitForm(e) {
  e.preventDefault();
  let name = document.forms["welcome_form"]["name"].value;
  sessionStorage.setItem("name", name);
  location.href = "quiz.html";

}
// question number incremented
let question_count = 0;
let point = 0;

function next() {
  let user_answer = document.querySelector("li.option.active").innerHTML;
  console.log(user_answer);

  //check ans and give point 10
  if (user_answer == questions[question_count].answer) {
    point += 10;
    sessionStorage.setItem("points", point);
  }
 
  if (question_count == questions.length - 1) {
    // sessionStorage.setItem("time", `${minutes} minutes and ${seconds} seconds`);
    // clearInterval(mytime);
    location.href = "end.html";
    return;
  }

 

  question_count++;
  //console.log(question_count);
  show(question_count);
}

//show for display questions and answers
function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML=`
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}


// For active class colour
function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let j = 0; j < option.length; j++) {
        if (option[j].classList.contains('active')) {
          option[j].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    }
  }
}

