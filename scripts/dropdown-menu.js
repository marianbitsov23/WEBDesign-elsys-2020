const dropdownToggle = () => {
    const vehicles = document.querySelector('.vehicles');
    const types = document.querySelector('.types');
    vehicles.addEventListener('click', () => {
        types.classList.toggle('type-vehicles');
    });

}

dropdownToggle();