// ==UserScript==
// @name DNR LIST
// @namespace http://tampermonkey.net/
// @version 2
// @description DNR
// @match https://login.pep.hilton.com/*
// @updateURL    https://raw.githubusercontent.com/ImTaliesin/HiltonQolScript/main/DNR.js
// @downloadURL  https://raw.githubusercontent.com/ImTaliesin/HiltonQolScript/main/DNR.js
// @grant GM_addStyle
// @grant GM_setValue
// @grant GM_getValue
// ==/UserScript==

(function() {
    'use strict';
      const doNotRentList = {
"Aaron": {"Tawnyi": true},
"Addington": {
  "Summer": true
  },
"Aguayo": {
  "Joshua": true
  },
"Aguirre": {
  "Nichole": true,
  "Aleja": true
  },
"Alander": {
  "Deana": true,
  "Deania": true
  },
"Alvarez": {
  "Blanca": true
  },
"Alsaqqa": {
  "Mohommad": true
  },
"Arias": {
  "Katie": true
  },
"Arrington": {
  "Aleisha": true,
  "Aliesha": true
  },
"Atuld": {
  "Taljinden": true
  },
"Atwal": {
  "Taljinder": true
  },
"Barron": {
  "John": true,
  "Vince": true
  },
"Bays": {
  "Jerry": true
  },
"Beam": {
  "Hope": true
  },
"Bloomer": {
  "Britani": true
  },
"Blied": {
  "Summer": true
  },
"Booth": {
  "Andrea": true
  },
"Boydstun": {
  "Shannon": true
  },
"Branden": {
  "Christina": true
  },
"Brown": {
  "Bradley": true,
  "Vamessa": true,
  "Kayla": true
  },
"Buchnoff": {
  "Jodi": true
  },
"Bundy": {
  "Danielle": true
  },
"Casaneda": {
  "Victoria": true
  },
"Casey": {
  "Lynette": true
  },
"Castaneda": {
  "Olivia": true,
  "Emilio": true
  },
"Church": {
  "Lauren": true
  },
"Clark": {
  "Michel": true
  },
"Clugton": {
  "Jason": true
  },
"Cooper": {
  "Robert": true,
  "Stephen": true
  },
"Corrales": {
  "Daniel": true
  },
"Cruz": {
  "Myra": true
  },
"Davis": {
  "Daniel": true,
  "Bob": true
  },
"Dority": {
  "Aaron": true
  },
"Drachalabi": {
  "Hafed": true
  },
"Duran": {
  "Kashmire": true
  },
"Fairbanks": {
  "Aaron": true
  },
"Franco": {
  "Jose": true
  },
"Fosdick": {
  "Melissa": true
  },
"Galindo": {
  "Leticia": true
  },
"Garrett": {
  "Michel": true
  },
"Garcia": {
  "Huho": true
  },
"Gomesortiz": {
  "Brooke": true
  },
"Gomez": {
  "Antonio": true,
  "Anthony": true
  },
"Good Win": {
  "Erika": true
  },
"Green": {
  "Aaron": true
  },
"Griffin": {
  "Simone": true
  },
"Gutierrez": {
  "Selina": true,
  },
"Hall": {
  "Aaron": true,
  "Helen": true,
  "Christopher": true
  },
"Harding": {
  "Ronald": true
  },
"Harlan": {
  "Floyd Mary": true
  },
"Heffner": {
  "Christopher": true
  },
"Hernandez": {
  "Robert": true,
  "Alejandro": true,
  "Dora": true
  },
"Holcomb": {
  "Larry": true
  },
"Holder": {
  "Paris": true
  },
"Hood": {
  "Joshua": true
  },
"Howard": {
  "Megan": true
  },
"Ilan": {
  "Gabby": true
  },
"Jackson": {
  "Malissa": true,
  "Stephanie": true,
  "George": true
  },
"Jaramillo": {
  "Jorge": true
  },
"Jones": {
  "Roger": true
  },
"Jurado": {
  "Jesse": true
  },
"Kent": {
  "Nate": true
  },
"Kothary": {
  "Viral": true
  },
"Lacy": {
  "Patrick": true
  },
"Laguna": {
  "Nick": true
  },
"Le": {
  "John": true
  },
"Leanos": {
  "Angel": true
  },
"Lewis": {
  "Chelsea": true
  },
"Lima": {
  "Victoria": true
  },
"Limas": {
  "Lisa": true
  },
"Little": {
  "Austin": true
  },
"Lombardi": {
  "Yalezka": true
  },
"Lovelady": {
  "Sara": true
  },
"Luna": {
  "Andrew": true
  },
"Marquez": {
  "Robert": true,
  "Christina": true
  },
"Martinez": {
  "Freddie": true,
  "Jennifer": true,
  "Daisy": true,
  "Nathan": true
  },
"Matson": {
  "Matthew": true
  },
"Max Well": {
  "James": true,
  "Andrew": true
  },
"Mcganty": {
  "Angela": true
  },
"Melton": {
  "Brittny": true,
  "Britnny": true
  },
"Mendes": {
  "Ashleigh": true
  },
"Mendez": {
  "John": true
  },
"Mendoza": {
  "Rosalba": true,
  "Mayra": true
  },
"Miller": {
  "Paige": true,
  "Jimmy": true
  },
"Moe": {
  "Amy": true
  },
"Moua": {
  "Andy": true
  },
"Mousesian": {
  "Ara": true
  },
"Muhawi": {
  "Michel": true
  },
"Murphy": {
  "Dejanique": true
  },
"Noroya": {
  "Hugo": true
  },
"Nunez": {
  "Monica": true
  },
"Ochoa": {
  "Lupe": true
  },
"Ortegon": {
  "Clarissa": true
  },
"Pacini": {
  "Denise": true
  },
"Peele": {
  "Bobby": true
  },
"Perez": {
  "September": true
  },
"Peterson": {
  "Dustin": true
  },
"Pugh": {
  "Sara": true
  },
"Quintana": {
  "Hector": true
  },
"Red": {
  "Ferrari": true
  },
"Reis": {
  "Shannon": true
  },
"Rendon": {
  "Andrew": true
  },
"Robertson": {
  "Kristie": true
  },
"Robinson": {
  "Mr Michael": true
  },
"Romero": {
  "Carlos": true
  },
"Sears": {
  "Jashae": true
  },
"Selling": {
  "Gary": true
  },
"Schroll": {
  "Nick": true
  },
"Shoemaker": {
  "Brian": true
  },
"Singh": {
  "Paul": true,
  "Karan": true
  },
"Smith": {
  "Jeff": true,
  "Rodney": true,
  "Latoya Res": true
  },
"Souknarong": {
  "Olivia": true
  },
"Soto": {
  "Charles": true
  },
"Stephenson": {
  "James": true
  },
"Stevenson": {
  "Michael": true
  },
"Strong": {
  "Jennifer": true
  },
"Taylor": {
  "Amber": true,
  "Derek": true
  },
"Strohl": {
  "Jose": true
  },
"Tounton": {
  "Tammy": true
  },
"Turner": {
  "Michael": true
  },
"Uppal": {
  "Simer": true
  },
"Vang": {
  "Bao": true,
  "Bj": true,
  "Mong": true
  },
"Varda": {
  "Cheyenne": true
  },
"Vogt": {
  "Stacey": true,
  "Stayce": true
  },
"Voivedich": {
  "Jaime": true
  },
"Volvedia": {
  "Janie": true
  },
"Young": {
  "Talyn": true
  },
"Wood": {
  "Nicolas": true
  },
"Wyrick": {
  "Hugh": true
  },
"Yanko": {
  "Silvia": true
  },
"Zavala": {
  "Juanita": true
  },
"Zero": {
  "Fax": true
  },
"Adams": {
  "Jeremy": true
  },
"Aeticiga": {
  "Thomas Rudy": true
  },
"Aiken Ii": {
  "Ray Anthony": true
  },
"Alanis": {
  "Modesto": true
  },
"Alfaro": {
  "Francine": true
  },
"Almeida": {
  "Antonella": true
  },
"Alsabur": {
  "Jennifer": true
  },
"Alt": {
  "Jordan": true
  },
"Alvarado": {
  "Jose": true
  },
"Amparano": {
  "Vicente": true
  },
"Anderson": {
  "Justin": true
  },
"Anderson": {
  "Kristina": true
  },
"Anton": {
  "Alyssa": true
  },
"Ardire": {
  "Michelle": true
  },
"Atallah": {
  "Omar": true
  },
"Atkins": {
  "Ashley": true
  },
"Avalos": {
  "Arturo": true
  },
"Ayala": {
  "Natasha": true
  },
"Babb": {
  "Jennifer": true
  },
"Baker": {
  "Brian": true
  },
"Barnes": {
  "Craig": true
  },
"Barriga": {
  "Jessica": true
  },
"Basulto": {
  "Veronica": true
  },
"Beasley": {
  "Amber": true
  },
"Beasley-Rivers": {
  "Lkeylah Cetara": true
  },
"Behniwal": {
  "Aj": true
  },
"Bell": {
  "Martraviou": true
  },
"Bennet Visa": {
  "Timothy": true
  },
"Bethi": {
  "Dheeraj Reddy": true
  },
"Bezerra": {
  "Brooke": true
  },
"Bisby": {
  "Bonnie": true,
  "Robert": true
  },
"Black": {
  "Keyana": true
  },
"Blackston": {
  "Charlessa": true
  },
"Blade": {
  "Jessica": true
  },
"Blake": {
  "Jessica": true
  },
"Blevin": {
  "Ginger": true
  },
"Boos": {
 "Stacy": true
  },
"Brightside": {
 "Thomas": true
  },
"Brooks": {
 "Donshay": true
  },
"Brunious": {
 "Jade": true
  },
"Budre": {
 "Scott": true
  },
"Burgins": {
 "Ashley": true
  },
"Burrough-Pond": {
 "Pia": true
  },
"Byrd": {
 "Kalyn": true
  },
"Cabralez": {
 "Vanessa": true
  },
"Caldwell": {
 "Anthony": true
  },
"Canham": {
 "Jessica": true
  },
"Cannon": {
 "Bryanna": true,
 "Patricia": true
  },
"Cannon": {
 "Sara": true
  },
"Capell Hurford": {
 "Tamara Angel": true
  },
"Capetillomora": {
 "Maria": true
  },
"Carr": {
 "Suzzanne": true
  },
"Casarez": {
 "Vanessa": true
  },
"Castillo": {
 "Christina": true,
 "Alexander": true
  },
"Castro": {
 "Melanie": true
  },
"Castro Dl": {
 "Adelaida": true
  },
"Ceasar": {
 "Tyrik": true
  },
"Cedillo": {
 "Rudy": true,
  "Cynthia": true
  },
"Chandler Dld": {
  "Jewel": true
  },
"Chapman": {
  "Erin": true
  },
"Chegal": {
  "Chae": true
  },
"Clowers": {
  "Suzanne": true
  },
"Cochran": {
  "Eric": true
  },
"Cole": {
  "Donnta": true
  },
"Coleman": {
  "Leya": true
  },
"Conley": {
  "Medesa": true
  },
"Contreras": {
  "Erick": true
  },
"Cooley": {
  "Ayron": true
  },
"Cox": {
  "Bryan": true
  },
"Cox": {
  "Ellis": true
  },
"Cuevas": {
  "Alexis": true
  },
"Cutler": {
  "Mervain": true
  },
"Damron": {
  "Ereneo": true
  },
"Danny": {
  "Jon": true
  },
"Defonseka": {
  "Dylan": true
  },
"Delaya": {
  "Sabrina": true
  },
"Deleon": {
  "Gilbert": true
  },
"Deshong": {
  "Emari": true
  },
"Dickson": {
  "Kamila": true
  },
"Dollar": {
  "Katelyn": true
  },
"Dosie": {
  "Matthew": true
  },
"Dreher": {
  "Ryan": true
  },
"Duran Dld": {
  "Roxana": true
  },
"Durden": {
  "Vonshay": true
  },
"Echenbrecher": {
  "Byron Ivv": true
  },
"Eilts-Gonzalez": {
  "Francisco": true
  },
"Eknoian": {
  "Shana": true
  },
"Elia": {
  "Katie": true
  },
"Elsea": {
  "Gina": true
  },
"English": {
  "Kevin": true
  },
"Estes": {
  "Brandy": true
  },
"Estrill": {
  "Jeremy": true
  },
"Evans": {
  "Syncer": true
  },
"Falcone": {
  "Sabrina": true
  },
"Farr": {
  "James": true
  },
"Feihong": {
  "Chen": true
  },
"Ferguson": {
  "David": true
  },
"Fernandez": {
  "Teresa": true
  },
"Fick": {
  "Anthony": true
  },
"Fields": {
  "Sarah": true
  },
"Figueroa": {
  "Jose": true
  },
"Flores": {
  "Carolina": true
  },
"Frido": {
  "Timothy": true
  },
"Gallegos": {
  "Ben": true
  },
"Garza": {
  "Amelia": true
  },
"Garza": {
  "Racheal": true
  },
"Gazar": {
  "Cruz": true
  },
"George": {
  "Carli Rita": true
  },
"Gerrick": {
  "Franklin": true
  },
"Gillette": {
  "Sean": true
  },
"Gonzales": {
  "Tracy": true
  },
"Gonzalez": {
  "Tianna": true
  },
"Gonzalez": {
  "Demetrio": true,
  "Raymond": true
  },
"Gooch": {
  "Brian": true
  },
"Gray": {
  "John": true
  },
"Gray": {
  "Cameron": true
  },
"Guerra": {
  "Michele": true
  },
"Guerrero": {
  "Victoria": true
  },
"Gutierrez": {
  "Charlie": true
  },
"Hacker": {
  "Michael": true
  },
"Hall": {
  "Christopher": true
  },
"Hansen": {
  "Lindsey": true
  },
"Hatcher": {
  "Heather": true
  },
"Hawkins": {
  "Marissa": true
  },
"Haynes": {
  "Yasmon": true
  },
"Heiss": {
  "Bobbi": true
  },
"Hernandez": {
  "Saturnino": true
  },
"Holguin": {
  "Marissa": true
  },
"Hysell": {
  "Marjorie": true
  },
"Jackson": {
  "Cortez": true
  },
 "James": {
  "Courtney": true
  },
"James-Johnson": {
  "Courtney": true
  },
"Jamison": {
  "Tatiana": true
  },
"Johnny": {
  "Vargas": true
  },
"Johnson": {
  "Emari": true
  },
"Johnson": {
  "Adrianna": true,
    "Courtney": true,
  "Scottina": true
  },
"Jones": {
  "Mary": true
  },
"Jones Y": {
  "De Jon Ohage": true,
  "Princetta": true
  },
"Jones-Uribe": {
  "Kimberlee": true
  },
"Keef": {
  "Jason": true
  },
"Kerr": {
  "Shane": true
  },
"Lee": {
  "Nayishadle": true
  },
"Lewis": {
  "Chelsey": true
  },
"Libby": {
  "Justin": true
  },
"Lillejohn": {
  "Melina": true
  },
"Liscano": {
  "Juanita": true
  },
"Little": {
  "Austin": true
  },
"Llanes": {
  "Jennifer": true
  },
"Lopez": {
  "Alondra": true,
  "Vinvent": true
  },
"Loza": {
  "Philip": true
  },
"Lundy": {
  "Sky": true
  },
"Lyman": {
  "Tanisha": true
  },
"Macias": {
  "Richelle": true
  },
"Maddox": {
  "Brian": true
  },
"Madrigo": {
  "Homero": true
  },
"Manley": {
  "Noah": true
  },
"Mansfield": {
  "Krisse": true
  },
"Manwell": {
  "Destiny": true
  },
"Marino": {
  "Katelynn": true
  },
"Marino": {
  "Joseph": true
  },
"Martin": {
  "Mickell": true
  },
"Martinez": {
  "Gabriel": true
  },
"Masoud": {
  "Shirazi": true
  },
"Mayberry": {
  "Raymond": true
  },
"Mcdowell": {
  "Shartell": true
  },
"Mcpeters": {
  "Jimmy": true
  },
"Medina": {
  "Miguel": true
  },
"Meinders": {
  "Ann": true
  },
"Mejia": {
  "Jose": true,
  "Guadalupe": true
  },
"Melendez": {
  "Daniel": true,
  "Rayshawn": true
  },
"Merin": {
  "Emory": true
  },
"Meza": {
  "Elvia Oliva": true,
    "Elvia": true,
    "Oliva": true,
  "Larry": true
  },
"Michaels": {
  "Samantha": true
  },
"Mickell": {
  "Martin": true
  },
"Miller": {
  "Krystal - -": true
  },
"Miller": {
  "Breeze": true
  },
"Mitchell": {
  "Aisha": true
  },
"Mobley": {
  "Daniel And Laurel": true
  },
"Mojica": {
  "Luis": true
  },
"Mong": {
  "Madison": true
  },
"Monique": {
  "Sabrina": true
  },
"Morales": {
  "Jimmy": true
  },
"Moreno": {
  "Eva": true
  },
"Morris": {
  "Andre": true
  },
"Movsesian": {
  "Ara": true,
  "Art": true
  },
"Munoz": {
  "Mark": true
  },
"Nellie": {
  "Murrietta": true
  },
"Nguyen": {
  "Christina": true
  },
"Nieblas": {
  "Christopher": true
  },
"Nieto": {
  "Lupe": true
  },
"Nugent": {
  "Brian": true,
  "Dorothy": true,
  "Natalie": true
  },
"Olds": {
  "Scott": true
  },
"Olson": {
  "Keesha": true,
  "Richard": true,
  "Drake": true
  },
"Ong": {
  "Wilbie": true
  },
"Orozco": {
  "Christina": true
  },
"Padilla": {
  "Luis": true
  },
"Paredes": {
  "Ronae": true
  },
"Parks": {
  "Nicholas": true
  },
"Parsons": {
  "Joel": true
  },
"Perez": {
  "Victoria Castellanos": true
  },
"Perrine": {
  "Jordin": true
  },
"Pitts": {
  "Spencer": true
  },
"Porter": {
  "Michael": true
  },
"Presley": {
  "Ladena": true
  },
"Ramos": {
  "Jacquelyn": true
  },
"Ramos": {
  "Randall": true,
  "Ramos": true
  },
"Rangel": {
  "Angel": true
  },
"Recek": {
  "Crystal": true
  },
"Reyes": {
  "Ursula": true
  },
"Rhymes": {
  "Brandy Res": true
  },
"Riley": {
  "Brian": true
  },
"Ritter": {
  "Alandis": true
  },
"Robertson": {
  "Kristie": true
  },
"Robles": {
  "Sandra": true
  },
"Rocha": {
  "Francisco": true
  },
"Roderick": {
 "Steven": true,
  "Stephen": true
  },
"Rodriguez": {
 "Henry": true,
 "Joshua": true,
 "Veronica": true,
 "Erica": true,
   "Henry": true,
 "Jerry": true,
 "Ruth": true,
 "Sandra": true
  },
"Rogers": {
  "Misty": true
  },
"Rosales": {
  "Guadalupe": true
  },
"Rose": {
  "James": true
  },
"Ross": {
  "Candace": true
  },
"Ruby": {
  "Amanda": true
  },
"Saenz": {
  "Corina Marie": true
  },
"Salinas": {
  "Yessenia": true
  },
"Sandavol-Carmen": {
  "Melanie": true
  },
"Sanders": {
  "Charles": true,
  "Isaac": true
  },
"Sandoval Carmen": {
  "Melanie": true
  },
"Sandrini": {
  "Jamie": true
  },
"Santiago": {
  "Isaac": true
  },
"Saylor": {
  "Shirl": true
  },
"Schmactenberger": {
  "Christopher": true
  },
"Schubert": {
  "Eric": true
  },
"Seward": {
  "Kanndee": true
  },
"Simon Dl": {
  "Myisha": true
  },
"Smith": {
  "Reggie": true,
  "Precious": true
  },
"Solis": {
  "Bianca": true
  },
"Sonephady C": {
  "Salina": true
  },
"Sparks": {
  "Nicholas": true
  },
"Stairs": {
  "Ashlee": true
  },
"Starr": {
  "Michael": true
  },
"Staudinger": {
  "Christy": true
  },
"Stone": {
  "Willow": true
  },
"Stone": {
  "Sara": true
  },
"Stone-Cousley": {
  "Raul": true
  },
"Strod": {
  "Jami": true
  },
"Sutton": {
  "Nikia": true
  },
"Taggert": {
  "Nishi": true
  },
"Tate": {
  "Kendra": true
  },
"Taylor": {
  "Donna": true
  },
"Thomas": {
  "Anderson": true
  },
"Thomas": {
  "Alexius": true
  },
"Thompson": {
  "Lyndsay": true
  },
"Tijerina": {
  "George": true
  },
"Ton": {
  "Thien": true
  },
"Toney": {
  "Jenna": true
  },
"Torres": {
  "Briseida": true,
  "Pete": true
  },
"Uribe": {
  "Isaiah": true
  },
"Valdez": {
  "Bianca": true
  },
"Valencia": {
  "Leanne": true,
  "Asia": true,
  "Leanna": true
  },
"Valero": {
  "Nicholas": true
  },
"Valesquez": {
  "Lorraine": true
  },
"Vargas": {
  "Jaun": true
  },
"Vargas": {
  "Erlinda": true
  },
"Vartanian": {
  "John": true
  },
"Vasquez": {
  "Margarito": true
  },
"Vaughns": {
  "Vince": true
  },
"Villagrana": {
  "Jasmine": true
  },
"Vindiola": {
  "Roxanne": true
  },
"Washington": {
  "Duchess": true
  },
"Watts": {
  "Alisha": true
  },
"Weiss": {
  "Helga": true
  },
"West": {
  "Arion": true
  },
"Whala": {
  "Katie": true
  },
"White": {
  "Michael": true
  },
"Wiley": {
  "Vance": true
  },
"Wilkins": {
  "Lisa": true
  },
"Williams": {
  "Elaine": true,
  "Isaiah": true,
  "Erin": true,
  "Gloria": true,
  },
"Worstein": {
  "Brian": true
  },
"Worthington": {
  "Heather": true
  },
"Wright": {
  "Debbi": true
  },
"Yale": {
  "Cortney": true
  },
"Yanni": {
  "Anthony": true
  },
"Zaragoza": {
  "Michelle": true
  },
"Zaun Jr": {
  "William": true
  }
};

// Styles
GM_addStyle(`
.highlight-do-not-rent,
.highlight-do-not-rent td {
    background-color: #ffcccc !important;
}
`);

let isScanning = false;
let scanInterval;
let scannedRows = new Set();
let hasInitialized = false;

function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    function findNameCells(row) {
        const cells = Array.from(row.querySelectorAll('td'));
        let lastNameCell, firstNameCell;

        // Find the index of "LAST NAME" and "FIRST NAME" columns
        const headerRow = row.closest('table').querySelector('thead tr');
        const headers = Array.from(headerRow.querySelectorAll('th'));

        const lastNameIndex = headers.findIndex(th => th.textContent.trim().toUpperCase() === 'LAST NAME');
        const firstNameIndex = headers.findIndex(th => th.textContent.trim().toUpperCase() === 'FIRST NAME');

        if (lastNameIndex !== -1 && firstNameIndex !== -1) {
            lastNameCell = cells[lastNameIndex];
            firstNameCell = cells[firstNameIndex];
        }

        return { lastNameCell, firstNameCell };
    }

    function getFirstWord(str) {
        return str.split(/[\s-]+/)[0].trim();
    }

    function highlightReservation(row) {
        const { lastNameCell, firstNameCell } = findNameCells(row);
        if (lastNameCell && firstNameCell) {
            const lastName = getFirstWord(lastNameCell.textContent.trim());
            const firstName = getFirstWord(firstNameCell.textContent.trim());
            console.log(`Checking: ${lastName}, ${firstName}`);

            const lastNameLower = lastName.toLowerCase();
            const firstNameLower = firstName.toLowerCase();

            for (let listLastName in doNotRentList) {
                if (getFirstWord(listLastName.toLowerCase()) === lastNameLower) {
                    for (let listFirstName in doNotRentList[listLastName]) {
                        if (getFirstWord(listFirstName.toLowerCase()) === firstNameLower) {
                            console.log(`Match found: ${lastName}, ${firstName}`);
                            row.classList.add('highlight-do-not-rent');
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }
function scanAndHighlightNames() {
    if (!isScanning) return;

    const table = document.querySelector('table');
    if (!table) {
        console.warn('No table found');
        return;
    }

    let highlightedCount = 0;
    table.querySelectorAll('tbody tr').forEach(row => {
        if (!scannedRows.has(row)) {
            scannedRows.add(row);
            if (highlightReservation(row)) {
                highlightedCount++;
            }
        }
    });

    if (highlightedCount > 0) {
        console.log(`Highlighted ${highlightedCount} new rows`);
    }
}

function startScanning() {
    if (!isScanning) {
        isScanning = true;
        scannedRows.clear();
        scanAndHighlightNames();
        scanInterval = setInterval(scanAndHighlightNames, 1000);
        console.log('Scanning started');
    }
}

function stopScanning() {
    if (isScanning) {
        isScanning = false;
        clearInterval(scanInterval);
        console.log('Scanning stopped');
    }
}

function waitForTable(callback, maxAttempts = 30, interval = 500) {
    let attempts = 0;

    const checkTable = () => {
        const table = document.querySelector('table');
        if (table && table.querySelector('tbody tr')) {
            callback();
        } else if (attempts < maxAttempts) {
            attempts++;
            setTimeout(checkTable, interval);
        } else {
            console.warn('Table not found after maximum attempts');
        }
    };

    checkTable();
}

function init() {
    if (hasInitialized) return;
    console.log('Initializing script');
    hasInitialized = true;
    waitForTable(startScanning);
}

function checkUrlAndInitialize() {
    const isArrivalsPage = window.location.href.includes('/hk-frontdesk-web/index.html#/arrivals/arrivals-report-details');

    if (isArrivalsPage) {
        if (!hasInitialized) {
            console.log('Arrivals report page detected. Initializing script...');
            init();
        }
    } else {
        stopScanning();
        hasInitialized = false;
    }
}

// Initial check
checkUrlAndInitialize();

// Set up a MutationObserver to detect URL changes
const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.type ==="attributes" && mutation.attributeName ==="href") {
            checkUrlAndInitialize();
        }
    });
});

observer.observe(document.body, {
    attributes: true,
    childList: true,
    subtree: true
});

// Also check periodically in case the observer misses something
setInterval(checkUrlAndInitialize, 2000);
})();
