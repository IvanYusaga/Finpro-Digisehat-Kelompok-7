const profilePicture = document.getElementById('profile-picture');
const uploadProfile = document.getElementById('upload-profile');

// Membuka dialog unggah file saat gambar profil diklik
profilePicture.addEventListener('click', function() {
    uploadProfile.click();
});

// Menampilkan gambar baru setelah pengguna memilih file
uploadProfile.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profilePicture.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
    
   
        const form = document.getElementById('upload-form');
        const message = document.getElementById('upload-message');

        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah pengiriman form yang default
            
            const fileInput = document.getElementById('task-file');
            const file = fileInput.files[0];

            if (file) {
                // Menampilkan pesan sukses
                message.textContent = `File "${file.name}" berhasil diunggah!`;
            } else {
                message.textContent = 'Silakan pilih file untuk diunggah.';
            }
        });
    



});
