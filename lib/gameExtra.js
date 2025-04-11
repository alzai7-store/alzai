
async function caklontong(m, sock, text, command, db) {
    const question = "Aku punya mata tapi tidak bisa melihat, apakah aku?"
    const answer = "jarum"
    const user = db.users[m.sender]

    if (!user) return m.reply("User tidak ditemukan.")
    if (user.limit < 1) return m.reply("Limit kamu habis.")

    m.reply(`Pertanyaan: $Aku punya mata tapi tidak bisa melihat, apakah aku?\nJawab dengan .jawab <jawaban>`)
    global.tebakGame = global.tebakGame || {}
    global.tebakGame[m.sender] = { answer: "jarum", type: "caklontong" }
}

async function tebakgambar(m, sock, text, command, db) {
    const question = "Gambar yang menunjukkan mata + hari, jadi apa?"
    const answer = "matahari"
    const user = db.users[m.sender]

    if (!user) return m.reply("User tidak ditemukan.")
    if (user.limit < 1) return m.reply("Limit kamu habis.")

    m.reply(`Pertanyaan: $Gambar yang menunjukkan mata + hari, jadi apa?\nJawab dengan .jawab <jawaban>`)
    global.tebakGame = global.tebakGame || {}
    global.tebakGame[m.sender] = { answer: "matahari", type: "tebakgambar" }
}

async function tebaklagu(m, sock, text, command, db) {
    const question = "Lagu dengan lirik 'takkan ada cinta yang lain...'"
    const answer = "takkan ada"
    const user = db.users[m.sender]

    if (!user) return m.reply("User tidak ditemukan.")
    if (user.limit < 1) return m.reply("Limit kamu habis.")

    m.reply(`Pertanyaan: $Lagu dengan lirik 'takkan ada cinta yang lain...'\nJawab dengan .jawab <jawaban>`)
    global.tebakGame = global.tebakGame || {}
    global.tebakGame[m.sender] = { answer: "takkan ada", type: "tebaklagu" }
}

async function tebakfilm(m, sock, text, command, db) {
    const question = "Film tentang makhluk biru bertarung di planet Pandora"
    const answer = "avatar"
    const user = db.users[m.sender]

    if (!user) return m.reply("User tidak ditemukan.")
    if (user.limit < 1) return m.reply("Limit kamu habis.")

    m.reply(`Pertanyaan: $Film tentang makhluk biru bertarung di planet Pandora\nJawab dengan .jawab <jawaban>`)
    global.tebakGame = global.tebakGame || {}
    global.tebakGame[m.sender] = { answer: "avatar", type: "tebakfilm" }
}

async function tebaklirik(m, sock, text, command, db) {
    const question = "Lirik: 'Kau begitu sempurna...'"
    const answer = "sempurna"
    const user = db.users[m.sender]

    if (!user) return m.reply("User tidak ditemukan.")
    if (user.limit < 1) return m.reply("Limit kamu habis.")

    m.reply(`Pertanyaan: $Lirik: 'Kau begitu sempurna...'\nJawab dengan .jawab <jawaban>`)
    global.tebakGame = global.tebakGame || {}
    global.tebakGame[m.sender] = { answer: "sempurna", type: "tebaklirik" }
}

async function siapakahaku(m, sock, text, command, db) {
    const question = "Aku punya ekor tapi tidak bisa berjalan. Siapakah aku?"
    const answer = "layang-layang"
    const user = db.users[m.sender]

    if (!user) return m.reply("User tidak ditemukan.")
    if (user.limit < 1) return m.reply("Limit kamu habis.")

    m.reply(`Pertanyaan: $Aku punya ekor tapi tidak bisa berjalan. Siapakah aku?\nJawab dengan .jawab <jawaban>`)
    global.tebakGame = global.tebakGame || {}
    global.tebakGame[m.sender] = { answer: "layang-layang", type: "siapakahaku" }
}

