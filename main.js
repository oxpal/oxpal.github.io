function setup_header() {
    // Javascript to toggle the dropdown menu
    document.querySelector('.dropbtn').addEventListener('click', function (event) {
        event.stopPropagation();  // Prevent event from bubbling up to window
        const dropdown = document.querySelector('.dropdown-content');
        dropdown.classList.toggle('show');
    });


    // Close the dropdown menu if the user clicks outside of it
    window.addEventListener('click', function (event) {
        const dropdown = document.querySelector('.dropdown-content');
        if (!event.target.closest('.dropbtn') && dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    });
}

// The calls below to dynamically load content only work from an HTTP(S) server, because fetch requests don't play nicely with file URIs
if (window.location.href.startsWith("file")) {
    alert(
        "The site now needs to be loaded from an HTTP(S) server in order to function, but you've loaded the page from a file:// url.\n" +
        "Any web server will do - for local development, try running the builtin python webserver using `python3 -m http.server`, then viewing the page at http://localhost:8000"
    );
}

// Replace placeholder header, side panel, and footer with real HTML
fetch("templates/header.html")
    .then(res => res.text())
    .then(text => {
        document.getElementById("header-placeholder").outerHTML = text;
        setup_header();
    });

fetch("templates/side-panel.html")
    .then(res => res.text())
    .then(text => {
        document.getElementById("side-panel-placeholder").outerHTML = text;
    });

fetch("templates/footer.html")
    .then(res => res.text())
    .then(text => {
        document.getElementById("footer-placeholder").outerHTML = text;
    });