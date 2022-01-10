const Simple = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Simple.addcommand({pattern: 'bot', fromMe: true,  deleteCommand: false }, (async (message, match) => {
            
            var image = await axios.get ('https://telegra.ph/file/5e6b637122b3353a7902b.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╹🐼 *𝚂𝚁𝙸 𝙻𝙰𝙽𝙺𝙰 𝙱𝙴𝚂𝚃 𝚆.𝙰 𝙱𝙾𝚃* 🐼╹ 

⋱ ⋮ ⋰
⋯ ◯ ⋯ ︵ 　　　　　　^v^
 ︵︵( ░░ )︵.︵.︵
(°░░░░░░ °) ░░░° )
°°︶°¯°︶°°︶°︶°°　^v^　　^v^
╔┓┏╦━━╦┓╔┓╔━━╗╔╗
║┗┛║┗━╣┃║┃║╯╰║║║
║┏┓║┏━╣┗╣┗╣╰╯║╠╣
╚┛┗╩━━╩━╩━╩━━╝╚╝
♪♫•*¨*•.¸¸❤¸¸.•*¨*•♫♪



🕊️ *Developer - Kaveesha Nethum*

🕊️ *Language - NODE JS*

🕊️ *Sponser Team - 2022AsiataTech*




    👊 *ᴅᴇᴘʟᴏʏ ɴᴏᴡ | ǫʀ ɴᴏᴡ* 👊



   🌠 *ꜰᴏʀ 24/7 ʜᴇʟᴘ ᴍꜱɢ ᴍᴇ* 🌠`})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Simple.addcommand({pattern: 'bot', fromMe: true,  deleteCommand: false }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/5e6b637122b3353a7902b.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╹🐼 *𝚂𝚁𝙸 𝙻𝙰𝙽𝙺𝙰 𝙱𝙴𝚂𝚃 𝚆.𝙰 𝙱𝙾𝚃* 🐼╹ 

⋱ ⋮ ⋰
⋯ ◯ ⋯ ︵ 　　　　　　^v^
¸︵︵( ░░ )︵.︵.︵
(°░░░░░░ °) ░░░° )
°°︶°¯°︶°°︶°︶°°　^v^　　^v^
╔┓┏╦━━╦┓╔┓╔━━╗╔╗
║┗┛║┗━╣┃║┃║╯╰║║║
║┏┓║┏━╣┗╣┗╣╰╯║╠╣
╚┛┗╩━━╩━╩━╩━━╝╚╝
♪♫•*¨*•.¸¸❤¸¸.•*¨*•♫♪



🕊️ *Developer - Kaveesha Nethum*

🕊️ *Language - NODE JS*

🕊️ *Sponser Team - 2022AsiataTech*


 
    👊 *ᴅᴇᴘʟᴏʏ ɴᴏᴡ | ǫʀ ɴᴏᴡ* 👊



   🌠 *ꜰᴏʀ 24/7 ʜᴇʟᴘ ᴍꜱɢ ᴍᴇ* 🌠` })

    }));
  
  Simple.addcommand({pattern: 'bot', fromMe: false,  deleteCommand: false }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/5e6b637122b3353a7902b.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╹🐼 *𝚂𝚁𝙸 𝙻𝙰𝙽𝙺𝙰 𝙱𝙴𝚂𝚃 𝚆.𝙰 𝙱𝙾𝚃* 🐼╹ 

⋱ ⋮ ⋰
⋯ ◯ ⋯ ︵ 　　　　　　^v^
¸︵︵( ░░ )︵.︵.︵
(°░░░░░░ °) ░░░° )
°°︶°¯°︶°°︶°︶°°　^v^　　^v^
╔┓┏╦━━╦┓╔┓╔━━╗╔╗
║┗┛║┗━╣┃║┃║╯╰║║║
║┏┓║┏━╣┗╣┗╣╰╯║╠╣
╚┛┗╩━━╩━╩━╩━━╝╚╝
♪♫•*¨*•.¸¸❤¸¸.•*¨*•♫♪



🕊️ *Developer - Kaveesha Nethum*

🕊️ *Language - NODE JS*

🕊️ *Sponser Team - 2022AsiataTech*



    👊 *ᴅᴇᴘʟᴏʏ ɴᴏᴡ | ǫʀ ɴᴏᴡ* 👊



   🌠 *ꜰᴏʀ 24/7 ʜᴇʟᴘ ᴍꜱɢ ᴍᴇ* 🌠 `  ,quoted: message.data})

    }));
}
