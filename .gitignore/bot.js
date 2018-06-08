const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '+'
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('ready', function(){
    var ms = 100000 ;
    var setGame = [`+help `,`PLAY IN LOL CLAN`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/KiNg66S`);
    }, ms);100000

});
client.on("message", message => {
    if (message.content === (prefix + "help")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`
╭━━━┳╮╱╱╱╱╱╱╱ ╭━━╮╱╱╱╱╭╮
┃╭━╮┃┃╱╱╱╱╱╱╱ ┃╭╮┃╱╱╱╭╯╰╮
┃╰━╯┃┃╭╮╭┳━━╮ ┃╰╯╰┳━━╋╮╭╯
┃╭━━┫┃┃┃┃┃━━┫ ┃╭━╮┃╭╮┃┃┃
┃┃╱╱┃╰┫╰╯┣━━┃ ┃╰━╯┃╰╯┃┃╰╮
╰╯╱╱╰━┻━━┻━━╯ ╰━━━┻━━╯╰━╯
   

           General Commands
   
   『+id/ معلومات عن حسابك』
   『+2id / معلومات عن الحساب في صوره』
   『+embed/ يكرر كلامك بمبيد』
   『+sug/ الإقتراحات』
   『+roles/ يطلع الرتب』
   『+roles-n يعطيك الرتب بالترتيب』
   『+server/ معلومات عن السيرفر』
   『+image/ يعرض صوره السيرفر』
   『+avatar/ يعرض صورتك او صوره شخص』
   『+dt/يعرض لك الوقت والتاريخ واليوم 』
   『+invites/ يعرض كم ضياف 』
   『+topinvite/ لعرض قائمه فيها كل واحد ضاف كم 』
   『+zalgo / يزخرف لك شي تكتب لازم يكون انقليزي مو عربي』
   『+draw / يكرر الكلام في صوره』
   『+say / يكرر الكلام لتكتب』
   『+translate / يترجم』
   『+botserver / يحطيك سرفرات البوت بترتيب』
   『+emojilist / يجيب لك ايموجي السيرفر حقك』
   『+color 140 /  لانشاء 140 لون』
   『+colors / لروية الوانك』
           Admin Commands
   
 
   『+ct /انشاء روم كتابي』
   『+cv /انشاء روم صوتي』
   『+delet / مسح روم』
   『+clear او مسح / لمسح الشات』
   『+roles / لرؤيه رتب في سيرفر』
   『+ban / لتبنيد العضو』
   『+kick / اعطاء العضو كيك』
   『+unban / يفك عن كل المتبندين الباند』
   『+bans / يظهرلك عدد المتبندين』
   『+mute / اعطاء العضو ميوت』
   『+unmute / لفك الميوت عن العضو』
   『+add.role / لاضافة رتبه لسيرفرك』


   Bot Commands
   『+ping/ يعرض لك سرعه اتصال البوت』
   『+uptime/ يعرض لك صار للبوت كم شغال』
   『+invite/ اضافه البوت』
   『+mb/ حاله الاعضاء』
   『+bot/ معلومات عن البوت』
   
              BC رسائل جماعيه
   『+bc /❖  برودكاست + للكل + مع صاحب الرساله +  مطور』
   『+bc1 / بروداكست + للكل + مطور
           Games Commands
    
   『+لعبه صراحه/صراحه』
   『+لعبه خواطر/خواطر 』
   『+يعطيك ذكر من الاذكار/ اذكار』
   『+يخيرك بين شي وشي / لو خيروك』
   『+يعطيك عقاب و لازم تنفذه/ عقاب』
   『+لعبه اسئله / كت』
   『+لعبة سرعة الكتابة/ سرعة』
   『+للعب لعبه فكك/ فكك』
   『+اسئلني』
   『+hack /خدعة تهكير』
   『+لو خيروك
           *profile Commands*

   『soon』






`)
   message.author.sendEmbed(embed)
   
   }
   });  
client.on('message', message => {
     if (message.content === (prefix + "help")) {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#8650a7")
  .addField("Done" , " تــــم ارســالك في الخــاص")
  message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {
    if (message.content.startsWith('السلام عليكم')){
         let ra3d = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setColor("random")
      .setDescription(" **ۆﻋﻟﯾﮑﻣ̝̚ اﻟسـﻟاﻣ̝̚ ۆژפﻣ̝̚ة اﻟﻟھَہّ ۆﺑژﮑاﭠھَہّ ۆﻟﮑﻣ̝̚ ﻣ̝̚ﻧۆژ**")
         
         
      message.channel.sendEmbed(ra3d);
        }
    });


    client.on("message", message => {
        if (message.author.bot) return;
        
        let command = message.content.split(" ")[0];
        
        if (command === "+mute") {
              if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
        let user = message.mentions.users.first();
        let modlog = client.channels.find('name', 'mute-log');
        let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
        if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
        if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
        
        const embed = new Discord.RichEmbed()
          .setColor(0x00AE86)
          .setTimestamp()
          .addField('الأستعمال:', 'اسكت/احكي')
          .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
          .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
         
         if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
       
        if (message.guild.member(user).roles.has(muteRole.id)) {
      return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت**").catch(console.error);
      } else {
          message.guild.member(user).addRole(muteRole).then(() => {
      return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي**").catch(console.error);
      });
        }
      
      };
      
      });
      client.on('message', message => {
        var prefix = "+";
        
            if (message.author.id === client.user.id) return;
            if (message.guild) {
           let embed = new Discord.RichEmbed()
            let args = message.content.split(' ').slice(1).join(' ');
        if(message.content.split(' ')[0] == prefix + 'bc1') {
            if (!args[1]) {
        message.channel.send("**+bc1 <message>**");
        return;
        }
                message.guild.members.forEach(m => {
           if(!message.member.hasPermission('ADMINISTRATOR')) return;
                    var bc = new Discord.RichEmbed()
                    .addField('» السيرفر :', `${message.guild.name}`)
                    .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
                    .addField(' » الرسالة : ', args)
                    .setColor('#ff0000')
                    // m.send(`[${m}]`);
                    m.send(`${m}`,{embed: bc});
                });
            }
            } else {
                return;
            }
        });
      client.on('message', message => {
        if(message.content == '+mb') {
        const embed = new Discord.RichEmbed()
        .setDescription(`**Members info🔋
    :green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
    :heart:dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
    :yellow_heart: idle:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}   
    :black_heart: offline:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size} 
    :blue_heart:   all:  ${message.guild.memberCount}**`)         
             message.channel.send({embed});
    
        }
      });
      const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
let prefixes = JSON.parse(fs.readFileSync("./prefix.json", "utf8"));

client.on("message", message => {
    if (message.author.bot) return;
    if (!message.guild) return;

    if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {
        prefix: '!',
    }
    var prefix = prefixes[message.guild.id].prefix

    if (message.content.startsWith(prefix + 'setp')) {

        let args = message.content.split(" ").slice(1)

        if (!args.join(" ")) return message.reply(`Say The Prefix Please.`)
        prefixes[message.guild.id] = {
            prefix: args.join(" ")
        }
        message.channel.send(`The New Prefix Set To ${args.join(" ")} !`)
    }
    fs.writeFile("./prefix.json", JSON.stringify(prefixes), (err) => {
        if (err) console.error(err)
    });    var prefix = prefixes[message.guild.id].prefix
    client.on('message', message => { 
        if(!prefixes[message.guild.id]) prefixes[message.guild.id] = {
            prefix:'!',
          }     
          fs.writeFile("./prefix.json", JSON.stringify(prefixes), (err) => {
            if (err) console.error(err)
          });
        });
        
          });
      client.on('message', message => {

        if (message.content.startsWith("+add.role")) {
                     if(!message.channel.guild) return message.reply('**Commands in the server**');
                if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply('⚠ **You do not have permissions**');
                let args = message.content.split(" ").slice(1);
                    message.guild.createRole({
                        name : args.join(' '),
                        color : "RANDOM", 
                        permissions : [1]
                    }).then(function(role){
                        message.addRole(role)
                    })
        
        }
        });
        client.on("message", message => {
            var prefix = "+";
                    var args = message.content.substring(prefix.length).split(" ");
                    if (message.content.startsWith(prefix + "clear")) {
                        if (!message.member.hasPermission("MANGE_MESSAGES"))  return;
         if (!args[1]) {
                                        let embed3 = new Discord.RichEmbed()
                                        .setDescription(".clear <number>")
                                        .setColor("RANDOM")
                                        message.channel.sendEmbed(embed3);
                                    } else {
                                    let messagecount = parseInt(args[1]);
                                    message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                                                  message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                    message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                    let embed4 = new Discord.RichEmbed()
                                                                    .setColor("#008000")
                                        .setDescription(":white_check_mark: | Delete " + args[1] + " Message!")
                                                                                                message.delete("..");
                                        message.channel.sendEmbed(embed4);
                                    }
                                  }
        });
      client.on("message", (message) => {
        if (message.content.startsWith('+delet')) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
    
            let args = message.content.split(' ').slice(1);
            let channel = message.client.channels.find('name', args.join(' '));
            if (!channel) return message.reply('**There is no room like this name -_-**').catch(console.error);
            channel.delete()
        }
    });   client.on("message", message => {
        if (message.author.bot) return;
        
        let command = message.content.split(" ")[0];
        
        if (command === "+unmute") {
              if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
        let user = message.mentions.users.first();
        let modlog = client.channels.find('name', 'mute-log');
        let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
        if (!muteRole) return message.reply("** لا يوجد لديك رتبه الميوت 'Muted' **").catch(console.error);
        if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
        const embed = new Discord.RichEmbed()
          .setColor(0x00AE86)
          .setTimestamp()
          .addField('الأستعمال:', 'اسكت/احكي')
          .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
          .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
      
        if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
      
        if (message.guild.member(user).removeRole(muteRole.id)) {
      return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
      } else {
          message.guild.member(user).removeRole(muteRole).then(() => {
      return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
      });
        }
      
      };
      
      });
      
        
      client.on('message', message=>{
        if (message.content ===  '+color 140'){
                  if(!message.channel.guild) return;
                if (message.member.hasPermission('MANAGE_ROLES')){
                    setInterval(function(){})
                      let count = 0;
                      let ecount = 0;
            for(let x = 1; x < 141; x++){
                message.guild.createRole({name:x,
                color: 'RANDOM'})
                } message.channel.send('جاري عمل الالوان |✅')
                  
              
                }
        }
    });
    client.on('message', message => {
        var prefix = "+"
   if (message.content.startsWith(prefix + "uptime")) {
       let uptime = client.uptime;
   
       let days = 0;
       let hours = 0;
       let minutes = 0;
       let seconds = 0;
       let notCompleted = true;
   
       while (notCompleted) {
   
           if (uptime >= 8.64e+7) {
   
               days++;
               uptime -= 8.64e+7;
   
           } else if (uptime >= 3.6e+6) {
   
               hours++;
               uptime -= 3.6e+6;
   
           } else if (uptime >= 60000) {
   
               minutes++;
               uptime -= 60000;
   
           } else if (uptime >= 1000) {
               seconds++;
               uptime -= 1000;
   
           }
   
           if (uptime < 1000)  notCompleted = false;
   
       }
   
       message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec` + "`");
   
   
   }
   });
    client.on('message', message => {
        if(message.content === "+bot") {
            const embed = new Discord.RichEmbed()
            .setColor("#00FFFF")
            .setDescription(`**Servers**🌐 **__${client.guilds.size}__**
    **Users**👥 **__${client.users.size}__**
    **Channels**📚 **__${client.channels.size}__** `)
                   message.channel.sendEmbed(embed);
               }
    });
    

    
