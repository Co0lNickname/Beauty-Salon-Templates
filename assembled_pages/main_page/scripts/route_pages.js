const redirectMainPageButton = document.querySelector('.redirect-main-page');
const redirectServicesPageButton = document.querySelector('.redirect-services-page');
const redirectExpertsPageButton = document.querySelector('.redirect-experts-page');
const redirectPersonalCabinetButton = document.querySelector('.redirect-personal-cabinet');

redirectMainPageButton.addEventListener('click', () => {
    window.location.href = '../main_page/index.html';
})

redirectServicesPageButton.addEventListener('click', () => {
    window.location.href = '../masters/index.html';
})

redirectExpertsPageButton.addEventListener('click', () => {
    window.location.href = '../prices/index.html'
})