const sideNav = document.querySelector('.side-nav-div');
const appGrid = document.getElementById('app-grid')
const viewMoreBtn = document.getElementById('view-more')
const hiddenStories = document.querySelectorAll('.hid')

appGrid.addEventListener('click', function() {
    sideNav.classList.toggle('side-nav-div');
    
})

viewMoreBtn.addEventListener('click', function() {
    for(story of hiddenStories) {
        console.log(story)
        story.classList.remove('hid')
    }
})