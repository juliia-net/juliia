import { detectLocale, translations } from '../src/lib/i18n.js';

const reference = Object.keys(translations.en).sort();

for (const [locale, messages] of Object.entries(translations)) {
  const keys = Object.keys(messages).sort();
  if (JSON.stringify(keys) !== JSON.stringify(reference)) {
    throw new Error(`Translation keys for ${locale} do not match English`);
  }
  for (const [key, value] of Object.entries(messages)) {
    if (!value.trim()) throw new Error(`Empty ${locale} translation: ${key}`);
  }
}

const localeCases = [
  [['ru-RU'], 'ru'],
  [['ru'], 'ru'],
  [['en-US', 'ru-RU'], 'ru'],
  [['en-US'], 'en'],
  [['fr-FR'], 'en']
];

for (const [preferred, expected] of localeCases) {
  const actual = detectLocale(preferred);
  if (actual !== expected) throw new Error(`Expected ${preferred.join(',')} to resolve to ${expected}, got ${actual}`);
}

console.log(`i18n catalogs: ${Object.keys(translations).length} locales, ${reference.length} keys each`);
