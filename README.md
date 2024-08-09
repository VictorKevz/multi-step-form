# Multi-Step Form Challenge
![alt text](public/design/desktop-preview.jpg)
This repository contains the solution to the [Multi-Step Form challenge](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ) from Frontend Mentor. The project involves building a multi-step form that closely matches the given design and provides a smooth user experience across all devices.

## Live Demo

Check out the live version of the project [here](https://victorkevz.github.io/multi-step-form/).

## Project Overview

This project tests form-building and JavaScript skills by requiring the implementation of a multi-step form with several user interactions, validations, and animations. The goal is to create a functional and visually appealing form that guides the user through a sequence of steps to gather information, review it, and confirm their order.

### Users Should Be Able To:
- Complete each step of the sequence.
- Navigate back to previous steps to update selections.
- View a summary of their selections on the final step and confirm their order.
- Experience an optimal layout on any device screen size.
- See hover and focus states for all interactive elements.
- Receive form validation messages if:
  - A field is missed.
  - The email address is not correctly formatted.
  - A step is submitted without making a required selection.

### Additional Features Implemented
- **Scale Transformation on Hover States:** Interactive elements scale smoothly when hovered to provide visual feedback.
- **Animations on Entry and While in View:** Using Framer Motion, animations were added to elements when they enter the viewport and while in view, enhancing the user experience.
- **Dynamic Data Rendering:** The form dynamically renders user data based on selections, allowing for a more personalized experience.

## Technologies Used

- **HTML5 & CSS3:** The foundational technologies used for structuring and styling the webpage.
- **React.js:** Used for building the interactive UI and managing the state across different form steps.
- **Vite:** The fast build tool used for setting up the project and managing the development environment.
- **Framer Motion:** Leveraged for implementing smooth animations and transitions throughout the form.

## How to Run the Project Locally

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/VictorKevz/multi-step-form.git
   ```
2. **Navigate to the Project Directory:**
   ```bash
   cd multi-step-form
   ```
3. **Install Dependencies:**
   ```bash
   npm install
   ```
4. **Run the Development Server:**
   ```bash
   npm run dev
   ```
5. **View the Project in Your Browser:**
   The project will typically be accessible at `http://localhost:5173/` (Vite will specify the port).

## Contributing

If you'd like to contribute to this project, feel free to open an issue or submit a pull request. Contributions are always welcome!

## License

This project is open-source and available under the MIT License. Feel free to use, modify, and distribute this code as you see fit.

---

Thank you for checking out this project! If you have any questions or suggestions, please don't hesitate to reach out.