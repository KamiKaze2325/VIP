global.DeveloperMode = 'false' //true Or false
global.linkGC = ['https://chat.whatsapp.com/IVyCzWfhIReJlxml7mOmVE']
global.owner = ['6282217590187', '6281283815593']// Put your number here
//79309504566
global.mods = ['0000000000'] // Want some help?
global.prems = ['6282217590187'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': '879aaf8cc437fcb4',
    //879aaf8cc437fcb4
  //4cee6c0da1cab587
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais'
}

// Sticker WM
global.packname = 'KamiKaze'
//global.packname = 'SenyaBotz/VIPBOT'
global.author = ''

global.multiplier = 39 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
{{{}}}