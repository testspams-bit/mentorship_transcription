import { AudioSegment } from '../types/audio';

export const PRELOADED_SEGMENTS: AudioSegment[] = [
  {
    id: 'seg-01',
    primaryTag: "#test anxiety",
    serialNumber: '01_00',
    rawFilename: '01_00-00-00_to_00-03-00_Introduction_and_Test_Anxiety.mp3',
    startTime: '00:00',
    endTime: '03:00',
    startSeconds: 0,
    endSeconds: 180,
    durationFormatted: '03:00',
    label: 'Introduction_and_Test_Anxiety',
    title: 'Introduction & Test Anxiety (OMR vs CBT Mistakes)',
    subject: 'Exam Strategy',
    tags: ['OMR', 'CBT', 'Test Mistakes'],
    summary: '',
    keyTakeaways: [],
    fullTranscriptText: `[00:00 - 00:30] Ghanta fix matlab do minute aur bhi extra hi hai to aapka chaaloo hota hai. Aapko jo bhi doubt poochhana hai aap puchh lo. Main apni screen band kar raha hoon aur audio band kar raha hoon. Main idhar rahoonga agar aapko koi issue aata hai technical glitch aata hai to aap bata dena hai right? Ok brother. Ok aayush? Thik hai. Chalo continue karen?

[00:30 - 01:00] Not going on that your topic of facing but mostly mere andar ek fear hai ki with time jab syllabus aage badhega ki jo jo nai chizen aati jaengi to main puraani se sustain kar nahin pa raha hoon. Jaise mera first aur second test tha mainne bahut pahli pahli baar OMR mein like aise diya tha to mistakes hui thi filling mein. Uske kaaran thoda marks kama lekin third vaale mein mainne kaaphi had tak come back kar liya tha like mere aate 4 30 4 39 marks aae the out of 7 20.

[01:00 - 01:30] To mujhe laga haan chalo abhi mainne kuchh karke manage kar liya lekin jab vaapas agla test hua to phir aur jo bhi CBT par hua tha to mera ek drawback aaya. Iska main factor samajh nahin pa raha hoon. Chizen main sab padhata hoon, concepts laga paata hoon lekin specific CBT ko lekar mere ko problem face karne padi thi vahaan par.

[01:30 - 02:00] Pahla OMR galat hua tha phir vah time ke saath sahi ho gaya. To CBT bhi vaisa hi hai ki time ke saath tum usmen improve kar jaoge. To uski zyaada tension lene ki to zaroorat nahin hai tumko.

[02:00 - 02:30] Yah mere ko samajh nahin aa raha hai yah mera fear factor hai ya I don't know what is it. Us paper ka difficulty kaisa tha? Paper ka difficulty jaisa bol rahe ho uske hisaab se to ki haan normal hi tha itna kuchh zyaada hard nahin tha. Har subject mein do chaar question the hard itna to kuchh hard nahin tha lekin overall vahi hai ki hamaari jo poore hamaara jo poora batch hai dropper vaala leader batch uske andar ek 33 percent bachche hi unke jo criteria hota hai na passing ka.

[02:30 - 03:00] Haan. Uske aas paas the ya cross kar chuke the. Mostly bachche drop mein hi hai, matlab bilkul niche hi aa rakhe the. Chemistry mein bhi like expected tha ki 0ag one 20 ke oopar, 1 20 around van jaana chaahie. Mera 93 bana aur like mostly class ka 80 ke aas paas hi van raha tha. Phir to paper thoda hard hoga shaayad.`,
    transcriptLines: [
      { start: '00:00', end: '00:30', startSec: 0, endSec: 30, speaker: 'Coordinator', text: 'Ghanta fix matlab do minute aur bhi extra hi hai to aapka chaaloo hota hai. Aapko jo bhi doubt poochhana hai aap puchh lo. Main apni screen band kar raha hoon aur audio band kar raha hoon. Main idhar rahoonga agar aapko koi issue aata hai technical glitch aata hai to aap bata dena hai right? Ok brother. Ok aayush? Thik hai. Chalo continue karen?' },
      { start: '00:30', end: '01:00', startSec: 30, endSec: 60, speaker: 'Dhruv', text: 'Not going on that your topic of facing but mostly mere andar ek fear hai ki with time jab syllabus aage badhega ki jo jo nai chizen aati jaengi to main puraani se sustain kar nahin pa raha hoon. Jaise mera first aur second test tha mainne bahut pahli pahli baar OMR mein like aise diya tha to mistakes hui thi filling mein. Uske kaaran thoda marks kama lekin third vaale mein mainne kaaphi had tak come back kar liya tha like mere aate 4 30 4 39 marks aae the out of 7 20.' },
      { start: '01:00', end: '01:30', startSec: 60, endSec: 90, speaker: 'Dhruv', text: 'To mujhe laga haan chalo abhi mainne kuchh karke manage kar liya lekin jab vaapas agla test hua to phir aur jo bhi CBT par hua tha to mera ek drawback aaya. Iska main factor samajh nahin pa raha hoon. Chizen main sab padhata hoon, concepts laga paata hoon lekin specific CBT ko lekar mere ko problem face karne padi thi vahaan par.' },
      { start: '01:30', end: '02:00', startSec: 90, endSec: 120, speaker: 'Ayush', text: 'Pahla OMR galat hua tha phir vah time ke saath sahi ho gaya. To CBT bhi vaisa hi hai ki time ke saath tum usmen improve kar jaoge. To uski zyaada tension lene ki to zaroorat nahin hai tumko.' },
      { start: '02:00', end: '02:30', startSec: 120, endSec: 150, speaker: 'Dhruv', text: 'Yah mere ko samajh nahin aa raha hai yah mera fear factor hai ya I don\'t know what is it. Us paper ka difficulty kaisa tha? Paper ka difficulty jaisa bol rahe ho uske hisaab se to ki haan normal hi tha itna kuchh zyaada hard nahin tha. Har subject mein do chaar question the hard itna to kuchh hard nahin tha lekin overall vahi hai ki hamaari jo poore hamaara jo poora batch hai dropper vaala leader batch uske andar ek 33 percent bachche hi unke jo criteria hota hai na passing ka.' },
      { start: '02:30', end: '03:00', startSec: 150, endSec: 180, speaker: 'Dhruv', text: 'Haan. Uske aas paas the ya cross kar chuke the. Mostly bachche drop mein hi hai, matlab bilkul niche hi aa rakhe the. Chemistry mein bhi like expected tha ki 0ag one 20 ke oopar, 1 20 around van jaana chaahie. Mera 93 bana aur like mostly class ka 80 ke aas paas hi van raha tha. Phir to paper thoda hard hoga shaayad.' }
    ]
  },
  {
    id: 'seg-02',
    primaryTag: "#ncert biology",
    serialNumber: '02_00',
    rawFilename: '02_00-03-00_to_00-07-00_Biology_NCERT_revision_and_practice.mp3',
    startTime: '03:00',
    endTime: '07:00',
    startSeconds: 180,
    endSeconds: 420,
    durationFormatted: '04:00',
    label: 'Biology_NCERT_revision_and_practice',
    title: 'Biology NCERT Revision and Practice',
    subject: 'Biology',
    tags: ['Biology', 'NCERT', 'Revision'],
    summary: '',
    keyTakeaways: [],
    fullTranscriptText: `[03:00 - 03:30] Dekho biology mein koi kitna bhi out of NCERT vagairah padha hai tumhaara main focus NCERT hona chaahie kyonki vah bahut rare chance hai ki NCERT ke baahar se hi kuchh aaega aur agar NCERT ke baahar se kuchh aaega na to vo kisi coaching mein padhaaya bhi nahin jaata hoga bahut 1 percent chance hoga ki kisi coaching ko vo padha rakha hoga aur tab vo aaya hoga out of NCERT.

[03:30 - 04:00] Hoga matlab. Abhi tumhaara bio mein kitna score aata hai? Abhi to mera 2 80 ke oopar, 2 80 ke aaspaas hi rahta hai. Nahin nahin alag alag botany zoology. Achchha botany mein mera like 1 20 se 1 40 ke beach raha hai abhi tak mein aur ismen zoology mein mera 1 ke around hi rahta hai. 1 30 to 1 50 ke beach hi rahta hai very quickly. Aur 1 30 to 1 50 ke beach.

[04:00 - 04:30] NCIT donon mein padhata hai? NCIT mein zoology ke, NCIT mein mere ko ek chhoti sa problem yah hai ki main zoology to padh leta hoon, zoology ki to mere ko aadat hai to vah to mainne bataata hai bahut hi mere ko samajh nahin aa rahi hai abhi starting ki kyonki aage se classification hai aur vah abhi kyonki syllabus ke hisaab se nahin curriculum ke hisaab se chal raha hai to mere ko, NCIT mein vah padhata hoon to bilkul trauma reserve mein kya chal raha hai? Kya padhaaya ja raha hai? Kuchh bhi bol rakha hai, aisa.

[04:30 - 05:00] Bahut kam samajh aaega class mein samajho aur phir ek baar read karo usko. Jab do baar read kar loge to kuchh kuchh chizen yaad hone lag jaegi aur jab baar baar phir read karoge na to book ki ek memory van jaati hai dimaag mein ki book mein kya kahaan likha hai, kyon likh rakha tha, yah book mein explanation kis chiz ka diya hua hai, yah sab chiz with practice develop hoti hai matlab aisa nahin hoga ki tum ek baar padhoge tumko nahin samajh aaya to padhai iska matlab botni nahin samajh aa rahi hai vah to ek baar mein kuchh bhi nahin samajh aata hai kabhi bhi.

[05:00 - 05:30] 12 mein aae hue ho yaar usmen to bahut complicated topics honge aage jaakar. Hello? Haan aur phir mere ko like sustainability ke issues hain. Mainne pahle zoology mein achchha khaasa score kar raha tha. 1 1 51 50 aisi kuchh aa rahe the lekin ab vah ekdam se like abhi last jo CBT vaala hua uske andar mere zoology ka score tha approximately.

[05:30 - 06:00] Sir. Haan uske lie dekho matlab revision karo lekin jaise tum bhool jaate ho agar tumko aisa lagta hai to tum us topic ke related question bana ke dekho question practice karke dekho. Question bank se ya kisi book se ya kisi aur material se jo bhi tumhaare paas hai jo tumne pahle bana nahin rakha. Usse kya hoga ki tum jab question bana ke dekho.

[06:00 - 06:30] Dekhoge to jo tumne padha hai vo tumko usmen apply karna padega aur apply karna padega to tumhaara brain usko khud se manipulate karega uske facts ko, datas ko jo tumne us chapter mein padha hai to vo khud se usko matlab, matlab jo tumhaari memory mein stored hoga information, usko baahar laane ki koshish karega us vajah se kya hoga ki vo jo information hai na vo tumhaara brain zyaada time tak yaad rakha hai. Jab tak question zyaada nahin banaoge biology mein to baar baar book padhoge sirph to phir dikkat aaegi.

[06:30 - 07:00] Aur question banao jab aisa lag raha ho ki bhool gaya hoon thoda bahut. Phir question banaane ke baad jo galat ho, jo galat ho vah topic ek baar insight hi se read karo aur phir se us question ko dekho ki ab vah banta hai ya nahin? Ok yeah aur baaki donon haan bolo.`,
    transcriptLines: [
      { start: '03:00', end: '03:30', startSec: 180, endSec: 210, speaker: 'Ayush', text: 'Dekho biology mein koi kitna bhi out of NCERT vagairah padha hai tumhaara main focus NCERT hona chaahie kyonki vah bahut rare chance hai ki NCERT ke baahar se hi kuchh aaega aur agar NCERT ke baahar se kuchh aaega na to vo kisi coaching mein padhaaya bhi nahin jaata hoga bahut 1 percent chance hoga ki kisi coaching ko vo padha rakha hoga aur tab vo aaya hoga out of NCERT.' },
      { start: '03:30', end: '04:00', startSec: 210, endSec: 240, speaker: 'Dhruv', text: 'Hoga matlab. Abhi tumhaara bio mein kitna score aata hai? Abhi to mera 2 80 ke oopar, 2 80 ke aaspaas hi rahta hai. Nahin nahin alag alag botany zoology. Achchha botany mein mera like 1 20 se 1 40 ke beach raha hai abhi tak mein aur ismen zoology mein mera 1 ke around hi rahta hai. 1 30 to 1 50 ke beach hi rahta hai very quickly. Aur 1 30 to 1 50 ke beach.' },
      { start: '04:00', end: '04:30', startSec: 240, endSec: 270, speaker: 'Dhruv', text: 'NCIT donon mein padhata hai? NCIT mein zoology ke, NCIT mein mere ko ek chhoti sa problem yah hai ki main zoology to padh leta hoon, zoology ki to mere ko aadat hai to vah to mainne bataata hai bahut hi mere ko samajh nahin aa rahi hai abhi starting ki kyonki aage se classification hai aur vah abhi kyonki syllabus ke hisaab se nahin curriculum ke hisaab se chal raha hai to mere ko, NCIT mein vah padhata hoon to bilkul trauma reserve mein kya chal raha hai? Kya padhaaya ja raha hai? Kuchh bhi bol rakha hai, aisa.' },
      { start: '04:30', end: '05:00', startSec: 270, endSec: 300, speaker: 'Ayush', text: 'Bahut kam samajh aaega class mein samajho aur phir ek baar read karo usko. Jab do baar read kar loge to kuchh kuchh chizen yaad hone lag jaegi aur jab baar baar phir read karoge na to book ki ek memory van jaati hai dimaag mein ki book mein kya kahaan likha hai, kyon likh rakha tha, yah book mein explanation kis chiz ka diya hua hai, yah sab chiz with practice develop hoti hai matlab aisa nahin hoga ki tum ek baar padhoge tumko nahin samajh aaya to padhai iska matlab botni nahin samajh aa rahi hai vah to ek baar mein kuchh bhi nahin samajh aata hai kabhi bhi.' },
      { start: '05:00', end: '05:30', startSec: 300, endSec: 330, speaker: 'Dhruv', text: '12 mein aae hue ho yaar usmen to bahut complicated topics honge aage jaakar. Hello? Haan aur phir mere ko like sustainability ke issues hain. Mainne pahle zoology mein achchha khaasa score kar raha tha. 1 1 51 50 aisi kuchh aa rahe the lekin ab vah ekdam se like abhi last jo CBT vaala hua uske andar mere zoology ka score tha approximately.' },
      { start: '05:30', end: '06:00', startSec: 330, endSec: 360, speaker: 'Ayush', text: 'Sir. Haan uske lie dekho matlab revision karo lekin jaise tum bhool jaate ho agar tumko aisa lagta hai to tum us topic ke related question bana ke dekho question practice karke dekho. Question bank se ya kisi book se ya kisi aur material se jo bhi tumhaare paas hai jo tumne pahle bana nahin rakha. Usse kya hoga ki tum jab question bana ke dekho.' },
      { start: '06:00', end: '06:30', startSec: 360, endSec: 390, speaker: 'Ayush', text: 'Dekhoge to jo tumne padha hai vo tumko usmen apply karna padega aur apply karna padega to tumhaara brain usko khud se manipulate karega uske facts ko, datas ko jo tumne us chapter mein padha hai to vo khud se usko matlab, matlab jo tumhaari memory mein stored hoga information, usko baahar laane ki koshish karega us vajah se kya hoga ki vo jo information hai na vo tumhaara brain zyaada time tak yaad rakha hai. Jab tak question zyaada nahin banaoge biology mein to baar baar book padhoge sirph to phir dikkat aaegi.' },
      { start: '06:30', end: '07:00', startSec: 390, endSec: 420, speaker: 'Ayush', text: 'Aur question banao jab aisa lag raha ho ki bhool gaya hoon thoda bahut. Phir question banaane ke baad jo galat ho, jo galat ho vah topic ek baar insight hi se read karo aur phir se us question ko dekho ki ab vah banta hai ya nahin? Ok yeah aur baaki donon haan bolo.' }
    ]
  },
  {
    id: 'seg-03',
    primaryTag: "#botany faculty",
    serialNumber: '03_00',
    rawFilename: '03_00-07-00_to_00-09-30_Botany_Faculty_Issues_and_Online_Alternatives.mp3',
    startTime: '07:00',
    endTime: '09:30',
    startSeconds: 420,
    endSeconds: 570,
    durationFormatted: '02:30',
    label: 'Botany_Faculty_Issues_and_Online_Alternatives',
    title: 'Botany Faculty Issues and Online Alternatives',
    subject: 'Biology',
    tags: ['Botany', 'Faculty', 'Online Lectures'],
    summary: '',
    keyTakeaways: [],
    fullTranscriptText: `[07:00 - 07:30] Kya? Nahin bolo aap kya bola to bhaiya? Baaki donon subjects mein kitne kitne marks aate hain physics aur chemistry mein? Physics mein mera hundred ke around rahta hai abhi Ek sau calculus ka aur chemistry mein like 1 20 ke oopar gaya nahin hoon main abhi tak. 80 se 1 20 ke beach vary karta rahta hai. Physics mein mera hundred ke aaspaas hi aata hai mostly. Last time mera chemistry mein jo aaya tha vah aaya tha like 1 fifth sorry 1 40 aaya tha aur physics mein mera aaya tha, nahin physics mein 1 40 aaya tha chemistry mein mera hundred and 9 aaya tha. Highest mera abhi tak yahi hai in donon.

[07:30 - 08:00] Botany hai mera highest 320 380 hai. Biology mein? Haan biology mein overall. Haan poochho kya poochh rahe the? Main yah poochh raha tha ki like botany ke lie like aur kaun sa preferable aapko lagta hai ki online YouTube par koi teacher hoya aisa kuchh in case. Kyonki yahaan par LN mein jo padha rahe hain botany vah to kya padha rahe hain hamen bhi samajh nahin

[08:00 - 08:30] Vah notes aise likhavaate hain ki aap vaapas padhane baitho kuchh samajh nahin aaega. To mere ko vah ek factor issue hai. Ek baar reception par bhi dekh rakha hai hamne bol karke ki nahin samajh mein aa raha hai and all. Feedback jo ham fill karte hain usmen bhi like aisa kuchh improvement to log show, response show kar nahin rahe. To vah mere ek problem hai bahut nahin mere ko pichhe khinch rahi hai zaroorat, bio mein. Agar class nahin samajh aa raha hai to phir online tumko khud se dhoondhana padega.

[08:30 - 09:00] To main kaise bataoon ki online kaun achchha hai, kaun bura hai. Ek ek lecture dekho kisi kisi ka online jo pasand hai uska phir lecture dekhate ho, yahi kar sakte ho. Ok yaar tumhaara koi dost hai jiski botany mein achchhe marks aa rahe hain, usse puchh kar dekho ki tum ke kisse padh rahe ho kyonki class mein to samajh aa nahin raha.

[09:00 - 09:30] Like that like NCRT padh rahe hain jo mere se ho nahin paata itna sustainably vah ek problem mein lag raha hai. Bhi ek baar try karke dekho NCRT multiple times padhakar dekhane ki bhale samajh aa ya na aa hai. Ok kya.`,
    transcriptLines: [
      { start: '07:00', end: '07:30', startSec: 420, endSec: 450, speaker: 'Dhruv', text: 'Physics mein mera hundred ke around rahta hai abhi. Chemistry mein 80 se 120 ke beech vary karta rahta hai. Highest physics 140, chemistry 109.' },
      { start: '07:30', end: '08:00', startSec: 450, endSec: 480, speaker: 'Dhruv', text: 'Main yah poochh raha tha ki botany ke lie online YouTube par koi teacher preferable aapko lagta hai kya? Yahaan Allen mein jo padha rahe hain hume samajh nahi aa raha.' },
      { start: '08:00', end: '08:30', startSec: 480, endSec: 510, speaker: 'Dhruv', text: 'Vah notes aise likhvaate hain ki vaapas padhne baitho to kuchh samajh nahin aaega. Reception par aur feedback form mein bhi bola hai par koi improvement response nahi mila.' },
      { start: '08:30', end: '09:00', startSec: 510, endSec: 540, speaker: 'Ayush', text: 'Agar class mein nahin samajh aa raha to online tumko khud se dhoondhna padega. Ek ek lecture dekho online, jo pasand aae uska lecture dekho. Ya kisi dost se poochho jiske botany mein achchhe marks aa rahe hain.' },
      { start: '09:00', end: '09:30', startSec: 540, endSec: 570, speaker: 'Ayush', text: 'Ek baar try karke dekho NCERT multiple times padh kar dekhne ki, bhale samajh aae ya na aae.' }
    ]
  },
  {
    id: 'seg-04',
    primaryTag: "#dipole calculus",
    serialNumber: '04_00',
    rawFilename: '04_00-09-30_to_00-12-00_Physics_Calculus_Silly_Mistakes_and_Electrostatics.mp3',
    startTime: '09:30',
    endTime: '12:00',
    startSeconds: 570,
    endSeconds: 720,
    durationFormatted: '02:30',
    label: 'Physics_Calculus_Silly_Mistakes_and_Electrostatics',
    title: 'Physics Calculus Silly Mistakes and Electrostatics',
    subject: 'Physics',
    tags: ['Physics', 'Calculus', 'Electrostatics'],
    summary: '',
    keyTakeaways: [],
    fullTranscriptText: `[09:30 - 10:00] Then numerical ka ek mere ko issue hai ki main silly mistake karta hoon vah to alag hai but numerical kai baar like word format abhi jab CBT mein aaya tha word format hamen samajh nahin aa raha tha ki exactly kuchh kya raha hai. Word format matlab? Matlab question step se de rakha hota hai ki like aapka pata hai chalo thik hai iske andar talk nikaalna hai dipol ka. Ok chalo solve kar rahe hain solve kar rahe hain lekin uske andar calculus mistakes kahaan hoti hai ki detect main bahut baar nahin karvaata hoon teacher ke baad aur teacher bola to unhen sahi to kiya hai yahaan par galti hai vahaan par galti hai lekin main usko abhi tak correct nahin kar pa raha hoon chaahe kitni practice kar loon. Like around mainne abhi sirph dipol ke gae the first jo electrostatics ka chapter hai uske hisaab se agar dekhen to mera approximately dhai sau kuchh.

[10:00 - 10:30] Kar rakhe hain jo module aur in sab race race mein aati hai elon ki. Lekin mere ko abhi tak like vah accuracy mere ko nahin lagta mere ko mili hai ya main question attempt bhi karne rahta hoon mere confidence feel nahin hota ki yaar haan yaar yah to kar loonga bahut baar kar rakha hai aisa aisa hi log ho gaya easily. Nahin mere ko abhi solve kar dena mein aisa burden hi feel hota hai apne oopar.

[10:30 - 11:00] Practice kie. Maan lo ki mainne BES equals to U plus 80 ke formula par sau question bana lie, to usse mujhe aisa to nahin lagega ki main baaki kinematics mein achchha ho gaya, lekin agar mainne achchhe se question banae kinometrics mein, tough questions banae aur mere se band rahe, time limit mein band rahe, to usse zyaada confidence aata hai ki haan main zyaada soch pa raha hoon, matlab kuchh unique question bhi aaega to main bana sakta hoon vagairah vagairah.

[11:00 - 11:30] Electrostats mein to matlab dhai sau question agar Elan se kiya hai to usmen kuchh zyaada difference nahin hoga har question mein, matlab sorry Elan ka question mein to difference zyaada rahta hai, but I will prefer ki electrostats jaise bade chapter mein aur zyaada question banaane ki zaroorat hai aur zyaada tough question kyonki electrostats 1 of the toughest chapter hai poore class 12 physics ka.

[11:30 - 12:00] Electrostats tumhaara jitna strong ho jaega na, tum samajho magnetism, gravitation, electromagnetism yah sab vaale part mein tumko bahut aasaan, bahut bahut bahut aasaan lagega aur capacitor. Yah chaar chapter tumko bilkul aasaan lagne lagenge. Jaakar tumhaara electrostats bahut achchhe se covered hai to. Ok sir, then hamen bola gaya ki like assertion reasons jo hote hain vah zyaada aate hain, especially in bio.`,
    transcriptLines: [
      { start: '09:30', end: '10:00', startSec: 570, endSec: 600, speaker: 'Dhruv', text: 'Word format questions mein dipole torque nikaalte waqt calculus mistakes hoti hain jo detect nahi ho paati. 250 questions kar rakhe hain fir bhi burden feel hota hai.' },
      { start: '10:00', end: '10:30', startSec: 600, endSec: 630, speaker: 'Dhruv', text: 'Accuracy nahi mili hai, confidence feel nahi hota question attempt karte waqt.' },
      { start: '10:30', end: '11:00', startSec: 630, endSec: 660, speaker: 'Ayush', text: 'Maan lo v = u + at par 100 question bana liye to baaki kinematics achchha nahi hoga. Tough questions banao jo time limit mein bane, tab confidence aata hai.' },
      { start: '11:00', end: '12:00', startSec: 660, endSec: 720, speaker: 'Ayush', text: 'Electrostatics class 12 physics ka sabse bada aur tough chapter hai. Yeh jitna strong hoga, magnetism, gravitation, electromagnetism aur capacitor utna aasaan lagega.' }
    ]
  },
  {
    id: 'seg-05',
    primaryTag: "#assertion reason",
    serialNumber: '05_00',
    rawFilename: '05_00-12-00_to_00-16-00_Assertion_Reason_Mastery_and_Tricks.mp3',
    startTime: '12:00',
    endTime: '16:00',
    startSeconds: 720,
    endSeconds: 960,
    durationFormatted: '04:00',
    label: 'Assertion_Reason_Mastery_and_Tricks',
    title: 'Assertion Reason Mastery and Tricks',
    subject: 'Biology',
    tags: ['Assertion Reason', 'Biology', 'Tricks'],
    summary: '',
    keyTakeaways: [],
    fullTranscriptText: `[12:00 - 12:30] Uske lie agar phir bata sakte ho ki meri ek bahut badi problem yah bhi rahi hai abhi tak main ki mere assertion reason mostly galat ho jaate hain. Saat assertion reason aaya to mujhe paanch galat hi honge just because ki main main aaj tak ek hi technique use karta hoon ki oopar jab statement assertion de rakha hai uske baad because lagao aur dekho ki yah reason uske baad match karke correct hai ki nahin hai. Lekin vah har baar kaam nahin aa raha hai, pata nahin kyon? Har baar kaam nahin aa raha matlab ki kabhi kaam nahin aata? Matlab kuchh mein kaam kar jaata hai.

[12:30 - 13:00] Like kaise bataoon? Main main kaise karta hoon sir? Main kaise karta tha assertion reason ki pahle main assertion padhata tha. Assertion sahi hai galat yah pata karta tha. Phir reason padhata tha reason sahi hai galat yah pata karta tha. Ab ek galat hai tab to aasaani se answer aa jaata hai ya donon galat hai to hai na? Lekin let's say ki donon sahi hota hai to phir main kya karta tha?

[13:00 - 13:30] Patr pahle main dekhata tha ki kya mere according ye correct explanation hai ya nahin? Matlab matlab assertion padho, reason padho, kya main reason se assertion ko prove kar sakta hoon kisi bhi logic se, thik hai? Ok. Agar kar paaya to correct explanation ho sakta hai, nahin kar paaya to bhi tab donon chiz mein se kuchh bhi ho sakta hai ya to correct explanation ya to not correct. Phir main bikaavs laga ke dekhata tha ki kya bikaavs lagaane se vah correct explanation jaisa lagta hai, nahin lagta hai to phir main not correct maar deta tha.

[13:30 - 14:00] Mera bahut rare hi assertion reason galat hota tha aur vo elon ke test mein hi hota tha assertion reason galat kyonki kuchh controversial assertion reason daalte the na vo log, jismen tum hamaare according ho sakta hai kuchh aur answer ho kisi aur ke according ho ki not correct kisi aur ne bola correct aisa aisa vaala galat hota tha hamaara

[14:00 - 14:30] Jo assertion reason aate the na, vah bahut zyaada confusing rahte the. Usmen teachers ko bhi nahin pata hota tha answer kya hoga itna confusing rahta tha vah. Ok bhaiya. Aur shaayad se tum logon ko LN mein abhi vah bhi denge ek assertion reason sahi karne ka step. Haan de diya hai, de diya hai vah. Vah ek modi mein le rakha hai vah. Vah follow mat karo. Kyonki ek student mein mere pahachaanoo tha usne vah vaala follow kiya tha.

[14:30 - 15:00] Test mein pahle vah pachchis batch ka hai aur uske pahle das mein se nau sahi hote the, ek galat hota tha aur jab usne vah follow kiya tha to uske das mein chaar sahi hue the, chhah galat ho gae the. Matlab like uska galat tarike se described hai usmen assertion nahin nahin usmen sahi tarike se described hai lekin ki us lekin us matlab hota hai na ki jab tumhaara sab sahi chal raha hai to tum kisi aur mein taang ada ke usko kharaab kyon karoge?

[15:00 - 15:30] Samajhe? Achchha, ok sir bhaiya. Haan usmen bahut saare step hain na to tum tum biology padhoge ki assertion reason sahi karne ke rules yaad karoge, khud sach ho. Sahi baat hai. Achchha ek second suno guys main aapko disturb nahin hona chaahta. Dhruv ek please kyon nahin try karta? Matlab jaise maan lijie tere saamne example likha hua hoga na right, matlab koi assertion reasoning ka,

[15:30 - 16:00] Haan, yah likha hua hai to iska kis tarike se karte hain aap, matlab kya karte hain, kya step karte hain, yah puchh kar try karke dekh len. Agar maan lijie zyaada better tarike se samajh mein baithe tujhe.`,
    transcriptLines: [
      { start: '12:00', end: '12:30', startSec: 720, endSec: 750, speaker: 'Dhruv', text: 'Mere assertion reason mostly galat hote hain. 7 mein se 5 galat ho jaate hain kyunki main "because" lagata hoon par har baar kaam nahi karta.' },
      { start: '12:30', end: '13:30', startSec: 750, endSec: 810, speaker: 'Ayush', text: 'Pehle assertion aur reason ki individual truth check karo. Agar dono sahi hain, tab dekho kya reason se assertion prove ho sakta hai kisi logic se. Fir "because" check karo.' },
      { start: '13:30', end: '14:30', startSec: 810, endSec: 870, speaker: 'Ayush', text: 'Allen ke tests mein controversial AR daalte hain jahan teachers bhi confuse rehte hain.' },
      { start: '14:30', end: '15:30', startSec: 870, endSec: 930, speaker: 'Ayush', text: 'Allen ne jo AR ke rules aur steps diye hain unko follow mat karo. Biology padhoge ya AR ke formula yaad karoge?' },
      { start: '15:30', end: '16:00', startSec: 930, endSec: 960, speaker: 'Coordinator', text: 'Dhruv, tere saamne jo example likha hua hai AR ka, usko share kar ke live poochh ke try kar.' }
    ]
  },
  {
    id: 'seg-06',
    primaryTag: "#tissues organs",
    serialNumber: '06_00',
    rawFilename: '06_00-16-00_to_00-22-30_Live_AR_Question_Walkthrough_Tissues_and_Organs.mp3',
    startTime: '16:00',
    endTime: '22:30',
    startSeconds: 960,
    endSeconds: 1350,
    durationFormatted: '06:30',
    label: 'Live_AR_Question_Walkthrough_Tissues_and_Organs',
    title: 'Live AR Question Walkthrough (Tissues and Organs)',
    subject: 'Biology',
    tags: ['Biology', 'AR', 'Tissues'],
    summary: '',
    keyTakeaways: [],
    fullTranscriptText: `[16:00 - 17:00] Haan, chalo sir.
[17:00 - 17:30] Ok haan, ek minute kar de. Haan, too mere ko kar de.
[18:00 - 18:30] Dhruv share nahin karaaya yaar WhatsApp par tumhen? Haan haan sir, vah
[18:30 - 19:00] Dekhie sir.
[20:30 - 21:00] Dhruv, aayush visible hai yah chiz? Haan, ek second. Ek second dikh raha hai, haan. Dikh raha hai dhruv? Assumption hai each organ in our body is made of one or more type of tissues jo ki sahi hai, hai na dhruv? Haan haan. Aur a single type of tissue is sufficient to carry out complex organ level function.
[21:00 - 21:30] Ab ek single type of tissue agar organ level ka function perform kar paata to alag alag tissue ko aggregate karke ham organ kyon banaate hain to yah statement to galat hai. Hello. Dhruv aavaaz aa rahi hai? Haan abhi aa rahi hai ek second. Jo bataaya abhi isne aayush ne vah aa raha hai samajh mein matlab kya bol rahe hain? Haan abhi samajh mein aa raha hai samajh mein aa raha hai.
[21:30 - 22:00] To yaani mujhe isse aisa lag raha hai ki assertion sahi hai aur reason galat hai. To main hoga to isko option 3 karta. Vahi tha sahi sahi hai. Vahi hai vahi hai vahi hai. Option option sahi hai. Now let's say ki iska reason diya hota ki dher saare tissue milkar jo hai vo organ ke saare functions ko karvaane mein support karte hain.
[22:00 - 22:30] To yah donon statement sahi hote hain aur explanation bhi ho jaata hai samajh aaya? Ok ok yeah sir thank you aur next jo mere ko poochhana tha vah tha`,
    transcriptLines: [
      { start: '16:00', end: '19:00', startSec: 960, endSec: 1140, speaker: 'Coordinator', text: 'Dhruv WhatsApp par screenshot share karta hai. Ayush screen dekh raha hai.' },
      { start: '20:30', end: '21:00', startSec: 1230, endSec: 1260, speaker: 'Ayush', text: 'Assertion hai: "Each organ in our body is made of one or more type of tissues" jo sahi hai. Reason: "A single type of tissue is sufficient to carry out complex organ level function."' },
      { start: '21:00', end: '21:30', startSec: 1260, endSec: 1290, speaker: 'Ayush', text: 'Agar single tissue organ level function kar leta to alag-alag tissue aggregate karke organ kyun banate? To yeh Reason statement galat hai.' },
      { start: '21:30', end: '22:00', startSec: 1290, endSec: 1320, speaker: 'Ayush', text: 'Assertion sahi hai aur Reason galat hai, isiliye option 3 correct hai. Dhruv: "Vahi sahi option tha!"' },
      { start: '22:00', end: '22:30', startSec: 1320, endSec: 1350, speaker: 'Ayush', text: 'Agar reason hota ki dher saare tissue milkar organ function support karte hain, tab dono sahi hote aur correct explanation bhi banta.' }
    ]
  },
  {
    id: 'seg-07',
    primaryTag: "#physics derivations",
    serialNumber: '07_00',
    rawFilename: '07_00-22-30_to_00-25-00_Module_Reading_Utility_and_Physics_Derivations.mp3',
    startTime: '22:30',
    endTime: '25:00',
    startSeconds: 1350,
    endSeconds: 1500,
    durationFormatted: '02:30',
    label: 'Module_Reading_Utility_and_Physics_Derivations',
    title: 'Module Reading Utility and Physics Derivations',
    subject: 'Physics',
    tags: ['Modules', 'NCERT', 'Physics Derivations'],
    summary: '',
    keyTakeaways: [],
    fullTranscriptText: `[22:30 - 23:00] Main kuchh topics skip ho gaya ho ya mere paas notes na ho to jo Allianz ke lie module se main unse padhoon ki nahin padhoon? Kyonki unse like bahut lambe chhode padhai ho jaati hai. Class mein kai baar aisa dekho topic padhaane mein sir ne like bis minute die ho samajh mein aa gaya ho is par vahi topic module se padhane vaale ek bahut zyaada time chale jaata hai. Agar main kya bol raha hoon physics ka to module koi faayda nahin hai padhakar. Bayaavar chemistry ke lie. Haan haan chemistry ka bhi physical ka koi faayda nahin hai padhakar.

[23:00 - 23:30] Organic main ek baar oopar oopar se dekh sakta hoon shaayad sir koi table hota hai elan ke module mein jismen saare reactions likhe hote hain shaayad, mujhe yaad nahin kyonki mainne khud nahin padhaaya hai module, to ek baar agar vo chaaho to dekh sakte ho agar ki module padhane ka koi zaroorat nahin padta aur agar bio mein out of NCRT padhana hai to vo module padho varna vo bhi mat padho.

[23:30 - 24:00] Dhoondh ke question, L and F par to dher saare question hoti hain yaar mainne khud L and F se question hota hai. Haan bolte to hain lekin kai baar vahi hai repeat hi hote rahte hain mostly mere saath to yahi rahta hai. Mainne abhi tak dekhana dedh sau kuchh sau question kuchh L and F par kie honge zyaada nahin kie lekin usmen sau mein bhi like kitne question to repeat ho gae hain to aisa lagta hai ki pachaas mein mushkil se kie honge. Haan yah ho sakta hai shaayad aur vah module to mainne read nahin kiya kisi mein kya bata? Haan, practice aur conceptual base jo ki tumhaara.

[24:00 - 24:30] Class se hi hoga. Class mein achchhe se samajho bio hai to NCERT kar aake read karo, physics hai to aarthik question practice karo. Jo derivation hai vo derivation bahut achchhe se aana chaahie tumko har kuchh kyonki derivation se kya faayda hoga ki jaisa chhabbis ka paper tha na vo conceptual knowledge bahut zyaada demand karta tha usmen tumko samajh aana chaahie ki differentiation integration kaise use hota hai physics mein. Achchhe se samajh aana chaahie kabhi paper solve hota hai varna

[24:30 - 25:00] Paper nahin banta kisi se. Pachchis ka bhi jo paper tha vah bhi aisa hi tha ki tumko differentiation, differential element vah sab sab samajh aana chaahie.`,
    transcriptLines: [
      { start: '22:30', end: '23:00', startSec: 1350, endSec: 1380, speaker: 'Dhruv', text: 'Allen ke modules se padhoon ya nahi? Module se padhne mein bahut zyada time lag jaata hai.' },
      { start: '23:00', end: '23:30', startSec: 1380, endSec: 1410, speaker: 'Ayush', text: 'Physics aur Physical Chemistry ke lie module padhne ka koi faayda nahi hai. Organic mein summary reaction table dekh sakte ho.' },
      { start: '23:30', end: '24:00', startSec: 1410, endSec: 1440, speaker: 'Ayush', text: 'Bio mein agar out of NCERT padhna ho tabhi module padho, varna bilkul mat padho.' },
      { start: '24:00', end: '25:00', startSec: 1440, endSec: 1500, speaker: 'Ayush', text: 'Physics derivations bahut achchhe se aani chahiye. Paper differentiation, integration aur differential elements ki conceptual knowledge demand karta hai.' }
    ]
  },
  {
    id: 'seg-08',
    primaryTag: "#test design",
    serialNumber: '08_00',
    rawFilename: '08_00-25-00_to_00-27-30_Major_vs_Semi_Major_Tests_and_Faculty_Design.mp3',
    startTime: '25:00',
    endTime: '27:30',
    startSeconds: 1500,
    endSeconds: 1650,
    durationFormatted: '02:30',
    label: 'Major_vs_Semi_Major_Tests_and_Faculty_Design',
    title: 'Major vs Semi Major Tests and Faculty Question Design',
    subject: 'Exam Strategy',
    tags: ['Allen Tests', 'Question Design', 'NCERT'],
    summary: '',
    keyTakeaways: [],
    fullTranscriptText: `[25:00 - 25:30] Ab uske andar like kya change hoti hai strength questions ki ya aisa kuchh? Kyonki hamen like abhi tak to introduction hai matlab introduction uske baare mein itna bataaya hai ki normal test jaise hi hota hai bas thode lendi aur matlab time consuming zyaada rahte hain questions. Usmen jo hai nai questions bankar aate hain. Jo L and G department hota hai teachers ka vah jo hai vah tumko nahin padhaate vah teachers. Matlab vah teachers padhaane ka kaam hi nahin karte. Unka kaam

[25:30 - 26:00] Ki questions design kare vo baithakar poore saal aur jo last ka exam hota hai na usmen vo log questions daalte hain. To us paper mein kaisa question aaega vo tumhaare teacher ko bhi nahin pata jo tumko padha raha hai. Bas yah pata hai usko ki jo mainne syllabus ka portion hai vahi aaega. Lekin questions nae bankar aaainge, question ka pattern new ho sakta hai, question ka language bhi different ho sakta hai, question har type ka bhi ho sakta hai easy, moderate, difficult.

[26:00 - 26:30] Matlab vah topic na padhaaya vah, kyonki kabhi kabhaar aisa hota hai ki jo topic syllabus mein hota hai vah bhi teachers kuchh kuchh skip kar dete hain galti se ya jaanbojhakar unko lagta hai ki kaam ka nahin hai, us topic se bhi question aa jaata hai. To us type ke question tumko agar vahaan na bane to yahaan ghar aakar ek baar kahin se padh lena hai ya phir doubt counter par jaakar samajh lena hai vah tumhaara kaam rahega. Lekin vah jo paper hota hai vah unbiased aata hai jo tumhaara abhi paper hota hai jo tumhaare teacher lete hain.

[26:30 - 27:00] Tumhaare teacher hi paper banaate hain to unko pata hai ki unhonne kya padhaaya hai kya nahin padhaaya hai, lekin jab major aur semi major hoga jo ki jiska paper ke doosre teachers banaenge, unko is baat se koi fark nahin padta hai ki tumko kisne kya padhaaya hai kya nahin padhaaya hai. Vah apne hisaab se paper banaate hain bilkul Aur vah out of hand set hi kuchh nahin poochhate hain usmen kyonki unko yah to pata nahin hai ki kisne kitna padhaaya hai kis teacher ne, ho sakta hai na kisi teacher ne bahut zyaada external padhaaya ho,

[27:00 - 27:30] Mushkil se ek question hoga bio mein ya do question honge jo out of NCERT honge aur bahut rare hi hota hai ki out of NCERT usmen poochhate hain. Usmen ekdam strict NCERT based paper aata hai jo major aur semi major ka hota hai.`,
    transcriptLines: [
      { start: '25:00', end: '25:30', startSec: 1500, endSec: 1530, speaker: 'Dhruv', text: 'Semi major aur major tests mein questions ki strength aur pattern kaise change hota hai?' },
      { start: '25:30', end: '26:00', startSec: 1530, endSec: 1560, speaker: 'Ayush', text: 'Allen ka dedicated R&D department poore saal questions design karta hai jo padhaane ka kaam nahi karte. Teacher ko bhi nahi pata rehta kaisa question aayega.' },
      { start: '26:00', end: '27:00', startSec: 1560, endSec: 1620, speaker: 'Ayush', text: 'Major test unbiased hota hai. Unhe fark nahi padta kis batch mein kya skip hua. Paper unke standards ke hisaab se banta hai.' },
      { start: '27:00', end: '27:30', startSec: 1620, endSec: 1650, speaker: 'Ayush', text: 'Major paper mein 99% strictly NCERT based questions aate hain, out-of-NCERT lagbhag na ke barabar hota hai.' }
    ]
  },
  {
    id: 'seg-09',
    primaryTag: "#time management",
    serialNumber: '09_00',
    rawFilename: '09_00-27-30_to_00-30-30_Time_Management_Lengthy_Questions_and_Circling.mp3',
    startTime: '27:30',
    endTime: '30:30',
    startSeconds: 1650,
    endSeconds: 1830,
    durationFormatted: '03:00',
    label: 'Time_Management_Lengthy_Questions_and_Circling',
    title: 'Time Management Lengthy Questions and Circling Technique',
    subject: 'Exam Strategy',
    tags: ['Time Management', 'Exam Technique', 'Skip Strategy'],
    summary: '',
    keyTakeaways: [],
    fullTranscriptText: `[27:30 - 28:00] Ok, aur like bhi aap maaloom aise papers mein like koi aisa question aa gaya jo bahut zyaada time consuming hai mostly in physics and chemistry. Chhod dena usko. To like, usko usko chhod dena us time mat karna. Baad mein karna time bache. Aisa hota nahin ki like aapne physics ka question dikha are haan yah van jaega van jaega lekin aap aur matlab vah achchha khaasa lendi question hota hai starting mein dekhane se lagta hai easy ho jaega. To like vaise question ko identify karne ka best tarika kya rahega? Physics ka to thik hai har question nahin kar sakte aise. Lekin chemistry mein aisa hota hai na more concept specially abhi tak jitna padha hai. Lagta hai ki easy question hai koi itna daura time consume nahin rahega lekin vah 10 minute kha jaata hai mere.

[28:00 - 28:30] Bahut zyaada question banao to thoda idea lagne lagega aur doosra ki jab paper mein question paper bana rahe ho to dekho yah isko pata karne ka koi bhi trick nahin hota. Agar koi aisa bol raha hai ki tumko question read karke pata chal jaega ki ismen kitna mehnat hai, kitna time lagega, kitna lamba question hai. To matlab 99 percent to vah jhoothi bol raha hai bahut rare hota hai ki koi question. Bahut baar aisa hoga ki ek line ka question hoga lekin uska solution ho sakta hai dedh page ka ho. To vaise question mein tum

[28:30 - 29:00] Jaise banaate ja rahe ho na question ek paper ke time par tumko jaise hi laga ki shaayad yah thoda lamba jaega jaise hi man mein aisa laga to usko goal goal usko circle karke chhod do usi time. Baad mein aakar usko kar lena. Yahi hoga na dhyaan se zyaada ki vah chhota question hoga tumko laga hoga ki lamba question hai. To baad mein aakar kar lena chhota question hai to baad mein bhi turant ho jaega vah aane ke baad.

[29:00 - 29:30] Aur personally yah hai bilkul ki paper mein bhi kai baar like distraction ho jaata hai. Ek ek question padh raha hoon doosre par shift ho gaya, are nahin aa rahi, yah bach jaega. Phir dekh raha hoon doosre par ho gaya. To like ek question par focus ho nahin paata. Yahi, abhi main yahi bol raha tha aur paper mein itna nahin sochana hai ki kya marks aaainge, banega ya nahin banega. Jis question par tum ho tumko sirph par se us question ko solve karna hai us time, matlab solve karna hai agar solve hota ja raha hai karte jao, karte jao, karte jao. Nahin ho raha hai to circle karke aage badh jao. Agar tum yah sochoge.

[29:30 - 30:00] Nahin iska solution lamba hoga to isko main abhi chhod deta hoon just because uski lamba solution hai to main chhod deta hoon. To isse tumhaara lagabhag paper chhoot hi jaega kyonki baad mein jaate jaate tumko aadat lag jaegi yah chiz sochane ki ki iska solution lamba hoga to chhod deta hoon. Tum kam se kam jo aa raha hai vah to solve karoge na chaahe uska solution lamba hai ya chhota. Bio ka paper to tumhaara jaldi ho jaata hoga. To physics ka paper mein time lagna to normal si baat hai varna to phir tin ghante ka paper kyon hota hai?

[30:00 - 30:30] Questions for 1 80 minutes thodi dete hain vah to physics chemistry ke lie zyaada time mile islie 1 80 minutes milta hai ki bio jaldi jaldi kar len bachche, phir physics mein hamko time zyaada mile varna vah agar unko 1 80 question for 1 80 minutes karna hota na ki ek question ek minute ke lie ho to vo log bio ka question ek ek page ka dete hain jo ki padhate padhate hi ek ek minute lag jaata bachchon ko.`,
    transcriptLines: [
      { start: '27:30', end: '28:00', startSec: 1650, endSec: 1680, speaker: 'Dhruv', text: 'Lengthy questions ko identify karne ka best tareeka kya hai? Mole concept mein lagta hai aasan hai par 10 minute kha jaata hai.' },
      { start: '28:00', end: '28:30', startSec: 1680, endSec: 1710, speaker: 'Ayush', text: 'Pehle se dekh ke koi nahi bata sakta. 1 line ka question dedh page ka solution ho sakta hai.' },
      { start: '28:30', end: '29:30', startSec: 1710, endSec: 1770, speaker: 'Ayush', text: 'Solve karte waqt jaise hi lage lamba ja raha hai, gol circle karo aur aage badho. Baad mein time bache to aao.' },
      { start: '29:30', end: '30:30', startSec: 1770, endSec: 1830, speaker: 'Ayush', text: 'Bio jaldi karne ke liye hota hai taaki 180 minutes mein se Physics aur Chemistry ko extra time mil sake.' }
    ]
  },
  {
    id: 'seg-10',
    primaryTag: "#cbt mode",
    serialNumber: '10_00',
    rawFilename: '10_00-30-30_to_00-32-30_CBT_Computer_Based_Test_Pros_Cons_and_Timing.mp3',
    startTime: '30:30',
    endTime: '32:30',
    startSeconds: 1830,
    endSeconds: 1950,
    durationFormatted: '02:00',
    label: 'CBT_Computer_Based_Test_Pros_Cons_and_Timing',
    title: 'CBT (Computer Based Test) Pros, Cons and Timing',
    subject: 'Exam Strategy',
    tags: ['CBT', 'OMR', 'Online Test'],
    summary: '',
    keyTakeaways: [],
    fullTranscriptText: `[30:30 - 31:00] Haan. CBT vaala hua tha ismen le vah aapko timing chalta rahta hai na CBT mein to. CBT mein timing lagta hai mainne bhi CBT mein apni baare mein bataata hoon matlab mere saath main November mein kota se ghar aa gaya tha. To mainne November se lekar NEET kab hua tha June mein. June tak C for C computer based test diya hai matlab main online deta tha test. To mujhe baahar mein bahut time lagta tha online mein kyonki online mein kya hota hai ki tumko sirph ek hi question dikhata hai yah faayda hota hai online mein.

[31:00 - 31:30] Bhi yahi tarike se, kyon? Kyonki jaise tumne bola ki main kya karta hoon, ek question par hoon to mera dimaag aage pichhe ke question par jaata hai ki yah bana leta hoon, yah bana leta hoon, hai na? Haan. Vah problem CBT mein nahin aaegi kyonki CBT mein ek baar mein ek hi question dikhata hai tumko. Tumko pata hi nahin ki aage kaun sa question hai aur agla uske agla kaun sa question aane vaala hai easy ya moderate ya hard. To ek baar focus usmen zyaada rahta hai CBT mein lekin usmen problem kya hoti hai ki usmen ek question read karo, usko answer karo, phir next dabao.

[31:30 - 32:00] Question mein jao, phir usko to usmen thoda time zyaada lagta hai das minute pandrah minute. CBT mein zyaada time lagta hai yah normal si baat hai. Mera mera bhi CBT mein bahut time lagta tha. CBT mein laga tha approx ek ghanta aath minute vahaan par usmen show kara tha aapne bio ke lie specifically. Vah thoda glitch se bhi rahta hai. Haan to like chemistry ke kaaran, chemistry ne bhi like achchha khaasa time liya tha. Kyonki usmen calculate ja raha tha to itna ko zyaada farq nahin pada lekin phir bhi.

[32:00 - 32:30] Abhi vaale time abhi to tumhaara tinon thodi aata hoga chemistry mein ki physical kya?`,
    transcriptLines: [
      { start: '30:30', end: '31:00', startSec: 1830, endSec: 1860, speaker: 'Ayush', text: 'Main November se June tak computer based test hi deta tha. Online test mein ek faayda hota hai aur ek nuksaan bhi.' },
      { start: '31:00', end: '31:30', startSec: 1860, endSec: 1890, speaker: 'Ayush', text: 'CBT mein screen par ek time par ek hi question dikhta hai, to aage-peechhe ka distraction band ho jaata hai.' },
      { start: '31:30', end: '32:30', startSec: 1890, endSec: 1950, speaker: 'Dhruv', text: 'Par har question read karo, click karo, next dabao—is me 10-15 minute zyada lagte hain. Bio mein 1 hr 8 min lag gaye the.' }
    ]
  },
  {
    id: 'seg-11',
    primaryTag: "#redox chemistry",
    serialNumber: '11_00',
    rawFilename: '11_00-32-30_to_00-35-00_Chemistry_Redox_Atomic_Structure_and_Class_11_Physics.mp3',
    startTime: '32:30',
    endTime: '35:00',
    startSeconds: 1950,
    endSeconds: 2100,
    durationFormatted: '02:30',
    label: 'Chemistry_Redox_Atomic_Structure_and_Class_11_Physics',
    title: 'Chemistry Redox, Atomic Structure and Class 11 Physics',
    subject: 'Chemistry',
    tags: ['Redox', 'Atomic Structure', 'Class 11 Physics'],
    summary: '',
    keyTakeaways: [],
    fullTranscriptText: `[32:30 - 33:00] Organic to karke gaya tha poori mein lagabhag kyonki organic syllabus chhota hi tha. Physical chemistry mein redox nahin padh ke gaya tha to vah rah gaya mall concept mein karke aaya tha sirf. Abhi jo ek haphte baad hai uske lie redox ka ek baar revision vahaan par se karna hai kyonki kachcha hai abhi bhi itna like achchhe se well trained nahin hua us par aur thoda Thompson model tak aa raha hai structure atomic structure. Haan usmen Thompson model baka raha hai. Right aur physics mein? Haan bolo.

[33:00 - 33:30] Aur physics mein like eleventh ka syllabus bahut zyaada hai. Iska aa raha hai mera approximately ek second ismen kya kah raha hoon ka? Hard nahin hai vah revise kar loon kyonki kuchh kuchh maayne maane former rahte ho dhyaan se nikal jaate hain. Then phir mere paas vector hai. Vector mein mere ko addition addition mein starting problem aati thi aur jo bahut detail vaali chizen ismen padha rakhi hain jo like aur kahin to mainne nahin dekha padhaate hain vector ke regarding, but elen mein padhaate hain pata nahin kyon. To kaam aata hai. Haalaanki uska usage bhi hai haalaanki un saari chizon ka, but vah mere dhyaan mein ekdam sustainable rakh nahin paata. Phir physical word units and measurement hai, uske andar vah unit and dimension ki practice mere ko karni hai thodi baaki hai.

[33:30 - 34:00] Canmatics hai up to distance path length vaala to vah itna hard nahin hai. Lekin vahi agar twelfth ki physics mein dekhoon to electric charges and field potential and capacitance mein up to series and parallel. Ab mainne aaj tak like jitne bhi baar twelfth mein padha hai achchhe se potential and capacitance vaala chapter. Mere ko aaj tak kabhi like is type of questions dikhe hi nahin. Mere ko samajh nahin aata banao kaise questions. Mere ko samajh mein main dekhata hoon question phir sochata hai itna depth mein to nahin aana chaahie

[34:00 - 34:30] Question na experience bhi nahin kiya hai not even in the NEET exam. To yah to kahin aana hi niche phir bhi log kyon padha rahe hain aur phir koi exam mein bhi aa jaata hai. Iske andar question tha. Nahin sir, untis mein main aapko photo bheja hoon apna.`,
    transcriptLines: [
      { start: '32:30', end: '33:00', startSec: 1950, endSec: 1980, speaker: 'Dhruv', text: 'Redox kachcha hai, upcoming test ke liye revise karna hai. Atomic structure mein Thomson model tak aa raha hai.' },
      { start: '33:00', end: '34:00', startSec: 1980, endSec: 2040, speaker: 'Dhruv', text: '11th physics syllabus: Basic maths, vectors addition, units & measurement, kinematics up to path length.' },
      { start: '34:00', end: '35:00', startSec: 2040, endSec: 2100, speaker: 'Dhruv', text: '12th physics mein capacitance series-parallel ke ajeeb questions hain jo NEET mein bhi nahi dekhe. Main photo bhej raha hoon.' }
    ]
  },
  {
    id: 'seg-12',
    primaryTag: "#capacitors doubt",
    serialNumber: '12_00',
    rawFilename: '12_00-35-00_to_00-38-00_Capacitor_Series_Parallel_Question_Doubt.mp3',
    startTime: '35:00',
    endTime: '38:00',
    startSeconds: 2100,
    endSeconds: 2280,
    durationFormatted: '03:00',
    label: 'Capacitor_Series_Parallel_Question_Doubt',
    title: 'Capacitor Series-Parallel Race Question Doubt',
    subject: 'Physics',
    tags: ['Capacitors', 'Race Sheet', 'Question 2'],
    summary: '',
    keyTakeaways: [],
    fullTranscriptText: `[35:00 - 35:30] Bhej de bhai, bhej de. Karta hoon, hain. Hold karen isi.
[36:00 - 36:30] Bhej diya abhi ham. Ek second bhai, ek second haan. Haan ji.
[36:30 - 37:00] Dikh raha hai guys? Haan, dikh raha hai. Abhi band ho gaya.
[37:00 - 37:30] Nahin sakte, oopar switch kar den. Aur visible ab? Question number 2. Haan bhaiya. Is type ka ek concept kahin padhaaya nahin hai hamen like matlab samajh hi nahin aata ismen kya lagega? Ismen aise bahut saare questions hain. Is vaale hamen race mein generally to aise series. Samajh hi nahin aata hai alag? Series parallel capacity install karna aata hai? Vahi to abhi tak exactly vah padhaaya nahin hai lekin
[37:30 - 38:00] Question aaega zaroor. Are yah bahut easy question. Matlab tum to aisa mahina ho ki aisa question aae. Kyonki series parallel ke precedence padhae ne to tumne yah question kahaan se ki hai? Hamen bol raha hai ki yah vaala question aa sakta hai abhi abhi vaale semi major mein aur lekin jo. Tab banaana isko. Yah question mein bis second bhi nahin lagega tumko banaane mein yah vaala. Ek baar aayush ho sake to isko matlab just idea de de rough ki kis tarike ke karna chaah rahe hain ya kis tarike se hoga. Just take a rough idea.`,
    transcriptLines: [
      { start: '35:00', end: '37:00', startSec: 2100, endSec: 2220, speaker: 'Coordinator', text: 'WhatsApp par image receive ho gayi hai, screen share kar raha hoon. Question number 2 dekh lo.' },
      { start: '37:00', end: '37:30', startSec: 2220, endSec: 2250, speaker: 'Dhruv', text: 'Is type ka concept padhaya nahi hai race sheet mein aa gaya hai, samajh nahi aata kya lagega.' },
      { start: '37:30', end: '38:00', startSec: 2250, endSec: 2280, speaker: 'Ayush', text: 'Yeh bahut easy question hai. 20 second bhi nahi lagega banaane mein. Bas formula dekhna hai.' }
    ]
  },
  {
    id: 'seg-13',
    primaryTag: "#series parallel",
    serialNumber: '13_00',
    rawFilename: '13_00-38-00_to_00-42-00_Solving_Equivalent_Capacitance_10_over_11_Step_by_Step.mp3',
    startTime: '38:00',
    endTime: '42:00',
    startSeconds: 2280,
    endSeconds: 2520,
    durationFormatted: '04:00',
    label: 'Solving_Equivalent_Capacitance_10_over_11_Step_by_Step',
    title: 'Solving Equivalent Capacitance (10/11 uF Step-by-Step)',
    subject: 'Physics',
    tags: ['Capacitors', 'Calculation', 'Step by Step'],
    summary: '',
    keyTakeaways: [],
    fullTranscriptText: `[38:00 - 38:30] Tumne tenth mein resistance ka series parallel padha tha. Haan. Jab jab ek donon saath mein hote hain to r equivalent baraabar r 1 plus r 2 hota hai. 1 by r 2. 1 by r equivalent baraabar haan to usi ka just ulta capacitance mein hota hai jab capacitance mein series hota hai na? Haan. To to aap formula hota hai 1 by c is equivalent is supposed to 1 by c 1 plus 1 by c 2 samajhe? Haan bhaiya.

[38:30 - 39:00] Aur jab capacitance mein parallel mein hota hai to sabko add kar dete hain direct c 1 plus c 2 aisa karke. Ok. Thik hai? Ab tumko is question mein bol raha hai ki har capacitor do micro faride ka hai na? Ok haan. Aur tumko sabka equivalent capaissance nikaalna hai aur jiska equivalent capaissance das by gyaarah ke baraabar aaega vah answer hoga, samajh aaya? Haan bhaiya.

[39:00 - 39:30] To aap pahla vaala dekho pahle vaale mein paanch capacitor jo hai vah parallel mein hai thik hai? Haan. To parallel ke lie kya formula hota hai ki direct add kar dete hain capaissance ko? Direct add kar dena hai 2 plus 2 4 ho gaya ok. Paanch hai na? Pahle baar mein to paanch hai sir. Paanch hai parallel mein to paanch baar jo add karenga na 2 ko. 2 plus 2 plus 2 plus 2 plus 2. Haan haan haan.

[39:30 - 40:00] To 2 5 ja 10 yaani vah jo jitna bhi parallel hai paanch vah ek jagah aa kar 10 micro faride van jaega hai na? Ok phir series mein 10 plus 2 plus 2. Haan to ab iska formula kya hoga 1 by c equivalent is equals to 1 by c 1 plus 1 by c 2 plus 1 by c 3. Haan bhaiya samajh gaya. To ab isko ek baar solve karke dekho kya aata hai? Phir aise hi second, third 4.

[40:00 - 40:30] 1 by 2 plus 1 by 2, 1 ho gaya 1 by 5 plus 1. Haan kitna hai 6 by 5. 1 by 10 plus 1. 1 by 10 plus 1 na kyonki half aur half plus karenge 1 by 2, 1 by, achchha sorry 4 ho gaya vah to. 1 by 4 aur iska ho jaega, 1 by 2 half aur half kar die to 1 ho gaya to 10 1 by 10 plus 1. Haan 11 by 10. 11 by 10 ho jaega. 11 by 10 kya aaya? 1 by c ka value aaya hai na? Haan.

[40:30 - 41:00] To c ka value kya aaega 11 by 10? 10 by 11. 10 by 11 aur dekho kya puchha tha question mein ki 10 by 11 jiska aaega usko vahi answer hai. To first option answer hoga na. Aa raha hai lekin padhaaya hai nahin ham logon ko abhi tak. Padha denge matlab tum yah dekho ki aasaan hai yah question tumko main yah samajhaana chaah raha hoon bas series parallel kar calculate karna aana chaahie.

[41:00 - 41:30] Ok bhaiya. Samajh mein baitha. Haan haan congressman. Samajh mein baitha yahaan kuchh oopar niche abhi bhi dimaag mein? Nahin nahin samajh mein aa gaya bhaiya. Thik hai. Samajh mein aa gaya rafa idea ke through.

[41:30 - 42:00] Ek doubt ho to doubt mat lekar jaana. Abhi yahin baithakar aur puchh le. Haan haan, doubt lekar jaana. Abhi dimaag rahega apne se na. Haan haan, nahin koi doubt aisa nahin ho, puchh le raha hoon main. Ok.`,
    transcriptLines: [
      { start: '38:00', end: '39:00', startSec: 2280, endSec: 2340, speaker: 'Ayush', text: 'Resistance ka ulta hota hai: Series mein 1/C_eq = 1/C1 + 1/C2. Parallel mein directly C1 + C2 add hota hai. Har capacitor 2 microfarad ka hai.' },
      { start: '39:00', end: '40:00', startSec: 2340, endSec: 2400, speaker: 'Ayush', text: 'Option 1 mein 5 capacitor parallel mein hain to 2 * 5 = 10 uF. Ab 10 uF ke saath do 2 uF capacitor series mein hain.' },
      { start: '40:00', end: '41:00', startSec: 2400, endSec: 2460, speaker: 'Ayush', text: '1/C = 1/10 + 1/2 + 1/2 = 1/10 + 1 = 11/10. To C_eq = 10/11 uF! First option matches.' },
      { start: '41:00', end: '42:00', startSec: 2460, endSec: 2520, speaker: 'Dhruv', text: 'Samajh aa gaya bhaiya, bahut aasaani se rough idea baith gaya dimaag mein.' }
    ]
  },
  {
    id: 'seg-14',
    primaryTag: "#graph questions",
    serialNumber: '14_00',
    rawFilename: '14_00-42-00_to_00-44-30_Graph_Based_Questions_Strategy_and_Direct_Memory.mp3',
    startTime: '42:00',
    endTime: '44:30',
    startSeconds: 2520,
    endSeconds: 2670,
    durationFormatted: '02:30',
    label: 'Graph_Based_Questions_Strategy_and_Direct_Memory',
    title: 'Graph Based Questions Strategy and Direct Memory Curves',
    subject: 'Physics',
    tags: ['Graphs', 'Physics', 'Direct Curves'],
    summary: '',
    keyTakeaways: [],
    fullTranscriptText: `[42:00 - 42:30] And yah graph vaale questions mein like kya rahta hai? Iska lie karo. Possibility kitni rahti hai ki matlab koi bahut hard vaala type ka aa jae aisa kuchh, kyonki acceleration aur yah vaale type mein hi generally aata hai velocity velocity to yah to chalo kar leta koi itna issue nahin hai. Koi aisa hard type mein bhi aata hai kyonki logon ko to bol rakha hai ki like module mein to tumhaara koi bhi graph ka itna hard type question hai nahin saare easy hain, vahaan NEET ke aate hain vah sample paper le lekar solve karo and all to like kya rahta hai graph questions ka physics and chemistry mein.

[42:30 - 43:00] Is saal ka paper dekh kar vah log bolne lage honge. Is saal sirph graph hi aaya tha na islie. Graph mein aisa hai ki jaise tumne maan lo electrostatics ke chaar question kie theek hai. Koi ek question poochhana hai jismen chaaron question aa jae, to vah graph de dega. Usmen bolega ki kaun sa graph sahi hai. To usmen tumko chaaron case solve karke check karna padega ki graph kaun sa van raha hai. Bas graph ka question ho gaya hai isi ko tough question bolte hain graph mein.

[43:00 - 43:30] Ok. Haan bas vah lendi ho jaata hai time consuming ho jaata hai. Graph vaale question end mein karne chaahie ya with paper matlab jo easy ho to chalo with paper kar lenge acceleration bola na circle karo baad mein aaya na us par. Itna plan karke nahin jao ki main graph vaale question direct chhod doonga. Ho sakta hai graph vaala hi saara question easy aa jae aur baaki sab tough aa jae to tum to graph vaale bhi chhod ke aaoge aur jo tum chhod jo tum bana rahe the vah vaale bhi chhod ke aaoge kyonki vah bahut zyaada tough aa gae.

[43:30 - 44:00] Ek baar padhoge to question at least tab na decide karoge ki tough lag raha hai ya easy lag raha hai. Kabhi ka baar hota hai ki graph vahi aata hai jo class mein padhaaya hua hai. Jaise hamaara jo pahla tha chhabbis mein usmen graph aaya tha magnetic force ka curve draw karne ka aur vo curve yaad rakhana hota hai literally matlab vo yaad hi hota hai har bachche ko jismen padhai ki hai. To usmen to question bhi nahin read karna tha bas option dekhana tha aur tick maarna tha.

[44:00 - 44:30] Ok ji. Ab agar main usko yah soch ke chhod deta ki graph ka question hai baad mein karoonga to mera vo baad ka hi baad rah jaata hai aur doosra jo hard question hai main usi mein dimaag lagaata rah jaata. Kiya karoon matlab jaise jaise aate jae vah question aur agar tough lage tab circle karke chhod do aur agar na tough lage to try karke dekho. Ok bhaiya.`,
    transcriptLines: [
      { start: '42:00', end: '42:30', startSec: 2520, endSec: 2550, speaker: 'Dhruv', text: 'Graph questions kitne hard aane ki possibility rehti hai physics aur chemistry mein?' },
      { start: '42:30', end: '43:30', startSec: 2550, endSec: 2610, speaker: 'Ayush', text: 'Tough graph matlab 4 alag-alag cases ek hi graph mein test kiye jaate hain. Pehle se mat socho ki graph chhod doge.' },
      { start: '43:30', end: '44:30', startSec: 2610, endSec: 2670, speaker: 'Ayush', text: 'Jaise magnetic force ka curve direct standard graph hota hai jo yaad hota hai, bina question solve kiye tick lag jaata hai.' }
    ]
  },
  {
    id: 'seg-15',
    primaryTag: "#isomerism struggles",
    serialNumber: '15_00',
    rawFilename: '15_00-44-30_to_00-47-30_Organic_Chemistry_Isomerism_Struggles.mp3',
    startTime: '44:30',
    endTime: '47:30',
    startSeconds: 2670,
    endSeconds: 2850,
    durationFormatted: '03:00',
    label: 'Organic_Chemistry_Isomerism_Struggles',
    title: 'Organic Chemistry Isomerism Struggles (Geometrical and Optical)',
    subject: 'Chemistry',
    tags: ['Organic Chemistry', 'Isomerism', 'Optical Rotation'],
    summary: '',
    keyTakeaways: [],
    fullTranscriptText: `[44:30 - 45:00] Tum tumhaara sabse strong chemistry hai na physics aur biology se? Haan bio mein to lekin nahin sabse strong zoology hai. Phir bio apne aap mein islie weak hai kyonki susten kar raha hoon main kisi tarah, but vahin agar chemistry mein baat kar rahe to chemistry mein hamesha oopar niche oopar niche mera hota rahta hai. Physics to meri ek sustainable us par rahti hai ki yahaan sau ke aaspaas hi chaloonga, na zyaada drop hoga chaahe kuchh bhi aaya jaise ki bas main na zyaada oopar jaata hoon. Physics meri stable hi rahti hai koi improvement hai to mere ko karna hai ek to aur chemistry to bahut zyaada figure karti hai meri to be honest.

[45:00 - 45:30] Mein kya kya ho gaya hai physical chemistry organic in organic mein kya kya ho gaya hai tumhaara? Mera jo like abhi tak jo jitna bhi hai uske hisaab se main bataoon to mere ko mole concept mainne kar rakha hai poora physical mein bola. Physical mein mera mole concept ho gaya hai. Mera redox kaaphi had tak abhi baaki hi hai yah consider karo kyonki mainne kar to liya hai lekin mere ko question practice karne mein abhi bhi errors bahut karta hoon. Bahut si mistakes calculation vaali nahin question understanding mein hi problem karta hoon.

[45:30 - 46:00] Achchha yahaan par redo, achchha hai oxidation ho raha tha, achchha hai reduction ho raha tha usmen. Bahut baat ki jahaan tak baat organic ki to organic mein mera kya kahte hain ham some basic principle of organic chemistry mein naming tak to achchhe se aata hai mujhe. Lekin jab aage chal kar yah geometric aur optical isomerism aa jaata hai. Thik hai? Jahaan par yah movement rotation isa aa jaata hai vahaan se mere ko bahut problem ho jaati hai. Kyonki main structure ka middle compound ko dekh ke distinguish nahin kar paata.

[46:00 - 46:30] Kya ho raha hai even after doing a lot of practice mein consider nahin kar matlab donon mein se kisi ko distinguish nahin kar paata ki achchha yahaan par liver rotatory ya dextro hai us samay. To vah mera ek weak section hai uske lie mere ko thoda samajh mein nahin aata hai. Haan vah jo topic hai usko thoda do tin baar padhana padta hai tab samajh aata hai vah. Mera bhi vah sabse zyaada weak topic tha matlab isomarism vaala jo geometry aur optical isomarism tha na mere dimaag mein kuchh nahin aata tha usmen.

[46:30 - 47:30] Aisa hota hai agar yah compound dekhakar kuchh samajh hi nahin aata hai ki kya bole hain, kya ho raha is compound mein, kidhar se, geometrical life samay hai, kidhar sirph, r for me, s for me, yah sab. To uske lie baar baar tumko jo hai na vah matlab vah padhana padega ki r identify kaise karte hain aur s identify kaise karte hain aur jisse padhoge vah khud bataega pandrah, bis, chaalis example na to usse thoda idea lagta hai ki kya karna hai kisi compound mein.`,
    transcriptLines: [
      { start: '44:30', end: '45:30', startSec: 2670, endSec: 2730, speaker: 'Dhruv', text: 'Physics 100 ke aaspaas stable rehti hai. Chemistry fluctuate karti hai. Mole concept kiya hai, redox mein understanding errors aate hain.' },
      { start: '45:30', end: '46:30', startSec: 2730, endSec: 2790, speaker: 'Dhruv', text: 'Organic mein naming tak theek hai, par geometrical aur optical isomerism mein dextro/laevo aur rotation distinguish nahi hota.' },
      { start: '46:30', end: '47:30', startSec: 2790, endSec: 2850, speaker: 'Ayush', text: 'Mera bhi isomerism sabse weak tha. Compound dekh ke samajh nahi aata kidhar R form hai ya S form. Isko 15-40 examples ke through hi seekha ja sakta hai.' }
    ]
  },
  {
    id: 'seg-16',
    primaryTag: "#ms chouhan",
    serialNumber: '16_00',
    rawFilename: '16_00-47-30_to_00-50-30_Mastering_Isomerism_and_Reference_Books_MS_Chouhan.mp3',
    startTime: '47:30',
    endTime: '50:30',
    startSeconds: 2850,
    endSeconds: 3030,
    durationFormatted: '03:00',
    label: 'Mastering_Isomerism_and_Reference_Books_MS_Chouhan',
    title: 'Mastering Isomerism and Reference Books (MS Chouhan for NEET)',
    subject: 'Chemistry',
    tags: ['Organic', 'MS Chouhan', 'Reference Books'],
    summary: '',
    keyTakeaways: [],
    fullTranscriptText: `[47:30 - 48:00] Mein to jab tak example nahin dekhoge tab tak dikkat aaega. Sabse zyaada important hota hai organic mein ki koi tumhaara jo teacher hai vah tumko example ke through samajhaegi is compound mein aisa is tarike se karke dekho pata kar liya hamne is tarike se karke pata kar liya. Kyonki at the end tumko organic ke paper mein compound hi compound dekhana hai. Haan vah to hamaare examples to dete hain lekin main jab jab sikha rahe hote hain tab to hota hai. Lekin phir vahi baad mein revision karke vaapas khud karne baitho to.

[48:00 - 48:30] Mushkil se ek hoga, do hoga, tukka lag gaya to thik nahin to vo sab badhati hone. Confusion uske aap create ho jaati hai nimaankan ki yaar nahin aise ka labor, trade extra hai. Achchha nahin geometrical action kaun sa hai vo sab problem aane lag jaati milta hai revision ke time par phir se. Agar aisa lage na to ek baar kisi YouTube se lecture dekha karo. Phir se aisa jaise pahli baar padh rahe ho. To phir se ek baar samajh aaega. Phir se samajh aaega to thoda zyaada achchhe se samajh aaega kyonki ek baar suna hua hai ki kya kya hota hai. To jab dubaara suna hua.

[48:30 - 49:00] To thoda sa zyaada achchhe se yaad hoga. Phir se practice karoge phir se samajh zyaada achchhe se aaega practice karne se. Ok. Aur isomarism bahut important chapter hai kyonki jab aage reactions vaale part khatm ho jaengi tumhaare jitna bhi reaction vaala portion hota hai organic ka, to agar question ko mushkil banaana hoga to vah paper mein yah nahin poochhega ki product kya banega. Vah paper mein yah poochhega ki jo product banta hai uske kitne isomers hote hain? Kitne optical isomers hote hain? Kitne geometrical isomers hote hain? Kitne structural isomers hote hain?

[49:00 - 49:30] Pado kahin par aur like vaapas practice par lag jao. Vah karoon ya phir like aur bhi kuchh refer ya prefer karoon matlab apne lie. Book padhane ke lie ya matlab question banaane ke lie extra book? Question practice karne ke lie. Haan organic mein bahut achchhe lete hain extra book. Organic mein to extra book le sakte ho. Aapne li thi? Vah prefer karo phir to?

[49:30 - 50:00] Module tha mere paas to mainne vo bana kar dekha tha, lekin agar tumhaare paas vo hai to vo dekh sakte ho ya phir tum M S chauhaan ka organic ka book le sakte ho NEET ka. Ok. Kyonki vo JEE advance vaale module mein bahut irrelevant reaction vagairah bhi thi matlab vo sab nahin padhana hai hamen, to aisa bhi ho sakta hai ki samajh na aaya ki kaun sa syllabus ka hai to sirph confusion hi confusion ho jae ki haan yah padhana hai ya nahin padhana.

[50:00 - 50:30] Islie NEET oriented book lena hai agar to M S chauhaan vagairah hai. Mainne zyaada main private book nahin jaanta publicly se, lekin M S chauhaan mainne suna tha bahut logon se yahaan apne college mein. Ok. Phir physics mein`,
    transcriptLines: [
      { start: '47:30', end: '48:30', startSec: 2850, endSec: 2910, speaker: 'Ayush', text: 'Revision ke waqt YouTube par lecture dekho jaise pehli baar padh rahe ho. Dobara sunne se dimaag mein behtar yaad rehta hai.' },
      { start: '48:30', end: '49:30', startSec: 2910, endSec: 2970, speaker: 'Ayush', text: 'Isomerism bahut important hai kyunki aage reaction mechanisms mein poochte hain ki product ke kitne isomers bante hain.' },
      { start: '49:30', end: '50:30', startSec: 2970, endSec: 3030, speaker: 'Ayush', text: 'JEE Advanced module mein irrelevant reactions hoti hain. NEET oriented practice ke lie MS Chouhan Organic Chemistry NEET edition best book hai.' }
    ]
  },
  {
    id: 'seg-17',
    primaryTag: "#topic booster",
    serialNumber: '17_00',
    rawFilename: '17_00-50-30_to_00-53-00_Allen_Achiever_vs_Leader_Papers_and_Topic_Booster.mp3',
    startTime: '50:30',
    endTime: '53:00',
    startSeconds: 3030,
    endSeconds: 3180,
    durationFormatted: '02:30',
    label: 'Allen_Achiever_vs_Leader_Papers_and_Topic_Booster',
    title: 'Allen Achiever vs Leader Papers and Topic Booster',
    subject: 'Exam Strategy',
    tags: ['Allen App', 'Topic Booster', 'Leader Batch'],
    summary: '',
    keyTakeaways: [],
    fullTranscriptText: `[50:30 - 51:00] Phir physics mein electrostatic sangh ki dekhakar aap easy hi hai aur jab like exam mein poochhate hain to like yah hard kar dete hain paper ke multiple question mila mila ke puchh rahe hain. Ji. To usmen like us type ke questions main generally unke usmen dekhata hoon kya kahte hain? Jo do batches hai na basically ek to leader hai ek achiever hai. To like achiever vaalon ke jab paper hote hain na to ham like unke next Sunday ko paper hota hai unka aur like ham jaate hain niche Monday ko aur jaakar unke paper ki jo extra copies pade hoti ho leke aa jaate

[51:00 - 51:30] Phir usmen dekhate hain ki kya changes hai, kya difference hai. To like un logon ke paper mein hamaare paper mein yah hai ki like unka ek standard set kiya hua rahta hai pahle test se. Ham logon ke paper mein like bilkul chhote chhote question de dete hain aisa hai, vaisa hai aur phir agle ekdam se agle aane test par bahut bada jump maan lete hain ki haan yaar ab hard question lenge, mix karke denge, merge karke denge. Lekin un logon ke andar vaise questions like bhare pade rahte hain poore paper mein. To like practice aise questions kar kahaan se karoon? Ya to phir main unka

[51:30 - 52:00] Kya karoon? Ya phir iske lie kuchh aur tarika rahega. Unka paper lene ke lie to har baar ek mahine intazaar karna padega na ki unka paper ho. Telegram telegram par elan ka puraana paper rahta hai channel dhoondhana padega. Matlab likhana hai elan previous year major test papers to aa jaega vah aur us par se cross question practice karo aur physics ka question mainne banaaya tha elan app khologe na elan ka app? Haan.

[52:00 - 52:30] Usmen ek aur topic booster naam ka section hoga. Usko khuloge na? Haan topic booster. To usmen class 12 physics mein electrostatics naam ka hoga tha usmen question bank. Usse banaana usmen bahut bahut tough se lekar bahut easy se lekar bahut achchhe questions hain. Ok. Matlab bahut tough bahut bahut tough. Utna tough question matlab aaj tak need mein nahin aaya hoga utna zyaada.

[52:30 - 53:00] Matlab hamaare test mein vah last mein aane laga tha utna tough question jab rename ke time par. Jab unko laga tha ki paper hard aaega to vaise vaise question vah log poochhane lage the. Samajhe? Haan bhaiya. Yah bhi karoonga phir itna aur`,
    transcriptLines: [
      { start: '50:30', end: '51:30', startSec: 3030, endSec: 3090, speaker: 'Dhruv', text: 'Achiever batch ke test papers mein standard questions rehte hain, jabki Leader batch mein achanak se tough jump karte hain. Practice kahan se karoon?' },
      { start: '51:30', end: '52:00', startSec: 3090, endSec: 3120, speaker: 'Ayush', text: 'Telegram par Allen ke previous year major test papers search karo aur practice karo.' },
      { start: '52:00', end: '53:00', startSec: 3120, endSec: 3180, speaker: 'Ayush', text: 'Allen app mein "Topic Booster" section mein class 12 electrostatics question bank banao, usme easy se ultra-tough questions hain.' }
    ]
  },
  {
    id: 'seg-18',
    primaryTag: "#batch pacing",
    serialNumber: '18_00',
    rawFilename: '18_00-53-00_to_00-56-30_Coaching_Batch_Pacing_and_Rethinking_Revision.mp3',
    startTime: '53:00',
    endTime: '56:30',
    startSeconds: 3180,
    endSeconds: 3390,
    durationFormatted: '03:30',
    label: 'Coaching_Batch_Pacing_and_Rethinking_Revision',
    title: 'Coaching Batch Pacing and Rethinking Revision',
    subject: 'Coaching & Mentorship',
    tags: ['Coaching Pacing', 'Batch Merges', 'Revision'],
    summary: '',
    keyTakeaways: [],
    fullTranscriptText: `[53:00 - 53:30] Hamaara syllabus kitna percent hua hai? Bahut slow padha rahe hain log to bhi honest abhi to. Ab ekdam speed up karenge. Abhi vah like aisa rahta hai na ki like ek baar NEET hua uske baad inhonne batch banaaya. Phir uske baad renew hua uske baad ek aur batch banaaya vah thoda aage badhaakar pahle vaale mein merge kar diya. Phir ek aur batch banaaya uske andar kuchh ko padhaaya pahle vaale ke level mila hai aur phir merge kar diya to pahle vaale ka level aage badhaate nahin rok ke rakhate hain unko.

[53:30 - 54:00] Hamaara ek mahine ek dedh mahine lag gae matlab 28 classes lagi physical chemistry ki just to complete first chapter. Haan jabki like unke curriculum ke hisaab se aa gaya iske tab bis hi classes matlab bis bhi nahin lagni chaahie, athaarah hi lagni chaahie. Lekin 28 to 32 classes lagi hamaari usmen.

[54:00 - 54:30] Ismen chalo thik hai phir bhi itna fast nahin kiya hai physical chemistry mein. Organic chemistry bhi thik hi lag rahi hai abhi tak itna kuchh hard lag nahin raha hai inse padhane mein. Botany vaala to sensible hai nahin to uska aisa dhyaan dete nahin hai. Zoology mein hamen achchhe se padha rahe hain. Unka bilkul flow perfect hai kuchh zyaada speed up nahin hai, kuchh zyaada slow nahin hai perfect chal rahe hain usmen. To tumhaare paas time bach jaata hai abhi? Time bachata hai tumhaare paas? Time bach jaata hai matlab kismen?

[54:30 - 55:00] Bahut slow padha rahe hain. Ghar aakar to time bach jaata hoga na matlab ki. Nahin, pahle pahle aisa rahta tha jab slow padha rahe hote the ab to fast kar diya hai. Pahle jab slow padha rahe hote yah hota tha ki main aata tha revision karta tha aur like mere paas din mein like do se tin ghanta maximum lagta tha sab kuchh poore hafte bhar ka revision karne mein. Thik hai? Lekin ab vahi main baithata hoon to like mere ko chaar chaar se chhah ghante ke beach mein baithata hoon. Chaar usse baitha mein nahin aata hai ek flow mein abhi kyonki starting par hi hoon. To like usmen mera yah rahta hai.

[55:00 - 55:30] Chaar se chhah ghante mein abhi lagta hai nahin yaar rah gaya, nahin rah gaya. Practice karna iska rah gaya, uska rah gaya. Abhi like Sunday hai. Abhi main aath aath se nau ke beach parne baith jaoonga office kyonki main din mein thoda so gaya tha. To aath se nau ke beach parne baith jaoonga to like das baarah baje tak aaraam se aaj padhoonga. Morning mein hi thoda padh liya tha mainne kaama karne ke baad. To islie matlab like ab mere ko phir bhi yoon hi lagta rahega raat ko ki nahin yaar yah rah gaya, vah rah gaya. Kyonki aisa lagta hai vahaan mein bol rakha hai ki jo question to practice karo usko ek baar dekha bhi karo.

[55:30 - 56:00] Basis par try karo kyonki thoda memory mein rahega and all lekin nahin kar paata hoon mera lagta hai vah rah jaata hai. Bhai jo question van gaya usko dubaara dekhakar kya karoge? Mujhe bhi bolte the vah class mein. Kuchh faayda nahin hota usse. Matlab jo van gaya usko dubaara dekhakar kuchh faayda nahin hota hai literally kuchh faayda nahin hoga. Matlab agar tum usko dekhoge to vah bas ratta maarna hua vaisa ek bhi chiz nahin aaega paper mein ki tumne jo.

[56:00 - 56:30] Puraana question vahi aa jae paper mein uthakar. Vah to poore luck par based hota hai agar ek question aa gaya to aa gaya. Vaisa bio mein bhale ho sakta hai ki tum jo padh rahe ho, 2 copy vahi hai jo ki vahi hota hi hai ki NCERT read karo paper mein same to same line aaega tumko dekh ke ekdam vahi lagega ki main book padh raha hoon aur book se hi line aa rahe. Lekin physics ka question aisa bilkul bhi nahin hota hai ki question dekh rahe ho aur tumko pata hai ki haan yah mainne ek din kiya tha, mujhe yaad hai. Matlab question zyaada practice karo.`,
    transcriptLines: [
      { start: '53:00', end: '54:00', startSec: 3180, endSec: 3240, speaker: 'Dhruv', text: 'Coaching wale batches merge karte hain, isiliye physical chemistry ka pehla chapter 28-32 classes le gaya.' },
      { start: '54:00', end: '55:30', startSec: 3240, endSec: 3330, speaker: 'Dhruv', text: 'Ghar aakar 4-6 ghante padhta hoon, par coaching kehte hain jo solve kiya use dobara dekha karo.' },
      { start: '55:30', end: '56:30', startSec: 3330, endSec: 3390, speaker: 'Ayush', text: 'Jo ban gaya usko dobara dekh ke time barbad mat karo, woh sirf ratta maarna hai. Bio mein NCERT lines repeat hoti hain, physics mein nahi.' }
    ]
  },
  {
    id: 'seg-19',
    primaryTag: "#rank target",
    serialNumber: '19_00',
    rawFilename: '19_00-56-30_to_01-00-30_Realistic_Targets_Under_5000_Rank_and_Calculus_Practice.mp3',
    startTime: '56:30',
    endTime: '01:00:30',
    startSeconds: 3390,
    endSeconds: 3630,
    durationFormatted: '04:00',
    label: 'Realistic_Targets_Under_5000_Rank_and_Calculus_Practice',
    title: 'Realistic Targets Under 5000 Rank and Calculus Practice',
    subject: 'Exam Strategy',
    tags: ['NEET Target', 'Rank 5000', 'Calculus'],
    summary: '',
    keyTakeaways: [],
    fullTranscriptText: `[56:30 - 57:00] Kuchh kuchh chiz jo hai na teacher is islie nahin bolte hain ki vah har bachche ko bol rahe hain. Jo teacher hai na vah yah sochakar bolta hai ki mujhe har bachche ko bataana hai. Har jaise tumhaara to expected kya hai rank tumko kitni rank chaahie? Paanch sau ya usse kam? Mera kisi paanch hazaar ke oopar aa jaega us rank mera ho jaega usmen expected rank meri 5000 ke under aa jae bas. Lekin jo teacher jab bataate hain to teacher bataate hain.

[57:00 - 57:30] Aur rahta hai ki just selection ho jae. Usse just uske selection hone se lekar uske baad kuchh bhi. To uske lie bataate hain. To vah tum mujhase alag se jaakar poochhoge na aur vah tumse poochhenge ki tumhaara kie kaisa chal raha hai padhai vagairah. To vah tumko alag chizen bataenge. Vah tumko nahin bolenge aisa ki jo tum question kie ho usi ko jaakar dubaara ghar mein dekho.

[57:30 - 58:00] Lekin jo selection ke lie number chaahie hote hain, log jaakar logon ne set kiya hai mark ki 5 50 to 5 70 ke beach ya uske oopar. Lekin agar ek baar tum uske oopar sustain karne lag gae test mein, second semi major tak mein, to phir ham tumhen bataenge ki rank kaise nikaalni hai usmen se. To vah hai lekin utna mere ko lagta nahin hai. Main personally bhi ek baar puchha zyaada, to be honest. Ek baari puchha tha tab mere ko to bas yahi bola tha ki abhi jo padha rahe hain na,

[58:00 - 58:30] Pahle us par focus karo aur uske jitne question hai vah practice karte raho. Dekhane vaali baat to ek class mein se publicly aisa announce kari thi. Lekin yoon bola hai ki jitne bhi questions hain mostly track karo sabko practice kar liya karo. Ab practice bhi kar liya sab kar liya lekin uske baad bhi jo vahaan question karne jao, to physics mein alag aa jaata hai matlab yoon sau ke aas paas to chalo thik hai yaar utne questions to as it is module ke hi uth ke aate hain unke test mein. Vah to koi issue nahin hai. Vah to dekh ki sir mein aata hai physics aur physics.

[58:30 - 59:00] Chemistry in sab mein lekin jo baaki ke questions rahte hain na alag alag hard unko off bhi karne jao matlab attempt bhi karne jao tab bhi aisa lagta hai nahin yaar tum samajhani aa raha hai matlab aapko trigger ho raha hai ki kahaan kya karna hai lekin aap exactly vah pata nahin kar paate ho ki oh yah hard is par yah lagega us par yah lagega and all. Especially jab differentiation and integration related ho. To uske lie to likhate likhana padega yaar matlab pen jitna use karoge utna zyaada.

[59:00 - 59:30] Samajh aaega ki ab kya likhana hai, kya bolna hai, aise dimaag mein karne ki koshish karoge to yahi aaega ki kya hoga, kya hoga, samajh aa raha hai lekin ho nahin pa raha.

[59:30 - 60:00] Aur main matlab normal solve karta tha matlab jo kuchh bhi question aae to 95 percent of the time phir solve ho hi jaata hai question aur differentiation integration vaala problem hai to vo ghar par hi vaise question banao jitne zyaada differentiation integration use ho. Hello. Haan ok samajh gaya.

[60:00 - 60:30] Time par utna hi aasaan lagega physics. Ok. To bol bol bol. Ek last question hai, ek last question hai. Bol bol bol, koi diqqat nahin bol.`,
    transcriptLines: [
      { start: '56:30', end: '57:30', startSec: 3390, endSec: 3450, speaker: 'Dhruv', text: 'Mera target AIR 5000 ke under aana hai bas. Ayush: Pehle 550-570 score sustain karo test mein.' },
      { start: '57:30', end: '59:00', startSec: 3450, endSec: 3540, speaker: 'Ayush', text: 'Differentiation aur integration ke questions mein pen chalana padega, dimaag mein sochne se triggers connect nahi hote.' },
      { start: '59:00', end: '60:30', startSec: 3540, endSec: 3630, speaker: 'Ayush', text: 'Ghar par calculus-heavy questions banao taaki exam time par bilkul normal aur aasaan lage.' }
    ]
  },
  {
    id: 'seg-20',
    primaryTag: "#pyq focus",
    serialNumber: '20_00',
    rawFilename: '20_00-01-00-30_to_01-06-00_NEET_vs_Allen_Mindset_and_PYQ_Focus.mp3',
    startTime: '01:00:30',
    endTime: '01:06:00',
    startSeconds: 3630,
    endSeconds: 3960,
    durationFormatted: '05:30',
    label: 'NEET_vs_Allen_Mindset_and_PYQ_Focus',
    title: 'NEET vs Allen Mindset and PYQ Focus',
    subject: 'Exam Strategy',
    tags: ['NEET vs Allen', 'Mindset', 'PYQs'],
    summary: '',
    keyTakeaways: [],
    fullTranscriptText: `[60:30 - 61:00] Yah ki like bhaiya agar like mera maaloom like kal ko main with practice hota hai iska like jab sustain kar pa raha hoon main apne usmen, main uske criteria mein hoon to like for better rank mere ko kis matlab karne ke lie mere ko kya lagta hai aapko kis type ke mistakes ko avoid karna chaahie agar mere ko bhi mistake hai jaise main silly mistakes karta hoon chemistry mein, physical chemistry mein ki calculate mistake kar di ya kuchh kar diya. Chalie usko thoda avoid karne ke lie kuchh ki mostly practice to karoon yah lekin aur bhi kuchh jise kaam focus par main dhyaan rakhana padega. Calculation mistake to human error ka part main khud jab test dekar aata tha to mere tin chaar question paanch question calculation mistake rahte the Helen ke test mein.

[61:00 - 61:30] Question reading mein galti kar diya ya calculation mein galat kar diya. Abhi agar tumko us us bracket mein jaana hai jismen selection milta hai to tumko main focus karna hai ki syllabus saara padh ke jaana hai. Ek bhi chapter tumhaara chhoota nahin hona chaahie jo tum padh ke ja raha hai aur paper mein aa raha hai utna. Ek bhi chapter chhoota nahin hona chaahie har chapter ka question tumko practice kiya hona chaahie. Tumhaara tumko har chapter ka kuchh na kuchh information matlab like tumko kisi ko explain karna aana chaahie koi bhi chapter. Itna tumko karna

[61:30 - 62:00] To tumko iska matlab ki us chapter mein sab kuchh aata hai, aur jab agar tumko uske baad rank vaale mein part mein hai, tab tumko phir is par focus karna padta hai ki mera syllabus dekh na ho, mera time bahut zyaada bache, taaki main dubaara se revise kar paoon ek baar, yah sab abhi ka factor nahin hai. Pahla factor yah hota hai ki tumhaara syllabus sab complete hona chaahie, tumko paper, paper ke time par jo chapters aa rahe hain, vo saare chapters achchhe se aane chaahie, aur tum vo chapter ko kisi ko explain kar pao, matlab tumko kiska reason kisi chiz kisi fact ke baare mein pata hona chaahie matlab jo book mein hai ya syllabus mein hai tumhaare. Ok brother.

[62:30 - 63:00] Main poore LMS system mein top par rahne ki koshish kar raha hoon sustain sustain karke. Yoon nahin ki ek do baar top aa gae uske baad chalo top 10 mein bhi thik hai, phir uske baad das aa jaega top hundred mein bhi thik hai. Nahin, mere ko main tujhe yahi bol raha hoon, main tujhe yahi bol raha hoon terah jo MBBS degree hai vah MBBS medical college karvaegi islie jo neat ke, toone kitna neat ke PYQ kare hain like matlab kitna saal ke pichhe tak ja chuka hai to dekhane ke lie PYQ?

[63:00 - 63:30] To like jab main abhi twelfth ke saal jab de raha tha tab to mainne like ek baar boards khatm ho gae uske baad chaaloo kiya tha to like itna nahin attempt kiya. Yahi yah ki ek do saal pahle ki kar raha tha ki haan abhi vah jo bahut saare jis year mein year 1 nahin aa gae the us year ka aur usse ek do saal pahle ka kar raha tha, zyaada nahin kar raha tha. Lekin phir jab yah last time yah ho gaya kya kahte hain abhi yahaan par aa gaya hoon tab se yahaan par to sirf PYQ hi PYQ bhare pade hain hamaare ismen modules mein.

[63:30 - 64:00] Thesis mein to main matlab kyon do hazaar baarah tak tak kar chuka hoon mere ko jahaan tak yaad hai physics mein hi diya hua.

[64:00 - 64:30] Paper mein. Yah bolna chaah raha hoon na. Haan main yah bolna chaah raha hoon mujhe aisa realize ho raha hai ki dhruv matlab basically you us zone mein ja chuka hai ki vah LN mein bachchon se compete karna chaah raha hai. Vah NEET ka kya yah jo level hai usmen. Aisa laga to mainne bolti ho.

[64:30 - 65:00] Yaar haan yaar agar Allianz mein top mein rank aane lag gai poore jaypur mein hi tab bhi nahin top 5000 mein to main aa hi sakta hoon. Top 10000 mein to bare minimum aa hi jaoonga. Bhai mujhe mere major ke time par mere Allianz mein rank 100 200 ke baahar aati thi mujhe matlab koi nahin jaanta tha aisa kah lo. Kota mein jaante the jo teachers the vo log. But like jo major mein tha mera rank 1 5202 50, 300 aai aur ab shaayad se Allianz mein meri second highest rank aai hai. India mein.

[65:00 - 65:30] Bahut mein aapke matlab ki aap OMR mein dete the ya CBT mein? Main ghar par CBT dene laga tha bataaya to shuroo mein OMR deta tha. Haan haan. Phir CBT dene laga tha kyonki main ghar aa gaya tha. Aapne major mein CBT diya hai? Haan aur main NEET mein OMR bharkar aaya tha. Kyonki through is baar hi chaaloo hua hai CBT ka kyonki is baar jab

[65:30 - 66:00] Niklega NEET ka and all. Haan, vah bahut late aata hai. Injaam aane vaala hoga na tab bataenge vah ki ham CBT paper lenge ki online ki offline lenge. Abhi last month satrah taarikh ko bataane vaale the September mein. To usmen to CBT ya OMR related kuchh bhi discussion vah bataaya hi nahin. Bas aise hi deriya curriculum and vo sab. To vahi hai computer ki sabhi bhi hoga bhi nahin. Haan.`,
    transcriptLines: [
      { start: '60:30', end: '62:00', startSec: 3630, endSec: 3720, speaker: 'Ayush', text: 'Silly mistakes human error hai. Selection ke liye syllabus ka ek bhi chapter chhoota nahi hona chahiye, aur tum kisi ko explain kar sako.' },
      { start: '62:30', end: '63:30', startSec: 3750, endSec: 3810, speaker: 'Coordinator', text: 'Dhruv, MBBS degree tujhe medical college karwaegi, Allen nahi. Allen ke topper banne ki jagah NEET PYQs par dhyaan de.' },
      { start: '63:30', end: '64:30', startSec: 3810, endSec: 3870, speaker: 'Dhruv', text: 'Maine 2012 tak ke PYQs kar rakhe hain physics mein.' },
      { start: '64:30', end: '66:00', startSec: 3870, endSec: 3960, speaker: 'Ayush', text: 'Allen major tests mein meri rank 150-300 aati thi, par real NEET mein All-India rank top 2nd aayi. Focus on NEET, not Allen batchmates.' }
    ]
  },
  {
    id: 'seg-21',
    primaryTag: "#daily schedule",
    serialNumber: '21_00',
    rawFilename: '21_00-01-06-00_to_01-13-45_Daily_Schedule_Staying_Ahead_of_Coaching_and_Wrapup.mp3',
    startTime: '01:06:00',
    endTime: '01:13:45',
    startSeconds: 3960,
    endSeconds: 4425,
    durationFormatted: '07:45',
    label: 'Daily_Schedule_Staying_Ahead_of_Coaching_and_Wrapup',
    title: 'Daily Schedule Staying Ahead of Coaching and Final Advice',
    subject: 'Coaching & Mentorship',
    tags: ['Daily Schedule', 'Coaching Ahead', 'Final Advice'],
    summary: '',
    keyTakeaways: [],
    fullTranscriptText: `[66:00 - 66:30] Matlab dhruv tera kitna hai daily ka padhai ka time? Matlab like kitna hai? 4 to 6 hour ke beach hi rah pa raha abhi hai kyonki like main matlab coaching se hat ke yahaan par ghar aane ke baad. Main coaching like subah aath baje jaata hoon. Phir do baje tak aa jaata hoon ghar par. Phir yahaan par akele breakfast kar lunch kar liya aur phir uske baad like chaar paanch baje ke beach mein padhane vaapas badh jaata hoon. Phir tab se lekar main aath baje nau baje tak baith ke padh leta hoon. Utna mera ho gaya. Uske baad phir raat ko sone jaane se pahle just jo quick revision hota hai.

[67:00 - 67:30] Also matlab like ise chaar se chhah ghante yah khud kar raha hai. To too matlab kis tarike se isko strategize karta hai ki haan bhai chaar chhah ghante mein main yah karta ya phir chaar se chhah se nahin hoga thoda zyaada karta to jo bhi hai vah exactly aise kaise bata den? Matlab agar main hota na abhi tumhaari jagah just vahin to main sabse pahle jitna jaldi ho sakta hai main redox khatm karke aage badhata redox khatm karke matlab redox achchhe se finish karke uska question vagairah bana ke.

[67:30 - 68:00] Sunday matlab aaj to Sunday tha na to main aaj day docs pratham kar deta. Phir kal se jo hai vo main matlab baaki to mera khatm hota physics, chemistry, bio to main thoda bahut revise karta baaki main coaching se aage ka padta hai matlab jo coaching mein chal raha hai usse thoda aage ka kyonki uske baad kya hota hai ki phir jo aage mein aaega na vo tum vo mujhe revise nahin matlab agar mainne coaching ke aage ka thoda bahut point liya to jab vo coaching mein padha rahe hain to mera revision chal raha hai vo to phir main ghar par aake revise nahin karta usko phir main ghar aake aur aage ka padta.

[68:00 - 68:30] Phir main uske baad aur aage to matlab ek like yah tumhen ek aage ke matlab path par chal rahe ho ki jo coaching mein padha rahe hain vah tumhaare lie revision ka kaam kar raha hai. To tumko ghar aakar extra time nahin dena padta revision ko. Vah matlab ek baar tumko vah boost lene ke lie thoda jald zyaada padna padega ek do din. Matlab paanch chhah din lagenge tumko ki tum thoda zyaada padhoge regressly to tumhaara sab jo bacha khuchha hai vah sab khatm ho jaega. Jaise main aaj बोला Sunday ko main redox khatm kar leta, Monday ko main aata. Thoda zyaada time dekar jo mera pichhe ka bachaavah.

[68:30 - 69:00] Jaldi jaldi main video vagairah dekh ke khatm kar deta hoon online lectures vagairah dekh ke aur phir main aage ka chapter padhata hoon YouTube ya kisi matlab achchhe teacher se jo bhi hai matlab ya to phir like book padh ke agar tumko book padh ke samajh aata hai to aur phir main class jaata to mere lie vah same chapter revision ka kaam karta jo teacher padha raha hai, samajhe? Ok. Aur haan aur main PYQ to abhi bhi kar sakte ho tum to like dropper mein ho to.

[69:00 - 69:30] Haan tumko to saath ke saath hi PYQ karna chaahie. Main jab twelfth mein tha to mainne kya kiya tha ki jab mera board ka paper tha tab main PYQ bana ke jaata tha NEET ke, to mujhe poora chapter bhi revise ho jaata tha usi chalte lagabhag mainne us time PYQ kie the, but tum abhi dropper baitha ho to tum question practice ke lie extra question aur PYQ donon kar sakte ho. Tumhaara to faayda hi hoga usse baad mein time aur bachega tumko varna baad mein tumko PYQ karna padega aur pachchis chhabbis paper abhi mat banaana pachchis chhabbis ka paper tab banaana jab poora syllabus ho jae usko as a test dena chhabbis ke donon paper aur pachchis ka jo ek paper tha vah ki tum agar baithate paper dene do tumhaare kitne marks aate. Ok bhaiya.

[70:00 - 70:30] Ho gaya dhruv? Haan bhaiya. Koi aur jivan ka doubt? Nahin bhaiya ho gaya main jo bhi poochhana sab puchh liya na hai. Pakka? Haan bhaiya. End karen? Ji ji. Thik hai, aayush tujhe koi aur advice hai ya koi aur baat bolni ho? Nahin, main to bas itna hi boloonga yaar matlab abhi tum, abhi tumhaara zyaada syllabus nahin hua hai, tum bahut aasaani se coaching se aage nikal ke kaaphi zyaada achchha score kar sakte hain, matlab abhi to shuroo hua hai na tumhaara, to tum thoda aage nikal jao coaching se, coaching ke bilkul pichhe pichhe chaloge na, vo baad mein itna speed badha denge na ki tumse ek chapter nahin complete hoga aur vo tab tak das chapter khatm kar chuke.

[70:30 - 71:00] Baad mein, last mein aisa karte hain vo. Abhi bahut aaraam aaraam se padhaenge vo, bahut aaraam aaraam se, lekin jab last mein aaega December ka time to unka speed 5 x chalega, ho sakta hai physics mein ek saath paanch paanch chapter chal rahe hon. Aisa bhi hua. Hamaare paas hamaara kya hua tha ki bio khatm ho gai thi aur physics ke chhah chhah class chalte the, chaar chaar class. Chaaron teacher physics ke hi aa rahe hain aur phir ek baar usmen phir baad mein jaakar aisa hone laga tha ki tin teacher ek hi chapter padha rahe hain physics ka tin kone se. Ek shoon se ek last se aur ek beach se shuroo karke aur vah last mein jaakar ek jagah par vah kar de rahe hain ki haan ho gaya chapter khatm.

[71:00 - 71:30] To islie thoda haan to islie aage rahne mein faayda hai tumko thoda coaching se. Bilkul coaching ke saath ya coaching ke pichhe mat chalo. Ok matlab main speed up karke thoda aage hi chalo to better ek chapter aadha chapter at least aage chalo. Jitta aage ek chapter yaadav chapter to minimum uske baad to tum jitta aage padh sakte ho. Jitta jaldi bio to class ke saath karte raho bio tumhaari aaraam se hi chalegi. Bio aaraam se hi khatm karte hain vo log. Physics mein aur chemistry mein vo log last mein itna fast kar denge na ki dimaag ghan chakkar ho jaata hai usmen ki kya karna hai kya nahin karna hai. Ok. Bas yahi advice hai mere taraph se to. Ok, diya. Ho gaya?

[72:00 - 73:45] Haan bhaiya. End up karen aayush? Haan ok. Ok, chal door main end kar raha hoon meeting, thik hai. Ok bhaiya, thank you. Haan. Ek second, ek second hello. Haan haan batao. Haan bhaiya. Vah mainne, vah mainne paanch second vaali jo matlab aapne likha tha na... Haan vah 10 second ka vah mainne nahin banaaya vah kya karoon uska, bhool gaya tha main. Yah rn do matlab abhi ho gaya na connect, baat puchh li jo hona tha vah jo baat... Ho gai to koi diqqat nahin hai usmen, chalega. Thik hai, thik hai. Dhruv, santushti hai? Haan, haan gaya hai. Chaar thik hai. Agar dubaara dubaara dimaag mein doubt baithe to laga lena, thik hai. Ok sir, thank you. Aur baaki hai na best of luck taiyaari ke lie. Main ek hi chiz boloonga, NEET ki preparation karna, elen top karne ki nahin, thik hai. Teri aavaaz se alag alag to elen top karna chaah rahe hain NEET. Unko idea mein rakhakar haan NEET mera exam hai. Elan ki test mera exam nahin hai. Haan bhaiya. Chal thik hai. Thik hai aayush. Ok bhaiya. Thik hai, thik hai, thik hai.`,
    transcriptLines: [
      { start: '01:06:00', end: '01:06:30', startSec: 3960, endSec: 3990, speaker: 'Dhruv', text: 'Daily routine: Subah 8 se 2 baje coaching, 4:30 se 9 baje tak self study, fir bedtime quick revision.' },
      { start: '01:06:30', end: '01:08:30', startSec: 3990, endSec: 4110, speaker: 'Ayush', text: 'Coaching se aadha ya 1 chapter aage padh ke jao. Jab teacher padhaega to revision ho jaega aur ghar par extra time nahi lagega.' },
      { start: '01:10:00', end: '01:12:00', startSec: 4200, endSec: 4320, speaker: 'Ayush', text: 'December aate hi coaching ki speed 5x ho jaegi, 3-4 physics teachers ek sath class lenge. Isiliye abhi se aage chalna zaroori hai.' },
      { start: '01:12:00', end: '01:13:45', startSec: 4320, endSec: 4425, speaker: 'Coordinator', text: 'Ek hi cheez bolunga: NEET ki preparation karna, Allen top karne ki nahi! NEET tumhara exam hai.' }
    ]
  }
];
