
const AllQuestions ={
    historyQuestions:[
        {
            id:'h1',
            type:'dnd',
            question:'Uporządkuj bitwy chronologicznie',
            choices: ['Bitwa pod Saratogą','Bitwa pod Maratonem','Bitwa Warszawska','Oblężenie Orleanu'],
            correct: ['Bitwa pod Maratonem','Oblężenie Orleanu','Bitwa pod Saratogą','Bitwa Warszawska'],

        },
        {
            id:'h2',
            type:'dnd',
            question:'Uporządkuj chronologicznie okresy panowania władców Polski',
            choices: ['Władysław I Herman','Ludwik I Węgierski','Kazimierz I Odnowiciel','Stefan I Batory'],
            correct: ['Kazimierz I Odnowiciel','Władysław I Herman','Ludwik I Węgierski','Stefan I Batory'],

        },
        {
            id:'h3',
            type:'dnd',
            question:'Uporządkuj chronologicznie okresy panowania cesarzy Rzymskich',
            choices: ['Marek Aureliusz','Oktawian August','Kaligula'],
            correct: ['Oktawian August','Kaligula','Marek Aureliusz'],

        },
        {
            id:'h4',
            type:'oneDrop',
            question:'Twórcą heliocentrycznego modelu układu słonecznego był ',
            choices: ['Mikołaj Kopernik','Józef Piłsudski','Benjamin Franklin'],
            myAnswers:[],
            correct: ['Mikołaj Kopernik']
        },
        {
            id:'h5',
            type:'oneDrop',
            question:'Bitwa pod Grunwaldem odbyła się w roku',
            choices: ['1396','1405','1410','1640','1710'],
            myAnswers:[],
            correct:['1410']
        },
        {
            id:'h6',
            type:'oneDrop',
            question:'Ojcem Bolesława Chrobrego był',
            choices: ['Mieszko I','Mieszko II','Kazimierz Wielki','Władysław Jagiełło'],
            myAnswers:[],
            correct:['Mieszko I']
        },
        {
            id:'h7',
            type:'abc',
            question:'W któym roku najprawdopodobniej odbył się Chrzest polski?',
            choices: ['896','966','1016','1236'],
            correct:'966'
        },
        {
            id:'h8',
            type:'abc',
            question:'Które miasto było pierwszą stolicą Polski?',
            choices: ['Gniezno','Płock','Kraków'],
            correct:'Gniezno'
        },
        {
            id:'h9',
            type:'abc',
            question:'Bitwa pod Waterloo zakończyła okres panowania',
            choices: ['Ludwika XIV','Ludwika XII','Napoleona Bonaparte','Napoleona III'],
            correct:'Napoleona Bonaparte'
        },
        {
            id:'h10',
            type:'abc',
            question:'Popiersie którego prezydenta nie znajduje się na Mount Rushmore?',
            choices: ['George Washington','Thomas Jefferson','John F. Kennedy','Theodore Roosevelt','Abraham Lincoln'],
            correct:'John F. Kennedy'
        },
    ],
    motorizationQuestions:[
        {
            id:'m1',
            type:'dnd',
            question:'Ustaw koncerny smochodowe malejąco według ilości produkowanych aut w 2020r.',
            choices: ['Toyota','General Motors','Volkswagen'],
            correct: ['Toyota','Volkswagen','General Motors'],

        },
        {
            id:'m2',
            type:'abc',
            question:'Do którego koncernu należy marka Lexus ?',
            choices: ['Stellantis','Toyota','General Motors','Volkswagen'],
            correct: ['Toyota'],

        },
        {
            id:'m3',
            type:'dnd',
            question:'Ustaw firmy motoryzacyjne od najstarszej do najmłodszej',
            choices: ['FIAT','Ford Motor Company','Mercedes-Benz','FSO'],
            correct: ['Mercedes-Benz','FIAT','Ford Motor Company','FSO'],

        },
        {
            id:'m4',
            type:'oneDrop',
            question:'FSO Polonez przestał być produkowany w ',
            choices: ['1995r.','1999r.','2002r.','2010r'],
            myAnswers:[],
            correct: ['2002r.']
        },
        {
            id:'m5',
            type:'oneDrop',
            question:'Napęd na tylne koła to',
            choices: ['RWD','FWD','AWD','4WD'],
            myAnswers:[],
            correct:['RWD']
        },
        {
            id:'m6',
            type:'oneDrop',
            question:'Układ hamulcowy przeciwdziałający blokowaniu kół to',
            choices: ['NSW','ABS','ARS','TVN'],
            myAnswers:[],
            correct:['ABS']
        },
        {
            id:'m7',
            type:'abc',
            question:'Obowiązkowe ubezpieczenie to',
            choices: ['AC','NNW','OC'],
            correct:'OC'
        },
        {
            id:'m8',
            type:'abc',
            question:'Co to jest Liftback ?',
            choices: ['Typ nadwozia','Typ podwozia','Rodzaj kierownicy'],
            correct:'Typ nadwozia'
        },
        {
            id:'m9',
            type:'abc',
            question:'W którym roku odbył się pierwszy oficjalny wyścig samochodowy ?',
            choices: ['1885','1894','1907','1915'],
            correct:'1894'
        },
        {
            id:'m10',
            type:'abc',
            question:'Co oznacza skrót TDI',
            choices: ['Turbo Direct Injection','Turbo Dynamic Injection','Travel Dynamic Injection'],
            correct:'Turbo Direct Injection'
        },
    ],
    cultureQuestions:[
        {
            id:'c1',
            type:'dnd',
            question:'Uporządkój okresy literackie chronologicznie',
            choices: ['Renesans','Oświecenie','Barok','Średniowiecze'],
            correct: ['Średniowiecze','Renesans','Barok','Oświecenie'],

        },
        {
            id:'c2',
            type:'dnd',
            question:'Uporządkój chronologicznie książki z serii o Harrym Potterze',
            choices: ['Więzień Azkabanu','Czara Ognia','Kamień Filozoficzny','Komnata Tajemnic'],
            correct: ['Kamień Filozoficzny','Komnata Tajemnic','Więzień Azkabanu','Czara Ognia'],

        },
        {
            id:'c3',
            type:'dnd',
            question:'Uporządkój chronologicznie tytuły które otrzymały Oscara za najlepszy film',
            choices: ['Rocky','Forrest Gump','Milczenie owiec','Ojciec chrzestny'],
            correct: ['Ojciec chrzestny','Rocky','Milczenie owiec','Forrest Gump'],

        },
        {
            id:'c4',
            type:'oneDrop',
            question:'Wieża Eiffla ma wysokość ',
            choices: ['190m','286m','324m','415m'],
            myAnswers:[],
            correct: ['324m']
        },
        {
            id:'c5',
            type:'oneDrop',
            question:'Najczęściej nominowana do Oscara aktorka w historii to ',
            choices: ['Meryl Streep','Geena Davis', 'Angelina Jolie','Marilyn Monroe'],
            myAnswers:[],
            correct:['Meryl Streep']
        },
        {
            id:'c6',
            type:'oneDrop',
            question:'Anime jest gatunkiem filmowym pochodzącym z ',
            choices: ['Chin','Wietnamu','Japonii','Rosji'],
            myAnswers:[],
            correct:['Japonii']
        },
        {
            id:'c7',
            type:'abc',
            question:'Kto wcielił się w rolę tytułowego Spider-mana w filmie z 2002 roku ?',
            choices: ['Andrew Garfield','Tobey Maguire','Tom Holland','James Franco'],
            correct:'Tobey Maguire'
        },
        {
            id:'c8',
            type:'abc',
            question:'W którym wieku tworzył Pablo Picasso? ',
            choices: ['XIV','XVI','XVIII','XX'],
            correct:''
        },
        {
            id:'c9',
            type:'abc',
            question:'Thanos jest głównym przeciwnikiem w serii filmów',
            choices: ['Liga Sprawiedliwości','Avengers','X-MEN','Spider-Man'],
            correct:'Avengers'
        },
        {
            id:'c10',
            type:'abc',
            question:'Mona Lisa to obraz namalowany przez',
            choices: ['Leonarda DiCaprio','Leonarda da Vinci','Michała Anioła','Rafaela Santi'],
            correct:'Leonarda da Vinci'
        },
    ],
    programmingQuestions:[
        {
            id:'p1',
            type:'dnd',
            question:'Uporządkuj przedrostki od najmniejszego do największego',
            choices: ['mega','kilo','tera','giga'],
            correct: ['kilo','mega','giga','tera'],

        },
        {
            id:'p2',
            type:'dnd',
            question:'Ustaw wersje androida w kolejności od najstarszej do najmłodszej',
            choices: ['Marshmallow','KitKat','Oreo','Nougat'],
            correct: ['KitKat','Marshmallow','Nougat','Oreo'],

        },
        {
            id:'p3',
            type:'dnd',
            question:'Uporządkuj zmienne całkowite rosnąco według zajmowanego miejsca ',
            choices: ['short','long','int','byte'],
            correct: ['byte','short','int','long'],

        },
        {
            id:'p4',
            type:'oneDrop',
            question:'Kod binarny składa się z ',
            choices: ['0 i 1','a, b, c, d','cyfr od 1 do 10','cyfr od 1 do 16'],
            myAnswers:[],
            correct: ['0 i 1']
        },
        {
            id:'p5',
            type:'oneDrop',
            question:'Git to ',
            choices: ['biblioteka Java','Język programowania','Rozproszony system kontroli wersji','Wersja Android 8.1'],
            myAnswers:[],
            correct:['Rozproszony system kontroli wersji']
        },
        {
            id:'p6',
            type:'oneDrop',
            question:'Python to',
            choices: ['Język wysokiego poziomu','Język niskiego poziomu','Język maszynowy'],
            myAnswers:[],
            correct:['Język wysokiego poziomu']
        },
        {
            id:'p7',
            type:'abc',
            question:'React.js jest biblioteką którego języka programowania?',
            choices: ['C++','JavaScript','Java','C#'],
            correct:'JavaScript'
        },
        {
            id:'p8',
            type:'abc',
            question:'Oficjalnym językiem programowania dla platformy Android jest',
            choices: ['HTML','Kotlin','JavaScript','Python'],
            correct:'Kotlin'
        },
        {
            id:'p9',
            type:'abc',
            question:'Jaką nazwę miała pierwsza wersja Androida ?',
            choices: ['Donut','Nougat','Apple Pie'],
            correct:'Apple Pie'
        },
        {
            id:'p10',
            type:'abc',
            question:'Standardem wykożystywanym w JavaScript jest',
            choices: ['ECMAScript','CMAScript','MAScript','EMAScript'],
            correct:'ECMAScript'
        },
    ],
    technologyQuestions:[
        {
            id:'t1',
            type:'dnd',
            question:'Ustaw osiągnięcia technologiczne chronologicznie',
            choices: ['mikroprocesor','cyfrowy aparat fotograficzny','sieć telefonii komórkowej','kuchenka mikrofalowa'],
            correct: ['kuchenka mikrofalowa','mikroprocesor','sieć telefonii komórkowej','cyfrowy aparat fotograficzny'],

        },
        {
            id:'t2',
            type:'dnd',
            question:'Uporządkój gry chronologicznie według daty wydania',
            choices: ['Super Mario Bros','Wiedźmin 3: Dziki Gon','Grand Theft Auto V','Heroes of Might and Magic III: Cień Śmierci'],
            correct: ['Super Mario Bros','Heroes of Might and Magic III: Cień Śmierci','Grand Theft Auto V','Wiedźmin 3: Dziki Gon'],

        },
        {
            id:'t3',
            type:'dnd',
            question:'Ustaw rosnąco rodzaje promieniowania elektromagnetycznego według energii',
            choices: ['X','Gamma','IR','UV',],
            correct: ['IR','UV','X','Gamma'],

        },
        {
            id:'t4',
            type:'oneDrop',
            question:'Liderem na rynku kart graficznych jest ',
            choices: ['Nvidia','AMD','Lenovo','Apple'],
            myAnswers:[],
            correct: ['Nvidia']
        },
        {
            id:'t5',
            type:'oneDrop',
            question:'Pierwszym komputerem był ',
            choices: ['ENIAC','APPLE','DELL','GOOGLE'],
            myAnswers:[],
            correct:['ENIAC']
        },
        {
            id:'t6',
            type:'oneDrop',
            question:'Skrótem oznaczającym operacje zmiennoprzecinkowe na sekundę jest ',
            choices: ['FLPP','FLOPS','PLOP','5GSM'],
            myAnswers:[],
            correct:['FLOPS']
        },
        {
            id:'t7',
            type:'abc',
            question:'Czym było Commodore?',
            choices: ['Marką komputerów','Systemem operacyjnym','Pierwszą komercyjną pralką'],
            correct:'Marką komputerów'
        },
        {
            id:'t8',
            type:'abc',
            question:'Przeglądarką internetową nie jest ',
            choices: ['Opera','Java','Chrome','Safari'],
            correct:'Java'
        },
        {
            id:'t9',
            type:'abc',
            question:'Pierwszy załogowy lot kosmiczny miał miejsce w roku',
            choices: ['1961','1964','1969','1971'],
            correct:'1961'
        },
        {
            id:'t10',
            type:'abc',
            question:'W którym roku miał miejsce pierwszy lot samolotem',
            choices: ['1903','1907','1910','1915'],
            correct:'1903'
        },
    ]
}
export default AllQuestions;
