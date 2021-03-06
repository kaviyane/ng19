

const Asiata = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const Config = require('../config');
const got = require('got');

//Movie-scraper

if (Config.WORKTYPE == 'private') {
	Asiata.addcommand({pattern: 'movie', fromMe: false }, (async (message, match) => { 
		var image = await axios.get ('https://telegra.ph/file/72caf817d141c24cab7cb.jpg', {responseType: 'arraybuffer'}) 
		await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "  âââð§ââï¸ASIATA MENUð§ââï¸âââ "}) 
	}));
	Asiata.addcommand({ pattern: 'movie ?(.*)', fromMe: true,  deleteCommand: false,  desc: "Movies à·à¶½ à·à·à·à·à¶­à¶» à¶½à¶¶à·à¶¯à·à¶¸." }, (async (message, match) => {
		if (match[1] === '') return await message.client.sendMessage(message.jid, '*à¶±à¶¸à¶à· à¶½à¶¶à·à¶¯à·à¶±à·à¶±.*', MessageType.text, { quoted: message.data });
		let url = `http://www.omdbapi.com/?apikey=742b2d09&t=${match[1]}&plot=full`
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (json.Response != 'True') return await message.client.sendMessage(message.jid, '*Not found.*', MessageType.text, { quoted: message.data });
		let msg = '```';
		msg += 'ðï¸ Title       ' + 'â '+json.Title + '\n\n';
		msg += 'ðï¸ Year        ' + 'â '+json.Year + '\n\n';
		msg += 'ðï¸ Rated       ' + 'â '+json.Rated + '\n\n';
		msg += 'ðï¸ Released    ' + 'â '+json.Released + '\n\n';
		msg += 'ðï¸ Runtime     ' + 'â '+json.Runtime + '\n\n';
		msg += 'ðï¸ Genre       ' + 'â '+json.Genre + '\n\n';
		msg += 'ðï¸ Director    ' + 'â '+json.Director + '\n\n';
		msg += 'ðï¸ Writer      ' + 'â '+json.Writer + '\n\n';
		msg += 'ðï¸ Actors      ' + 'â '+json.Actors + '\n\n';
		msg += 'ðï¸ Plot        ' + 'â '+json.Plot + '\n\n';
		msg += 'ðï¸ Language    ' + 'â '+json.Language + '\n\n';
		msg += 'ðï¸ Country     ' + 'â '+json.Country + '\n\n';
		msg += 'ðï¸ Awards      ' + 'â '+json.Awards + '\n\n';
		msg += 'ðï¸ BoxOffice   ' + 'â '+json.BoxOffice + '\n\n';
		msg += 'ðï¸ Production  ' + 'â '+json.Production + '\n\n';
		msg += 'ðï¸ imdbRating  ' + 'â '+json.imdbRating + '\n\n';
		msg += 'ðï¸ imdbVotes   ' + 'â '+json.imdbVotes + '```\n\n âââð§ââï¸ASIATAð§ââï¸âââ';
		await message.client.sendMessage(message.jid, msg, MessageType.text, { quoted: message.data });
	}));
}

else if (Config.WORKTYPE == 'public') {
	Asiata.addcommand({pattern: 'movie', fromMe: false }, (async (message, match) => { 
		var image = await axios.get ('https://telegra.ph/file/72caf817d141c24cab7cb.jpg', {responseType: 'arraybuffer'}) 
		await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "  âââð§ââï¸ASIATA MENUð§ââï¸âââ "}) 
	}));
	Asiata.addcommand({ pattern: 'movie ?(.*)', fromMe: false, desc: "Movies à·à¶½ à·à·à·à·à¶­à¶» à¶½à¶¶à·à¶¯à·à¶¸." }, (async (message, match) => {
		if (match[1] === '') return await message.client.sendMessage(message.jid, '*à¶±à¶¸à¶à· à¶½à¶¶à·à¶¯à·à¶±à·à¶±.*', MessageType.text, { quoted: message.data });
		let url = `http://www.omdbapi.com/?apikey=742b2d09&t=${match[1]}&plot=full`
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (json.Response != 'True') return await message.client.sendMessage(message.jid, '*Not found.*', MessageType.text, { quoted: message.data });
		let msg = '```';
		msg += 'ðï¸ Title       ' + 'â '+ json.Title + '\n\n';
		msg += 'ðï¸ Year        ' + 'â '+ json.Year + '\n\n';
		msg += 'ðï¸ Rated       ' + 'â '+ json.Rated + '\n\n';
		msg += 'ðï¸ Released    ' + 'â '+ json.Released + '\n\n';
		msg += 'ðï¸ Runtime     ' + 'â '+json.Runtime + '\n\n';
		msg += 'ðï¸ Genre       ' + 'â '+json.Genre + '\n\n';
		msg += 'ðï¸ Director    ' + 'â '+json.Director + '\n\n';
		msg += 'ðï¸ Writer      ' + 'â '+json.Writer + '\n\n';
		msg += 'ðï¸ Actors      ' + 'â '+json.Actors + '\n\n';
		msg += 'ðï¸ Plot        ' + 'â '+json.Plot + '\n\n';
		msg += 'ðï¸ Language    ' + 'â '+json.Language + '\n\n';
		msg += 'ðï¸ Country     ' + 'â '+json.Country + '\n\n';
		msg += 'ðï¸ Awards      ' + 'â '+json.Awards + '\n\n';
		msg += 'ðï¸ BoxOffice   ' + 'â '+json.BoxOffice + '\n\n';
		msg += 'ðï¸ Production  ' + 'â '+json.Production + '\n\n';
		msg += 'ðï¸ imdbRating  ' + 'â '+json.imdbRating + '\n\n';
		msg += 'ðï¸ imdbVotes   ' + 'â '+json.imdbVotes + '```\n\n âââð§ââï¸ASIATAð§ââï¸âââ';
		await message.client.sendMessage(message.jid, msg, MessageType.text, { quoted: message.data });
	}));
	
	Asiata.addcommand({ pattern: 'movie ?(.*)', fromMe: true,  deleteCommand: false,  desc: "Movies à·à¶½ à·à·à·à·à¶­à¶» à¶½à¶¶à·à¶¯à·à¶¸." }, (async (message, match) => {
		if (match[1] === '') return await message.client.sendMessage(message.jid, '*à¶±à¶¸à¶à· à¶½à¶¶à·à¶¯à·à¶±à·à¶±.*', MessageType.text, { quoted: message.data });
		let url = `http://www.omdbapi.com/?apikey=742b2d09&t=${match[1]}&plot=full`
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (json.Response != 'True') return await message.client.sendMessage(message.jid, '*Not found.*', MessageType.text, { quoted: message.data });
		let msg = '```';
		msg += 'ðï¸ Title       ' + 'â '+json.Title + '\n\n';
		msg += 'ðï¸ Year        ' + 'â '+json.Year + '\n\n';
		msg += 'ðï¸ Rated       ' + 'â '+json.Rated + '\n\n';
		msg += 'ðï¸ Released    ' + 'â '+json.Released + '\n\n';
		msg += 'ðï¸ Runtime     ' + 'â '+json.Runtime + '\n\n';
		msg += 'ðï¸ Genre       ' + 'â '+json.Genre + '\n\n';
		msg += 'ðï¸ Director    ' + 'â '+json.Director + '\n\n';
		msg += 'ðï¸ Writer      ' + 'â '+json.Writer + '\n\n';
		msg += 'ðï¸ Actors      ' + 'â '+json.Actors + '\n\n';
		msg += 'ðï¸ Plot        ' + 'â '+json.Plot + '\n\n';
		msg += 'ðï¸ Language    ' + 'â '+json.Language + '\n\n';
		msg += 'ðï¸ Country     ' + 'â '+json.Country + '\n\n';
		msg += 'ðï¸ Awards      ' + 'â '+json.Awards + '\n\n';
		msg += 'ðï¸ BoxOffice   ' + 'â '+json.BoxOffice + '\n\n';
		msg += 'ðï¸ Production  ' + 'â '+json.Production + '\n\n';
		msg += 'ðï¸ imdbRating  ' + 'â '+json.imdbRating + '\n\n';
		msg += 'ðï¸ imdbVotes   ' + 'â '+json.imdbVotes + '```\n\n âââð§ââï¸ASIATAð§ââï¸âââ';
		await message.client.sendMessage(message.jid, msg, MessageType.text, { quoted: message.data });
	}));
}
