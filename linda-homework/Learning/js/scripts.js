// Function to show the selected page and hide others
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
    toggleSidebar(); // Close sidebar after selecting page
}

// Function to toggle sidebar visibility
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

// Ensure the correct page is displayed on load
document.addEventListener('DOMContentLoaded', function () {
    showPage('beranda'); // Default to 'beranda'
});

// Function for edit profile action
function editProfile() {
    alert('Edit Profil: Fitur dalam pengembangan.');
}
