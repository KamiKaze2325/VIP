
await conn.send2Button(m.chat, q.contextInfo == undefined ? text.trim() : 'ketik *.ephe* untuk matikan pesan sementara supaya tombol bisa digunakan', 'made with ❤️ by Kamikaze"', 'OWNER 👥', '.owner', 'DONASI💸', '.donasi', { quoted: m })
  
handler.help = ['tus']

//handler.tags = ['about']

handler.command = /^(tes)$/i

handler.owner = false

handler.mods = false

handler.premium = false

handler.group = false

handler.private = false

handler.admin = false

handler.botAdmin = false

handler.fail = null

module.exports = handler

