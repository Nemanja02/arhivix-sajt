export const blogPosts = {
  'elektronske-fakture': {
    title: 'Elektronske fakture u Srbiji: SEF sistem, obaveze i kako Arhivix pomaže',
    slug: 'elektronske-fakture',
    excerpt: 'Kompletni vodič kroz sistem elektronskih faktura (SEF) u Srbiji. Ko mora da ga koristi, kako funkcioniše, šta se menja 2026. i kako Arhivix pojednostavljuje ceo proces.',
    date: '2026-01-20',
    author: 'Arhivix Tim',
    image: '/images/blog/elektronsko-arhiviranje.jpg',
    readingTime: '10 min',
    content: `
      <h2>Uvod: Elektronsko fakturisanje u Srbiji</h2>
      <p>Srbija je 2022. godine pokrenula Sistem Elektronskih Faktura (SEF) kao centralizovanu državnu platformu za izdavanje, slanje, primanje i čuvanje elektronskih faktura. Od januara 2023. godine, korišćenje SEF-a je obavezno za sve PDV obveznike u privatnom sektoru.</p>
      <p>Cilj sistema je potpuna digitalizacija fakturisanja, smanjenje poreskih zloupotreba i automatizacija poslovnih procesa. Umesto papirnih faktura, PDF-ova ili mejlova, sve fakture prolaze kroz jedinstven državni sistem u strukturiranom XML formatu.</p>

      <h2>Šta je SEF (Sistem Elektronskih Faktura)?</h2>
      <p>SEF je centralna platforma Ministarstva finansija Republike Srbije za elektronsko fakturisanje. Razvijen je kao obavezan sistem kroz koji prolaze sve fakture između poslovnih subjekata.</p>
      <p>Ključne karakteristike SEF sistema:</p>
      <ul>
        <li><strong>Strukturirani XML format</strong> koji omogućava automatsku obradu</li>
        <li><strong>Jedinstveni identifikacioni broj</strong> za svaku fakturu</li>
        <li><strong>Automatska verifikacija</strong> tačnosti podataka</li>
        <li><strong>Čuvanje faktura minimalno 10 godina</strong> (5 godina za ne-PDV obveznike)</li>
        <li><strong>Elektronski potpis ili sertifikat</strong> za registraciju i pristup</li>
      </ul>

      <h2>Ko mora da koristi SEF?</h2>
      <p>Obaveza korišćenja SEF sistema zavisi od tipa subjekta:</p>

      <h3>Obavezno od januara 2023:</h3>
      <ul>
        <li><strong>Svi PDV obveznici</strong> u privatnom sektoru (B2B transakcije)</li>
        <li><strong>Subjekti javnog sektora</strong> (državne institucije, javna preduzeća)</li>
        <li><strong>Privatni sektor prema javnom sektoru</strong> (B2G transakcije)</li>
      </ul>

      <h3>Takođe obavezno za:</h3>
      <ul>
        <li>Ne-PDV obveznike koji fakturišu javnom sektoru</li>
        <li>Sve subjekte koji primaju fakture od PDV obveznika</li>
      </ul>

      <p>Jedini izuzetak su fizička lica koja ne obavljaju poslovnu delatnost i mali preduzetnici koji nisu u sistemu PDV-a i ne posluju sa javnim sektorom.</p>

      <h2>Kako funkcioniše SEF u praksi?</h2>
      <p>Proces elektronskog fakturisanja kroz SEF izgleda ovako:</p>
      <ol>
        <li><strong>Kreiranje fakture</strong> u vašem računovodstvenom softveru ili direktno na SEF portalu</li>
        <li><strong>Slanje kroz SEF</strong> u propisanom XML formatu</li>
        <li><strong>Automatska provera</strong> podataka od strane sistema (PIB, iznos, PDV)</li>
        <li><strong>Dodela jedinstvenog broja</strong> i datuma izdavanja</li>
        <li><strong>Prijem od strane kupca</strong> kroz SEF sistem</li>
        <li><strong>Prihvatanje ili odbijanje</strong> fakture od strane primaoca</li>
        <li><strong>Trajno čuvanje</strong> u sistemu (minimum 10 godina)</li>
      </ol>

      <h2>Rokovi za primanje i prihvatanje faktura</h2>
      <table>
        <thead>
          <tr>
            <th>Akcija</th>
            <th>Javni sektor</th>
            <th>Privatni sektor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rok za prihvatanje/odbijanje</td>
            <td>15 dana</td>
            <td>15 dana</td>
          </tr>
          <tr>
            <td>Ako ne reaguje</td>
            <td>Smatra se prihvaćenom</td>
            <td>Smatra se odbijenom</td>
          </tr>
          <tr>
            <td>Rok za evidentiranje PDV-a</td>
            <td>12 dana od kraja poreskog perioda</td>
            <td>12 dana od kraja poreskog perioda</td>
          </tr>
        </tbody>
      </table>

      <h2>Šta se menja od 2026. godine?</h2>
      <p>Zakon o elektronskom fakturisanju je izmenjen krajem 2025. godine, a najvažnije promene stupaju na snagu u toku 2026:</p>

      <h3>Od marta 2026:</h3>
      <ul>
        <li><strong>Obavezni interni računi</strong> generisani direktno u SEF-u (za postojeće korisnike sistema)</li>
        <li><strong>Elektronsko fakturisanje za maloprodaju</strong> u određenim slučajevima</li>
        <li><strong>B2G elektronske otpremnice</strong> postaju obavezne za privatni sektor</li>
      </ul>

      <h3>Od kraja 2026. / početka 2027:</h3>
      <ul>
        <li><strong>Pre-popunjene PDV prijave</strong> na osnovu podataka iz SEF-a</li>
        <li>Automatsko usaglašavanje ulaznih i izlaznih faktura</li>
        <li>Veća automatizacija poreskih obaveza</li>
      </ul>

      <h2>Prednosti elektronskog fakturisanja</h2>
      <p>Prelazak na elektronske fakture donosi konkretne koristi:</p>
      <ul>
        <li><strong>Ušteda do 80% troškova</strong> u poređenju sa papirnim fakturisanjem</li>
        <li><strong>Eliminacija grešaka</strong> pri ručnom unosu podataka</li>
        <li><strong>Brži proces naplate</strong> jer faktura stiže trenutno</li>
        <li><strong>Automatsko čuvanje</strong> bez fizičkog prostora za arhivu</li>
        <li><strong>Lakša kontrola</strong> i pregled svih izdatih i primljenih faktura</li>
        <li><strong>Usklađenost sa zakonom</strong> bez dodatnog administrativnog posla</li>
      </ul>

      <h2>Kazne za nepoštovanje obaveza</h2>
      <p>Propuštanje obaveza vezanih za elektronsko fakturisanje povlači kazne:</p>
      <blockquote>
        <p>Kazne za pravna lica: <strong>200.000 do 2.000.000 RSD</strong><br>Za preduzetnike: <strong>50.000 do 500.000 RSD</strong><br>Za odgovorno lice: <strong>50.000 do 150.000 RSD</strong></p>
      </blockquote>
      <p>Kazne se primenjuju za: neizdavanje e-fakture u propisanom roku, neevidentiranje u SEF sistemu, neprihvatanje fakture u zakonskom roku, i neusklađenost sa XML formatom.</p>

      <h2>Kako Arhivix pomaže sa elektronskim fakturama?</h2>
      <p>Arhivix je dizajniran da vam maksimalno pojednostavi rad sa elektronskim fakturama i uskladi vaše poslovanje sa zakonom. Evo kako:</p>

      <h3>Automatsko arhiviranje e-faktura</h3>
      <p>Svaka elektronska faktura koja prođe kroz vaš sistem se automatski arhivira u Arhivix. Bez ručnog prebacivanja fajlova, bez kopiranja. Faktura je sačuvana, organizovana i dostupna kad god vam zatreba.</p>

      <h3>Pretraga prirodnim jezikom</h3>
      <p>Zaboravite na kopanje po folderima. Ukucajte "faktura od dobavljača X iz marta" i Arhivix AI će pronaći tačan dokument za sekunde. Sistem razume kontekst i sadržaj svake fakture.</p>

      <h3>Automatsko tagovanje i kategorijacija</h3>
      <p>AI automatski prepoznaje tip fakture, dobavljača, iznos, datum i dodeljuje odgovarajuće tagove. Bez vašeg učešća, fakture su organizovane od prvog trenutka.</p>

      <h3>Zakonska usklađenost</h3>
      <p>Arhivix čuva fakture u skladu sa zakonskim zahtevima za minimalno 10 godina. Skladištenje na dva AWS evropska regiona, AES-256 enkripcija, kompletna revizijska traga.</p>

      <h3>Integracija sa arhivskom knjigom</h3>
      <p>Fakture se automatski evidentiraju u digitalnoj arhivskoj knjizi. Kada inspekcija zatraži uvid, sve je spremno u jednom kliku.</p>

      <h2>Zaključak</h2>
      <p>Elektronsko fakturisanje u Srbiji više nije opcija, već obaveza. SEF sistem donosi transparentnost i efikasnost, ali zahteva i tehničku pripremu. Sa Arhivix-om, ceo proces je automatizovan: od prijema fakture, preko arhiviranja, do pretrage i inspekcijskog izveštavanja.</p>
      <p><strong>Umesto da se prilagođavate sistemu, neka se sistem prilagodi vama. Isprobajte Arhivix besplatno 14 dana.</strong></p>
    `
  },
  'elektronske-otpremnice': {
    title: 'Elektronske otpremnice u Srbiji: šta znači novi zakon i kako utiče na firme od 2026. godine',
    slug: 'elektronske-otpremnice',
    excerpt: 'Jasno objašnjeno šta su elektronske otpremnice, koje su nove obaveze od 2026, ko ih mora slati i šta to znači za firme, prevoznike i građane.',
    date: '2025-12-15',
    author: 'Arhivix Tim',
    image: '/images/blog/elektronske-otpremnice.jpg',
    readingTime: '8 min',
    content: `
      <h2>Uvod: Zašto se uvode elektronske otpremnice?</h2>
      <p>Od 2026. godine u Srbiji počinje postepena primena Zakona o elektronskim otpremnicama. Cilj je da se kretanje robe evidentira digitalno, brže i preciznije, uz potpunu automatizaciju praćenja transporta. Umesto papira, pečata i ručnog ispunjavanja, svaka otprema robe biće praćena elektronskim dokumentom koji prolazi kroz centralni državni sistem.</p>
      <p>Ovo je jedna od najvećih digitalizacija u poslovanju kod nas i direktno utiče na gotovo sve firme koje šalju, primaju ili transportuju robu.</p>

      <h2>Šta je elektronska otpremnica?</h2>
      <p>Elektronska otpremnica je digitalni dokument koji prati robu tokom transporta. Mora biti napravljena, poslata i primljena kroz zvanični državni sistem, u strukturiranom formatu koji omogućava automatsku obradu.</p>
      <p>Sadrži ključne podatke, kao što su:</p>
      <ul>
        <li>Ko šalje robu</li>
        <li>Ko robu prima</li>
        <li>Šta se šalje i u kojoj količini</li>
        <li>Vreme i mesto polaska</li>
        <li>Vreme i mesto isporuke</li>
        <li>Ko je prevoznik</li>
        <li>QR kod za verifikaciju</li>
      </ul>
      <p>Cilj sistema je da obezbedi transparentno i uvek dostupno praćenje kretanja robe, bez manipulacija i grešaka.</p>

      <h2>Ko je obavezan da šalje elektronske otpremnice?</h2>
      <p>Obavezu imaju:</p>
      <ul>
        <li><strong>Subjekti privatnog sektora</strong> (PDV obveznici i firme koje učestvuju u otpremi dobara)</li>
        <li><strong>Subjekti javnog sektora</strong></li>
        <li><strong>Operatori prevoza</strong> (kada vode evidenciju u ime klijenta)</li>
        <li><strong>Prevoznici</strong> (za preuzimanje i predstavljanje otpremnice u nadzoru)</li>
      </ul>
      <p>Fizička lica koja ne obavljaju delatnost nisu obuhvaćena zakonom.</p>

      <h2>Od kada obaveze važe?</h2>
      <p>Prema zakonu i izmenama:</p>
      <ul>
        <li>Za javni sektor – od <strong>1. januara 2026.</strong></li>
        <li>Za privatni sektor kada su u pitanju akcizni proizvodi – od <strong>1. januara 2026.</strong></li>
        <li>Za privatni sektor u celokupnom prometu robe – od <strong>1. oktobra 2027.</strong></li>
      </ul>
      <p>Dakle, sve firme u Srbiji moraće da pređu na sistem elektronskih otpremnica najkasnije do oktobra 2027.</p>

      <h2>Kada elektronska otpremnica nije potrebna?</h2>
      <p>Zakon predviđa više izuzetaka. Otpremnica nije potrebna u situacijama kao što su:</p>
      <ul>
        <li>Isporuka vode, struje, gasa i sličnih dobara kroz mreže</li>
        <li>Promet na malo (fiskalni račun je dovoljan)</li>
        <li>Isporuke unutar istog javnog subjekta</li>
        <li>Vraćanje robe istim prevoznim sredstvom</li>
        <li>Isporuke u okviru odobrenih kliničkih ispitivanja</li>
      </ul>
      <p>Ovo značajno olakšava rad trgovinama na malo i delovima javnog sistema.</p>

      <h2>Kako izgleda proces u praksi?</h2>
      <ol>
        <li><strong>Pošiljalac</strong> kreira elektronsku otpremnicu u sistemu.</li>
        <li><strong>Prevoznik</strong> preuzima otpremnicu preko sistema ili dobija štampani QR prikaz ako nije korisnik sistema.</li>
        <li><strong>Primalac</strong> potvrđuje fizički prijem robe najkasnije 3 radna dana od prijema.</li>
        <li>Zatim prihvata ili odbija otpremnicu u roku od 8 dana.</li>
      </ol>
      <p>Ako primalac ne pošalje prijemnicu:</p>
      <ul>
        <li>Za javni sektor – smatra se da je <strong>prihvatio</strong> robu</li>
        <li>Za privatni sektor – smatra se da je robu <strong>odbio</strong></li>
      </ul>
      <p>Ovo osigurava da se prolazak robe evidentira bez kašnjenja i da svaka strana ima jasnu odgovornost.</p>

      <h2>Šta ako sistem ne radi ili nema interneta?</h2>
      <p>Zakon predviđa i tu mogućnost: firma može privremeno da koristi papirnu otpremnicu sa hologramskom nalepnicom koju izdaje Zavod za izradu novčanica.</p>
      <p>Kada se uspostavi internet ili sistem, firma je dužna da unese sve podatke u sistem najkasnije prvog narednog radnog dana.</p>

      <h2>Šta ovo znači za firme u praksi?</h2>

      <h3>1. Manje papira, više digitalnog poslovanja</h3>
      <p>Papirne otpremnice se zamenjuju automatskim sistemom. Firmama je potrebno tehničko prilagođavanje: softveri, obuka zaposlenih, pouzdana internet konekcija.</p>

      <h3>2. Jača kontrola i transparentnost</h3>
      <p>Sistem omogućava državi da u realnom vremenu prati promet robe. Ovo smanjuje mogućnosti za zloupotrebe, ali povećava odgovornost firmi.</p>

      <h3>3. Kazne za nepoštovanje obaveza</h3>
      <p>Kazne su predviđene za:</p>
      <ul>
        <li>Slanje otpremnice van propisanog roka</li>
        <li>Nepotvrđivanje prijema</li>
        <li>Zloupotrebu podataka</li>
      </ul>
      <blockquote>
        <p>Kazne za pravna lica: <strong>200.000 do 2.000.000 RSD</strong><br>Za preduzetnike: <strong>50.000 do 500.000 RSD</strong></p>
      </blockquote>

      <h3>4. Period prilagođavanja</h3>
      <p>Od 1. januara do 30. juna 2026. neće se kažnjavati greške u ispunjavanju podataka — ovo je period učenja i optimizacije procesa.</p>

      <h3>5. Jednostavnija kontrola i dokazivanje isporuke</h3>
      <p>Sve je digitalno arhivirano, lako dostupno, bez gubljenja papira i bez sporova oko toga da li je roba zaista isporučena.</p>

      <h2>Šta ovo znači za građane?</h2>
      <p>Iako zakon primarno utiče na firme, građani dobijaju nekoliko indirektnih koristi:</p>
      <ul>
        <li>Sigurniju i transparentniju isporuku</li>
        <li>Manje prostora za sivu ekonomiju</li>
        <li>Brže i pouzdanije procese nabavke i dostave</li>
        <li>Bolju zaštitu potrošača</li>
      </ul>
      <p>Građani koji nisu preduzetnici nemaju nikakve nove obaveze.</p>

      <h2>Kako Arhivix pomaže sa elektronskim otpremnicama?</h2>
      <p>Prelazak na elektronske otpremnice ne mora biti komplikovan. Arhivix vam pomaže da se pripremite i da od prvog dana budete usklađeni sa zakonom.</p>

      <h3>Automatsko arhiviranje otpremnica</h3>
      <p>Svaka elektronska otpremnica koju kreirate ili primite automatski se čuva u Arhivix sistemu. Bez ručnog prebacivanja, bez gubljenja dokumenata. Sve je na jednom mestu, organizovano i lako dostupno.</p>

      <h3>Praćenje statusa u realnom vremenu</h3>
      <p>Vidite tačno gde je svaka otpremnica: da li je poslata, da li je prevoznik preuzeo robu, da li je primalac potvrdio prijem. Kompletna istorija kretanja robe na jednom ekranu.</p>

      <h3>Povezivanje sa fakturama i arhivskom knjigom</h3>
      <p>Otpremnice se automatski povezuju sa odgovarajućim fakturama i evidentiraju u arhivskoj knjizi. Kada inspekcija zatraži dokumentaciju, imate sve spremno: otpremnicu, fakturu i evidenciju u arhivskoj knjizi.</p>

      <h3>AI pretraga</h3>
      <p>Pronađite bilo koju otpremnicu za sekunde. Ukucajte "otpremnica za firmu Jović Transport iz marta" i Arhivix AI će pronaći tačan dokument. Bez kopanja po folderima i fajlovima.</p>

      <h3>Usklađenost sa zakonom</h3>
      <p>Čuvanje na dva AWS evropska regiona, AES-256 enkripcija, vremenski žigovi. Sve što zakon zahteva, automatski obezbeđeno.</p>

      <h2>Zaključak</h2>
      <p>Elektronske otpremnice predstavljaju veliki korak u digitalizaciji poslovanja u Srbiji. Iako će prelazak zahtevati vreme i tehničku pripremu, dugoročno donose manje birokratije, manje grešaka i brže procese.</p>
      <p><strong>Sa Arhivix-om, ne morate da brinete o tehničkoj pripremi. Sistem je spreman za elektronske otpremnice od prvog dana. Isprobajte besplatno 14 dana.</strong></p>
    `
  },
  'arhivska-knjiga': {
    title: 'Unos Dokumentacije u Arhivsku Knjigu',
    slug: 'arhivska-knjiga',
    excerpt: 'Arhivska knjiga predstavlja ključni dokument za praćenje i arhiviranje poslovne dokumentacije.',
    date: '2025-11-20',
    author: 'Arhivix Tim',
    image: '/images/blog/arhivska-knjiga.jpg',
    readingTime: '6 min',
    content: `
      <h2>Vrste dokumentacije u arhivskoj knjizi</h2>
      <p>Arhivska knjiga je zbirka svih poslovnih dokumenata koji moraju biti sistematski evidentirani i sačuvani. Ovo uključuje:</p>
      <ul>
        <li><strong>Finansijske dokumente:</strong> Fakture, izvodi iz banke, ugovori sa dobavljačima i kupcima.</li>
        <li><strong>Radne i zaposlene dokumente:</strong> Ugovori o radu, prijave i odjave sa obaveza, izveštaji o radnom stažu.</li>
        <li><strong>Dokumentaciju o imovini:</strong> Ugovori o prodaji, kupovini, zakupima.</li>
      </ul>

      <h2>Period za koji se dokumentacija unosi</h2>
      <p>Dokumenti koji se unose u arhivsku knjigu moraju biti evidentirani za odgovarajući period, u skladu sa zakonskim normama:</p>
      <table>
        <thead>
          <tr>
            <th>Tip dokumentacije</th>
            <th>Period čuvanja</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Finansijska dokumentacija</td>
            <td>10 godina</td>
          </tr>
          <tr>
            <td>Radna dokumentacija</td>
            <td>50 godina ili duže</td>
          </tr>
          <tr>
            <td>Dokumentacija o imovini</td>
            <td>20 godina</td>
          </tr>
        </tbody>
      </table>

      <h2>Zašto je pravilno unesenje dokumentacije važno?</h2>
      <p>Pravilno unosenje dokumentacije u arhivsku knjigu omogućava:</p>
      <ul>
        <li>Lakši pristup informacijama i efikasnu organizaciju.</li>
        <li>Usklađenost sa zakonskim zahtevima.</li>
        <li>Jednostavnije rešavanje potencijalnih problema sa nadležnim arhivima.</li>
      </ul>

      <p>Uzimajući u obzir zakonske obaveze, korišćenje digitalnih alata poput <strong>Arhivix sistema</strong> omogućava jednostavno upravljanje dokumentima i lakše zadovoljavanje zakonskih normi za predaju arhivske knjige do 2026. godine.</p>
    `
  },
  'elektronsko-arhiviranje': {
    title: 'Elektronsko Arhiviranje',
    slug: 'elektronsko-arhiviranje',
    excerpt: 'Elektronsko arhiviranje dokumenata postaje sve važnije za poslovanje, posebno zbog novih zakonskih obaveza.',
    date: '2025-10-10',
    author: 'Arhivix Tim',
    image: '/images/blog/elektronsko-arhiviranje.jpg',
    readingTime: '7 min',
    content: `
      <p>Elektronsko arhiviranje dokumenata postaje sve važnije za poslovanje, posebno zbog novih zakonskih obaveza kao što je predaja arhivske knjige 2025. godine. Kako elektronsko arhiviranje postaje obavezno, ključno je da razumete razliku između elektronskih i digitalizovanih dokumenata.</p>

      <h2>Šta je elektronski dokument?</h2>
      <p>Elektronski dokument je zapis koji nastaje direktno u digitalnom formatu i može biti:</p>
      <ul>
        <li>Elektronska faktura</li>
        <li>Digitalno potpisani ugovor</li>
        <li>Dokument generisan u softverima za elektronsko arhiviranje</li>
      </ul>
      <p>Prema Zakonu o elektronskom dokumentu, elektronskoj identifikaciji i uslugama od poverenja u elektronskom poslovanju, elektronski dokument je definisan kao <em>"skup podataka sastavljen od slova, brojeva, simbola, grafičkih, zvučnih i video materijala, u elektronskom obliku"</em>.</p>

      <h3>Prednosti elektronskog arhiviranja dokumenata:</h3>
      <ul>
        <li>Smanjeni troškovi papira i štampe</li>
        <li>Brza pretraga i deljenje</li>
        <li>Veća pravna sigurnost uz digitalni potpis i šifrovanje</li>
      </ul>

      <h2>Šta je digitalizovan dokument?</h2>
      <p>Digitalizovani dokument je papirni dokument pretvoren u digitalni format. To su, na primer, skenirane fakture ili digitalne kopije ugovora.</p>

      <h3>Važnost digitalizacije za obavezno arhiviranje dokumenata:</h3>
      <p>Digitalizacija omogućava bolju organizaciju arhivske građe i olakšava ispunjenje zakonskih obaveza, kao što je predaja arhivske knjige.</p>

      <h2>Ključne razlike između elektronskih i digitalizovanih dokumenata</h2>
      <table>
        <thead>
          <tr>
            <th>Karakteristika</th>
            <th>Elektronski dokument</th>
            <th>Digitalizovani dokument</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Poreklo</td>
            <td>Nastaje digitalno</td>
            <td>Pretvoren iz papira</td>
          </tr>
          <tr>
            <td>Upotreba</td>
            <td>Idealan za nove poslovne procese</td>
            <td>Arhiviranje starijih zapisa</td>
          </tr>
          <tr>
            <td>Pravna validnost</td>
            <td>Veća pravna snaga sa digitalnim potpisom</td>
            <td>Zavisi od procedure digitalizacije</td>
          </tr>
        </tbody>
      </table>

      <h2>Kako odabrati pravu strategiju za elektronsko arhiviranje?</h2>
      <p>Vaša strategija treba da kombinuje oba pristupa. Elektronsko arhiviranje je idealno za nove dokumente, dok digitalizacija pomaže u organizaciji postojećih arhiva i olakšava predaju arhivske knjige 2025. godine.</p>

      <p>Razumevanje razlika između elektronskog i digitalizovanog dokumenta ključno je za uspešno upravljanje arhivom. Iako može delovati složeno, uz <strong>Arhivix</strong>, lako možete implementirati rešenja za elektronsko arhiviranje i uskladiti poslovanje sa zakonskim zahtevima.</p>
    `
  },
  'pravilnik-o-kancelarijskom-poslovanju': {
    title: 'Izrada i Prilagođavanje Pravilnika o Kancelarijskom Poslovanju',
    slug: 'pravilnik-o-kancelarijskom-poslovanju',
    excerpt: 'Sve što trebate znati o pravilniku o kancelarijskom poslovanju i kako ga prilagoditi vašem preduzeću.',
    date: '2025-09-05',
    author: 'Arhivix Tim',
    image: '/images/blog/arhivska-knjiga.jpg',
    readingTime: '5 min',
    content: `
      <p>Uvođenjem novih zakonskih regulativa, privredna društva su obavezna da se prilagode i usklade sa pravilima koja se odnose na elektronsko arhiviranje i upravljanje dokumentacijom. Jedno od glavnih pitanja koje postavljaju firme je: da li je potrebno da izrađuju novi pravilnik o kancelarijskom poslovanju kako bi se uskladili sa novim Zakonom o arhiviranju dokumenata?</p>

      <h2>Šta se menja sa novim Zakonom?</h2>
      <p>Novi zakon o obaveznoj arhivaciji dokumenata zahteva da privredna društva obezbede pravnu osnovu za čuvanje, zaštitu i korišćenje arhivske građe. Ovo podrazumeva:</p>
      <ul>
        <li>Usklađivanje poslovnih procedura sa novim zakonskim normama.</li>
        <li>Implementaciju standarda za elektronsko arhiviranje i zaštitu podataka.</li>
      </ul>

      <h2>Da li je novi pravilnik obavezan?</h2>
      <p>Ako vaša firma već ima pravilnik o kancelarijskom poslovanju, možda neće biti potrebno donošenje potpuno novog pravilnika. Međutim, može biti neophodno prilagoditi postojeći pravilnik kako bi bio u skladu sa novim zakonodavstvom, posebno u vezi sa:</p>
      <ul>
        <li>Elektronskim arhiviranjem dokumenata.</li>
        <li>Bezbednošću i zaštitom podataka.</li>
        <li>Obavezama o predaji arhivske knjige 2025. godine.</li>
      </ul>

      <h2>Prednosti novih pravilnika</h2>
      <p>Izrada novog ili prilagodba postojećeg pravilnika omogućava:</p>
      <ul>
        <li>Usmeravanje zaposlenih u pogledu pravilnog upravljanja dokumentacijom.</li>
        <li>Jasnu podelu odgovornosti u vezi sa arhivskom građom.</li>
        <li>Usklađivanje sa zakonskim regulativama, čime se izbegavaju potencijalne pravne posledice.</li>
      </ul>

      <p>Prilagodba ili izrada novog pravilnika o kancelarijskom poslovanju ključno je za efikasno upravljanje poslovnom dokumentacijom. Korišćenjem alata za elektronsko arhiviranje poput <strong>Arhivix</strong>, možete osigurati usklađenost vašeg poslovanja sa zakonskim normama i predajom arhivske knjige do 2025. godine.</p>
    `
  },
  'razlika-elektronski-digitalizovani-dokumenti': {
    title: 'Razlika između elektronskog i digitalizovanog dokumenta',
    slug: 'razlika-elektronski-digitalizovani-dokumenti',
    excerpt: 'Objašnjavamo ključne razlike između elektronskih i digitalizovanih dokumenata i njihov pravni status.',
    date: '2025-08-20',
    author: 'Arhivix Tim',
    image: '/images/blog/elektronsko-arhiviranje.jpg',
    readingTime: '6 min',
    content: `
      <p>Elektronsko arhiviranje dokumenata postaje sve važnije za poslovanje, posebno zbog novih zakonskih obaveza kao što je predaja arhivske knjige 2025. godine. Kako elektronsko arhiviranje postaje obavezno, ključno je da razumete razliku između elektronskih i digitalizovanih dokumenata.</p>

      <h2>Šta je elektronski dokument?</h2>
      <p>Elektronski dokument je zapis koji nastaje direktno u digitalnom formatu i može biti:</p>
      <ul>
        <li>Elektronska faktura</li>
        <li>Digitalno potpisani ugovor</li>
        <li>Dokument generisan u softverima za elektronsko arhiviranje</li>
      </ul>
      <p>Prema Zakonu o elektronskom dokumentu, elektronskoj identifikaciji i uslugama od poverenja u elektronskom poslovanju, elektronski dokument je definisan kao <em>"skup podataka sastavljen od slova, brojeva, simbola, grafičkih, zvučnih i video materijala, u elektronskom obliku"</em>.</p>

      <h3>Prednosti elektronskog arhiviranja dokumenata:</h3>
      <ul>
        <li>Smanjeni troškovi papira i štampe</li>
        <li>Brza pretraga i deljenje</li>
        <li>Veća pravna sigurnost uz digitalni potpis i šifrovanje</li>
      </ul>

      <h2>Šta je digitalizovan dokument?</h2>
      <p>Digitalizovani dokument je papirni dokument pretvoren u digitalni format. To su, na primer, skenirane fakture ili digitalne kopije ugovora.</p>

      <h3>Važnost digitalizacije za obavezno arhiviranje dokumenata:</h3>
      <p>Digitalizacija omogućava bolju organizaciju arhivske građe i olakšava ispunjenje zakonskih obaveza, kao što je predaja arhivske knjige.</p>

      <h2>Ključne razlike između elektronskih i digitalizovanih dokumenata</h2>
      <table>
        <thead>
          <tr>
            <th>Karakteristika</th>
            <th>Elektronski dokument</th>
            <th>Digitalizovani dokument</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Poreklo</td>
            <td>Nastaje digitalno</td>
            <td>Pretvoren iz papira</td>
          </tr>
          <tr>
            <td>Upotreba</td>
            <td>Idealan za nove poslovne procese</td>
            <td>Arhiviranje starijih zapisa</td>
          </tr>
          <tr>
            <td>Pravna validnost</td>
            <td>Veća pravna snaga sa digitalnim potpisom</td>
            <td>Zavisi od procedure digitalizacije</td>
          </tr>
        </tbody>
      </table>

      <h2>Kako odabrati pravu strategiju za elektronsko arhiviranje?</h2>
      <p>Vaša strategija treba da kombinuje oba pristupa. Elektronsko arhiviranje je idealno za nove dokumente, dok digitalizacija pomaže u organizaciji postojećih arhiva i olakšava predaju arhivske knjige 2025. godine.</p>

      <p>Razumevanje razlika između elektronskog i digitalizovanog dokumenta ključno je za uspešno upravljanje arhivom. Iako može delovati složeno, uz <strong>Arhivix</strong>, lako možete implementirati rešenja za elektronsko arhiviranje i uskladiti poslovanje sa zakonskim zahtevima.</p>
    `
  },
  'usluzno-arhiviranje': {
    title: 'Uslužno Arhiviranje',
    slug: 'usluzno-arhiviranje',
    excerpt: 'Saznajte sve o uslužnom arhiviranju i kako može pomoći vašem poslovanju.',
    date: '2025-07-15',
    author: 'Arhivix Tim',
    image: '/images/blog/elektronske-otpremnice.jpg',
    readingTime: '5 min',
    content: `
      <h2>Zašto odabrati Arhivix za uslužno arhiviranje?</h2>
      <ul>
        <li>Profesionalni tim sa iskustvom u arhiviranju.</li>
        <li>Potpuno usklađivanje sa zakonskim normama.</li>
        <li>Efikasno upravljanje dokumentima bez dodatnog opterećenja za vaše osoblje.</li>
      </ul>

      <p>Kontaktirajte nas već danas kako biste dogovorili uslove saradnje i kreiranje ugovora između naših kompanija. Naš tim će se pobrinuti da vaša dokumentacija bude arhivirana na najvišem nivou kvaliteta i sigurnosti.</p>
    `
  },
  'arhivska-knjiga/elektronske-otpremnice': {
    title: 'Elektronske Otpremnice i Arhivska Knjiga',
    slug: 'arhivska-knjiga/elektronske-otpremnice',
    excerpt: 'Kako se elektronske otpremnice evidentiraju u arhivskoj knjizi i šta su zakonske obaveze.',
    date: '2025-11-10',
    author: 'Arhivix Tim',
    image: '/images/blog/elektronske-otpremnice.jpg',
    readingTime: '7 min',
    content: `
      <h2>Uvod: Zašto se uvode elektronske otpremnice?</h2>
      <p>Od 2026. godine u Srbiji počinje postepena primena Zakona o elektronskim otpremnicama. Cilj je da se kretanje robe evidentira digitalno, brže i preciznije, uz potpunu automatizaciju praćenja transporta. Umesto papira, pečata i ručnog ispunjavanja, svaka otprema robe biće praćena elektronskim dokumentom koji prolazi kroz centralni državni sistem.</p>
      <p>Ovo je jedna od najvećih digitalizacija u poslovanju kod nas i direktno utiče na gotovo sve firme koje šalju, primaju ili transportuju robu.</p>

      <h2>Šta je elektronska otpremnica?</h2>
      <p>Elektronska otpremnica je digitalni dokument koji prati robu tokom transporta. Mora biti napravljena, poslata i primljena kroz zvanični državni sistem, u strukturiranom formatu koji omogućava automatsku obradu.</p>
      <p>Sadrži ključne podatke, kao što su:</p>
      <ul>
        <li>Ko šalje robu</li>
        <li>Ko robu prima</li>
        <li>Šta se šalje i u kojoj količini</li>
        <li>Vreme i mesto polaska</li>
        <li>Vreme i mesto isporuke</li>
        <li>Ko je prevoznik</li>
        <li>QR kod za verifikaciju</li>
      </ul>
      <p>Cilj sistema je da obezbedi transparentno i uvek dostupno praćenje kretanja robe, bez manipulacija i grešaka.</p>

      <h2>Ko je obavezan da šalje elektronske otpremnice?</h2>
      <p>Obavezu imaju:</p>
      <ul>
        <li><strong>Subjekti privatnog sektora</strong> (PDV obveznici i firme koje učestvuju u otpremi dobara)</li>
        <li><strong>Subjekti javnog sektora</strong></li>
        <li><strong>Operatori prevoza</strong> (kada vode evidenciju u ime klijenta)</li>
        <li><strong>Prevoznici</strong> (za preuzimanje i predstavljanje otpremnice u nadzoru)</li>
      </ul>
      <p>Fizička lica koja ne obavljaju delatnost nisu obuhvaćena zakonom.</p>

      <h2>Od kada obaveze važe?</h2>
      <p>Prema zakonu i izmenama:</p>
      <ul>
        <li>Za javni sektor – od <strong>1. januara 2026.</strong></li>
        <li>Za privatni sektor kada su u pitanju akcizni proizvodi – od <strong>1. januara 2026.</strong></li>
        <li>Za privatni sektor u celokupnom prometu robe – od <strong>1. oktobra 2027.</strong></li>
      </ul>
      <p>Dakle, sve firme u Srbiji moraće da pređu na sistem elektronskih otpremnica najkasnije do oktobra 2027.</p>

      <h2>Kada elektronska otpremnica nije potrebna?</h2>
      <p>Zakon predviđa više izuzetaka. Otpremnica nije potrebna u situacijama kao što su:</p>
      <ul>
        <li>Isporuka vode, struje, gasa i sličnih dobara kroz mreže</li>
        <li>Promet na malo (fiskalni račun je dovoljan)</li>
        <li>Isporuke unutar istog javnog subjekta</li>
        <li>Vraćanje robe istim prevoznim sredstvom</li>
        <li>Isporuke u okviru odobrenih kliničkih ispitivanja</li>
      </ul>
      <p>Ovo značajno olakšava rad trgovinama na malo i delovima javnog sistema.</p>

      <h2>Kako izgleda proces u praksi?</h2>
      <ol>
        <li><strong>Pošiljalac</strong> kreira elektronsku otpremnicu u sistemu.</li>
        <li><strong>Prevoznik</strong> preuzima otpremnicu preko sistema ili dobija štampani QR prikaz ako nije korisnik sistema.</li>
        <li><strong>Primalac</strong> potvrđuje fizički prijem robe najkasnije 3 radna dana od prijema.</li>
        <li>Zatim prihvata ili odbija otpremnicu u roku od 8 dana.</li>
      </ol>
      <p>Ako primalac ne pošalje prijemnicu:</p>
      <ul>
        <li>Za javni sektor – smatra se da je <strong>prihvatio</strong> robu</li>
        <li>Za privatni sektor – smatra se da je robu <strong>odbio</strong></li>
      </ul>
      <p>Ovo osigurava da se prolazak robe evidentira bez kašnjenja i da svaka strana ima jasnu odgovornost.</p>

      <h2>Šta ako sistem ne radi ili nema interneta?</h2>
      <p>Zakon predviđa i tu mogućnost: firma može privremeno da koristi papirnu otpremnicu sa hologramskom nalepnicom koju izdaje Zavod za izradu novčanica.</p>
      <p>Kada se uspostavi internet ili sistem, firma je dužna da unese sve podatke u sistem najkasnije prvog narednog radnog dana.</p>

      <h2>Šta ovo znači za firme u praksi?</h2>

      <h3>1. Manje papira, više digitalnog poslovanja</h3>
      <p>Papirne otpremnice se zamenjuju automatskim sistemom. Firmama je potrebno tehničko prilagođavanje: softveri, obuka zaposlenih, pouzdana internet konekcija.</p>

      <h3>2. Jača kontrola i transparentnost</h3>
      <p>Sistem omogućava državi da u realnom vremenu prati promet robe. Ovo smanjuje mogućnosti za zloupotrebe, ali povećava odgovornost firmi.</p>

      <h3>3. Kazne za nepoštovanje obaveza</h3>
      <p>Kazne su predviđene za:</p>
      <ul>
        <li>Slanje otpremnice van propisanog roka</li>
        <li>Nepotvrđivanje prijema</li>
        <li>Zloupotrebu podataka</li>
      </ul>
      <blockquote>
        <p>Kazne za pravna lica: <strong>200.000 do 2.000.000 RSD</strong><br>Za preduzetnike: <strong>50.000 do 500.000 RSD</strong></p>
      </blockquote>

      <h3>4. Period prilagođavanja</h3>
      <p>Od 1. januara do 30. juna 2026. neće se kažnjavati greške u ispunjavanju podataka — ovo je period učenja i optimizacije procesa.</p>

      <h3>5. Jednostavnija kontrola i dokazivanje isporuke</h3>
      <p>Sve je digitalno arhivirano, lako dostupno, bez gubljenja papira i bez sporova oko toga da li je roba zaista isporučena.</p>

      <h2>Šta ovo znači za građane?</h2>
      <p>Iako zakon primarno utiče na firme, građani dobijaju nekoliko indirektnih koristi:</p>
      <ul>
        <li>Sigurniju i transparentniju isporuku</li>
        <li>Manje prostora za sivu ekonomiju</li>
        <li>Brže i pouzdanije procese nabavke i dostave</li>
        <li>Bolju zaštitu potrošača</li>
      </ul>
      <p>Građani koji nisu preduzetnici nemaju nikakve nove obaveze.</p>

      <h2>Zaključak</h2>
      <p>Elektronske otpremnice predstavljaju veliki korak u digitalizaciji poslovanja u Srbiji. Iako će prelazak zahtevati vreme i tehničku pripremu, dugoročno donose manje birokratije, manje grešaka i brže procese.</p>
      <p><strong>Ovo nije samo administrativna promena – ovo je prelazak na moderniji, uređeniji i sigurniji sistem koji koristi i firmama i potrošačima.</strong></p>
    `
  }
};
