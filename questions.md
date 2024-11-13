# Answers to Technical Questions

## 1. How long did you spend on the coding test?

I spent approximately 12-13 hours on the coding test. This included setting up the initial project structure, developing the components, styling, testing the functionality, and writing the documentation.

## 2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

One of the most useful features added to the latest versions of React (React 16.8 and beyond) is the introduction of Hooks. Hooks allow us to use state and other React features in functional components, which previously could only be done in class components.

### Example of using React hooks (useRef)

useRef can be used to persist the tasks array across re-renders, ensuring that the latest state is always available without triggering unnecessary re-renders

- Initialization: 
The useRef hook is used to create tasksRef which holds a reference to the tasks state array. This reference is initialized with the tasks state.

    ```bash
    const tasksRef = useRef(tasks);
    ```

- Persisting Data: When the tasks state changes, useEffect updates tasksRef.current to ensure it always holds the latest tasks state. This way, tasksRef.current is always in sync with the tasks state.

    ```bash
    useEffect(() => {
      tasksRef.current = tasks;
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
    ```

- Manipulating Tasks: Functions like addTask, updateTask, deleteTask, markTaskCompleted, and changePriority use tasksRef.current to get the current state of tasks and then update the state using setTasks.

   ```bash
   const addTask = (task) => {
     const updatedTasks =[...tasksRef.current, task];
     setTasks(updatedTasks);
   };
   ```

## 3.  How would you track down a performance issue in production? Have you ever had to do this?

Tracking down performance issues in a production environment can be challenging, but it's a crucial part of maintaining a robust and responsive application. Below are steps and tools we can use to diagnose and address performance issues in the Task Manager application:

- Enable Detailed Logging: Ensure that our application logs important events, errors, and performance metrics. This can help us to trace the root cause of performance issues.

- Component Rendering: Identify components that re-render unnecessarily. This can be done by wrapping components with *React.memo* to prevent unnecessary renders or by using *useCallback* and *useMemo* hooks to optimize functions and values.

- Lazy Loading: Lazy load components that are not immediately visible to the user. This can improve the initial rendering performance and provide a smoother user experience.

Yes, I have tracked down performance issues in production applications before in one of my personal project which name is Movie-Verse.


## 4. If you had more time, what additional features or improvements would you consider adding to the task management application?

### Additional Features and Improvements for the Task Management Application

If I had more time, I would consider adding the following features and improvements to enhance the functionality and user experience of the Task Manager application:

- User Authentication and Authorization
   - Feature: Implement user authentication using libraries like Firebase, custom  JWT-based authentication.
   - Improvement: Allow multiple users to create and manage their own tasks securely, and provide role-based access control for different features

- Subtasks and Task Dependencies
   - Feature:  Allow users to create subtasks and define dependencies between tasks.
   - Improvement: Provide a visual representation of task dependencies and progress tracking for subtasks.

- Notifications and Reminders
   - Feature: Implement notifications and reminders for upcoming or overdue tasks.
   - Improvement: Allow users to set custom reminder times and receive notifications via email, SMS, or push notifications.      

 
   

  
