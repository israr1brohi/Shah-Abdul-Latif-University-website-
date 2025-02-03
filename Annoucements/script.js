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
