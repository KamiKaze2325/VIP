const { MessageType } = require("@adiwajshing/baileys")

async function handler(m, { command }) {
    command = command.toLowerCase()
    this.anonymous = this.anonymous ? this.anonymous : {}
    switch (command) {
        case 'next':
        case 'leave': {
            let room = Object.values(this.anonymous).find(room => room.check(m.sender))
            if (!room) throw 'Kamu tidak sedang berada di anonymous chat'
            m.reply('Ok')
            let other = room.other(m.sender)
            if (other) this.sendMessage(other, 'Partner meninggalkan chat', MessageType.text)
            delete this.anonymous[room.id]
            var beb = 'Donasi nya tuan🦊'
const buttons = [

  {buttonId: 'y', buttonText: {displayText: '/Menu'}, type: 1},

  {buttonId: 'y', buttonText: {displayText: '/Donasi'}, type: 1},

  {buttonId: 'y', buttonText: {displayText: '/Owner'}, type: 1}
]
const buttonsMessage = {
    contentText: `${beb}`,
    footerText: '©RyuuZeyy',
    buttons: buttons,
    headerType: 1
}
const sendMsg = await conn.prepareMessageFromContent(m.chat,{buttonsMessage},{quoted: m})
await conn.relayWAMessage(sendMsg)
            if (command === 'leave') break
        }
        case 'start': {
            if (Object.values(this.anonymous).find(room => room.check(m.sender))) throw 'Kamu masih berada di dalam anonymous chat'
            let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
            if (room) {
                this.sendMessage(room.a, 'Menemukan partner!', MessageType.text)
                room.b = m.sender
                room.state = 'CHATTING'
                m.reply('Menemukan partner!')
            } else {
                let id = + new Date
                this.anonymous[id] = {
                    id,
                    a: m.sender,
                    b: '',
                    state: 'WAITING',
                    check: function (who = '') {
                        return [this.a, this.b].includes(who)
                    },
                    other: function (who = '') {
                        return who === this.a ? this.b : who === this.b ? this.a : ''
                    },
                }
                m.reply('Menunggu parter...')
            }
            break
        }
    }
}
handler.help = ['start', 'leave', 'next']
handler.tags = 'anonymous'

handler.command = ['start', 'leave', 'next']
handler.private = true

module.exports = handler
