// Get the modal
var modal = document.getElementById('id01');
        
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function classToggle() {
    const navs = document.querySelectorAll('.navbar-collapse');
    navs.forEach(nav => nav.classList.toggle('toggle-show'));
  }
  
  document.querySelector('.navbar-toggler')
    .addEventListener('click', classToggle);

function subClassToggle() {
    const header = document.querySelectorAll('.sub-header');
    header.classList.toggle('sub-toggle-show');
  }
  
  document.querySelector('.sub-navbar-toggler')
    .addEventListener('click', subClassToggle);

function searchFilter() {
      var input, filter, ul, li, a, i, txtValue;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      ul = document.getElementById("myUL");
      li = ul.getElementsByTagName("li");
      for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          txtValue = a.textContent || a.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
              li[i].style.display = "";
          } else {
              li[i].style.display = "none";
          }
      }
  }

var courses = document.getElementById('courses');
console.log(courses.innerHTML);