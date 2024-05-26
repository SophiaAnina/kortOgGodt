document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('searchInput');
    const checkboxes = document.querySelectorAll('.filter');
    const links = document.querySelectorAll('.link');

    function filterLinks() {
        const searchText = searchInput.value.toLowerCase();
        const activeFilters = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        links.forEach(link => {
            const linkText = link.textContent.toLowerCase();
            const linkCategory = link.dataset.category;

            const matchesText = linkText.includes(searchText);
            const matchesFilter = activeFilters.length === 0 || activeFilters.includes(linkCategory);

            if (matchesText && matchesFilter) {
                link.classList.remove('hidden');
            } else {
                link.classList.add('hidden');
            }
        });
    }

    searchInput.addEventListener('input', filterLinks);
    checkboxes.forEach(checkbox => checkbox.addEventListener('change', filterLinks));
});
