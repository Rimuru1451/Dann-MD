const { ttp } = require('api-dylux')

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Masukkan Text!\n\nContoh: ${usedPrefix + command} dannteam`
  let dann = await ttp(text)
  await conn.sendFile(m.chat, dann.result, 'sticker.webp', '', m, false, { asSticker: true })
}
handler.command = handler.help = ['ttp']
handler.tags = ['sticker']
module.exports = handler