# Web kampane Lukáš Anderko - Prešov

Statická kampaňová webstránka pre kandidáta na primátora mesta Prešov. Projekt používa iba HTML, CSS a JavaScript, bez databázy, backendu, platených API a externých knižníc.

## 1. Ako projekt spustiť lokálne

Najjednoduchšie je otvoriť súbor `index.html` priamo v prehliadači.

Ak chcete použiť lokálny server, v priečinku projektu spustite napríklad:

```powershell
python -m http.server 8000
```

Potom otvorte adresu `http://localhost:8000`.

## 2. Ako upraviť texty

Väčšina textov je v súbore `data.js`.

Tam upravíte:

- meno kandidáta
- slogan
- dátum volieb a text odpočítavania
- úvodné texty
- programové body
- aktuality
- kontakty
- Facebook odkaz
- zákonné informácie
- GDPR a cookies text

Po uložení súboru obnovte stránku v prehliadači.

Dátum odpočítavania je v časti `election.date`. Použite formát napríklad `2026-10-24T07:00:00+02:00`.

## 3. Kam vložiť fotografiu kandidáta

Fotografiu vložte do priečinka `assets/` a pomenujte ju `kandidat.jpg`.

Ak použijete iný názov, zmeňte hodnotu `image` v súbore `data.js`.

## 4. Ako zmeniť farby

Farby sú nastavené na začiatku súboru `styles.css` v časti `:root`.

Najdôležitejšie premenné:

- `--navy` hlavná tmavomodrá
- `--blue` doplnková modrá
- `--aqua` moderný akcent
- `--gold` teplý akcent
- `--soft` svetle pozadie

## 5. Ako nahrať web na GitHub Pages zdarma

1. Vytvorte nový repozitár na GitHube.
2. Nahrajte do neho súbory `index.html`, `styles.css`, `script.js`, `data.js`, `README.md` a priečinok `assets`.
3. V nastaveniach repozitára otvorte `Pages`.
4. Ako zdroj vyberte vetvu `main` a priečinok `/root`.
5. Po uložení GitHub zobrazí verejnú adresu webu.

## 6. Zákonné informácie

Sekcia zákonných informácií obsahuje iba placeholdery. Pred zverejnením je potrebné overiť a doplniť aktuálne správne údaje podľa platných pravidiel volebnej kampane.

Nevytvárajte fiktívne údaje o zadávateľovi, dodávateľovi ani transparentnom účte.

## 7. Kontakty

E-mail, telefón a Facebook odkaz sú placeholdery. Pred zverejnením ich nahraďte reálnymi kontaktmi.

## Kontrola pred zverejnením

- doplniť reálnu fotografiu kandidáta
- nahradiť kontaktné placeholdery
- doplniť a overiť zákonné informácie
- skontrolovať texty programu
- overiť, či web neobsahuje analytiku, tracking alebo formuláre, ak ich nechcete používať
