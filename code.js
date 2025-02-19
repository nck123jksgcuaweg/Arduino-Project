document.getElementById("toggle-btn").addEventListener("click", function() {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const formTitle = document.getElementById("form-title");

    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
        formTitle.innerText = "Login";
        this.innerText = "Register";
    } else {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
        formTitle.innerText = "Register";
        this.innerText = "Login";
    }
});
document.getElementById("register-form").addEventListener("submit", function(event) {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let errorMessage = document.getElementById("password-error");

    if (password !== confirmPassword) {
        errorMessage.style.display = "block";
        event.preventDefault(); // Stop form submission
    } else {
        errorMessage.style.display = "none";
    }
});

//for sidebar
function showTable(tableId) {
let statusSection = document.querySelector('.machine-status');
let seedTables = document.querySelectorAll('.seed-table');
let batteryTables = document.querySelectorAll('.battery-table');
let areaTables = document.querySelectorAll('.area-table');
let settingsTables = document.querySelectorAll('.settings-table');

    if (tableId === 'machine-status') {
        statusSection.style.display = 'flex';
        tables.forEach(table => table.style.display = 'none');
    } else {
        statusSection.style.display = 'none';
        tables.forEach(table => {
            table.style.display = table.id === tableId ? 'table' : 'none';
        });
    }

}

//for login
function logout() {
    window.location.href = 'login.php';
}




//trial
function fetchWaterLevelData() {
    fetch('fetch_data.php')
    .then(response => response.json())
    .then(data => {
        let tableBody = document.getElementById('water-level-table-body');
        tableBody.innerHTML = ""; // Clear existing data

        data.forEach(entry => {
            let row = `<tr>
                <td>${entry.id}</td>
                <td>${entry.water_level} cm</td>
                <td>${entry.water_amount} L</td>
                <td>${entry.timestamp}</td>
            </tr>`;
            tableBody.innerHTML += row;
        });
    })
    .catch(error => console.error("Error fetching data:", error));
}

// Refresh data every 5 seconds
setInterval(fetchWaterLevelData, 5000);
