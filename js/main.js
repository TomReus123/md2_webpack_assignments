/**
 * Uitleg van deze opdrachten:
 * Kijk hoever je komt met deze opdrachten. Ik zal deze lijst in de toekomst
 * nog wat uitbreiden met nieuwere opdrachten Je mag me bij elke opdracht om
 * hulp vragen Sowieso wil ik je werk zien. Dus loop even bij me langs als je 1
 * of meerdere opdrachten af hebt
 */


/**
 * Opdracht 1: primitives
 * Maak voor de volgende primitives 5 goed bedachte variabelen per primitive
 *
 * 5 variabelen met daarin een string
 * 5 variabelen met daarin een number
 * 5 variabelen met daarin een boolean
 *
 * Geef ze een goede engelse naam en sla er iets in op wat een goed voorbeeld
 * geeft van Media Development producten (apps, sites, etc.) Bijvoorbeeld een
 * string variabele met de naam 'teacherName' en als waarde 'Berend'
 */
 
 //opdracht 1
 var nameSchool = "Mediacollege Amsterdam";
 var schoolAdress = "Contactweg 36";
 var nameClass = "Scripting";
 var firstName = "Tom";
 var lastName = "Reus";
 
 var lesson = 2;
 var varchar = 255;
 var Hour = 1500;
 var dayOfTheWeek = 1;
 var Enter = 13;
 
 var man = true;
 var programmer = true;
 var women = false;
 var SCT = true;
 var notReal = false;

/**
 * Opdracht 2: Arrays
 * Bedenk 3 arrays en vul ze met primitives
 * console.log de lengte van de arrays
 *
 * Bijvoorbeeld een Array met de naam 'students' en als waarde ['Berend',
 * "Erwin']
 */
 
 //opdracht 2
 var students = ["Sjaak", "Willem", "Tom", "Lucas"];
 var games = ["csgo", "fifa", "rocket league", "GTA V", "left 4 dead 2"];
 var laptopMerken = ["Dell", "HP", "Terra", "Acer"];
 console.log(students.length);
 console.log(games.length);
 console.log(laptopMerken.length);

/**
 * Opdracht 3: Arrays push
 * Maak een lege array aan
 * push er een string in
 */
 
 var array = [];
 array.push("stringetje");
 console.log(array);

/**
 * Opdracht 4: Array splice
 * Maak een array aan en vul hem met namen
 * Gooi de naam op de 1e plek weg
 * Gooi de naam op de 3e plek weg
 */
 
 var names = ["Tom", "Willem", "Sjaak"];
 names.splice(0, 1);
 console.log(names);

/**
 * Opdracht 5: Objects
 * Maak van 10 objecten uit je dagelijkse leven een object
 *
 * Bijvoorbeeld een object met de gegevens van je mobiel zoals welk merk, type
 * en hoe oud hij is
 */
 
 var car = {type:"Fiat", model:"500", color:"white"}; 
 var phone = {type:"Iphone", model:"6", color:"silver"}; 
 var laptop = {type:"HP", model:"255", color:"black"};
 var mouse = {type:"Microsoft", color:"black"};
 var bag = {type:"Eastpack", color:"black"};
 var jacket = {type:"Jack and Jones", color:"Blue"};
 var shirt = {type:"Jack and Jones", color:"olive green"};
 var pants = {type:"Jack and Jones", size:"28/32" color:"black"};
 var shoes = {type:"Nike", size:"43" color:"black"};
 var gel = {type:"Taft", color:"transparent"};

/**
 * Opdracht 6: Functions
 * Bedenk 4 functies die handig zouden kunnen zijn
 * Bijvoorbeeld een functie met de naam 'multiply'. Deze functie verwacht 2
 * parameters value & multiplier console.log( value * multiplier)
 */
 
 

/**
 * Opdracht 7: Function & objects
 * Maak een functie die een firstName en lastName verwacht als parameter
 * vervolgens returned de functie een object met daarin de firstname en
 * lastname opgeslagen roep deze functie aan en console.log() de waarde
 */

/**
 * Opdracht 8: Functions, objects
 * Maak een object genaamd 'student'
 * Maak in dit object bij het aanmaken een functie aan met de naam 'showName'
 */

/**
 * Opdracht 9: Arrays & for loops
 * Maak een array genaamd 'students' met daarin 10 namen van je medeleerlingen
 * Schrijf een for loop om alle namen in de Array te laten zien (console.log())
 */

/**
 * Opdracht 10: Strings samenvoegen
 * Maak een variabele met de naam firstName, sla je voornaam hierin op
 * Maak een variabele met de naam lastName, sla je achternaam hierin op
 * Maak een variabele fullName, en zorg ervoor dat de variabelen 'firstName' en
 * 'lastName' hier samen in worden opgeslagen
 */

/**
 * Opdracht 11: Random cijfers
 * console.log() een willekeurige cijfer tussen 0 en 5
 * console.log() een willekeurige cijfer tussen 1 en 10
 * console.log() een willekeurige cijfer tussen 30 en 40
 * console.log() een willekeurige cijfer tussen -100 en 100
 */

/**
 * Opdracht 12: Primitive, Array of object?
 * Geef in de console.log antwoord op de vraag door een boolean op true of
 * false te zetten
 */
console.log('De naam van een gebruiker sla ik op in een:',
            { array : false, object : false, primitive : false });

console.log('De naam, leeftijd en lengte van een gebruiker sla ik op in een:',
            { array : false, object : false, primitive : false });

console.log('Alle facturen van een zakelijke klant sla ik op in een:',
            { array : false, object : false, primitive : false });

console.log('Een factuur sla ik op in een:',
            { array : false, object : false, primitive : false });

console.log('Als ik vanuit JavaScript een menu maak met knoppen, dan sla ik de knoppen op in een:',
            { array : false, object : false, primitive : false });

/**
 * Opdracht 13: Keywords
 * Maak 4 variabelen aan met de let keyword
 * Maak 4 variabelen aan met de const keyword
 */

/**
 * Opdracht 14: Keywords
 * Geef antwoord op de volgende vragen:
 */
console.log('Wanneer gebruik je de let keyword?', 'jouw antwoord');
console.log('Wanneer gebruik je de const keyword', 'jouw antwoord');

/**
 * Opdracht 15: Objects en array
 * Maak een object voor jezelf (naam, leeftijd, lengte)
 * Maak in je object een array aan genaamd 'family' en vul deze array met namen uit je familie
 * (objecten en arrays kunnen in elkaar opgeslagen worden)
 */