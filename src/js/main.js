let currentQuestionIndex = 0;
let totalPoints = {
    "saver": 0,
    "spender": 0,
    "investor": 0,
    "compulsive": 0,
    "gambler": 0,
    "debtor": 0,
    "shopper": 0,
    "indifferent": 0
};

document.addEventListener('DOMContentLoaded', () => {
    const welcomeScreen = document.getElementById('welcome-screen');
    const quizContainer = document.getElementById('quiz-container');
    const formContainer = document.getElementById('form-container');
    const submitButton = document.getElementById('submit-button');
    const resultsContainer = document.getElementById('result-container');
    const startButton = document.getElementById('start-button');
    const progressContainer = document.getElementById('progress-container');
    const progressBar = document.getElementById('progress-bar');
    const totalQuestions = questions.length;

    startButton.addEventListener('click', () => {
        welcomeScreen.style.display = 'none';
        quizContainer.style.display = 'flex';
        loadQuestion(currentQuestionIndex);
    });

    document.getElementById('restart-button').addEventListener('click', restartQuiz);

    document.querySelectorAll('.answer-button').forEach(button => {
        button.addEventListener('click', function () {
            recordAnswer(this.value);
        });
    });

    function updateProgressBar() {
        if (totalQuestions > 0) {
            const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
            progressBar.style.width = `${progress}%`;
        }
    }

    function loadQuestion(index) {
        const question = questions[index];
        document.getElementById('question-text').innerText = question.value;

        updateProgressBar();

        document.getElementById('answer-sa').value = "sa";
        document.getElementById('answer-a').value = "a";
        document.getElementById('answer-n').value = "n";
        document.getElementById('answer-d').value = "d";
        document.getElementById('answer-sd').value = "sd";
    }

    function recordAnswer(answer) {
        const question = questions[currentQuestionIndex];
        const points = question.points[answer];

        for (const key in points) {
            if (totalPoints.hasOwnProperty(key)) {
                totalPoints[key] += points[key];
            }
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion(currentQuestionIndex);
        } else {
            showForm();
        }
    }

    function showForm() {
        progressContainer.style.display = 'none';
        quizContainer.style.display = 'none';
        formContainer.style.display = 'block';

        submitButton.onclick = () => {
            const firstName = document.querySelector('.first-name').value.trim();
            const lastName = document.querySelector('.last-name').value.trim();
            const email = document.querySelector('.email input').value.trim();

            if (!firstName || !email) {
                alert("Please enter your first name and email.");
                return;
            }

            localStorage.setItem("userFirstName", firstName);
            localStorage.setItem("userLastName", lastName);
            localStorage.setItem("userEmail", email);

            formContainer.style.display = 'none';

            showResults();
        };
    }

    function showResults() {
        const firstName = localStorage.getItem("userFirstName") || "Guest";
        const lastName = localStorage.getItem("userLastName") || "";
        const email = localStorage.getItem("userEmail") || "";

        let maxPoints = 0;
        let personalityType = '';
        for (const type in totalPoints) {
            if (totalPoints[type] > maxPoints) {
                maxPoints = totalPoints[type];
                personalityType = type;
            }
        }

        const personalityData = personalitiesData.descriptions[personalityType];
        const resultsContainer = document.getElementById('detailed-results');

        progressContainer.style.display = 'none';
        formContainer.style.display = 'none';
        document.getElementById('question-container').style.display = 'none';
        document.getElementById('answers').style.display = 'none';
        document.getElementById('result-container').style.display = 'block';

        document.getElementById('result').innerText = `${firstName}, you are most similar to the ${capitalize(personalityData.animal)}`;

        const total = getTotalPoints();
        resultsContainer.innerHTML = '';

        const sortedTypes = Object.keys(totalPoints).map(type => {
            const percentage = (totalPoints[type] / total) * 100;
            return { type, percentage };
        }).sort((a, b) => b.percentage - a.percentage);

        const maxButtonWidth = 400;
        const additionalLength = 100;
        const scalingFactor = 3;

        sortedTypes.forEach(({ type, percentage }) => {
            const animalName = personalitiesData.descriptions[type].animal;
            const buttonWidth = Math.max((percentage / 100) * (maxButtonWidth * scalingFactor) + additionalLength, 160);
            const button = document.createElement('button');
            button.innerText = `${capitalize(animalName)}: ${percentage.toFixed(2)}%`;
            button.style.width = `${buttonWidth}px`;
            button.onclick = () => showPersonalityDetails(type);

            if (type === personalityType) {
                button.classList.add('largest-button');
            }

            resultsContainer.appendChild(button);
        });

        showPersonalityDetails(personalityType);

        const currentDate = new Date().toISOString();
        const quizResult = {
            ResultId: Date.now().toString(),
            date: currentDate,
            personalityType: personalityType,
            saver: totalPoints.saver,
            spender: totalPoints.spender,
            investor: totalPoints.investor,
            compulsive: totalPoints.compulsive,
            gambler: totalPoints.gambler,
            debtor: totalPoints.debtor,
            shopper: totalPoints.shopper,
            indifferent: totalPoints.indifferent
        };

        saveQuizResult(quizResult);

        async function saveQuizResult(quizResult) {
            try {
                const response = await fetch('https://mpq-backend.onrender.com/save-quiz-result', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(quizResult),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log(data.message);
            } catch (error) {
                console.error('Error saving quiz result:', error);
            }
        }

        document.getElementById('feedback-form').addEventListener('submit', async (event) => {
            event.preventDefault();

            const feedbackData = {
                shareHabits: event.target.shareHabits.value,
                recommendSurvey: event.target.recommendSurvey.value,
                comfortableTalking: event.target.comfortableTalking.value,
                engagement: event.target.engagement.value,
                resultsAccurate: event.target.resultsAccurate.value,
                resultsHelpful: event.target.resultsHelpful.value,
                interactivity: event.target.interactivity.value,
                practicalSteps: event.target.practicalSteps.value,
                additionalFeatures: Array.from(event.target.additionalFeatures)
                    .filter(checkbox => checkbox.checked)
                    .map(checkbox => checkbox.value),
                saveResults: event.target.saveResults.value,
                visualSatisfaction: event.target.visualSatisfaction.value,
                timestamp: currentDate
            };

            try {
                const response = await fetch('https://mpq-backend.onrender.com/submit-feedback', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(feedbackData),
                });

                const result = await response.json();
                if (response.ok) {
                    alert(result.message);
                } else {
                    alert(result.error);
                }
            } catch (error) {
                console.error('Error submitting feedback:', error);
                alert('Failed to submit feedback. Please try again later.');
            }
        });

        function showPersonalityDetails(personalityType) {
            const personalityData = personalitiesData.descriptions[personalityType];
            const detailsContainer = document.getElementById('personality-details');
            const resultAnimalImage = document.getElementById("result-animal-image");

            if (personalityData) {
                detailsContainer.innerHTML = `
                    <div class="details-box left"><img id="topper-for-line" class="responsive-image" src="src/assets/Quiz asset-02.png"><img id="description-image" class="responsive-image" src="/src/assets/Quiz asset-01.png"><strong class="large-text">Description</strong><br><br>${personalityData.description}</div>
                    <div class="details-box right"><img id="advantages-image" class="responsive-image" src="/src/assets/Quiz asset-01.png"><strong class="large-text">Advantages</strong><br><ul>${personalityData.advantages.map(item => `<li>${item}</li>`).join('')}</ul></div>
                    <div class="details-box left"><img id="disadvantages-image" class="responsive-image" src="/src/assets/Quiz asset-01.png"><strong class="large-text">Disadvantages</strong><br><ul>${personalityData.disadvantages.map(item => `<li>${item}</li>`).join('')}</ul></div>
                    <div class="details-box right"><img id="motivators-image" class="responsive-image" src="/src/assets/Quiz asset-01.png"><strong class="large-text">Motivators</strong><br><ul>${personalityData.motivators.map(item => `<li>${item}</li>`).join('')}</ul></div>
                    <div class="details-box left"><img id="topper-for-line-2" class="responsive-image" src="src/assets/Quiz asset-02.png"><img id="demotivators-image" class="responsive-image" src="/src/assets/Quiz asset-01.png"><strong class="large-text">Demotivators</strong><br><ul>${personalityData.demotivators.map(item => `<li>${item}</li>`).join('')}</ul></div>
                `;

                const animalImages = {
                    "saver": "/src/assets/animal_pngs/squirrel.png",
                    "spender": "/src/assets/animal_pngs/poodle.png",
                    "investor": "/src/assets/animal_pngs/owl.png",
                    "compulsive": "/src/assets/animal_pngs/bee.png",
                    "gambler": "/src/assets/animal_pngs/rabbit.png",
                    "debtor": "/src/assets/animal_pngs/armadillo.png",
                    "shopper": "/src/assets/animal_pngs/octopus.png",
                    "indifferent": "/src/assets/animal_pngs/panda.png"
                };

                if (animalImages[personalityType]) {
                    resultAnimalImage.src = animalImages[personalityType];
                    resultAnimalImage.style.display = "block";
                } else {
                    resultAnimalImage.style.display = "none";
                }
            } else {
                detailsContainer.innerHTML = "No details available for this personality type.";
            }
        }

        function capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
    }

    function getTotalPoints() {
        return Object.values(totalPoints).reduce((sum, points) => sum + points, 0);
    }

    document.getElementById('feedback-button').addEventListener('click', function () {
        document.getElementById('feedback-popup').classList.add('active');
    });

    document.addEventListener('click', function (event) {
        let feedbackPopup = document.getElementById('feedback-popup');
        if (!feedbackPopup.contains(event.target) && event.target.id !== 'feedback-button') {
            feedbackPopup.classList.remove('active');
        }
    });

    function restartQuiz() {
        currentQuestionIndex = 0;
        totalPoints = {
            "saver": 0,
            "spender": 0,
            "investor": 0,
            "compulsive": 0,
            "gambler": 0,
            "debtor": 0,
            "shopper": 0,
            "indifferent": 0
        };
        progressBar.style.width = '0%';
        progressContainer.style.display = 'block';
        document.getElementById('answers').style.display = 'block';
        document.getElementById('question-container').style.display = 'block';
        document.getElementById('result-container').style.display = 'none';
        loadQuestion(currentQuestionIndex);
        location.reload(); // Can be replaced with soft reset logic
    }
});
