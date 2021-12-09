// Get the modal
var modal = document.getElementById('id01');
        
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function classToggle() {
    const navs = document.querySelectorAll('.navbar-collapse')
    
    navs.forEach(nav => nav.classList.toggle('toggle-show'));
  }
  
  document.querySelector('.navbar-toggler')
    .addEventListener('click', classToggle);


var courses = document.getElementById('courses');
console.log(courses.innerHTML);