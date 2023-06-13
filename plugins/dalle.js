let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `TMasukkan Text!\n\nContoh: ${usedPrefix + command} pisang`
	let url = await fetch(`https://api.lolhuman.xyz/api/dall-e?apikey=gunturganteng&text=${text}`)
	conn.sendFile(m.chat, url, 'dalle.jpg', wm, m)
}
handler.command = /^(aidraw)$/i
handler.tags = ['fun', 'internet', 'tools']
handler.help = ['aidraw']
handler.limit = true
handler.premium = false
module.exports = handler