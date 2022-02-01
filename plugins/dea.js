const Simple = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Simple.addcommand({pattern: 'dea', fromMe: true, deleteCommand: false }, (async (message, match) => {

            var img = await axios.get ('https://telegra.ph/file/5e6b637122b3353a7902b.jpg', {responseType: `arraybuffer`})

          await message.client.sendMessage (message.jid, Buffer.from (img.data), MessageType.img, {mimetype: Mimetype.png, caption: `╹🐼 *𝚂𝚁𝙸 𝙻𝙰𝙽𝙺𝙰 𝙱𝙴𝚂𝚃 𝚆.𝙰 𝙱𝙾𝚃* 🐼╹

           ⋱ ⋮ ⋰
          ⋯ ◯ ⋯ ︵ 　　　　　　^v^
             ︵︵( ░░ )︵.︵.︵
           (°░░░░░░ °) ░░░° )
           °°︶°¯°︶°°︶°︶°°　^v^　　^v^
           ♪♫•*¨*•.¸¸❤¸¸.•*¨*•♫♪
          
           █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
           █-----╦─╦╔╗╦─╔╗╔╗╔╦╗╔╗-----█
           █-----║║║╠─║─║─║║║║║╠─-----█
           █-----╚╩╝╚╝╚╝╚╝╚╝╩─╩╚╝-----█
           █▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█
          
           🌀 *BOT Name - SIMPLE-BOT*
          
           🌀 *Developer - Kaveesha Nethum*
          
           🌀 *Company Name - SIMPLE Developers*
          
              
           🔆 *Command details* 🔆
          
           ●▬▬▬▬๑۩۩๑▬▬▬▬▬●
          
           💠 *සිංදු ගන්න විදිහ - .song කියල ගහල සිදුවේ  නම ගහන්න...*
              
           🔆 ( *එහෙම ගහල සිංදු ආවෙ නැත්නම් බොට්ගෙ Error එකක්... ඒක හදනකම් ඉන්න වෙනවා.* )
           🔆 *බොට්ගෙන් මේවගේ ඒවනම් ගන්න එපා 👉 ( *.song Dj සිංදු* )
          
           ❌ *ඒවගේ ලොකු දේවල් ඉල්ලපුවාම බොට් වැඩ නැතුව යනව..* ❌
          
           ●▬▬▬▬๑۩۩๑▬▬▬▬▬●
          
           💠 *වඩියෝ Download කරගන්න විදිහ - .video Download කරගන්න ඕන වීඩියෝ එකේ ලින්ක් එක*
          
           🔆*හැබැයි ඔහොම Download කරගන්න පුළුවන් වෙන්නෙ Youtube Video පමණයි.* 🔆
           📢 *මට කිසිවක් සොයාගත නොහැකි විය...* *මේ විදිහට Reply එකක් ආවොත් ඒ වීඩියෝ Download කරන්න බැරි ඒව...*
          
           ╚═══❖•ೋ° °ೋ•❖═══╝`})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Simple.addcommand({pattern: 'dea', fromMe: true,  deleteCommand: false }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/5e6b637122b3353a7902b.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╹🐼 *𝚂𝚁𝙸 𝙻𝙰𝙽𝙺𝙰 𝙱𝙴𝚂𝚃 𝚆.𝙰 𝙱𝙾𝚃* 🐼╹
        
        
 ⋱ ⋮ ⋰
⋯ ◯ ⋯ ︵ 　　　　　　^v^
   ︵︵( ░░ )︵.︵.︵
 (°░░░░░░ °) ░░░° )
 °°︶°¯°︶°°︶°︶°°　^v^　　^v^
 ♪♫•*¨*•.¸¸❤¸¸.•*¨*•♫♪

 █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
 █-----╦─╦╔╗╦─╔╗╔╗╔╦╗╔╗-----█
 █-----║║║╠─║─║─║║║║║╠─-----█
 █-----╚╩╝╚╝╚╝╚╝╚╝╩─╩╚╝-----█
 █▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█

 🌀 *BOT Name - SIMPLE-BOT*

 🌀 *Developer - Kaveesha Nethum*

 🌀 *Company Name - SIMPLE Developers*

    
 🔆 *Command details* 🔆

 ●▬▬▬▬๑۩۩๑▬▬▬▬▬●

 💠 *සිංදු ගන්න විදිහ - .song කියල ගහල සිදුවේ  නම ගහන්න...*
    
 🔆 ( *එහෙම ගහල සිංදු ආවෙ නැත්නම් බොට්ගෙ Error එකක්... ඒක හදනකම් ඉන්න වෙනවා.* )
 🔆 *බොට්ගෙන් මේවගේ ඒවනම් ගන්න එපා 👉 ( *.song Dj සිංදු* )

 ❌ *ඒවගේ ලොකු දේවල් ඉල්ලපුවාම බොට් වැඩ නැතුව යනව..* ❌

 ●▬▬▬▬๑۩۩๑▬▬▬▬▬●

 💠 *වඩියෝ Download කරගන්න විදිහ - .video Download කරගන්න ඕන වීඩියෝ එකේ ලින්ක් එක*

 🔆*හැබැයි ඔහොම Download කරගන්න පුළුවන් වෙන්නෙ Youtube Video පමණයි.* 🔆
 📢 *මට කිසිවක් සොයාගත නොහැකි විය...* *මේ විදිහට Reply එකක් ආවොත් ඒ වීඩියෝ Download කරන්න බැරි ඒව...*

 ╚═══❖•ೋ° °ೋ•❖═══╝` })

    }));

    Simple.addcommand({pattern: 'dea', fromMe: false,  deleteCommand: false }, (async (message, match) => {

          
        var image = await axios.get ('https://telegra.ph/file/5e6b637122b3353a7902b.jpg', {responseType: 'arraybuffer'})
    await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `╹🐼 *𝚂𝚁𝙸 𝙻𝙰𝙽𝙺𝙰 𝙱𝙴𝚂𝚃 𝚆.𝙰 𝙱𝙾𝚃* 🐼╹    

 ⋱ ⋮ ⋰
⋯ ◯ ⋯ ︵ 　　　　　　^v^
   ︵︵( ░░ )︵.︵.︵
 (°░░░░░░ °) ░░░° )
 °°︶°¯°︶°°︶°︶°°　^v^　　^v^
 ♪♫•*¨*•.¸¸❤¸¸.•*¨*•♫♪

 █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
 █-----╦─╦╔╗╦─╔╗╔╗╔╦╗╔╗-----█
 █-----║║║╠─║─║─║║║║║╠─-----█
 █-----╚╩╝╚╝╚╝╚╝╚╝╩─╩╚╝-----█
 █▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█

 🌀 *BOT Name - SIMPLE-BOT*

 🌀 *Developer - Kaveesha Nethum*

 🌀 *Company Name - SIMPLE Developers*

    
 🔆 *Command details* 🔆

 ●▬▬▬▬๑۩۩๑▬▬▬▬▬●

 💠 *සිංදු ගන්න විදිහ - .song කියල ගහල සිදුවේ  නම ගහන්න...*
    
 🔆 ( *එහෙම ගහල සිංදු ආවෙ නැත්නම් බොට්ගෙ Error එකක්... ඒක හදනකම් ඉන්න වෙනවා.* )
 🔆 *බොට්ගෙන් මේවගේ ඒවනම් ගන්න එපා 👉 ( *.song Dj සිංදු* )

 ❌ *ඒවගේ ලොකු දේවල් ඉල්ලපුවාම බොට් වැඩ නැතුව යනව..* ❌

 ●▬▬▬▬๑۩۩๑▬▬▬▬▬●

 💠 *වඩියෝ Download කරගන්න විදිහ - .video Download කරගන්න ඕන වීඩියෝ එකේ ලින්ක් එක*

 🔆*හැබැයි ඔහොම Download කරගන්න පුළුවන් වෙන්නෙ Youtube Video පමණයි.* 🔆
 📢 *මට කිසිවක් සොයාගත නොහැකි විය...* *මේ විදිහට Reply එකක් ආවොත් ඒ වීඩියෝ Download කරන්න බැරි ඒව...*

 ╚═══❖•ೋ° °ೋ•❖═══╝ `   ,quoted: message.data})
 
    }));
}
