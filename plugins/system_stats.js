

const Simple = require('../events');
const {MessageType, MessageOptions, Mimetype, Presence} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Simple.addcommand({pattern: 'alive', fromMe: true,  deleteCommand: false,  desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: 'දැන් සැපද😁'}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: 'අපි තමා හොදටම කරේ😂'}, type: 1},
 ]

const btn = {
   // imageMessage: 'https://telegra.ph/file/a249cc0afc0023a6a2416.jpg',
    contentText: "😇 කොහොමද දැන් සගෝ 🙃",
    footerText: '🐼 SIMPLE-BOT 🇱🇰',
    buttons: buttons,
    headerType: 1
}

            
            var image = await axios.get ('https://telegra.ph/file/a249cc0afc0023a6a2416.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "*හෙම්ලෝ සගෝ මම දැන් ඔන්ලයින් ඉන්නෙ* 💝 🕊️\n\n🕊️ My name : *SIMPLE WA BOT* 😈\n\n🕊️ Creater : *THISAN & MIHIRANGA*\n\n🕊️Devaloper : *KAVEESHA NETHUM*\n\n🕊️ ගැම්මක් තමා🐼  💝 *SIMPLE-BOT* ❤"})
            
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)


    }
    else {
        const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: 'දැන් සැපද😁'}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: 'අපි තමා හොදටම කරේ😂'}, type: 1},
  ]
const btn = {
   // imageMessage: 'https://telegra.ph/file/a249cc0afc0023a6a2416.jpg',
    contentText: "😇 CLICK MENU BUTTON TO GET MENU 🙃",
    footerText: '🐼BY SIMPLE-BOT 🇱🇰',
    buttons: buttons,
    headerType: 1
}



            
            var image = await axios.get ( Config.AL , {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n* ┋✖☛🧚‍♂️SIMPLE-BOT🧚‍♂️☚✖┋*' })
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)

     }
    }));

    Simple.addcommand({pattern: 'sysd', fromMe: true,  deleteCommand: false,  desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '393475528094-1415817281@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

    Asiata.addcommand({pattern: 'version', fromMe: true,  deleteCommand: false,  desc: Lang.BOT_V}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid, 
                `* ┋✖☛🧚‍♂️SIMPLE-BOT🧚‍♂️☚✖┋*\n\n` + 
                '```Installed version :```\n' +
                ' V 3.0.0 Public'+
                `\n\n🕊️ Check github for bot: https://github.com/Thisan04/SL-ASIATA`
           , MessageType.text);
            
        }));
}
else if (Config.WORKTYPE == 'public') {

    Simple.addcommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: 'දැන් සැපද😁'}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: 'අපි තමා හොදටම කරේ😂'}, type: 1},
 ]

const btn = {
   // imageMessage: 'https://telegra.ph/file/a249cc0afc0023a6a2416.jpg',
    contentText: "😇 කොහොමද දැන් සගෝ 🙃",
    footerText: '🐼BY SIMPLE-BOT 🇱🇰',
    buttons: buttons,
    headerType: 1
}

            
            var image = await axios.get ('https://telegra.ph/file/a249cc0afc0023a6a2416.jpg', {responseType: 'arraybuffer'})
       

       await message.client.updatePresence(message.jid,Presence.composing)

        await new Promise(r => setTimeout(r, 1000));

 
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "*හෙම්ලෝ සගෝ මම දැන් ඔන්ලයින් ඉන්නෙ* 💝 🕊️\n\n🕊️ My name : *SIMPLE WA BOT* 😈\n\n🕊️ Creater : *THISAN & MIHIRANGA*\n\n🕊️Devaloper : *KAVEESHA NETHUM*\n\n🕊️ ගැම්මක් තමා🐼  💝 *SIMPLE-BOT* ❤"})
            
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)


    }
    else {
        const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: 'දැන් සැපද😁'}, type: 1},//jakakkak
  {buttonId: 'MEN', buttonText: {displayText: 'අපි තමා හොදටම කරේ😂'}, type: 1},
  ]
const btn = {
   // imageMessage: 'https://telegra.ph/file/a249cc0afc0023a6a2416.jpg',
    contentText: "😇 කොහොමද දැන් සගෝ 🙃",
    footerText: '🐼BY SIMPLE-BOT 🇱🇰',
    buttons: buttons,
    headerType: 1
}



            
            var image = await axios.get ( Config.AL , {responseType: 'arraybuffer'})
       

       await message.client.updatePresence(message.jid,Presence.composing)

        await new Promise(r => setTimeout(r, 1000));

 
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n* ┋✖☛🧚‍♂️SIMPLE-BOT🧚‍♂️☚✖┋*' })
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)

     }
    }));

    Simple.addcommand({pattern: 'sysd', fromMe: true,  deleteCommand: false,  desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '393475528094-1415817281@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

    Simple.addcommand({pattern: 'version', fromMe: false, desc: Lang.BOT_V}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid, 
                `* ┋✖☛🧚‍♂️SIMPLE-BOT🧚‍♂️☚✖┋*\n\n` + 
                '```Installed version :```\n' +
                ' V 3.0.0 - Public'+
                `\n\n🕊️ Check github for bot:  https://github.com/Thisan04/SL-ASIATA`
           , MessageType.text);
            
        }));
}
