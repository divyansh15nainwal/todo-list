### README for To-Do List Application

---

# ✅ To-Do List Application

A **simple and interactive React application** designed to manage your tasks. This application allows users to add, delete, edit, and mark tasks as completed, enhancing productivity with a clean and user-friendly interface.

---

## 🛠 Features

- **Add Tasks**: Add new tasks to your list.  
- **Delete Tasks**: Remove tasks no longer needed.  
- **Edit Tasks**: Update task details as necessary.  
- **Mark as Completed**: Strike through completed tasks for clarity.  
- **Dynamic Updates**: Real-time updates to the task list using React's state management.

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- [Vite](https://vitejs.dev/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/divyansh15nainwal/todo-list.git
2. Navigate to the project directory:
   ```bash
   cd todo-list
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

---

## 📂 Folder Structure

```
todo-list/
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Header component
│   │   ├── ToDoList.jsx      # To-Do list container
│   │   └── ToDoItem.jsx      # Individual To-Do item
│   ├── App.jsx               # Main application component
│   ├── index.css             # Styling for the application
│   └── main.jsx              # Application entry point
├── public/                   # Static assets
├── package.json              # Project metadata
└── vite.config.js            # Vite configuration
```

---

## 🛠 Functional Components

### 1. **Header Component**
   Displays the application's title and sets the tone for the interface.

### 2. **ToDoList Component**
   Renders the list of to-do items dynamically based on the state in the parent `App` component.

### 3. **ToDoItem Component**
   Represents individual to-do items with options to edit, delete, or mark as completed.

### 4. **App Component**
   Manages the application state, including the list of to-do items and related functions. Passes necessary props to child components.

---

## 🔗 Event Handling

- **Add a Task**: Includes a form for users to input new tasks.  
- **Delete a Task**: Removes the task from the list.  
- **Mark as Completed**: Allows users to check off completed tasks.  
- **Edit a Task**: Provides functionality to modify existing tasks.

---

## 🎨 Styling and User Experience

- Styled with **CSS** for a clean and modern interface.
- Ensures a responsive and user-friendly design.

---

## 📄 Submission Details

- [GitHub Repository](https://github.com/divyansh15nainwal/todo-list)

---

## 💻 Running the Application Locally

1. Clone the repository using the command above.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Run the development server with `npm run dev`.
5. Open `http://localhost:5173` in your browser to view the application.

---

### 📧 Contact

For any queries or feedback, feel free to reach out at **divyansh15nainwal@gmail.com**. 

---

**Developed with ❤️ by [Divyansh Nainwal](https://github.com/divyansh15nainwal)**