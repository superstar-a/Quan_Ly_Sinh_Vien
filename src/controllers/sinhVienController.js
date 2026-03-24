const SinhVien = require('../models/SinhVien');

// GET /sinhvien - Lấy danh sách
exports.getAll = async (req, res) => {
  try {
    const sinhViens = await SinhVien.find();
    res.json(sinhViens);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET /sinhvien/:id - Lấy theo ID
exports.getById = async (req, res) => {
  try {
    const sinhVien = await SinhVien.findById(req.params.id);
    if (!sinhVien) return res.status(404).json({ message: 'Không tìm thấy sinh viên' });
    res.json(sinhVien);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /sinhvien - Tạo mới
exports.create = async (req, res) => {
  try {
    const sinhVien = new SinhVien(req.body);
    const saved = await sinhVien.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT /sinhvien/:id - Cập nhật
exports.update = async (req, res) => {
  try {
    const updated = await SinhVien.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) return res.status(404).json({ message: 'Không tìm thấy sinh viên' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE /sinhvien/:id - Xóa
exports.remove = async (req, res) => {
  try {
    const deleted = await SinhVien.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Không tìm thấy sinh viên' });
    res.json({ message: 'Đã xóa thành công' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
