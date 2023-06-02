var questions = [
    {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin"],
    answer: "Paris"
    },
    {
    question: "Who is the founder of Microsoft?",
    options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg"],
    answer: "Bill Gates"
    },
    {
    question: "What is the currency of Japan?",
    options: ["Yuan", "Yen", "Euro"],
    answer: "Yen"
    },
    {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Mars"],
    answer: "Jupiter"
    },
    {
    question: "What is the highest mountain in the world?",
    options: ["Mount Everest", "Mount Kilimanjaro", "Mount Fuji"],
    answer: "Mount Everest"
    },
    {
    question: "What is the largest country in the world?",
    options: ["Russia", "China", "United States"],
    answer: "Russia"
    },
    {
    question: "What is the smallest country in the world?",
    options: ["Vatican City", "Monaco", "San Marino"],
    answer: "Vatican City"
    },
    {
    question: "What is the largest animal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe"],
    answer: "Blue Whale"
    },
    {
    question: "What is the fastest land animal in the world?",
    options: ["Cheetah", "Lion", "Leopard"],
    answer: "Cheetah"
    },
    {
    question: "What is the largest bird in the world?",
    options: ["Albatross", "Ostrich", "Eagle"],
    answer: "Ostrich"
    },
    {
    question: "What is the smallest mammal in the world?",
    options: ["Shrew", "Bat", "Mouse"],
    answer: "Shrew"
    },
    {
    question: "What is the hottest continent on Earth?",
    options: ["Africa", "Asia", "South America"],
    answer: "Africa"
    },
    {
    question: "What is the largest ocean in the world?",
    options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean"
    },
    {
    question: "What is the tallest animal in the world?",
    options: ["Giraffe", "Elephant", "Horse"],
    answer: "Giraffe"
    },
    {
    question: "What is the smallest ocean in the world?",
    options: ["Arctic Ocean", "Atlantic Ocean", "Indian Ocean"],
    answer: "Arctic Ocean"
    },
    {
    question: "What is the largest desert in the world?",
    options: ["Sahara Desert", "Gobi Desert", "Kalahari Desert"],
    answer: "Sahara Desert"
    },
    {
    question: "What is the longest river in the world?",
    options: ["Nile River", "Amazon River", "Yangtze River"],
    answer: "Nile River"
    },
    {
    question: "What is the largest lake in the world?",
    options: ["Lake Superior", "Caspian Sea", "Lake Victoria"],
    answer: "Caspian Sea"
    },
    {
    question: "What is the highest waterfall in the world?",
    options: ["Niagara Falls", "Angel Falls", "Victoria Falls"],
    answer: "Angel Falls"
    },
    {
    question: "What is the largest volcano in the world?",
    options: ["Mount Fuji", "Mount Kilimanjaro", "Mauna Loa"],
    answer: "Mauna Loa"
    }
    ];
    
    var currentQuestion = 0;
    var score = 0;
    var nextBtn = document.getElementById("next-btn");
    
    function displayQuestion() {
    var question = document.getElementById("question");
    var options = document.getElementById("options");
    
    question.innerHTML = questions[currentQuestion].question;
    options.innerHTML = "";
    
    for (var i = 0; i < questions[currentQuestion].options.length; i++) {
    options.innerHTML += "<label><input type='radio' name='answer' value='" + questions[currentQuestion].options[i] + "'>" + questions[currentQuestion].options[i] + "</label>";
    }
    
    var optionBtns = document.getElementsByName("answer");
    
    for (var i = 0; i < optionBtns.length; i++) {
    optionBtns[i].addEventListener("click", function() {
    if (this.value == questions[currentQuestion].answer) {
    score++;
    }
    
    // Disable all answer options to prevent multiple selections
    for (var j = 0; j < optionBtns.length; j++) {
    optionBtns[j].disabled = true;
    }
    
    // Display the next question
    if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    displayQuestion();
    } else {
        
    // Display the final score if all questions have been answered
    var result = document.getElementById("result");
    result.innerHTML = "Your score is " + score + " out of " + questions.length;
    
    if (score/ questions.length < 0.7) {
    var retryBtn = document.getElementById("retry-btn");
    retryBtn.style.display = "block";
    
    retryBtn.addEventListener("click", function() {
    currentQuestion = 0;
    score = 0;
    displayQuestion();
    result.innerHTML = "";
    retryBtn.style.display = "none";
    });
    }
    }
    });
    }
    }
    
    nextBtn.addEventListener("click", function() {
    // Display the next question
    if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    displayQuestion();
    } else {
    // Display the final score if all questions have been answered
    var result = document.getElementById("result");
    result.innerHTML = "Your score is " + score + " out of " + questions.length;
    
    if (score/ questions.length < 0.7) {
    var retryBtn = document.getElementById("retry-btn");
    retryBtn.style.display = "block";
    
    retryBtn.addEventListener("click", function() {
    currentQuestion = 0;
    score = 0;
    displayQuestion();
    result.innerHTML = "";
    retryBtn.style.display = "none";
    });
    }
    }
    });
    
    displayQuestion();