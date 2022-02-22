// const questionTypes = ['multipleChoice', 'text', 'number']
const questions = [
    {
        type: 'multipleChoice',
        question: 'Welke soorten verdrinken zijn er?',
        options: [
            'Natte verdrinking, stille verdrinking en geluidlose verdrinking.',
            'Natte verdrinking, stille verdrinking en een droge verdrinking.',
            'Natte verdrinking, zwijgende verdrinking en een drogen verdrinking.',
        ],
        answer: 1
    },
    {
        type: 'multipleChoice',
        question: 'Welke oppervlaktewater hebben we?',
        options: [
            'Versierwater, beroepsvaart/ recreatievaart en al het andere',
            'Sierwater, beroepsvaart/ recreatievaart en waterbeheersing nederland',
            'Sierwater, recreatievaar en beroepsvaar, water wat zorgt voor waterbeheersing in nederland en all ander water.',
        ],
        answer: 1
    },
    {
        type: 'multipleChoice',
        question: 'Wat betekend de rood/gele vlag?',
        options: [
            'Verboden te zwemmen!',
            'Bewaakt gebied.',
            'Gebied dat tussen twee van deze vlaggen ligt is de baderszone. Op de post betekend de vlag: reddingbrigade is aanwezig en hout toezicht.',
            'Gevaarlijk zwemwater.',
        ],
        answer: 2
    },
    {
        type: 'multipleChoice',
        question: 'Bureau Slachtofferhulp kan je voor verschillende dingen terecht. Welke 3 keuzes zijn goed?',
        options: [
            'Geeft info over schadevergoeding, verwijst door naar andere hulpverleners en helpt bij het invullen van formulieren.',
            'Praat met slachttoffers, gaat mee naar politie, arts of advocaat en helpt met opruimen.',
            'Verwijst naar deskundige, helpt met opruimen en kan zorgen voor contact met lotgenoten.',
        ],
        answer: 0
    },
    {
        type: 'multipleChoice',
        question: 'Hoe moet je alarm slaan?',
        options: [
            'Plaats, aantal slachttoffers, wat is het letsel van het slachttoffer en gegevens van de melder.',
            'Geef plaats door, aard van het ongeval, aantal slachttoffers, is er sprake van letsel en je laat weten hou de melder bereikbaar is.',
            'Plaats, waar het is gebeurd, hoeveel slachttofers, wie je nodig hebt en hoe laat het is.',
        ],
        answer: 1
    },
    {
        type: 'multipleChoice',
        question: 'Wat is het landelijke alarmnummer?',
        options: [
            '119',
            '112',
            '0900-8844',
        ],
        answer: 1
    },
    {
        type: 'multipleChoice',
        question: 'Wat is de veiligheidcode voor als je zelf drenkeling bent?',
        options: [
            'Blijf kalm en beweeg niet meer in het water.',
            'Blijf kalm, denk aan eigen veiligheid, hou je hoofd boven water en zwem zo snel mogelijk naar de kant.',
            'Blijf klam, probeer op je rug te drijven of je hoofd boven water te houden en probeer aandacht te trekken.',
        ],
        answer: 2
    },
    {
        type: 'multipleChoice',
        question: 'Waarom is het gevaarlijk om bij sluizen te zwemmen?',
        options: [
            'Het water is koud, gevaarlijke stromming en kans op ziektes.',
            'Gevaarlijke stroming en veel scheepsvaartverkeer.',
            'Je weet niet waneer de sluis open en dicht gaat.',
        ],
        answer: 1
    },
    {
        type: 'text',
        question: 'This is question 3',
        answer: ['qwerty', 'qwertz', 'azerty']
    },
    {
        type: 'number',
        question: 'This is question 4',
        answer: 42
    },
]