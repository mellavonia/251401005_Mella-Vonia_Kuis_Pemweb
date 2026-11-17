# To-Do List React

Aplikasi To-Do List sederhana untuk mengelola tugas sehari-hari, dibuat menggunakan React.js (Vite) dan React Router DOM. Tampilannya bernuansa krem dan hijau lumut ala film Studio Ghibli.

## Fitur

- Menampilkan daftar tugas beserta judul, status, prioritas, dan deadline
- Filter tugas berdasarkan status (Semua, to-do, in progress, done)
- Melihat detail lengkap setiap tugas
- Menambah tugas melalui formulir
- Mengubah informasi tugas yang sudah ada
- Menghapus tugas dengan konfirmasi terlebih dahulu
- Notifikasi setiap kali melakukan aksi
- Perubahan data langsung terlihat tanpa reload halaman (React State)

## Teknologi

- React.js
- Vite
- React Router DOM
- Data dummy (tanpa backend dan tanpa REST API)

## Cara Menjalankan

```bash
npm install
npm run dev
```

Buka alamat yang muncul di terminal (biasanya `http://localhost:5173`).

## Struktur Folder

```
src/
├── components/   # TodoForm dan ConfirmDialog
├── data/         # Data dummy dan daftar status/prioritas
├── pages/        # TodoListPage dan TodoDetailPage
├── App.css       # Gaya tampilan
├── App.jsx       # Routing dan state utama
└── main.jsx
```

## Screenshot

### Daftar Tugas
![Tampilan Daftar Tugas]
<img width="960" height="600" alt="Screenshot 2026-11-17 185149" src="https://github.com/user-attachments/assets/af697a53-20c1-483a-8071-2aacdfcdd714" />

### Detail Tugas
![Detail Tugas]
<img width="960" height="600" alt="Screenshot 2026-11-17 185234" src="https://github.com/user-attachments/assets/71a0cd65-d061-44c0-b542-1b7d55c5b6cc" />

### Form Tambah Tugas
![Form Tambah Tugas]
<img width="960" height="600" alt="Screenshot 2026-11-17 185216" src="https://github.com/user-attachments/assets/19302c0d-4fb3-4f78-bfe7-041c543a6a89" />

### Form Update Tugas
![Form Update Tugas]
<img width="960" height="600" alt="Screenshot 2026-11-17 185251" src="https://github.com/user-attachments/assets/97c23871-cd0c-4690-848f-80b702f1fcd2" />


### Konfirmasi Hapus
![Konfirmasi Hapus]
<img width="960" height="600" alt="Screenshot 2026-11-17 190133" src="https://github.com/user-attachments/assets/36de4748-c79f-46b7-a9ae-64470e649e8c" />
