import { Question } from '../types/geography.ts';

export const QUESTIONS: Question[] = [
  // ==========================================
  // 1-DARS. KIRISH (Sahifa 3–4)
  // ==========================================
  {
    id: "q1_1",
    topicId: 1,
    question: "Iqtisodiy va ijtimoiy geografiya fani nimani o‘rganadi?",
    options: [
      "Faqat yer yuzasining tabiiy relyefi va iqlimiy mintaqalarini",
      "Kishilar faoliyati, hayot tarzi va ishlab chiqarishning hududiy tashkil etilishi masalalarini",
      "Faqat o‘simlik va hayvonot dunyosining genetik xususiyatlarini",
      "Faqat qazilma boyliklarning kimyoviy tarkibini"
    ],
    correctAnswer: "Kishilar faoliyati, hayot tarzi va ishlab chiqarishning hududiy tashkil etilishi masalalarini",
    explanation: "Darslikning 3-betida keltirilishicha, iqtisodiy va ijtimoiy geografiya kishilar faoliyati, hayot tarzi va ishlab chiqarishning hududiy farqlanishi hamda aholi faoliyatining hududiy tashkil etilishini o‘rganadi.",
    sourcePage: 3
  },
  {
    id: "q1_2",
    topicId: 1,
    question: "Darslikda «ijtimoiy mehnat unumdorligi»ga qanday ta’rif berilgan?",
    options: [
      "Barcha korxonalarning bir yillik umumiy sof daromadi",
      "Moddiy ishlab chiqarishda band bo‘lgan har bir ishlovchi hisobiga hosil qilingan milliy daromad miqdori",
      "Mamlakatdagi jami aholining kunlik o‘rtacha ish vaqti",
      "Eksport qilingan tovarlardan tushgan umumiy xorijiy valyuta hajmi"
    ],
    correctAnswer: "Moddiy ishlab chiqarishda band bo‘lgan har bir ishlovchi hisobiga hosil qilingan milliy daromad miqdori",
    explanation: "3-betdagi qoidaga ko‘ra, ijtimoiy mehnat unumdorligi – moddiy ishlab chiqarishda band bo‘lgan har bir ishlovchi hisobiga hosil qilingan milliy daromad miqdoridir.",
    sourcePage: 3
  },
  {
    id: "q1_3",
    topicId: 1,
    question: "Bozor munosabatlariga o‘tishda eng muhim va eng asosiy omil nima hisoblanadi?",
    options: [
      "Xomashyoni faqat chetga xom holida sotish",
      "Mehnat unumdorligi",
      "Qishloq aholisini zudlik bilan shaharlarga ko‘chirish",
      "Faqat chet el kreditlariga tayanish"
    ],
    correctAnswer: "Mehnat unumdorligi",
    explanation: "Darslikning 4-betida: «Zero, mehnat unumdorligi bozor munosabatlariga o‘tishda eng muhim va eng asosiy omil hisoblanadi» deb qayd etilgan.",
    sourcePage: 4
  },
  {
    id: "q1_4",
    topicId: 1,
    question: "Ishlab chiqarish korxonasida eng yuqori samaradorlikka erishish uchun qanday sharoit eng qulay hisoblanadi?",
    options: [
      "Xomashyo, yoqilg‘i, energiya manbalari va ishchilar o‘zaro yonma-yon joylashishi",
      "Korxona faqat chekka tog‘ cho‘qqilarida joylashishi",
      "Ishchilar korxonadan 100 kilometr uzoqda yashashi",
      "Faqat import qilinadigan xomashyolardan foydalanish"
    ],
    correctAnswer: "Xomashyo, yoqilg‘i, energiya manbalari va ishchilar o‘zaro yonma-yon joylashishi",
    explanation: "3-betda ta’kidlanishicha, agar xomashyo, yoqilg‘i, energiya manbalari va ishchilar o‘zaro yonma-yon joylashsa, ishlab chiqarishda eng yuqori samaradorlik ta’minlanadi.",
    sourcePage: 3
  },
  {
    id: "q1_5",
    topicId: 1,
    question: "O‘zbekistonning iqtisodiy va ijtimoiy geografiyasi kursi o‘quvchilarda qanday amaliy ko‘nikmalarni shakllantiradi?",
    options: [
      "Faqat qadimgi tarixiy yilnomalarni yod olish",
      "Iqtisodiy-geografik obyekt, hodisa va jarayonlarni tasvirlash, xaritalardan mustaqil foydalanish",
      "Faqat chet tillarini tarjima qilish",
      "Faqat meteorologik asboblarni yasash"
    ],
    correctAnswer: "Iqtisodiy-geografik obyekt, hodisa va jarayonlarni tasvirlash, xaritalardan mustaqil foydalanish",
    explanation: "4-betga binoan, darslik iqtisodiy-geografik obyekt, hodisa va jarayonlarni tasvirlash, birlamchi manbalar va xaritalardan mustaqil foydalanish malakalarini shakllantiradi.",
    sourcePage: 4
  },

  // ==========================================
  // 2-DARS. O‘ZBEKISTONNING GEOGRAFIK O‘RNI (Sahifa 5–7)
  // ==========================================
  {
    id: "q2_1",
    topicId: 2,
    question: "Geografik o‘rin mohiyatan qanday turlarga guruhlanadi?",
    options: [
      "Faqat iqlimiy va o‘simlik o‘rni",
      "Tabiiy geografik o‘rin, iqtisodiy geografik o‘rin va siyosiy geografik o‘rin",
      "Faqat qishloq xo‘jaligi va sanoat o‘rni",
      "Faqat quruqlik va dengiz o‘rni"
    ],
    correctAnswer: "Tabiiy geografik o‘rin, iqtisodiy geografik o‘rin va siyosiy geografik o‘rin",
    explanation: "Darslikning 5-betida geografik o‘rin mohiyatan tabiiy geografik o‘rin, iqtisodiy geografik o‘rin va siyosiy geografik o‘rin tarzida guruhlanishi ko‘rsatilgan.",
    sourcePage: 5
  },
  {
    id: "q2_2",
    topicId: 2,
    question: "Dunyo okeaniga chiqish uchun kamida ikkita davlat hududini kesib o‘tish zarur bo‘lgan (ikki karra quruqlik bilan o‘ralgan) dunyodagi ikki mamlakat qaysilar?",
    options: [
      "O‘zbekiston va Shveysariya",
      "O‘zbekiston va Lixtenshteyn",
      "O‘zbekiston va Mo‘g‘uliston",
      "O‘zbekiston va Afg‘oniston"
    ],
    correctAnswer: "O‘zbekiston va Lixtenshteyn",
    explanation: "6-betda ta’kidlanishicha, O‘zbekiston ochiq dengizga chiqish uchun kamida ikki davlat hududini kesib o‘tish zarur bo‘lgan dunyodagi ikki mamlakatdan biridir, ikkinchisi esa Lixtenshteyndir.",
    sourcePage: 6
  },
  {
    id: "q2_3",
    topicId: 2,
    question: "Miloddan avvalgi II asrdan milodiy XVI asrgacha Sharq bilan G‘arbni bog‘lab, O‘rta Osiyo orqali o‘tgan asosiy savdo yo‘li qanday atalgan?",
    options: [
      "Lojuvard yo‘li",
      "Buyuk Ipak yo‘li",
      "Shimoliy dengiz yo‘li",
      "Qirollik magistrali"
    ],
    correctAnswer: "Buyuk Ipak yo‘li",
    explanation: "6-betda miloddan avvalgi II asrdan milodiy XVI asrgacha Sharqni G‘arb bilan bog‘lab turgan asosiy savdo yo‘li Buyuk Ipak yo‘li ekani va u O‘rta Osiyo bozorlarining gullab-yashnashiga turtki bo‘lgani aytilgan.",
    sourcePage: 6
  },
  {
    id: "q2_4",
    topicId: 2,
    question: "O‘rta Osiyoda temiryo‘l qachon qurildi va u Toshkent hamda Samarqandni qaysi hudud bilan bog‘ladi?",
    options: [
      "XVII asr boshida Hindiston bilan",
      "XIX asr oxirlarida Rossiyaning markaziy rayonlari bilan",
      "XX asr o‘rtalarida Xitoy bilan",
      "XVIII asr oxirida Eron bilan"
    ],
    correctAnswer: "XIX asr oxirlarida Rossiyaning markaziy rayonlari bilan",
    explanation: "6-betga muvofiq, XIX asr oxirlarida O‘rta Osiyoda temiryo‘l qurilib, Samarqand va Toshkent kabi yirik shaharlar Rossiyaning markaziy rayonlari bilan bog‘langan.",
    sourcePage: 6
  },
  {
    id: "q2_5",
    topicId: 2,
    question: "Darslikda keltirilgan qaysi omillar O‘zbekistonning siyosiy geografik o‘rnini belgilovchi ijobiy jihat hisoblanadi?",
    options: [
      "Dengiz yo‘llari orqali xalqaro harbiy bazalarga ega ekanligi",
      "130 dan ortiq davlat bilan diplomatik aloqa o‘rnatgani va SHHT, YEXHT kabi nufuzli tashkilotlarga a’zoligi",
      "Hech qanday xalqaro bitimlarda qatnashmasligi",
      "Faqat bitta qo‘shni davlat bilan chegaradosh ekani"
    ],
    correctAnswer: "130 dan ortiq davlat bilan diplomatik aloqa o‘rnatgani va SHHT, YEXHT kabi nufuzli tashkilotlarga a’zoligi",
    explanation: "7-betda O‘zbekiston suverenitetini jahon hamjamiyati e’tirof etib, 130 dan ortiq davlat bilan diplomatik aloqalar o‘rnatgani hamda xalqaro tashkilotlardagi faol ishtiroki ijobiy omil sifatida ko‘rsatilgan.",
    sourcePage: 7
  },

  // ==========================================
  // 3-DARS. O‘ZBEKISTONNING MA’MURIY-HUDUDIY TUZILISHI (Sahifa 8–10)
  // ==========================================
  {
    id: "q3_1",
    topicId: 3,
    question: "O‘zbekiston Respublikasining umumiy yer maydoni qancha?",
    options: [
      "300,5 ming kv.km",
      "448,9 ming kv.km",
      "512,0 ming kv.km",
      "620,4 ming kv.km"
    ],
    correctAnswer: "448,9 ming kv.km",
    explanation: "8-betda O‘zbekiston Respublikasining maydoni 448,9 ming kv.km bo‘lib, Yaponiya, Germaniya, Buyuk Britaniya, Italiya kabi rivojlangan davlatlar hududidan katta ekanligi yozilgan.",
    sourcePage: 8
  },
  {
    id: "q3_2",
    topicId: 3,
    question: "O‘zbekistonning ma’muriy-hududiy tuzilishi necha pog‘onadan tashkil topgan?",
    options: [
      "2 pog‘ona",
      "3 pog‘ona",
      "4 pog‘ona",
      "5 pog‘ona"
    ],
    correctAnswer: "3 pog‘ona",
    explanation: "8-betda aniq belgilangan: O‘zbekiston ma’muriy-hududiy tuzilishi 3 pog‘onadan tashkil topgan (1-pog‘ona: Qoraqalpog‘iston Respublikasi, 12 viloyat va Toshkent shahri; 2-pog‘ona: tuman va shaharlar; 3-pog‘ona: qishloq fuqarolar yig‘inlari, shaharchalar).",
    sourcePage: 8
  },
  {
    id: "q3_3",
    topicId: 3,
    question: "Viloyat va tumanlarni tuzish, tugatish hamda chegaralarini o‘zgartirish tartibi qanday amalga oshiriladi?",
    options: [
      "Faqat tuman hokimining mustaqil qarori bilan",
      "Vazirlar Mahkamasining taklifiga muvofiq Oliy Majlis tomonidan",
      "Faqat xalqaro tashkilotlar ruxsati bilan",
      "Mahalla fuqarolar yig‘ini oqsoqollari yig‘ilishi bilan"
    ],
    correctAnswer: "Vazirlar Mahkamasining taklifiga muvofiq Oliy Majlis tomonidan",
    explanation: "9-betda yozilishicha: «Viloyat va tumanlarni tuzish va tugatish, ular chegaralarini o‘zgartirish O‘zbekiston Respublikasi Vazirlar Mahkamasining taklifiga muvofiq Oliy Majlis tomonidan amalga oshiriladi».",
    sourcePage: 9
  },
  {
    id: "q3_4",
    topicId: 3,
    question: "Qoraqalpog‘iston Respublikasi va viloyatlar bo‘ysunuvidagi shaharlar turkumiga qoidaga ko‘ra qancha aholisi bo‘lgan shaharlar kiritiladi?",
    options: [
      "Kamida 5 ming aholisi bo‘lgan",
      "Kamida 10 ming aholisi bo‘lgan",
      "Kamida 30 ming aholisi bo‘lgan",
      "Kamida 100 ming aholisi bo‘lgan"
    ],
    correctAnswer: "Kamida 30 ming aholisi bo‘lgan",
    explanation: "10-betdagi qoidada: «Qoraqalpog‘iston Respublikasi va viloyatlar bo‘ysunuvidagi shaharlar turkumiga, qoida tariqasida, kamida 30 ming aholisi bo‘lgan... shaharlar kiritilishi mumkin».",
    sourcePage: 10
  },
  {
    id: "q3_5",
    topicId: 3,
    question: "2017-yilda sayyohlar oqimini oshirish maqsadida viloyat bo‘ysunuviga o‘tkazilgan qadimiy shaharlar qaysilar?",
    options: [
      "Zarafshon va Uchquduq",
      "Xiva va Shahrisabz",
      "Bekobod va Shirin",
      "Angren va Quvasoy"
    ],
    correctAnswer: "Xiva va Shahrisabz",
    explanation: "10-betda: «Xiva va Shahrisabz shaharlari viloyat bo‘ysunuviga o‘tkazilgan eng yangi shaharlar hisoblanadi (2017-yil)» deb ta’kidlangan.",
    sourcePage: 10
  },

  // ==========================================
  // 4-DARS. IJTIMOIY-IQTISODIY XARITALAR (Sahifa 11–12)
  // ==========================================
  {
    id: "q4_1",
    topicId: 4,
    question: "Ijtimoiy-iqtisodiy xaritalarda hodisa va ko‘rsatkichlarni tasvirlash uchun qanday asosiy usullardan foydalaniladi?",
    options: [
      "Faqat relyef gorizontallari va relyef bo‘yoqlari",
      "Nuqtalar, kartodiagramma, kartogramma kabi o‘ziga xos usullar",
      "Faqat kompas va vizirlash chiziqlari",
      "Faqat gipsometrik shkala belgilari"
    ],
    correctAnswer: "Nuqtalar, kartodiagramma, kartogramma kabi o‘ziga xos usullar",
    explanation: "11-betda ko‘rsatilganidek, ijtimoiy-iqtisodiy xaritalarda tasvirlash uchun nuqtalar, kartodiagramma, kartogramma kabi o‘ziga xos usullardan foydalaniladi.",
    sourcePage: 11
  },
  {
    id: "q4_2",
    topicId: 4,
    question: "Ijtimoiy-iqtisodiy xaritalarning eng yirik guruhlaridan biri qaysi hisoblanadi?",
    options: [
      "Geologik tektonika xaritalari",
      "Sanoat xaritalari",
      "Meteorologik sinoptik xaritalar",
      "Okean tubi xaritalari"
    ],
    correctAnswer: "Sanoat xaritalari",
    explanation: "11-betda: «Bunday xaritalarning eng yirik guruhlaridan biri bu sanoat xaritalaridir. Chunki ular har bir sanoat turi va sanoat ishlab chiqarishi haqida ma’lumot beradi» deyilgan.",
    sourcePage: 11
  },
  {
    id: "q4_3",
    topicId: 4,
    question: "Qishloq xo‘jaligi xaritalarida asosan nimalar aks ettiriladi?",
    options: [
      "Faqat tog‘ konlarining chuqurligi",
      "Ekilgan yerlar maydoni, hosildorlik, chorvachilik turlari va mahsulotlarni qayta ishlash yo‘nalishlari",
      "Shaharlardagi tramvay va metro yo‘nalishlari",
      "Kosmik stansiyalarning parvoz yo‘li"
    ],
    correctAnswer: "Ekilgan yerlar maydoni, hosildorlik, chorvachilik turlari va mahsulotlarni qayta ishlash yo‘nalishlari",
    explanation: "12-betga binoan, qishloq xo‘jaligi xaritalarida ekin maydonlari, hosildorlik, chorvachilik turlari va ushbu sohaning rayonlashtirish masalalari aks etadi.",
    sourcePage: 12
  },
  {
    id: "q4_4",
    topicId: 4,
    question: "Aholi xaritalari qanday asosiy demografik ma’lumotlarni o‘z ichiga oladi?",
    options: [
      "Faqat daryo oqimi tezligi va suv sarfini",
      "Aholi soni, zichligi, dinamikasi, jins-yosh tarkibi, migratsiya va milliy tarkibi",
      "Tog‘ jinslarining yoshini",
      "Faqat metallurgiya pechlari quvvatini"
    ],
    correctAnswer: "Aholi soni, zichligi, dinamikasi, jins-yosh tarkibi, migratsiya va milliy tarkibi",
    explanation: "12-betda ta’riflanishicha, aholi xaritalari aholi soni, dinamikasi, geografik joylashuvi, zichligi, jins va yosh tarkibi, demografik jarayonlar hamda bandlik ma’lumotlarini o‘z ichiga oladi.",
    sourcePage: 12
  },
  {
    id: "q4_5",
    topicId: 4,
    question: "Saylov va ovoz berish masalalarini yoritadigan xaritalar qanday ataladi?",
    options: [
      "Iqlimiy xaritalar",
      "Elektoral xaritalar",
      "Gidrologik xaritalar",
      "Topografik planlar"
    ],
    correctAnswer: "Elektoral xaritalar",
    explanation: "12-betda keltirilganidek, bugungi kunda elektoral (ya’ni saylov va ovoz berish) masalalarini yoritadigan xaritalar keng yaratilmoqda.",
    sourcePage: 12
  },

  // ==========================================
  // 5-DARS. TABIIY SHAROIT VA TABIIY BOYLIKLAR (Sahifa 13–14)
  // ==========================================
  {
    id: "q5_1",
    topicId: 5,
    question: "Tabiiy boyliklar tabiiy sharoitdan qaysi jihati bilan farq qiladi?",
    options: [
      "Faqat tog‘larda uchrashi bilan",
      "Ishlab chiqarishga bevosita aloqador bo‘lib, uning xomashyo va energetika bazasini tashkil etishi bilan",
      "Inson faoliyatiga hech qanday ta’sir ko‘rsatmasligi bilan",
      "Faqat qish faslida paydo bo‘lishi bilan"
    ],
    correctAnswer: "Ishlab chiqarishga bevosita aloqador bo‘lib, uning xomashyo va energetika bazasini tashkil etishi bilan",
    explanation: "13-betda aytilgan: «Tabiiy boyliklar tabiiy sharoitdan farq qilib, ishlab chiqarishga bevosita aloqador, ya’ni uning xomashyo va energetika bazasini tashkil etadi».",
    sourcePage: 13
  },
  {
    id: "q5_2",
    topicId: 5,
    question: "Hozirgi vaqtda O‘zbekistonda tabiiy boyliklarning qancha qismidan foydalanilmoqda?",
    options: [
      "Faqat 10 foizidan",
      "Yarmiga yaqinidan",
      "Barcha 100 foizidan",
      "Atigi 5 foizidan"
    ],
    correctAnswer: "Yarmiga yaqinidan",
    explanation: "13-betda keltirilishicha: «Hozirda tabiiy boyliklarning yarmiga yaqinidan foydalanilmoqda. Shunday bo‘lsa-da, tabiiy boyliklar zaxirasidan tejab foydalanishimiz zarur».",
    sourcePage: 13
  },
  {
    id: "q5_3",
    topicId: 5,
    question: "Quyidagi tabiiy boyliklardan qaysi biri tiklanadigan tabiiy boylik turkumiga kiradi?",
    options: [
      "Toshko‘mir",
      "Suv va unumdor tuproq",
      "Tabiiy gaz",
      "Neft"
    ],
    correctAnswer: "Suv va unumdor tuproq",
    explanation: "14-betdagi 5-rasm va matnga ko‘ra, suv, havo, unumdor tuproq, o‘simlik va hayvonot dunyosi tugaydigan va tiklanadigan boyliklarga kiradi.",
    sourcePage: 14
  },
  {
    id: "q5_4",
    topicId: 5,
    question: "Quyidagilardan qaysi biri tugamaydigan tabiiy boylik hisoblanadi?",
    options: [
      "Quyosh va shamol energiyasi, agroiqlimiy boyliklar",
      "Oltin va mis rudalari",
      "Neft va gaz konlari",
      "Yonuvchi slaneslar"
    ],
    correctAnswer: "Quyosh va shamol energiyasi, agroiqlimiy boyliklar",
    explanation: "14-betda: «Mamlakatimiz hududi bitmas-tuganmas quyosh energiyasi boyligiga ega. Quyosh energiyasi tugamaydigan tabiiy boylikdir. Agroiqlimiy boyligi ham tugamaydigan tabiiy boylikdir» deyiladi.",
    sourcePage: 14
  },
  {
    id: "q5_5",
    topicId: 5,
    question: "Tiklanmaydigan boyliklardan (yerosti qazilmalaridan) oqilona foydalanishning asosiy shartlaridan biri nima?",
    options: [
      "Konlarni faqat yuzasini kavlab, qolganini tashlab ketish",
      "Barcha qimmatli moddalardan majmuali-mukammal foydalanish va chiqindilarni kamaytirish",
      "Faqat bitta xomashyo turini ajratib olib, qolganini daryoga oqizish",
      "Geologik qidiruv ishlarini butunlay to‘xtatish"
    ],
    correctAnswer: "Barcha qimmatli moddalardan majmuali-mukammal foydalanish va chiqindilarni kamaytirish",
    explanation: "13-betda qayd etilganidek, tiklanmaydigan boyliklardan oqilona foydalanish uchun barcha qimmatli moddalardan majmuali foydalanish va tejamkor texnologiyalarni qo‘llash zarur.",
    sourcePage: 13
  },

  // ==========================================
  // 6-DARS. TABIIY SHAROIT VA BOYLIKLARNING MILLIY IQTISODIYOTDAGI AHAMIYATI (Sahifa 15–17)
  // ==========================================
  {
    id: "q6_1",
    topicId: 6,
    question: "O‘zbekistonda dengiz sathidan 400 metr balandlikkacha bo‘lgan joylar qaysi tabiiy mintaqa hisoblanadi?",
    options: [
      "Tog‘ mintaqasi",
      "Cho‘l mintaqasi",
      "Yaylov mintaqasi",
      "Muzlik mintaqasi"
    ],
    correctAnswer: "Cho‘l mintaqasi",
    explanation: "15-betdagi qoidaga muvofiq: «O‘zbekistonda dengiz sathidan 400 metr balandlikkacha bo‘lgan joylar cho‘l mintaqasi hisoblanadi».",
    sourcePage: 15
  },
  {
    id: "q6_2",
    topicId: 6,
    question: "Respublikamizda dengiz sathidan 400 metrdan 1200 metrgacha baland bo‘lgan qism qaysi mintaqani tashkil etadi?",
    options: [
      "Adir mintaqasi",
      "Baland tog‘ yaylovi",
      "Qumli cho‘llar",
      "Dengiz sohili"
    ],
    correctAnswer: "Adir mintaqasi",
    explanation: "15-betda ta’riflanishicha: «Respublikamizda dengiz sathidan 400–1200 metrgacha baland bo‘lgan qismi adir mintaqasini tashkil etadi».",
    sourcePage: 15
  },
  {
    id: "q6_3",
    topicId: 6,
    question: "Tog‘ mintaqasi dengiz sathidan necha metrdan baland bo‘lgan joylarga to‘g‘ri keladi?",
    options: [
      "200 metrdan baland",
      "1200 metrdan baland",
      "3500 metrdan baland",
      "800 metrdan baland"
    ],
    correctAnswer: "1200 metrdan baland",
    explanation: "16-betda: «Tog‘ mintaqasi O‘zbekistonda adirdan baland joylarga, ya’ni dengiz sathidan 1200 metrdan baland bo‘lgan joylarga to‘g‘ri keladi» deb ko‘rsatilgan.",
    sourcePage: 16
  },
  {
    id: "q6_4",
    topicId: 6,
    question: "O‘zbekiston daryolaridagi yillik suvning 70–95 foizi qachon oqib o‘tadi?",
    options: [
      "Kuz oylarida",
      "Qishning qahraton kunlarida",
      "3–4 oy davomida – bahor oylariga va yoz boshiga to‘g‘ri keladi",
      "Yil davomida bir tekis taqsimlanadi"
    ],
    correctAnswer: "3–4 oy davomida – bahor oylariga va yoz boshiga to‘g‘ri keladi",
    explanation: "17-betda aytilganidek: «Daryolardagi yillik suvning 70–95 foizi 3–4 oy davomida bahor oylariga va yoz boshiga to‘g‘ri keladi. Daryo suvlari barpo etilgan suv omborlariga yig‘ilib, yil davomida tejab sarflanadi».",
    sourcePage: 17
  },
  {
    id: "q6_5",
    topicId: 6,
    question: "O‘zbekistonning umumiy yer maydoni necha million gektar va uning qancha qismi qishloq xo‘jaligiga tegishli?",
    options: [
      "20 mln gektar bo‘lib, 10% qismi",
      "44,4 mln gektar bo‘lib, qariyb yarmi qishloq xo‘jaligiga tegishli",
      "70 mln gektar bo‘lib, hammasi o‘rmon",
      "15 mln gektar bo‘lib, to‘rtdan biri"
    ],
    correctAnswer: "44,4 mln gektar bo‘lib, qariyb yarmi qishloq xo‘jaligiga tegishli",
    explanation: "17-betda: «O‘zbekistonning umumiy yer maydoni 44,4 mln gektarni tashkil etadi. Buning qariyb yarmi qishloq xo‘jaligiga tegishli maydonlardir» deb yozilgan.",
    sourcePage: 17
  },

  // ==========================================
  // 7-DARS. O‘ZBEKISTON AHOLISI (Sahifa 18–20)
  // ==========================================
  {
    id: "q7_1",
    topicId: 7,
    question: "2019-yil holatiga ko‘ra O‘zbekiston Respublikasining aholisi soni qanchadan ortgan?",
    options: [
      "25 mln kishidan",
      "33,2 mln kishidan",
      "40 mln kishidan",
      "18 mln kishidan"
    ],
    correctAnswer: "33,2 mln kishidan",
    explanation: "18-betda aniq berilgan: «O‘zbekiston Respublikasining aholisi 2019-yil 33,2 mln kishidan ortgan».",
    sourcePage: 18
  },
  {
    id: "q7_2",
    topicId: 7,
    question: "Aholining tabiiy ko‘payishi nima hisobiga ro‘y beradi?",
    options: [
      "Faqat xorijdan ko‘chib kelganlar soni hisobiga",
      "O‘lganlar soniga nisbatan tug‘ilganlar sonining ortiqligi hisobiga",
      "Faqat yangi shaharlar qurilishi hisobiga",
      "Aholining qishloqlardan shaharlarga ko‘chishi hisobiga"
    ],
    correctAnswer: "O‘lganlar soniga nisbatan tug‘ilganlar sonining ortiqligi hisobiga",
    explanation: "18-betda: «Aholi o‘lganlar soniga nisbatan tug‘ilganlar sonining ortiqligi hisobiga doimo ko‘payib boradi. Bunday ko‘payish aholining tabiiy ko‘payishi deyiladi».",
    sourcePage: 18
  },
  {
    id: "q7_3",
    topicId: 7,
    question: "Aholining mamlakatdan tashqariga ko‘chib ketishi va chetdan ko‘chib kelishi qanday ataladi?",
    options: [
      "Ko‘chib ketish – urbanizatsiya, ko‘chib kelish – aglomeratsiya",
      "Ko‘chib ketish – emigratsiya, ko‘chib kelish – immigratsiya",
      "Ko‘chib ketish – melioratsiya, ko‘chib kelish – rekultivatsiya",
      "Ko‘chib ketish – depopulyatsiya, ko‘chib kelish – regeneratsiya"
    ],
    correctAnswer: "Ko‘chib ketish – emigratsiya, ko‘chib kelish – immigratsiya",
    explanation: "18-betdagi qoidada: «Tashqi migratsiya – mamlakatdan ko‘chib ketish (emigratsiya) yoki mamlakatga ko‘chib kelish (immigratsiya)» deyilgan.",
    sourcePage: 18
  },
  {
    id: "q7_4",
    topicId: 7,
    question: "O‘zbekistonda 2016-yilda tug‘ilishda kutilgan o‘rtacha umr davomiyligi necha yoshni tashkil etdi?",
    options: [
      "66,4 yosh",
      "73,8 yosh",
      "58,2 yosh",
      "80,5 yosh"
    ],
    correctAnswer: "73,8 yosh",
    explanation: "19-betda qayd etilishicha, mamlakatimizda 2016-yil tug‘ilishda kutilgan umr davomiyligi 73,8 yoshni tashkil etgan (1991-yildagi 66,4 yoshdan sezilarli oshgan).",
    sourcePage: 19
  },
  {
    id: "q7_5",
    topicId: 7,
    question: "BMT aholishunoslik jamg‘armasi ma’lumotlariga ko‘ra (2018-y.), O‘zbekiston aholi soni bo‘yicha jahonda nechanchi o‘rinda turadi?",
    options: [
      "12-o‘rinda",
      "44-o‘rinda",
      "88-o‘rinda",
      "102-o‘rinda"
    ],
    correctAnswer: "44-o‘rinda",
    explanation: "18-betda ko‘rsatilishicha, Birlashgan Millatlar Tashkilotining aholishunoslik jamg‘armasi ma’lumotlariga ko‘ra (2018-y.) O‘zbekiston aholi soni bo‘yicha jahonda 44-o‘rinda turadi.",
    sourcePage: 18
  },

  // ==========================================
  // 8-DARS. O‘ZBEKISTON AHOLISINING TARKIBI (Sahifa 20–22)
  // ==========================================
  {
    id: "q8_1",
    topicId: 8,
    question: "O‘zbekistonda mehnat resurslariga qaysi yoshdagi fuqarolar kiritiladi?",
    options: [
      "Erkaklar va ayollar 21 yoshdan 70 yoshgacha",
      "Erkaklarning 16 yoshdan 60 yoshgacha, ayollarning 16 yoshdan 55 yoshgacha bo‘lganlari",
      "Faqat 25 yoshdan 50 yoshgacha bo‘lgan barcha aholi",
      "Faqat oliy ma’lumotga ega bo‘lgan shaxslar"
    ],
    correctAnswer: "Erkaklarning 16 yoshdan 60 yoshgacha, ayollarning 16 yoshdan 55 yoshgacha bo‘lganlari",
    explanation: "20-betda: «Erkaklarning 16 yoshdan 60 yoshgacha, ayollarning 16 yoshdan 55 yoshgacha bo‘lganlarigina mehnatga yaroqli hisoblanadi».",
    sourcePage: 20
  },
  {
    id: "q8_2",
    topicId: 8,
    question: "2017-yil ma’lumotiga ko‘ra, iqtisodiyot tarmoqlarida band aholining eng katta ulushi qaysi tarmoqqa to‘g‘ri kelgan?",
    options: [
      "Qurilishda – 9,5 %",
      "Qishloq xo‘jaligida – 27,3 %",
      "Sanoatda – 13,5 %",
      "Transportda – 4,8 %"
    ],
    correctAnswer: "Qishloq xo‘jaligida – 27,3 %",
    explanation: "21-betdagi 10-rasm diagrammasida mehnatda band aholining eng katta ulushi qishloq xo‘jaligi hissasiga (27,3 %) to‘g‘ri kelishi tasvirlangan.",
    sourcePage: 21
  },
  {
    id: "q8_3",
    topicId: 8,
    question: "1989-yilda o‘zbeklar salmog‘i mamlakat aholisining 71,5 foizini tashkil etgan bo‘lsa, 2017-yilga kelib qancha foizga yetdi?",
    options: [
      "60 foizga tushdi",
      "Qariyb 84 foizga yetdi",
      "99 foizga yetdi",
      "75 foiz atrofida qoldi"
    ],
    correctAnswer: "Qariyb 84 foizga yetdi",
    explanation: "22-betda qayd etilganidek: «O‘zbeklar salmog‘i 1989-yilda 71,5 foizni tashkil etgan bo‘lsa, 2017-yilga kelib qariyb 84 foizga yetdi».",
    sourcePage: 22
  },
  {
    id: "q8_4",
    topicId: 8,
    question: "Kishilarning mehnat faoliyati qanday ikki asosiy sohaga bo‘linadi?",
    options: [
      "Og‘ir va o‘ta yengil mehnat sohalariga",
      "Moddiy ne’mat ishlab chiqaruvchi va moddiy ne’mat ishlab chiqarmaydigan sohalarga",
      "Faqat ichki va tashqi savdo sohalariga",
      "Kunduzgi va tungi navbatchilik sohalariga"
    ],
    correctAnswer: "Moddiy ne’mat ishlab chiqaruvchi va moddiy ne’mat ishlab chiqarmaydigan sohalarga",
    explanation: "20-betdagi qoidada: «Kishilarning mehnat faoliyati ikki sohaga – moddiy ne’mat ishlab chiqaruvchi va moddiy ne’mat ishlab chiqarmaydigan sohalarga bo‘linadi».",
    sourcePage: 20
  },
  {
    id: "q8_5",
    topicId: 8,
    question: "Qonunchilikka ko‘ra necha yoshga to‘lgan o‘quvchilarga o‘qishdan bo‘sh vaqtlarida ishlashlariga ruxsat etiladi?",
    options: [
      "12 yoshga to‘lgan",
      "15 yoshga to‘lgan",
      "18 yoshga to‘lgan",
      "Faqat 20 yoshdan so‘ng"
    ],
    correctAnswer: "15 yoshga to‘lgan",
    explanation: "20-betda: «15 yoshga to‘lgan o‘quvchilar o‘qishdan bo‘sh vaqtlarida ishlashlariga ruxsat etilgan» deb yozilgan.",
    sourcePage: 20
  },

  // ==========================================
  // 9-DARS. AHOLI PUNKTLARI (Sahifa 22–26)
  // ==========================================
  {
    id: "q9_1",
    topicId: 9,
    question: "2019-yil holatiga ko‘ra O‘zbekistonda nechta shahar va shaharcha mavjud bo‘lgan?",
    options: [
      "50 ta shahar, 200 ta shaharcha",
      "119 ta shahar, 1071 ta shaharcha",
      "250 ta shahar, 500 ta shaharcha",
      "80 ta shahar, 3000 ta shaharcha"
    ],
    correctAnswer: "119 ta shahar, 1071 ta shaharcha",
    explanation: "22-betdagi ramkada: «Mamlakatimizda 119 ta shahar, 1071 ta shaharcha hamda 11 mingdan ortiq qishloq va ovul bor (2019-yil)» deb berilgan.",
    sourcePage: 22
  },
  {
    id: "q9_2",
    topicId: 9,
    question: "O‘zbekistonda aholi punkti shahar maqomini olishi uchun qanday shartlarga javob berishi lozim?",
    options: [
      "Aholisi kamida 1 ming kishi bo‘lishi va hammasi dehqon bo‘lishi",
      "Aholisi 7 ming va undan ko‘p bo‘lishi, aholining 2/3 qismi ishchi va xizmatchilar hamda ularning oilalaridan iborat bo‘lishi",
      "Faqat metro bekatiga ega bo‘lishi",
      "Kamida 100 ming aholiga ega bo‘lishi"
    ],
    correctAnswer: "Aholisi 7 ming va undan ko‘p bo‘lishi, aholining 2/3 qismi ishchi va xizmatchilar hamda ularning oilalaridan iborat bo‘lishi",
    explanation: "24-betda: «O‘zbekistonda aholi punkti shahar maqomini olishi uchun uning aholisi 7 ming va undan ko‘p bo‘lishi, yashayotgan aholining 2/3 qismi ishchi va xizmatchilar hamda ularning oilalaridan iborat bo‘lishi kerak».",
    sourcePage: 24
  },
  {
    id: "q9_3",
    topicId: 9,
    question: "Shaharlar aholi soniga ko‘ra «yirik shaharlar» toifasiga qachon kiritiladi?",
    options: [
      "Aholisi 50 mingdan ortiq bo‘lganda",
      "Aholisi 100 mingdan ortiq bo‘lganda",
      "Aholisi 250 mingdan ortiq bo‘lganda",
      "Aholisi 1 milliondan oshganda"
    ],
    correctAnswer: "Aholisi 250 mingdan ortiq bo‘lganda",
    explanation: "23-betda shaharlar tasnifi berilgan: katta shaharlar – 100 mingdan ortiq; yirik shaharlar – 250 mingdan ortiq; juda yirik shaharlar – 500 mingdan ortiq; millioner shaharlar – 1 mln dan ortiq.",
    sourcePage: 23
  },
  {
    id: "q9_4",
    topicId: 9,
    question: "Sanoat korxonalari va stansiyalar yaqinidagi aholi punktlari shaharcha turkumiga kiritilishi uchun odatda kamida qancha aholiga ega bo‘lishi kerak?",
    options: [
      "Kamida 500 kishi",
      "Kamida 2 ming kishi",
      "Kamida 20 ming kishi",
      "Kamida 50 ming kishi"
    ],
    correctAnswer: "Kamida 2 ming kishi",
    explanation: "24-betda: «Shaharchalar turkumiga sanoat korxonalari, qurilishlar... yaqinida joylashgan hamda qoida tariqasida kamida 2 ming aholisi bo‘lgan aholi punktlari kiritilishi mumkin».",
    sourcePage: 24
  },
  {
    id: "q9_5",
    topicId: 9,
    question: "Shaharlarni rejalashtirishda kishilarning turar joyi bilan ish joyi orasi qancha masofadan uzoq bo‘lmasligi tavsiya etiladi?",
    options: [
      "1–2 km dan",
      "4–5 km dan",
      "15–20 km dan",
      "25–30 km dan"
    ],
    correctAnswer: "4–5 km dan",
    explanation: "25-betda ko‘rsatilishicha: «shaharlarni rejalashtirishda kishilarning turar joyi bilan ish joyi orasi 4–5 km dan uzoq bo‘lmasligi» e’tiborga olinadi.",
    sourcePage: 25
  },

  // ==========================================
  // 10-DARS. MILLIY IQTISODIYOTNING TUZILISHI (Sahifa 27–29)
  // ==========================================
  {
    id: "q10_1",
    topicId: 10,
    question: "O‘zbekiston mustaqillikka erishgach, iqtisodiyotni rivojlantirishning necha asosiy tamoyilini o‘z ichiga olgan taraqqiyot yo‘lini tanladi?",
    options: [
      "3 ta tamoyil",
      "5 ta tamoyil",
      "7 ta tamoyil",
      "10 ta tamoyil"
    ],
    correctAnswer: "5 ta tamoyil",
    explanation: "27–28-betlarda O‘zbekiston iqtisodiyotini rivojlantirishning 5 tamoyili batafsil keltirilgan (iqtisodning siyosatdan ustunligi, davlat bosh islohotchi, qonun ustuvorligi, kuchli ijtimoiy siyosat, bosqichma-bosqichlik).",
    sourcePage: 27
  },
  {
    id: "q10_2",
    topicId: 10,
    question: "2018-yilda yalpi ichki mahsulot tarkibida sanoatning ulushi qancha foizdan ziyodni tashkil etdi?",
    options: [
      "14,2 foiz",
      "30,6 foiz",
      "50,0 foiz",
      "8,5 foiz"
    ],
    correctAnswer: "30,6 foiz",
    explanation: "28-betda: «yalpi ichki mahsulot tarkibida sanoatning ulushi 30,6 foizdan ziyodni tashkil etmoqda (2018-y.). Holbuki, bu ko‘rsatkich 2000-yilda 14,2 foizdan iborat edi».",
    sourcePage: 28
  },
  {
    id: "q10_3",
    topicId: 10,
    question: "Ekstensiv xo‘jalik yuritish nima?",
    options: [
      "Faqat nanotexnologiyalarga asoslangan ishlab chiqarish",
      "Ishlab chiqarishni fan-texnika yutuqlari o‘rniga tabiiy boyliklarni jadal o‘zlashtirish hisobiga yuksaltirish usuli",
      "Xomashyoni tejab, chiqindisiz ishlab chiqarish",
      "Barcha korxonalarni robotlashtirish"
    ],
    correctAnswer: "Ishlab chiqarishni fan-texnika yutuqlari o‘rniga tabiiy boyliklarni jadal o‘zlashtirish hisobiga yuksaltirish usuli",
    explanation: "29-betda berilgan ta’rifga ko‘ra, ekstensiv xo‘jalik yuritish – fan-texnika yutuqlari va zamonaviy mexanizatsiya o‘rniga tabiiy boyliklarni (yer, suv) jadal o‘zlashtirish hisobiga ishlab chiqarishni kengaytirish usulidir.",
    sourcePage: 29
  },
  {
    id: "q10_4",
    topicId: 10,
    question: "Intensiv xo‘jalik yuritish usuli qanday afzalliklarga ega?",
    options: [
      "Faqat ekin maydonlarini kengaytirib, ko‘p suv sarflaydi",
      "Fan va texnika yutuqlarini tezkor joriy etib, boyliklarni tejaydi va chiqindisiz to‘liq foydalanishni ta’minlaydi",
      "Xorijiy texnologiyalardan butunlay voz kechadi",
      "Qishloq xo‘jaligida qo‘l mehnatini ko‘paytiradi"
    ],
    correctAnswer: "Fan va texnika yutuqlarini tezkor joriy etib, boyliklarni tejaydi va chiqindisiz to‘liq foydalanishni ta’minlaydi",
    explanation: "29-betda: «Intensiv xo‘jalik yuritish – fan va texnika yutuqlarini iqtisodiyotga tezkor joriy etuvchi, xomashyo va boyliklarni tejab-tergab, chiqindi chiqarmay to‘liq foydalanish usuli».",
    sourcePage: 29
  },
  {
    id: "q10_5",
    topicId: 10,
    question: "O‘zbekiston Respublikasini rivojlantirishning beshta ustuvor yo‘nalishi bo‘yicha Harakatlar strategiyasi qaysi yillarga mo‘ljallangan edi?",
    options: [
      "2000–2005-yillarda",
      "2017–2021-yillarda",
      "1991–1995-yillarda",
      "2022–2026-yillarda"
    ],
    correctAnswer: "2017–2021-yillarda",
    explanation: "28-betda ko‘rsatilganidek, mamlakatimizda 2017–2021-yillarda O‘zbekiston Respublikasini rivojlantirishning beshta ustuvor yo‘nalishi bo‘yicha Harakatlar strategiyasi qabul qilingan.",
    sourcePage: 28
  },

  // ==========================================
  // 11-DARS. SANOAT – TAYANCH TARMOQ (Sahifa 30–32)
  // ==========================================
  {
    id: "q11_1",
    topicId: 11,
    question: "Tayyor mahsulot tayyorlashda bir qancha korxona qatnashadigan ishlab chiqarish shakli nima deyiladi?",
    options: [
      "Ixtisoslashuv",
      "Kooperativlashuv (hamkorlik)",
      "Markazlashuv",
      "Konversiya"
    ],
    correctAnswer: "Kooperativlashuv (hamkorlik)",
    explanation: "32-betda: «Kooperativlashuv (hamkorlik) – tayyor mahsulot tayyorlashda bir qancha korxona qatnashadigan ishlab chiqarish shakli» deyilgan.",
    sourcePage: 32
  },
  {
    id: "q11_2",
    topicId: 11,
    question: "Ishlab chiqarishning yirik korxonalarda to‘planishi qanday ataladi?",
    options: [
      "Ishlab chiqarishning markazlashuvi",
      "Ixtisoslashuv",
      "Standartlashtirish",
      "Unifikatsiya"
    ],
    correctAnswer: "Ishlab chiqarishning markazlashuvi",
    explanation: "31-betda: «Ishlab chiqarishning markazlashuvi – ishlab chiqarishning yirik korxonalarda to‘planishi» deb qayd etilgan.",
    sourcePage: 31
  },
  {
    id: "q11_3",
    topicId: 11,
    question: "Ishlab chiqarishning asosan bir xil mahsulot chiqaradigan tashkiliy shakli vujudga kelishi nima deb ataladi?",
    options: [
      "Kooperatsiya",
      "Ixtisoslashuv",
      "Aglomeratsiya",
      "Integratsiya"
    ],
    correctAnswer: "Ixtisoslashuv",
    explanation: "32-betda ko‘rsatilishicha, ixtisoslashuv – ishlab chiqarishning asosan bir xil mahsulot chiqaradigan tashkiliy shaklidir.",
    sourcePage: 32
  },
  {
    id: "q11_4",
    topicId: 11,
    question: "Tayanch korxona doirasida o‘nlab mayda korxonalar ishlab chiqarish bo‘yicha o‘zaro aloqador bo‘lishi nima deyiladi?",
    options: [
      "Yakka tartibdagi ustaxona",
      "Ishlab chiqarishning kombinat shakli",
      "Eksport zonalari",
      "Faqat savdo yarmarkasi"
    ],
    correctAnswer: "Ishlab chiqarishning kombinat shakli",
    explanation: "31-betda: «Ularning har biriga xos tayanch korxona doirasida o‘nlab mayda korxonalar ishlab chiqarish bo‘yicha aloqador bo‘ladi. Buni ishlab chiqarishning kombinat shakli deyiladi».",
    sourcePage: 31
  },
  {
    id: "q11_5",
    topicId: 11,
    question: "Ishlab chiqarish jarayoni o‘zaro bog‘langan tarmoqlardan tashkil topgan, iqtisodiy samaradorlikka qaratilgan shakl nima deb ataladi?",
    options: [
      "Sanoat bloki",
      "Tarmoqlararo majmua (majmua)",
      "Bojxona hududi",
      "Fermer ittifoqi"
    ],
    correctAnswer: "Tarmoqlararo majmua (majmua)",
    explanation: "32-betda: «Majmua – ishlab chiqarishni tashkil etishning iqtisodiy samaradorlikka qaratilgan muhim shakli. Ishlab chiqarish jarayoni o‘zaro bog‘langan tarmoqlardan tarmoqlararo majmualar tarkib topadi».",
    sourcePage: 32
  },

  // ==========================================
  // 12-DARS. YOQILG‘I-ENERGETIKA MAJMUASI (Sahifa 33–34)
  // ==========================================
  {
    id: "q12_1",
    topicId: 12,
    question: "Yoqilg‘i-energetika majmuasiga qaysi asosiy sohalar kiradi?",
    options: [
      "To‘qimachilik va tikuvchilik",
      "Yoqilg‘i sanoati va elektr energetika sanoati",
      "Qurilish va mebel sanoati",
      "Faqat avtomobilsozlik"
    ],
    correctAnswer: "Yoqilg‘i sanoati va elektr energetika sanoati",
    explanation: "33-betda: «Bu majmuaga yoqilg‘i (yoqilg‘ini qazib olish va unga ishlov berish) va elektr energetika sanoatlari kiradi».",
    sourcePage: 33
  },
  {
    id: "q12_2",
    topicId: 12,
    question: "Shartli yoqilg‘i deb nimaga aytiladi?",
    options: [
      "1 litr benzin yonishidan chiqqan tutunga",
      "1 kg toshko‘mir yonganda hosil bo‘ladigan (7 mln kal) energiyaga",
      "1 kub metr gazning haroratiga",
      "Quyosh batareyasining 1 soatlik quvvatiga"
    ],
    correctAnswer: "1 kg toshko‘mir yonganda hosil bo‘ladigan (7 mln kal) energiyaga",
    explanation: "33-betdagi ta’rif: «Shartli yoqilg‘i deb 1 kg toshko‘mir yonganda hosil bo‘ladigan (7 mln kal) energiyaga aytiladi. Uning issiqlik koeffitsiyent darajasi 1 ga teng».",
    sourcePage: 33
  },
  {
    id: "q12_3",
    topicId: 12,
    question: "Tabiiy gaz va neftning issiqlik koeffitsiyenti qanchaga teng?",
    options: [
      "0,34 ga",
      "1,0 ga",
      "1,5 ga",
      "2,5 ga"
    ],
    correctAnswer: "1,5 ga",
    explanation: "34-betdagi 22-rasm jadvalida tabiiy gaz va neftning issiqlik koeffitsiyenti 1,5 ga teng ekanligi ko‘rsatilgan (1 kg yoqilg‘i yonganda 10,6 mln kal chiqaradi).",
    sourcePage: 34
  },
  {
    id: "q12_4",
    topicId: 12,
    question: "Issiqligi kam bo‘lgani sababli uzoq masofaga tashilsa tannarxi qimmatlashadigan mahalliy yoqilg‘ilar qaysilar?",
    options: [
      "Tabiiy gaz va benzin",
      "Torf, slanes va qo‘ng‘ir ko‘mir",
      "Uran va quyosh nuri",
      "Kerosin va mazut"
    ],
    correctAnswer: "Torf, slanes va qo‘ng‘ir ko‘mir",
    explanation: "33-betda aytilganidek, issiqligi (kaloriyasi) kam bo‘lgan yoqilg‘ilar (torf, slanes, qo‘ng‘ir ko‘mir) uzoqqa tashilganda tannarxi qimmatlashgani sababli mahalliy yoqilg‘i hisoblanadi va qazib olingan joyda ishlatiladi.",
    sourcePage: 33
  },
  {
    id: "q12_5",
    topicId: 12,
    question: "Turli xil yoqilg‘ilarni qazib chiqarish va hosil qilingan energiya (kirim) hamda ulardan foydalanish (sarf) nisbati nima deyiladi?",
    options: [
      "Tabiat balansi",
      "Yoqilg‘i-energetika balansi",
      "Savdo aylanmasi",
      "Tannarx koeffitsiyenti"
    ],
    correctAnswer: "Yoqilg‘i-energetika balansi",
    explanation: "34-betda: «Turli xil yoqilg‘ilarni qazib chiqarish va ishlab chiqarilgan energiya (kirim) hamda ulardan iqtisodiyotda foydalanish (sarf qilish) nisbati yoqilg‘i-energetika balansi deyiladi».",
    sourcePage: 34
  },

  // ==========================================
  // 13-DARS. NEFT VA GAZ SANOATI (Sahifa 35–37)
  // ==========================================
  {
    id: "q13_1",
    topicId: 13,
    question: "OPECning rasmiy ma’lumotlariga ko‘ra (2017-y.), O‘zbekiston tabiiy gaz qazib oluvchi davlatlar reytingida nechanchi o‘rinni egallaydi?",
    options: [
      "1-o‘rinni",
      "5-o‘rinni",
      "14-o‘rinni",
      "30-o‘rinni"
    ],
    correctAnswer: "14-o‘rinni",
    explanation: "35-betdagi 24-rasm jadvali va matnida O‘zbekiston tabiiy gaz qazib olish bo‘yicha jahonda 14-o‘rinda turishi keltirilgan.",
    sourcePage: 35
  },
  {
    id: "q13_2",
    topicId: 13,
    question: "Neft qazib olishning eng arzon usuli qaysi bo‘lib, bunda neft kondagi tabiiy bosim tufayli otilib chiqadi?",
    options: [
      "Nasos usuli",
      "Fontan usuli",
      "Karyer usuli",
      "Shaxta usuli"
    ],
    correctAnswer: "Fontan usuli",
    explanation: "36-betda: «Neft qazib olishning eng arzon usuli fontan usuli bo‘lib, bunda neft quduqlardan kondagi bosim tufayli otilib chiqadi».",
    sourcePage: 36
  },
  {
    id: "q13_3",
    topicId: 13,
    question: "Neftni quvurlar orqali yuborish temiryo‘lda tashishga nisbatan necha barobar arzonga tushadi?",
    options: [
      "2 barobar",
      "4 barobar",
      "10 barobar",
      "Hech qanday farq qilmaydi"
    ],
    correctAnswer: "4 barobar",
    explanation: "36-betda: «neftni ham quvurlar orqali yuborish uni tashishning eng arzon va xavfsiz usulidir (temiryo‘lda tashishga nisbatan 4 barobar arzonga tushadi)».",
    sourcePage: 36
  },
  {
    id: "q13_4",
    topicId: 13,
    question: "1992-yilda Namangan viloyatida qaysi mashhur neft koni ochildi?",
    options: [
      "Gazli koni",
      "Mingbuloq neft koni",
      "Sho‘rtan koni",
      "Muborak koni"
    ],
    correctAnswer: "Mingbuloq neft koni",
    explanation: "37-betda: «Jumladan, 1992-yilda Namangan viloyatida Mingbuloq neft koni ochildi» deb yozilgan.",
    sourcePage: 37
  },
  {
    id: "q13_5",
    topicId: 13,
    question: "Buxoro viloyatida qurilgan va 1997-yildan mahsulot bera boshlagan neftni qayta ishlash zavodi yiliga qancha neftni qayta ishlash quvvatiga ega?",
    options: [
      "1 mln tonna",
      "5 mln tonna",
      "15 mln tonna",
      "25 mln tonna"
    ],
    correctAnswer: "5 mln tonna",
    explanation: "37-betda qayd etilishicha, Buxoro viloyatida yiliga 5 mln tonna neftni qayta ishlay oladigan zavod qurilib, 1997-yildan mahsulot bera boshlagan.",
    sourcePage: 37
  },

  // ==========================================
  // 14-DARS. KO‘MIR SANOATI (Sahifa 38–39)
  // ==========================================
  {
    id: "q14_1",
    topicId: 14,
    question: "O‘zbekistondagi ko‘mir zaxiralari qancha va dastlabki ko‘mir 1950-yillarda qaysi kondan qazib olingan?",
    options: [
      "10 mlrd tonna, Sharg‘un konidan",
      "2 mlrd tonna, Angren konidan",
      "500 mln tonna, Boysun konidan",
      "50 mlrd tonna, Olmaliq konidan"
    ],
    correctAnswer: "2 mlrd tonna, Angren konidan",
    explanation: "38-betda: «Ulardagi ko‘mir zaxirasi 2 mlrd tonnani tashkil etadi. Dastlabki ko‘mir Angren konidan 1950-yillarda qazib olingan».",
    sourcePage: 38
  },
  {
    id: "q14_2",
    topicId: 14,
    question: "Angren konida ko‘mirning qancha qismi ochiq usulda qazib olinadi?",
    options: [
      "1/2 qismi",
      "9/10 qismi",
      "1/4 qismi",
      "Hammasi yerosti shaxta usulida"
    ],
    correctAnswer: "9/10 qismi",
    explanation: "38-betda: «Unda ko‘mirning 9/10 qismini ochiq usulda qazib olinmoqda (27-rasm)».",
    sourcePage: 38
  },
  {
    id: "q14_3",
    topicId: 14,
    question: "Ko‘mir qazib olish natijasida buzilgan, chiqindilar to‘plangan yer maydonlarini qayta tiklash jarayoni nima deyiladi?",
    options: [
      "Melioratsiya",
      "Rekultivatsiya",
      "Degradatsiya",
      "Urbanizatsiya"
    ],
    correctAnswer: "Rekultivatsiya",
    explanation: "38-betda: «ko‘mir sanoatidan zavol ko‘rgan maydonlar rekultivatsiya qilinmoqda, ya’ni qayta tiklanmoqda... tepaliklarni o‘simliklar bilan qoplash choralari ko‘rilmoqda».",
    sourcePage: 38
  },
  {
    id: "q14_4",
    topicId: 14,
    question: "Mamlakatimizda qazib olinayotgan ko‘mirning necha foizi qo‘ng‘ir ko‘mir hisoblanadi?",
    options: [
      "50 foizi",
      "75,5 foizi",
      "97,4 foizi",
      "20 foizi"
    ],
    correctAnswer: "97,4 foizi",
    explanation: "39-betda yozilganidek: «Mamlakatimizda qazib olinayotgan ko‘mirning deyarli hammasi (97,4 foizi) qo‘ng‘ir ko‘mir, qolgan qismi toshko‘mirdir».",
    sourcePage: 39
  },
  {
    id: "q14_5",
    topicId: 14,
    question: "Surxondaryo viloyatining qaysi tumanidagi Sharg‘un konida shaxta usulida yuqori sifatli toshko‘mir qazib olinadi?",
    options: [
      "Termiz tumanida",
      "Sariosiyo tumanida",
      "Sherobod tumanida",
      "Muzrabot tumanida"
    ],
    correctAnswer: "Sariosiyo tumanida",
    explanation: "38-betda: «Surxondaryo viloyatining Sariosiyo tumanida 1950-yili Sharg‘un ko‘mir koni ishga tushirilgan. Kondagi ko‘mir yuqori sifatli toshko‘mir bo‘lib, shaxta usulida qazib olinadi».",
    sourcePage: 38
  },

  // ==========================================
  // 15-DARS. ELEKTROENERGETIKA (Sahifa 40–44)
  // ==========================================
  {
    id: "q15_1",
    topicId: 15,
    question: "O‘zbekistonda ishlab chiqarilayotgan elektr energiyasining qancha qismini issiqlik elektrostansiyalari (IES) beradi?",
    options: [
      "50 foizini",
      "90 foiziga yaqinini",
      "30 foizini",
      "Atigi 10 foizini"
    ],
    correctAnswer: "90 foiziga yaqinini",
    explanation: "40-betdagi ta’kid: «Mamlakatda ishlab chiqarilayotgan elektr energiyasining 90 foiziga yaqinini issiqlik elektrostansiya (IES)lari bermoqda».",
    sourcePage: 40
  },
  {
    id: "q15_2",
    topicId: 15,
    question: "Birgina Sirdaryo IESning o‘zi yiliga qancha elektr energiya ishlab chiqaradi?",
    options: [
      "2 mlrd kW·h",
      "5 mlrd kW·h",
      "13 mlrd kW·h",
      "60 mlrd kW·h"
    ],
    correctAnswer: "13 mlrd kW·h",
    explanation: "41-betda: «Birgina Sirdaryo IESning o‘zi yiliga 13 mlrd kW·h elektr energiya beradi» deb yozilgan.",
    sourcePage: 41
  },
  {
    id: "q15_3",
    topicId: 15,
    question: "O‘zbekistonda birinchi GES qachon va qayerda qurilgan?",
    options: [
      "1910-yili Amudaryoda",
      "1926-yili Bo‘zsuv kanalida",
      "1950-yili Zarafshonda",
      "1991-yili Sirdaryoda"
    ],
    correctAnswer: "1926-yili Bo‘zsuv kanalida",
    explanation: "42-betda ko‘rsatilganidek, mamlakatimizda birinchi GES 1926-yili Bo‘zsuv kanalida qurildi.",
    sourcePage: 42
  },
  {
    id: "q15_4",
    topicId: 15,
    question: "Bir vaqtda ham elektr, ham issiqlik energiyasi ishlab chiqaradigan stansiya nima deb ataladi?",
    options: [
      "Gidrouzel",
      "Issiqlik elektr markazi (IEM)",
      "Atom reaktori",
      "Transformator punkti"
    ],
    correctAnswer: "Issiqlik elektr markazi (IEM)",
    explanation: "41-betda: «Bir vaqtda issiqlik energiyasi ham ishlab chiqaradigan elektr stansiya issiqlik elektr markazi (IEM) deb ataladi». Farg‘ona, Muborak va Toshkentda IEMlar bor.",
    sourcePage: 41
  },
  {
    id: "q15_5",
    topicId: 15,
    question: "Turli xildagi elektr stansiyalarning yuqori voltli liniyalar bilan birlashtirilib, bir markazdan boshqarib turilishi nima deyiladi?",
    options: [
      "Transformator tarmog‘i",
      "Energetika tizimi",
      "Kaskad to‘g‘oni",
      "Gidroakkumulyator"
    ],
    correctAnswer: "Energetika tizimi",
    explanation: "44-betdagi qoidada: «Turli xildagi elektr stansiyalarning yuqori voltli elektr uzatish liniyalari bilan birlashtirilib, bir markazdan boshqarib turilishi energetika tizimi deyiladi».",
    sourcePage: 44
  },

  // ==========================================
  // 16-DARS. KIMYO SANOATI (Sahifa 45–47)
  // ==========================================
  {
    id: "q16_1",
    topicId: 16,
    question: "O‘zbekistonda kimyo sanoatining shakllanishi 1932-yilda qaysi konning ishga tushirilishi bilan boshlandi?",
    options: [
      "Gazli tabiiy gaz koni",
      "Sho‘rsuv oltingugurt koni",
      "Qizilqum fosforit koni",
      "Muruntov oltin koni"
    ],
    correctAnswer: "Sho‘rsuv oltingugurt koni",
    explanation: "45-betda yozilgan: «O‘zbekistonda kimyo sanoatining shakllanishi 1932-yilda Sho‘rsuv oltingugurt koni ishga tushirilishi bilan boshlandi».",
    sourcePage: 45
  },
  {
    id: "q16_2",
    topicId: 16,
    question: "Kimyo sanoatining yirik korxonasi – Chirchiq elektr-kimyo kombinati qaysi yili ishga tushgan?",
    options: [
      "1920-yilda",
      "1940-yilda",
      "1965-yilda",
      "1991-yilda"
    ],
    correctAnswer: "1940-yilda",
    explanation: "46-betda: «Kimyo sanoatining yirik korxonasi – Chirchiq elektr-kimyo kombinati 1940-yilda ishga tushgan».",
    sourcePage: 46
  },
  {
    id: "q16_3",
    topicId: 16,
    question: "Sanoatning texnologik jarayon jihatidan o‘zaro bog‘langan bir qancha ishlab chiqarish korxonalarining bitta korxonaga birlashtirilishi nima deyiladi?",
    options: [
      "Standartlashtirish",
      "Kombinatlashtirish",
      "Monopolizatsiya",
      "Konsultatsiya"
    ],
    correctAnswer: "Kombinatlashtirish",
    explanation: "46-betdagi ramkada: «Kombinatlashtirish – sanoatning texnologik jarayon jihatidan o‘zaro bog‘langan, ba’zan turli tarmoqlarga taalluqli bo‘lgan bir qancha ishlab chiqarish korxonalarining bir korxonaga birlashtirilishidir».",
    sourcePage: 46
  },
  {
    id: "q16_4",
    topicId: 16,
    question: "1998-yilda ishga tushirilgan Qizilqum fosforit kombinatida yiliga qancha fosforit konsentrati olinadi?",
    options: [
      "500 ming tonna",
      "2,7 million tonna",
      "10 million tonna",
      "100 ming tonna"
    ],
    correctAnswer: "2,7 million tonna",
    explanation: "46-betda: «1998-yilda Qizilqum fosforit kombinati ishga tushirildi. Unda 2,7 million tonna fosforit konsentrati olinadi».",
    sourcePage: 46
  },
  {
    id: "q16_5",
    topicId: 16,
    question: "Sho‘rtan kabi konlardan olinadigan gaz kondensatining har bir tonnasidan qancha motor yoqilg‘isi va sintetik tola olish mumkin?",
    options: [
      "10 kg motor yoqilg‘isi, 10 kg tola",
      "400 kg motor yoqilg‘isi, 150 kg sintetik tola",
      "900 kg motor yoqilg‘isi, 5 kg tola",
      "Faqat 50 kg benzin"
    ],
    correctAnswer: "400 kg motor yoqilg‘isi, 150 kg sintetik tola",
    explanation: "47-betda ko‘rsatilgan: gaz kondensatining har tonnasidan 50 kg sun’iy kauchuk, 150 kg plastik massa, 150 kg sun’iy tola, 100 kg erituvchi va 400 kg motor yoqilg‘isi olish mumkin.",
    sourcePage: 47
  },

  // ==========================================
  // 17-DARS. QORA METALLURGIYA (Sahifa 48–50)
  // ==========================================
  {
    id: "q17_1",
    topicId: 17,
    question: "Qora metallurgiya qanday asosiy jarayonlarni o‘zida birlashtiradi?",
    options: [
      "Faqat oltin va kumush zargarlik buyumlarini yasashni",
      "Temir rudasi qazib chiqarish, cho‘yan, po‘lat eritish, prokat va ferroqotishmalar ishlab chiqarishni",
      "Faqat alyuminiy simlar tortishni",
      "Faqat sement va g‘isht ishlab chiqarishni"
    ],
    correctAnswer: "Temir rudasi qazib chiqarish, cho‘yan, po‘lat eritish, prokat va ferroqotishmalar ishlab chiqarishni",
    explanation: "48-betdagi ta’rif: «Qora metallurgiya – temir rudasi qazib chiqarish, cho‘yan, po‘lat eritish, prokat va ferroqotishmalar ishlab chiqarishdan iborat».",
    sourcePage: 48
  },
  {
    id: "q17_2",
    topicId: 17,
    question: "O‘zbekistonda birinchi qora metallurgiya korxonasi – Bekobod metallurgiya zavodi qaysi yilda ishga tushirilgan?",
    options: [
      "1924-yilda",
      "1946-yilda",
      "1970-yilda",
      "1991-yilda"
    ],
    correctAnswer: "1946-yilda",
    explanation: "49-betda aytilgan: «Birinchi metallurgiya korxonasi – Bekobod metallurgiya zavodi 1946-yilda ishga tushirilgan».",
    sourcePage: 49
  },
  {
    id: "q17_3",
    topicId: 17,
    question: "Metallurgiya kombinatlarini joylashtirishning eng muhim sharti nimadan iborat?",
    options: [
      "Faqat aholi kam yashaydigan cho‘l markazida qurilishi",
      "Xomashyo yoki yoqilg‘i bazalari yaqinida, ba’zan ular oralig‘ida qurilishi",
      "Faqat daryolarning boshlanish qismida joylashishi",
      "Faqat xorijiy davlatlar chegarasiga yaqin bo‘lishi"
    ],
    correctAnswer: "Xomashyo yoki yoqilg‘i bazalari yaqinida, ba’zan ular oralig‘ida qurilishi",
    explanation: "49-betdagi qoidada: «Metallurgiya kombinatlari ko‘p miqdorda xomashyo va yoqilg‘i ishlatadi. Shu sababli ular xomashyo yoki yoqilg‘i bazalari yaqinida, ba’zan ular oralig‘ida quriladi. Bu korxonani joylashtirishning eng muhim shartidir».",
    sourcePage: 49
  },
  {
    id: "q17_4",
    topicId: 17,
    question: "Bekobod metallurgiya zavodida metall eritishda xomashyo o‘rnida asosan nimadan foydalaniladi?",
    options: [
      "Faqat chetdan keltirilgan toza temir qumidan",
      "Temir-tersakdan (metallomdan)",
      "Mis rudasidan",
      "Qo‘rg‘oshin konsentratidan"
    ],
    correctAnswer: "Temir-tersakdan (metallomdan)",
    explanation: "49-bet va 113-betda qayd etilishicha, Bekobod metallurgiya zavodida xomashyo o‘rnida respublika bo‘yicha yig‘ilgan temir-tersak (metallolom)dan foydalaniladi.",
    sourcePage: 49
  },
  {
    id: "q17_5",
    topicId: 17,
    question: "Toshkentda yangi barpo etilgan Toshkent metallurgiya zavodining umumiy maydoni qancha va unda qanday mahsulotlar ishlab chiqariladi?",
    options: [
      "Maydoni 10 gektar bo‘lib, faqat mix ishlab chiqaradi",
      "Maydoni 100 gektar bo‘lib, avtomobillarga kuzov uchun metall listlar, metall cherepitsalar va maishiy texnikalar uchun metall listlar tayyorlanadi",
      "Maydoni 500 gektar bo‘lib, faqat cho‘yan quvur quyadi",
      "Maydoni 5 gektar bo‘lib, faqat zargarlik buyumlari yasaydi"
    ],
    correctAnswer: "Maydoni 100 gektar bo‘lib, avtomobillarga kuzov uchun metall listlar, metall cherepitsalar va maishiy texnikalar uchun metall listlar tayyorlanadi",
    explanation: "50-betda: Toshkent metallurgiya zavodining umumiy yer maydoni 100 gektar bo‘lib, avtomobillarga kuzov ishlab chiqarish uchun metall listlar, qurilish metall cherepitsalari va maishiy texnikalar uchun listlar tayyorlanadi.",
    sourcePage: 50
  }
];
