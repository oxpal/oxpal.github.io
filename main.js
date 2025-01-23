// JavaScript to toggle the dropdown menu
document.querySelector('.dropbtn').addEventListener('click', function (event) {
    event.stopPropagation();  // Prevent event from bubbling up to window
    var dropdown = document.querySelector('.dropdown-content');
    dropdown.classList.toggle('show');
});


// Close the dropdown menu if the user clicks outside of it
window.addEventListener('click', function (event) {
    var dropdown = document.querySelector('.dropdown-content');
    if (!event.target.closest('.dropbtn') && dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
    }
});

// Function to calculate the number of days between two dates
function calculateDaysSince(startDate) {
    const today = new Date();
    const oneDay = 1000 * 60 * 60 * 24;
    const diffInMs = today - startDate;
    return Math.floor(diffInMs / oneDay);
}

// Define the start dates for each event
const genocideStartDate = new Date('2023-10-07');
const nakbaStartDate = new Date('1948-05-16');
const encampmentStartDate = new Date('2024-05-05');

// Update counters with the calculated number of days
document.getElementById('genocide-counter').textContent = calculateDaysSince(genocideStartDate);
document.getElementById('occupation-counter').textContent = calculateDaysSince(nakbaStartDate);
document.getElementById('encampment-counter').textContent = calculateDaysSince(encampmentStartDate);

window.addEventListener('DOMContentLoaded', function () {
    fetch('header.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('header-placeholder').innerHTML = html;
        });
});