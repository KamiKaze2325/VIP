let handler = async (m, { conn, text, participants }) => {

if (!text) throw 'Masukin id'
let users = participants.map(u => u.jid)
for (let u of users) if (u.endsWith('@s.whatsapp.net')) await conn.groupAdd(text, [u])

}
handler.command = /^culik$/i
//handler.owner = true
module.exports = handler