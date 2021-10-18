const Nekos = require('nekos.life')
const neko = new Nekos()

let handler  = async (m, { conn }) => {
try {
await conn.sendFile(m.chat, (await neko.sfw.kemonomimi()).url, 'neko.jpg', null, m)
} catch (e) {
err = String(e) 
console.log(err) 
}
}

handler.help = ['neko']
handler.tags = ['internet']
handler.command = /^(neko)$/i

module.exports = handler