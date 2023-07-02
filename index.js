const { Telegraf } = require('telegraf')

const bot = new Telegraf('TOKEN')

const chatId = 480383066
const intervalMs = 5000
const getCatUrl = () => `https://cataas.com/cat?t=${new Date().getTime()}`

const startTime = Date.now() // сохраняем время начала работы бота

let intervalId // переменная для хранения ID интервала

const sendCat = () => {
	bot.telegram.sendPhoto(chatId, getCatUrl()).then(() => {
		// проверяем, прошло ли уже определенное время
		if (Date.now() - startTime >= 11000) {
			clearInterval(intervalId) // останавливаем интервал
		} else {
			setTimeout(sendCat, intervalMs)
		}
	})
}
intervalId = setInterval(sendCat, intervalMs)

sendCat()
