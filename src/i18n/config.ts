import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  hu: {
    translation: {
      voiceAgent: {
        hero: {
          badge: "AI E-kereskedelmi Automatizálás",
          painQuestion: "Elveszíted a vásárlóid, mert senki nem válaszol nekik?",
          title: "AI Ügyfélszolgálat a Webshopodhoz – 30 Nap Ingyenes Próba",
          subtitle: "Automatizáld a rendeléskövetést, terméktanácsadást és elhagyott kosár visszaszerzést – 24/7, magyarul.",
          painPoints: [
            "Vásárlók éjjel kérdeznek, de nincs ki válaszoljon",
            "Elhagyott kosarak = elveszett bevétel minden nap",
            "Ügyfélszolgálatos fizetések emésztik a profitot"
          ],
          socialProof: "E-kereskedelmi vállalkozások már használják",
          realTime: "Valós Idejű AI Ügyfélszolgálat – Próbáld Ki Most!",
          tryDemo: "Beszélj az AI Ügynökkel",
          getStarted: "INGYENES 30 NAPOS PRÓBA"
        },
        painPoints: {
          badge: "Ismered ezeket a problémákat?",
          title: "A Webshopod Pénzt Veszít Minden Percben",
          subtitle: "Ezek a leggyakoribb problémák, amik miatt e-kereskedelmi vállalkozások bevételt veszítenek",
          items: [
            {
              stat: "68%",
              statLabel: "elhagyott kosár arány",
              title: "A vásárlók kérdés nélkül távoznak",
              description: "Amikor egy vásárlónak kérdése van a méretről, szállításról vagy visszaküldésről – és nincs azonnali válasz – egyszerűen bezárja az oldalt és a konkurenciánál vásárol."
            },
            {
              stat: "45%",
              statLabel: "elveszett eladás 18:00 után",
              title: "Munkaidő után nincs ügyfélszolgálat",
              description: "A vásárlók többsége este és hétvégén böngészik. Ha ilyenkor nincs ki válaszoljon, minden második potenciális vásárlót elveszíted."
            },
            {
              stat: "€2-4K",
              statLabel: "havi ügyfélszolgálati költség",
              title: "Az ügyfélszolgálat drága és nem skálázható",
              description: "Egy-két alkalmazott nem tud 24/7 dolgozni, betegszabadság és fluktuáció miatt folyamatosan új embereket kell betanítani."
            }
          ]
        },
        benefits: {
          title: "Így Oldja Meg az AI Ezeket a Problémákat",
          subtitle: "Minden fenti problémára van megoldásunk – és 30 napig ingyen kipróbálhatod",
          available247: "0-24 Ügyfélszolgálat",
          available247Pain: "Probléma: Munkaidő után senki nem válaszol",
          available247Desc: "Az AI ügynök éjjel-nappal válaszol – rendeléskövetés, termékkérdések, visszaküldés. Soha nem beteg, soha nem megy szabadságra.",
          instant: "Azonnali Válasz <5mp",
          instantPain: "Probléma: Vásárlók várakoznak, majd távoznak",
          instantDesc: "Minden megkeresésre 5 másodpercen belül válaszol. Termékinformáció, méret, szállítás, készlet – azonnal, pontosan.",
          scalable: "75% Költségcsökkentés",
          scalablePain: "Probléma: Drága ügyfélszolgálat, alacsony ROI",
          scalableDesc: "Kezelj 10.000 egyidejű megkeresést egyetlen AI ügynökkel. Black Friday, karácsony – többletköltség nélkül.",
          cta: "INGYENES 30 NAPOS PRÓBA"
        },
        calculator: {
          badge: "Mennyit Takaríthatsz Meg?",
          title: "Számold Ki a Megtakarításodat 2 Kattintással",
          subtitle: "Írd be az aktuális ügyfélszolgálati költségeidet és nézd meg az AI megtakarítást",
          numAgents: "Ügyfélszolgálati Munkatársak Száma",
          avgSalary: "Bruttó Havi Fizetés (EUR)",
          totalCost: "Jelenlegi Havi Költséged",
          perMonth: "havonta 24/7 lefedettségért (3 műszak)",
          saveWithAI: "Ennyit Takaríthatsz Meg AI-val",
          reduction: "75% csökkentés az első hónaptól",
          yearlyEstimate: "Becsült éves megtakarítás"
        },
        faq: {
          title: "Gyakran Ismételt Kérdések",
          subtitle: "Minden, amit tudnod kell mielőtt elkezded a 30 napos ingyenes próbát",
          items: [
            {
              question: "Hogyan segít az AI a webshopomnál?",
              answer: "Az AI ügynök automatikusan válaszol a vásárlói kérdésekre: termékinformációk, rendeléskövetés, szállítási státusz, méretezési tanácsok, visszaküldési folyamat. Valós időben hozzáfér a termékkatalógusodhoz és a rendelési adatbázisodhoz, így mindig pontos információt ad."
            },
            {
              question: "Integrálható a Shopify, WooCommerce vagy más platformmal?",
              answer: "Igen! Zökkenőmentesen integrálódik a legnépszerűbb e-kereskedelmi platformokkal: Shopify, WooCommerce, Magento, PrestaShop és egyedi webshopokkal. Automatikusan szinkronizálja a termékkatalógust, készletinformációkat és rendelési adatokat."
            },
            {
              question: "Hogyan kezeli az elhagyott kosarakat?",
              answer: "Az AI automatikusan felismeri az elhagyott kosarakat és proaktívan felveszi a kapcsolatot a vásárlókkal. Személyre szabott ajánlatokat küld, válaszol a vásárlási akadályokra és segít befejezni a rendelést – akár 25-35%-kal növelve a konverziós arányt."
            },
            {
              question: "Tud termékajánlásokat adni?",
              answer: "Természetesen! A vásárlási előzmények és a böngészési szokások alapján az AI személyre szabott termékajánlásokat tesz. Cross-selling és up-selling javaslatokkal növeli az átlagos kosárértéket."
            },
            {
              question: "Hogyan működik a 30 napos ingyenes próba?",
              answer: "Az első 30 napban teljes funkcionalitással használhatod az AI ügynököt a webshopodban – teljesen ingyen. Beállítjuk, integráljuk a rendszereddel és betanítjuk a termékeidre. Ha nem vagy elégedett, egyszerűen lemondod, kötelezettség nélkül."
            },
            {
              question: "Mennyi időbe telik a bevezetés?",
              answer: "Egy átlagos webshop esetén 5-7 munkanap alatt élesben működik az AI ügynök. Ez magában foglalja a platform integrációt, termékkatalógus importálást, a válaszok finomhangolását és a tesztelést."
            }
          ]
        },
        cta: {
          button: "INGYENES 30 NAPOS PRÓBA"
        }
      },
      founders: {
        title: "Ismerd Meg az Alapítókat",
        subtitle: "E-kereskedelmi AI automatizálási szakértők, akik segítenek a webshopodnak növekedni",
        scheduleCall: "INGYENES 30 NAPOS PRÓBA",
        workWithFounders: "Szeretnél közvetlenül az alapítóinkkal beszélni?",
        callButton: "Hívás",
        emailButton: "Email",
        profiles: [
          {
            name: "Lázár Hunor",
            role: "Társalapító",
            bio: "5 év webfejlesztés, adatmarketing, munkafolyamat-optimalizálás, üzletfejlesztés"
          },
          {
            name: "Both Zoltán",
            role: "Társalapító",
            bio: "AI automatizálási szakértő, digitális stratéga & 5 év webfejlesztés"
          }
        ]
      },
      demoForm: {
        title: "Kérj Személyre Szabott Demót",
        description: "Töltsd ki az alábbi űrlapot, hogy személyre szabott demót kapj AI megoldásunkról",
        email: "Email",
        firstName: "Keresztnév",
        firstNamePlaceholder: "A keresztneved",
        companyName: "Cégnév",
        companyNamePlaceholder: "A céged neve",
        industry: "Iparág",
        industryPlaceholder: "Válassz iparágat",
        industries: {
          ecommerce: "E-kereskedelem",
          healthcare: "Egészségügy",
          education: "Oktatás",
          realestate: "Ingatlan",
          hospitality: "Vendéglátás",
          finance: "Pénzügy",
          technology: "Technológia",
          retail: "Kiskereskedelem",
          other: "Egyéb"
        },
        phone: "Telefonszám",
        phonePlaceholder: "+36 XX XXX XXXX",
        specialRequests: "Speciális kérések az AI demóhoz (Opcionális)",
        specialRequestsPlaceholder: "Hagyd üresen, ha nem vagy biztos...",
        submit: "Kérés Elküldése",
        submitting: "Küldés...",
        cancel: "Mégse",
        successTitle: "Siker!",
        successMessage: "Kérésed sikeresen elküldve. Hamarosan felvesszük veled a kapcsolatot!",
        errorTitle: "Hiba",
        errorMessage: "Hiba történt az űrlap elküldésekor. Kérlek próbáld újra.",
      },
      newHomepage: {
        calendly: {
          title: "Indítsd El a 30 Napos Ingyenes Próbát",
          description: "Foglalj egy 15 perces hívást és 5-7 napon belül élesben működik az AI a webshopodban"
        },
        winWin: {
          title: "Garantált Win-Win",
          subtitle: "Az E-kereskedelmi Automatizálás Garantálja a Pozitív ROI-t",
          description: "Nézd meg, miért WIN-WIN neked és a webshopodnak",
          you: {
            title: "TE NYERSZ",
            subtitle: "Webshop Tulajdonos",
            items: [
              {
                title: "30 Nap Ingyen",
                description: "Próbáld ki kockázat nélkül, fizess csak ha elégedett vagy"
              },
              {
                title: "Garantált Pozitív ROI",
                description: "A megtakarítások mindig meghaladják a befektetést"
              },
              {
                title: "Több Eladás, Kevesebb Munka",
                description: "AI kezeli a kérdéseket, te a növekedésre koncentrálsz"
              },
              {
                title: "Skálázható Megoldás",
                description: "Black Friday? Karácsony? Az AI nem fárad el"
              }
            ]
          },
          we: {
            title: "MI NYERÜNK",
            subtitle: "AI Automatizációs Ügynökség",
            items: [
              {
                title: "Hosszú Távú Partnerség",
                description: "Elégedett webshopok = folyamatos együttműködések"
              },
              {
                title: "Kiváló Hírnév",
                description: "Ajánlások és referenciák tőled"
              },
              {
                title: "Sikertörténetek",
                description: "Az eredményeid lesznek a portfóliónk"
              },
              {
                title: "Együtt Növekedés",
                description: "A webshopod nő = a vállalkozásunk nő"
              }
            ]
          },
          comparison: {
            title: "Miért Jobb az Értékalapú Árképzés",
            subtitle: "Árképzési modellünk garantálja sikeredet, nem csak a kiszámlázott órákat",
            old: {
              title: "RÉGI",
              subtitle: "Óraalapú Árképzés",
              items: [
                "Fizetsz az időért, nem az eredményekért",
                "Kiszámíthatatlan és változó költségek",
                "Nincs ROI garancia",
                "Az ügynökség többet keres, ha tovább tart",
                "Te viseled az összes pénzügyi kockázatot"
              ],
              result: "Eredmény: Win-LOSE"
            },
            new: {
              title: "ÚJ",
              subtitle: "Értékalapú Árképzés",
              items: [
                "Fizetsz a mérhető eredményekért",
                "Fix költség elején meghatározva",
                "30 nap ingyenes próba a bizalom építésére",
                "Motiváltak vagyunk gyorsan szállítani",
                "A kockázat igazságosan van elosztva"
              ],
              result: "Eredmény: WIN-WIN"
            }
          },
          guarantee: {
            title: "Kockázatmentes Garancia",
            description: "30 nap ingyenes próba. Ha nem vagy elégedett, egyszerűen lemondod – semmilyen kötelezettség nélkül. Utána az árak a megtakarítások alapján kerülnek meghatározásra.",
            stats: [
              { value: "30 nap", label: "Ingyenes Próba" },
              { value: "5-7 nap", label: "Bevezetési Idő" },
              { value: "75%", label: "Átlagos Költségcsökkentés" }
            ],
            footer: "A te sikered = A mi sikerünk"
          }
        },
        caseStudy: {
          badge: "Esettanulmány",
          title: "Valós Eredmények, Valós Megtakarítások",
          subtitle: "Fedezd fel, hogyan segítettünk egy e-kereskedelmi boltnak 80%-ot megtakarítani",
          company: "DM living.",
          industry: "E-kereskedelmi bolt",
          before: {
            title: "Előtte",
            subtitle: "Hagyományos Módszer",
            staff: "2 Támogatási Operátor",
            coverage: "24/7/365 Lefedettségért",
            operator1: "1. Operátor (1. Műszak)",
            cost1: "€1,000/hó",
            operator2: "2. Operátor (2. Műszak)",
            cost2: "€1,000/hó",
            operator3: "3. Operátor (Hétvége/Éjszaka)",
            cost3: "€1,000/hó",
            coverageNote: "* Lefedettség csak 9 óra/nap",
            totalMonthly: "Havi Összesen:",
            totalCost: "€3,000",
            limit1: "Lefedettség csak 9 óra/nap",
            limit2: "Hétvégén nincs támogatás",
            limit3: "Válaszidő: 5-15 perc"
          },
          after: {
            badge: "AI-val",
            title: "Utána",
            subtitle: "AI Automatizációval",
            system: "AI Ügyfélszolgálat",
            availability: "Elérhető 24/7/365",
            subscription: "AI Előfizetés:",
            subscriptionCost: "€1000/hó",
            totalMonthly: "Havi Összesen:",
            totalCost: "€1000",
            benefit1: "Elérhető 24/7",
            benefit2: "Nincs szabadnap, nincs betegszabadság",
            benefit3: "Azonnali válasz (<5 mp)"
          },
          savings: {
            monthly: "€2,400",
            monthlyLabel: "Havi Megtakarítás",
            reduction: "80%",
            reductionLabel: "Költségcsökkentés",
            yearly: "€28,800",
            yearlyLabel: "Éves Megtakarítás"
          },
          problem: {
            title: "A Probléma",
            description: "A 2 ügynök túlterhelt volt – nem tudtak válaszolni a vásárlói kérdésekre. Nem ismerték a termékeket, nem voltak motiváltak, és 18:00 után meg hétvégén senki sem volt elérhető. Az ügyfelek a konkurenciánál vásároltak."
          },
          solution: {
            title: "A Megoldás",
            description: "Az AI ügynök átvette az ügyfélszolgálatot: azonnali válaszok, pontos termékinformációk, 24/7 elérhetőség. A tulajdonosnak több szabadideje lett, a vásárlók elégedettebbek és a költségek 80%-kal csökkentek."
          }
        },
        footer: {
          legal: {
            title: "Jogi",
            items: [
              "Felhasználási Feltételek",
              "Adatvédelmi Irányelvek"
            ]
          },
          copyright: "© 2025 Split Agency. Minden jog fenntartva. | Budapest, Magyarország"
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'hu',
    fallbackLng: 'hu',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
