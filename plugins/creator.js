let handler = function (m) {
  // this.fakeReply(m.chat, 'This is my owner', '6282217590187@s.whatsapp.net', 'Owner')
  this.sendContact(m.chat, '6282217590187', 'KamiKaze', m)
  this.sendContact(m.chat, '0', ' ', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
