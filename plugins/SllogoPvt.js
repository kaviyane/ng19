const Asiata = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command ðï¸"

if (Config.WORKTYPE == 'private') {
   
   
   Asiata.addcommand({ pattern: 'rlpack', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        var ttinullimage = await axios.get(`https://telegra.ph/file/5e6b637122b3353a7902b.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  `âââââââââââââââââââââââ
ââ ðï¸*SL LOGO PACK 1*ðï¸ â
â ââââââââââââââââââââââ
â
â âð§ââï¸ ðï¸Cmd: *.phub*
â ââð§ââï¸ â Dec: *Send pornhub logo*
â âð§ââï¸ ðï¸ Ex: *.phub SL-ASIATA*
â
â âð§ââï¸ ðï¸ Cmd: *.stone*
â ââð§ââï¸ â Dec: *Send stone like logo*
â âð§ââï¸ ðï¸Ex: *.stone SL-ASIATA*
â
â âð§ââï¸ ðï¸Cmd: *.glitch*
â ââð§ââï¸ â Dec: *Send glitch logo*
â âð§ââï¸ ðï¸ Ex: *.glitch SL-ASIATA*
â
â âð§ââï¸ ðï¸Cmd: *.space*
â ââð§ââï¸ â Dec: *Send space logo*
â âð§ââï¸ ðï¸Ex: *.space SL-ASIATA*
â
â âð§ââï¸ ðï¸Cmd: *.blood*
â ââð§ââï¸ â Dec: *Send blood hor logo*
â âð§ââï¸ ðï¸Ex: *.blood SL-ASIATA*
â
â âð§ââï¸ ðï¸Cmd: *.blackpink*
â ââð§ââï¸ â Dec: *Send bpink logo*
â âð§ââï¸ ðï¸Ex: *.blackpink SL-ASIATA*
â
â âð§ââï¸ ðï¸Cmd: *.wall*
â ââð§ââï¸ â Dec: *Send wall art logo*
â âð§ââï¸ ðï¸Ex: *.wall SL-ASIATA*
â
â âð§ââï¸ ðï¸Cmd: *.coding*
â ââð§ââï¸â Dec: *Send coding logo*
â âð§ââï¸ ðï¸ Ex: *.coding SL-ASIATA*
â
â âð§ââï¸ ðï¸Cmd: .*.sand1*
â ââð§ââï¸ â  Dec: *Send sand writting*
â âð§ââï¸ ðï¸ Ex: *.sand1 SL-ASIATA*
â
â âð§ââï¸ ðï¸Cmd: *.sand2*
â ââð§ââï¸ â Dec: *Send sand writting*
â âð§ââï¸ ðï¸Ex: *.sand2 SL-ASIATA
â
â âð§ââï¸ ðï¸Cmd: *.sand3*
â ââð§ââï¸ â Dec: *Send sand writting*
â âð§ââï¸ ðï¸Ex: *.sand3 SL-ASIATA
â
â âð§ââï¸ ðï¸Cmd: *.beach*
â ââð§ââï¸ â Dec: *Send beach logo*
â âð§ââï¸ ðï¸Ex: *.beach SL-ASIATA
â
â âð§ââï¸ ðï¸Cmd: *.gradient*
â ââð§ââï¸ â  Dec: *Send logo*
â âð§ââï¸ ðï¸ Ex: *.gradient SL-ASIATA*
â
â âð§ââï¸ ðï¸Cmd: *.luxury*
â ââð§ââï¸ â  Dec: *Send luxury logo*
â âð§ââï¸ ðï¸ Ex: *.luxury SL-ASIATA*
â
â âð§ââï¸ ðï¸Cmd: *.sky*
â ââð§ââï¸ â  Dec: *Send sky logo*
â âð§ââï¸ ðï¸ Ex: *.sky SL-ASIATA*
â
â âð§ââï¸ ðï¸Cmd: *.winter*
â ââð§ââï¸ â  Dec: *Send winter logo*
â âð§ââï¸ ðï¸ Ex: *.winter SL-ASIATA
â
â âð§ââï¸ ðï¸Cmd: *.christmas*
â ââð§ââï¸ â  Dec: *Send xmas logo*
â âð§ââï¸ ðï¸ Ex: *.christmas SL-ASIATA*
â
â âð§ââï¸ ðï¸Cmd: *.neon*
â ââð§ââï¸ â  Dec: *Send neon logo*
â âð§ââï¸ ðï¸ Ex: *.neon SL-ASIATA*
â
â âð§ââï¸ ðï¸Cmd: *.king*
â ââð§ââï¸ â  Dec: *Send king logo*
â âð§ââï¸ ðï¸ Ex: *.king SL-ASIATA*
â
â âð§ââï¸ ðï¸Cmd: *.glue*
â ââð§ââï¸ â  Dec: *Send Glue logo*
â âð§ââï¸ ðï¸ Ex: *.glue SL-ASIATA*
â
â      ââðï¸ SL-ASIATA BOT ðï¸ââ
â        â ENJOY WITH US â
âââââââââââââââââââââââ`,quoted: message.data})

    }));

   Asiata.addcommand({pattern: 'gamma ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://api.lolhuman.xyz/api/meme8?apikey=d3be4b65ca9dab633c773d66&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '  âââð§ââï¸ASIATAð§ââï¸âââ  ' ,quoted: message.data})
   
   }));
   
   Asiata.addcommand({pattern: 'stone ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://pencarikode.xyz/api/textpro/stone-text?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '  âââð§ââï¸ASIATAð§ââï¸âââ  ' ,quoted: message.data})
   
   }));
   
   Asiata.addcommand({pattern: 'glitch ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://pencarikode.xyz/api/textpro/glitch-text?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '  âââð§ââï¸ASIATAð§ââï¸âââ  ' ,quoted: message.data})
   
   }));
   
   Asiata.addcommand({pattern: 'space ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://pencarikode.xyz/api/textpro/space-3d?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '  âââð§ââï¸ASIATAð§ââï¸âââ  ' ,quoted: message.data})
   
   }));
   
   Asiata.addcommand({pattern: 'phub ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://pencarikode.xyz/api/textpro/phub?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '  âââð§ââï¸ASIATAð§ââï¸âââ  ' ,quoted: message.data})
   
   }));
   
   
     Asiata.addcommand({ pattern: 'blood ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/horror?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' âââð§ââï¸ASIATAð§ââï¸âââ ' ,quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'blackpink ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/blackpink?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' âââð§ââï¸ASIATAð§ââï¸âââ ' ,quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'coding ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/matrix?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' âââð§ââï¸ASIATAð§ââï¸âââ ' ,quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'wall ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/graffiti?text=${encodeURIComponent(match[1])}&text2=Rex&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' âââð§ââï¸ASIATAð§ââï¸âââ ' ,quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'sand1 ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/sand-writing?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' âââð§ââï¸ASIATAð§ââï¸âââ ' ,quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'beach ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/beach?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' âââð§ââï¸ASIATAð§ââï¸âââ ' ,quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'gradient ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/gradient?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' âââð§ââï¸ASIATAð§ââï¸âââ ' ,quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'luxury ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/luxury?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' âââð§ââï¸ASIATAð§ââï¸âââ ' ,quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'sky ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/sky?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' âââð§ââï¸ASIATAð§ââï¸âââ ' ,quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'winter ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/winter?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' âââð§ââï¸ASIATAð§ââï¸âââ ' ,quoted: message.data})

    }));
   
   Asiata.addcommand({ pattern: 'christmas ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/christmas?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' âââð§ââï¸ASIATAð§ââï¸âââ ' ,quoted: message.data})
    }));
      
     Asiata.addcommand({ pattern: 'neon ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/neon-light?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' âââð§ââï¸ASIATAð§ââï¸âââ ' ,quoted: message.data})

    }));
      
      Asiata.addcommand({ pattern: 'king ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/metal-dark?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' âââð§ââï¸ASIATAð§ââï¸âââ ' ,quoted: message.data})

    }));
      Asiata.addcommand({ pattern: 'sand2 ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/summery-sand?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' âââð§ââï¸ASIATAð§ââï¸âââ ' ,quoted: message.data})

    }));
      
      Asiata.addcommand({ pattern: 'sand3 ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/sand-engraved?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' âââð§ââï¸ASIATAð§ââï¸âââ ' ,quoted: message.data})

    }));
      
      
      Asiata.addcommand({ pattern: 'glue ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/glue-text?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' âââð§ââï¸ASIATAð§ââï¸âââ ' ,quoted: message.data})

    }));
      
      
      
      
   
}
