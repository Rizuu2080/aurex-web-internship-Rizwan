# AUREX Web Internship - Task Management Application

**Intern Name:** Rizwan Tariq
**Domain:** Full-Stack Web Development
**Week:** Week 4
**Live Deployment:** [https://rizuu2080.github.io/aurex-web-internship-Rizwan/](https://rizuu2080.github.io/aurex-web-internship-Rizwan/)

## Technologies Used
* HTML5
* CSS3 (CSS Variables, Flexbox, Mobile-First Design)
* Vanilla JavaScript (ES6+)
* Browser `localStorage` API

## Features Implemented
* **CRUD Operations:** Users can dynamically add, edit, delete, and mark tasks as complete.
* **Data Persistence:** Tasks are serialized using `JSON.stringify()` and stored in `localStorage`, persisting through page refreshes.
* **State Filtering:** Integrated sorting buttons to view 'All', 'Pending', or 'Completed' tasks.
* **Form Validation:** Prevents empty task creation and renders real-time error messaging.

## Completed JavaScript Exercises
* **Variables:** Utilized `const` for static DOM elements and `let` for mutable state arrays.
* **Conditions:** Implemented `if/else` logic for input validation and determining filtering criteria.
* **Loops:** Applied `.forEach()` array methods to iterate through tasks and generate dynamic HTML nodes.
* **Functions:** Structured code with modular functional declarations (`renderTasks`, `saveTasks`) and arrow functions for event handlers.
* **Arrays & Objects:** Maintained application state using an array of structured task objects containing unique IDs, text payloads, and boolean completion statuses.

## Challenges Faced & Learnings
* **Event Delegation:** Initially, attaching event listeners directly to dynamically created buttons caused issues when tasks were re-rendered. I learned to use event delegation by attaching a single listener to the parent `<ul>` to successfully handle clicks on dynamic children.
* **State vs. DOM Synchronization:** Ensuring that the `tasks` array, the `localStorage` payload, and the visual DOM stayed perfectly synchronized required careful sequencing of the `saveTasks()` and `renderTasks()` functions.