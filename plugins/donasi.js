let handler = async m => m.reply(`╭─「 Donasi • Pulsa 」
│ 
│ •  TELKOMSEL 
│ •  [0822-1759-0187]
│ 
╰────
╭─「 Donasi • DANA 」
│ 
│ •  [0822-1759-0187]
│
╰────
`.trim()) // Tambah sendiri kalo mau


handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler