// ==UserScript==
// @name DNR LIST
// @namespace http://tampermonkey.net/
// @version 2.1
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
  "Aaron": { "Tawnyi": true},
  "Adams": { "Jeremy": true },
  "Aeticiga": { "Thomas Rudy": true },
  "Aguirre": { "Aleja": true },
  "Aiken II": { "Ray Anthony": true },
  "Alander": { "Deania": true },
  "Alanis": { "Modesto": true },
  "Alfaro": { "Francine": true },
  "Almeida": { "Antonella": true },
  "Alsabur": { "Jennifer": true },
  "Alt": { "Jordan": true },
  "Alvarado": { "Jose": true },
  "Amparano": { "Vicente": true },
  "Anderson": { "Justin": true, "Kristina": true },
  "Anton": { "Alyssa": true },
  "Ardire": { "Michelle": true },
  "Arrington": { "Aliesha": true },
  "Atallah": { "Omar": true },
  "Atkins": { "Ashley": true },
  "Avalos": { "Arturo": true },
  "Ayala": { "Natasha": true },
  "Babb": { "Jennifer": true },
  "Baker": { "Brian": true },
  "Barnes": { "Craig": true },
  "Barriga": { "Jessica": true },
  "Barron": { "John": true },
  "Basulto": { "Veronica": true },
  "Beasley": { "Amber": true },
  "Beasley-Rivers": { "LKeylah CeTara": true },
  "Behniwal": { "Aj": true },
  "Bell": { "Martraviou": true },
  "Bennet": { "Timothy": true },
  "Bethi": { "Dheeraj Reddy": true },
  "Bezerra": { "Brooke": true },
  "Bisby": { "Bonnie": true, "Robert": true },
  "Black": { "Keyana": true },
  "Blackston": { "Charlessa": true },
  "Blade": { "Jessica": true },
  "Blake": { "Jessica": true },
  "Blevin": { "Ginger": true },
  "Boos": { "Stacy": true },
  "Brightside": { "Thomas": true },
  "Brooks": { "Donshay": true },
  "Brown": { "Kayla": true },
  "Brunious": { "Jade": true },
  "Budre": { "Scott": true },
  "Burgins": { "Ashley": true },
  "Burrough-Pond": { "Pia": true },
  "Addington": { "Summer": true },
  "Aguayo": { "Joshua": true },
  "Aguirre": { "Nichole": true },
  "Alander": { "Deana": true },
  "Alsaqqa": { "Mohommad": true },
  "Alvarez": { "Blanca": true },
  "Arias": { "Katie": true },
  "Arrington": { "Aleisha": true },
  "Atuld": { "Taljinden": true },
  "Atwal": { "Taljinder": true },
  "Barron": { "Vince": true },
  "Bays": { "Jerry": true },
  "Beam": { "Hope": true },
  "Bloomer": { "Britani": true },
  "Blied": { "Summer": true },
  "Booth": { "Andrea": true },
  "Boydstun": { "Shannon": true },
  "Branden": { "Christina": true },
  "Brown": { "Bradley": true, "Vamessa": true },
  "Buchnoff": { "Jodi": true },
  "Bundy": { "Danielle": true },
  "Cabralez": { "Vanessa": true },
  "Caldwell": { "Anthony": true },
  "Canham": { "Jessica": true },
  "Cannon": { "Bryanna": true, "Patricia": true, "Sara": true },
  "Capell Hurford": { "Tamara Angel": true },
  "CapetilloMora": { "Maria": true },
  "Carr": { "Suzzanne": true },
  "Casarez": { "Vanessa": true },
  "Castaneda": { "Emilio": true },
  "Castillo": { "Christina": true, "Alexander": true },
  "Castro": { "Melanie": true, "Adelaida": true },
  "Ceasar": { "Tyrik": true },
  "Cedillo": { "Rudy": true, "Cynthia": true },
  "Chandler": { "Jewel": true },
  "Chapman": { "Erin": true },
  "Chegal": { "Chae": true },
  "Clowers": { "Suzanne": true },
  "Cochran": { "Eric": true },
  "Cole": { "Donnta": true },
  "Coleman": { "Leya": true },
  "Conley": { "Medesa": true },
  "Contreras": { "Erick": true },
  "Cooley": { "Ayron": true },
  "Cooper": { "Stephen": true },
  "Cox": { "Bryan": true, "Ellis": true },
  "Cuevas": { "Alexis": true },
  "Cutler": { "Mervain": true },
  "Damron": { "Ereneo": true },
  "Danny": { "Jon": true },
  "Defonseka": { "Dylan": true },
  "Delaya": { "Sabrina": true },
  "Deleon": { "Gilbert": true },
  "Deshong": { "Emari": true },
  "Dickson": { "Kamila": true },
  "Dollar": { "Katelyn": true },
  "Dosie": { "Matthew": true },
  "Dreher": { "Ryan": true },
  "Duran": { "Roxana": true },
  "Durden": { "Vonshay": true },
  "Echenbrecher": { "Byron IV,V": true },
  "Eilts-Gonzalez": { "Francisco": true },
  "Eknoian": { "Shana": true },
  "Elia": { "Katie": true },
  "Elsea": { "Gina": true },
  "English": { "Kevin": true },
  "Estes": { "Brandy": true },
  "Estrill": { "Jeremy": true },
  "Evans": { "Syncer": true },
  "Falcone": { "Sabrina": true },
  "Farr": { "James": true },
  "Feihong": { "Chen": true },
  "Ferguson": { "David": true },
  "Fernandez": { "Teresa": true },
  "Fick": { "Anthony": true },
  "Fields": { "Sarah": true },
  "Figueroa Alfredo Jr": { "Jose": true },
  "Flores": { "Carolina": true },
  "Frido": { "Timothy": true },
  "Gallegos": { "Ben": true },
  "Garza": { "Amelia": true, "Racheal": true },
  "Gazar": { "Cruz": true },
  "George": { "Carli Rita": true },
  "Gerrick": { "Franklin": true },
  "Gillette": { "Sean": true },
  "Gomez": { "Anthony": true },
  "Gonzales": { "Tracy": true },
  "Gonzalez": { "Tianna": true, "Demetrio": true, "Raymond": true },
  "Gooch": { "Brian": true },
  "Gray": { "John": true, "Cameron": true },
  "Guerra": { "Michele": true },
  "Guerrero": { "Victoria": true },
  "Gutierrez": { "Selina": true, "Charlie": true },
  "Hacker": { "Michael": true },
  "Hall": { "Christopher": true },
  "Hansen": { "Lindsey": true },
  "Harding": { "Ronald": true },
  "Hatcher": { "Heather": true },
  "Hawkins": { "Marissa": true },
  "Haynes": { "Yasmon": true },
  "Heiss": { "Bobbi": true },
  "Hernandez": { "Alejandro": true, "Dora": true, "Saturnino": true },
  "Holguin": { "Marissa": true },
  "Hysell": { "Marjorie": true },
  "Jackson": { "George": true, "Cortez": true },
  "James-Johnson": { "Courtney": true },
  "Jamison": { "Tatiana": true },
  "Johnny": { "Vargas": true },
  "Johnson": { "Emari": true, "Adrianna": true, "Scottina": true },
  "Jones": { "Mary": true, "De Jon Ohage": true, "Princetta": true },
  "Jones-Uribe": { "Kimberlee": true },
  "Keef": { "Jason": true },
  "Kerr": { "Shane": true },
  "Lacy": { "Patrick": true },
  "Lee": { "Nayisha": true },
  "Lewis": { "Chelsey": true },
  "Libby": { "Justin": true },
  "Lillejohn": { "Melina": true },
  "Liscano": { "Juanita": true },
  "Little": { "Austin": true },
  "Llanes": { "Jennifer": true },
  "Lopez": { "Alondra": true, "Vinvent": true },
  "Loza": { "Philip": true },
  "Luna": { "Andrew": true },
  "Lundy": { "Sky": true },
  "Lyman": { "Tanisha": true },
  "Macias": { "Richelle": true },
  "Maddox": { "Brian": true },
  "Madrigo": { "Homero": true },
  "Manley": { "Noah": true },
  "Mansfield": { "Krisse": true },
  "Manwell": { "Destiny": true },
  "Marino": { "Katelynn": true, "Joseph": true },
  "Martin": { "Mickell": true },
  "Martinez": { "Daisy": true, "Nathan": true, "Gabriel": true },
  "Masoud": { "Shirazi": true },
  "Mayberry": { "Raymond": true },
  "Mcdowell": { "Shartell": true },
  "Mcganty": { "Angela": true },
  "McPeters": { "Jimmy": true },
  "Medina": { "Miguel": true },
  "Meinders": { "Ann": true },
  "Mejia": { "Jose": true, "Guadalupe": true },
  "Melendez": { "Daniel": true, "Rayshawn": true },
  "Melton": { "Britnny": true },
  "Merin": { "Emory": true },
  "Meza": { "Elvia Oliva": true, "Larry": true },
  "Michaels": { "Samantha": true },
  "Mickell": { "Martin": true },
  "Miller": { "Jimmy": true, "Krystal": true, "Breeze": true },
  "Mitchell": { "Aisha": true },
  "Mobley": { "Daniel and Laurel": true },
  "Mojica": { "Luis": true },
  "Mong": { "Madison": true },
  "Monique": { "Sabrina": true },
  "Morales": { "Jimmy": true },
  "Moreno": { "Eva": true },
  "Morris": { "Andre": true },
  "Movsesian": { "Ara": true, "Art": true },
  "Munoz": { "Mark": true },
  "Nellie": { "Murrietta": true },
  "Nguyen": { "Christina": true },
  "Nieblas": { "Christopher": true },
  "Nieto": { "Lupe": true },
  "Nugent": { "Brian/Dorothy Natalie": true },
  "Olds": { "Scott": true },
  "Olson": { "Keesha": true, "Richard": true, "Drake": true },
  "Ong": { "Wilbie": true },
  "Orozco": { "Christina": true },
  "Padilla": { "Luis": true },
  "Paredes": { "Ronae": true },
  "Parks": { "Nicholas": true },
  "Parsons": { "Joel": true },
  "Perez": { "Victoria Castellanos": true },
  "Perrine": { "Jordin": true },
  "Pitts": { "Spencer": true },
  "Porter": { "Michael": true },
  "Presley": { "Ladena": true },
  "Ramos": { "Jacquelyn": true, "Randall": true, "Ramos": true },
  "Rangel": { "Angel": true },
  "Recek": { "Crystal": true },
  "Reyes": { "Ursula": true },
  "Rhymes": { "Brandy": true },
  "Riley": { "Brian": true },
  "Ritter": { "Alandis": true },
  "Robertson": { "Kristie": true },
  "Robles": { "Sandra": true },
  "Rocha": { "Francisco": true },
  "Roderick": { "Steven/Stephen": true },
  "Rodriguez": { "Henry": true, "Joshua": true, "Veronica": true, "Erica": true, "Jerry": true, "Ruth": true, "Sandra": true },
  "Rogers": { "Misty": true },
  "Rosales": { "Guadalupe": true },
  "Rose": { "James": true },
  "Ross": { "Candace": true },
  "Ruby": { "Amanda": true },
  "Saenz": { "Corina Marie": true },
  "Salinas": { "Yessenia": true },
  "Sanders": { "Charles": true, "Isaac": true },
  "Sandoval": { "Carmen Melanie": true },
  "Sandrini": { "Jamie": true },
  "Santiago": { "Isaac": true },
  "Saylor": { "Shirl": true },
  "Schmactenberger": { "Christopher": true },
  "Schubert": { "Eric": true },
  "Seward": { "Kanndee": true },
  "Simon": { "Myisha": true },
  "Smith": { "Latoya": true, "Reggie": true, "Precious": true },
  "Solis": { "Bianca": true },
  "Sonephady": { "Salina": true },
  "Souknarong": { "Olivia": true },
  "Sparks": { "Nicholas": true },
  "Stairs": { "Ashlee": true },
  "Starr": { "Michael": true },
  "Staudinger": { "Christy": true },
  "Stone": { "Willow": true, "Sara": true },
  "Stone-Cousley": { "Raul": true },
  "Strod": { "Jami": true },
  "Sutton": { "Nikia": true },
  "Taggert": { "Nishi": true },
  "Tate": { "Kendra": true, "Davian": true },
  "Taylor": { "Donna": true, "Christopher": true, "Davonte": true },
  "Thomasanderson": { "Thomas": true },
  "Thomas": { "Alexius": true, "Jaquon": true, "Leandra": true },
  "Thompson": { "Lyndsay": true, "James": true, "Kody": true },
  "Tijerina": { "George": true },
  "Ton": { "Thien": true },
  "Toney": { "Jenna": true },
  "Torres": { "Briseida": true, "Pete": true, "Gerardo": true },
  "Uribe": { "Isaiah": true },
  "Valdez": { "Bianca": true, "Victor": true },
  "Valencia": { "Leanne": true, "Asia": true, "Leanna": true },
  "Valero": { "Nicholas": true },
  "Valesquez": { "Lorraine": true },
  "Vang": { "Mong": true },
  "Vargas": { "Jaun": true, "Erlinda": true },
  "Vartanian": { "John": true },
  "Vasquez": { "Margarito": true, "Daniel": true, "Selene": true },
  "Vaughns": { "Vince": true },
  "Villagrana/Gomez": { "Jasmine": true },
  "Vindiola": { "Roxanne": true },
  "Vogt": { "Stayce": true },
  "Washington": { "Duchess": true, "Daniel": true },
  "Watts": { "Alisha": true },
  "Weiss": { "Helga": true },
  "West": { "Arion": true },
  "Whala": { "Katie": true },
  "White": { "Michael": true, "Alyssa": true, "Matthew": true, "Victoria": true },
  "Wiley": { "Vance": true },
  "Wilkins": { "Lisa": true },
  "Williams": { "Elaine": true, "Isaiah": true, "Erin": true, "Gloria": true, "John": true, "Kelsey": true, "Christina": true },
  "Worstein": { "Brian": true },
  "Worthington": { "Heather": true },
  "Wright": { "Debbi": true, "Steven": true, "Elliott": true },
  "Yale": { "Cortney": true },
  "Yanni": { "Anthony": true },
  "Zaragoza": { "Michelle": true },
  "Zaun Jr.": { "William": true },
  "Tadesse": { "Lily": true },
  "Taing": { "Bryan": true },
  "Tamashiro": { "Reuben": true },
  "Teague": { "Sherry": true },
  "Templeton": { "Marquetta": true },
  "Terry": { "Amber": true },
  "Thrift": { "Ashley": true },
  "Todd": { "Jonathon": true },
  "Trieu": { "Joseph": true },
  "Tucker": { "Jeremy": true },
  "Turner": { "Lachika": true },
  "Twist": { "Kevin": true },
  "Uddin": { "Tahmid": true },
  "Vela": { "Adam": true },
  "Velaquez": { "Elena": true },
  "Velez": { "Maria": true },
  "Ventura": { "Lindsey": true },
  "Vickers": { "Brittany": true },
  "Villanueva": { "Valeria": true },
  "Vincent": { "Desmond": true },
  "Vivier": { "Gino": true },
  "Vongphachanh": { "Glory": true },
  "Wade": { "Brent": true },
  "Walker": { "Samuel": true },
  "Wallace": { "Claudette": true },
  "Waters": { "Jason": true },
  "Watson": { "Joshua": true, "Charles": true },
  "Watt": { "Katrina": true },
  "Webb": { "Janet": true, "Laural": true },
  "Weise": { "Riley": true },
  "Wells": { "Kerrick": true },
  "Westmoreland": { "Jessica": true },
  "Whiddon": { "Chris": true },
  "Wiedmann": { "Joseph": true },
  "Wilkerson": { "Tyrone": true },
  "Wilson": { "Sierra": true, "Christina": true },
  "Winters": { "Dylan": true },
  "Wofford": { "Sammie": true },
  "Wong": { "Kevin": true },
  "Woodard": { "Isha": true },
  "Wu": { "Anna": true },
  "Wyble": { "Maria": true },
  "Wynn": { "Shamika": true },
  "Yamada": { "Sakura": true },
  "Yang": { "Paul": true },
  "Yokoyama": { "Stephen": true },
  "Young": { "Kierra": true },
  "Youssef": { "Beshoy": true },
  "Yusuf": { "Nasra": true },
  "Zapata": { "Claudia": true },
  "Zendejas": { "Anthony": true },
  "Zhu": { "Amy": true },
  "Zimmerman": { "Sara": true },
}

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

function getFirstWord(str) {
    return str.split(/[\s-]+/)[0].trim();
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
        if (mutation.type === "attributes" && mutation.attributeName === "href") {
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
