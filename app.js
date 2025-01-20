document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const switchToSignup = document.getElementById("switch-to-signup");
    const switchToLogin = document.getElementById("switch-to-login");
    const todoContainer = document.getElementById("todo");
    const authContainer = document.getElementById("auth");
    const addTaskButton = document.getElementById("add-task");
    const taskInput = document.getElementById("task");
    const reminderInput = document.getElementById("reminder");
    const tasksList = document.getElementById("tasks-list");
    const logoutButton = document.getElementById("logout");

    const tasks = [];

    // Switch between login and signup
    switchToSignup.addEventListener("click", () => {
        loginForm.classList.add("hidden");
        signupForm.classList.remove("hidden");
    });

    switchToLogin.addEventListener("click", () => {
        signupForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
    });

    // Simulate login/signup
    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Account created! Please login.");
        signupForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
    });

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        authContainer.classList.add("hidden");
        todoContainer.classList.remove("hidden");
    });

    // Add tasks
    addTaskButton.addEventListener("click", () => {
        const task = taskInput.value.trim();
        const reminder = reminderInput.value;
        if (task) {
            tasks.push({ task, reminder });
            renderTasks();
            taskInput.value = "";
            reminderInput.value = "";
        }
    });

    // Render tasks
    function renderTasks() {
        tasksList.innerHTML = "";
        tasks.forEach((item, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${item.task} - ${item.reminder}</span>
                <button onclick="removeTask(${index})">Remove</button>
            `;
            tasksList.appendChild(li);
        });
    }

    // Remove task
    window.removeTask = (index) => {
        tasks.splice(index, 1);
        renderTasks();
    };

    // Logout
    logoutButton.addEventListener("click", () => {
        authContainer.classList.remove("hidden");
        todoContainer.classList.add("hidden");
    });
});
