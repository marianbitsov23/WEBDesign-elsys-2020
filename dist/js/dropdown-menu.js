/*! project-name v0.0.1 | (c) 2020 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
const showDropdown = (element) => {
    const dropdown = element.nextElementSibling;
    const arrowDown = document.querySelector('.fa-arrow-down');
    const arrowUp = document.querySelector('.fa-arrow-up');

    if(dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'flex';
        dropdown.style.flexDirection = 'column';
        arrowDown.style.display = 'none';
        arrowUp.style.display = 'inline-block';
    } else {
        dropdown.style.display = 'none';
        element.style.borderBottom = 'none';
        arrowDown.style.display = 'inline-block';
        arrowUp.style.display = 'none';
    }
}