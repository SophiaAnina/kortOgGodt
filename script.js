
document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById('searchInput');
  const filterCheckboxes = document.querySelectorAll('.filterCheckbox');
  const items = document.querySelectorAll('.item');

  searchInput.addEventListener('input', filterItems);
  filterCheckboxes.forEach(checkbox => checkbox.addEventListener('change', filterItems));

  function filterItems() {
    const searchText = searchInput.value.toLowerCase();
    const selectedFilters = Array.from(filterCheckboxes)
                                .filter(checkbox => checkbox.checked)
                                .map(checkbox => checkbox.value);

    items.forEach(item => {
      const itemText = item.innerText.toLowerCase();
      const itemTags = item.getAttribute('data-tags').split(' ');
      const matchesSearch = itemText.includes(searchText);
      const matchesFilters = selectedFilters.every(filter => itemTags.includes(filter));

      if (matchesSearch && matchesFilters) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  }
});

function myFilter(){
  var x = document.getElementById("filterOptions");
  if (x.className === "options") {
   x.className += "responsive";
  } else {
      x.className = "options";
  }
}
function myFunction(){
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
   x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}