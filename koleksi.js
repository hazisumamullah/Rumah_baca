const daftarBuku = [
  {
    judul: "The Psychology of Money",
    deskripsi:
      "Morgan Housel – Buku ini membahas cara berpikir dan perilaku manusia dalam mengelola uang.",
    rating: 5.0,
    gambar: "img/Buku.png",
  },
  {
    judul: "Revolusi Teknologi",
    deskripsi:
      "Perkembangan teknologi digital dan dampaknya pada masyarakat modern.",
    rating: 4.0,
    gambar: "img/buku teknologi.png",
  },
  {
    judul: "Mengenal Budaya Nusantara",
    deskripsi: "Eksplorasi budaya Indonesia dari Sabang sampai Merauke.",
    rating: 3.8,
    gambar: "img/lingkungan-alam.jpg",
  },
  {
    judul: "Alam dan Kehidupan",
    deskripsi: "Keanekaragaman hayati dan pentingnya pelestarian lingkungan.",
    rating: 4.5,
    gambar: "img/alam.jpeg",
  },
  {
    judul: "Petualangan di Dunia Sains",
    deskripsi: "Panduan anak-anak memahami sains dengan cara menyenangkan.",
    rating: 4.8,
    gambar: "img/SAINS-2.jpg",
  },
  {
    judul: "Resep Tradisional Nusantara",
    deskripsi: "Kumpulan resep masakan khas dari berbagai daerah di Indonesia.",
    rating: 4.2,
    gambar: "img/rsep.jpg",
  },
  {
    judul: "Filsafat Hidup ",
    deskripsi: "Pemikiran dan nilai-nilai hidup.",
    rating: 3.9,
    gambar: "img/falsafah-hidup.png",
  },
  {
    judul: "Panduan Berkebun Organik",
    deskripsi: "Cara menanam sayuran sehat di halaman rumah sendiri.",
    rating: 4.6,
    gambar: "img/organik.jpg",
  },
  {
    judul: "Sejarah Peradaban Dunia",
    deskripsi: "Ringkasan sejarah dari zaman kuno hingga modern.",
    rating: 4.4,
    gambar: "img/dunia.jpeg",
  },
  {
    judul: "Cerita Rakyat Nusantara",
    deskripsi: "Kumpulan dongeng dan legenda dari berbagai daerah.",
    rating: 4.1,
    gambar: "img/rakyat.jpg",
  },
  {
    judul: "Belajar Matematika Dasar",
    deskripsi: "Panduan visual dan praktis untuk anak-anak usia sekolah.",
    rating: 4.0,
    gambar: "img/matika.jpg",
  },
  {
    judul: "Menjelajah Angkasa",
    deskripsi: "Buku pengetahuan tentang luar angkasa dan planet-planet.",
    rating: 4.7,
    gambar: "img/angkasa.jpg",
  },
  {
    judul: "Kisah Nabi dan Rasul",
    deskripsi: "Cerita penuh hikmah dari kehidupan para nabi.",
    rating: 4.9,
    gambar: "img/kisah nabi.jpg",
  },
  {
    judul: "Bahasa Inggris Praktis",
    deskripsi: "Panduan percakapan Bahasa Inggris untuk pemula.",
    rating: 4.2,
    gambar: "img/english.jpg",
  },
];

// Membuat ikon bintang dari rating
function buatBintang(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  let starsHtml = "";

  for (let i = 0; i < fullStars; i++) {
    starsHtml += `<i class="fas fa-star text-warning"></i>`;
  }
  if (halfStar) {
    starsHtml += `<i class="fas fa-star-half-alt text-warning"></i>`;
  }
  for (let i = fullStars + halfStar; i < 5; i++) {
    starsHtml += `<i class="far fa-star text-warning"></i>`;
  }

  return starsHtml;
}

// Tampilkan semua buku ke dalam HTML
function tampilkanBuku(data = daftarBuku) {
  const container = document.getElementById("bookContainer");
  container.innerHTML = "";

  data.forEach((buku) => {
    const card = document.createElement("div");
    card.className = "col-md-6 col-lg-4";
    card.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${buku.gambar}" class="card-img-top" alt="${buku.judul}" />
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${buku.judul}</h5>
          <p class="card-text flex-grow-1">${buku.deskripsi}</p>
          <div class="mb-3 text-warning">
            ${buatBintang(buku.rating)}
            <small class="text-muted ms-2">${buku.rating} / 5</small>
          </div>
          <button 
            class="btn btn-primary mt-auto btn-pinjam" 
            data-bs-toggle="modal" 
            data-bs-target="#modalPinjam" 
            data-judul="${buku.judul}">
            Pinjam Buku
          </button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Setup pencarian buku
function setupPencarian() {
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", function () {
    const keyword = this.value.toLowerCase();
    const hasilFilter = daftarBuku.filter((buku) => {
      return (
        buku.judul.toLowerCase().includes(keyword) ||
        buku.deskripsi.toLowerCase().includes(keyword)
      );
    });
    tampilkanBuku(hasilFilter);
  });
}

// Tangani klik tombol Pinjam => update link Online di modal
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-pinjam")) {
    const judul = e.target.getAttribute("data-judul");
    const tombolOnline = document.getElementById("btnPinjamOnline");
    if (tombolOnline && judul) {
      tombolOnline.href = `pinjam.html?judul=${encodeURIComponent(judul)}`;
    }
  }
});

// Toggle Mode Gelap & Terang
const modeToggle = document.getElementById("modeToggle");
const body = document.body;

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  modeToggle.textContent = body.classList.contains("dark-mode")
    ? "☀️ Mode Terang"
    : "🌙 Mode Gelap";
});

// Inisialisasi saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  tampilkanBuku();
  setupPencarian();
});
