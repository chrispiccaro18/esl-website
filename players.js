const players = [
    {
        first: "Matt",
        last: "Boydd",
        position: "OF, IF",
        hand: "",
        team: "Angels",
    },
    {
        first: "Sam",
        last: "Fulmer",
        position: "",
        hand: "",
        team: "Angels",
    },
    {
        first: "Ben",
        last: "Gird",
        position: "IF,P",
        hand: "",
        team: "Angels",
    },
    {
        first: "Pierce",
        last: "Graham-Jones",
        position: "",
        hand: "",
        team: "Angels",
    },
    {
        first: "Jason",
        last: "Klein",
        position: "C, OF",
        hand: "",
        team: "Angels",
    },
    {
        first: "Bill",
        last: "Loouis",
        position: "IF, OF",
        hand: "",
        team: "Angels",
    },
    {
        first: "Will",
        last: "Lucas",
        position: "",
        hand: "",
        team: "Angels",
    },
    {
        first: "Dan",
        last: "Northrop",
        position: "OF",
        hand: "R",
        team: "Angels",
    },
    {
        first: "John",
        last: "Ogden",
        position: "OF",
        hand: "",
        team: "Angels",
    },
    {
        first: "Sam",
        last: "Rio/Rasta",
        position: "P, C",
        hand: "R",
        team: "Angels",
    },
    {
        first: "John",
        last: "Seredynski",
        position: "IF",
        hand: "",
        team: "Angels",
    },
    {
        first: "Aaron",
        last: "Sumpter",
        position: "OF",
        hand: "",
        team: "Angels",
    },
    {
        first: "Derek",
        last: "Vincent",
        position: "IF, OF",
        hand: "",
        team: "Angels",
    },
    {
        first: "Chris",
        last: "Whelan",
        position: "",
        hand: "",
        team: "Angels",
    },
    {
        first: "Jason",
        last: "Zina",
        position: "OF",
        hand: "L",
        team: "Angels",
    },
    {
        first: "Brian",
        last: "Bailey",
        position: "IF",
        hand: "R",
        team: "Knights",
    },
    {
        first: "Paul",
        last: "Bamundo",
        position: "OF",
        hand: "R",
        team: "Knights",
    },
    {
        first: "Steve",
        last: "Berger",
        position: "C",
        hand: "L",
        team: "Knights",
    },
    {
        first: "Rich",
        last: "Bliss",
        position: "IF",
        hand: "R",
        team: "Knights",
    },
    {
        first: "Tony",
        last: "Enico",
        position: "IF",
        hand: "",
        team: "Knights",
    },
    {
        first: "Gabe",
        last: "Leitteri",
        position: "IF",
        hand: "",
        team: "Knights",
    },
    {
        first: "Dillion",
        last: "Zaro",
        position: "",
        hand: "",
        team: "Knights",
    },
    {
        first: "Brendan",
        last: "Hughes",
        position: "OF",
        hand: "L",
        team: "Knights",
    },
    {
        first: "Stephen",
        last: "Kerins",
        position: "IF",
        hand: "",
        team: "Knights",
    },
    {
        first: "Mike",
        last: "Manion",
        position: "P, IF",
        hand: "R, L",
        team: "Knights",
    },
    {
        first: "Chris",
        last: "Piccaro",
        position: "OF",
        hand: "R",
        team: "Knights",
    },
    {
        first: "Marc",
        last: "Shatzer",
        position: "OF, IF",
        hand: "",
        team: "Knights",
    },
    {
        first: "Jordan",
        last: "Smith",
        position: "",
        hand: "",
        team: "Knights",
    },
    {
        first: "Doug",
        last: "Stevens",
        position: "OF, IF",
        hand: "R",
        team: "Knights",
    },
    {
        first: "Joe",
        last: "Warren",
        position: "P, IF, OF",
        hand: "R",
        team: "Knights",
    },
    {
        first: "Tom",
        last: "Black",
        position: "",
        hand: "",
        team: "Stars",
    },
    {
        first: "Charlie",
        last: "Blacket",
        position: "IF",
        hand: "",
        team: "Stars",
    },
    {
        first: "Brendan",
        last: "Bouchard",
        position: "",
        hand: "",
        team: "Stars",
    },
    {
        first: "Colin",
        last: "Casey",
        position: "",
        hand: "",
        team: "Stars",
    },
    {
        first: "Thomas",
        last: "Cullen",
        position: "IF",
        hand: "L",
        team: "Stars",
    },
    {
        first: "Pearce",
        last: "Davidson",
        position: "",
        hand: "",
        team: "Stars",
    },
    {
        first: "Zach",
        last: "Harrison",
        position: "OF",
        hand: "",
        team: "Stars",
    },
    {
        first: "Cody",
        last: "Liebman",
        position: "",
        hand: "",
        team: "Stars",
    },
    {
        first: "Mike",
        last: "Manzo",
        position: "IF",
        hand: "L",
        team: "Stars",
    },
    {
        first: "Garrett",
        last: "Noonan",
        position: "",
        hand: "",
        team: "Stars",
    },
    {
        first: "Scott",
        last: "Principi",
        position: "P, IF, OF",
        hand: "L",
        team: "Stars",
    },
    {
        first: "John",
        last: "Rigo",
        position: "OF",
        hand: "",
        team: "Stars",
    },
    {
        first: "Brandon",
        last: "Snow",
        position: "IF, OF",
        hand: "",
        team: "Stars",
    },
    {
        first: "Ryan",
        last: "Wilson",
        position: "P, IF, OF",
        hand: "",
        team: "Stars",
    },
    {
        first: "John",
        last: "Ackerman",
        position: "P, OF",
        hand: "L",
        team: "Stars",
    },
    {
        first: "Ben",
        last: "Bresnahan",
        position: "",
        hand: "",
        team: "Sub",
    },
    {
        first: "Rui",
        last: "DeGouveia",
        position: "",
        hand: "",
        team: "Sub",
    },
    {
        first: "Todd",
        last: "Deklyn",
        position: "",
        hand: "",
        team: "Sub",
    },
    {
        first: "K.C.",
        last: "Hamann",
        position: "",
        hand: "",
        team: "Sub",
    },
    {
        first: "Peter",
        last: "Hann",
        position: "",
        hand: "",
        team: "Sub",
    },
    {
        first: "Scott",
        last: "Horn",
        position: "",
        hand: "",
        team: "Sub",
    },
    {
        first: "Dan",
        last: "Kunetz",
        position: "",
        hand: "",
        team: "Sub",
    },
    {
        first: "Matt",
        last: "Leger",
        position: "",
        hand: "",
        team: "Sub",
    },
    {
        first: "Ziad",
        last: "Mantoura",
        position: "",
        hand: "",
        team: "Sub",
    },
    {
        first: "JP",
        last: "Morrell",
        position: "",
        hand: "",
        team: "Sub",
    },
    {
        first: "Jeff",
        last: "Ortolano",
        position: "",
        hand: "",
        team: "Sub",
    },
    {
        first: "Melvin",
        last: "Pagan",
        position: "",
        hand: "",
        team: "Sub",
    },
    {
        first: "Danny",
        last: "Porcelli",
        position: "",
        hand: "",
        team: "Sub",
    },
    {
        first: "Richard",
        last: "Summers",
        position: "",
        hand: "",
        team: "Sub",
    },
    {
        first: "Kellen",
        last: "Williams",
        position: "",
        hand: "",
        team: "Sub",
    },
];

export default players;