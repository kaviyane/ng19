const Asiata = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');


if (Config.WORKTYPE == 'private') {

    Asiata.addcommand({pattern: 'grp', fromMe: true,  deleteCommand: true }, (async (message, match) => {
            
            var image = await axios.get ('https://telegra.ph/file/5e6b637122b3353a7902b.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      πβ GROUP LIST βπ\n\nποΈ GROUP 01 ποΈ\n\n π§ββοΈ ' + Config.GROUPN1 + ' π§ββοΈ\nβ’ ' + Config.GROUPL1 + '\n\nποΈ GROUP 02 ποΈ\n\nπ§ββοΈ ' + Config.GROUPN2 + 'π§ββοΈ\nβ’ ' + Config.GROUPL2 + '\n\nποΈ GROUP 03 ποΈ\n\nπ§ββοΈ ' + Config.GROUPN3 + ' π§ββοΈ\nβ’ ' + Config.GROUPL3 + '\n\nποΈ GROUP 04 ποΈ\n\nπ§ββοΈ ' + Config.GROUPN4 + ' π§ββοΈ\nβ’ ' + Config.GROUPL4 + '\n\n\n        βββπ§ββοΈASIATAπ§ββοΈβββ   '})

    }));
  
}
else if (Config.WORKTYPE == 'public') {

    Asiata.addcommand({pattern: 'grp', fromMe: true,  deleteCommand: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/5e6b637122b3353a7902b.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      πβ GROUP LIST βπ\n\nποΈ GROUP 01 ποΈ\n\n π§ββοΈ ' + Config.GROUPN1 + ' π§ββοΈ\nβ’ ' + Config.GROUPL1 + '\n\nποΈ GROUP 02 ποΈ\n\nπ§ββοΈ ' + Config.GROUPN2 + 'π§ββοΈ\nβ’ ' + Config.GROUPL2 + '\n\nποΈ GROUP 03 ποΈ\n\nπ§ββοΈ ' + Config.GROUPN3 + ' π§ββοΈ\nβ’ ' + Config.GROUPL3 + '\n\nποΈ GROUP 04 ποΈ\n\nπ§ββοΈ ' + Config.GROUPN4 + ' π§ββοΈ\nβ’ ' + Config.GROUPL4 + '\n\n\n        βββπ§ββοΈASIATAπ§ββοΈβββ   '})

    }));
  
  Asiata.addcommand({pattern: 'grp', fromMe: false,  deleteCommand: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/5e6b637122b3353a7902b.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      πβ GROUP LIST βπ\n\nποΈ GROUP 01 ποΈ\n\n π§ββοΈ ' + Config.GROUPN1 + ' π§ββοΈ\nβ’ ' + Config.GROUPL1 + '\n\nποΈ GROUP 02 ποΈ\n\nπ§ββοΈ ' + Config.GROUPN2 + 'π§ββοΈ\nβ’ ' + Config.GROUPL2 + '\n\nποΈ GROUP 03 ποΈ\n\nπ§ββοΈ ' + Config.GROUPN3 + ' π§ββοΈ\nβ’ ' + Config.GROUPL3 + '\n\nποΈ GROUP 04 ποΈ\n\nπ§ββοΈ ' + Config.GROUPN4 + ' π§ββοΈ\nβ’ ' + Config.GROUPL4 + '\n\n\n        βββπ§ββοΈASIATAπ§ββοΈβββ   ' ,quoted: message.data})

    }));
 
}
