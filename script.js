// Animate numbers on load
window.onload = function () {
    animateValue("files", 0, 24, 1000);
    animateValue("downloads", 0, 58, 1200);
    animateValue("progress", 0, 82, 1500, "%");
};

function animateValue(id, start, end, duration, symbol = "") {
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));

    let obj = document.getElementById(id);

    let timer = setInterval(function () {
        current += increment;
        obj.textContent = current + symbol;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Sidebar click message
function showMessage(section) {
    document.getElementById("welcome").textContent = "You opened " + section;
}

// Button actions
function upload() {
    alert("File Upload Feature Coming Soon 🚀");
}

function viewFiles() {
    alert("Viewing Files 📂");
}
