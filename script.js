const themeToggleBtn = document.getElementById("theme-toggle-btn");
const filterAllBtn = document.getElementById("filter-all");
const filterPendingBtn = document.getElementById("filter-pending");
const filterCompletedBtn = document.getElementById("filter-completed");
const totalCompletedTaskSpan = document.getElementById("total-completed-task");
const totalTaskSpan = document.getElementById("total-task");

const allFilterBtns = document.querySelectorAll(".filter-btn");
const allTaskCards = document.querySelectorAll(".task-card");
const allCheckCircles = document.querySelectorAll(".check-circle");

// TRACK WHICH FILTER IS CURRENTLY SELECTED ("ALL", "PENDING", OR "COMPLETED")
let currentFilter = "all";

// DARK / LIGHT MODE TOGGLE
themeToggleBtn.addEventListener("click", ()=>{
    document.body.classList.toggle("dark-mode");

    if(themeToggleBtn.textContent === "Dark Mode"){
        themeToggleBtn.textContent = "Light Mode";
    } else {
        themeToggleBtn.textContent = "Dark Mode"
    }
})

// CLICKING THE CIRCLE ON EACH DARD
allCheckCircles.forEach((circle) =>{
    circle.addEventListener("click", ()=>{
        // FIND THE PARENT TASK CARD
        const card = circle.closest(".task-card");

        // TOGGLE .IS-COMPLETED CLASS ON THE CARD
        card.classList.toggle("is-completed");

        // ADD OR REMOVE THE CHECKMARK SYMBOL INSIDE THE CIRCLE
        if(card.classList.contains("is-completed")){
            circle.textContent = "✓";
        } else {
            circle.textContent = "";
        }

        updateStats();
        applyFilter();
    })
});

// FILTER BUTTON LISTENERS
filterAllBtn.addEventListener("click", ()=>{
    setActiveFilterButton(filterAllBtn);
    currentFilter = "all";
    applyFilter();
});

filterPendingBtn.addEventListener("click", ()=>{
    setActiveFilterButton(filterPendingBtn);
    currentFilter = "pending";
    applyFilter();
});

filterCompletedBtn.addEventListener("click", ()=>{
    setActiveFilterButton(filterCompletedBtn);
    currentFilter = "completed";
    applyFilter();
});