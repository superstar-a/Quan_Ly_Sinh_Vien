const mongoose = require('mongoose');

const sinhVienSchema = new mongoose.Schema(
  {
    maSV: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    hoTen: {
      type: String,
      required: true,
      trim: true,
    },
    ngaySinh: {
      type: Date,
    },
    gioiTinh: {
      type: String,
      enum: ['Nam', 'Nữ', 'Khác'],
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    lop: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('SinhVien', sinhVienSchema);
