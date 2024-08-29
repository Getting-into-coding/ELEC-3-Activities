// This Event Listener is for the drop down's smooth fade in and fade out animation
// This Event Listener also fulfills requirement 3 and 4 and 5 of the activity
document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    //This dropdown is called when the mouse enters the services and shows the sub items of services
    dropdown.addEventListener('mouseenter', function() {
        dropdownMenu.classList.add('show');
        dropdownMenu.classList.remove('hide');
    });

    //This dropdown is called when the mouse leaves the field of the services and hides it sub items
    dropdown.addEventListener('mouseleave', function() {
        dropdownMenu.classList.add('hide');
        dropdownMenu.classList.remove('show');
    });
});
