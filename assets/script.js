// mencegah pengiriman ulang form
if (window.history.replaceState) {
  window.history.replaceState(null, null, window.location.href);
}

const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown-content");
dropdown.addEventListener("mouseover", function () {
  dropdownContent.style.display = "block";
});

// menampilkan dropdown ketika di sentuh
dropdown.addEventListener("touchstart", function () {
  dropdownContent.style.display = "block";
});

// menutup dropdown ketika diklik luar
window.addEventListener("click", function (e) {
  if (e.target !== dropdown) {
    dropdownContent.style.display = "none";
  }
});

// CONTENT CARRIE
// menyembunyikan bacaCarrie-content
const bacaCarrieContent = document.querySelector("#bacaCarrie-content");
bacaCarrieContent.style.display = "none";

// menampilkan bacaCarrie-content
const bacaCarrie = document.querySelector("#bacaCarrie");
bacaCarrie.addEventListener("click", function () {
  bacaCarrieContent.style.display = "block";
  bacaCarrie.style.display = "none";
  window.location.hash = "#bacaCarrie";
});

// menyembunyikan bacaCarrie-content menggunakan tombol
const sembunyikanCarrie = document.querySelector("#sembunyikanCarrie");
sembunyikanCarrie.addEventListener("click", function () {
  bacaCarrieContent.style.display = "none";
  bacaCarrie.style.display = "block";
  window.location.hash = "#carrie";
});

// CONTENT CINTA TAK ADA MATI
// menyembunyikan bacaCintaTakAdaMati-content
const bacaCintaTakAdaMatiContent = document.querySelector(
  "#bacaCintaTakAdaMati-content"
);
bacaCintaTakAdaMatiContent.style.display = "none";

// menampilkan bacaCintaTakAdaMati-content
const bacaCintaTakAdaMati = document.querySelector("#bacaCintaTakAdaMati");
bacaCintaTakAdaMati.addEventListener("click", function () {
  bacaCintaTakAdaMatiContent.style.display = "block";
  bacaCintaTakAdaMati.style.display = "none";
  window.location.hash = "#bacaCintaTakAdaMati";
});

// menyembunyikan bacaCintaTakAdaMati-content menggunakan tombol
const sembunyikanCintaTakAdaMati = document.querySelector(
  "#sembunyikanCintaTakAdaMati"
);
sembunyikanCintaTakAdaMati.addEventListener("click", function () {
  bacaCintaTakAdaMatiContent.style.display = "none";
  bacaCintaTakAdaMati.style.display = "block";
  window.location.hash = "#cintaTakAdaMati";
});

// CONTENT EMMA
// menyembunyikan bacaEmma-content
const bacaEmmaContent = document.querySelector("#bacaEmma-content");
bacaEmmaContent.style.display = "none";

// menampilkan bacaEmma-content
const bacaEmma = document.querySelector("#bacaEmma");
bacaEmma.addEventListener("click", function () {
  bacaEmmaContent.style.display = "block";
  bacaEmma.style.display = "none";
  window.location.hash = "#bacaEmma";
});

// menyembunyikan bacaEmma-content menggunakan tombol
const sembunyikanEmma = document.querySelector("#sembunyikanEmma");
sembunyikanEmma.addEventListener("click", function () {
  bacaEmmaContent.style.display = "none";
  bacaEmma.style.display = "block";
  window.location.hash = "#emma";
});

// ROTASI DAN REVOLUSI
// menyembunyikan bacaRotasiDanRevolusi-content
const bacaRotasiDanRevolusiContent = document.querySelector(
  "#bacaRotasiDanRevolusi-content"
);
bacaRotasiDanRevolusiContent.style.display = "none";

// menampilkan bacaRotasiDanRevolusi-content
const bacaRotasiDanRevolusi = document.querySelector("#bacaRotasiDanRevolusi");
bacaRotasiDanRevolusi.addEventListener("click", function () {
  bacaRotasiDanRevolusiContent.style.display = "block";
  bacaRotasiDanRevolusi.style.display = "none";
  window.location.hash = "#bacaRotasiDanRevolusi";
});

// menyembunyikan bacaRotasiDanRevolusi-content menggunakan tombol
const sembunyikanRotasiDanRevolusi = document.querySelector(
  "#sembunyikanRotasiDanRevolusi"
);
sembunyikanRotasiDanRevolusi.addEventListener("click", function () {
  bacaRotasiDanRevolusiContent.style.display = "none";
  bacaRotasiDanRevolusi.style.display = "block";
  window.location.hash = "#rotasiDanRevolusi";
});

// CONTENT THE DRY
// menyembunyikan bacaTheDry-content
const bacaTheDryContent = document.querySelector("#bacaTheDry-content");
bacaTheDryContent.style.display = "none";

// menampilkan bacaTheDry-content
const bacaTheDry = document.querySelector("#bacaTheDry");
bacaTheDry.addEventListener("click", function () {
  bacaTheDryContent.style.display = "block";
  bacaTheDry.style.display = "none";
  window.location.hash = "#bacaTheDry";
});

// menyembunyikan bacaTheDry-content menggunakan tombol
const sembunyikanTheDry = document.querySelector("#sembunyikanTheDry");
sembunyikanTheDry.addEventListener("click", function () {
  bacaTheDryContent.style.display = "none";
  bacaTheDry.style.display = "block";
  window.location.hash = "#theDry";
});

// menampilkan nav-tampil dengan burgerTampil
const burgerTampil = document.querySelector("#burgerTampil");
const navTampil = document.querySelectorAll(".left");
burgerTampil.addEventListener("click", function () {
  navTampil.forEach(function (nav) {
    nav.style.display = "block";
    nav.classList.toggle("left");
    // menghilangkan burgerTampil
    burgerTampil.style.display = "none";
    burgerSembunyi.style.display = "block";
  });
});

// menyembunyikan nav-tampil dengan burgerSembunyi
const burgerSembunyi = document.querySelector("#burgerSembunyi");
const navSembunyi = document.querySelectorAll(".left");
burgerSembunyi.addEventListener("click", function () {
  navSembunyi.forEach(function (nav) {
    nav.style.display = "none";
    nav.classList.toggle("left");
    // menampilkan burgerSembunyi
    burgerSembunyi.style.display = "none";
    burgerTampil.style.display = "block";
  });
});

// auto reload ketika halaman > 1000px
window.addEventListener("resize", function () {
  if (window.innerWidth > 1000) {
    window.location.reload();
  }
});
