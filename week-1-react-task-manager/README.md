# React Task Manager (Part 1) - AUREX Internship

**Intern Name:** Rizwan Tariq
**Domain:** Full-Stack Web Development
**Phase:** Month 2 - Week 1

## Live Deployment
**Live URL:** https://aurex-web-internship-rizwan.vercel.app/

## Project Overview
This project is a reconstruction of the Month 1 JavaScript Task Manager into a modern, component-driven React application[cite: 9]. It utilizes the Vite build system for an optimized development environment and focuses on React fundamentals, including JSX, component architecture, state management, and props[cite: 8].

## Technologies Used
* **React.js:** Functional components and React Hooks (`useState`).
* **Vite:** Next-generation frontend tooling for fast build times and hot module replacement.
* **CSS3:** Custom CSS variables for maintaining a modern developer dark theme.

## Features Implemented
* **Component-Driven UI:** Modular architecture separating the form, lists, and individual items[cite: 8].
* **Controlled Form Inputs:** The task input field is fully controlled by React state[cite: 9].
* **Input Validation:** Prevents the submission of empty tasks and dynamically renders an error message[cite: 9].
* **Dynamic List Mapping:** Renders the array of task objects into the DOM using the `.map()` function with unique `key` props[cite: 8, 9].
* **State Updates:** Users can add new tasks, toggle a task's completion status, and permanently delete tasks from the active state[cite: 9].

## Component Architecture
The application follows a strict parent-child component hierarchy[cite: 9]:
1. **`App.jsx`**: The main parent component. It holds the core `tasks` array state and the functions to modify it (`addTask`, `toggleComplete`, `deleteTask`).
2. **`Header.jsx`**: A stateless functional component displaying the application title.
3. **`TaskForm.jsx`**: Manages its own local state for the input field value and validation errors, passing the submitted text up to `App` via props.
4. **`TaskList.jsx`**: Receives the `tasks` array as a prop and maps through it to render individual items.
5. **`TaskItem.jsx`**: Displays the individual task data and receives the `toggleComplete` and `deleteTask` functions via props to handle user interactions.

## Learning Outcomes & Challenges
* **React vs. Vanilla JS:** Transitioning from direct DOM manipulation (`document.getElementById`) to declarative UI where state dictates the rendering.
* **State Lifting:** Learned how to pass functions as props to child components (like `TaskForm` and `TaskItem`) so they can communicate back up and update the parent `App`'s state[cite: 8].
* **JSX Syntax:** Mastered embedding JavaScript expressions directly inside HTML structures and conditionally rendering CSS classes based on a task's `completed` boolean[cite: 8].

## Local Development Setup
To run this project locally:
1. Clone the repository and navigate to the `week-1-react-task-manager` folder.
2. Install dependencies:
   ```bash
   npm install