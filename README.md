# TodoApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.2.

## Overview

TodoApp is a simple and intuitive Angular-based task management application that helps users manage their daily tasks. The application is divided into three main sections:
- **All Tasks**: Displays all tasks, both resolved and unresolved.
- **Resolved Tasks**: Displays tasks that have been completed.
- **Unresolved Tasks**: Displays tasks that are yet to be completed.

Each task has a checkbox to mark it as resolved or unresolved, and a delete button to remove it. Users can also add new tasks using an input field.

## Features

- **Task Management**: Easily add, delete, and manage tasks.
- **Task Status**: Mark tasks as resolved or unresolved using a checkbox.
- **Automatic Task Transfer**: Automatically move tasks from the "Unresolved Tasks" section to the "Resolved Tasks" section when the checkbox is clicked.
- **Task Overlining**: Overline the task header when marked as resolved.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/same-letter.git
    cd same-letter
    ```

2. **Install the dependencies:**
    ```bash
    npm install
    ```

3. **Run the application:**
    ```bash
    ng serve
    ```

4. Open your browser and navigate to `http://localhost:4200`.

## Usage

-Adding a Task: Use the input field and the "Add Task" button to add a new task to the list.
-Marking a Task as Resolved/Unresolved: Click the checkbox next to a task to toggle its status. When a task is resolved, it will move to the "Resolved Tasks" section.
-Deleting a Task: Click the delete button next to a task to remove it from the list.

## License

This project is licensed under the MIT License
