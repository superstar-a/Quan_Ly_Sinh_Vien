require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');
const sinhVienRoutes = require('./src/routes/sinhVienRoutes');

const app = express();

// Kết nối MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.use('/api/sinhvien', sinhVienRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'API Quản Lý Sinh Viên đang chạy' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
