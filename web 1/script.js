const nama = [
  "Joseph Joestar",
  "Jonathan Joestar",
  "Nanda Baley",
  "Kujo Jotaro",
  "Giorno Giovanna",
  "Johnny Joestar"
];

const namaInput = document.getElementById("nama");

namaInput.addEventListener("input", function() {
  const inputVal = this.value.toLowerCase();
  const suggestion = nama.find(nama => 
    nama.toLowerCase().startsWith(inputVal)
  );
  if (suggestion && inputVal.length > 0) {
    this.value = suggestion;
    this.setSelectionRange(inputVal.length, suggestion.length);
  }
});

document.getElementById("formReg").addEventListener("submit", function(e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const nim = document.getElementById("nim").value.trim();
  const matkul = document.getElementById("matkul").value.trim();
  const dosen = document.getElementById("dosen").value.trim();
  const email = document.getElementById("email").value.trim();
  const jurusan = document.getElementById("jurusan").value;

  if (!nama || !nim || !matkul || !dosen || !email || !jurusan) {
    if (!email) {
      alert("Email Tidak Boleh Kosong");
    } else {
      alert("Semua kolom harus diisi!");
    }
    return;
  }

  alert("Registrasi berhasil!");
});
