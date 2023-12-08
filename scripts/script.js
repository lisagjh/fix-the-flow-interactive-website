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

// ! filter dropdown
// objecten maken van de elementen
const dropdown = document.querySelector(".filter-dropdown");

const filterbtn = document.querySelector('.filterbtn');

const filterContent = document.querySelector(".filter-content");

// event toegevoegd aan de filter button, zodat er op de filter content een class met display block word getoggled
filterbtn.addEventListener("click", function () {
  console.log("click")
  console.log(this)
  filterContent.classList.toggle("show");
});

// zodat het menu sluit als er buiten word geklikt ?? 
// opent nu ook de dropdown menu , sluit niet als je e rbuioten kllikt
// window.onclick = function (event) {
//   if (!event.target.matches(".filterbtn")) {
//       var dropdowns = document.getElementsByClassName("filter-content");
//      var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//        if (openDropdown.classList.contains("show")) {
//           openDropdown.classList.remove("show");
//         }
//       }
//     }
//   };