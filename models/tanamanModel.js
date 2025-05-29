import mongoose from "mongoose";

const tanamanSchema = new mongoose.Schema({
  nama_tanaman: {
    type: String,
    required: true,
    unique: true, // jika nama tanaman tidak boleh ganda
    trim: true
  },
  suhu_optimal_min: {
    type: Number,
    required: true
  },
  suhu_optimal_max: {
    type: Number,
    required: true
  },
  durasi_panen: {
    type: Number, // dalam hari
    required: true,
    min: 1
  },
  rekomendasi_khusus: {
    type: String, // array of teks rekomendasi
    required: true
  }
}, {
  timestamps: true // otomatis tambah createdAt dan updatedAt
});

const tanamanModel = mongoose.model('Tanaman', tanamanSchema);
export default tanamanModel;