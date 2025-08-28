import { useState } from "react";
import './App.css';

const menuData = {
  Cafeteria: [
    {
      name: { en: "Espresso", it: "Caffè espresso", nl: "Espresso", de: "Espresso", fr: "Expresso" },
      description: {
        en: "Strong Italian coffee shot",
        it: "Caffè italiano forte",
        nl: "Sterke Italiaanse koffie",
        de: "Starker italienischer Kaffee",
        fr: "Café italien fort",
      },
      price: "€1,50",
    },
    {
      name: { en: "Decaf Espresso", it: "Caffè decaffeinato", nl: "Decaf Espresso", de: "Entkoffeinierter Espresso", fr: "Expresso décaféiné" },
      description: {
        en: "Italian coffee without caffeine",
        it: "Caffè italiano senza caffeina",
        nl: "Italiaanse koffie zonder cafeïne",
        de: "Italienischer Kaffee ohne Koffein",
        fr: "Café italien sans caféine",
      },
      price: "€1,50",
    },
    {
      name: { en: "Coffee with liquor", it: "Caffè corretto", nl: "Koffie met likeur", de: "Kaffee mit Schnaps", fr: "Café correct" },
      description: {
        en: "Espresso with a shot of liquor",
        it: "Caffè espresso con un goccio di liquore",
        nl: "Espresso met een scheutje likeur",
        de: "Espresso mit einem Schuss Schnaps",
        fr: "Expresso avec un trait de liqueur",
      },
      price: "€1,70",
    },
    {
      name: { en: "Americano", it: "Caffè americano", nl: "Americano", de: "Americano", fr: "Café Américain" },
      description: {
        en: "Espresso diluted with hot water",
        it: "Caffè espresso diluito con acqua calda",
        nl: "Espresso verdund met heet water",
        de: "Espresso mit heißem Wasser verlängert",
        fr: "Expresso allongé avec de l'eau chaude",
      },
      price: "€2,50",
    },
    {
      name: { en: "Barley Coffee", it: "Caffè d'orzo", nl: "Gerstekoffie", de: "Gerstenkaffee", fr: "Café d'orge" },
      description: {
        en: "Coffee-like drink made from roasted barley",
        it: "Bevanda simile al caffè fatta con orzo tostato",
        nl: "Koffieachtig drankje gemaakt van geroosterde gerst",
        de: "Kaffeeähnliches Getränk aus gerösteter Gerste",
        fr: "Boisson semblable au café à base d'orge torréfiée",
      },
      price: "€1,70",
    },
    {
      name: { en: "Ginseng Coffee", it: "Caffè al ginseng", nl: "Ginsengkoffie", de: "Ginsengkaffee", fr: "Café au ginseng" },
      description: {
        en: "Espresso blended with ginseng extract",
        it: "Caffè espresso miscelato con estratto di ginseng",
        nl: "Espresso gemengd met ginsengextract",
        de: "Espresso gemischt mit Ginseng-Extrakt",
        fr: "Expresso mélangé avec extrait de ginseng",
      },
      price: "€1,70",
    },
    {
      name: { en: "Cappuccino", it: "Cappuccino", nl: "Cappuccino", de: "Cappuccino", fr: "Cappuccino" },
      description: {
        en: "Espresso with steamed milk and milk foam",
        it: "Caffè espresso con latte caldo e schiuma di latte",
        nl: "Espresso met gestoomde melk en melkschuim",
        de: "Espresso mit heißer Milch und Milchschaum",
        fr: "Expresso avec lait chaud et mousse de lait",
      },
      price: "€2,00",
    },
    {
      name: { en: "Milk", it: "Latte", nl: "Melk", de: "Milch", fr: "Lait" },
      description: {
        en: "Fresh milk served cold or warm",
        it: "Latte fresco servito freddo o caldo",
        nl: "Verse melk, koud of warm geserveerd",
        de: "Frische Milch, kalt oder warm serviert",
        fr: "Lait frais servi froid ou chaud",
      },
      price: "€1,50",
    },
    {
      name: { en: "Latte Macchiato", it: "Latte macchiato", nl: "Latte macchiato", de: "Latte Macchiato", fr: "Latte macchiato" },
      description: {
        en: "Steamed milk with a shot of espresso",
        it: "Latte caldo con un goccio di caffè espresso",
        nl: "Gestoomde melk met een scheut espresso",
        de: "Heiße Milch mit einem Schuss Espresso",
        fr: "Lait chaud avec un trait d'espresso",
      },
      price: "€2,00",
    },
    {
      name: { en: "Orange juice", it: "Spremuta d'arancia", nl: "Sinaasappelsap", de: "Orangensaft", fr: "Jus d'orange" },
      description: {
        en: "Freshly squeezed orange juice.",
        it: "Succo d'arancia appena spremuto.",
        nl: "Vers geperst sinaasappelsap.",
        de: "Frisch gepresster Orangensaft.",
        fr: "Jus d'orange fraîchement pressé.",
      },
      price: "€4,00",
    },
    {
      name: { en: "Tea/Chamomile", it: "Tè/Camomilla", nl: "Thee/Kamille", de: "Tee/Kamille", fr: "Thé/Camomille" },
      description: {
        en: "Hot tea or chamomile infusion",
        it: "Tè caldo o infuso di camomilla",
        nl: "Hete thee of kamille-infusie",
        de: "Heißer Tee oder Kamillentee",
        fr: "Thé chaud ou infusion de camomille",
      },
      price: "€2,50",
    },
    {
      name: { en: "Hot Chocolate", it: "Cioccolata calda", nl: "Warme Chocolade", de: "Heiße Schokolade", fr: "Chocolat chaud" },
      description: {
        en: "Rich and creamy hot chocolate drink",
        it: "Bevanda calda di cioccolato ricca e cremosa",
        nl: "Rijke en romige warme chocoladedrank",
        de: "Reiches und cremiges Heißgetränk aus Schokolade",
        fr: "Boisson chaude au chocolat riche et crémeuse",
      },
      price: "€3,00",
    },
    {
      name: { en: "Croissant", it: "Cornetto", nl: "Croissant", de: "Croissant", fr: "Croissant" },
      description: {
        en: "Buttery Italian-style pastry, often filled",
        it: "Pasticcino italiano burroso, spesso farcito",
        nl: "Boterachtig Italiaans gebak, vaak gevuld",
        de: "Buttriges italienisches Gebäck, oft gefüllt",
        fr: "Pâtisserie italienne beurrée, souvent fourrée",
      },
      price: "€1,50",
    },
    {
      name: { en: "Brioche", it: "Brioche", nl: "Brioche", de: "Brioche", fr: "Brioche" },
      description: {
        en: "Soft, sweet pastry, often served at breakfast",
        it: "Dolce soffice, spesso servito a colazione",
        nl: "Zacht, zoet gebak, vaak bij het ontbijt geserveerd",
        de: "Weiches, süßes Gebäck, oft zum Frühstück serviert",
        fr: "Pâtisserie douce et moelleuse, souvent servie au petit-déjeuner",
      },
      price: "Placeholder",
    },

  ],
  Sodas: [
    {
      name: { en: "Water 1.5 L", it: "Acqua 1,5 L", nl: "Water 1,5 L", de: "Wasser 1,5 L", fr: "Eau 1,5 L" },
      description: {
        en: "Bottled still water, 1.5 liters",
        it: "Acqua naturale in bottiglia, 1,5 litri",
        nl: "Stilstaand water in fles, 1,5 liter",
        de: "Stilles Wasser in Flasche, 1,5 Liter",
        fr: "Eau plate en bouteille, 1,5 litre",
      },
      price: "€2,50",
    },
    {
      name: { en: "Water 0.5 L", it: "Acqua 0,5 L", nl: "Water 0,5 L", de: "Wasser 0,5 L", fr: "Eau 0,5 L" },
      description: {
        en: "Bottled still water, 0.5 liters",
        it: "Acqua naturale in bottiglia, 0,5 litri",
        nl: "Stilstaand water in fles, 0,5 liter",
        de: "Stilles Wasser in Flasche, 0,5 Liter",
        fr: "Eau plate en bouteille, 0,5 litre",
      },
      price: "€1,50",
    },
    {
      name: { en: "Fruit Juice", it: "Succo di frutta", nl: "Vruchtensap", de: "Fruchtsaft", fr: "Jus de fruits" },
      description: {
        en: "Fresh fruit juice, served chilled",
        it: "Succo di frutta fresco, servito freddo",
        nl: "Verse vruchtensap, gekoeld geserveerd",
        de: "Frischer Fruchtsaft, gekühlt serviert",
        fr: "Jus de fruits frais, servi frais",
      },
      price: "€2,50",
    },
    {
      name: { en: "Coca Cola", it: "Coca Cola", nl: "Coca Cola", de: "Coca Cola", fr: "Coca Cola" },
      description: {
        en: "Classic carbonated soft drink",
        it: "Bibita gassata classica",
        nl: "Klassieke koolzuurhoudende frisdrank",
        de: "Klassisches kohlensäurehaltiges Erfrischungsgetränk",
        fr: "Boisson gazeuse classique",
      },
      price: "€2,50",
    },
    {
      name: { en: "Coca Cola Zero", it: "Coca Cola Zero", nl: "Coca Cola Zero", de: "Coca Cola Zero", fr: "Coca Cola Zero" },
      description: {
        en: "Sugar-free carbonated soft drink",
        it: "Bibita gassata senza zucchero",
        nl: "Koolzuurhoudende frisdrank zonder suiker",
        de: "Zuckerfreies kohlensäurehaltiges Erfrischungsgetränk",
        fr: "Boisson gazeuse sans sucre",
      },
      price: "€2,50",
    },
    {
      name: { en: "Fanta", it: "Fanta", nl: "Fanta", de: "Fanta", fr: "Fanta" },
      description: {
        en: "Fruity carbonated soft drink",
        it: "Bibita gassata dal gusto fruttato",
        nl: "Fruitige koolzuurhoudende frisdrank",
        de: "Fruchtiges kohlensäurehaltiges Erfrischungsgetränk",
        fr: "Boisson gazeuse fruitée",
      },
      price: "€2,50",
    },
    {
      name: { en: "Sprite", it: "Sprite", nl: "Sprite", de: "Sprite", fr: "Sprite" },
      description: {
        en: "Lemon-lime flavored carbonated soft drink",
        it: "Bibita gassata al gusto limone e lime",
        nl: "Koolzuurhoudende frisdrank met citroen-limoensmaak",
        de: "Kohlensäurehaltiges Erfrischungsgetränk mit Zitronen-Limetten-Geschmack",
        fr: "Boisson gazeuse au goût citron-lime",
      },
      price: "€2,50",
    },
    {
      name: { en: "Peach or Lemon Tea", it: "Tè pesca o limone", nl: "Perzik- of citroenthee", de: "Pfirsich- oder Zitronentee", fr: "Thé pêche ou citron" },
      description: {
        en: "Iced or chilled tea with peach or lemon flavor",
        it: "Tè freddo o ghiacciato al gusto pesca o limone",
        nl: "IJs- of gekoelde thee met perzik- of citroensmaak",
        de: "Eistee oder gekühlter Tee mit Pfirsich- oder Zitronengeschmack",
        fr: "Thé glacé ou frais parfum pêche ou citron",
      },
      price: "€2,50",
    },
    {
      name: { en: "Cedrata", it: "Cedrata", nl: "Cedrata", de: "Cedrata", fr: "Cedrata" },
      description: {
        en: "Italian citrus-flavored soft drink",
        it: "Bibita analcolica al gusto di cedro",
        nl: "Italiaanse frisdrank met citrussmaak",
        de: "Italienisches Erfrischungsgetränk mit Zitrusgeschmack",
        fr: "Boisson gazeuse italienne au goût d'agrumes",
      },
      price: "€2,50",
    },
    {
      name: { en: "Chinò", it: "Chinò", nl: "Chinò", de: "Chinò", fr: "Chinò" },
      description: {
        en: "Italian bitter-sweet carbonated soft drink",
        it: "Bibita analcolica italiana dal gusto amaro-dolce",
        nl: "Italiaanse koolzuurhoudende frisdrank met bitterzoete smaak",
        de: "Italienisches kohlensäurehaltiges Erfrischungsgetränk mit bitter-süßem Geschmack",
        fr: "Boisson gazeuse italienne au goût amer-doux",
      },
      price: "€2,50",
    },
    {
      name: { en: "Lemonsoda", it: "Lemonsoda", nl: "Lemonsoda", de: "Lemonsoda", fr: "Lemonsoda" },
      description: {
        en: "Lemon-flavored carbonated soft drink",
        it: "Bibita gassata al gusto di limone",
        nl: "Koolzuurhoudende frisdrank met citroensmaak",
        de: "Kohlensäurehaltiges Erfrischungsgetränk mit Zitronengeschmack",
        fr: "Boisson gazeuse au goût citron",
      },
      price: "€2,50",
    },
    {
      name: { en: "Schweppes Lemon / Orange / Tonic", it: "Schweppes Lemon / Arancia / Tonic", nl: "Schweppes Lemon / Sinaas / Tonic", de: "Schweppes Zitrone / Orange / Tonic", fr: "Schweppes Citron / Orange / Tonic" },
      description: {
        en: "Carbonated soft drinks in lemon, orange, or tonic flavors",
        it: "Bibite gassate ai gusti limone, arancia o tonic",
        nl: "Koolzuurhoudende frisdranken in citroen-, sinaasappel- of tonic-smaak",
        de: "Kohlensäurehaltige Erfrischungsgetränke in Zitrone-, Orange- oder Tonic-Geschmack",
        fr: "Boissons gazeuses aux saveurs citron, orange ou tonic",
      },
      price: "€2,50",
    },
    {
      name: { en: "Fever-Tree Tonic Water Premium Mediterranean / Indian", it: "Fever-Tree Tonic Water Premium Mediterraneo / Indiano", nl: "Fever-Tree Tonic Water Premium Mediterraan / Indiaas", de: "Fever-Tree Tonic Water Premium Mediterran / Indisch", fr: "Fever-Tree Tonic Water Premium Méditerranéen / Indien" },
      description: {
        en: "Premium tonic water, Mediterranean or Indian style",
        it: "Acqua tonica premium, stile Mediterraneo o Indiano",
        nl: "Premium tonic water, Mediterraanse of Indiase stijl",
        de: "Premium Tonic Water, Mediterraner oder Indischer Stil",
        fr: "Eau tonique premium, style Méditerranéen ou Indien",
      },
      price: "€4,00",
    },
    {
      name: { en: "Fever-Tree Ginger Beer", it: "Fever-Tree Ginger Beer", nl: "Fever-Tree Ginger Beer", de: "Fever-Tree Ginger Beer", fr: "Fever-Tree Ginger Beer" },
      description: {
        en: "Spicy ginger-flavored carbonated soft drink",
        it: "Bibita gassata al gusto speziato di zenzero",
        nl: "Koolzuurhoudende frisdrank met pittige gembersmaak",
        de: "Kohlensäurehaltiges Erfrischungsgetränk mit würzigem Ingwergeschmack",
        fr: "Boisson gazeuse épicée au goût de gingembre",
      },
      price: "€4,00",
    },
    {
      name: { en: "Fever-Tree Pink Grapefruit", it: "Fever-Tree Pompelmo Rosa", nl: "Fever-Tree Roze Grapefruit", de: "Fever-Tree Pink Grapefruit", fr: "Fever-Tree Pamplemousse Rose" },
      description: {
        en: "Refreshing carbonated drink with pink grapefruit flavor",
        it: "Bibita gassata rinfrescante al gusto di pompelmo rosa",
        nl: "Verfrissend koolzuurhoudend drankje met roze grapefruit smaak",
        de: "Erfrischendes kohlensäurehaltiges Getränk mit Pink Grapefruit Geschmack",
        fr: "Boisson gazeuse rafraîchissante au goût de pamplemousse rose",
      },
      price: "€4,00",
    },
    {
      name: { en: "Red Bull", it: "Red Bull", nl: "Red Bull", de: "Red Bull", fr: "Red Bull" },
      description: {
        en: "Energy drink with caffeine and taurine",
        it: "Bevanda energetica con caffeina e taurina",
        nl: "Energiedrank met cafeïne en taurine",
        de: "Energy-Drink mit Koffein und Taurin",
        fr: "Boisson énergisante avec caféine et taurine",
      },
      price: "€3,00",
    },
    {
      name: { en: "Almond Syrup", it: "Latte di mandorla", nl: "Amandelsiroop", de: "Mandel-Sirup", fr: "Sirop d'amande" },
      description: {
        en: "Almond-flavored syrup drink",
        it: "Bevanda aromatizzata alla mandorla",
        nl: "Drank met amandelsmaak",
        de: "Getränk mit Mandelgeschmack",
        fr: "Boisson aromatisée à l'amande",
      },
      price: "€2,50",
    },
    {
      name: { en: "Mint Syrup", it: "Menta", nl: "Muntsiroop", de: "Minzsirup", fr: "Sirop de menthe" },
      description: {
        en: "Mint-flavored syrup drink",
        it: "Bevanda aromatizzata alla menta",
        nl: "Drank met muntsmaak",
        de: "Getränk mit Minzgeschmack",
        fr: "Boisson aromatisée à la menthe",
      },
      price: "€2,50",
    },
    {
      name: { en: "Sour Black Cherry Syrup", it: "Amarena", nl: "Zure Zwarte Kersensiroop", de: "Sauerkirschsirup", fr: "Sirop de cerise noire aigre" },
      description: {
        en: "Sour black cherry-flavored syrup drink",
        it: "Bevanda aromatizzata al gusto di amarena",
        nl: "Drank met zure zwarte kersensmaak",
        de: "Getränk mit Sauerkirschgeschmack",
        fr: "Boisson aromatisée à la cerise noire aigre",
      },
      price: "€2,50",
    },
    {
      name: { en: "Ginger Ale", it: "Ginger Ale", nl: "Ginger Ale", de: "Ginger Ale", fr: "Ginger Ale" },
      description: {
        en: "Carbonated soft drink flavored with ginger",
        it: "Bibita gassata aromatizzata allo zenzero",
        nl: "Koolzuurhoudende frisdrank met gembersmaak",
        de: "Kohlensäurehaltiges Erfrischungsgetränk mit Ingwergeschmack",
        fr: "Boisson gazeuse aromatisée au gingembre",
      },
      price: "€2,50",
    },
    {
      name: { en: "Gatorade", it: "Gatorade", nl: "Gatorade", de: "Gatorade", fr: "Gatorade" },
      description: {
        en: "Electrolyte sports drink for hydration",
        it: "Bevanda sportiva con elettroliti per idratazione",
        nl: "Sportdrank met elektrolyten voor hydratatie",
        de: "Sportgetränk mit Elektrolyten zur Hydration",
        fr: "Boisson sportive électrolytique pour l'hydratation",
      },
      price: "€2,50",
    },
  ],
  Beers: [
    {
      name: { en: "Peroni 33 cl", it: "Peroni 33 cl", nl: "Peroni 33 cl", de: "Peroni 33 cl", fr: "Peroni 33 cl" },
      description: {
        en: "Italian lager beer, 33 cl bottle",
        it: "Birra lager italiana, bottiglia da 33 cl",
        nl: "Italiaans lagerbier, fles 33 cl",
        de: "Italienisches Lagerbier, 33 cl Flasche",
        fr: "Bière lager italienne, bouteille de 33 cl",
      },
      price: "€2,50",
    },
    {
      name: { en: "Nastro Azzurro 33 cl", it: "Nastro Azzurro 33 cl", nl: "Nastro Azzurro 33 cl", de: "Nastro Azzurro 33 cl", fr: "Nastro Azzurro 33 cl" },
      description: {
        en: "Italian premium lager beer, 33 cl bottle",
        it: "Birra lager italiana premium, bottiglia da 33 cl",
        nl: "Italiaans premium lagerbier, fles 33 cl",
        de: "Italienisches Premium-Lagerbier, 33 cl Flasche",
        fr: "Bière lager italienne premium, bouteille de 33 cl",
      },
      price: "€3,50",
    },
    {
      name: { en: "Heineken 33 cl", it: "Heineken 33 cl", nl: "Heineken 33 cl", de: "Heineken 33 cl", fr: "Heineken 33 cl" },
      description: {
        en: "Dutch pale lager beer, 33 cl bottle",
        it: "Birra lager chiara olandese, bottiglia da 33 cl",
        nl: "Nederlandse pale lager bier, fles 33 cl",
        de: "Niederländisches Pale Lager Bier, 33 cl Flasche",
        fr: "Bière lager pâle néerlandaise, bouteille de 33 cl",
      },
      price: "€3,50",
    },
    {
      name: { en: "Beck's 33 cl", it: "Beck's 33 cl", nl: "Beck's 33 cl", de: "Beck's 33 cl", fr: "Beck's 33 cl" },
      description: {
        en: "German pilsner beer, 33 cl bottle",
        it: "Birra pilsner tedesca, bottiglia da 33 cl",
        nl: "Duitse pilsener, fles 33 cl",
        de: "Deutsches Pilsnerbier, 33 cl Flasche",
        fr: "Bière pils allemande, bouteille de 33 cl",
      },
      price: "€3,50",
    },
    {
      name: { en: "Bud 33 cl", it: "Bud 33 cl", nl: "Bud 33 cl", de: "Bud 33 cl", fr: "Bud 33 cl" },
      description: {
        en: "American pale lager beer, 33 cl bottle",
        it: "Birra lager chiara americana, bottiglia da 33 cl",
        nl: "Amerikaans pale lager bier, fles 33 cl",
        de: "Amerikanisches Pale Lager Bier, 33 cl Flasche",
        fr: "Bière lager pâle américaine, bouteille de 33 cl",
      },
      price: "€3,50",
    },
    {
      name: { en: "Non-Alcoholic Beer 33 cl", it: "Birra analcolica 33 cl", nl: "Alcoholvrij Bier 33 cl", de: "Alkoholfreies Bier 33 cl", fr: "Bière sans alcool 33 cl" },
      description: {
        en: "Refreshing non-alcoholic beer, 33 cl bottle",
        it: "Birra analcolica rinfrescante, bottiglia da 33 cl",
        nl: "Verfrissend alcoholvrij bier, fles 33 cl",
        de: "Erfrischendes alkoholfreies Bier, 33 cl Flasche",
        fr: "Bière sans alcool rafraîchissante, bouteille de 33 cl",
      },
      price: "€3,50",
    },
    {
      name: { en: "Ichnusa Filtrata 33 cl", it: "Ichnusa filtrata 33 cl", nl: "Ichnusa Filtrata 33 cl", de: "Ichnusa Filtrata 33 cl", fr: "Ichnusa Filtrata 33 cl" },
      description: {
        en: "Filtered Italian lager beer, 33 cl bottle",
        it: "Birra lager italiana filtrata, bottiglia da 33 cl",
        nl: "Gefilterd Italiaans lagerbier, fles 33 cl",
        de: "Gefiltertes italienisches Lagerbier, 33 cl Flasche",
        fr: "Bière lager italienne filtrée, bouteille de 33 cl",
      },
      price: "€3,50",
    },
    {
      name: { en: "Ichnusa Unfiltered 33 cl", it: "Ichnusa non filtrata 33 cl", nl: "Ichnusa Ongefilterd 33 cl", de: "Ichnusa Ungefiltert 33 cl", fr: "Ichnusa Non Filtrée 33 cl" },
      description: {
        en: "Unfiltered Italian lager beer, 33 cl bottle",
        it: "Birra lager italiana non filtrata, bottiglia da 33 cl",
        nl: "Ongefilterd Italiaans lagerbier, fles 33 cl",
        de: "Ungefiltertes italienisches Lagerbier, 33 cl Flasche",
        fr: "Bière lager italienne non filtrée, bouteille de 33 cl",
      },
      price: "€3,50",
    },
    {
      name: { en: "Corona 33 cl", it: "Corona 33 cl", nl: "Corona 33 cl", de: "Corona 33 cl", fr: "Corona 33 cl" },
      description: {
        en: "Mexican pale lager beer, 33 cl bottle",
        it: "Birra lager chiara messicana, bottiglia da 33 cl",
        nl: "Mexicaans pale lagerbier, fles 33 cl",
        de: "Mexikanisches Pale Lager Bier, 33 cl Flasche",
        fr: "Bière lager pâle mexicaine, bouteille de 33 cl",
      },
      price: "€4,50",
    },
    {
      name: { en: "Ceres 33 cl", it: "Ceres 33 cl", nl: "Ceres 33 cl", de: "Ceres 33 cl", fr: "Ceres 33 cl" },
      description: {
        en: "Danish lager beer, 33 cl bottle",
        it: "Birra lager danese, bottiglia da 33 cl",
        nl: "Deens lagerbier, fles 33 cl",
        de: "Dänisches Lagerbier, 33 cl Flasche",
        fr: "Bière lager danoise, bouteille de 33 cl",
      },
      price: "€4,50",
    },
    {
      name: { en: "Tennent's 33 cl", it: "Tennent's 33 cl", nl: "Tennent's 33 cl", de: "Tennent's 33 cl", fr: "Tennent's 33 cl" },
      description: {
        en: "Scottish lager beer, 33 cl bottle",
        it: "Birra lager scozzese, bottiglia da 33 cl",
        nl: "Schots lagerbier, fles 33 cl",
        de: "Schottisches Lagerbier, 33 cl Flasche",
        fr: "Bière lager écossaise, bouteille de 33 cl",
      },
      price: "€4,50",
    },
    {
      name: { en: "Messina Cristalli di Sale 33 cl", it: "Messina Cristalli di Sale 33 cl", nl: "Messina Cristalli di Sale 33 cl", de: "Messina Cristalli di Sale 33 cl", fr: "Messina Cristalli di Sale 33 cl" },
      description: {
        en: "Italian lager beer with salt crystals, 33 cl bottle",
        it: "Birra lager italiana con cristalli di sale, bottiglia da 33 cl",
        nl: "Italiaans lagerbier met zoutkristallen, fles 33 cl",
        de: "Italienisches Lagerbier mit Salzkristallen, 33 cl Flasche",
        fr: "Bière lager italienne avec cristaux de sel, bouteille de 33 cl",
      },
      price: "€4,00",
    },
    {
      name: { en: "Moretti Baffo d'Oro 33 cl", it: "Moretti Baffo d'Oro 33 cl", nl: "Moretti Baffo d'Oro 33 cl", de: "Moretti Baffo d'Oro 33 cl", fr: "Moretti Baffo d'Oro 33 cl" },
      description: {
        en: "Italian premium lager beer, 33 cl bottle",
        it: "Birra lager italiana premium, bottiglia da 33 cl",
        nl: "Italiaans premium lagerbier, fles 33 cl",
        de: "Italienisches Premium-Lagerbier, 33 cl Flasche",
        fr: "Bière lager italienne premium, bouteille de 33 cl",
      },
      price: "€3,50",
    },
    {
      name: { en: "Moretti Rossa 33 cl", it: "Moretti Rossa 33 cl", nl: "Moretti Rossa 33 cl", de: "Moretti Rossa 33 cl", fr: "Moretti Rossa 33 cl" },
      description: {
        en: "Italian red lager beer, 33 cl bottle",
        it: "Birra lager rossa italiana, bottiglia da 33 cl",
        nl: "Italiaans rood lagerbier, fles 33 cl",
        de: "Italienisches rotes Lagerbier, 33 cl Flasche",
        fr: "Bière lager rouge italienne, bouteille de 33 cl",
      },
      price: "€3,50",
    },
    {
      name: { en: "Moretti IPA 33 cl", it: "Moretti IPA 33 cl", nl: "Moretti IPA 33 cl", de: "Moretti IPA 33 cl", fr: "Moretti IPA 33 cl" },
      description: {
        en: "Italian India Pale Ale beer, 33 cl bottle",
        it: "Birra Italian India Pale Ale, bottiglia da 33 cl",
        nl: "Italiaans India Pale Ale bier, fles 33 cl",
        de: "Italienisches India Pale Ale Bier, 33 cl Flasche",
        fr: "Bière India Pale Ale italienne, bouteille de 33 cl",
      },
      price: "€4,00",
    },
    {
      name: { en: "Franziskaner Weissbier 50 cl", it: "Franziskaner Weissbier 50 cl", nl: "Franziskaner Weissbier 50 cl", de: "Franziskaner Weissbier 50 cl", fr: "Franziskaner Weissbier 50 cl" },
      description: {
        en: "German wheat beer, 50 cl bottle",
        it: "Birra di frumento tedesca, bottiglia da 50 cl",
        nl: "Duits tarwebier, fles 50 cl",
        de: "Deutsches Weißbier, 50 cl Flasche",
        fr: "Bière de blé allemande, bouteille de 50 cl",
      },
      price: "€5,50",
    },
    {
      name: { en: "Draft Beer 25 cl", it: "Birra alla spina 25 cl", nl: "Tapbier 25 cl", de: "Bier vom Fass 25 cl", fr: "Bière pression 25 cl" },
      description: {
        en: "Freshly poured draft beer, 25 cl",
        it: "Birra alla spina appena spillata, 25 cl",
        nl: "Vers getapt tapbier, 25 cl",
        de: "Frisch gezapftes Fassbier, 25 cl",
        fr: "Bière pression fraîchement servie, 25 cl",
      },
      price: "€3,00",
    },
    {
      name: { en: "Draft Beer 40 cl", it: "Birra alla spina 40 cl", nl: "Tapbier 40 cl", de: "Bier vom Fass 40 cl", fr: "Bière pression 40 cl" },
      description: {
        en: "Freshly poured draft beer, 40 cl",
        it: "Birra alla spina appena spillata, 40 cl",
        nl: "Vers getapt tapbier, 40 cl",
        de: "Frisch gezapftes Fassbier, 40 cl",
        fr: "Bière pression fraîchement servie, 40 cl",
      },
      price: "€5,00",
    },
    {
      name: { en: "Draft Beer 50 cl", it: "Birra alla spina 50 cl", nl: "Tapbier 50 cl", de: "Bier vom Fass 50 cl", fr: "Bière pression 50 cl" },
      description: {
        en: "Freshly poured draft beer, 50 cl",
        it: "Birra alla spina appena spillata, 50 cl",
        nl: "Vers getapt tapbier, 50 cl",
        de: "Frisch gezapftes Fassbier, 50 cl",
        fr: "Bière pression fraîchement servie, 50 cl",
      },
      price: "€6,00",
    },
    {
      name: { en: "Shandy", it: "Shandy", nl: "Shandy", de: "Shandy", fr: "Shandy" },
      description: {
        en: "Beer mixed with lemonade or citrus soda",
        it: "Birra miscelata con limonata o soda al gusto agrumi",
        nl: "Bier gemengd met limonade of citrussoda",
        de: "Bier gemischt mit Limonade oder Zitrus-Soda",
        fr: "Bière mélangée avec limonade ou soda aux agrumes",
      },
      price: "€5,00",
    },

  ],
  Aperitifs: [
    {
      name: { en: "Bitter White / Red", it: "Bitter bianco / rosso", nl: "Bitter Wit / Rood", de: "Bitter Weiß / Rot", fr: "Bitter Blanc / Rouge" },
      description: {
        en: "Italian bitter liqueur, white or red variant",
        it: "Liquore amaro italiano, variante bianca o rossa",
        nl: "Italiaanse bittere likeur, witte of rode variant",
        de: "Italienischer Bitterlikör, weiße oder rote Variante",
        fr: "Liqueur amère italienne, variante blanche ou rouge",
      },
      price: "€3,50",
    },
    {
      name: { en: "Crodino", it: "Crodino", nl: "Crodino", de: "Crodino", fr: "Crodino" },
      description: {
        en: "Non-alcoholic Italian bitter aperitif",
        it: "Aperitivo amaro italiano analcolico",
        nl: "Italiaans bitter aperitief zonder alcohol",
        de: "Italienischer alkoholfreier Bitteraperitif",
        fr: "Apéritif amer italien sans alcool",
      },
      price: "€3,50",
    },
    {
      name: { en: "Crodino Twist red fruits / citrus", it: "Crodino Twist frutti rossi / agrumi", nl: "Crodino Twist rood fruit / citrus", de: "Crodino Twist rote Früchte / Zitrus", fr: "Crodino Twist fruits rouges / agrumes" },
      description: {
        en: "Non-alcoholic Italian aperitif with red fruits and citrus flavors",
        it: "Aperitivo italiano analcolico ai frutti rossi e agrumi",
        nl: "Italiaans alcoholvrij aperitief met rode vruchten en citrus",
        de: "Italienischer alkoholfreier Aperitif mit roten Früchten und Zitrus",
        fr: "Apéritif italien sans alcool aux fruits rouges et agrumes",
      },
      price: "€4,00",
    },
    {
      name: { en: "San Pellegrino Cocktail red / white", it: "Cocktail San Pellegrino rosso / bianco", nl: "San Pellegrino Cocktail rood / wit", de: "San Pellegrino Cocktail rot / weiß", fr: "Cocktail San Pellegrino rouge / blanc" },
      description: {
        en: "Non-alcoholic Italian soft drink with a distinctive bitter-sweet taste, available in red or white.",
        it: "Bevanda analcolica italiana dal gusto distintivo dolce-amaro, disponibile in rosso o bianco.",
        nl: "Italiaanse alcoholvrije frisdrank met een karakteristieke zoet-bittere smaak, verkrijgbaar in rood of wit.",
        de: "Italienisches alkoholfreies Erfrischungsgetränk mit charakteristischem süß-bitterem Geschmack, erhältlich in Rot oder Weiß.",
        fr: "Boisson italienne sans alcool au goût amer-doux distinctif, disponible en rouge ou blanc.",
      },
      price: "€3,50",
    },
    {
      name: { en: "Aperol Soda", it: "Aperol Soda", nl: "Aperol Soda", de: "Aperol Soda", fr: "Aperol Soda" },
      description: {
        en: "Iconic Italian aperitif with a bright orange color and a balanced bitter-sweet taste. Low in alcohol and refreshing.",
        it: "Iconico aperitivo italiano dal colore arancione brillante e dal gusto equilibrato dolce-amaro. Leggero e rinfrescante.",
        nl: "Iconisch Italiaans aperitief met een heldere oranje kleur en een uitgebalanceerde zoet-bittere smaak. Licht en verfrissend.",
        de: "Ikonischer italienischer Aperitif mit leuchtend oranger Farbe und ausgewogenem süß-bitterem Geschmack. Leicht und erfrischend.",
        fr: "Apéritif italien emblématique à la couleur orange vif et au goût doux-amer équilibré. Léger et rafraîchissant.",
      },
      price: "€3,50",
    },
    {
      name: { en: "Apertass", it: "Apertass", nl: "Apertass", de: "Apertass", fr: "Apertass" },
      description: {
        en: "Italian non-alcoholic aperitif with a pleasant bitter-sweet taste, perfect as a refreshing alternative.",
        it: "Aperitivo analcolico italiano dal gusto piacevole dolce-amaro, ideale come alternativa rinfrescante.",
        nl: "Italiaans alcoholvrij aperitief met een aangename zoet-bittere smaak, perfect als verfrissend alternatief.",
        de: "Italienischer alkoholfreier Aperitif mit angenehmem süß-bitterem Geschmack, ideal als erfrischende Alternative.",
        fr: "Apéritif italien sans alcool au goût doux-amer agréable, parfait comme alternative rafraîchissante.",
      },
      price: "€5,00",
    },
    {
      name: { en: "Campari Soda", it: "Campari Soda", nl: "Campari Soda", de: "Campari Soda", fr: "Campari Soda" },
      description: {
        en: "Classic Italian aperitif with a distinctive bitter flavor, served in its iconic bottle.",
        it: "Classico aperitivo italiano dal gusto inconfondibile amaro, servito nella sua iconica bottiglietta.",
        nl: "Klassiek Italiaans aperitief met een kenmerkende bittere smaak, geserveerd in het iconische flesje.",
        de: "Klassischer italienischer Aperitif mit unverwechselbar bitterem Geschmack, serviert in der ikonischen Flasche.",
        fr: "Apéritif italien classique au goût amer distinctif, servi dans sa bouteille iconique.",
      },
      price: "€3,50",
    },
    {
      name: { en: "Campari Bitter", it: "Campari Bitter", nl: "Campari Bitter", de: "Campari Bitter", fr: "Campari Bitter" },
      description: {
        en: "Famous Italian bitter aperitif with a strong, aromatic flavor, ideal for cocktails or neat.",
        it: "Famoso aperitivo amaro italiano dal gusto forte e aromatico, ideale per cocktail o da bere liscio.",
        nl: "Beroemd Italiaans bitter aperitief met een sterke, aromatische smaak, ideaal voor cocktails of puur.",
        de: "Berühmter italienischer Bitteraperitif mit starkem, aromatischem Geschmack, ideal für Cocktails oder pur.",
        fr: "Apéritif amer italien célèbre au goût fort et aromatique, idéal pour cocktails ou pur.",
      },
      price: "€3,50",
    },
    {
      name: { en: "Campari Spritz", it: "Campari Spritz", nl: "Campari Spritz", de: "Campari Spritz", fr: "Campari Spritz" },
      description: {
        en: "Refreshing Italian cocktail with Campari, sparkling wine, and soda, served over ice.",
        it: "Rinfrescante cocktail italiano con Campari, vino frizzante e soda, servito con ghiaccio.",
        nl: "Verfrissende Italiaanse cocktail met Campari, mousserende wijn en soda, geserveerd met ijs.",
        de: "Erfrischender italienischer Cocktail mit Campari, Schaumwein und Soda, auf Eis serviert.",
        fr: "Cocktail italien rafraîchissant avec Campari, vin pétillant et soda, servi avec des glaçons.",
      },
      price: "€7,00",
    },
    {
      name: { en: "Aperol Spritz", it: "Aperol Spritz", nl: "Aperol Spritz", de: "Aperol Spritz", fr: "Aperol Spritz" },
      description: {
        en: "Classic Italian cocktail made with Aperol, sparkling wine, and soda, served over ice.",
        it: "Classico cocktail italiano preparato con Aperol, vino frizzante e soda, servito con ghiaccio.",
        nl: "Klassieke Italiaanse cocktail met Aperol, mousserende wijn en soda, geserveerd met ijs.",
        de: "Klassischer italienischer Cocktail mit Aperol, Schaumwein und Soda, auf Eis serviert.",
        fr: "Cocktail italien classique avec Aperol, vin pétillant et soda, servi avec des glaçons.",
      },
      price: "€7,00",
    },
    {
      name: { en: "Spritz Power", it: "Spritz Power", nl: "Spritz Power", de: "Spritz Power", fr: "Spritz Power" },
      description: {
        en: "A bold variation of the classic spritz cocktail, with extra citrus and sparkling notes, served over ice.",
        it: "Variante intensa del classico cocktail spritz, con note extra di agrumi e frizzante, servito con ghiaccio.",
        nl: "Een krachtige variant van de klassieke spritz-cocktail, met extra citrus- en bruisende tonen, geserveerd met ijs.",
        de: "Eine kräftige Variante des klassischen Spritz-Cocktails, mit extra Zitrus- und Sprudelnoten, auf Eis serviert.",
        fr: "Variation audacieuse du cocktail spritz classique, avec des notes supplémentaires d'agrumes et de pétillant, servi avec des glaçons.",
      },
      price: "€7,50",
    },
    {
      name: { en: "Limoncello Spritz", it: "Limoncello Spritz", nl: "Limoncello Spritz", de: "Limoncello Spritz", fr: "Limoncello Spritz" },
      description: {
        en: "Refreshing Italian cocktail with Limoncello, sparkling wine, and soda, served over ice.",
        it: "Rinfrescante cocktail italiano con Limoncello, vino frizzante e soda, servito con ghiaccio.",
        nl: "Verfrissende Italiaanse cocktail met Limoncello, mousserende wijn en soda, geserveerd met ijs.",
        de: "Erfrischender italienischer Cocktail mit Limoncello, Schaumwein und Soda, auf Eis serviert.",
        fr: "Cocktail italien rafraîchissant avec Limoncello, vin pétillant et soda, servi avec des glaçons.",
      },
      price: "€8,00",
    },
    {
      name: { en: "Hugo Spritz", it: "Hugo Spritz", nl: "Hugo Spritz", de: "Hugo Spritz", fr: "Hugo Spritz" },
      description: {
        en: "Light and refreshing Italian cocktail with Prosecco, elderflower syrup, soda, and mint leaves, served over ice.",
        it: "Cocktail italiano leggero e rinfrescante con Prosecco, sciroppo di fiori di sambuco, soda e foglie di menta, servito con ghiaccio.",
        nl: "Lichte en verfrissende Italiaanse cocktail met Prosecco, vlierbloesemsiroop, soda en muntblaadjes, geserveerd met ijs.",
        de: "Leichter und erfrischender italienischer Cocktail mit Prosecco, Holunderblütensirup, Soda und Minzblättern, auf Eis serviert.",
        fr: "Cocktail italien léger et rafraîchissant avec Prosecco, sirop de fleurs de sureau, soda et feuilles de menthe, servi avec des glaçons.",
      },
      price: "€8,00",
    },
    {
      name: { en: "Babà Spritz", it: "Babà Spritz", nl: "Babà Spritz", de: "Babà Spritz", fr: "Babà Spritz" },
      description: {
        en: "Italian cocktail inspired by the classic Babà dessert, with sparkling wine and citrus notes, served over ice.",
        it: "Cocktail italiano ispirato al classico dolce Babà, con vino frizzante e note agrumate, servito con ghiaccio.",
        nl: "Italiaanse cocktail geïnspireerd op het klassieke Babà-dessert, met mousserende wijn en citrusnoten, geserveerd met ijs.",
        de: "Italienischer Cocktail inspiriert vom klassischen Babà-Dessert, mit Schaumwein und Zitrusnoten, auf Eis serviert.",
        fr: "Cocktail italien inspiré du dessert classique Babà, avec vin pétillant et notes d'agrumes, servi avec des glaçons.",
      },
      price: "€8,00",
    },
    {
      name: { en: "Passoa Spritz", it: "Passoa Spritz", nl: "Passoa Spritz", de: "Passoa Spritz", fr: "Passoa Spritz" },
      description: {
        en: "Fruity Italian cocktail with Passoa liqueur, sparkling wine, and soda, served over ice.",
        it: "Cocktail italiano fruttato con liquore Passoa, vino frizzante e soda, servito con ghiaccio.",
        nl: "Fruitige Italiaanse cocktail met Passoa-likeur, mousserende wijn en soda, geserveerd met ijs.",
        de: "Fruchtiger italienischer Cocktail mit Passoa-Likör, Schaumwein und Soda, auf Eis serviert.",
        fr: "Cocktail italien fruité avec liqueur Passoa, vin pétillant et soda, servi avec des glaçons.",
      },
      price: "€7,00",
    },
    {
      name: { en: "Americano", it: "Americano", nl: "Americano", de: "Americano", fr: "Americano" },
      description: {
        en: "Classic Italian cocktail with Campari, sweet vermouth, and soda, served over ice with a slice of orange.",
        it: "Classico cocktail italiano con Campari, vermouth rosso e soda, servito con ghiaccio e una fetta d'arancia.",
        nl: "Klassieke Italiaanse cocktail met Campari, zoete vermout en soda, geserveerd met ijs en een schijfje sinaasappel.",
        de: "Klassischer italienischer Cocktail mit Campari, süßem Wermut und Soda, auf Eis mit einer Orangenscheibe serviert.",
        fr: "Cocktail italien classique avec Campari, vermouth doux et soda, servi sur glace avec une tranche d'orange.",
      },
      price: "€6,50",
    },
    {
      name: { en: "Negroni", it: "Negroni", nl: "Negroni", de: "Negroni", fr: "Negroni" },
      description: {
        en: "Iconic Italian cocktail with equal parts gin, Campari, and sweet vermouth, served over ice with an orange twist.",
        it: "Iconico cocktail italiano con parti uguali di gin, Campari e vermouth rosso, servito con ghiaccio e scorza d'arancia.",
        nl: "Iconische Italiaanse cocktail met gelijke delen gin, Campari en zoete vermout, geserveerd met ijs en een sinaasappelschil.",
        de: "Ikonischer italienischer Cocktail aus gleichen Teilen Gin, Campari und süßem Wermut, auf Eis mit Orangenzeste serviert.",
        fr: "Cocktail italien emblématique avec parts égales de gin, Campari et vermouth doux, servi sur glace avec un zeste d'orange.",
      },
      price: "€7,00",
    },
    {
      name: { en: "Negroni with old recipe", it: "Negroni con antica formula", nl: "Negroni met oud recept", de: "Negroni nach altem Rezept", fr: "Negroni à l'ancienne recette" },
      description: {
        en: "Classic Italian cocktail made with gin, Campari, and sweet vermouth according to the original recipe, served over ice with an orange twist.",
        it: "Classico cocktail italiano preparato con gin, Campari e vermouth rosso secondo la ricetta originale, servito con ghiaccio e scorza d'arancia.",
        nl: "Klassieke Italiaanse cocktail gemaakt met gin, Campari en zoete vermout volgens het originele recept, geserveerd met ijs en een sinaasappelschil.",
        de: "Klassischer italienischer Cocktail aus Gin, Campari und süßem Wermut nach dem Originalrezept, auf Eis mit Orangenzeste serviert.",
        fr: "Cocktail italien classique préparé avec gin, Campari et vermouth doux selon la recette originale, servi sur glace avec un zeste d'orange.",
      },
      price: "€10,00",
    },
    {
      name: { en: "Negroni Sbagliato", it: "Negroni Sbagliato", nl: "Negroni Sbagliato", de: "Negroni Sbagliato", fr: "Negroni Sbagliato" },
      description: {
        en: "Italian cocktail variation of the classic Negroni, made with sparkling wine instead of gin, served over ice with an orange twist.",
        it: "Variante italiana del classico Negroni, preparata con vino frizzante al posto del gin, servita con ghiaccio e scorza d'arancia.",
        nl: "Italiaanse variant van de klassieke Negroni, gemaakt met mousserende wijn in plaats van gin, geserveerd met ijs en een sinaasappelschil.",
        de: "Italienische Variante des klassischen Negroni, hergestellt mit Schaumwein statt Gin, auf Eis mit Orangenzeste serviert.",
        fr: "Variation italienne du Negroni classique, réalisée avec du vin pétillant à la place du gin, servie sur glace avec un zeste d'orange.",
      },
      price: "€7,00",
    },
    {
      name: { en: "White Negroni", it: "Negroni Bianco", nl: "Witte Negroni", de: "Weißer Negroni", fr: "Negroni Blanc" },
      description: {
        en: "Italian cocktail variation of the classic Negroni, made with gin, white vermouth, and a bitter liqueur, served over ice with a twist of citrus.",
        it: "Variante italiana del classico Negroni, preparata con gin, vermouth bianco e liquore amaro, servita con ghiaccio e scorza di agrumi.",
        nl: "Italiaanse variant van de klassieke Negroni, gemaakt met gin, witte vermout en een bittere likeur, geserveerd met ijs en een schijfje citrus.",
        de: "Italienische Variante des klassischen Negroni, hergestellt mit Gin, weißem Wermut und bitterem Likör, auf Eis mit Zitrus serviert.",
        fr: "Variation italienne du Negroni classique, réalisée avec gin, vermouth blanc et liqueur amère, servie sur glace avec un zeste d’agrumes.",
      },
      price: "€7,00",
    },
    {
      name: { en: "Glass of Prosecco", it: "Calice Prosecco", nl: "Glas Prosecco", de: "Glas Prosecco", fr: "Verre de Prosecco" },
      description: {
        en: "Classic Italian sparkling wine, served chilled in a wine glass.",
        it: "Classico vino spumante italiano, servito freddo in un calice.",
        nl: "Klassieke Italiaanse mousserende wijn, gekoeld geserveerd in een wijnglas.",
        de: "Klassischer italienischer Schaumwein, gekühlt im Weinglas serviert.",
        fr: "Vin pétillant italien classique, servi frais dans un verre à vin.",
      },
      price: "€3,50",
    },
    {
      name: { en: "Large Bottle of Prosecco", it: "Prosecco bottiglia grande", nl: "Grote fles Prosecco", de: "Große Flasche Prosecco", fr: "Grande bouteille de Prosecco" },
      description: {
        en: "Classic Italian sparkling wine served chilled in a large bottle, ideal for sharing.",
        it: "Classico vino spumante italiano servito freddo in una bottiglia grande, ideale per condividere.",
        nl: "Klassieke Italiaanse mousserende wijn, gekoeld geserveerd in een grote fles, ideaal om te delen.",
        de: "Klassischer italienischer Schaumwein, gekühlt in einer großen Flasche serviert, ideal zum Teilen.",
        fr: "Vin pétillant italien classique, servi frais dans une grande bouteille, idéal à partager.",
      },
      price: "€15,00",
    },
    {
      name: { en: "Ca' del Bosco", it: "Ca' del Bosco", nl: "Ca' del Bosco", de: "Ca' del Bosco", fr: "Ca' del Bosco" },
      description: {
        en: "Premium Italian sparkling wine from Franciacorta, known for its elegant bubbles and refined taste.",
        it: "Vino spumante italiano di alta qualità dalla Franciacorta, noto per le sue bollicine eleganti e il gusto raffinato.",
        nl: "Premium Italiaanse mousserende wijn uit Franciacorta, bekend om zijn elegante bubbels en verfijnde smaak.",
        de: "Premium italienischer Schaumwein aus Franciacorta, bekannt für seine eleganten Perlen und feinen Geschmack.",
        fr: "Vin pétillant italien haut de gamme de Franciacorta, réputé pour ses bulles élégantes et son goût raffiné.",
      },
      price: "€60,00",
    },
    {
      name: { en: "Franciacorta 61 Saten", it: "Franciacorta 61 Saten", nl: "Franciacorta 61 Saten", de: "Franciacorta 61 Saten", fr: "Franciacorta 61 Saten" },
      description: {
        en: "Elegant Italian sparkling wine with fine bubbles and a soft, creamy texture, ideal for celebrations.",
        it: "Elegante vino spumante italiano con bollicine fini e una consistenza morbida e cremosa, ideale per le celebrazioni.",
        nl: "Elegante Italiaanse mousserende wijn met fijne bubbels en een zachte, romige textuur, ideaal voor feestelijke gelegenheden.",
        de: "Eleganter italienischer Schaumwein mit feinen Perlen und weicher, cremiger Textur, ideal für Feierlichkeiten.",
        fr: "Vin pétillant italien élégant avec de fines bulles et une texture douce et crémeuse, idéal pour les célébrations.",
      },
      price: "€60,00",
    },
    {
      name: { en: "Martini White/Red/Dry", it: "Martini Bianco/Rosso/Dry", nl: "Martini Wit/Rood/Dry", de: "Martini Weiß/Rot/Dry", fr: "Martini Blanc/Rouge/Dry" },
      description: {
        en: "Classic Italian vermouth available in white, red, or dry varieties, perfect for sipping or mixing in cocktails.",
        it: "Classico vermouth italiano disponibile nelle varietà bianco, rosso o dry, perfetto da bere liscio o per cocktail.",
        nl: "Klassieke Italiaanse vermout verkrijgbaar in wit, rood of dry, perfect om te drinken of te gebruiken in cocktails.",
        de: "Klassischer italienischer Wermut, erhältlich in Weiß, Rot oder Dry, ideal zum pur trinken oder für Cocktails.",
        fr: "Vermouth italien classique disponible en blanc, rouge ou dry, parfait à boire pur ou en cocktail.",
      },
      price: "€6,00",
    },
    {
      name: { en: "Pernod", it: "Pernod", nl: "Pernod", de: "Pernod", fr: "Pernod" },
      description: {
        en: "French anise-flavored liqueur, typically served as an aperitif or in cocktails, with a distinct licorice aroma.",
        it: "Liquore francese all'anice, solitamente servito come aperitivo o nei cocktail, con un aroma distintivo di liquirizia.",
        nl: "Franse anijslikeur, meestal geserveerd als aperitief of in cocktails, met een kenmerkend dropachtig aroma.",
        de: "Französischer Anislikör, typischerweise als Aperitif oder in Cocktails serviert, mit einem ausgeprägten Lakritz-Aroma.",
        fr: "Liqueur française à l'anis, généralement servie en apéritif ou dans les cocktails, avec un arôme distinct de réglisse.",
      },
      price: "€5,00",
    },
    {
      name: { en: "Glass of Wine", it: "Calice Vino", nl: "Glas Wijn", de: "Weinglas", fr: "Verre de Vin" },
      description: {
        en: "Selection of Italian wines served by the glass, perfect for pairing with meals or enjoying on their own.",
        it: "Selezione di vini italiani serviti al calice, perfetti da abbinare ai pasti o da gustare da soli.",
        nl: "Selectie van Italiaanse wijnen per glas geserveerd, perfect om bij maaltijden te combineren of op zichzelf te drinken.",
        de: "Auswahl italienischer Weine im Glas serviert, ideal zum Kombinieren mit Mahlzeiten oder zum pur genießen.",
        fr: "Sélection de vins italiens servis au verre, parfaits pour accompagner les repas ou à déguster seuls.",
      },
      price: "€6,00",
    },
    {
      name: { en: "Bottle of Red/White/Rosé Wine", it: "Bottiglia Vino Rosso/Bianco/Rosè", nl: "Fles Rode/Witte/Rosé Wijn", de: "Flasche Rot/Weiß/Rosé Wein", fr: "Bouteille de Vin Rouge/Blanc/Rosé" },
      description: {
        en: "Selection of Italian wines available in red, white, or rosé, served in a bottle to share or enjoy over a meal.",
        it: "Selezione di vini italiani disponibili in rosso, bianco o rosè, serviti in bottiglia da condividere o gustare durante il pasto.",
        nl: "Selectie van Italiaanse wijnen verkrijgbaar in rood, wit of rosé, geserveerd in een fles om te delen of bij een maaltijd te drinken.",
        de: "Auswahl italienischer Weine in Rot, Weiß oder Rosé, serviert in einer Flasche zum Teilen oder während des Essens zu genießen.",
        fr: "Sélection de vins italiens disponibles en rouge, blanc ou rosé, servis en bouteille à partager ou à déguster pendant le repas.",
      },
      price: "€20,00",
    },

  ],
  Cocktails: [
    {
      name: { en: "Tropical", it: "Tropical", nl: "Tropical", de: "Tropical", fr: "Tropical" },
      description: {
        en: "Refreshing cocktail with milk, almond syrup, mint syrup, and white rum, served chilled.",
        it: "Cocktail rinfrescante con latte, sciroppo di mandorla, sciroppo di menta e rum bianco, servito freddo.",
        nl: "Verfrissende cocktail met melk, amandelsiroop, munt siroop en witte rum, gekoeld geserveerd.",
        de: "Erfrischender Cocktail mit Milch, Mandelsirup, Minzsirup und weißem Rum, gekühlt serviert.",
        fr: "Cocktail rafraîchissant avec lait, sirop d'amande, sirop de menthe et rhum blanc, servi frais.",
      },
      price: "€6,00",
    },
    {
      name: { en: "Mojito", it: "Mojito", nl: "Mojito", de: "Mojito", fr: "Mojito" },
      description: {
        en: "Classic Cuban cocktail with white rum, sugar, lime, mint leaves, and soda water, served over ice.",
        it: "Classico cocktail cubano con rum bianco, zucchero, lime, foglie di menta e soda, servito con ghiaccio.",
        nl: "Klassieke Cubaanse cocktail met witte rum, suiker, limoen, muntblaadjes en sodawater, geserveerd met ijs.",
        de: "Klassischer kubanischer Cocktail mit weißem Rum, Zucker, Limette, Minzblättern und Sodawasser, auf Eis serviert.",
        fr: "Cocktail cubain classique avec rhum blanc, sucre, citron vert, feuilles de menthe et eau gazeuse, servi sur glace.",
      },
      price: "€8,00",
    },
    {
      name: { en: "Caipirinha", it: "Caipirinha", nl: "Caipirinha", de: "Caipirinha", fr: "Caipirinha" },
      description: {
        en: "Traditional Brazilian cocktail with cachaça, lime, and sugar, served over crushed ice.",
        it: "Tradizionale cocktail brasiliano con cachaça, lime e zucchero, servito con ghiaccio tritato.",
        nl: "Traditionele Braziliaanse cocktail met cachaça, limoen en suiker, geserveerd met crushed ice.",
        de: "Traditioneller brasilianischer Cocktail mit Cachaça, Limette und Zucker, auf Crushed Ice serviert.",
        fr: "Cocktail brésilien traditionnel avec cachaça, citron vert et sucre, servi sur glace pilée.",
      },
      price: "€8,00",
    },
    {
      name: { en: "Moscow Mule", it: "Moscow Mule", nl: "Moscow Mule", de: "Moscow Mule", fr: "Moscow Mule" },
      description: {
        en: "Refreshing cocktail with vodka, ginger beer, and lime, traditionally served in a copper mug.",
        it: "Cocktail rinfrescante con vodka, ginger beer e lime, servito tradizionalmente in una tazza di rame.",
        nl: "Verfrissende cocktail met vodka, gemberbier en limoen, traditioneel geserveerd in een koperen mok.",
        de: "Erfrischender Cocktail mit Wodka, Ginger Beer und Limette, traditionell in einem Kupferbecher serviert.",
        fr: "Cocktail rafraîchissant avec vodka, ginger beer et citron vert, traditionnellement servi dans une tasse en cuivre.",
      },
      price: "€8,00",
    },
    {
      name: { en: "Vodka Tonic", it: "Vodka Tonic", nl: "Vodka Tonic", de: "Vodka Tonic", fr: "Vodka Tonic" },
      description: {
        en: "Simple and classic cocktail with vodka and tonic water, served over ice with a lime wedge.",
        it: "Cocktail semplice e classico con vodka e acqua tonica, servito con ghiaccio e una fetta di lime.",
        nl: "Eenvoudige en klassieke cocktail met vodka en tonic, geserveerd met ijs en een schijfje limoen.",
        de: "Einfacher und klassischer Cocktail mit Wodka und Tonic Water, auf Eis mit einer Limettenscheibe serviert.",
        fr: "Cocktail simple et classique avec vodka et eau tonique, servi sur glace avec une tranche de citron vert.",
      },
      variants: [
        { brand: "Belvedere", price: "€8,00" },
        { brand: "Grey Goose", price: "€8,00" },
        { brand: "Ketel One", price: "€7,50" },
        { brand: "Stolichnaya", price: "€7,00" },
        { brand: "Absolut", price: "€7,00" },
        { brand: "Smirnoff", price: "€7,00" },
      ],
    },
    {
      name: { en: "Vodka Redbull", it: "Vodka Redbull", nl: "Vodka Redbull", de: "Vodka Redbull", fr: "Vodka Redbull" },
      description: {
        en: "Energetic cocktail combining vodka and Red Bull energy drink, served over ice.",
        it: "Cocktail energizzante che combina vodka e Red Bull, servito con ghiaccio.",
        nl: "Energiek drankje dat vodka en Red Bull combineert, geserveerd met ijs.",
        de: "Energetischer Cocktail mit Wodka und Red Bull Energy Drink, auf Eis serviert.",
        fr: "Cocktail énergisant combinant vodka et Red Bull, servi sur glace.",
      },
      variants: [
        { brand: "Belvedere", price: "€8,00" },
        { brand: "Grey Goose", price: "€8,00" },
        { brand: "Ketel One", price: "€7,50" },
        { brand: "Stolichnaya", price: "€7,00" },
        { brand: "Absolut", price: "€7,00" },
        { brand: "Smirnoff", price: "€7,00" },
      ],
    },
    {
      name: { en: "Vodka Orange", it: "Vodka Orange", nl: "Vodka Orange", de: "Vodka Orange", fr: "Vodka Orange" },
      description: {
        en: "Refreshing cocktail with vodka and orange juice, served over ice.",
        it: "Cocktail rinfrescante con vodka e succo d'arancia, servito con ghiaccio.",
        nl: "Verfrissende cocktail met vodka en sinaasappelsap, geserveerd met ijs.",
        de: "Erfrischender Cocktail mit Wodka und Orangensaft, auf Eis serviert.",
        fr: "Cocktail rafraîchissant avec vodka et jus d'orange, servi sur glace.",
      },
      variants: [
        { brand: "Belvedere", price: "€8,00" },
        { brand: "Grey Goose", price: "€8,00" },
        { brand: "Ketel One", price: "€7,50" },
        { brand: "Stolichnaya", price: "€7,00" },
        { brand: "Absolut", price: "€7,00" },
        { brand: "Smirnoff", price: "€7,00" },
      ],
    },
    {
      name: { en: "Vodka Lemon", it: "Vodka Lemon", nl: "Vodka Lemon", de: "Vodka Lemon", fr: "Vodka Lemon" },
      description: {
        en: "Simple cocktail with vodka and lemon soda, served over ice for a refreshing taste.",
        it: "Cocktail semplice con vodka e soda al limone, servito con ghiaccio per un gusto rinfrescante.",
        nl: "Eenvoudige cocktail met vodka en citroenlimonade, geserveerd met ijs voor een verfrissende smaak.",
        de: "Einfacher Cocktail mit Wodka und Zitronenlimonade, auf Eis serviert für einen erfrischenden Geschmack.",
        fr: "Cocktail simple avec vodka et soda citron, servi sur glace pour un goût rafraîchissant.",
      },
      variants: [
        { brand: "Belvedere", price: "€8,00" },
        { brand: "Grey Goose", price: "€8,00" },
        { brand: "Ketel One", price: "€7,50" },
        { brand: "Stolichnaya", price: "€7,00" },
        { brand: "Absolut", price: "€7,00" },
        { brand: "Smirnoff", price: "€7,00" },
      ],
    },
    {
      name: { en: "Gin Lemon", it: "Gin Lemon", nl: "Gin Lemon", de: "Gin Lemon", fr: "Gin Lemon" },
      description: {
        en: "Refreshing cocktail with gin and lemon soda, served over ice for a zesty taste.",
        it: "Cocktail rinfrescante con gin e soda al limone, servito con ghiaccio per un gusto frizzante.",
        nl: "Verfrissende cocktail met gin en citroenlimonade, geserveerd met ijs voor een pittige smaak.",
        de: "Erfrischender Cocktail mit Gin und Zitronenlimonade, auf Eis serviert für einen spritzigen Geschmack.",
        fr: "Cocktail rafraîchissant avec gin et soda citron, servi sur glace pour un goût acidulé.",
      },
      variants: [
        { brand: "Hendrick's", price: "€8,00" },
        { brand: "Mare", price: "€8,00" },
        { brand: "Bombay", price: "€7,00" },
        { brand: "Tanqueray", price: "€7,00" },
        { brand: "Beefeater", price: "€7,00" },
        { brand: "Tanqueray 0.0", price: "€6,50" },
        { brand: "Gordon's", price: "€6,00" }
      ],
    },
    {
      name: { en: "Gordon's Tonic", it: "Gordon's Tonic", nl: "Gordon's Tonic", de: "Gordon's Tonic", fr: "Gordon's Tonic" },
      description: {
        en: "Classic gin and tonic cocktail made with Gordon's gin and tonic water, served over ice with a slice of lime.",
        it: "Classico cocktail gin tonic con gin Gordon's e acqua tonica, servito con ghiaccio e una fetta di lime.",
        nl: "Klassieke gin-tonic cocktail met Gordon's gin en tonic, geserveerd met ijs en een schijfje limoen.",
        de: "Klassischer Gin-Tonic-Cocktail mit Gordon's Gin und Tonic Water, auf Eis serviert mit einer Limettenscheibe.",
        fr: "Cocktail gin tonic classique avec Gordon's gin et eau tonique, servi sur glace avec une tranche de citron vert.",
      },
      price: "€6,00",
    },
    {
      name: { en: "Gordon's Pink", it: "Gordon's Pink", nl: "Gordon's Pink", de: "Gordon's Pink", fr: "Gordon's Pink" },
      description: {
        en: "Refreshing gin cocktail made with Gordon's Pink gin, served with tonic water and ice, with subtle fruity notes.",
        it: "Cocktail rinfrescante con gin Gordon's Pink, servito con acqua tonica e ghiaccio, con delicati sentori fruttati.",
        nl: "Verfrissende gin-cocktail met Gordon's Pink gin, geserveerd met tonic en ijs, met subtiele fruitige tonen.",
        de: "Erfrischender Gin-Cocktail mit Gordon's Pink Gin, serviert mit Tonic Water und Eis, mit dezenten fruchtigen Noten.",
        fr: "Cocktail gin rafraîchissant avec Gordon's Pink gin, servi avec de l'eau tonique et des glaçons, aux notes fruitées subtiles.",
      },
      price: "€6,00",
    },
    {
      name: { en: "Beefeater Tonic", it: "Beefeater Tonic", nl: "Beefeater Tonic", de: "Beefeater Tonic", fr: "Beefeater Tonic" },
      description: {
        en: "Classic gin and tonic cocktail made with Beefeater gin and tonic water, served over ice with a slice of lime.",
        it: "Classico cocktail gin tonic con gin Beefeater e acqua tonica, servito con ghiaccio e una fetta di lime.",
        nl: "Klassieke gin-tonic cocktail met Beefeater gin en tonic, geserveerd met ijs en een schijfje limoen.",
        de: "Klassischer Gin-Tonic-Cocktail mit Beefeater Gin und Tonic Water, auf Eis serviert mit einer Limettenscheibe.",
        fr: "Cocktail gin tonic classique avec Beefeater gin et eau tonique, servi sur glace avec une tranche de citron vert.",
      },
      price: "€7,00",
    },
    {
      name: { en: "Tanqueray Tonic", it: "Tanqueray Tonic", nl: "Tanqueray Tonic", de: "Tanqueray Tonic", fr: "Tanqueray Tonic" },
      description: {
        en: "Refreshing gin and tonic cocktail made with Tanqueray gin and tonic water, served over ice with lime.",
        it: "Cocktail rinfrescante gin tonic con gin Tanqueray e acqua tonica, servito con ghiaccio e lime.",
        nl: "Verfrissende gin-tonic cocktail met Tanqueray gin en tonic, geserveerd met ijs en limoen.",
        de: "Erfrischender Gin-Tonic-Cocktail mit Tanqueray Gin und Tonic Water, auf Eis serviert mit Limette.",
        fr: "Cocktail gin tonic rafraîchissant avec Tanqueray gin et eau tonique, servi sur glace avec du citron vert.",
      },
      price: "€7,00",
    },
    {
      name: { en: "Tanqueray 0.0", it: "Tanqueray 0.0", nl: "Tanqueray 0.0", de: "Tanqueray 0.0", fr: "Tanqueray 0.0" },
      description: {
        en: "Non-alcoholic gin alternative, with the classic Tanqueray botanicals flavor, served with tonic and ice.",
        it: "Alternativa analcolica al gin, con il classico sapore botanico Tanqueray, servito con tonica e ghiaccio.",
        nl: "Alcoholvrije gin-alternatief met de klassieke Tanqueray kruiden smaak, geserveerd met tonic en ijs.",
        de: "Alkoholfreie Gin-Alternative mit klassischem Tanqueray Botanicals-Geschmack, serviert mit Tonic und Eis.",
        fr: "Alternative gin sans alcool, avec la saveur botanique classique de Tanqueray, servi avec tonic et glace.",
      },
      price: "€6,50",
    },
    {
      name: { en: "Bombay Tonic", it: "Bombay Tonic", nl: "Bombay Tonic", de: "Bombay Tonic", fr: "Bombay Tonic" },
      description: {
        en: "Classic gin and tonic cocktail made with Bombay gin and tonic water, served over ice with a slice of lime.",
        it: "Classico cocktail gin tonic con gin Bombay e acqua tonica, servito con ghiaccio e una fetta di lime.",
        nl: "Klassieke gin-tonic cocktail met Bombay gin en tonic, geserveerd met ijs en een schijfje limoen.",
        de: "Klassischer Gin-Tonic-Cocktail mit Bombay Gin und Tonic Water, auf Eis serviert mit einer Limettenscheibe.",
        fr: "Cocktail gin tonic classique avec Bombay gin et eau tonique, servi sur glace avec une tranche de citron vert.",
      },
      price: "€7,00",
    },
    {
      name: { en: "Hendrick's Tonic", it: "Hendrick's Tonic", nl: "Hendrick's Tonic", de: "Hendrick's Tonic", fr: "Hendrick's Tonic" },
      description: {
        en: "Refreshing gin and tonic cocktail made with Hendrick's gin, served over ice with cucumber and lime.",
        it: "Cocktail rinfrescante gin tonic con gin Hendrick's, servito con ghiaccio, cetriolo e lime.",
        nl: "Verfrissende gin-tonic cocktail met Hendrick's gin, geserveerd met ijs, komkommer en limoen.",
        de: "Erfrischender Gin-Tonic-Cocktail mit Hendrick's Gin, auf Eis serviert mit Gurke und Limette.",
        fr: "Cocktail gin tonic rafraîchissant avec Hendrick's gin, servi sur glace avec concombre et citron vert.",
      },
      price: "€8,00",
    },
    {
      name: { en: "Gin Mare Tonic", it: "Gin Mare Tonic", nl: "Gin Mare Tonic", de: "Gin Mare Tonic", fr: "Gin Mare Tonic" },
      description: {
        en: "Mediterranean gin cocktail with Gin Mare and tonic water, served over ice with a hint of herbs.",
        it: "Cocktail mediterraneo con Gin Mare e acqua tonica, servito con ghiaccio e un tocco di erbe aromatiche.",
        nl: "Mediterraanse gin-cocktail met Gin Mare en tonic, geserveerd met ijs en een vleugje kruiden.",
        de: "Mediterraner Gin-Cocktail mit Gin Mare und Tonic Water, auf Eis serviert mit einem Hauch von Kräutern.",
        fr: "Cocktail méditerranéen avec Gin Mare et eau tonique, servi sur glace avec une touche d'herbes.",
      },
      price: "€8,00",
    },
    {
      name: { en: "Rum and Cola", it: "Rum e Cola", nl: "Rum en Cola", de: "Rum und Cola", fr: "Rhum et Cola" },
      description: {
        en: "Classic cocktail made with rum and cola, served over ice for a sweet and refreshing taste.",
        it: "Classico cocktail con rum e cola, servito con ghiaccio per un gusto dolce e rinfrescante.",
        nl: "Klassieke cocktail met rum en cola, geserveerd met ijs voor een zoete en verfrissende smaak.",
        de: "Klassischer Cocktail aus Rum und Cola, auf Eis serviert für einen süßen und erfrischenden Geschmack.",
        fr: "Cocktail classique avec rhum et cola, servi sur glace pour un goût doux et rafraîchissant.",
      },
      price: "€7,00",
    },
    {
      name: { en: "Jack and Cola", it: "Jack e Cola", nl: "Jack en Cola", de: "Jack und Cola", fr: "Jack et Cola" },
      description: {
        en: "Cocktail made with Jack Daniel's whiskey and cola, served over ice for a smooth and sweet taste.",
        it: "Cocktail con whiskey Jack Daniel's e cola, servito con ghiaccio per un gusto morbido e dolce.",
        nl: "Cocktail met Jack Daniel's whiskey en cola, geserveerd met ijs voor een zachte en zoete smaak.",
        de: "Cocktail aus Jack Daniel's Whiskey und Cola, auf Eis serviert für einen sanften und süßen Geschmack.",
        fr: "Cocktail avec whisky Jack Daniel's et cola, servi sur glace pour un goût doux et sucré.",
      },
      price: "€7,00",
    },
    {
      name: { en: "Cosmopolitan", it: "Cosmopolitan", nl: "Cosmopolitan", de: "Cosmopolitan", fr: "Cosmopolitan" },
      description: {
        en: "Classic cocktail made with vodka, triple sec, cranberry juice, and lime juice, served chilled in a cocktail glass.",
        it: "Classico cocktail con vodka, triple sec, succo di mirtillo e succo di lime, servito freddo in bicchiere da cocktail.",
        nl: "Klassieke cocktail met vodka, triple sec, cranberrysap en limoensap, gekoeld geserveerd in een cocktailglas.",
        de: "Klassischer Cocktail aus Wodka, Triple Sec, Cranberrysaft und Limettensaft, gekühlt im Cocktailglas serviert.",
        fr: "Cocktail classique avec vodka, triple sec, jus de canneberge et jus de citron vert, servi frais dans un verre à cocktail.",
      },
      price: "€8,00",
    },
    {
      name: { en: "Margarita", it: "Margarita", nl: "Margarita", de: "Margarita", fr: "Margarita" },
      description: {
        en: "Classic cocktail made with tequila, triple sec, and lime juice, served with a salted rim.",
        it: "Classico cocktail con tequila, triple sec e succo di lime, servito con bordo salato.",
        nl: "Klassieke cocktail met tequila, triple sec en limoensap, geserveerd met een gezouten rand.",
        de: "Klassischer Cocktail aus Tequila, Triple Sec und Limettensaft, serviert mit gesalzenem Rand.",
        fr: "Cocktail classique avec tequila, triple sec et jus de citron vert, servi avec un bord salé.",
      },
      price: "€8,00",
    },
    {
      name: { en: "Blue Angel", it: "Angelo Azzurro", nl: "Blauwe Engel", de: "Blauer Engel", fr: "Ange Bleu" },
      description: {
        en: "Cocktail made with blue curaçao, vodka, and lemon juice, served over ice.",
        it: "Cocktail con curaçao blu, vodka e succo di limone, servito con ghiaccio.",
        nl: "Cocktail met blauwe curaçao, vodka en citroensap, geserveerd met ijs.",
        de: "Cocktail aus Blue Curaçao, Wodka und Zitronensaft, auf Eis serviert.",
        fr: "Cocktail avec curaçao bleu, vodka et jus de citron, servi sur glace.",
      },
      price: "€7,00",
    },
    {
      name: { en: "Long Island Ice Tea", it: "Long Island Ice Tea", nl: "Long Island Ice Tea", de: "Long Island Ice Tea", fr: "Long Island Ice Tea" },
      description: {
        en: "Strong cocktail made with vodka, tequila, rum, gin, triple sec, lemon juice, and cola, served over ice.",
        it: "Cocktail forte con vodka, tequila, rum, gin, triple sec, succo di limone e cola, servito con ghiaccio.",
        nl: "Sterke cocktail met vodka, tequila, rum, gin, triple sec, citroensap en cola, geserveerd met ijs.",
        de: "Starker Cocktail aus Wodka, Tequila, Rum, Gin, Triple Sec, Zitronensaft und Cola, auf Eis serviert.",
        fr: "Cocktail fort avec vodka, tequila, rhum, gin, triple sec, jus de citron et cola, servi sur glace.",
      },
      price: "€8,00",
    },
    {
      name: { en: "Japan Ice Tea", it: "Japan Ice Tea", nl: "Japan Ice Tea", de: "Japan Ice Tea", fr: "Japan Ice Tea" },
      description: {
        en: "Cocktail similar to Long Island Ice Tea but made with sake instead of some spirits, served over ice.",
        it: "Cocktail simile al Long Island Ice Tea ma preparato con sake al posto di alcuni distillati, servito con ghiaccio.",
        nl: "Cocktail vergelijkbaar met Long Island Ice Tea, maar gemaakt met sake in plaats van sommige sterke dranken, geserveerd met ijs.",
        de: "Cocktail ähnlich wie Long Island Ice Tea, jedoch mit Sake anstelle einiger Spirituosen, auf Eis serviert.",
        fr: "Cocktail similaire au Long Island Ice Tea mais préparé avec du saké à la place de certains spiritueux, servi sur glace.",
      },
      price: "€8,00",
    },
    {
      name: { en: "Black Russian", it: "Black Russian", nl: "Black Russian", de: "Black Russian", fr: "Black Russian" },
      description: {
        en: "Cocktail made with vodka and coffee liqueur, served over ice.",
        it: "Cocktail con vodka e liquore al caffè, servito con ghiaccio.",
        nl: "Cocktail met vodka en koffielikeur, geserveerd met ijs.",
        de: "Cocktail aus Wodka und Kaffeelikör, auf Eis serviert.",
        fr: "Cocktail avec vodka et liqueur de café, servi sur glace.",
      },
      price: "€8,00",
    },
    {
      name: { en: "Piña Colada", it: "Piña Colada", nl: "Piña Colada", de: "Piña Colada", fr: "Piña Colada" },
      description: {
        en: "Sweet tropical cocktail made with rum, coconut cream, and pineapple juice, served blended or shaken with ice.",
        it: "Dolce cocktail tropicale con rum, crema di cocco e succo d'ananas, servito frullato o shakerato con ghiaccio.",
        nl: "Zoete tropische cocktail met rum, kokosroom en ananassap, geserveerd geblend of geschud met ijs.",
        de: "Süßer tropischer Cocktail aus Rum, Kokoscreme und Ananassaft, gemixt oder geschüttelt mit Eis serviert.",
        fr: "Cocktail tropical sucré avec rhum, crème de coco et jus d'ananas, servi mixé ou secoué avec de la glace.",
      },
      price: "€8,00",
    },
    {
      name: { en: "Disaronno Sour", it: "Disaronno Sour", nl: "Disaronno Sour", de: "Disaronno Sour", fr: "Disaronno Sour" },
      description: {
        en: "Cocktail made with Disaronno amaretto, lemon juice, and a touch of sugar syrup, served over ice.",
        it: "Cocktail con amaretto Disaronno, succo di limone e un tocco di sciroppo di zucchero, servito con ghiaccio.",
        nl: "Cocktail met Disaronno amaretto, citroensap en een beetje suikersiroop, geserveerd met ijs.",
        de: "Cocktail aus Disaronno Amaretto, Zitronensaft und etwas Zuckersirup, auf Eis serviert.",
        fr: "Cocktail avec amaretto Disaronno, jus de citron et un peu de sirop de sucre, servi sur glace.",
      },
      price: "€8,00",
    },
    {
      name: { en: "Tequila Sunrise", it: "Tequila Sunrise", nl: "Tequila Sunrise", de: "Tequila Sunrise", fr: "Tequila Sunrise" },
      description: {
        en: "Cocktail made with tequila, orange juice, and grenadine, served over ice for a layered sunrise effect.",
        it: "Cocktail con tequila, succo d'arancia e granatina, servito con ghiaccio per un effetto stratificato a sunrise.",
        nl: "Cocktail met tequila, sinaasappelsap en grenadine, geserveerd met ijs voor een gelaagd zonsopgang-effect.",
        de: "Cocktail aus Tequila, Orangensaft und Grenadine, auf Eis serviert für einen geschichteten Sonnenaufgangseffekt.",
        fr: "Cocktail avec tequila, jus d'orange et grenadine, servi sur glace pour un effet coucher de soleil en couches.",
      },
      price: "€8,00",
    },
    {
      name: { en: "Bloody Mary", it: "Bloody Mary", nl: "Bloody Mary", de: "Bloody Mary", fr: "Bloody Mary" },
      description: {
        en: "Classic cocktail made with vodka, tomato juice, lemon juice, Worcestershire sauce, hot sauce, and spices, served over ice.",
        it: "Classico cocktail con vodka, succo di pomodoro, succo di limone, salsa Worcestershire, salsa piccante e spezie, servito con ghiaccio.",
        nl: "Klassieke cocktail met vodka, tomatensap, citroensap, Worcestershire-saus, hete saus en kruiden, geserveerd met ijs.",
        de: "Klassischer Cocktail aus Wodka, Tomatensaft, Zitronensaft, Worcestershiresauce, scharfer Sauce und Gewürzen, auf Eis serviert.",
        fr: "Cocktail classique avec vodka, jus de tomate, jus de citron, sauce Worcestershire, sauce piquante et épices, servi sur glace.",
      },
      price: "€8,00",
    },
    {
      name: { en: "Basil Smash", it: "Basil Smash", nl: "Basil Smash", de: "Basil Smash", fr: "Basil Smash" },
      description: {
        en: "Refreshing cocktail made with gin, fresh basil leaves, lemon juice, and sugar syrup, served over ice.",
        it: "Cocktail rinfrescante con gin, foglie di basilico fresco, succo di limone e sciroppo di zucchero, servito con ghiaccio.",
        nl: "Verfrissende cocktail met gin, verse basilicumblaadjes, citroensap en suikersiroop, geserveerd met ijs.",
        de: "Erfrischender Cocktail aus Gin, frischen Basilikumblättern, Zitronensaft und Zuckersirup, auf Eis serviert.",
        fr: "Cocktail rafraîchissant avec gin, feuilles de basilic frais, jus de citron et sirop de sucre, servi sur glace.",
      },
      price: "€8,00",
    },
    {
      name: { en: "Perfect 10", it: "Perfect 10", nl: "Perfect 10", de: "Perfect 10", fr: "Perfect 10" },
      description: {
        en: "Cocktail made with gin, triple sec, lime juice, and a touch of simple syrup, served over ice.",
        it: "Cocktail con gin, triple sec, succo di lime e un tocco di sciroppo semplice, servito con ghiaccio.",
        nl: "Cocktail met gin, triple sec, limoensap en een beetje suikersiroop, geserveerd met ijs.",
        de: "Cocktail aus Gin, Triple Sec, Limettensaft und einem Hauch Zuckersirup, auf Eis serviert.",
        fr: "Cocktail avec gin, triple sec, jus de citron vert et un peu de sirop simple, servi sur glace.",
      },
      price: "€8,00",
    },
    {
      name: { en: "Johnnie & Ginger", it: "Johnnie & Ginger", nl: "Johnnie & Ginger", de: "Johnnie & Ginger", fr: "Johnnie & Ginger" },
      description: {
        en: "Simple cocktail made with Johnnie Walker whisky and ginger ale, served over ice.",
        it: "Cocktail semplice con whisky Johnnie Walker e ginger ale, servito con ghiaccio.",
        nl: "Eenvoudige cocktail met Johnnie Walker whisky en ginger ale, geserveerd met ijs.",
        de: "Einfacher Cocktail aus Johnnie Walker Whisky und Ginger Ale, auf Eis serviert.",
        fr: "Cocktail simple avec whisky Johnnie Walker et ginger ale, servi sur glace.",
      },
      price: "€8,00",
    },
    {
      name: { en: "Johnnie & Lemon", it: "Johnnie & Lemon", nl: "Johnnie & Lemon", de: "Johnnie & Lemon", fr: "Johnnie & Lemon" },
      description: {
        en: "Refreshing cocktail made with Johnnie Walker whisky and lemon soda, served over ice.",
        it: "Cocktail rinfrescante con whisky Johnnie Walker e soda al limone, servito con ghiaccio.",
        nl: "Verfrissende cocktail met Johnnie Walker whisky en citroensoda, geserveerd met ijs.",
        de: "Erfrischender Cocktail aus Johnnie Walker Whisky und Zitronenlimonade, auf Eis serviert.",
        fr: "Cocktail rafraîchissant avec whisky Johnnie Walker et soda citron, servi sur glace.",
      },
      price: "€8,00",
    },
    {
      name: { en: "Casamigos Paloma", it: "Casamigos Paloma", nl: "Casamigos Paloma", de: "Casamigos Paloma", fr: "Casamigos Paloma" },
      description: {
        en: "Cocktail made with Casamigos tequila, grapefruit soda, and lime juice, served over ice.",
        it: "Cocktail con tequila Casamigos, soda al pompelmo e succo di lime, servito con ghiaccio.",
        nl: "Cocktail met Casamigos tequila, grapefruitsoda en limoensap, geserveerd met ijs.",
        de: "Cocktail aus Casamigos Tequila, Grapefruitsoda und Limettensaft, auf Eis serviert.",
        fr: "Cocktail avec tequila Casamigos, soda pamplemousse et jus de citron vert, servi sur glace.",
      },
      price: "€8,00",
    },
    {
      name: { en: "Old Fashioned", it: "Old Fashioned", nl: "Old Fashioned", de: "Old Fashioned", fr: "Old Fashioned" },
      description: {
        en: "Classic cocktail made with bourbon or rye whiskey, sugar, bitters, and a twist of citrus peel, served over ice.",
        it: "Classico cocktail con bourbon o whiskey di segale, zucchero, bitter e scorza di agrumi, servito con ghiaccio.",
        nl: "Klassieke cocktail met bourbon of roggewhisky, suiker, bitters en een schil van citrus, geserveerd met ijs.",
        de: "Klassischer Cocktail aus Bourbon- oder Roggenwhiskey, Zucker, Bitter und einer Zitronen- oder Orangenschale, auf Eis serviert.",
        fr: "Cocktail classique avec bourbon ou whisky de seigle, sucre, bitters et un zeste d'agrumes, servi sur glace.",
      },
      price: "€8,00",
    },
    {
      name: { en: "Shot", it: "Shot", nl: "Shot", de: "Shot", fr: "Shot" },
      description: {
        en: "Small serving of liquor, usually consumed in one gulp.",
        it: "Piccola porzione di liquore, solitamente bevuta in un sorso.",
        nl: "Kleine portie likeur, meestal in één keer gedronken.",
        de: "Kleine Portion Likör, normalerweise in einem Zug getrunken.",
        fr: "Petite portion de liqueur, généralement bue d'un seul trait.",
      },
      price: "€3,00",
    },

  ],
  Vodka: [
    {
      name: { en: "Smirnoff", it: "Smirnoff", nl: "Smirnoff", de: "Smirnoff", fr: "Smirnoff" },
      description: {
        en: "Popular vodka brand, distilled from grains, smooth taste, 37.5% ABV.",
        it: "Marca di vodka molto popolare, distillata dai cereali, gusto morbido, 37,5% vol.",
        nl: "Populair vodkamerk, gedistilleerd uit granen, zachte smaak, 37,5% alcohol.",
        de: "Beliebte Wodka-Marke, aus Getreide destilliert, milder Geschmack, 37,5% Vol.",
        fr: "Marque de vodka populaire, distillée à partir de céréales, goût doux, 37,5% vol.",
      },
      price: "€5,00",
    },
    {
      name: { en: "Absolut", it: "Absolut", nl: "Absolut", de: "Absolut", fr: "Absolut" },
      description: {
        en: "Swedish vodka distilled from winter wheat, smooth and neutral flavor, 40% ABV.",
        it: "Vodka svedese distillata dal grano invernale, gusto morbido e neutro, 40% vol.",
        nl: "Zweedse vodka gedistilleerd van wintertarwe, zachte en neutrale smaak, 40% alcohol.",
        de: "Schwedischer Wodka, destilliert aus Winterweizen, sanfter und neutraler Geschmack, 40% Vol.",
        fr: "Vodka suédoise distillée à partir de blé d'hiver, goût doux et neutre, 40% vol.",
      },
      price: "€5,00",
    },
    {
      name: { en: "Stolichnaya", it: "Stolichnaya", nl: "Stolichnaya", de: "Stolichnaya", fr: "Stolichnaya" },
      description: {
        en: "Russian vodka made from wheat and rye, smooth taste with hints of grain, 40% ABV.",
        it: "Vodka russa prodotta da grano e segale, gusto morbido con note di cereali, 40% vol.",
        nl: "Russische vodka gemaakt van tarwe en rogge, zachte smaak met hints van granen, 40% alcohol.",
        de: "Russischer Wodka aus Weizen und Roggen, milder Geschmack mit Getreidenoten, 40% Vol.",
        fr: "Vodka russe faite à partir de blé et de seigle, goût doux avec des notes de céréales, 40% vol.",
      },
      price: "€5,00",
    },
    {
      name: { en: "Ketel One", it: "Ketel One", nl: "Ketel One", de: "Ketel One", fr: "Ketel One" },
      description: {
        en: "Premium Dutch vodka distilled from wheat, known for its crisp and smooth flavor, 40% ABV.",
        it: "Vodka olandese premium distillata dal grano, nota per il gusto fresco e morbido, 40% vol.",
        nl: "Premium Nederlandse vodka gedistilleerd uit tarwe, bekend om zijn frisse en zachte smaak, 40% alcohol.",
        de: "Premium niederländischer Wodka, destilliert aus Weizen, bekannt für seinen klaren und sanften Geschmack, 40% Vol.",
        fr: "Vodka néerlandaise premium distillée à partir de blé, connue pour sa saveur nette et douce, 40% vol.",
      },
      price: "€6,50",
    },
    {
      name: { en: "Belvedere", it: "Belvedere", nl: "Belvedere", de: "Belvedere", fr: "Belvedere" },
      description: {
        en: "Polish premium vodka made from rye, smooth and creamy taste, 40% ABV.",
        it: "Vodka premium polacca prodotta dalla segale, gusto morbido e cremoso, 40% vol.",
        nl: "Poolse premium vodka gemaakt van rogge, zachte en romige smaak, 40% alcohol.",
        de: "Polnischer Premium-Wodka aus Roggen, sanfter und cremiger Geschmack, 40% Vol.",
        fr: "Vodka polonaise premium fabriquée à partir de seigle, goût doux et crémeux, 40% vol.",
      },
      price: "€7,00",
    },
    {
      name: { en: "Grey Goose", it: "Grey Goose", nl: "Grey Goose", de: "Grey Goose", fr: "Grey Goose" },
      description: {
        en: "French premium vodka distilled from soft winter wheat, renowned for its smooth and refined flavor, 40% ABV.",
        it: "Vodka premium francese distillata dal grano invernale tenero, nota per il gusto morbido e raffinato, 40% vol.",
        nl: "Franse premium vodka gedistilleerd uit zachte wintertarwe, bekend om zijn zachte en verfijnde smaak, 40% alcohol.",
        de: "Französischer Premium-Wodka, destilliert aus weichem Winterweizen, bekannt für seinen sanften und raffinierten Geschmack, 40% Vol.",
        fr: "Vodka premium française distillée à partir de blé tendre d'hiver, réputée pour sa saveur douce et raffinée, 40% vol.",
      },
      price: "€7,00",
    },

  ],
  Liquors: [
    {
      name: { en: "Zacapa", it: "Zacapa", nl: "Zacapa", de: "Zacapa", fr: "Zacapa" },
      description: {
        en: "Premium Guatemalan rum aged in a solera system, rich and complex flavor with notes of caramel and vanilla, 40% ABV.",
        it: "Rum premium guatemalteco invecchiato con il metodo solera, gusto ricco e complesso con note di caramello e vaniglia, 40% vol.",
        nl: "Premium Guatemalteekse rum gerijpt in een solera-systeem, rijke en complexe smaak met tonen van karamel en vanille, 40% alcohol.",
        de: "Premium-Guatemaltekischer Rum, gereift im Solera-System, reichhaltiger und komplexer Geschmack mit Noten von Karamell und Vanille, 40% Vol.",
        fr: "Rhum premium guatémaltèque vieilli selon le système solera, saveur riche et complexe avec des notes de caramel et de vanille, 40% vol.",
      },
      price: "€9,50",
    },
    {
      name: { en: "Diplomatico", it: "Diplomatico", nl: "Diplomatico", de: "Diplomatico", fr: "Diplomatico" },
      description: {
        en: "Premium Venezuelan rum, aged in oak barrels, smooth and sweet with hints of vanilla, toffee, and dried fruit, 40% ABV.",
        it: "Rum premium venezuelano, invecchiato in botti di quercia, morbido e dolce con note di vaniglia, toffee e frutta secca, 40% vol.",
        nl: "Premium Venezolaanse rum, gerijpt in eikenhouten vaten, zacht en zoet met tonen van vanille, toffee en gedroogd fruit, 40% alcohol.",
        de: "Premium-venezolanischer Rum, in Eichenfässern gereift, weich und süß mit Noten von Vanille, Toffee und Trockenfrüchten, 40% Vol.",
        fr: "Rhum premium vénézuélien, vieilli en fûts de chêne, doux et sucré avec des notes de vanille, caramel et fruits secs, 40% vol.",
      },
      price: "€7,50",
    },
    {
      name: { en: "Havana", it: "Havana", nl: "Havana", de: "Havana", fr: "Havana" },
      description: {
        en: "Premium Cuban rum, smooth and aromatic with notes of vanilla, caramel, and tropical fruits, 40% ABV.",
        it: "Rum premium cubano, morbido e aromatico con note di vaniglia, caramello e frutti tropicali, 40% vol.",
        nl: "Premium Cubaanse rum, zacht en aromatisch met tonen van vanille, karamel en tropisch fruit, 40% alcohol.",
        de: "Premium kubanischer Rum, sanft und aromatisch mit Noten von Vanille, Karamell und tropischen Früchten, 40% Vol.",
        fr: "Rhum premium cubain, doux et aromatique avec des notes de vanille, caramel et fruits tropicaux, 40% vol.",
      },
      price: "€5,00",
    },
    {
      name: { en: "Johnnie Walker Red Label", it: "Johnnie Walker Red Label", nl: "Johnnie Walker Red Label", de: "Johnnie Walker Red Label", fr: "Johnnie Walker Red Label" },
      description: {
        en: "Blended Scotch whisky, bold and vibrant with hints of spice, vanilla, and smoke, 40% ABV.",
        it: "Whisky scozzese blended, deciso e vivace con note di spezie, vaniglia e fumo, 40% vol.",
        nl: "Blended Schotse whisky, krachtig en levendig met hints van specerijen, vanille en rook, 40% alcohol.",
        de: "Blended Scotch Whisky, kräftig und lebendig mit Noten von Gewürzen, Vanille und Rauch, 40% Vol.",
        fr: "Whisky écossais blendé, audacieux et vibrant avec des notes d'épices, vanille et fumée, 40% vol.",
      },
      price: "€6,00",
    },
    {
      name: { en: "Johnnie Walker Black Label", it: "Johnnie Walker Black Label", nl: "Johnnie Walker Black Label", de: "Johnnie Walker Black Label", fr: "Johnnie Walker Black Label" },
      description: {
        en: "Blended Scotch whisky aged 12 years, rich and complex with notes of vanilla, dried fruits, and subtle smoke, 40% ABV.",
        it: "Whisky scozzese blended invecchiato 12 anni, ricco e complesso con note di vaniglia, frutta secca e leggero fumo, 40% vol.",
        nl: "Blended Schotse whisky 12 jaar gerijpt, rijk en complex met tonen van vanille, gedroogd fruit en subtiele rook, 40% alcohol.",
        de: "Blended Scotch Whisky, 12 Jahre gereift, reichhaltig und komplex mit Noten von Vanille, Trockenfrüchten und dezentem Rauch, 40% Vol.",
        fr: "Whisky écossais blendé vieilli 12 ans, riche et complexe avec des notes de vanille, fruits secs et fumée subtile, 40% vol.",
      },
      price: "€7,00",
    },
    {
      name: { en: "Ballantine's", it: "Ballantine's", nl: "Ballantine's", de: "Ballantine's", fr: "Ballantine's" },
      description: {
        en: "Blended Scotch whisky, smooth and balanced with notes of honey, vanilla, and light smoke, 40% ABV.",
        it: "Whisky scozzese blended, morbido ed equilibrato con note di miele, vaniglia e leggero fumo, 40% vol.",
        nl: "Blended Schotse whisky, soepel en gebalanceerd met tonen van honing, vanille en lichte rook, 40% alcohol.",
        de: "Blended Scotch Whisky, weich und ausgewogen mit Noten von Honig, Vanille und leichter Rauch, 40% Vol.",
        fr: "Whisky écossais blendé, doux et équilibré avec des notes de miel, vanille et légère fumée, 40% vol.",
      },
      price: "€6,00",
    },
    {
      name: { en: "Southern Comfort", it: "Southern Comfort", nl: "Southern Comfort", de: "Southern Comfort", fr: "Southern Comfort" },
      description: {
        en: "American whiskey liqueur with fruity and spicy notes, 35% ABV.",
        it: "Liquore a base di whiskey americano con note fruttate e speziate, 35% vol.",
        nl: "Amerikaanse whiskeylikeur met fruitige en kruidige tonen, 35% alcohol.",
        de: "Amerikanischer Whiskeylikör mit fruchtigen und würzigen Noten, 35% Vol.",
        fr: "Liqueur à base de whisky américain avec des notes fruitées et épicées, 35% vol.",
      },
      price: "€5,00",
    },
    {
      name: { en: "Jack Daniel's", it: "Jack Daniel's", nl: "Jack Daniel's", de: "Jack Daniel's", fr: "Jack Daniel's" },
      description: {
        en: "Tennessee whiskey, smooth with notes of caramel, vanilla, and oak, 40% ABV.",
        it: "Whiskey del Tennessee, morbido con note di caramello, vaniglia e quercia, 40% vol.",
        nl: "Tennessee whiskey, soepel met tonen van karamel, vanille en eik, 40% alcohol.",
        de: "Tennessee Whiskey, weich mit Noten von Karamell, Vanille und Eiche, 40% Vol.",
        fr: "Whisky du Tennessee, doux avec des notes de caramel, vanille et chêne, 40% vol.",
      },
      price: "€6,00",
    },
    {
      name: { en: "Chivas Regal", it: "Chivas Regal", nl: "Chivas Regal", de: "Chivas Regal", fr: "Chivas Regal" },
      description: {
        en: "Blended Scotch whisky, rich and smooth with hints of honey and vanilla, 40% ABV.",
        it: "Whisky scozzese blended, ricco e morbido con sentori di miele e vaniglia, 40% vol.",
        nl: "Blended Scotch whisky, rijk en soepel met hints van honing en vanille, 40% alcohol.",
        de: "Blended Scotch Whisky, reichhaltig und weich mit Noten von Honig und Vanille, 40% Vol.",
        fr: "Whisky écossais blendé, riche et doux avec des notes de miel et de vanille, 40% vol.",
      },
      price: "€7,00",
    },
    {
      name: { en: "J&B", it: "J&B", nl: "J&B", de: "J&B", fr: "J&B" },
      description: {
        en: "Blended Scotch whisky, smooth and light, ideal for cocktails, 40% ABV.",
        it: "Whisky scozzese blended, morbido e leggero, ideale per cocktail, 40% vol.",
        nl: "Blended Scotch whisky, zacht en licht, ideaal voor cocktails, 40% alcohol.",
        de: "Blended Scotch Whisky, weich und leicht, ideal für Cocktails, 40% Vol.",
        fr: "Whisky écossais blendé, doux et léger, idéal pour les cocktails, 40% vol.",
      },
      price: "€5,00",
    },
    {
      name: { en: "Talisker", it: "Talisker", nl: "Talisker", de: "Talisker", fr: "Talisker" },
      description: {
        en: "Single malt Scotch whisky from the Isle of Skye, smoky and peaty, 45.8% ABV.",
        it: "Whisky scozzese single malt dell'Isola di Skye, affumicato e torbato, 45,8% vol.",
        nl: "Single malt Scotch whisky van het Isle of Skye, rokerig en turfachtig, 45,8% alcohol.",
        de: "Single Malt Scotch Whisky von der Isle of Skye, rauchig und torfig, 45,8% Vol.",
        fr: "Whisky écossais single malt de l'île de Skye, fumé et tourbé, 45,8% vol.",
      },
      price: "€8,00",
    },
    {
      name: { en: "Bulleit Bourbon", it: "Bulleit Bourbon", nl: "Bulleit Bourbon", de: "Bulleit Bourbon", fr: "Bulleit Bourbon" },
      description: {
        en: "Kentucky straight bourbon whiskey, bold and spicy with a high rye content, 45% ABV.",
        it: "Bourbon whiskey del Kentucky, deciso e speziato con alto contenuto di segale, 45% vol.",
        nl: "Kentucky straight bourbon whiskey, krachtig en kruidig met hoog roggegehalte, 45% alcohol.",
        de: "Kentucky Straight Bourbon Whiskey, kräftig und würzig mit hohem Roggenanteil, 45% Vol.",
        fr: "Whisky bourbon droit du Kentucky, corsé et épicé avec une forte teneur en seigle, 45% vol.",
      },
      price: "€7,00",
    },
    {
      name: { en: "Stock 84", it: "Stock 84", nl: "Stock 84", de: "Stock 84", fr: "Stock 84" },
      description: {
        en: "Italian brandy with a smooth, rich flavor, aged in oak barrels, 40% ABV.",
        it: "Brandy italiano dal sapore morbido e ricco, invecchiato in botti di rovere, 40% vol.",
        nl: "Italiaans brandewijn met een zachte, rijke smaak, gerijpt in eikenhouten vaten, 40% alcohol.",
        de: "Italienischer Brandy mit mildem, reichhaltigem Geschmack, in Eichenfässern gereift, 40% Vol.",
        fr: "Brandy italien lisse et riche, vieilli en fûts de chêne, 40% vol.",
      },
      price: "€5,00",
    },
    {
      name: { en: "Vecchia Romagna", it: "Vecchia Romagna", nl: "Vecchia Romagna", de: "Vecchia Romagna", fr: "Vecchia Romagna" },
      description: {
        en: "Classic Italian brandy, smooth and aromatic, aged in oak casks, 38% ABV.",
        it: "Classico brandy italiano, morbido e aromatico, invecchiato in botti di rovere, 38% vol.",
        nl: "Klassieke Italiaanse brandewijn, zacht en aromatisch, gerijpt in eiken vaten, 38% alcohol.",
        de: "Klassischer italienischer Brandy, sanft und aromatisch, in Eichenfässern gereift, 38% Vol.",
        fr: "Brandy italien classique, doux et aromatique, vieilli en fûts de chêne, 38% vol.",
      },
      price: "€5,00",
    },
    {
      name: { en: "Martell", it: "Martell", nl: "Martell", de: "Martell", fr: "Martell" },
      description: {
        en: "Fine French cognac, well-balanced with rich fruity and floral notes, 40% ABV.",
        it: "Pregiato cognac francese, ben equilibrato con ricche note fruttate e floreali, 40% vol.",
        nl: "Fijne Franse cognac, goed gebalanceerd met rijke fruitige en bloemige tonen, 40% alcohol.",
        de: "Feiner französischer Cognac, ausgewogen mit reichhaltigen Frucht- und Blumennoten, 40% Vol.",
        fr: "Fin cognac français, bien équilibré avec de riches notes fruitées et florales, 40% vol.",
      },
      price: "€6,00",
    },
    {
      name: { en: "Hennessy", it: "Hennessy", nl: "Hennessy", de: "Hennessy", fr: "Hennessy" },
      description: {
        en: "Premium French cognac with a rich aroma of oak and vanilla, smooth and warming, 40% ABV.",
        it: "Cognac francese premium con un ricco aroma di quercia e vaniglia, morbido e avvolgente, 40% vol.",
        nl: "Premium Franse cognac met een rijke geur van eik en vanille, zacht en verwarmend, 40% alcohol.",
        de: "Premium französischer Cognac mit reichhaltigem Aroma von Eiche und Vanille, weich und wärmend, 40% Vol.",
        fr: "Cognac français premium avec un riche arôme de chêne et de vanille, doux et réchauffant, 40% vol.",
      },
      price: "€7,00",
    },
    {
      name: { en: "Sambuca", it: "Sambuca", nl: "Sambuca", de: "Sambuca", fr: "Sambuca" },
      description: {
        en: "Traditional Italian anise-flavored liqueur, clear and sweet, often served with coffee beans, 38% ABV.",
        it: "Liquore tradizionale italiano all'anice, trasparente e dolce, spesso servito con chicchi di caffè, 38% vol.",
        nl: "Traditionele Italiaanse likeur met anijssmaak, helder en zoet, vaak geserveerd met koffiebonen, 38% alcohol.",
        de: "Traditioneller italienischer Anislikör, klar und süß, oft mit Kaffeebohnen serviert, 38% Vol.",
        fr: "Liqueur italienne traditionnelle à l'anis, claire et douce, souvent servie avec des grains de café, 38% vol.",
      },
      price: "€5,00",
    },
    {
      name: { en: "Baileys", it: "Baileys", nl: "Baileys", de: "Baileys", fr: "Baileys" },
      description: {
        en: "Creamy Irish liqueur made with whiskey, cream, and chocolate, 17% ABV, smooth and sweet.",
        it: "Liquore irlandese cremoso a base di whiskey, panna e cioccolato, 17% vol, morbido e dolce.",
        nl: "Romige Ierse likeur gemaakt met whiskey, room en chocolade, 17% alcohol, zacht en zoet.",
        de: "Cremiger irischer Likör aus Whiskey, Sahne und Schokolade, 17% Vol., sanft und süß.",
        fr: "Liqueur irlandaise crémeuse à base de whisky, crème et chocolat, 17% vol, douce et onctueuse.",
      },
      price: "€5,00",
    },

  ],
  Digestives: [
    {
      name: { en: "Limoncello", it: "Limoncello", nl: "Limoncello", de: "Limoncello", fr: "Limoncello" },
      description: {
        en: "Traditional Italian lemon liqueur, sweet and zesty, typically served chilled, 30% ABV.",
        it: "Tradizionale liquore italiano al limone, dolce e profumato, servito freddo, 30% vol.",
        nl: "Traditionele Italiaanse citroenlikeur, zoet en fris, meestal gekoeld geserveerd, 30% alcohol.",
        de: "Traditioneller italienischer Zitronenlikör, süß und spritzig, typischerweise gekühlt serviert, 30% Vol.",
        fr: "Liqueur italienne traditionnelle au citron, douce et parfumée, généralement servie froide, 30% vol.",
      },
      price: "€3,50",
    },
    {
      name: { en: "Nocino", it: "Nocino", nl: "Nocino", de: "Nocino", fr: "Nocino" },
      description: {
        en: "Traditional Italian walnut liqueur, dark, rich, and aromatic, typically served as a digestif, 30% ABV.",
        it: "Tradizionale liquore italiano alle noci, scuro, ricco e aromatico, servito come digestivo, 30% vol.",
        nl: "Traditionele Italiaanse walnotenlikeur, donker, rijk en aromatisch, meestal als digestief geserveerd, 30% alcohol.",
        de: "Traditioneller italienischer Walnusslikör, dunkel, reichhaltig und aromatisch, typischerweise als Digestif serviert, 30% Vol.",
        fr: "Liqueur italienne traditionnelle aux noix, sombre, riche et aromatique, généralement servie en digestif, 30% vol.",
      },
      price: "€3,50",
    },
    {
      name: { en: "Fennel liqueur", it: "Finocchietto", nl: "Venkellikeur", de: "Fenchel-Likör", fr: "Liqueur de fenouil" },
      description: {
        en: "Sweet Italian herbal liqueur with a distinct fennel flavor, traditionally served as a digestif, 30% ABV.",
        it: "Liquore italiano dolce alle erbe con distintivo gusto di finocchio, servito tradizionalmente come digestivo, 30% vol.",
        nl: "Zoete Italiaanse kruidenlikeur met een uitgesproken venkelsmaak, traditioneel geserveerd als digestief, 30% alcohol.",
        de: "Süßer italienischer Kräuterlikör mit ausgeprägtem Fenchelgeschmack, traditionell als Digestif serviert, 30% Vol.",
        fr: "Liqueur italienne sucrée aux herbes avec un goût distinct de fenouil, traditionnellement servie en digestif, 30% vol.",
      },
      price: "€3,50",
    },
    {
      name: { en: "Melon liqueur", it: "Meloncello", nl: "Meloenlikeur", de: "Melonenlikör", fr: "Liqueur de melon" },
      description: {
        en: "Sweet Italian liqueur made from melon, typically served chilled as a digestif, 25% ABV.",
        it: "Liquore italiano dolce a base di melone, servito tipicamente freddo come digestivo, 25% vol.",
        nl: "Zoete Italiaanse likeur gemaakt van meloen, meestal gekoeld geserveerd als digestief, 25% alcohol.",
        de: "Süßer italienischer Likör aus Melone, typischerweise gekühlt als Digestif serviert, 25% Vol.",
        fr: "Liqueur italienne sucrée à base de melon, généralement servie froide en digestif, 25% vol.",
      },
      price: "€3,50",
    },
    {
      name: { en: "Licorice liqueur", it: "Liquirizia", nl: "Droplikeur", de: "Lakritzlikör", fr: "Liqueur de réglisse" },
      description: {
        en: "Sweet Italian liqueur made from licorice root, served chilled as a digestif, 25% ABV.",
        it: "Liquore italiano dolce a base di radice di liquirizia, servito freddo come digestivo, 25% vol.",
        nl: "Zoete Italiaanse likeur gemaakt van zoethoutwortel, gekoeld geserveerd als digestief, 25% alcohol.",
        de: "Süßer italienischer Likör aus Süßholzwurzel, gekühlt als Digestif serviert, 25% Vol.",
        fr: "Liqueur italienne sucrée à base de racine de réglisse, servie froide en digestif, 25% vol.",
      },
      price: "€3,50",
    },
    {
      name: { en: "Lucano liqueur", it: "Lucano", nl: "Lucano-likeur", de: "Lucano-Likör", fr: "Liqueur Lucano" },
      description: {
        en: "Traditional Italian herbal liqueur with a complex blend of aromatic herbs, served as a digestif, 30% ABV.",
        it: "Liquore tradizionale italiano a base di erbe aromatiche, servito come digestivo, 30% vol.",
        nl: "Traditionele Italiaanse kruidenlikeur met een complexe mix van aromatische kruiden, geserveerd als digestief, 30% alcohol.",
        de: "Traditioneller italienischer Kräuterlikör mit einer komplexen Mischung aromatischer Kräuter, als Digestif serviert, 30% Vol.",
        fr: "Liqueur italienne traditionnelle aux herbes avec un mélange complexe d'herbes aromatiques, servie en digestif, 30% vol.",
      },
      price: "€3,50",
    },
    {
      name: { en: "Averna liqueur", it: "Averna", nl: "Averna-likeur", de: "Averna-Likör", fr: "Liqueur Averna" },
      description: {
        en: "Sicilian amaro with a rich blend of herbs, roots, and citrus, traditionally served as a digestif, 29% ABV.",
        it: "Amaro siciliano con un ricco blend di erbe, radici e agrumi, tradizionalmente servito come digestivo, 29% vol.",
        nl: "Siciliaanse amaro met een rijke mix van kruiden, wortels en citrus, traditioneel geserveerd als digestief, 29% alcohol.",
        de: "Sizilianischer Amaro mit einer reichen Mischung aus Kräutern, Wurzeln und Zitrusfrüchten, traditionell als Digestif serviert, 29% Vol.",
        fr: "Amaro sicilien avec un mélange riche d'herbes, de racines et d'agrumes, servi traditionnellement en digestif, 29% vol.",
      },
      price: "€3,50",
    },
    {
      name: { en: "Montenegro liqueur", it: "Montenegro", nl: "Montenegro-likeur", de: "Montenegro-Likör", fr: "Liqueur Montenegro" },
      description: {
        en: "Italian herbal liqueur with a delicate balance of 40 botanicals, sweet and slightly bitter, 23% ABV.",
        it: "Liquore italiano alle erbe con un delicato equilibrio di 40 botaniche, dolce e leggermente amaro, 23% vol.",
        nl: "Italiaans kruidenlikeur met een delicate balans van 40 botanicals, zoet en licht bitter, 23% alcohol.",
        de: "Italienischer Kräuterlikör mit einer feinen Balance aus 40 Botanicals, süß und leicht bitter, 23% Vol.",
        fr: "Liqueur italienne aux herbes avec un équilibre délicat de 40 plantes, douce et légèrement amère, 23% vol.",
      },
      price: "€3,50",
    },
    {
      name: { en: "Borsci San Marzano liqueur", it: "Borsci San Marzano", nl: "Borsci San Marzano-likeur", de: "Borsci San Marzano-Likör", fr: "Liqueur Borsci San Marzano" },
      description: {
        en: "Italian cherry liqueur with a rich, fruity flavor and 32% ABV, perfect as a digestif.",
        it: "Liquore italiano alla ciliegia con un sapore ricco e fruttato, 32% vol., perfetto come digestivo.",
        nl: "Italiaans kersenlikeur met een rijke, fruitige smaak en 32% alcohol, ideaal als digestief.",
        de: "Italienischer Kirschlikör mit reichhaltigem, fruchtigem Geschmack, 32% Vol., perfekt als Digestif.",
        fr: "Liqueur italienne à la cerise avec une saveur riche et fruitée, 32% vol., parfaite comme digestif.",
      },
      price: "€3,50",
    },
    {
      name: { en: "Fernet Branca liqueur", it: "Fernet Branca", nl: "Fernet Branca-likeur", de: "Fernet Branca-Likör", fr: "Liqueur Fernet Branca" },
      description: {
        en: "Italian bitter herbal liqueur with a strong, complex flavor and 39% ABV, traditionally served as a digestif.",
        it: "Liquore amaro alle erbe italiano dal gusto forte e complesso, 39% vol., tradizionalmente servito come digestivo.",
        nl: "Italiaanse bittere kruidenlikeur met een sterke, complexe smaak en 39% alcohol, traditioneel als digestief geserveerd.",
        de: "Italienischer bitterer Kräuterlikör mit starkem, komplexem Geschmack, 39% Vol., traditionell als Digestif serviert.",
        fr: "Liqueur amère italienne aux herbes avec une saveur forte et complexe, 39% vol., traditionnellement servie en digestif.",
      },
      price: "€3,50",
    },
    {
      name: { en: "Unicum liqueur", it: "Unicum", nl: "Unicum-likeur", de: "Unicum-Likör", fr: "Liqueur Unicum" },
      description: {
        en: "Hungarian herbal bitters with a unique, complex flavor and 40% ABV, often served as a digestif.",
        it: "Amaro alle erbe ungherese dal gusto unico e complesso, 40% vol., spesso servito come digestivo.",
        nl: "Hongaars kruidenbitter met een unieke, complexe smaak en 40% alcohol, vaak geserveerd als digestief.",
        de: "Ungarischer Kräuterbitter mit einzigartigem, komplexem Geschmack, 40% Vol., oft als Digestif serviert.",
        fr: "Bitter aux herbes hongrois avec une saveur unique et complexe, 40% vol., souvent servi en digestif.",
      },
      price: "€3,50",
    },
    {
      name: { en: "Jägermeister", it: "Jägermeister", nl: "Jägermeister", de: "Jägermeister", fr: "Jägermeister" },
      description: {
        en: "German herbal liqueur with a distinctive taste, made from 56 herbs, spices, and roots, 35% ABV, commonly served cold or as a shot.",
        it: "Liquore alle erbe tedesco dal gusto distintivo, prodotto con 56 erbe, spezie e radici, 35% vol., servito freddo o come shot.",
        nl: "Duitse kruidenlikeur met een kenmerkende smaak, gemaakt van 56 kruiden, specerijen en wortels, 35% alcohol, vaak koud of als shot geserveerd.",
        de: "Deutscher Kräuterlikör mit markantem Geschmack, hergestellt aus 56 Kräutern, Gewürzen und Wurzeln, 35% Vol., meist kalt oder als Shot serviert.",
        fr: "Liqueur allemande aux herbes au goût distinctif, composée de 56 herbes, épices et racines, 35% vol., servie froide ou en shot.",
      },
      price: "€3,50",
    },
    {
      name: { en: "Amaro del Capo", it: "Amaro del Capo", nl: "Amaro del Capo", de: "Amaro del Capo", fr: "Amaro del Capo" },
      description: {
        en: "Italian herbal liqueur from Calabria, made with a blend of 29 herbs and spices, 35% ABV, served chilled or as a digestif.",
        it: "Liquore amaro italiano dalla Calabria, prodotto con un blend di 29 erbe e spezie, 35% vol., servito freddo o come digestivo.",
        nl: "Italiaans kruidenlikeur uit Calabrië, gemaakt met een mix van 29 kruiden en specerijen, 35% alcohol, koud of als digestief geserveerd.",
        de: "Italienischer Kräuterlikör aus Kalabrien, hergestellt aus einer Mischung von 29 Kräutern und Gewürzen, 35% Vol., kalt oder als Digestif serviert.",
        fr: "Liqueur amère italienne de Calabre, composée d'un mélange de 29 herbes et épices, 35% vol., servie froide ou en digestif.",
      },
      price: "€3,50",
    },
    {
      name: { en: "Cynar", it: "Cynar", nl: "Cynar", de: "Cynar", fr: "Cynar" },
      description: {
        en: "Italian bitter liqueur made from artichokes and a blend of herbs, 16.5% ABV, served neat, on the rocks, or in cocktails.",
        it: "Liquore amaro italiano a base di carciofi e un blend di erbe, 16,5% vol., servito liscio, con ghiaccio o nei cocktail.",
        nl: "Italiaans bittere likeur gemaakt van artisjokken en een mix van kruiden, 16,5% alcohol, puur, op ijs of in cocktails geserveerd.",
        de: "Italienischer Bitterlikör aus Artischocken und einer Kräutermischung, 16,5% Vol., pur, auf Eis oder in Cocktails serviert.",
        fr: "Liqueur amère italienne à base d'artichauts et d'un mélange d'herbes, 16,5% vol., servie nature, sur glace ou en cocktails.",
      },
      price: "€3,50",
    },
    {
      name: { en: "Jefferson", it: "Jefferson", nl: "Jefferson", de: "Jefferson", fr: "Jefferson" },
      description: {
        en: "American bourbon whiskey, rich and smooth, 40% ABV, enjoyed neat, on the rocks, or in cocktails.",
        it: "Whiskey bourbon americano, ricco e morbido, 40% vol., da gustare liscio, con ghiaccio o nei cocktail.",
        nl: "Amerikaanse bourbon whiskey, rijk en zacht, 40% alcohol, puur, op ijs of in cocktails te drinken.",
        de: "Amerikanischer Bourbon-Whiskey, reich und weich, 40% Vol., pur, auf Eis oder in Cocktails genossen.",
        fr: "Whiskey bourbon américain, riche et doux, 40% vol., à déguster nature, sur glace ou en cocktails.",
      },
      price: "€3,50",
    },
    {
      name: { en: "Disaronno", it: "Disaronno", nl: "Disaronno", de: "Disaronno", fr: "Disaronno" },
      description: {
        en: "Italian amaretto liqueur with a sweet almond flavor, 28% ABV, perfect for sipping or in cocktails.",
        it: "Liquore amaretto italiano dal sapore dolce di mandorla, 28% vol., perfetto da gustare liscio o nei cocktail.",
        nl: "Italiaanse amaretto-likeur met een zoete amandelsmaak, 28% alcohol, heerlijk puur of in cocktails.",
        de: "Italienischer Amaretto-Likör mit süßem Mandelgeschmack, 28% Vol., ideal pur oder in Cocktails.",
        fr: "Liqueur italienne amaretto au goût doux d'amande, 28% vol., idéale à déguster nature ou en cocktails.",
      },
      price: "€3,50",
    },

  ],
  Grappa: [
    {
      name: { en: "Berta", it: "Berta", nl: "Berta", de: "Berta", fr: "Berta" },
      description: {
        en: "Premium Italian grappa with a rich, complex flavor, ideal as a digestif, 40% ABV.",
        it: "Grappa italiana premium dal gusto ricco e complesso, ideale come digestivo, 40% vol.",
        nl: "Premium Italiaanse grappa met een rijke, complexe smaak, perfect als digestief, 40% alcohol.",
        de: "Premium italienischer Grappa mit reichhaltigem, komplexem Geschmack, ideal als Digestif, 40% Vol.",
        fr: "Grappa italienne premium au goût riche et complexe, idéale en digestif, 40% vol.",
      },
      price: "€5,00",
    },
    {
      name: { en: "Bianca", it: "Bianca", nl: "Bianca", de: "Bianca", fr: "Bianca" },
      description: {
        en: "Premium Italian grappa, clear and smooth, perfect as a digestif, 40% ABV.",
        it: "Grappa italiana premium, chiara e morbida, perfetta come digestivo, 40% vol.",
        nl: "Premium Italiaanse grappa, helder en soepel, perfect als digestief, 40% alcohol.",
        de: "Premium italienischer Grappa, klar und mild, ideal als Digestif, 40% Vol.",
        fr: "Grappa italienne premium, claire et douce, parfaite en digestif, 40% vol.",
      },
      price: "€5,00",
    },
    {
      name: { en: "Scura", it: "Scura", nl: "Scura", de: "Scura", fr: "Scura" },
      description: {
        en: "Dark Italian grappa, rich and full-bodied, aged for a smooth finish, 40% ABV.",
        it: "Grappa italiana scura, ricca e corposa, invecchiata per un finale morbido, 40% vol.",
        nl: "Donkere Italiaanse grappa, rijk en vol van smaak, gerijpt voor een zachte afdronk, 40% alcohol.",
        de: "Dunkler italienischer Grappa, reichhaltig und vollmundig, gereift für einen sanften Abgang, 40% Vol.",
        fr: "Grappa italienne foncée, riche et corsée, vieillie pour une finale douce, 40% vol.",
      },
      price: "€5,00",
    },

  ],
  Granita: [
    {
      name: { en: "Lemon Slush", it: "Granita di limone", nl: "Citroengranita", de: "Zitronen-Granita", fr: "Granité au citron" },
      description: {
        en: "Refreshing icy lemon treat, perfect for a hot day.",
        it: "Rinfrescante dessert ghiacciato al limone, perfetto per le giornate calde.",
        nl: "Verfrissende ijzige citroentraktatie, perfect voor een warme dag.",
        de: "Erfrischendes eisiges Zitronen-Dessert, perfekt für einen heißen Tag.",
        fr: "Délicieux granité glacé au citron, parfait pour une journée chaude.",
      },
      price: "€3,50",
    },
    {
      name: { en: "Slush Drink", it: "Bibita con granita", nl: "Drank met granita", de: "Getränk mit Granita", fr: "Boisson avec granité" },
      description: {
        en: "A refreshing beverage served with icy granita.",
        it: "Una bevanda rinfrescante servita con ghiaccio alla granita.",
        nl: "Een verfrissend drankje geserveerd met ijzige granita.",
        de: "Ein erfrischendes Getränk, serviert mit eisiger Granita.",
        fr: "Une boisson rafraîchissante servie avec du granité glacé.",
      },
      price: "€4,00",
    },
    {
      name: { en: "Sgroppino", it: "Sgroppino", nl: "Sgroppino", de: "Sgroppino", fr: "Sgroppino" },
      description: {
        en: "A refreshing Italian cocktail made with lemon sorbet, prosecco, and a splash of vodka.",
        it: "Un rinfrescante cocktail italiano a base di sorbetto al limone, prosecco e un tocco di vodka.",
        nl: "Een verfrissende Italiaanse cocktail gemaakt met citroensorbet, prosecco en een scheutje vodka.",
        de: "Ein erfrischender italienischer Cocktail aus Zitronensorbet, Prosecco und einem Schuss Wodka.",
        fr: "Un cocktail italien rafraîchissant à base de sorbet au citron, prosecco et un trait de vodka.",
      },
      price: "€6,00",
    },
    {
      name: { en: "Sgroppino with Belvedere / Grey Goose / Hendrick's / Gin Mare", it: "Sgroppino con Belvedere / Grey Goose / Hendrick's / Gin Mare", nl: "Sgroppino met Belvedere / Grey Goose / Hendrick's / Gin Mare", de: "Sgroppino mit Belvedere / Grey Goose / Hendrick's / Gin Mare", fr: "Sgroppino avec Belvedere / Grey Goose / Hendrick's / Gin Mare" },
      description: {
        en: "A premium twist on the classic Italian Sgroppino, made with lemon sorbet, prosecco, and your choice of Belvedere, Grey Goose, Hendrick's, or Gin Mare.",
        it: "Una versione premium del classico Sgroppino italiano, con sorbetto al limone, prosecco e la tua scelta tra Belvedere, Grey Goose, Hendrick's o Gin Mare.",
        nl: "Een premium variant van de klassieke Italiaanse Sgroppino, met citroensorbet, prosecco en keuze uit Belvedere, Grey Goose, Hendrick's of Gin Mare.",
        de: "Eine Premium-Variante des klassischen italienischen Sgroppino, mit Zitronensorbet, Prosecco und Wahl zwischen Belvedere, Grey Goose, Hendrick's oder Gin Mare.",
        fr: "Une version premium du Sgroppino italien classique, avec sorbet au citron, prosecco et au choix Belvedere, Grey Goose, Hendrick's ou Gin Mare.",
      },
      price: "€7,00",
    },

  ],
  Yogurts: [
    {
      name: { en: "Natural White", it: "Naturale bianco", nl: "Natuurlijk wit", de: "Natur Weiß", fr: "Nature blanc" },
      description: {
        en: "Plain yogurt with a smooth and creamy texture.",
        it: "Yogurt naturale dalla consistenza liscia e cremosa.",
        nl: "Natuurlijke yoghurt met een gladde en romige textuur.",
        de: "Naturjoghurt mit glatter und cremiger Konsistenz.",
        fr: "Yaourt nature à la texture lisse et crémeuse.",
      },
      price: "€2,50 (S) | €4,50 (L)",
    },
    {
      name: { en: "Nutella", it: "Nutella", nl: "Nutella", de: "Nutella", fr: "Nutella" },
      description: {
        en: "Yogurt topped with creamy Nutella spread.",
        it: "Yogurt guarnito con crema spalmabile di Nutella.",
        nl: "Yoghurt gegarneerd met romige Nutella.",
        de: "Joghurt mit cremigem Nutella-Aufstrich.",
        fr: "Yaourt garni de pâte à tartiner Nutella.",
      },
      price: "€3,00 (S) | €6,00 (L)",
    },
    {
      name: { en: "Chocolate", it: "Cioccolato", nl: "Chocolade", de: "Schokolade", fr: "Chocolat" },
      description: {
        en: "Yogurt topped with rich chocolate spread.",
        it: "Yogurt guarnito con crema al cioccolato.",
        nl: "Yoghurt gegarneerd met rijke chocoladespread.",
        de: "Joghurt mit reichhaltigem Schokoladenaufstrich.",
        fr: "Yaourt garni de pâte au chocolat riche.",
      },
      price: "€3,00 (S) | €6,00 (L)",
    },
    {
      name: { en: "White Chocolate", it: "Cioccolato Bianco", nl: "Witte Chocolade", de: "Weiße Schokolade", fr: "Chocolat Blanc" },
      description: {
        en: "Yogurt topped with creamy white chocolate spread.",
        it: "Yogurt guarnito con crema di cioccolato bianco.",
        nl: "Yoghurt gegarneerd met romige witte chocoladespread.",
        de: "Joghurt mit cremigem weißem Schokoladenaufstrich.",
        fr: "Yaourt garni de pâte au chocolat blanc crémeuse.",
      },
      price: "€3,00 (S) | €6,00 (L)",
    },
    {
      name: { en: "Hazelnut", it: "Nocciola", nl: "Hazelnoot", de: "Haselnuss", fr: "Noisette" },
      description: {
        en: "Yogurt topped with rich hazelnut spread.",
        it: "Yogurt guarnito con crema di nocciole.",
        nl: "Yoghurt gegarneerd met rijke hazelnootpasta.",
        de: "Joghurt mit reichhaltigem Haselnussaufstrich.",
        fr: "Yaourt garni de pâte aux noisettes riche.",
      },
      price: "€3,00 (S) | €6,00 (L)",
    },
    {
      name: { en: "Caramel", it: "Caramello", nl: "Karamel", de: "Karamell", fr: "Caramel" },
      description: {
        en: "Yogurt with smooth caramel sauce.",
        it: "Yogurt con morbida salsa al caramello.",
        nl: "Yoghurt met zachte karamelsaus.",
        de: "Joghurt mit samtiger Karamellsauce.",
        fr: "Yaourt avec une sauce caramel onctueuse.",
      },
      price: "€3,00 (S) | €6,00 (L)",
    },
    {
      name: { en: "Mixed berries", it: "Frutti di bosco", nl: "Bosbessenmix", de: "Waldbeeren", fr: "Fruits des bois" },
      description: {
        en: "Yogurt with a sweet mixed berries syrup.",
        it: "Yogurt con dolce sciroppo di frutti di bosco.",
        nl: "Yoghurt met zoete bosbessensiroop.",
        de: "Joghurt mit süßem Waldbeersirup.",
        fr: "Yaourt avec un sirop sucré de fruits des bois.",
      },
      price: "€3,00 (S) | €6,00 (L)",
    },
    {
      name: { en: "Strawberry", it: "Fragola", nl: "Aardbei", de: "Erdbeere", fr: "Fraise" },
      description: {
        en: "Yogurt with sweet strawberry syrup.",
        it: "Yogurt con dolce sciroppo di fragola.",
        nl: "Yoghurt met zoete aardbeiensiroop.",
        de: "Joghurt mit süßem Erdbeersirup.",
        fr: "Yaourt avec un sirop sucré à la fraise.",
      },
      price: "€3,00 (S) | €6,00 (L)",
    },
    {
      name: { en: "Sour Cherry", it: "Amarena", nl: "Zure kers", de: "Sauerkirsche", fr: "Griotte" },
      description: {
        en: "Yogurt with sweet amarena cherry syrup.",
        it: "Yogurt con dolce sciroppo di amarena.",
        nl: "Yoghurt met zoete amarena kersensiroop.",
        de: "Joghurt mit süßem Amarena-Kirschsirup.",
        fr: "Yaourt avec sirop sucré de cerise amarena.",
      },
      price: "€3,00 (S) | €6,00 (L)",
    },
    {
      name: { en: "Coffee", it: "Caffè", nl: "Koffie", de: "Kaffee", fr: "Café" },
      description: {
        en: "Freshly brewed espresso.",
        it: "Espresso appena preparato.",
        nl: "Vers gezette espresso.",
        de: "Frisch gebrühter Espresso.",
        fr: "Espresso fraîchement préparé.",
      },
      price: "€3,00 (S) | €6,00 (L)",
    },

  ],
  IcedCoffee: [
    {
      name: { en: "Iced Coffee Cream", it: "Crema Caffè", nl: "IJs Koffie Crème", de: "Eiskaffee-Creme", fr: "Crème de Café Glacé" },
      description: {
        en: "A chilled dessert made with coffee, cream, and sugar.",
        it: "Un dolce al cucchiaio freddo a base di caffè, panna e zucchero.",
        nl: "Een koud dessert gemaakt van koffie, room en suiker.",
        de: "Ein kaltes Dessert aus Kaffee, Sahne und Zucker.",
        fr: "Un dessert glacé à base de café, de crème et de sucre.",
      },
      price: "€2,50 (S) | €4,00 (L)",
    },
    {
      name: { en: "Chocolate", it: "Cioccolato", nl: "Chocolade", de: "Schokolade", fr: "Chocolat" },
      description: {
        en: "Iced coffee cream topped with chocolate.",
        it: "Crema caffè fredda con topping di cioccolato.",
        nl: "IJs koffiecrème met chocoladetopping.",
        de: "Eiskaffeecreme mit Schokoladentopping.",
        fr: "Crème glacée au café avec topping au chocolat.",
      },
      price: "€3,00 (S) | €5,00 (L)",
    },
    {
      name: { en: "White Chocolate", it: "Cioccolato Bianco", nl: "Witte Chocolade", de: "Weiße Schokolade", fr: "Chocolat Blanc" },
      description: {
        en: "Iced coffee cream topped with white chocolate.",
        it: "Crema caffè fredda con topping di cioccolato bianco.",
        nl: "IJs koffiecrème met topping van witte chocolade.",
        de: "Eiskaffeecreme mit Topping aus weißer Schokolade.",
        fr: "Crème glacée au café avec topping au chocolat blanc.",
      },
      price: "€3,00 (S) | €5,00 (L)",
    },
    {
      name: { en: "Hazelnut", it: "Nocciola", nl: "Hazelnoot", de: "Haselnuss", fr: "Noisette" },
      description: {
        en: "Iced coffee cream topped with hazelnut syrup.",
        it: "Crema caffè fredda con topping di sciroppo alla nocciola.",
        nl: "IJs koffiecrème met topping van hazelnootsiroop.",
        de: "Eiskaffeecreme mit Haselnusssirup-Topping.",
        fr: "Crème glacée au café avec topping de sirop de noisette.",
      },
      price: "€3,00 (S) | €5,00 (L)",
    },
    {
      name: { en: "Caramel", it: "Caramello", nl: "Karamel", de: "Karamell", fr: "Caramel" },
      description: {
        en: "Iced coffee cream topped with caramel syrup.",
        it: "Crema caffè fredda con topping di sciroppo al caramello.",
        nl: "IJs koffiecrème met topping van karamelsiroop.",
        de: "Eiskaffeecreme mit Karamellsirup-Topping.",
        fr: "Crème glacée au café avec topping de sirop de caramel.",
      },
      price: "€3,00 (S) | €5,00 (L)",
    }

  ],
};

