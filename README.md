# instruktioner

Vad ska byggas
Du ska bygga en enkel anslagstavla där det går att posta meddelanden. Det ska gå och se alla meddelanden samt posta ett nytt meddelande där man anger ett användarnamn. Du ska göra detta enligt TDD så börja med att skriva alla testfall och därefter skriv koden och när alla testfall går grönt så är du klar. Du kommer behöva fundera på din HTML-struktur när du skriver testfallen och hur du ska komma åt elementen.

Du behöver inte bygga någon backend för detta.

Lägg också till så att testen triggas på push i en Github action.

Figmaskiss: https://www.figma.com/file/QKiz47a00tMsrPBIHsznR6/Shui---React?type=design&node-id=0-1&t=QBELxGIdjEESvy3Q-0

Funktionalitet
Det går att posta ett nytt meddelande.
Det går att se alla meddelanden.
Går att gå mellan vyn att posta ett nytt meddelande och se alla meddelanden.
User stories
Som användare vill jag kunna posta ett nytt meddelande så att jag kan dela information med andra användare.

Acceptanskriterier:

Det finns en knapp eller länk för att skapa ett nytt meddelande på sidan.
Jag kan skriva ett meddelande i ett textfält.
Det finns en knapp för att skicka meddelandet.
Meddelandet ska sparas och visas i listan över meddelanden när jag skickar det.
Om jag försöker posta ett meddelande utan text, ska jag få ett felmeddelande om att meddelandet inte kan vara tomt.
Efter att meddelandet är postat, ska jag återgå till listvyn av alla meddelanden.
Som användare vill jag kunna se alla meddelanden som har postats så att jag kan ta del av informationen och hålla mig uppdaterad.

Acceptanskriterier:

Jag kan se en lista på alla meddelanden på en specifik vy.
Meddelandena ska visas med information om när de postades och av vem (om relevant).
Listan ska vara sorterad, t.ex. från det senaste meddelandet först.
Om det inte finns några meddelanden ska ett meddelande visas som informerar om att det inte finns några inlägg.
Som användare Vill jag kunna navigera mellan vyn för att posta ett nytt meddelande och vyn för att se alla meddelanden, så att jag enkelt kan växla mellan att skapa och läsa meddelanden.

Acceptanskriterier:

Det ska finnas en tydlig navigering för att växla mellan att skapa ett nytt meddelande och att visa alla meddelanden.
Jag ska kunna gå från att skapa ett nytt meddelande till att se alla meddelanden utan att behöva ladda om sidan.
Jag ska kunna gå från listan med alla meddelanden till att skapa ett nytt meddelande.
Om jag lämnar vyn för att posta ett meddelande utan att skicka, ska alla inmatade data rensas
