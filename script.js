// script.js
// This script assumes you have a database connection setup and functions to get counts from the database.

// Example functions (replace with your actual database interaction)
function getStudentCount() {
    // Replace with your actual database query
    return 100; // Replace with actual count
}

function getCourseCount() {
    // Replace with your actual database query
    return 20; // Replace with actual count
}

function getReportCount() {
    // Replace with your actual database query
    return 50; // Replace with actual count
}

// Update the count elements on page load
window.onload = function() {
    document.getElementById('studentCount').textContent = getStudentCount();
    document.getElementById('courseCount').textContent = getCourseCount();
    document.getElementById('reportCount').textContent = getReportCount();
};

// Add event listener to navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const href = link.getAttribute('href');
        window.location.href = href;
    });
});