const categoryTranslations = {
  Cafeteria: { en: "Cafeteria", it: "Caffetteria", nl: "Koffiebar", de: "Cafeteria", fr: "Cafétéria" },
  Sodas: { en: "Sodas", it: "Bibite", nl: "Frisdranken", de: "Erfrischungsgetränk", fr: "Sodas" },
  Beers: { en: "Beers", it: "Birre", nl: "Bieren", de: "Biere", fr: "Bières" },
  Aperitifs: { en: "Aperitifs", it: "Aperitivi", nl: "Aperitieven", de: "Aperitifs", fr: "Apéritifs" },
  Cocktails: { en: "Cocktails", it: "Cocktail", nl: "Cocktails", de: "Cocktails", fr: "Cocktails" },
  Vodka: { en: "Vodka", it: "Vodka", nl: "Vodka", de: "Wodka", fr: "Vodka" },
  Liquors: { en: "Liquors", it: "Liquori", nl: "Likeuren", de: "Liköre", fr: "Liqueurs" },
  Digestives: { en: "Digestives", it: "Amari", nl: "Digestieven", de: "Digestifs", fr: "Digestifs" },
  Grappa: { en: "Grappa", it: "Grappa", nl: "Grappa", de: "Grappa", fr: "Grappa" },
  Granita: { en: "Granita", it: "Granita", nl: "Granita", de: "Granita", fr: "Granita" },
  Yogurts: { en: "Yogurts", it: "Yogurt", nl: "Yoghurt", de: "Joghurt", fr: "Yaourts" },
  IcedCoffee: { en: "Iced Coffee", it: "Crema Caffè", nl: "Koffie-ijs", de: "Eiskaffee", fr: "Café glacé" },
};
const staticTranslations = {
  all: { en: "All", it: "Tutto", nl: "Alles", de: "Alle", fr: "Tous" },
};

