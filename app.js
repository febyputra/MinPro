// Mengambil Elemen Gambar dan Tombol
var img = document.querySelector('.slideshow');
var prevBtn = document.querySelector('.prev-btn');
var nextBtn = document.querySelector('.next-btn');

// Membuat Array dengan Beberapa Sumber Gambar
var imgSources = ['assets/1.jpg', 'assets/2.jpg', 'assets/3.jpg'];

// Menentukan Indeks Gambar Saat Ini
var currentIndex = 0;

// Fungsi untuk Mengganti Gambar
function changeImage() {
    img.src = imgSources[currentIndex];
}

// Fungsi untuk Menggeser ke Gambar Sebelumnya
function prevImage() {
    currentIndex = (currentIndex - 1 + imgSources.length) % imgSources.length;
    changeImage();
}

// Fungsi untuk Menggeser ke Gambar Berikutnya
function nextImage() {
    currentIndex = (currentIndex + 1) % imgSources.length;
    changeImage();
}

// Menambahkan Event Listener ke Tombol Geser
prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);

// Menjalankan Fungsi untuk Replace Gambar setiap 3 detik
setInterval(nextImage, 1000);