let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(image + 'donasi')).buffer(), `
╭──『 _*Donasi*_ 』──⬣
│⬡ *_Dana/Gopay_* :
│⬡ *088233832771*
│
│⬡ *_Pulsa_* :
│⬡ *089612698583*
│⬡ *088233832771*
╰─────────⬣
╭─「 *NOTE* 」
│ > Owner? wa.me/6288233832771
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰──────────⬣
`.trim(), footer, 'Owner', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
