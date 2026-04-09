# Jersey Customizer

Jersey Customizer adalah aplikasi web interaktif berbasis Laravel, Alpine.js, dan Fabric.js yang memungkinkan pengguna merancang desain jersey secara *real-time* dengan visualisasi 2.5D yang mendalam.

## 🚀 Fitur Utama

- **Dynamic Mockup Selection**: Mendukung berbagai model mockup seperti V-Neck, O-Neck, dan tipe Kombinasi.
- **View States Independen**: Pengaturan desain (warna, motif, dll) dipisahkan secara cerdas antar tampilan (Depan, Belakang, dan Celana).
- **Sistem Pewarnaan & Motif**: 
    - Ubah warna setiap bagian jersey (badan, lengan, kerah, sabuk, dll) secara spesifik.
    - Terapkan berbagai motif (pattern) dengan kontrol penuh terhadap skala, sudut rotasi, dan pencerminan (*flip*).
- **Elemen Desain Kustom**:
    - Tambahkan Nama dan Nomor punggung dengan warna yang bisa disesuaikan.
    - Unggah Logo kustom Anda sendiri.
- **Advanced Controls**:
    - **Flip Horizontal/Vertical**: Cerminkan logo atau motif hanya dengan satu klik.
    - **History System**: Fitur Undo & Redo (Ctrl+Z / Ctrl+Shift+Z) untuk mempermudah proses desain.
    - **Interactive Toolbar**: Toolbar melayang untuk akses cepat ke fitur duplikasi, hapus, dan flip pada objek yang dipilih.
- **Premium UI/UX**: Desain antarmuka modern dengan Dark Mode, Glassmorphism, dan navigasi sidebar yang intuitif.

## 🛠️ Tech Stack

- **Frontend**: [Alpine.js](https://alpinejs.dev/) & [Tailwind CSS](https://tailwindcss.com/)
- **Canvas Engine**: [Fabric.js](http://fabricjs.com/)
- **Backend**: [Laravel 11](https://laravel.com/)
- **Asset Bundling**: [Vite](https://vitejs.dev/)

## 📦 Instalasi

1. Clone repository ini:
   ```bash
   git clone https://github.com/Username/jersey-customizer.git
   ```
2. Instal dependencies PHP:
   ```bash
   composer install
   ```
3. Instal dependencies Node.js:
   ```bash
   npm install
   ```
4. Salin file `.env` dan atur database Anda:
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```
5. Jalankan server pengembangan:
   ```bash
   php artisan serve
   npm run dev
   ```

## 📂 Struktur Aset Mockup

Agar sistem dapat mendeteksi bagian jersey secara otomatis, simpan aset Anda dengan struktur berikut:
- `/public/assets/mockups/{model-id}/{front|back|pants}/`
- File standar yang didukung: `body.png`, `left_sleeve.png`, `right_sleeve.png`, `collar.png`, `collar1.png`, `shadows.png`, `highlights.png`.

## 📄 Lisensi

Proyek ini berada di bawah lisensi MIT.
