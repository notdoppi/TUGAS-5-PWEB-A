// Data dummy kode pos Indonesia sederhana
const dataKodePos = {
  "Jawa Timur": {
    "Surabaya": {
      "Keputih": "60111",
      "Krembangan": "60175",
      "Genteng": "60272"
    },
    "Malang": {
      "Lowokwaru": "65141",
      "Klojen": "65119"
    }
  },
  "Jawa Tengah": {
    "Semarang": {
      "Tembalang": "50275",
      "Banyumanik": "50264"
    }
  },
  "DKI Jakarta": {
    "Jakarta Selatan": {
      "Kebayoran Baru": "12110",
      "Tebet": "12810"
    }
  }
};

// Elemen DOM
const provinsiSelect = document.getElementById("provinsi");
const kotaSelect = document.getElementById("kota");
const kecamatanSelect = document.getElementById("kecamatan");
const cariBtn = document.getElementById("cariBtn");
const output = document.getElementById("output");

// Saat provinsi berubah
provinsiSelect.addEventListener("change", () => {
  const provinsi = provinsiSelect.value;
  kotaSelect.innerHTML = '<option value="">Pilih Kota atau Kabupaten</option>';
  kecamatanSelect.innerHTML = '<option value="">Pilih Kecamatan</option>';

  if (provinsi && dataKodePos[provinsi]) {
    Object.keys(dataKodePos[provinsi]).forEach(kota => {
      kotaSelect.innerHTML += `<option value="${kota}">${kota}</option>`;
    });
  }
});

// Saat kota berubah
kotaSelect.addEventListener("change", () => {
  const provinsi = provinsiSelect.value;
  const kota = kotaSelect.value;
  kecamatanSelect.innerHTML = '<option value="">Pilih Kecamatan</option>';

  if (provinsi && kota && dataKodePos[provinsi][kota]) {
    Object.keys(dataKodePos[provinsi][kota]).forEach(kec => {
      kecamatanSelect.innerHTML += `<option value="${kec}">${kec}</option>`;
    });
  }
});

// Saat tombol cari diklik
cariBtn.addEventListener("click", () => {
  const provinsi = provinsiSelect.value;
  const kota = kotaSelect.value;
  const kecamatan = kecamatanSelect.value;

  if (!provinsi || !kota || !kecamatan) {
    output.innerHTML = `<div class="error">Harap pilih semua data sebelum mencari!</div>`;
    return;
  }

  const kodePos = dataKodePos[provinsi]?.[kota]?.[kecamatan];
  if (kodePos) {
    output.innerHTML = `
      <div class="result">
        Kode Pos untuk <b>${kecamatan}, ${kota}, ${provinsi}</b> adalah:
        <h2>${kodePos}</h2>
      </div>
    `;
  } else {
    output.innerHTML = `<div class="error">Data kode pos tidak ditemukan.</div>`;
  }
});
