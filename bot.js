require('dotenv').config();
const Discord = require('discord.js');
const fetch = require('node-fetch');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content === 'hello') {
    msg.reply('hi');
    msg.channel.send('hi');

  } else if (msg.content === 'โควิด' || msg.content === 'covid') {
    fetch('https://covid19-cdn.workpointnews.com/api/constants.json')
    .then(res => res.json())
    .then((json) => {
      msg.channel.send(
        "ยอดผู้ติดเชื้อวันนี้: "+json['เพิ่มวันนี้']+" \r\n"+
        "ยอดผู้ติดเชื้อทั้งหมด: "+json['ผู้ติดเชื้อ']+" \r\n"+
        "หายแล้ว: "+json['หายแล้ว']+" \r\n"+
        "กำลังรักษา: "+json['กำลังรักษา']+" \r\n"+
        "เสียชีวิต: "+json['เสียชีวิต']+" \r\n"+
        "ข้อมูลวันที่: "+json['เพิ่มวันที่']+" \r\n");
    })
  }
});