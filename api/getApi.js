// api/getApi.js
export default function handler(req, res) {
    // Ambil token dari header Authorization
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    // Ganti dengan logika autentikasi Anda
    const SECRET_TOKEN = process.env.API_TOKEN; // Simpan token di environment variable

    // Periksa apakah token valid
    if (token === SECRET_TOKEN) {
        // Jika valid, kirimkan isi api.json
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(require('../../api.json'));
    } else {
        // Jika tidak valid, kirimkan response forbidden
        res.status(403).json({ message: 'Forbidden: Invalid Token' });
    }
}
