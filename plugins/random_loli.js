const lolis = require('lolis.life')
const loli = new lolis()
let handler  = async (m, { conn }) => {
let get_url = await loli.getAllSFWLolis()
let p = pickRandom(get_url.lolis) 
await conn.sendFile(m.chat, p, 'lolis.jpg', p, m)
}

handler.help = ['loli']
handler.tags = ['internet']
handler.command = /^(loli)$/i

module.exports = handler

function pickRandom(list) {
   return list[Math.floor(Math.random() * list.length)]
   }