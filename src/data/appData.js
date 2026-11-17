export const appData = {
  materi: {
    pengertian: "Teks prosedur adalah teks yang menjelaskan cara melakukan atau membuat sesuatu melalui tahapan yang tersusun secara logis untuk mencapai hasil tertentu",
    struktur: [
      { nama: "Tujuan", ket: "Menjelaskan hasil yang ingin dicapai." },
      { nama: "Alat, Bahan / Prasyarat", ket: "Hal-hal yang perlu disiapkan sebelum memulai." },
      { nama: "Langkah-langkah", ket: "Tindakan secara runtut, jelas, dan logis." },
      { nama: "Penutup / Pemeriksaan", ket: "Cara memastikan prosedur telah berhasil dengan benar." }
    ],
    ciriBahasa: [
      "Kata kerja tindakan (contoh: buka, pilih, ketik, periksa, simpan, ekspor).",
      "Penanda urutan (contoh: pertama, berikutnya, setelah itu, terakhir).",
      "Kalimat perintah / instruksi yang jelas dan tidak ambigu.",
      "Keterangan cara/tempat (contoh: 'pada menu Berkas', 'di folder Tugas')."
    ],
    contoh: {
      judul: "Cara Membuat dan Menyimpan Dokumen Dalam Format PDF",
      tujuan: "Membantu siswa membuat dokumen tugas, menyimpannya dengan nama berkas yang mudah dikenali, dan mengekspornya menjadi PDF agar tata letak konsisten saat dibuka di perangkat lain.",
      prasyarat: [
        "Laptop/komputer yang menjalankan aplikasi pengolah kata.",
        "Aplikasi pengolah kata (MS Word / Google Docs).",
        "Isi dokumen tugas yang sudah selesai diperiksa.",
        "Folder penyimpanan khusus untuk tugas sekolah."
      ],
      langkahLangkah: [
        "Nyalakan laptop/komputer, kemudian buka aplikasi pengolah kata.",
        "Buat dokumen baru atau buka dokumen tugas yang sudah dikerjakan.",
        "Periksa isi dokumen, judul, ejaan, ukuran huruf, jarak baris, dan paragraf.",
        "Pilih menu Berkas (File), lalu pilih Simpan Sebagai (Save As).",
        "Tentukan folder tujuan, misalnya folder 'Tugas Bahasa Indonesia'.",
        "Ketik nama berkas yang jelas, misalnya 'Teks_Prosedur_Nama_Kelas'.",
        "Simpan dokumen dalam format asli aplikasi terlebih dahulu jika masih perlu diedit.",
        "Untuk membuat PDF, buka menu Berkas (File), lalu pilih Ekspor / Simpan Sebagai.",
        "Pilih format PDF, kemudian jalankan perintah simpan atau ekspor.",
        "Buka berkas PDF yang dihasilkan. Periksa apakah seluruh halaman tampil dengan benar.",
        "Jika ada bagian yang terpotong, perbaiki dokumen sumber lalu ekspor ulang."
      ],
      pemeriksaanHasil: [
        "Berkas PDF dapat dibuka.",
        "Nama berkas sesuai dengan isi dan ketentuan tugas.",
        "Semua halaman tampil dan tidak ada teks/gambar yang terpotong.",
        "Dokumen disimpan di folder yang benar.",
        "Dokumen sumber tetap tersedia jika nanti perlu diperbaiki."
      ]
    }
  },
  latihan: {
    susunLangkah: [
      { id: 'a', teks: "Pilih format PDF pada menu ekspor atau penyimpanan." },
      { id: 'b', teks: "Periksa isi dan tata letak dokumen." },
      { id: 'c', teks: "Buka atau buat dokumen pada aplikasi pengolah kata." },
      { id: 'd', teks: "Tentukan folder dan nama berkas." },
      { id: 'e', teks: "Buka PDF hasil ekspor untuk memeriksa tampilannya." }
    ],
    kunciSusun: ['c', 'b', 'd', 'a', 'e'],
    detektif: {
      awal: "Simpan saja seperti biasa, lalu jadikan PDF.",
      masalah: "Instruksi tidak menjelaskan folder tujuan, nama berkas, menu yang digunakan, atau cara memeriksa hasil.",
      solusiContoh: "Pilih menu Berkas, tentukan folder 'Tugas Bahasa Indonesia', ketik nama berkas yang sesuai, lalu pilih opsi Ekspor atau Simpan Sebagai dan tentukan format PDF. Setelah selesai, buka PDF untuk memastikan seluruh halaman tampil dengan benar."
    }
  },
  kuis: [
    {
      id: 1,
      soal: "Apa tujuan utama teks prosedur?",
      pilihan: [
        "A. Menghibur pembaca",
        "B. Menjelaskan tahapan untuk mencapai hasil",
        "C. Menggambarkan tokoh",
        "D. Menceritakan pengalaman"
      ],
      jawabanBenar: 1 // B[cite: 20]
    },
    {
      id: 2,
      soal: "Kalimat mana yang paling jelas sebagai instruksi?",
      pilihan: [
        "A. Simpan seperti biasa",
        "B. Lakukan dengan benar",
        "C. Pilih menu Berkas lalu klik Ekspor",
        "D. Pokoknya jadikan PDF"
      ],
      jawabanBenar: 2 
    },
    {
      id: 3,
      soal: "Mengapa hasil PDF perlu dibuka kembali setelah diekspor?",
      pilihan: [
        "A. Agar ukuran huruf otomatis besar",
        "B. Untuk memastikan berkas dan tata letaknya benar",
        "C. Agar dokumen sumber terhapus",
        "D. Agar internet lebih cepat"
      ],
      jawabanBenar: 1 
    },
    {
      id: 4,
      soal: "Bagian yang menjelaskan hasil yang ingin dicapai disebut ...",
      pilihan: [
        "A. Tujuan",
        "B. Langkah",
        "C. Penutup",
        "D. Daftar pustaka"
      ],
      jawabanBenar: 0 
    },
    {
      id: 5,
      soal: "Apa yang sebaiknya dilakukan jika teks atau gambar terpotong pada PDF?",
      pilihan: [
        "A. Mengabaikannya",
        "B. Menghapus dokumen",
        "C. Memperbaiki dokumen sumber lalu mengekspor ulang",
        "D. Mengganti nama saja"
      ],
      jawabanBenar: 2 
    }
  ]
};