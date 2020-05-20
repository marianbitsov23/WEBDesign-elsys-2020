/*! project-name v0.0.1 | (c) 2020 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
const showDropdown = (element) => {
    const dropdown = element.nextElementSibling;

    if(dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'flex';
        dropdown.style.flexDirection = 'column';
        element.style.borderBottom = '1px solid #8d8d8d';
    } else {
        dropdown.style.display = 'none';
        element.style.borderBottom = 'none';
    }
}