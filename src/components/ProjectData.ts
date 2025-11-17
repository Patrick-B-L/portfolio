import { Project } from '../types/project';

const projectData: Project[] = [
  {
    image: process.env.PUBLIC_URL + '/images/Munamii.jpg',
    title: 'Munamii Cakery',
    description: "This is a frontend project showcasing a fictional bakery's products, including cupcakes and wedding cakes. The site includes a searchable interface and illustrative e-commerce functionalities. The porject is created with HTML, CSS and JavaScript.",
    website: 'https://patrick-b-l.github.io/Munamii-Cakery/Home/index.html',
    ghLink: 'https://github.com/Patrick-B-L/Munamii-Cakery'
  },
  {
    image: process.env.PUBLIC_URL + '/images/fim2.jpg',
    title: 'Film i Malmö (Team)',
    description: 'This group project is a React web application for Film i Malmö, providing a platform to explore movie schedules, upcoming screenings, and cinema-related content in Malmö. I created generic CRUD-components for efficient access to the database and storage (Supabase). I was responsible for Git and Github related tasks. I also worked with the overall design of the website.',
    website: 'https://film-i-malmo.vercel.app/',
    ghLink: 'https://github.com/owenboy9/film-i-malmo'
  },
  {
    image: process.env.PUBLIC_URL + '/images/bubblespin.jpg',
    title: 'BubbleSpin (Team)',
    description: 'BubbleSpin, a group project, is a feature-rich React application designed to help users efficiently manage tasks, events, and schedules. I created user functions like register and log in, generic components for adapting alerts and confirm popups, worked on the navigation bar functionality and the overall design of the header.',
    website: 'https://zereis.github.io/Event-planner/#/',
    ghLink: 'https://github.com/Zereis/Event-planner'
  },
  {
    image: process.env.PUBLIC_URL + '/images/Todoly.jpg',
    title: 'Todoly',
    description: 'ToDoLy is a task management console application designed to help users organize and manage their tasks effectively. It provides functionality for creating, updating, sorting, and deleting tasks, with a user-friendly and modular design.',
    ghLink: 'https://github.com/Patrick-B-L/ToDoLy'
  },
  {
    image: process.env.PUBLIC_URL + '/images/Todoapp.jpg',
    title: 'Todo app',
    description: 'Todo app is a React-based task manager with a clean design. Users can add tasks with deadlines, filter and sort them, mark as completed, and remove tasks. The app supports exporting and importing todos as JSON files, and saves data locally in the browser for persistent usage.',
    website: 'https://patrick-b-l.github.io/todo-app/',
    ghLink: 'https://github.com/Patrick-B-L/todo-app'
  },
  {
    image: process.env.PUBLIC_URL + '/images/Assettracker.jpg',
    title: 'Asset Tracker',
    description: 'AssetTracker is a C#/.NET 8 console application for managing and tracking electronic assets (such as computers and phones) across different offices and countries. It supports exporting asset data, and uses Entity Framework Core with a SQL Server database.',
    ghLink: 'https://github.com/Patrick-B-L/AssetTracker'
  },
  {
    image: process.env.PUBLIC_URL + '/images/AI_Chat_GUI.jpg',
    title: 'AI Chat GUI',
    description: 'A sleek, customizable desktop interface for managing AI chat sessions locally using Ollama. Built with Python and CustomTkinter, this GUI offers session management, autosave, model configuration, and privacy-first controls — all wrapped in a modern GUI. This project is an unofficial interface for interacting with locally hosted Ollama models and is not affiliated with or endorsed by Ollama.',
    ghLink: 'https://github.com/Patrick-B-L/ai_chat_gui'
  }
];

export default projectData;