async function susunkata(m, sock, text, command, db) {
    const question = "Ubah acak: 'lnaapet'"
    const answer = "penatal"
    const user = db.users[m.sender]

    if (!user) return m.reply("User tidak ditemukan.")
    if (user.limit < 1) return m.reply("Limit kamu habis.")

    m.reply(`Pertanyaan: $Ubah acak: 'lnaapet'\nJawab dengan .jawab <jawaban>`)
    global.tebakGame = global.tebakGame || {}
    global.tebakGame[m.sender] = { answer: "penatal", type: "susunkata" }
}

async function asahotak(m, sock, text, command, db) {
    const question = "5 + 2 x 3 = ?"
    const answer = "11"
    const user = db.users[m.sender]

    if (!user) return m.reply("User tidak ditemukan.")
    if (user.limit < 1) return m.reply("Limit kamu habis.")

    m.reply(`Pertanyaan: $5 + 2 x 3 = ?\nJawab dengan .jawab <jawaban>`)
    global.tebakGame = global.tebakGame || {}
    global.tebakGame[m.sender] = { answer: "11", type: "asahotak" }
}

async function katabijak(m, sock, text, command, db) {
    const question = "Kata bijak: 'Kegagalan adalah ...'"
    const answer = "kesuksesan yang tertunda"
    const user = db.users[m.sender]

    if (!user) return m.reply("User tidak ditemukan.")
    if (user.limit < 1) return m.reply("Limit kamu habis.")

    m.reply(`Pertanyaan: $Kata bijak: 'Kegagalan adalah ...'\nJawab dengan .jawab <jawaban>`)
    global.tebakGame = global.tebakGame || {}
    global.tebakGame[m.sender] = { answer: "kesuksesan yang tertunda", type: "katabijak" }
}

async function jodohin(m, sock, text, command, db) {
    const question = "Cocokkan: kucing - ?"
    const answer = "ikan"
    const user = db.users[m.sender]

    if (!user) return m.reply("User tidak ditemukan.")
    if (user.limit < 1) return m.reply("Limit kamu habis.")

    m.reply(`Pertanyaan: $Cocokkan: kucing - ?\nJawab dengan .jawab <jawaban>`)
    global.tebakGame = global.tebakGame || {}
    global.tebakGame[m.sender] = { answer: "ikan", type: "jodohin" }
}

async function tebakkimia(m, sock, text, command, db) {
    const question = "Simbol kimia dari emas?"
    const answer = "au"
    const user = db.users[m.sender]

    if (!user) return m.reply("User tidak ditemukan.")
    if (user.limit < 1) return m.reply("Limit kamu habis.")

    m.reply(`Pertanyaan: $Simbol kimia dari emas?\nJawab dengan .jawab <jawaban>`)
    global.tebakGame = global.tebakGame || {}
    global.tebakGame[m.sender] = { answer: "au", type: "tebakkimia" }
}

async function tebakhewan(m, sock, text, command, db) {
    const question = "Aku besar, punya belalai. Aku?"
    const answer = "gajah"
    const user = db.users[m.sender]

    if (!user) return m.reply("User tidak ditemukan.")
    if (user.limit < 1) return m.reply("Limit kamu habis.")

    m.reply(`Pertanyaan: $Aku besar, punya belalai. Aku?\nJawab dengan .jawab <jawaban>`)
    global.tebakGame = global.tebakGame || {}
    global.tebakGame[m.sender] = { answer: "gajah", type: "tebakhewan" }
}

async function tebaknegara(m, sock, text, command, db) {
    const question = "Negara dengan menara Eiffel"
    const answer = "prancis"
    const user = db.users[m.sender]

    if (!user) return m.reply("User tidak ditemukan.")
    if (user.limit < 1) return m.reply("Limit kamu habis.")

    m.reply(`Pertanyaan: $Negara dengan menara Eiffel\nJawab dengan .jawab <jawaban>`)
    global.tebakGame = global.tebakGame || {}
    global.tebakGame[m.sender] = { answer: "prancis", type: "tebaknegara" }
}

async function truthdare(m, sock, text, command, db) {
    const question = "Truth atau Dare?"
    const answer = "truth"
    const user = db.users[m.sender]

    if (!user) return m.reply("User tidak ditemukan.")
    if (user.limit < 1) return m.reply("Limit kamu habis.")

    m.reply(`Pertanyaan: $Truth atau Dare?\nJawab dengan .jawab <jawaban>`)
    global.tebakGame = global.tebakGame || {}
    global.tebakGame[m.sender] = { answer: "truth", type: "truthdare" }
}

