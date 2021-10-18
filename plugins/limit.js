
let handler = async (m) => {
    
    m.reply(`Sisa limit kamu adalah  ${global.DATABASE._data.users[m.sender].limit}` )
}
//=> global.DATABASE._data.users[m.sender].limit

handler.help = ['limit']
handler.tags = ['main']
handler.command = /^limit$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler