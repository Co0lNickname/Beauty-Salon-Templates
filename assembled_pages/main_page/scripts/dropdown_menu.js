const menuSelector = document.querySelector('div.menu-select-block');
const menuExpandButton = document.querySelector('button.menu-expand-button');
const menuItemsButtons = document.querySelector('button.menu-item-button');

/* Здесь начало готового решения */
menuExpandButton.addEventListener('click', (e) => {
    menuExpandButton.classList.toggle('active')

    if (menuExpandButton.classList.contains('active')) {
        menuExpandButton.setAttribute('aria-expanded', 'true')
        menuSelector.setAttribute('aria-hidden', 'false')
        menuItemsButtons.forEach(link => link.setAttribute('tabindex', '0'))
    } else {
        menuExpandButton.setAttribute('aria-expanded', 'false')
        menuSelector.setAttribute('aria-hidden', 'true')
        menuItemsButtons.forEach(link => link.setAttribute('tabindex', '-1'))
    }
})
/* Здесь конец готового решения */

let isRotated = false;
const rotateCategoriesButton = () => {
    if (!isRotated) {
        menuExpandButton.style.backgroundColor = 'black;'
        console.log(`rotated!, ${menuExpandButton}`)
        isRotated = true;
    } else {
        menuExpandButton.style.transform = 'rotate(-90deg);'
        console.log(`inverse rotated!, ${menuExpandButton}`)
        isRotated = false;
    }
}

menuExpandButton.addEventListener('click', rotateCategoriesButton)

const expandMenuBox = () => {
    menuSelector.style.transform = 'translate(0, 50%)';
}