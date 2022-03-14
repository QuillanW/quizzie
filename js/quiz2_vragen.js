const questions = [
    {
        type: 'multipleChoice',
        question: 'Welke soorten verdrinken zijn er?',
        options: [
            'Natte verdrinking, stille verdrinking en geluidloze verdrinking.',
            'Natte verdrinking, stille verdrinking en een droge verdrinking.',
            'Natte verdrinking, zwijgende verdrinking en een drogen verdrinking.',
        ],
        answer: 1
    },
    {
        type: 'multipleChoice',
        question: 'Welke oppervlaktewater hebben we?',
        options: [
            'Sierwater, beroepsvaart/ recreatievaart en waterbeheersing Nederland',
            'Sierwater, beroepsvaart/ recreatievaart en al het andere',
            'Sierwater, recreatievaar en beroepsvaar, water wat zorgt voor waterbeheersing in Nederland en all ander water.',
        ],
        answer: 0
    },
    {
        type: 'multipleChoice',
        question: 'Wat betekend de rood/gele vlag?',
        options: [
            'Verboden te zwemmen!',
            'Bewaakt gebied.',
            'Gebied dat tussen twee van deze vlaggen ligt is de baders zone. Op de post betekend de vlag: reddingbrigade is aanwezig en hout toezicht.',
            'Gevaarlijk zwemwater.',
        ],
        answer: 2
    },
    {
        type: 'multipleChoice',
        question: 'Bureau Slachtofferhulp kan je voor verschillende dingen terecht. Welke 3 keuzes zijn goed?',
        options: [
            'Geeft info over schadevergoeding, verwijst door naar andere hulpverleners en helpt bij het invullen van formulieren.',
            'Praat met slachtoffers, gaat mee naar politie, arts of advocaat en helpt met opruimen.',
            'Verwijst naar deskundige, helpt met opruimen en kan zorgen voor contact met lotgenoten.',
        ],
        answer: 0
    },
    {
        type: 'multipleChoice',
        question: 'Hoe moet je alarm slaan?',
        options: [
            'Plaats, aantal slachtoffers, wat is het letsel van het slachtoffer en gegevens van de melder.',
            'Geef plaats door, aard van het ongeval, aantal slachtoffers, is er sprake van letsel en je laat weten hou de melder bereikbaar is.',
            'Plaats, waar het is gebeurd, hoeveel slachtoffers, wie je nodig hebt en hoe laat het is.',
        ],
        answer: 1
    },
    {
        type: 'number',
        question: 'Wat is het landelijke alarmnummer?',
        answer: 112
    },
    {
        type: 'multipleChoice',
        question: 'Wat is de veiligheidscode voor als je zelf drenkeling bent?',
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
            'Gevaarlijke stroming en veel scheepvaartverkeer.',
            'Het water is koud, gevaarlijke stroming en kans op ziektes.',
            'Je weet niet waneer de sluis open en dicht gaat.',
        ],
        answer: 0
    },
    {
        type: 'text',
        question: 'Welk soort water hebben we in Nederland naast oppervlaktewater',
        answer: ['zeewater', 'zee water', 'zee-water']
    },
    {
        type: 'text',
        question: 'Wat betekend de witte vlag met een blouw vraagteken?',
        // Ik kan helaas niet alle mogelijke variaties invullen :(.
        answer: ['kind gevonden', 'kindgevonden', 'gevonden kind', 'gevondenkind']
    },
]