export default function BarSportMenu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [language, setLanguage] = useState("en");

  const categories = ["All", ...Object.keys(menuData)];
  const languages = [
    { code: "en", label: "English" },
    { code: "it", label: "Italiano" },
    { code: "nl", label: "Nederlands" },
    { code: "de", label: "Deutsch" },
    { code: "fr", label: "Français" },
  ];

  const renderItem = (item, index) => (
    <div key={index} className="border rounded-2xl shadow-md p-4 w-full">
      <div className="flex justify-between items-center">
        <span className="text-xl font-medium">{item.name[language] || item.name.en}</span>
        {item.price && <span className="text-lg font-semibold">{item.price}</span>}
      </div>
      <p className="text-sm text-gray-600 mt-2">{item.description[language] || item.description.en}</p>
      {item.variants && (
        <div className="mt-3 space-y-1">
          {item.variants.map((variant, vIdx) => (
            <div key={vIdx} className="flex justify-between text-sm text-gray-800">
              <span>{variant.brand}</span>
              <span className="font-medium">{variant.price}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f9f9f7] text-black p-4 flex flex-col items-center">
      <header className="flex flex-col items-center py-6 w-full max-w-4xl">
        <h1 className="text-4xl font-bold drop-shadow-lg mb-4 text-center">Bar Sport</h1>
        <div className="w-32">
          <select
            className="w-full border rounded-lg p-2 bg-white text-black"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>
      </header>

      <nav className="flex flex-wrap justify-center gap-2 mb-6 w-full max-w-4xl">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-2xl px-4 py-2 text-lg ${activeCategory === category ? 'bg-black text-white' : 'border text-black'}`}
          >
            {category === "All" ? staticTranslations.all[language] : categoryTranslations[category][language] || category}
          </button>
        ))}
      </nav>

      <main className="w-full max-w-2xl flex flex-col gap-6">
        {activeCategory === "All"
          ? Object.entries(menuData).map(([category, items], idx) => (
            <section key={idx} className="w-full">
              <h2 className="text-2xl font-bold mb-3 border-b pb-1 text-center">
                {categoryTranslations[category][language] || category}
              </h2>
              <div className="grid gap-4 w-full">
                {items.map((item, index) => renderItem(item, `${category}-${index}`))}
              </div>
            </section>
          ))
          : menuData[activeCategory].map((item, index) => renderItem(item, `${activeCategory}-${index}`))}
      </main>

      <footer className="text-center mt-10 w-full">
        <p>© 2025 Bar Sport • All Rights Reserved</p>
      </footer>
    </div>
  );
}
