## Deployment
* To run the app clone the repo and run the followig in the terminal: 
  ```
  npm install -g json-server
  ```
  ```
  json-server --watch db.json
  ```
  ```
  npm run dev
  ```

## Skills used for this project
* React
* React Context
* Typescript
* Javascript
* JSON
* .env
* Chakra-ui
* Dayjs
* Axios
* CSS
* HTML 
* Vite

## Requirements

# Kunskapskontroll 2 - Invoice-dashboard

## En användare ska kunna:
- Se en lista på tidtagningar de senaste 30 dagarna
  (Har du byggt in dessa i tasks: tasks som loggat tid de senaste 30 dagarna) (X)
- Se en lista på alla tidtagningar (X)
- Se en lista på projekt (X)
- Se en lista på tasks (X)
- Ta bort en tidtagning (X)
- Ta bort en task (X)
- Ta bort ett projekt (X)
- Sätta ett timpris på ett projekt (X)
- Skapa en "faktura" för ett valt projekt och välja tasks som "fakturan" ska innehålla (X)
- Se en lista på "fakturor" och status (X)
- Se en överblicks-sida som visar: (X)
  - Antal projekt (X)
  - Antal tasks (X)
  - Antal "fakturor" (X)
  - Tid som loggats de senaste 30 dagarna (X)
  - Antalet kronor som fakturerats det senaste året (X)

## För att uppnå Godkänt är kraven att:
- Byggd med Typescript, React som Frontend och json-server. (X)

- Applikationen ska använda React Context som "Store" för applikations-bred data. (X)

- Samtliga krav under "En användare ska kunna" är uppfyllda. (X)

- Applikationen ska vara byggd med responsiv design i åtanke. (X)

- En faktura ska innehålla (X)
  - Status (Ej betald, betald, försenad) (X)
  - Förfallodag (30 dagar från datumet vi skapade den) (X)
  - Summa (tid x projektets timpris) (X)
  - Kundens namn (X)

- Listorna ska vara presenterade som tabeller med följande kolumner: (X)
  - Tasks: Namn, Projektets namn (X)
  - Projekt: Namn, antal tasks (X)
  - Fakturor: Kund, status, förfallodatum, summa (X)

- Applikationen ska inte innehålla några "@ts-ignore", typfel och inga implicita any. (X)

## För att uppnå Väl Godkänt är kraven att 2 av följande 4 är uppfyllda:
- Applikationen ska inte heller innehålla några explicita any. (X)

- Kunna välja att avrunda tiden uppåt på tasks när man skapar en faktura till närmsta [1 min, 5 min, 15 min, 30 min, 1h].
(Avrundningen ska ske på varje individuell task, inte på hela fakturan) (X)

- Lägg till stöd för drag n drop för att ändra ordningen på överblicks-infon på överblicks-sidan.
Samt att kunna visa/dölja info-delar på överblicks-sidan. ()

- Skapa grafer på överblicks-infon för att visa: ()
  - En "Line chart" som visar totala mängden tid som loggats de senaste 7 dagarna (X)
  - Valfri chart som visar beloppet som fakturerats i år (per månad) ()