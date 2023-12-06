/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};


// zoekfunctie
// https://www.youtube.com/watch?v=IM3Nt20KkNc&ab_channel=HowToDev

const searchInput = document.getElementById('searchInput');
const lists = document.querySelectorAll('#list li');
const searchIcon = document.getElementById('searchIcon')
const xmarkIcon = document.getElementById('closeIcon')

const updateDisplay = () => {
  const searchTerm = searchInput.value.trim().toLowerCase();
  xmarkIcon.style.display = searchTerm ? 'block' : 'none';
  searchIcon.style.display = searchTerm ? 'none' : 'block'

  lists.forEach(item => {
    const languageName = item.textContent.toLowerCase();
    item.style.display = languageName.includes(searchTerm) ? 'block' : 'none' ;
  });
}

searchInput.addEventListener('input', updateDisplay);

xmarkIcon.addEventListener('click', () => {
  searchInput.value = '';
  updateDisplay();
});