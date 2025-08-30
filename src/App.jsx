import { useState, useEffect } from "react";
import './App.css';

const categoryTranslations = {
  Cafeteria: { en: "Cafeteria", it: "Caffetteria", nl: "Koffiebar", de: "Cafeteria", fr: "Cafétéria", es: "Cafetería", pl: "Kawiarnia" },
  Sodas: { en: "Sodas", it: "Bibite", nl: "Frisdranken", de: "Erfrischungsgetränk", fr: "Sodas", es: "Refrescos", pl: "Napoje gazowane" },
  Beers: { en: "Beers", it: "Birre", nl: "Bieren", de: "Biere", fr: "Bières", es: "Cervezas", pl: "Piwa" },
  Aperitifs: { en: "Aperitifs", it: "Aperitivi", nl: "Aperitieven", de: "Aperitifs", fr: "Apéritifs", es: "Aperitivos", pl: "Aperitify" },
  Cocktails: { en: "Cocktails", it: "Cocktail", nl: "Cocktails", de: "Cocktails", fr: "Cocktails", es: "Cócteles", pl: "Koktajle" },
  Vodka: { en: "Vodka", it: "Vodka", nl: "Vodka", de: "Wodka", fr: "Vodka", es: "Vodka", pl: "Wódka" },
  Liquors: { en: "Liquors", it: "Liquori", nl: "Likeuren", de: "Liköre", fr: "Liqueurs", es: "Licores", pl: "Likier" },
  Digestives: { en: "Digestives", it: "Amari", nl: "Digestieven", de: "Digestifs", fr: "Digestifs", es: "Digestivos", pl: "Digestywy" },
  Grappa: { en: "Grappa", it: "Grappa", nl: "Grappa", de: "Grappa", fr: "Grappa", es: "Grappa", pl: "Grappa" },
  Granita: { en: "Granita", it: "Granita", nl: "Granita", de: "Granita", fr: "Granita", es: "Grantia", pl: "Grantia" },
  Yogurts: { en: "Yogurts", it: "Yogurt", nl: "Yoghurt", de: "Joghurt", fr: "Yaourts", es: "Yogures", pl: "Jogurty" },
  IcedCoffee: { en: "Iced Coffee", it: "Crema Caffè", nl: "Koffie-ijs", de: "Eiskaffee", fr: "Café glacé", es: "Crema de café", pl: "Kawa ze śmietanką" },
};
const staticTranslations = {
  all: { en: "All", it: "Tutto", nl: "Alles", de: "Alle", fr: "Tous", es: "Todo", pl: "Wszystko" },
};

export default function BarSportMenu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [language, setLanguage] = useState("en");
  const [menuData, setMenuData] = useState(null);
  const [prices, setPrices] = useState(null);

  const languages = [
    { code: "en", label: "English" },
    { code: "it", label: "Italiano" },
    { code: "nl", label: "Nederlands" },
    { code: "de", label: "Deutsch" },
    { code: "fr", label: "Français" },
    { code: "es", label: "Español" },
    { code: "pl", label: "Polski" },
  ];

  // Helper function to load JSON from public folder
  const loadJson = async (fileName) => {
    const response = await fetch(`/locales/${fileName}`);
    if (!response.ok) throw new Error(`Failed to load ${fileName}`);
    return response.json();
  };


  useEffect(() => {
    const userLang = navigator.language.slice(0, 2);
    const supportedLangs = languages.map(l => l.code);
    const selectedLang = supportedLangs.includes(userLang) ? userLang : "en";
    setLanguage(selectedLang);


    loadJson(`${selectedLang}.json`).then(setMenuData);
    loadJson(`prices.json`).then(setPrices);
  }, []);


  const handleLanguageChange = async (e) => {
    const newLang = e.target.value;
    setLanguage(newLang);
    const data = await loadJson(`${newLang}.json`);
    setMenuData(data);
  };


  const renderItem = (item) => (
    <div key={item.id} className="border rounded-2xl shadow-md p-4 w-full">
      <div className="flex justify-between items-center">
        <span className="text-xl font-medium">{item.name}</span>
        {prices && <span className="text-lg font-semibold">{prices[item.id]}</span>}
      </div>
      <p className="text-sm text-gray-600 mt-2">{item.description}</p>
    </div>
  );


  if (!menuData || !prices) return <div>Loading menu...</div>;


  const categories = Object.keys(menuData);


  return (
    <div className="min-h-screen bg-[#f9f9f7] text-black p-4 flex flex-col items-center">
      <header className="flex flex-col items-center py-6 w-full max-w-4xl">
        <h1 className="text-4xl font-bold drop-shadow-lg mb-4 text-center">Bar Sport</h1>
        <div className="w-32">
          <select
            className="w-full border rounded-lg p-2 bg-white text-black"
            value={language}
            onChange={handleLanguageChange}
          >
            {languages.map(lang => (
              <option key={lang.code} value={lang.code}>{lang.label}</option>
            ))}
          </select>
        </div>
      </header>


      <nav className="flex flex-wrap justify-center gap-2 mb-6 w-full max-w-4xl">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-2xl px-4 py-2 text-lg ${activeCategory === category ? 'bg-black text-white' : 'border text-black'}`}
          >
            {categoryTranslations[category]?.[language] || category}
          </button>
        ))}
      </nav>


      <main className="w-full max-w-2xl flex flex-col gap-6">
        {(activeCategory === "All" ? Object.entries(menuData) : [[activeCategory, menuData[activeCategory]]])
          .map(([category, items]) => (
            <section key={category} className="w-full">
              <h2 className="text-2xl font-bold mb-3 border-b pb-1 text-center">
                {categoryTranslations[category]?.[language] || category}
              </h2>
              <div className="grid gap-4 w-full">
                {items.map(item => renderItem(item))}
              </div>
            </section>
          ))
        }
      </main>


      <footer className="text-center mt-10 w-full">
        <p>© 2025 Bar Sport • All Rights Reserved</p>
      </footer>
    </div>
  );
}