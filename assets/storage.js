// input data dari form Saran Review Buku ke localStorage
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const judul = document.querySelector("#judulBuku").value;
  const penulis = document.querySelector("#penulis").value;
  const data = {
    judul,
    penulis,
  };
  let buku = [];

  // form tidak akan dikirim jika judul dan penulis kosong
  if (judul === "" || penulis === "") {
    alert("Judul dan penulis tidak boleh kosong!");
  } else {
    // jika localStorage sudah ada, maka data akan ditambahkan
    if (localStorage.getItem("buku") !== null) {
      // cek apakah judul dan penulis sudah ada di localStorage
      // jika sudah ada, maka data tidak akan ditambahkan
      if (
        localStorage.getItem("buku").includes(judul) &&
        localStorage.getItem("buku").includes(penulis)
      ) {
        alert("Judul dan penulis sudah ada!");
        form.reset();
      } else {
        // jika belum ada, maka data akan ditambahkan
        buku = JSON.parse(localStorage.getItem("buku"));
        buku.push(data);
        localStorage.setItem("buku", JSON.stringify(buku));
        alert("Terima Kasih atas Saran Review Bukunya");
        // reload halaman setelah data disimpan
        window.location.reload();
        form.reset();
      }
    } else {
      // jika localStorage belum ada, maka data akan disimpan
      buku.push(data);
      localStorage.setItem("buku", JSON.stringify(buku));
      alert("Terima Kasih atas Saran Review Bukunya");
      // reload halaman setelah data disimpan
      window.location.reload();
      form.reset();
    }
  }
});

// menampilkan data dari localStorage ke dalam tabel
const tabel = document.querySelector("#dataBuku");
const buku = JSON.parse(localStorage.getItem("buku"));
buku.forEach(function (buku) {
  tabel.innerHTML += `
    <tr>
      <td>${buku.judul}</td>
      <td>${buku.penulis}</td>
    </tr>
  `;
});

// buat localStorage
const storage = {
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get(key) {
    return JSON.parse(localStorage.getItem(key));
  },
  remove(key) {
    localStorage.removeItem(key);
  },
};