var rebel = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png","https://f.top4top.net/p_8816hvic1.png","https://d.top4top.net/p_882020461.png","https://e.top4top.net/p_882s3ftn1.png","https://a.top4top.net/p_882eg9c51.png","https://c.top4top.net/p_882xkcqd1.png","https://f.top4top.net/p_882w7pdi1.png","https://a.top4top.net/p_882gcpmo1.png"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'لو خيروك')) {
         var cat = new Discord.RichEmbed()
.setImage(rebel[Math.floor(Math.random() * rebel.length)])
message.channel.sendEmbed(cat);
    }
});
client.on('message', message => {

    if(message.content.startsWith(prefix + 'rep')) {
      if(!message.channel.guild) return;
                    moment.locale('en');
                  var getvalueof = message.mentions.users.first()
                    if(!getvalueof) return message.channel.send(`**:mag: |  ${message.author.username}, the user could not be found.    **`);
                       if(getvalueof.id == message.author.id) return message.channel.send(`**${message.author.username}, you cant give yourself a reputation !**`)
    if(profile[message.author.id].reps != moment().format('L')) {
            profile[message.author.id].reps = moment().format('L');
            profile[getvalueof.id].rep = Math.floor(profile[getvalueof.id].rep+1);
         message.channel.send(`** :up:  |  ${message.author.username} has given ${getvalueof} a reputation point!**`)
        } else {
         message.channel.send(`**:stopwatch: |  ${message.author.username}, you can raward more reputation  ${moment().endOf('day').fromNow()} **`)
        }
       }
});
client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });
  client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find("448143246246543360");
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('🎽 | name :  ',`${member}`)
        .addField('📢 | نورت السيرفر يا قلبي' , `Welcome to the server, ${member}`)
        .addField('🆔 | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' ༺ PL♚CLAN ༻', `${member.guild.name}`,true)
                                       
     .setFooter("**༺ PL♚CLAN ༻**")
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });
   const cuttweet = [
     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
     'كت تويت | الحرية لـ ... ؟',
     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
     'كت تويت ‏| كلمة للصُداع؟',
     'كت تويت ‏| ما الشيء الذي يُفارقك؟',
     'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
     'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     '‏كت تويت | وش يفسد الصداقة؟',
     '‏كت تويت | شخص لاترفض له طلبا ؟',
     '‏كت تويت | كم مره خسرت شخص تحبه؟.',
     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
     '‏كت تويت |أقوى كذبة مشت عليك ؟',
     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
     '‏كت تويت | مطلبك الوحيد الحين ؟',
     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]

 client.on('message', message => {
   if (message.content.startsWith("كت تويت")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('لعبه كت تويت' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});
const Sra7a = [
    'صراحه  |  صوتك حلوة؟',
    'صراحه  |  التقيت الناس مع وجوهين؟',
    'صراحه  |  شيء وكنت تحقق اللسان؟',
    'صراحه  |  أنا شخص ضعيف عندما؟',
    'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
    'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
    'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
    'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
    'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
    'صراحه  |  أشجع شيء حلو في حياتك؟',
    'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
    'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
    'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
    'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
    'صراحه  |  نظرة و يفسد الصداقة؟',
    'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
    'صراحه  |  شخص معك بالحلوه والمُره؟',
    'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
    'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
    'صراحه  |  وش تتمنى الناس تعرف عليك؟',
    'صراحه  |  ابيع المجرة عشان؟',
    'صراحه  |  أحيانا احس ان الناس ، كمل؟',
    'صراحه  |  مع مين ودك تنام اليوم؟',
    'صراحه  |  صدفة العمر الحلوة هي اني؟',
    'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
    'صراحه  |  صفة تحبها في نفسك؟',
    'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
    'صراحه  |  تصلي صلواتك الخمس كلها؟',
    'صراحه  |  ‏تجامل أحد على راحتك؟',
    'صراحه  |  اشجع شيء سويتة بحياتك؟',
    'صراحه  |  وش ناوي تسوي اليوم؟',
    'صراحه  |  وش شعورك لما تشوف المطر؟',
    'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
    'صراحه  |  ما اكثر شي ندمن عليه؟',
    'صراحه  |  اي الدول تتمنى ان تزورها؟',
    'صراحه  |  متى اخر مره بكيت؟',
    'صراحه  |  تقيم حظك ؟ من عشره؟',
    'صراحه  |  هل تعتقد ان حظك سيئ؟',
    'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
    'صراحه  |  كلمة تود سماعها كل يوم؟',
    'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
    'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
    'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
    'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
    '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
    'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
    '‏صراحه | هل تحب عائلتك ام تكرههم؟',
    '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
    '‏صراحه  |  هل خجلت من نفسك من قبل؟',
    '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
    '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
    '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
     '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
    '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
    '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
    'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
    '‏صراحه  |  ما هو عمرك الحقيقي؟',
    '‏صراحه  |  ما اكثر شي ندمن عليه؟',
    'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
  client.on('message', message => {
if (message.content.startsWith('صراحة')) {
    if(!message.channel.guild) return message.reply('** This command only for servers **');
 var client= new Discord.RichEmbed()
 .setTitle("لعبة صراحة ..")
 .setColor('RANDOM')
 .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
 .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                 .setTimestamp()

  message.channel.sendEmbed(client);
  message.react("??")
}
});
client.on('message', message => {
    if (message.content.startsWith("avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});
client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**حط رقم معين يتم السحب منه**');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});

client.on("message", function(message) {
    let toBan = message.mentions.users.first();
    let toReason = message.content.split(" ").slice(2).join(" ");
    let toEmbed = new Discord.RichEmbed()
   if(message.content.startsWith(prefix + "ban")) {
       if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("**# - You dont have enough permissions!**");
       if(!toBan) return message.reply("**# - Mention a user!**");
       if(toBan.id === ("447121312960479242")) return message.reply("**# You cannot ban me!**");
       if(toBan === message.member.guild.owner) return message.reply("**# You cannot ban the owner of the server!**");
       if(toBan.bannable) return message.reply("**# - I cannot ban someone with a higher role than me!**");
       if(!toReason) return message.reply("**# - Supply a reason!**")
       if(toBan.id === message.author.id) return message.reply("**# You cannot ban yourself!**")
       if(!message.guild.member(toBan).bannable) return message.reply("**# - I cannot ban this person!**")
       let toEmbed;
       toEmbed = new Discord.RichEmbed()
       .setTitle("You have been banned from a server!")
       .setThumbnail(toBan.avatarURL)
       .addField("**# - Server:**",message.guild.name,true)
       .addField("**# - Reason:**",toReason,true)
       .addField("**# - Banned By:**",message.author,true)
       if(message.member.hasPermission("BAN_MEMBERS")) return (
           toBan.sendMessage({embed: toEmbed}).then(() => message.guild.member(toBan).ban({reason: toReason})).then(() => message.channel.send(`**# Done! I banned: ${toBan}**`))
       );
       
   }
})

client.on('message', ( message ) => {
    if( message.content == '!unbans' ){
        if( !message.member.hasPermission( 'ADMINISTRATOR' ) ) return message.reply(' لا تملك الصلاحيات لفعل هذا الأمر');
        message.guild.fetchBans().forEach(u=>message.guild.unban(u));
        message.reply(' تم.');
    }
})
  

client.on('message', message => {
    if (message.content.startsWith("+hack")) {
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);
                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("``اكتب اسم الشخص الي تبي يتهكر``");
                                     }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] 1%').setColor(0xFF0000)})
             }, 1000)
            setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓] 25%').setColor(0xFF0000)})
             }, 2000)
           setTimeout(function() {     
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 100%').setColor(0xFF0000)})
             }, 3000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 1...').setColor(0xFF0000)})
             }, 4000)
              setTimeout(function() {
               m.delete()
           }, 5000)
             setTimeout(function() {
               message.channel.send('تم تهكيرك')
           }, 6000)
           });
         }
 });

 client.on('message', message => {
    if (message.content.startsWith("+bans")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`${bans.size} البوت بند `))
  .catch(console.error);
}
});
   client.on('message', message => { 
    var prefix = "+"
   if (message.content.startsWith(prefix + 'emojilist')) {

       const List = message.guild.emojis.map(e => e.toString()).join(" ");

       const EmojiList = new Discord.RichEmbed()
           .setTitle('➠ Emojis') 
           .setAuthor(message.guild.name, message.guild.iconURL) 
           .setColor('RANDOM') 
           .setDescription(List) 
           .setFooter(message.guild.name) 
       message.channel.send(EmojiList) 
   }
});
client.on('message',function(message) {
    let toKick = message.mentions.users.first();
    let toReason = message.content.split(" ").slice(2).join(" ");
    let toEmbed = new Discord.RichEmbed()
   if(message.content.startsWith(prefix + 'kick')) {
       if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply('**# - You dont have enough permissions!**');
       if(toKick.bannable) return message.reply("**# - I cannot kick someone with a higher role than me!**");
       if(!toReason) return message.reply("**# - Supply a reason!**")
       if(toKick.id === message.author.id) return message.reply("**# You cannot kick yourself!**")
       if(!message.guild.member(toKick).bannable) return message.reply("**# - I cannot ban this person!**")
       let toEmbed;
       toEmbed = new Discord.RichEmbed()
       .setTitle("You have been kicked from a server!")
       .setThumbnail(toKick.avatarURL)
       .addField("**# - Server:**",message.guild.name,true)
       .addField("**# - Reason:**",toReason,true)
       .addField("**# - Kicked By:**",message.author,true)
       if(message.member.hasPermission("KICK_MEMBERS")) return (
           toKick.sendMessage({embed: toEmbed}).then(() => message.guild.member(toKick).kick()).then(() => message.channel.send(`**# Done! I kicked: ${toKick}**`))
       )
       }
});
client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage("https://discord.gg/AMe3nx")
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
---------------------
-[${message.guild.name}]  هذا هو رابط سيرفر
---------------------
-هذا الرابط صالح ل 100 مستخدم فقط
---------------------
-هذا الرابط صالح لمده 24 ساعه فقط
---------------------
**`)
      message.author.sendEmbed(Embed11)
    }
});
client.on('message', message => {
if (message.content.startsWith(prefix+"ct")) {
    var args = message.content.split(" ").slice(1);
    var argrst = args.join(' ');
                message.guild.createChannel(`${argrst}`, 'text')
      }
});
client.on('message', message => {
if (message.content.startsWith(prefix+"cv")) {
    var args = message.content.split(" ").slice(1);
    var argrst = args.join(' ');
                message.guild.createChannel(`${argrst}`,'voice')
          
        }
});
client.on('message', message => {
  if (true) {
if (message.content === 'invite') {
      message.author.send('https://discordapp.com/api/oauth2/authorize?client_id=452953540059463701&permissions=1609627831&scope=bot').catch(e => console.log(e.stack));

    }
   } 
  });




  client.on('message', message => {
    if(!message.channel.guild) return;
if (message.content.startsWith('+ping')) {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(client.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setThumbnail('https://cdn.discordapp.com/avatars/368141321547808768/c42716e13cb850f9ad0930af699472d0.png?size=2048nk')
.setColor('RANDOM')
.addField('**Time Taken:**',msg + " ms")
.addField('**WebSocket:**',api + " ms")
message.channel.send({embed:embed});
}
});

  




client.on('message', message => {
    if (message.content == "+اسئلني") {
         message.react('🤔','👌')
        var x = ['اين يلعب مصطفي فتحي؟', 'ما هو اسم ملعب بارشالونة', 'ما هو يوم الحج الأكبر؟', 'ما هو أطول أنهار أوربا ؟', 'ما هو اسم بيت الدجاج', 'ما هو أول بنك قام بالنشاط المصرفي في السعودية عام 1926م' , 'ما هو أول جامع أقيم في مصر','ما هو أطول نهر في آسيا','ما هو أقرب كوكب إلى الشمس','ما هو الحيوان الذي يُسمى البهنس','ما هو اول مسجد أسس بالمدينة','متى وقع صلح الحديبية عام 6هـ او 3هـ او 2هـ؟','متى قامت أمريكا بأول رحلة فضائية','متى كانت غزوة خيبر؟','ما هي السورة التي تبدأ بقوله تعالى " يا أيها النبي اتق الله ولا تطع الكافرين والمنافقين إن الله كان عليما حكيما ".اجب؟','ما هي السورة التي يطلق عليها عروس القرآن','ماذا يسمى من لايقرأ ولايكتب','ماهي أول دولة استخدمت طابع البريد','ماهو شعار الولايات المتحدة الامريكية','ماهو اذكي الحيوانات','من هو مكتشف أمريكا','مامعنى "فرعون" اجب؟','ماهو اقرب كوكب إلى الارض','ما هي نسبه المياه من الكره الارضيه?','كم عدد السجدات في القرآن الكريم؟','من هو بطل كاس العالم في عام 1966','أين أفتتح اول متحف في العالم?','ماأسم أنثى الحمار?','كم تبلغ درجه حراره الشمس؟','من هي مدينة الضباب','أين توجد أطول سكة حديد في العالم?'
        ];
        var x2 = ['التعاون', 'كامب نو', 'يوم النحر', 'الدانوب', 'قن', 'البنك الهولندي', 'جامع عمرو بن العاص','اليانجستي','عطارد','الاسد','مسجد قباء','6','سنة 1962','عام 7هـ','الاحزاب','سورة الرحمن','امي','بريطانيا','النسر الاصلع','الدلفين','كولمبس','البيت الكبير','الزهره','71%','15 سجدة','انكلترا ','القاهرة','الاتان','15 مليون درجه مئوية','لندن','كندا'
        ];
		var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`📢 امامك دقيقة لحل الاسئلة , السؤال يقول :  __**${x[x3]}**__ `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
               thing: true,
               maxMatches : 1,
                time : 60000,
                 maxUses: 1,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح `)
        })

        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح  `);
            message.react('✅')
        })
        })
    }
})
client.on('message', message => {
    if(!message.channel.guild) return;
 if(message.content.startsWith(prefix + 'bc')) {
 if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
 if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
 let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
 let BcList = new Discord.RichEmbed()
 .setThumbnail(message.author.avatarURL)
 .setAuthor(`محتوى الرساله ${args}`)
 .setDescription(`برودكاست بـ امبد 📝\nبرودكاست بدون امبد✏ \nلديك دقيقه للأختيار قبل الغاء البرودكاست\nيمكنك اضافة اسم السيرفر في البرودكاست عن طريق كتابة <server>\nيمكنك اضافة اسم المرسل في البرودكاست عن طريق كتاية <by>\nيمكنك منشنة العضو في الرساله عن طريق كتابة <user>`)
 if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {
 msg.react('📝')
 .then(() => msg.react('✏'))
 .then(() =>msg.react('📝'))
  
 let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
 let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;
 
 let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
 let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
 
 
 EmbedBc.on("collect", r => {
 
 message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
 message.guild.members.forEach(m => {
 let EmbedRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)
 var bc = new
 Discord.RichEmbed()
 .setColor('RANDOM')
 .setDescription(EmbedRep)
 .setThumbnail(message.author.avatarURL)
 m.send({ embed: bc })
 msg.delete();
 })
 })
 NormalBc.on("collect", r => {
   message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
 message.guild.members.forEach(m => {
 let NormalRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)
 m.send(NormalRep);
 msg.delete();
 })
 })
 })
 }
 });
 var dat = JSON.parse("{}");
 function forEachObject(obj, func) {
     Object.keys(obj).forEach(function (key) { func(key, obj[key]) });
 }
 client.on("ready", () => {
     var guild;
     while (!guild)
         guild = client.guilds.get('452219694091337728');
     guild.fetchInvites().then((data) => {
         data.forEach((Invite, key, map) => {
             var Inv = Invite.code;
             dat[Inv] = Invite.uses;
         });
     });
 });
 
 
 
 client.on("guildMemberAdd", (member) => {
     let channel = member.guild.channels.get("454053961171730442");
     if (!channel) {
         console.log("!the channel id it's not correct");
         return;
     }
     if (member.id == client.user.id) {
         return;
     }
     console.log('-');
     var guild;
     while (!guild)
         guild = client.guilds.get("452219694091337728");
     guild.fetchInvites().then((data) => {
         data.forEach((Invite, key, map) => {
             var Inv = Invite.code;
             if (dat[Inv])
                 if (dat[Inv] < Invite.uses) {
 
 channel.send(`
 **# - من طرف: ${Invite.inviter}** \n**# - رابط الدعوة: 
 https://discord.gg/${Invite.code}**\n**# - Welcome To PL Clan!, ${member}**`) }
             dat[Inv] = Invite.uses;
        
        });
     });
 })

client.on('message', message => {
    if (message.content === '+roles') {
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('Roles:',`**[${roles}]**`)
   message.channel.sendEmbed(embed);
    }
});
   client.on('message', message => {
       if (message.content.startsWith(prefix + 'botserver')) {
     let msg =  client.guilds.map(guild => `**${guild.name}** عدد الاعضاء: ${guild.memberCount}`).join('\n');
  let embed = new Discord.RichEmbed()
  .setTitle(`${client.guilds.size}سيرفرات `)
  .setDescription(`${msg}`)
  .setColor("#ebf442");
  message.channel.send(embed);
}
});
client.login('NDUyOTUzNTQwMDU5NDYzNzAx.DfYDgw.pI-UACfO9aaQgHE8a_18wx9vM9U');
