document.addEventListener("DOMContentLoaded", function () {
    const taskCountElement = document.getElementById("taskCount"); 
    const tasksAssignedElement = document.getElementById("tasksAssigned");
    const logContainer = document.getElementById("logContainer"); 
    const completeButtons = document.querySelectorAll(".complete-btn");
    const themeButton = document.querySelector(".header-right img:nth-child(3)");
    const body = document.body; 
    const infoBox = document.querySelector(".info-box"); 
    let totalTasks = completeButtons.length;
    let remainingTasks = totalTasks; 
    let completedTasks = 0; 
    let isDarkMode = false;
    function getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    }
    function updateDate() {
        const currentDateElement = document.getElementById("currentDate");
        const today = new Date();
        const options = { weekday: "short", month: "long", day: "numeric", year: "numeric" };
        currentDateElement.textContent = today.toLocaleDateString("en-US", options);
    }
    updateDate(); 
    completeButtons.forEach((button) => {
        button.addEventListener("click", function () {
            if (!button.disabled) {
                completedTasks++;
                remainingTasks--;

                button.textContent = "Completed"; 
                button.style.backgroundColor = "#ccc"; 
                button.style.color = "#666"; 
                button.disabled = true; 
                tasksAssignedElement.textContent = remainingTasks;
                taskCountElement.textContent = parseInt(taskCountElement.textContent) + 1;
                const logEntry = document.createElement("p");
                logEntry.textContent = `Task "${button.parentElement.parentElement.querySelector("h3").textContent}" completed in ${getCurrentTime()}.`;
                logContainer.appendChild(logEntry);

                alert(`Task "${button.parentElement.parentElement.querySelector("h3").textContent}" is completed!`);
                if (completedTasks === totalTasks) {
                    setTimeout(() => {
                        alert("All tasks are successfully completed!");
                    }, 500);
                }
            }
        });
    });
    document.getElementById("clearHistory").addEventListener("click", function () {
        logContainer.innerHTML = "";
    });
    themeButton.addEventListener("click", function () {
        if (!isDarkMode) {
            body.style.background = "linear-gradient(130.7deg, rgb(109, 7, 61) 0.419%, rgb(196, 73, 134) 52.66%, rgb(211, 147, 179) 99.733%)";
        } else {
            body.style.background = "linear-gradient(130.7deg, rgb(5, 107, 49) 0.419%, rgb(36, 163, 87) 52.66%, rgb(127, 215, 143) 99.733%)";
        }
        isDarkMode = !isDarkMode;
    });
    infoBox.addEventListener("click", function () {
        window.location.href = "secPage.html";
    });

});
