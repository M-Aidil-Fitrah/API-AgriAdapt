import tanamanModel from '../models/tanamanModel.js';

export const addTanaman = async (req, res) => {
    try {
        const {nama_tanaman, suhu_optimal_min, suhu_optimal_max, durasi_panen, rekomendasi_khusus} = req.body;
        const Tanaman = new tanamanModel({
            nama_tanaman,
            suhu_optimal_min,
            suhu_optimal_max,
            durasi_panen,
            rekomendasi_khusus
        });
        await Tanaman.save();
        res.status(201).json({message: "Tanaman added successfully", tanaman: Tanaman});
    } catch (error) {
        console.error("Error adding tanaman:", error);
}}

export const getTanaman = async (req, res) => {
    try {
        const {nama_tanaman} = req.params;
        const tanaman = await tanamanModel.findOne({nama_tanaman});
        res.status(200).json(tanaman);
    } catch (error) {
        console.error("Error fetching tanaman:", error);
        res.status(500).json({message: "Internal server error"});
    }
}
