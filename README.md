# Internship-Quiz-App
*** Quiz Application: Frontend Development Project

This project implements the frontend track requirements for a multi-choice quiz application, built using core web technologies and consuming a public API for dynamic content. It's a simple game where user is asked to give name and proceed then there is a fun quiz of 10 questions.

✨ Key Features

This application meets all criteria for the individual frontend project, focusing on a responsive user experience and dynamic data handling:

Dynamic Question Loading: Fetches 30 random questions from the Open Trivia Database API to ensure fresh content for every quiz session.

Randomization: Questions are selected randomly from the fetched pool, and the answer options are shuffled for each question.

User Persistence: The user's name is stored locally in the browser (localStorage) so it is remembered even after a page refresh.

Real-time Scoring: Displays a persistent scoreboard in the top-right corner, tracking the user's progress through the 10 questions.

Interactive Feedback: Provides immediate visual feedback (Red/Green CSS animation) after an answer is selected.

Green: Correct answer.

Red: Incorrect answer, with the correct option highlighted in green.

Final Score Summary: Displays a final result screen showing the user's total score (e.g., "7 out of 10 questions correct").

🛠️ Technology Stack

This project was intentionally built using fundamental web technologies to demonstrate core development proficiency.

HTML5: Provides the structural foundation of the application.

CSS3: Handles all styling, layout, and visual feedback (including grid-based options and the red/green flash animations).

Vanilla JavaScript (ES6+): The core logic, responsible for:

Asynchronous Operations (async/await): Handling external API requests without freezing the UI.

DOM Manipulation: Dynamically creating buttons and updating text (questions, score).

State Management: Tracking the current score, question index, and game flow.

External API: Open Trivia Database (opentdb.com)

Open the File:
Simply open the index.html file in any modern web browser (Chrome, Firefox, Edge, etc.).

📂 File Structure

File Name

Purpose

index.html

The main structure of the quiz (input, quiz area, result screen).

style.css

All visual styling, responsive design, and CSS animations.

script.js

The application logic, API fetching, scoring, and user interaction.
