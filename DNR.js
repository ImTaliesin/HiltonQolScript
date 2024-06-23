// ==UserScript==
// @name DNR LIST
// @namespace http://tampermonkey.net/
// @version 2
// @description Changes the color of table headers, buttons, and elements on enterprise.pep.hilton.com and allows users to select columns to hide
// @match https://login.pep.hilton.com/*
// @grant GM_addStyle
// @grant GM_setValue
// @grant GM_getValue
// ==/UserScript==

(function() {
    'use strict';
      const doNotRentList = {
  "Addington": { "Summer": true },
  "Adams": { "Jeremy": true },
  "Aeticiga": { "Thomas Rudy": true },
  "Aguayo": { "Joshua": true },
  "Aguirre": { "Nichole": true, "Aleja": true },
  "Aiken II": { "Ray Anthony": true },
  "Alander": { "Deana": true, "Deania": true },
  "Alanis": { "Modesto": true },
  "Alfaro": { "Francine": true },
  "Almeida": { "Antonella": true },
  "Alsabur": { "Jennifer": true },
  "Alsaqqa": { "Mohommad": true },
  "Alt": { "Jordan": true },
  "Alvarado": { "Jose": true },
  "Amparano": { "Vicente": true },
  "Anderson": { "Justin": true, "Kristina": true },
  "Anton": { "Alyssa": true },
  "Ardire": { "Michelle": true },
  "Arias": { "Katie": true },
  "Arrington": { "Aleisha": true, "Aliesha": true },
  "Atallah": { "Omar": true },
  "Atkins": { "Ashley": true },
  "Atuld": { "Taljinden": true },
  "Atwal": { "Taljinder": true },
  "Avalos": { "Arturo": true },
  "Ayala": { "Natasha": true },
  "Babb": { "Jennifer": true },
  "Baker": { "Brian": true },
  "Barnes": { "Craig": true },
  "Barriga": { "Jessica": true },
  "Barron": { "John": true, "Vince": true },
  "Basulto": { "Veronica": true },
  "Bays": { "Jerry": true },
  "Beasley": { "Amber": true },
  "Beasley-Rivers": { "LKeylah CeTara": true },
  "Beam": { "Hope": true },
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
  "Bloomer": { "Britani": true },
  "Blied": { "Summer": true },
  "Blevin": { "Ginger": true },
  "Boos": { "Stacy": true },
  "Booth": { "Andrea": true },
  "Boydstun": { "Shannon": true },
  "Branden": { "Christina": true },
  "Brightside": { "Thomas": true },
  "Brooks": { "Donshay": true },
  "Brown": { "Bradley": true, "Vamessa": true, "Kayla": true },
  "Brunious": { "Jade": true },
  "Budre": { "Scott": true },
  "Buchnoff": { "Jodi": true },
  "Bundy": { "Danielle": true },
  "Burgins": { "Ashley": true },
  "Burrough-Pond": { "Pia": true },
  "Byrd": { "Kalyn": true },
  "Cabralez": { "Vanessa": true },
  "Caldwell": { "Anthony": true },
  "Canham": { "Jessica": true },
  "Cannon": { "Bryanna": true, "Patricia": true, "Sara": true },
  "Capell Hurford": { "Tamara Angel": true },
  "CapetilloMora": { "Maria": true },
  "Casaneda": { "Victoria": true },
  "Casey": { "Lynette": true },
  "Carr": { "Suzzanne": true },
  "Casarez": { "Vanessa": true },
  "Castaneda": { "Olivia": true, "Emilio": true },
  "Castillo": { "Christina": true, "Alexander": true },
  "Castro": { "Melanie": true, "Adelaida": true },
  "Ceasar": { "Tyrik": true },
  "Cedillo": { "Rudy": true, "Cynthia": true },
  "Chandler": { "Jewel": true },
  "Chapman": { "Erin": true },
  "Chegal": { "Chae": true },
  "Church": { "Lauren": true },
  "Clark": { "Michel": true },
  "Clowers": { "Suzanne": true },
  "Clugton": { "Jason": true },
  "Cochran": { "Eric": true },
  "Cole": { "Donnta": true },
  "Coleman": { "Leya": true },
  "Conley": { "Medesa": true },
  "Contreras": { "Erick": true },
  "Cooley": { "Ayron": true },
  "Cooper": { "Robert": true, "Stephen": true },
  "Corrales": { "Daniel": true },
  "Cox": { "Bryan": true, "Ellis": true },
  "Cruz": { "Myra": true },
  "Cuevas": { "Alexis": true },
  "Cutler": { "Mervain": true },
  "Damron": { "Ereneo": true },
  "Danny": { "Jon": true },
  "Davis": { "Daniel": true, "Bob": true },
  "Defonseka": { "Dylan": true },
  "Delaya": { "Sabrina": true },
  "Deleon": { "Gilbert": true },
  "Deshong": { "Emari": true },
  "Dickson": { "Kamila": true },
  "Dollar": { "Katelyn": true },
  "Dority": { "Aaron": true },
  "Dosie": { "Matthew": true },
  "Drachalabi": { "Hafed": true },
  "Dreher": { "Ryan": true },
  "Duran": { "Kashmire": true, "Roxana": true },
  "Durden": { "Vonshay": true },
  "Echenbrecher": { "Byron IV,V": true },
  "Eilts-Gonzalez": { "Francisco": true },
  "Eknoian": { "Shana": true },
  "Elia": { "Katie": true },
  "Elsea": { "Gina": true },
  "English": { "Kevin": true },
  "Estes": { "Brandy": true },
  "Estrill": { "Jeremy": true },
  "Evans": { "Syncer": true},
  "Fairbanks": { "Aaron": true },
  "Falcone": { "Sabrina": true },
  "Farr": { "James": true },
  "Feihong": { "Chen": true },
  "Ferguson": { "David": true },
  "Fernandez": { "Teresa": true },
  "Fick": { "Anthony": true },
  "Fields": { "Sarah": true },
  "Figueroa Alfredo Jr": { "Jose": true },
  "Flores": { "Carolina": true },
  "Franco": { "Jose": true, "Steven":true },
  "Frido": { "Timothy": true },
  "Fosdick": { "Melissa": true },
  "Galindo": { "Leticia": true },
  "Gallegos": { "Ben": true },
  "Garrett": { "Michel": true },
  "Garcia": { "Hugo": true },
  "Garza": { "Amelia": true, "Racheal": true },
  "Gazar": { "Cruz": true },
  "George": { "Carli Rita": true },
  "Gerrick": { "Franklin": true },
  "Gillette": { "Sean": true },
  "Gomes/Ortiz": { "Brooke": true },
  "Gomez": { "Antonio": true, "Anthony": true },
  "Goodwin": { "Erika": true },
  "Gonzales": { "Tracy": true },
  "Gonzalez": { "Tianna": true, "Demetrio": true, "Raymond": true },
  "Gooch": { "Brian": true },
  "Gray": { "John": true, "Cameron": true },
  "Green": { "Aaron": true },
  "Griffin": { "Simone": true },
  "Guerrero": { "Victoria": true },
  "Gutierrez": { "Selina": true, "Charlie": true },
  "Hacker": { "Michael": true },
  "Hall": { "Aaron": true },
  "Hambrick": { "Laquala": true },
  "Hankin": { "Karen": true },
  "Haroun": { "Moe": true },
  "Harrell": { "Makayla": true },
  "Hartford": { "Stephanie": true },
  "Hattenburg": { "James": true },
  "Hawkes": { "Randy": true },
  "Hawthorne": { "Jason": true },
  "Hays": { "Tanner": true },
  "Healy": { "Marianne": true },
  "Henderson": { "Amanda": true },
  "Henry": { "Anthony": true },
  "Herandez": { "David": true },
  "Herman": { "Jason": true },
  "Hickman": { "Andrew": true },
  "Higgins": { "Ian": true },
  "Hill": { "Matthew": true },
  "Hitt": { "John": true },
  "Hollander": { "Mark": true },
  "Holloman": { "Vinston": true },
  "Holm": { "Brian": true },
  "Holmes": { "Theresa": true },
  "Hopper": { "Marty": true },
  "Hopson": { "Shanda": true },
  "Hornbeck": { "Lisa": true },
  "Hudson": { "Jeffery": true },
  "Huerta": { "Jennifer": true },
  "Hunter": { "Michael": true },
  "Huston": { "Danielle": true },
  "Inayathulla": { "Abdullah": true },
  "Irvin": { "Scharlene": true },
  "Irwin": { "Kirsten": true },
  "Isip": { "Jonathan": true },
  "Jackson": { "Amariah": true, "Marcus": true },
  "Jacob": { "Alexis": true },
  "Jacobo": { "Oscar": true },
  "Jain": { "Niharika": true },
  "Jaquez": { "Jesus": true },
  "Jeffery": { "Nicole": true },
  "Jimenez": { "Juan": true },
  "Johnson": { "Briana": true, "Rosa": true, "Leon": true },
  "Johnston": { "Tyler": true },
  "Jones": { "Rico": true, "Gabriel": true },
  "Jorge": { "Francisco": true },
  "Kaba": { "Kristian": true },
  "Kaburov": { "Galina": true },
  "Kaufman": { "Jessica": true },
  "Kay": { "Kendra": true },
  "Kelley": { "Ciarra": true },
  "King": { "Sarah": true },
  "Kirby": { "Jason": true },
  "Kiousis": { "Sarah": true },
  "Kirkwood": { "Danielle": true },
  "Kleinegger": { "Sabrina": true },
  "Kline": { "Pascale": true },
  "Koons": { "Blake": true },
  "Kunz": { "Jessica": true },
  "Kurliangko": { "Aleksandr": true },
  "Kwapis": { "Hanna": true },
  "Labell": { "Maria": true },
  "Lal": { "Ashish": true },
  "Lamas": { "Alexander": true },
  "Lampos": { "Michael": true },
  "Lara": { "Dimitri": true },
  "Lasseter": { "Ashley": true },
  "Latham": { "Joshua": true },
  "LaTour": { "Kathy": true },
  "Lawton": { "Jaques": true },
  "Lay": { "Patricia": true },
  "Le": { "Karen": true },
  "Ledbetter": { "Zachary": true },
  "LeFlore": { "David": true },
  "Leigh": { "Mark": true },
  "Lemons": { "Holly": true },
  "Lerma": { "Jose": true },
  "Linder": { "Amber": true },
  "Little": { "Nicole": true },
  "Llamas": { "Stephanie": true },
  "Lockwood": { "Brianna": true },
  "Long": { "Jimmie": true },
  "Lopez": { "Lorena": true, "Daniel": true },
  "Lowder": { "Torrance": true },
  "Lucas": { "Iseisha": true },
  "Lugo": { "Carlos": true },
  "Lyman": { "Tracy": true },
  "Lyons": { "Jerry": true },
  "Macias": { "Celina": true },
  "Mack": { "Monique": true },
  "Maciel": { "Crystal": true },
  "Magpusao": { "Tony": true },
  "Mahone": { "Deshon": true },
  "Maldonado": { "David": true },
  "Malone": { "Samantha": true },
  "Mangrove": { "Ravin": true },
  "Mar": { "Reginald": true },
  "Marins": { "Shanette": true },
  "Markovich": { "Chad": true },
  "Marquez": { "Alyssa": true },
  "Marvetsa": { "Lana": true },
  "Mason": { "Anthony": true },
  "Mata": { "Kari": true },
  "May": { "Jessi": true },
  "Mazone": { "Regina": true },
  "McCally": { "Jennifer": true },
  "McClelland": { "Jeremy": true },
  "McCormack": { "Jackie": true },
  "McIntosh": { "Kevin": true },
  "Medina": { "Juan": true },
  "Melancon": { "John": true },
  "Melendez": { "Daniel": true },
  "Menchu": { "David": true },
  "Meza": { "John": true },
  "Miller": { "Michael": true, "Savannah": true, "Jordan": true },
  "Miranda": { "Adrian": true },
  "Mitchell": { "Anthony": true },
  "Moll": { "Melynda": true },
  "Montoya": { "Gloria": true },
  "Moody": { "Jessica": true },
  "Moore": { "Valerie": true, "Kyle": true },
  "Morales": { "Gabrielle": true },
  "Morrison": { "Darnelle": true },
  "Mosby": { "Alfrederick": true },
  "Mowery": { "Andrew": true },
  "Murphy": { "Christopher": true },
  "Myers": { "Justin": true },
  "Nance": { "Nicole": true },
  "Nash": { "Angel": true },
  "Navarro": { "Monique": true },
  "Naylor": { "Zachary": true },
  "Neff": { "Lacey": true },
  "Nelson": { "Michelle": true },
  "Newton": { "Elise": true },
  "Nguyen": { "Lan": true, "Vincent": true },
  "Nichols": { "Richard": true },
  "Nitz": { "Anjelica": true },
  "Noble": { "Johnathan": true },
  "Ochoa": { "Mariela": true },
  "Odom": { "Jacqueline": true },
  "O'Gorman": { "Jacob": true },
  "Orozco": { "Martin": true },
  "Ortega": { "Carlos": true },
  "Osborn": { "Leslie": true },
  "Osuna": { "Ramona": true },
  "Oviedo": { "Johnny": true },
  "Parker": { "Brandon": true, "Jasmine": true },
  "Partida": { "Sandra": true },
  "Pascual": { "Angelica": true },
  "Patin": { "Joseph": true },
  "Patton": { "Shay": true },
  "Peart": { "Lisa": true },
  "Pedraza": { "Jaime": true },
  "Peinado": { "Joshua": true },
  "Pena": { "Karin": true },
  "Perez": { "Jesus": true },
  "Peterson": { "Brittney": true },
  "Phillips": { "Lauren": true },
  "Phyle": { "John": true },
  "Picket": { "Laisha": true },
  "Pierce": { "Tanya": true },
  "Piggs": { "Felix": true },
  "Pineda": { "Orlando": true },
  "Pinheiro": { "Isabella": true },
  "Plascencia": { "Mario": true },
  "Porter": { "Aubrey": true },
  "Powell": { "Tahlia": true },
  "Pratt": { "Justin": true },
  "Pree": { "Diana": true },
  "Price": { "Steven": true },
  "Proctor": { "Jennifer": true },
  "Pryor": { "Joe": true },
  "Quintero": { "Sandra": true },
  "Quisenberry": { "Ryan": true },
  "Ramirez": { "Zuleima": true },
  "Ramos": { "Michael": true },
  "Ramsey": { "Danielle": true },
  "Rana": { "Shazeb": true },
  "Rankin": { "Shawnda": true },
  "Ray": { "Quintin": true },
  "Raymond": { "Cindy": true },
  "Reed": { "Cassidy": true },
  "Reyes": { "Alexis": true, "Edwin": true },
  "Rhoten": { "Sierra": true },
  "Rice": { "Jarrett": true },
  "Richardson": { "Sasha": true },
  "Ries": { "John": true },
  "Rivera": { "Travis": true },
  "Robbins": { "Alexander": true },
  "Roberson": { "Lachelle": true },
  "Roberts": { "Marcel": true },
  "Robertson": { "Julian": true },
  "Robledo": { "Jorge": true },
  "Roby": { "Christina": true },
  "Rojas": { "Kathy": true },
  "Rollins": { "Ramon": true },
  "Romo": { "Carmen": true },
  "Ross": { "Alicia": true },
  "Ruiz": { "Oscar": true, "Leroy": true, "Jennifer": true },
  "Ryan": { "Joseph": true },
  "Saavedra": { "Osvaldo": true },
  "Sainsbury": { "Phillip": true },
  "Sams": { "Amy": true },
  "Sanchez": { "Edith": true, "Celso": true },
  "Sanders": { "Freddie": true },
  "Sandoval": { "Andrea": true, "Lorenzo": true },
  "Santos": { "Kristine": true, "Roy": true },
  "Sauceda": { "Kassandra": true },
  "Saunders": { "Stephanie": true },
  "Schilling": { "Michael": true },
  "Scott": { "Jason": true },
  "Seals": { "Camille": true },
  "Serrano": { "Victor": true },
  "Sessions": { "Kathleen": true },
  "Sevilla": { "Megan": true },
  "Shackelford": { "Alex": true },
  "Sharp": { "Jerry": true },
  "Sheffield": { "Will": true },
  "Shelby": { "Lareisha": true },
  "Shigeta": { "Margaret": true },
  "Simmons": { "James": true },
  "Simpson": { "Latricia": true },
  "Singleton": { "Janet": true },
  "Sithy": { "Angela": true },
  "Sivley": { "Mikayla": true },
  "Slater": { "Emily": true },
  "Smith": { "Tori": true, "Casey": true, "Holly": true },
  "Snell": { "Erica": true },
  "Solorzano": { "Edgar": true },
  "Somerville": { "Andrea": true },
  "Sparks": { "Wendy": true },
  "Stallworth": { "Jessica": true },
  "Stanley": { "Frankie": true },
  "Starling": { "Andrew": true },
  "Stark": { "Rickey": true },
  "Steffan": { "James": true },
  "Stewart": { "Amber": true },
  "Stinnett": { "Richard": true },
  "Stip": { "Nicole": true },
  "Stokes": { "Adrian": true },
  "Stone": { "Joshua": true },
  "Strickland": { "Devontae": true },
  "Stroble": { "Antonia": true },
  "Strode": { "Sharnice": true },
  "Suarez": { "Elissa": true },
  "Sutton": { "Nicole": true },
  "Swanson": { "Hannah": true },
  "Swofford": { "Michael": true },
  "Tadesse": { "Lily": true },
  "Taing": { "Bryan": true },
  "Tamashiro": { "Reuben": true },
  "Tate": { "Davian": true },
  "Taylor": { "Christopher": true, "Davonte": true },
  "Teague": { "Sherry": true },
  "Templeton": { "Marquetta": true },
  "Terry": { "Amber": true },
  "Thomas": { "Jaquon": true, "Leandra": true },
  "Thompson": { "James": true, "Kody": true },
  "Thrift": { "Ashley": true },
  "Todd": { "Jonathon": true },
  "Torres": { "Gerardo": true },
  "Trieu": { "Joseph": true },
  "Tucker": { "Jeremy": true },
  "Turner": { "Lachika": true },
  "Twist": { "Kevin": true },
  "Uddin": { "Tahmid": true },
  "Valdez": { "Victor": true },
  "Vasquez": { "Daniel": true, "Selene": true },
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
  "Washington": { "Daniel": true },
  "Waters": { "Jason": true },
  "Watson": { "Joshua": true, "Charles": true },
  "Watt": { "Katrina": true },
  "Webb": { "Janet": true, "Laural": true },
  "Weise": { "Riley": true },
  "Wells": { "Kerrick": true },
  "Westmoreland": { "Jessica": true },
  "Whiddon": { "Chris": true },
  "White": { "Alyssa": true, "Matthew": true, "Victoria": true },
  "Wiedmann": { "Joseph": true },
  "Wilkerson": { "Tyrone": true },
  "Williams": { "John": true, "Kelsey": true, "Christina": true },
  "Wilson": { "Sierra": true, "Christina": true },
  "Winters": { "Dylan": true },
  "Wofford": { "Sammie": true },
  "Wong": { "Kevin": true },
  "Woodard": { "Isha": true },
  "Wright": { "Steven": true, "Elliott": true },
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
  "Zimmerman": { "Sara": true }
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
    let hasRunOnCurrentPage = false;

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    function highlightReservation(row) {
        const lastNameCell = row.querySelector('td:nth-child(6)');
        const firstNameCell = row.querySelector('td:nth-child(7)');
        if (lastNameCell && firstNameCell) {
            const lastName = capitalizeFirstLetter(lastNameCell.textContent.trim());
            const firstName = capitalizeFirstLetter(firstNameCell.textContent.trim());
            if (doNotRentList[lastName] && doNotRentList[lastName][firstName]) {
                row.classList.add('highlight-do-not-rent');
                return true;
            }
        }
        return false;
    }

    function scanAndHighlightNames() {
        if (!isScanning) return;

        const tbody = document.querySelector('tbody');
        if (!tbody) {
            console.warn('Table body not found');
            return;
        }

        let highlightedCount = 0;
        tbody.querySelectorAll('tr').forEach(row => {
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

        // If all rows have been scanned, stop scanning
        if (scannedRows.size === tbody.querySelectorAll('tr').length) {
            stopScanning();
        }
    }

    function startScanning() {
        if (!isScanning && !hasRunOnCurrentPage) {
            isScanning = true;
            hasRunOnCurrentPage = true;
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

    function init() {
        console.log('Initializing script');
        startScanning();
    }

    function checkUrlAndInitialize() {
        const isArrivalsPage = window.location.href.includes('/hk-frontdesk-web/index.html#/arrivals/arrivals-report-details');

        if (isArrivalsPage && !hasRunOnCurrentPage) {
            console.log('Arrivals report page detected. Initializing script...');
            init();
        } else if (!isArrivalsPage) {
            stopScanning();
            hasRunOnCurrentPage = false;
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
    setInterval(checkUrlAndInitialize, 1000);
})();
