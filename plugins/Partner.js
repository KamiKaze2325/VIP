let { MessageType } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, usedPrefix }) => {
 var beb = 'Hai tod, lu pasti gabut:v\nMau cari partner? klik start untuk memulai'
const buttons = [

  {buttonId: 'y', buttonText: {displayText: '/Start'}, type: 1},

  {buttonId: 'y', buttonText: {displayText: '/Next'}, type: 1},

  {buttonId: 'y', buttonText: {displayText: '/Leave'}, type: 1}
]
const buttonsMessage = {
    contentText: `${beb}`,
    footerText: '©RyuuZeyy',
    buttons: buttons,
    headerType: 1
}
const sendMsg = await conn.prepareMessageFromContent(m.chat,{buttonsMessage},{quoted: m})
await conn.relayWAMessage(sendMsg)
}

handler.help = ['partner']
handler.tags = ['about']
handler.command = /^(partner)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
module.exports = handler
