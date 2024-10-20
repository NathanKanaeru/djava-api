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
    URL_GAME_FILES: "https://www.dropbox.com/scl/fi/cp5m6l31ypq9kal8fk23z/game.zip?rlkey=20vuxdm5jow5re0g54ne8bj5s&st=mhscpsp7&dl=1",
    URL_GAME_FILES_UPD: "https://www.dropbox.com/scl/fi/cp5m6l31ypq9kal8fk23z/game.zip?rlkey=20vuxdm5jow5re0g54ne8bj5s&st=mhscpsp7&dl=1",
    URL_VK: "https://vk.com/",
    URL_DISCORD: "https://discord.gg/",
    URL_YOUTUBE: "",
    URL_FORUM: "",
    URL_DONATE: "",
    URL_CLIENT: "http://45.130.141.87/launcher.apk",
    URL_CLIENTSAMPAPK: "http://45.130.141.87/client.apk"
  });
}
