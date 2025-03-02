document.addEventListener("DOMContentLoaded", function () {
    const taskCountl = document.getElementById("taskCount");
    const tasksAssignedl = document.getElementById("tasksAssigned");
    const currentDateEl = document.getElementById("currentDate");
    const completeButtons = document.querySelectorAll(".complete-btn");
    const logContainer = document.getElementById("logContainer");
    const clearHistoryBtn = document.getElementById("clearHistory");
    let taskCount = 23;
    let tasksAssigned = 6;

    function updateDate() {
        const today = new Date();
        const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
        currentDateEl.textContent = today.toLocaleDateString("en-US", options);
    }

    completeButtons.forEach(button => {
        button.addEventListener("click", function () {
            if (!button.disabled) {
                button.disabled = true;
                button.style.background = "#b0b8ff";
                
                // Update counts
                tasksAssigned--;
                taskCount++;

                tasksAssignedl.textContent = tasksAssigned;
                taskCountl.textContent = taskCount;

                // Log action
                const logEntry = document.createElement("p");
                logEntry.textContent = `Task completed at ${new Date().toLocaleTimeString()}`;
                logContainer.appendChild(logEntry);
            }
        });
    });

    clearHistoryBtn.addEventListener("click", function () {
        logContainer.innerHTML = "";
    });

    updateDate();
});
