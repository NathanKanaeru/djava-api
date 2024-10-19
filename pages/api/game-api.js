export default function handler(req, res) {
  const API_TOKEN = process.env.API_TOKEN;

  // Ambil token dari header request
  const token = req.headers['authorization'];

  // Validasi token
  if (token !== `Bearer ${API_TOKEN}`) {
    return res.status(403).json({ error: 'Forbidden: Invalid API token' });
  }

  // Jika token valid, kirim respons JSON
  res.status(200).json({
    clientVersionCode: 1,
    clientSampVersionCode: 1,
    gameFilesVersionCode: 1,
    URL_GAME_FILES: "https://www.mediafire.com/file/f21fgy9vu6vk7sq/game.zip/file",
    URL_GAME_FILES_UPD: "http://45.130.141.87/files_upd.zip",
    URL_VK: "https://vk.com/",
    URL_DISCORD: "https://discord.gg/",
    URL_YOUTUBE: "",
    URL_FORUM: "",
    URL_DONATE: "",
    URL_CLIENT: "http://45.130.141.87/launcher.apk",
    URL_CLIENTSAMPAPK: "http://45.130.141.87/client.apk"
  });
}
