let testString = `баловаться-баловАться
аэропорты-аэропОрты
августовский-Августовский
банты-бАнты
бухгалтеров-бухгАлтеров
балуешь-балУешь
баловень-бАловень
безудержный-безУдержный
вероисповедание-вероисповЕдание
включит-включИт
дозировать-дозИровать
докрасна-докраснА
пломбировать-пломбировАть
дешевизна-дешевИзна
доверху-дОверху
досуха-дОсуха
газопровод-газопровОд
жалюзи-жалюзИ
закупорить-закУпорить
завидно-завИдно
заствело-зАсветло
испчерпать-исчЕрпать
инженеров-инженЕров
краны-крАны
кремень-кремЕнь
кухонный-кУхонный
клала-клАла
кралась-крАлась
кровоточащий-кровоточАщий
квартал-квартАл
лекторы-лЕкторы
молящий-молЯщий
мусоропровод-мусоропровОд
мозаичный-мозаИчный
ногтя-нОгтя
наделит-наделИт
насорит-насорИт
нажита-нажитА
нанявший-нанЯвший
начавший-начАвший
начатый-нАчатый
намерение-намЕрение
недуг-недУг
отрочество-Отрочество
оптовый-оптОвый
облегчить-облегчИть
ободрить-ободрИть
опошлить-опОшлить
осведомиться-освЕдомиться
оглянется-оглЯнется
партер-партЕр
прозорлива-прозорлИва
плодоносить-плодоносИть
принудить-принУдить
проживший-прожИвший
понявший-понЯвший
премировать-премировАть
сироты-сирОты
столяр-столЯр
сливовый-слИвовый
согнутый-сОгнутый
сорит-сорИт
тубдиспансер-тубдиспансЕр
прожорлива-прожОрлива
убыстрить-убыстрИть
уделит-уделИт
шарфы-шАрфы
щемит-щемИт
иксы-Иксы`

testArray = testString.split('\n');

for (let i=0; i<testArray.length; i++){
    testArray[i] = testArray[i].split('-');
}

function ask(){
    answer.innerHTML = '';
    
    randomIndex = Math.floor(Math.random() * (testArray.length - 0)) + 0;
    index.innerHTML = randomIndex;
    question.innerHTML = testArray[randomIndex][0];    
}

show.addEventListener('click', function(){
    let randomIndex = index.innerHTML;
    answer.innerHTML = testArray[randomIndex][1];
    setTimeout(ask, 3000);
})

ask();