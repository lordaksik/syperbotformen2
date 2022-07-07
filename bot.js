require('dotenv').config();
const { Telegraf } = require('telegraf')
const fetch = require('node-fetch');
const bot = new Telegraf(process.env.BOT_TOKEN||8080)
bot.start((ctx) => {ctx.reply(`Привет ${ctx.message.from.first_name}`)
console.log(ctx.message)})
bot.help((ctx) => ctx.reply('Напиши /bot'))
bot.hears('/bot', async (ctx) => {
  
   async function request() {
    try {
      const response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-30-09/8/1/")
      const data = await response.json()
      const response2 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-30-09/8/2/")
      const data2 = await response2.json()
        const response3 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-30-09/8/3/")
      const data3 = await response3.json()
      let result = 0;
      let result2 = 0;
      let result3 = 0;
      let result4 = 0;
     let result44 = 0;
       let result444 = 0;
      let result5 = 0;
     let result55 = 0;
      let result555 = 0;
     let result33 = 0;
    let mast1=0;
    let mast2=0;
    let mast3=0;
    let mast4=0;
      let fir=0;
      score_dealer = data.items.results[0].results.score_dealer
    for (let i = 0; i <= 9; i++) {
  score_dealer = data.items.results[i].results.score_dealer
  score_player = data.items.results[i].results.score_player
   console.log("игрок " + score_player + " "+ score_dealer +" дилер")

  if ((parseInt(score_player,10) === 11) || (parseInt(score_dealer,10) ===11) || (parseInt(score_player,10) ===12) || (parseInt(score_dealer,10) ===12) ||
(parseInt(score_player,10) ===13) || (parseInt(score_dealer,10) ===13))
      { fir = fir + 1;}
}
console.log(fir)    
if (fir === 0)
{ctx.reply( 'Фигурок не было 10 раздач');}
      for (let i = 0; i <= 19; i++) {
          score_dealer = data.items.results[i].results.score_dealer
          score_player = data.items.results[i].results.score_player
          // console.log("игрок " + score_player + " "+ score_dealer +" дилер")
              if ((score_player == 3 && (score_dealer == 2 || score_dealer == 8 || score_dealer == 3))
               || (score_player == 13 && (score_dealer == 13 || score_dealer == 8 || score_dealer == 14)) 
               || (score_player == score_dealer) || (score_player == 8) || (score_dealer == 8))
             { result = result + 1;}
      }
  
      if (result == 0)
     { ctx.reply( 'Больших кэфов давно не было 20 минут');}
     
      for (let i = 0; i <= 29; i++) {
         score_dealer = data.items.results[i].results.score_dealer
         score_player = data.items.results[i].results.score_player
         if ((score_player == 8) || (score_dealer == 8))
            { result2 = result2 + 1;}
         
     }
    
     if (result2 == 0)
    {ctx.reply( 'Не было 8 уже 29 раздач');}

    for (let i = 0; i <= 29; i++) {
      score_dealer = data.items.results[i].results.score_dealer
      score_player = data.items.results[i].results.score_player
      if (score_player == 8)
          {result4 = result4 + 1;}
      
  }
      for (let i = 0; i <= 29; i++) {
      score_dealer2 = data2.items.results[i].results.score_dealer
      score_player2 = data2.items.results[i].results.score_player
      if (score_player2 == 8)
         { result44 = result44 + 1;}
      
  }
          for (let i = 0; i <= 29; i++) {
      score_dealer3 = data3.items.results[i].results.score_dealer
      score_player3 = data3.items.results[i].results.score_player
      if (score_player3 == 8)
         { result444 = result444 + 1;}
      
  }
  if (result44 === 0 && result4 === 0 && result444 === 0)
 {ctx.reply( 'Не было 8 у игрока уже 90 минут (вертикаль)');}
 for (let i = 0; i <= 29; i++) {
  score_dealer = data.items.results[i].results.score_dealer
  score_player = data.items.results[i].results.score_player
  if (score_dealer == 8)
     { result5 = result5 + 1;}
}
 for (let i = 0; i <= 29; i++) {
  score_dealer2 = data2.items.results[i].results.score_dealer
  score_player2 = data2.items.results[i].results.score_player
  if (score_dealer2 == 8)
      {result55 = result55 + 1;}
}
 for (let i = 0; i <= 29; i++) {
  score_dealer3 = data3.items.results[i].results.score_dealer
  score_player3 = data3.items.results[i].results.score_player
  if (score_dealer3 == 8)
      {result555 = result555 + 1;}
}

if (result5 === 0 && result55 === 0 && result555 === 0)
{ctx.reply( 'Не было 8 у дилера уже 90 минут (вертикаль)');}
     for (let i = 0; i <= 29; i++) {
         score_dealer = data.items.results[i].results.score_dealer
         score_player = data.items.results[i].results.score_player
 
         if (score_player === score_dealer)
             {result3 = result3 + 1;}
     }
     
  for (let i = 0; i <= 29; i++) {
         score_dealer2 = data2.items.results[i].results.score_dealer
         score_player2 = data2.items.results[i].results.score_player
 
         if (score_player2 === score_dealer2)
            { result33 = result33 + 1;}
     }
      var result334=0;
        for (let i = 0; i <= 9; i++) {
         score_dealer3 = data3.items.results[i].results.score_dealer
         score_player3 = data3.items.results[i].results.score_player
 
         if (score_player3 === score_dealer3)
            { result334 = result334 + 1;}
     }
     if (result3 === 0 && result33 === 0  && result334 === 0)
    { ctx.reply( 'Не было ничьи 70 минут');}
    
    for (let i = 0; i < 11; i++) {
        score_dealer = data.items.results[i].results.card_dealer.suit
        score_player = data.items.results[i].results.card_player.suit
        
        if(score_dealer!='diamonds' && score_player!='diamonds')
       { mast1=mast1+1;}
        if(score_dealer!='clubs' && score_player!='clubs')
        {mast2=mast2+1;}
        if(score_dealer!='spades' && score_player!='spades')
      { mast3=mast3+1;}
      if(score_dealer!='hearts' && score_player!='hearts')
      {mast4=mast4+1;}
  
    }
    
    if(mast1===11)
    {ctx.reply('Буби не было 11 раздач')}
    //diamonds- буби
    //clubs - крести
    //spades - пики
    //hearts - чирва
    //
   if(mast2===11)
   {ctx.reply('Крести не было 11 раздач')}
  
   if(mast3===11)
   {ctx.reply('Пики не было 11 раздач')}
   
   if(mast4===11)
   {ctx.reply('Чирвы не было 1 раздач')}
  
} catch(err) {
    console.log(err);    
  } 
  }

 
    function good(){
      
       ctx.reply( "Вы запустили Бота на стратегию «Большие кэфы» ⚠ Не забудьте поставить особые уведомления на Бота, и ждите сигнала на валуйные ситуации!");
       ctx.reply( "Удачи! По всем вопросам пишите @BetgamesTV_Admin"); 
       global.time= setInterval(request, 40000) 
       //global.time2= setInterval(request2, 55000) 
       }



good()}
)
bot.hears('/end', async (ctx) => {
    try {
      clearInterval(time);
     // clearInterval(time2);
      ctx.reply("Пока");  
    } catch(err) {
      ctx.reply("Этот бот и так выключен");    
    } 
})
bot.launch()

