# ARCubo - Augmented Reality Cube Platform

ARCubo adalah platform Web-AR & physical tracking cube yang memungkinkan proyeksi simulasi 3D langsung di tangan pengguna tanpa baterai atau kabel.

---

## 🚀 Fitur Utama

- **Uncompromised WebXR & Mind-AR Engine:** Berjalan lancar di smartphone Android entry-level hingga iPhone/iPad tanpa wajib memiliki ARCore/ARKit.
- **Teknik "Marker-to-World":** Mengunci posisi objek 3D di koordinat dunia nyata saat marker pertama kali terdeteksi (`detach-on-target`).
- **Touch Gesture Controls:** Mendukung *drag to rotate* dan *pinch to zoom/scale* langsung melalui layar sentuh smartphone.
- **Interaktif AR Lab Simulator:** Simulasi 3D Space Orbit, Human Heart, Eco Tower, dan Cyber Grid secara langsung di browser.

---

## 💻 Panduan Instalasi & Pengoperasian

### Prasyarat
- **Node.js:** v18.0.0 atau lebih baru
- **npm:** v9.0.0 atau lebih baru

### 1. Clone & Instalasi Dependensi
```bash
git clone https://github.com/Dixxyid/ARCubo.git
cd ARCubo
npm install
```

### 2. Jalankan Server Pengembangan (Development Mode)
```bash
npm run dev
```
Aplikasi akan dapat diakses secara lokal di `http://localhost:3000/`.

### 3. Build untuk Produksi
```bash
npm run build
```
Hasil build siap didistribusikan pada folder `dist/`.

### 4. Preview Hasil Build Produksi
```bash
npm run preview
```

---

## 📂 Struktur Aset Mind-AR

Folder `mindar/` menyimpan aset utama pendukung Mind-AR:
- `mindar/targets.mind`: File kompilasi target marker gambar. (Gunakan [Mind-AR Image Target Compiler](https://hiukim.github.io/mind-ar-js-doc/tools/image-compiler) untuk membuat file `.mind` custom).
- `mindar/model.glb`: File model 3D biner glTF 2.0 yang diproyeksikan.

File demo standalone kustom dapat diakses melalui `mindar-demo.html`.

---

## 📄 Lisensi
Di bawah lisensi [ISC](LICENSE).