async function riddles(m, sock, text, command, db) {
    const question = "Apa yang naik tapi tidak pernah turun?"
    const answer = "umur"
    const user = db.users[m.sender]

    if (!user) return m.reply("User tidak ditemukan.")
    if (user.limit < 1) return m.reply("Limit kamu habis.")

    m.reply(`Pertanyaan: $Apa yang naik tapi tidak pernah turun?\nJawab dengan .jawab <jawaban>`)
    global.tebakGame = global.tebakGame || {}
    global.tebakGame[m.sender] = { answer: "umur", type: "riddles" }
}

async function kalkulatorlogika(m, sock, text, command, db) {
    const question = "Jika A = 1, B = 2, maka Z = ?"
    const answer = "26"
    const user = db.users[m.sender]

    if (!user) return m.reply("User tidak ditemukan.")
    if (user.limit < 1) return m.reply("Limit kamu habis.")

    m.reply(`Pertanyaan: $Jika A = 1, B = 2, maka Z = ?\nJawab dengan .jawab <jawaban>`)
    global.tebakGame = global.tebakGame || {}
    global.tebakGame[m.sender] = { answer: "26", type: "kalkulatorlogika" }
}

async function findnumber(m, sock, text, command, db) {
    const question = "Temukan angka tersembunyi di: 12a34b56c?"
    const answer = "123456"
    const user = db.users[m.sender]

    if (!user) return m.reply("User tidak ditemukan.")
    if (user.limit < 1) return m.reply("Limit kamu habis.")

    m.reply(`Pertanyaan: $Temukan angka tersembunyi di: 12a34b56c?\nJawab dengan .jawab <jawaban>`)
    global.tebakGame = global.tebakGame || {}
    global.tebakGame[m.sender] = { answer: "123456", type: "findnumber" }
}

async function suitv2(m, sock, text, command, db) {
    const question = "Pilih: batu, gunting, kertas"
    const answer = "batu"
    const user = db.users[m.sender]

    if (!user) return m.reply("User tidak ditemukan.")
    if (user.limit < 1) return m.reply("Limit kamu habis.")

    m.reply(`Pertanyaan: $Pilih: batu, gunting, kertas\nJawab dengan .jawab <jawaban>`)
    global.tebakGame = global.tebakGame || {}
    global.tebakGame[m.sender] = { answer: "batu", type: "suitv2" }
}

async function tebakkota(m, sock, text, command, db) {
    const question = "Kota dengan ikon Tugu Muda?"
    const answer = "semarang"
    const user = db.users[m.sender]

    if (!user) return m.reply("User tidak ditemukan.")
    if (user.limit < 1) return m.reply("Limit kamu habis.")

    m.reply(`Pertanyaan: $Kota dengan ikon Tugu Muda?\nJawab dengan .jawab <jawaban>`)
    global.tebakGame = global.tebakGame || {}
    global.tebakGame[m.sender] = { answer: "semarang", type: "tebakkota" }
}

async function tebaklogo(m, sock, text, command, db) {
    const question = "Logo apel tergigit milik siapa?"
    const answer = "apple"
    const user = db.users[m.sender]

    if (!user) return m.reply("User tidak ditemukan.")
    if (user.limit < 1) return m.reply("Limit kamu habis.")

    m.reply(`Pertanyaan: $Logo apel tergigit milik siapa?\nJawab dengan .jawab <jawaban>`)
    global.tebakGame = global.tebakGame || {}
    global.tebakGame[m.sender] = { answer: "apple", type: "tebaklogo" }
}

module.exports = {
    caklontong,
    tebakgambar,
    tebaklagu,
    tebakfilm,
    tebaklirik,
    siapakahaku,
    susunkata,
    asahotak,
    katabijak,
    jodohin,
    tebakkimia,
    tebakhewan,
    tebaknegara,
    truthdare,
    riddles,
    kalkulatorlogika,
    findnumber,
    suitv2,
    tebakkota,
    tebaklogo,
}
