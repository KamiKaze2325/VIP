 let fs = require('fs')
 let handler = async (m, { itsu }) => {
let { performance } = require('perf_hooks')
let { MessageType } = require('@adiwajshing/baileys')
const anu = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 3,
                            itemCoun : 3,
                            surface : 3,
                            message: 'Bot Aktif Selama :',
                            orderTitle: 'B',
                            thumbnail: fs.readFileSync('./ppbot.png'), 
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `-[Runtime]-\n\nBot Telah Aktif Selama :\n${pad(hours)} Jam, ${pad(minutes)} Menit, ${pad(seconds)} Detik`
}
					runtime = process.uptime()
					teks = `${kyun(runtime)}`
					var itsme = `0@s.whatsapp.net`
					var split = `A`
					const rtimebro = {
					contextInfo: {
					participant: itsme,
					quotedMessage: {
					extendedTextMessage: {
					text: split,
									}
								}
							}
						}
m.reply(teks)
//await conn.sendMessage(m.chat, `${teks}`,
//MessageType.text, {quoted: anu, contextInfo:{"forwardingScore":999, "isForwarded": true}})
}


handler.help = ['runtime']
handler.tags = ['main']
handler.command = /^runtime$/i
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