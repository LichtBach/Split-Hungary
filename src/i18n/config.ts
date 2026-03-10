import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  hu: {
    translation: {
      voiceAgent: {
        hero: {
          badge: "AI Hangügynökök",
          title: "Automatizáld az Ügyfélszolgálatot és a Leadminősítést AI Hangügynökökkel",
          subtitle: "Természetes Beszélgetések, Valós Időben, 24/7",
          description: "Intelligens hangügynökök, amelyek beszélnek, megértenek és valós időben válaszolnak magyarul. Hívások, időpontfoglalások és leadminősítés emberi pontossággal, 24/7 elérhetően.",
          realTime: "🔴 Valós Idejű Hanginterakció - Próbáld Ki Most!",
          tryDemo: "Beszélj az AI Ügynökkel",
          getStarted: "SZERETNÉM 50%-KAL CSÖKKENTENI A KÖLTSÉGEKET"
        },
        benefits: {
          title: "Miért Válaszd az AI Hangügynököket",
          subtitle: "Egyértelmű és mérhető előnyök vállalkozásod számára",
          available247: "Elérhető 24/7",
          available247Desc: "AI ügynököd soha nem tart szünetet, nincs hétvégéje, és azonnal válaszol minden hívásra, időponttól és naptól függetlenül.",
          romanian: "Magyar Anyanyelvi",
          romanianDesc: "Természetes beszélgetések magyarul, teljes kontextuális megértéssel, a helyi kultúrához és kifejezésekhez igazítva.",
          instant: "Azonnali Válasz",
          instantDesc: "Nulla várakozási idő ügyfeleid számára. Minden hívást azonnal fogadunk pontos és professzionális válaszokkal.",
          scalable: "Végtelenül Skálázható",
          scalableDesc: "Kezelj 1 vagy 1000 egyidejű hívást többletköltség vagy minőségromlás nélkül.",
          cta: "SZERETNÉM 50%-KAL CSÖKKENTENI A KÖLTSÉGEKET"
        },
        calculator: {
          badge: "Veszteség Kalkulátor",
          title: "Számold Ki, Mennyi Pénzt Veszítesz vs Takarítsz Meg",
          subtitle: "Nézd meg a drámai különbséget a jelenlegi költségek és az AI Hangügynökök megtakarításai között",
          numAgents: "Call Center Ügynökök Száma",
          avgSalary: "Bruttó Havi Fizetés (EUR)",
          totalCost: "Jelenlegi Összköltség",
          perMonth: "havonta 24/7 lefedettségért (3 műszak)",
          saveWithAI: "Megtakarítás AI Ügynökökkel",
          reduction: "75% csökkentés",
          yearlyEstimate: "Becsült éves megtakarítás"
        },
        faq: {
          title: "Gyakran Ismételt Kérdések",
          subtitle: "Minden, amit tudnod kell az AI hangügynökökről",
          items: [
            {
              question: "Hogyan működik az AI hangügynök valós időben?",
              answer: "AI hangügynökünk csúcstechnológiát használ a valós idejű hangfeldolgozáshoz. Amikor a hívó beszél, a rendszer azonnal leírja a hangot, fejlett AI segítségével feldolgozza a jelentést, és milliszekundumok alatt természetes választ generál. Minden valós időben történik, pont mint egy emberi beszélgetés."
            },
            {
              question: "Meg tudja érteni a különböző magyar nyelvjárásokat?",
              answer: "Igen! Ügynökünk kifejezetten magyar nyelvre van betanítva, és képes megérteni különböző akcentusokat, regionális nyelvjárásokat és beszédstílusokat. A rendszer folyamatosan fejlődik minden beszélgetésből a maximális pontosság érdekében."
            },
            {
              question: "Integrálható a meglévő rendszereimmel?",
              answer: "Természetesen! Az AI hangügynök könnyen integrálható a legtöbb platformmal: CRM-ek (Salesforce, HubSpot, Zoho), naptárak (Google Calendar, Outlook), email, és bármely rendszer API-kon vagy webhookokon keresztül. Az igényeidnek megfelelő specifikus integrációkat konfigurálunk."
            },
            {
              question: "Mennyibe kerül egy AI hangügynök bevezetése?",
              answer: "A költségek a volumentől és a funkciókól függenek. Legtöbb ügyfelünk 60-80%-ot takarít meg a jelenlegi call center költségekből. Rugalmas csomagokat kínálunk egyszerű megoldásoktól teljes vállalati rendszerekig. Lépj kapcsolatba velünk személyre szabott ajánlatért."
            },
            {
              question: "Mennyi időbe telik a bevezetés?",
              answer: "Egy alapvető implementáció 1-2 hét alatt elkészülhet. Ez magában foglalja az ügynök konfigurálását, az egyedi eseteidre való betanítást, a szükséges integrációkat és a tesztelést. Összetettebb implementációk több integrációval 3-4 hetet vehetnek igénybe."
            },
            {
              question: "Kipróbálhatom az ügynököt az elköteleződés előtt?",
              answer: "Igen! Kipróbálhatod demo ügynökünket közvetlenül ezen az oldalon, hogy működés közben lásd a képességeket. Személyre szabott bemutatóért, amely kifejezetten a te felhasználási esetedre van konfigurálva, lépj kapcsolatba velünk és privát demót szervezünk."
            }
          ]
        },
        cta: {
          button: "SZERETNÉM 50%-KAL CSÖKKENTENI A KÖLTSÉGEKET"
        }
      },
      founders: {
        title: "Ismerd Meg az Alapítókat",
        subtitle: "Az elmék a Split Agency AI-alapú sikere mögött",
        scheduleCall: "SZERETNÉM 50%-KAL CSÖKKENTENI A KÖLTSÉGEKET",
        workWithFounders: "Szeretnél közvetlenül az alapítóinkkal dolgozni?",
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
          title: "Találkozó Ütemezése",
          description: "Válassz kényelmes dátumot és időpontot személyre szabott demóhoz"
        },
        winWin: {
          title: "Garantált Win-Win",
          subtitle: "Az Automatizálás Garantál Neked 100%-os Jövedelmező Hozamot",
          description: "Nézd meg, miért WIN-WIN neked és vállalkozásodnak",
          you: {
            title: "TE NYERSZ",
            subtitle: "Vállalkozás Tulajdonos",
            items: [
              {
                title: "Garantált Pozitív ROI",
                description: "A megtakarítások mindig meghaladják a befektetést"
              },
              {
                title: "Fizetsz az Eredményekért",
                description: "Nem a ledolgozott órákért, hanem a létrehozott értékért"
              },
              {
                title: "Nulla Kockázat",
                description: "Értékalapú árképzés, nem a befektetett időre"
              },
              {
                title: "Skálázható Vállalkozás",
                description: "Növekedj anélkül, hogy több embert kellene felvenned"
              }
            ]
          },
          we: {
            title: "MI NYERÜNK",
            subtitle: "AI Automatizációs Ügynökség",
            items: [
              {
                title: "Hosszú Távú Partnerség",
                description: "Elégedett ügyfelek = folyamatos együttműködések"
              },
              {
                title: "Kiváló Hírnév",
                description: "Ajánlások és referenciák tőled"
              },
              {
                title: "Sikertörténetek",
                description: "Eredményeid lesznek a portfóliónk"
              },
              {
                title: "Együtt Növekedés",
                description: "A vállalkozásod nő = a vállalkozásunk nő"
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
                "Garantált pozitív ROI az 1. hónaptól",
                "Motiváltak vagyunk gyorsan szállítani",
                "A kockázat igazságosan van elosztva"
              ],
              result: "Eredmény: WIN-WIN 🎉"
            }
          },
          guarantee: {
            title: "Pozitív ROI Garanciánk",
            description: "Árainkat a megtakarítások és az általunk generált érték alapján határozzuk meg. Ha nem takarítsz meg többet, mint amennyit befektetsz, nem volt jó üzlet.",
            stats: [
              { value: "100%", label: "Garantált Pozitív ROI" },
              { value: "30 nap", label: "Átlagos Implementációs Idő" },
              { value: "75%", label: "Átlagos Költségcsökkentés" }
            ],
            footer: "A te sikered = A mi sikerünk"
          }
        },
        caseStudy: {
          badge: "Esettanulmány",
          title: "Valós Eredmények, Valós Megtakarítások",
          subtitle: "Fedezd fel, hogyan segítünk vállalkozásoknak növekedni AI-val",
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
            system: "AI Hang Rendszer",
            availability: "Elérhető 24/7/365",
            subscription: "AI Előfizetés:",
            subscriptionCost: "€600/hó",
            totalMonthly: "Havi Összesen:",
            totalCost: "€600",
            benefit1: "Elérhető 24/7",
            benefit2: "Nincs szabadnap",
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
            description: "A 2 ügynök túlterhelt volt és nem tudott válaszolni több száz telefonhívásra. Nem volt termékismeretük, nem voltak érdekeltek a munkában, és az ügyfelek frusztráltak voltak, mert senki sem válaszolt a telefonra 18:00 után és hétvégén."
          },
          solution: {
            title: "A Megoldás",
            description: "Ez a probléma megoldódott. Most több szabadidejük van és egy jobb ügyfélszolgálati rendszer, amely valós időben tud termékinfókat szerezni és segíteni az ügyfeleknek minden igényükben."
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
