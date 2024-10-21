window.addEventListener("load", ()=>{
    const loader = document.querySelector(".loader");
    loader.classList.add("loader-hidden");
    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader");
    })
})

let navbar = document.querySelector ('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}
document.querySelector('#nav-close').onclick = () =>{
    navbar.classList.remove('active');
}

// let searchForm = document.querySelector('.search-form');

// document.querySelector("#search-btn").onclick = () => {
//     searchForm.classList.add("active");
// };
// document.querySelector("#close-search").onclick = () => {
//     searchForm.classList.remove("active");
// };
window.onscroll = () =>{
    navbar.classList.remove('active');
    if(window,scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector(".header").classList.remove("active");
    }
};
window.onload = () => {
    if ((window, scrollY > 0)) {
    document.querySelector(".header").classList.add("active");
    } else {
    document.querySelector(".header").classList.remove("active");
    }
};
var swiper = new Swiper(".home-slider",{
    loop:true,
    grabCursor:true ,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper = new Swiper(".product-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween:20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
        slidesPerView: 1,
        },
        640: {
        slidesPerView: 1.5,
        },
        768: {
        slidesPerView: 2,
        },
        1024: {
        slidesPerView: 2.5,
        },
    },
});

var swiper = new Swiper(".review-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    breakpoints: {
    0: {
        slidesPerView: 1,
    },
    640: {
        slidesPerView: 2,
    },
    768: {
        slidesPerView: 3,
    },
    },
});

var swiper = new Swiper(".blogs-slider", {
loop: true,
grabCursor: true,
spaceBetween: 10,
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
breakpoints: {
    0: {
    slidesPerView: 1,
    },
    768: {
    slidesPerView: 2,
    },
    991: {
    slidesPerView: 3,
    },
},
});

    var swiper = new Swiper(".clients-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
        slidesPerView: 1,
        },
        640: {
        slidesPerView: 2,
        },
        768: {
        slidesPerView: 3,
        },
        1024: {
        slidesPerView: 4,
        },
    },
    });

document.addEventListener("DOMContentLoaded", function () {
const form = document.getElementById("my-form");
const loading = document.getElementById("loading");
const submitInput = form.querySelector(".btn");

form.addEventListener("submit", function (e) {
e.preventDefault();

// Disable the submit input with class "btn" immediately after it's clicked
submitInput.disabled = true;

// Show the loading notification
loading.style.display = "block";

const data = new FormData(form);
const action = e.target.action;

fetch(action, {
    method: "POST",
    body: data,
})
    .then(() => {
    // Hide the loading notification
    loading.style.display = "none";
    alert("Terima kasih telah berlangganan dengan kami! 🎉Kami senang Anda menjadi bagian dari komunitas eksklusif kami yang siap menjelajahi Labuan Bajo. Nantikan panduan terbaik, penawaran khusus, dan tips perjalanan yang akan memudahkan petualangan Anda. Selamat merencanakan liburan impian Anda dengan percaya diri bersama kami! 🌍✈️🌞");
    })
    .catch((error) => {
    // Hide the loading notification and handle the error
    loading.style.display = "none";
    alert("Oops! Terjadi Kesalahan. Maaf, ada sesuatu yang tidak berjalan sesuai rencana. 😔 Kami tidak bisa memproses langganan Anda saat ini. Silakan coba lagi beberapa saat lagi, atau periksa koneksi internet Anda. Kami akan dengan senang hati membantu Anda mendapatkan akses ke penawaran eksklusif dan tips perjalanan terbaik.");
    });

// Input remains disabled, no further submits allowed
});
});

// Modal Overlay
document.addEventListener("DOMContentLoaded", function () {
  const cardImages = document.querySelectorAll(".image img");
  const modalOverlay = document.getElementById("modal-overlay");
  const modalImage = document.getElementById("modal-image");
  const closeBtn = document.getElementById("close-btn");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  let currentIndex = 0;

  // Fungsi untuk membuka modal dengan gambar saat ini
  function openModal(index) {
    currentIndex = index;
    modalImage.src = cardImages[currentIndex].src;
    modalOverlay.style.display = "flex";
  }

  // Fungsi untuk menutup modal
  function closeModal() {
    modalOverlay.style.display = "none";
  }

  // Fungsi untuk menampilkan gambar sebelumnya
  function showPrevImage() {
    currentIndex = (currentIndex - 1 + cardImages.length) % cardImages.length;
    modalImage.src = cardImages[currentIndex].src;
  }

  // Fungsi untuk menampilkan gambar berikutnya
  function showNextImage() {
    currentIndex = (currentIndex + 1) % cardImages.length;
    modalImage.src = cardImages[currentIndex].src;
  }

  // Event listener untuk membuka modal ketika gambar diklik
  cardImages.forEach((img, index) => {
    img.addEventListener("click", function () {
      openModal(index);
    });
  });

  // Event listener untuk menutup modal
  closeBtn.addEventListener("click", closeModal);

  // Event listener untuk tombol navigasi kiri/kanan
  prevBtn.addEventListener("click", showPrevImage);
  nextBtn.addEventListener("click", showNextImage);

  // Event listener untuk menutup modal ketika mengklik di luar gambar
  modalOverlay.addEventListener("click", function (event) {
    if (event.target === modalOverlay) {
      closeModal();
    }
  });
});

function goBack() {
  window.location.href = "../blog.html"; // Mengarahkan ke halaman home.html
}
