// JavaScript function to toggle dropdown content
function toggleDropdown(event) {
    event.preventDefault();
    var dropdownContent = event.target.nextElementSibling;
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';

    // Close dropdowns when clicking outside of them
    document.addEventListener('click', function (e) {
        var target = e.target;
        if (!target.matches('.dropbtn') && !target.closest('.dropdown')) {
            var dropdowns = document.querySelectorAll('.dropdown-content');
            dropdowns.forEach(function (dropdown) {
                dropdown.style.display = 'none';
            });
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    var exploreButton = document.querySelector('.explore-btn');
    var popupContainer = document.getElementById('popup-container');

    // Hide the popup container initially
    popupContainer.style.display = 'none';

    // Event listener for the explore button click
    exploreButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default behavior of the link

        // Toggle the display of the popup container
        if (popupContainer.style.display === 'block') {
            popupContainer.style.display = 'none';
        } else {
            popupContainer.style.display = 'block';
        }
    });

    // Event listeners for the popup buttons
    document.getElementById('button1').addEventListener('click', function () {
        // alert('Button 1 clicked');
    });

    document.getElementById('button2').addEventListener('click', function () {
        // alert('Button 2 clicked');
    });

    document.getElementById('button3').addEventListener('click', function () {
        // alert('Button 3 clicked');
    });
});




// -----------------footer

