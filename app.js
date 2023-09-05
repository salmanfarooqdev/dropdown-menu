const button = document.querySelector('.dropdownbtn');
const menu = document.querySelector('.dropdown-menu');


function toggleDropdown() 
{
    if (menu.style.display === 'block') 
    {
        menu.style.display = 'none';
    } else 
    {
        menu.style.display = 'block';
    }
}

button.addEventListener('click', toggleDropdown);

window.addEventListener('click', function(event) 
{
    if (!event.target.matches('.dropdownbtn')) 
    {
        menu.style.display = 'none';
    }
});