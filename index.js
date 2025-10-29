// Import module yang dibutuhkan
import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Menentukan lokasi file saat ini
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Inisialisasi aplikasi Express
const app = express();

// Gunakan folder public agar file HTML, CSS bisa diakses
app.use(express.static("public"));

// ======================
// ROUTING TANPA PARAMETER
// ======================

// Halaman utama (index)
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Halaman tentang saya
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/about.html");
});

// Halaman proyek
app.get("/projects", (req, res) => {
  res.sendFile(__dirname + "/public/projects.html");
});

// Halaman kontak
app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/public/contact.html");
});

// ======================
// ROUTING DENGAN PARAMETER
// ======================
// Routing dengan parameter versi file HTML
app.get("/user/:nama", (req, res) => {
  res.sendFile(__dirname + "/public/user.html");
});


// Jalankan server
const port = 3000;
app.listen(port, () => {
  console.log(`Server berjalan di http://127.0.0.1:${port}`);
});
