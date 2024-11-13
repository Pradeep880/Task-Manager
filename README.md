# Task-Manager

Developed a straightforward task management application. The emphasis is on core functionality and a user-friendly interface.


## Overview

The Task Manager application consists of the following features:
- Add new tasks with a title, description, due date, and priority.
- Edit existing tasks.
- Delete tasks.
- Mark tasks as completed or uncompleted.
- Filter tasks based on priority and status.
- Persist tasks in local storage.


## Components

- App: The main component that manages the state and renders the Dashboard, TaskForm, and SearchFilter components.
- Dashboard: Displays tasks categorized into overdue, upcoming, and completed sections.
- TaskForm: A form to add or edit tasks.
- SearchFilter: Allows filtering tasks by search query, priority, and status.
- Header: Displays the application title.


### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher) or yarn


### Installation

1. Clone the repository:
    Open git bash
    git clone https://github.com/Pradeep880/Task-Manager.git

2. Navigate to the project directory:
    cd manager

3. Install the dependencies:
    npm install

4. For use React-Icon
    npm install react-icons

5. Running the Application
    (i) npm start
        or
        yarn start
    (ii) Open your browser and go to `http://localhost:3000` to see the application running.

### Building for Production

To create a production build of the application, run:

 git bash
 npm run build

### Assumptions

During the development process, the following assumptions were made:

  1. The application is a single-user application and does not require user authentication.
  2. Tasks are persisted in the browser's local storage,making them available across page
      reloads but not across different devices or browers.
  3. Priority levels are predefined as High, Medium, and Low.       



  

