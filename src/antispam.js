const usedCommandRecently = new Set()

const isFiltered = (from) => !!usedCommandRecently.has(from)

const addFilter = (from) => {
	usedCommandRecently.add(from)
	setTimeout(() => usedCommandRecently.delete(from), 5000)
}

module.exports = {
	antiSpam: {
		isFiltered,
		addFilter
	}
}



function detectLink(text) {
    const regex = /(https?:\/\/)?(chat\.whatsapp\.com|wa\.me|bit\.ly|t\.me|discord\.gg|linktr\.ee)\/[a-zA-Z0-9]+/gi
    return regex.test(text)
}

function detectVirtex(text) {
    // Deteksi teks dengan karakter aneh atau panjang banget (virtex)
    return text.length > 3000 || /[‮⁦⁧⁨⁩]/.test(text)
}

function isSpamMessage(user) {
    if (!user || typeof user.lastMessage !== 'number') return false
    const now = Date.now()
    const delta = now - user.lastMessage
    user.lastMessage = now
    return delta < 2000 // jika kirim pesan <2 detik sejak pesan terakhir
}


module.exports.detectLink = detectLink
module.exports.detectVirtex = detectVirtex
module.exports.isSpamMessage = isSpamMessage
