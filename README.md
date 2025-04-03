# English Janala - Vocabulary Learning Platform

## Overview
English Janala is a web-based Vocabulary Learning Platform designed to help users learn new words interactively. It features a smooth user experience with dynamic content loading, custom navigation, a login system, and an engaging UI based on a Figma design.

## Live Demo
[Click here to visit the website](https://enlishjanala.netlify.app/)

## Technologies Used
- HTML
- CSS
- JavaScript

## GitHub Repository
[Click here to access the GitHub repository](https://github.com/nitaisutradhar/English-Janala.git)

## Features

### Navbar
- Fixed at the top with a bottom border.
- Includes a logo and brand name on the left.
- Three buttons with icons:
  - **FAQ**: Jumps to the FAQ section.
  - **Learn**: Jumps to the Vocabulary section.
  - **Logout**: Logs the user out and resets the UI.

### Banner
- Displays a title, paragraph, and login form on the left.
- Shows an image on the right.
- Aligned according to the Figma design.

### FAQ Section
Contains answers to the following JavaScript-related questions:
1. Difference between `var`, `let`, and `const`.
2. Difference between `map()`, `forEach()`, and `filter()`.
3. Explanation of arrow functions vs regular functions.
4. How JavaScript Promises work.
5. How closures work in JavaScript.

### Footer
- Displays the logo and social media icons.
- Clicking social icons opens the respective profile in a new tab.

### Vocabulary Section
- Displays a center-aligned heading as per the Figma design.
- Dynamically generates buttons from **API-01** for each lesson, loaded on page load.
- Default text displayed initially.
- Clicking a lesson button loads all words from **API-02** and displays them in a card format with:
  - Word
  - Word meaning & pronunciation
  - Two buttons with relevant icons.
- Displays a ***No Word Found*** message if no words exist for a lesson.
- Highlights the active lesson button.

### Vocabulary Details
- Clicking the details icon opens a modal with:
  - Word with pronunciation
  - Example sentence
  - Synonyms
  - "Complete Learning" button to close the modal.
- Data loaded from **API-03**.

### Custom Navigation & Smooth Scrolling
- Initially, only the Banner and Footer are visible.
- Login form functionalities:
  - Shows an alert if name is missing.
  - Shows an alert if password is incorrect (only accepts "123456").
  - On valid login:
    - Displays success alert.
    - Hides the Banner.
    - Displays the Navbar, Vocabulary Section, and FAQ Section.
- Logout functionality:
  - Hides Navbar, Vocabulary Section, and FAQ Section.
  - Displays only the Banner and Footer.
- Smooth scrolling implemented for FAQ & Learn buttons.

### Handling Invalid Data
- Prevents displaying falsy values like `undefined` or `null`.
- Displays relevant words if no data is found.

### Loading Spinner
- Displays a loading spinner when vocabulary data is being fetched from the API.

### Sweet Alert Integration
- Replaces basic alerts with Sweet Alert popups.
- Uses [SweetAlert2](https://sweetalert2.github.io/) for better user experience.

### Speak Your Vocabularies
- Implements voice pronunciation for vocabulary words using the `SpeechSynthesisUtterance` API.
- Function to be triggered on clicking the sound icon:
```js
function pronounceWord(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-EN'; // English
    window.speechSynthesis.speak(utterance);
}
```

## Requirements
- Fetch vocabulary data dynamically from three APIs:
  - **API-01**: Retrieves lesson buttons.
  - **API-02**: Fetches words for a selected lesson.
  - **API-03**: Provides details of a selected word.
- Implement smooth UI interactions using JavaScript, HTML, and CSS.
- Ensure responsive design based on the Figma layout.
- Implement secure login/logout functionality.
- Use SweetAlert2 for better alert popups.
- Ensure seamless navigation with smooth scrolling.

## Setup Instructions
1. Clone the repository:
   ```sh
   git clone https://github.com/nitaisutradhar/English-Janala.git
   ```
2. Navigate to the project directory:
   ```sh
   cd English-Janala
   ```
3. Open `index.html` in a browser or run a local server.

## Screenshots
![Login Page](./ss/Login.jpg)
![Vocabulary Section](./ss/vocabularysection.jpg)
![FAQ Section](./ss/faqsection.jpg)

## Contributing
- Fork the repository and create a new branch.
- Commit your changes with descriptive messages.
- Submit a pull request for review.

## License
This project is open-source and available under the [MIT License](LICENSE).

