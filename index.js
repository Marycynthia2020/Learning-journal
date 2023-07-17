const sideNav = document.querySelector('.side-nav-div');
const appGrid = document.getElementById('app-grid')

appGrid.addEventListener('click', function() {
    sideNav.classList.toggle('side-nav-div');
    
})