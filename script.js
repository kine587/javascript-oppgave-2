/******************************************************************************
Funksjoner og metoder oppgave

Les oppgaveteksten NØYE. Vis noen eksempler i koden din som tester
funksjonene og metodene dine. Bruk en variasjon av pilfunksjoner (arrow functions)
og funksjoner laget med nøkkelordet `function`.

Legg til kommentarer i koden din som kort forklarer hva den gjør.

******************************************************************************/

/******************************************************************************
1.

Lag følgende funksjon:

Funksjonen skal ta inn et tall som parameter og returnere
"Oddetall" hvis tallet er et oddetall og "Partall" hvis tallet er et partall.
(PS: Funksjonen skal bruke return, du skal ikke bruke console log inni
funksjonen)

******************************************************************************/
/* const oddeTall = 3;
const parTall = 2; */
const myNum = 24;
/* function tallType(tall) {
  if (tall % 2 == 0) {
    return "parTall";
  } else {
    return "oddetall";
  }
}
 */
/* console.log(tallType(5)); */

function tallType(tall) {
  return tall % 2 == 0 ? "partall" : "oddetall";
}
console.log(tallType(4));

/* function tallType(tall) {
  return tall % 2;
}
console.log(tallType(myNum) ? "odd" : "even");
 */
/* const myModulus = 2;

function checkForEven(number) {
  return number % 2;
}

console.log(checkForEven(myNum) ? "It's odd!" : "It's even!"); */
/******************************************************************************
2.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter og returnere stringen
i STORE BOKSTAVER med et utropstegn på slutten.

Eksempel: "Dette er kult" skal returnere "DETTE ER KULT!"

******************************************************************************/
const input = "Dette er kult";

function text(input) {
  return input.toUpperCase() + "!";
}

const resultat = text("Dette er kult");
console.log(resultat);
/******************************************************************************
3.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere:

 - Et navn (string)
 - En time på døgnet (nummer)

Funksjonen skal returnere:
"Ugyldig tid" hvis timeverdien er mindre enn 0.
"God natt (mottatt navn)" hvis timeverdien er mellom 0 og 5.
"God morgen (mottatt navn)" hvis timeverdien er mellom 6 og 11.
"God dag (mottatt navn)" hvis timeverdien er mellom 12 og 17.
"God kveld (mottatt navn)" hvis timeverdien er mellom 18 og 23.
"Ugyldig tid" hvis timeverdien er større enn 23.

Hvis ingen timeverdi mottas, skal funksjonen returnere en feilmelding.

******************************************************************************/

const userName = "Kine";
let time = 2;

function timeVerdi(userName, time) {
  if (time < 0 || time > 23) {
    console.log("ugyldig tid");
  } else if (time <= 5) {
    console.log(`God natt ${userName}`);
  } else if (time >= 6 && time <= 11) {
    console.log(`God morgen ${userName}`);
  } else if (time >= 12 && time <= 17) {
    console.log(`God dag ${userName}`);
  } else {
    console.log(`god kveld ${userName}`);
  }
}

timeVerdi(userName, time);
/* console.log("timeVerdi"); */

/******************************************************************************
4.

Lag følgende funksjon:

Funksjonen skal ta inn en array som parameter og returnere arrayen
med første og siste indeks fjernet.

Eksempel 1: ["Rød", "Grønn", "Blå", "Gul"] skal returnere ["Grønn", "Blå"].

Eksempel 2: ["En", "To", "Tre", "Fire", "Fem", "Seks"] skal returnere
["To", "Tre", "Fire", "Fem"].

******************************************************************************/
/* const colors = ["Rød", "Grønn", "Blå", "Gul"].slice(1, -1);
const numbers = ["En", "To", "Tre", "Fire", "Fem", "Seks"].slice(1, -1);
function removeColors(colors, numbers) {
  return colors, numbers;
}
console.log(
  colors(
    removeColors.join("Rød", "Grønn", "Blå", "Gul").removeColors.slice(1, -1)
  )
);
console.log(numbers);
funker ikke */

/*
const color = ["Rød", "Grønn", "Blå", "Gul"]; 
const number = ["En", "To", "Tre", "Fire", "Fem", "Seks"];
function removeFirstLast(array) {
  return array.slice(1, -1);
}
console.log(removeFirstLast(colors));
console.log(removeFirstLast(numbers)); 
funker */

const colors = ["Rød", "Grønn", "Blå", "Gul"];
const numbers = ["En", "To", "Tre", "Fire", "Fem", "Seks"];

const arrowRemoveFirstLast = (array) => {
  return array.slice(1, -1);
};

console.log(arrowRemoveFirstLast(colors));
console.log(arrowRemoveFirstLast(numbers));
/* funker */
/* function twoArraySlicer(array1, array2) {
  const arraySlice1 = array1.slice(1, -1);
  const arraySlice2 = array2.slice(1, -1);
  return [arraySlice1, arraySlice2];
}
console.log(twoArraySlicer(colors, numbers)); */
/******************************************************************************
5.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter.

Bruk stringmetoder på stringen for å gjøre følgende:
 - Erstatt ordet "vanskelig" med "gøy".
 - Fjern mellomrom fra starten og slutten av stringen.

Returner deretter den oppdaterte stringen.

Eksempel 1: "  Javascript er vanskelig   " skal returnere "Javascript er gøy".
Eksempel 2: " Det er vanskelig å bruke metoder " skal returnere "Det er gøy å bruke metoder".
Eksempel 3: "   vanskelig        " skal returnere "gøy".

******************************************************************************/

const string = "  Javascript er vanskelig   ";
const methodetrening = " Det er vanskelig å bruke metoder ";
const oneWordString = "   vanskelig        ";
/* const trimmedString = string.trim().replace("vanskelig", "gøy");
const replacedMethodetrening = methodetrening.replace("vanskelig", "gøy");
const trimmedOneWordString = oneWordString.trim().replace("vanskelig", "gøy"); */

/* console.log(trimmedString);
console.log(stringTwo);
console.log(trimmedOneWordString); */

function endreString(string) {
  const finalString = string.trim().replace("vanskelig", "gøy");
  return finalString;
}
console.log(endreString("  Javascript er vanskelig   "));
console.log(endreString(" Det er vanskelig å bruke metoder "));
console.log(endreString("   vanskelig        "));
/* const properString = string.trim().replace("vanskelig", "gøy");
console.log(properString);  */
/* function rawString(string) {
  return string.trim().replace("vanskelig", "gøy");
}
console.log(string.trim().replace("vanskelig", "gøy"));

function methoder(methodetrening) {
  return methodetrening.replace("vanskelig", "gøy");
}
console.log(methodetrening.replace("vanskelig", "gøy"));

function oneWord(oneWordString) {
  return oneWordString.trim().replace("vanskelig", "gøy");
}
console.log(oneWordString.trim().replace("vanskelig", "gøy")); */

/******************************************************************************
6.

Fullfør følgende steg for å manipulere "items"-arrayet. Hvert steg skal
fullføres ved å bruke passende array-metoder.

*******************************************************************************/

const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

/*******************************************************************************
Steg 1: Fjern det første elementet ("Bok") fra arrayen ved hjelp av riktig metode.

Steg 2: Finn og erstatt "Viskelær" med "Linjal" i arrayen.

Steg 3: Bruk splice-metoden til å fjerne både "Penn" og "Notatbok", og legg til "Markeringspenn" i deres plass.

Steg 4: Kombiner alle elementene i arrayen til en enkelt string ved å bruke " | " som separator.

Ekstra utfordring: Lag et nytt array som kun inkluderer elementer som inneholder bokstaven "e".

******************************************************************************/

console.log(items.shift());
console.log(items);
console.log(items.indexOf("Viskelær"));
const replace = items.indexOf("Viskelær");
if (replace !== 1) {
  items[replace] = "Linjal";
}
console.log(items);
items.splice(0, 1, "Markeringspenn");
console.log(items);
/* items.join(" | ");
console.log(items); */
const result = items.join(" | ");
console.log(result);
/******************************************************************************
7.

EKSTRA UTFORDRING #1:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere, en array og en string.

Sjekk om arrayen inneholder stringen. Hvis den gjør det, fjern elementet
fra arrayet og returner den oppdaterte arrayen.

Hvis arrayet ikke inneholder stringen, legg stringen til på slutten
av arrayet og returner det oppdaterte arrayet.

Eksempel 1: (["Rød", "Grønn"], "Blå") --> ["Rød", "Grønn", "Blå"]
Eksempel 2: (["Rød", "Grønn", "Blå"], "Grønn") --> ["Rød", "Blå"]
Eksempel 3: (["En", "To", "Tre"], "Fire") --> ["En", "To", "Tre", "Fire"]
Eksempel 4: (["En", "To", "Tre"], "To") --> ["En", "Tre"]

******************************************************************************/

// Skriv koden for oppgave 7 her

/******************************************************************************
8.

EKSTRA UTFORDRING #2:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn ett parameter.

Hvis parameteret er en string:
Returner stringen med "😎" lagt til i starten og slutten.

Hvis parameteret er et tall:
Doble verdien, konverter den til en string, og returner den med "😎" lagt til i
starten og slutten.

Hvis parameteret er en boolean:
Returner "😎Ja😎" hvis parameteret er true, eller "😎Slapp av😎" hvis parameteret er false.

Hvis parameteret er en annen datatype:
Returner "😎Kun primitive verdier😎".

******************************************************************************/

// Skriv koden for oppgave 8 her
