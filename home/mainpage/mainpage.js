import mainpageCSS from "/mainpage/mainpage.css";

export default function MainPage() {
  let facts = [
    "Viteza sunetului în apă este de 1.435 m/sec – de aproape cinci ori mai mare decât viteza sunetului în aer.",
    "Conform  WoRMS, există în prezent cel puțin 236.878 de specii marine denumite (2021).",
    "Peste 80% din ocean nu a fost niciodată cartografiat, explorat sau văzut de oameni.",
    "Mulți pești își pot schimba sexul pe parcursul vieții.",
    "Căluții de mare sunt singurele animale unde masculul dă naștere.",
    "Octopodele au 3 inimi și au sângele de culoare albastră.",
    "Oceanele conțin 99% din spațiul de viață de pe planetă.",
    "Meduzele există de peste 650 de milioane de ani, ceea ce înseamnă că depășesc atât rechinii, cât și dinozaurii.",
    "Delfinii dorm doar cu jumătate din creier și cu un ochi deschis, astfel încât să poată urmări prădătorii și alte amenințări.",
    "Țestoasele trăiesc pe fiecare continent, cu excepția Antarcticii.",
    "Majoritatea peștilor nu au pleoape. Singurul pește care poate clipi este rechinul.",
    "Cel puțin 14 milioane de tone de plastic ajung în ocean în fiecare an.",
    "Majoritatea vieții de pe Pământ este acvatică.",
    "Există mai multe artefacte istorice sub mări decât în ​​toate muzeele lumii.",
    "Oceanul Pacific este cel mai mare ocean din lume și conține aproximativ 25.000 de insule."
  ];

  let text = facts[Math.floor(Math.random() * facts.length)];

  return (
    <div
      className="container-fluid m-0 p-3 maincontainerofmainpage d-flex justify-content-around align-items-start"
      style={mainpageCSS}
    >
      <div className="firstcolumn m-2 mx-auto">
        <div className="title h1 text-center tealcolor mt-4">
          Descoperă cele mai populare subiecte:
        </div>
        <div className="article1 mt-5">
          <div className="subtitle mb-2">
            Impactul pe care îl au oamenii asupra vieții acvatice
          </div>
          <img
            src="https://imj31us4am50.github.io/ascendaquamedia/articlepic1.jpg"
            alt="phone"
            className="m-2 mt-0 ml-0 left"
          ></img>
          <div className="descriptionforarticle">
            Activitățile umane{" "}
            <span className="tealcolor">
              afectează viața și habitatele marine
            </span>{" "}
            prin pescuitul excesiv, introducerea de specii invazive, poluarea
            oceanelor, acidificarea oceanelor și încălzirea acestora. Aceste
            lucruri au impact asupra ecosistemelor marine și pot avea consecințe
            încă nerecunoscute pentru biodiversitatea și continuarea formelor de
            viață marine. Datorită poluării a rezultat cel mai mare număr de
            decese din ecosistemul marin. De la deșeurile atmosferice până la
            poluarea excesivă cu nutrienți și alte surse de apă terestre,
            oamenii au provocat un dezastru nespus în ecosistemul marin, care va
            dura câțiva ani pentru a fi reparat. Viața marină se îneacă în
            poluare. Aceasta moare pe zi ce trece, epuizându-și astfel populația
            și rupând echilibrul ecosistemului. Restabilirea acestui echilibru
            și salvarea planetei nu mai este o sarcină pentru guvern. Depinde de
            tine să salvezi Pământul și să începi să trăiești verde. Oricare
            efort, oricât de mic, contează.
          </div>
        </div>
        <div className="article2 mt-5">
          <div className="subtitle mb-2">O mulțime de pești!</div>
          <img
            src="https://imj31us4am50.github.io/ascendaquamedia/articlepic2.jpg"
            alt="fish"
            className="m-2 mt-0 ml-0 right"
          ></img>
          <div className="descriptionforarticle">
            Este de necrezut că peștii, ființe eminamente mute, au o viață
            socială a lor. Numeroase specii trăiesc în bancuri compacte, ceea ce
            le face mai puțin vulnerabile în fața răpitorilor, permite
            orientarea după instinctul celor mai avansați, uneori facilitează
            găsirea hranei. În bancul de pești domnește o disciplină strictă:
            toți indivizii înoată în aceeași direcție, mișcările lor sunt
            coordonate, niciunul nu încearcă să-l depășească pe cel de aproape
            sau să-i rămână în urmă. Mai mulți ochi văd mai bine decât o
            pereche: posibilele amenințări sunt descoperite mai ușor de către
            membrii bancului și totodată oferă mai multă liniște și un timp mai
            îndelungat de hrănire.{" "}
            <span className="tealcolor">
              Cum se mișcă în aceeași direcție peștii dintr-un banc? Au un lider
              care dictează pentru întregul grup? Ei bine, nu.
            </span>{" "}
            Fiecare pește din banc are rang egal și toți sunt “interconectați”
            între ei prin văz, auz, miros și feromoni. Ei fac exact ce face
            vecinul lor, în orice moment, de aceea bancul de pești se mișcă
            precum un singur organism.
          </div>
        </div>
        <div className="article3 mt-5">
          <div className="subtitle mb-2">
            Cele mai mari animale de pe Pământ
          </div>
          <img
            src="https://imj31us4am50.github.io/ascendaquamedia/articlepic3.jpg"
            alt="whale tail"
            className="m-2 mt-0 ml-0 left"
          ></img>
          <div className="descriptionforarticle">
            Balenele cutreieră prin toate oceanele lumii, comunicând cu sunete
            complexe și misterioase. Dimensiunea lor ne uimește: balena albastră
            poate atinge lungimi de peste 30 de metri și poate cântări până la
            200 de tone (<span className="tealcolor">33 de elefanți</span>). În
            ciuda faptului că trăiesc în apă, balenele respiră aer. Și ca și
            oamenii, sunt mamifere cu sânge cald care își alăptează puii. Un
            strat gros de grăsime specific le izolează de apele reci ale
            oceanului. Unele balene sunt cunoscute sub denumirea de balene cu
            fani. Această denumire se referă la faptul că au structuri speciale
            asemănătoare perilor în gură (numite fanoni) care strecoară
            alimentele din apă. Alte balene, precum beluga sau cașalotul, au
            dinți. Unul dintre cele mai interesante animale din lume este balena
            albastră. Acest animal uriaș se hrănește cu plancton și este
            considerat{" "}
            <span className="tealcolor">
              unul dintre cele mai mari animale care a trăit vreodată pe Pământ
            </span>
            . Balenele sunt amenințate de schimbările de mediu, pierderea
            habitatelor și substanțele toxice. Pot fi de asemenea afectate de
            circulația navelor și se pot încurca în echipamentele de pescuit.
          </div>
        </div>
        <div className="article4 mt-5">
          <div className="subtitle mb-2">
            Explicarea crizei ce implică poluarea cu plastic: Un adevărat coșmar
            devenit realitate.{" "}
          </div>
          <img
            src="https://imj31us4am50.github.io/ascendaquamedia/articlepic4.jpg"
            alt="plastic waste"
            className="m-2 mt-0 ml-0 right"
          ></img>
          <div className="descriptionforarticle">
            Poluarea cu plastic a devenit{" "}
            <span className="tealcolor">
              una dintre cele mai presante probleme ale mediului
            </span>
            , nu numai cel acvatic , deoarece creșterea rapidă a producției de
            produse din plastic de unică folosință copleșește capacitatea lumii
            de a le face față. Poluarea cu plastic este cea mai vizibilă în
            țările în curs de dezvoltare din Asia și Africa, unde sistemele de
            colectare a gunoiului sunt adesea ineficiente sau inexistente.
            Milioane de animale sunt ucise de plastic în fiecare an, de la
            păsări la pești și la alte organisme marine. Se știe că aproape 700
            de specii, inclusiv cele pe cale de dispariție, au fost afectate de
            plastic. Aproape fiecare specie de păsări marine mănâncă plastic.
            Cele mai multe dintre decesele animalelor sunt cauzate de încurcare
            sau de foame. Foci, balene , țestoase și alte animale sunt sugrumate
            de uneltele de pescuit abandonate sau de inelele de șase pachete
            aruncate . Microplasticele au fost găsite în mai mult de 100 de
            specii acvatice, inclusiv pești, creveți și midii destinate pentru
            farfuriile noastre. În multe cazuri, aceste bucăți mici trec prin
            sistemul digestiv și sunt expulzate fără consecințe. Însă s-a
            constatat, de asemenea, că plasticele au blocat tractul digestiv sau
            au perforat organe, provocând moartea.{" "}
            <span className="tealcolor">Soluția</span> este să împiedicăm
            deșeurile să ajungă în râuri sau mări.
          </div>
        </div>
        <div className="article5 mt-5">
          <div className="subtitle mb-2">Cât de inteligenți sunt delfinii?</div>
          <img
            src="https://imj31us4am50.github.io/ascendaquamedia/articlepic5.jpg"
            alt="dolphin"
            className="m-2 mt-0 ml-0 left"
          ></img>
          <div className="descriptionforarticle">
            În primul rând, ar trebui să definim termenul de inteligență:
            <span className="tealcolor">Inteligența</span> poate fi definită ca
            abilitatea de a învăța și de a aplica cunoștințe; de a înțelege
            situații noi sau provocatoare și capacitatea de a gândi abstract.
            Delfinii demonstrează capacitatea de a face toate aceste lucruri și
            majoritatea oamenilor de știință sunt de acord că delfinii sunt
            foarte inteligenți. Sunt imitatori notoriu talentați și învață
            rapid; ei demonstrează conștientizare de sine, rezolvarea
            problemelor și empatie, inovație, abilități de predare, durere,
            bucurie și joacă. Poate că noi, oamenii, trebuie să reconsiderăm
            concepția tradițională conform căreia suntem excepționali și din
            moment ce nicio altă creatură nu poate gândi sau comunica ca un om,
            nicio altă specie nu poate egala inteligența noastră? Dovada este că
            – în anumite privințe – balenele și delfinii au abilități de
            comunicare superioare celor ale ființelor umane. Comunicarea cu
            delfinii este atât de bună încât există o posibilitate puternică ca
            un delfin să poată trimite o imagine sonoră a unui pește, de
            exemplu, altor delfini. Cu alte cuvinte,{" "}
            <span className="tealcolor">
              ei pot comunica în moduri pe care nici nu le putem imagina
            </span>
            .
          </div>
        </div>
        <div className="article6 mt-5">
          <div className="subtitle mb-2">
            Curiozități despre crabi: păianjenii mării.
          </div>
          <img
            src="https://imj31us4am50.github.io/ascendaquamedia/articlepic6.jpg"
            alt="plastic waste"
            className="m-2 mt-0 ml-0 right"
          ></img>
          <div className="descriptionforarticle">
            Există aproximativ 5.000 de specii de crabi. Doar aproximativ 4.500
            sunt crabi adevărați. Celelalte 500 de tipuri sunt crabi falși și
            includ crabi pustnici, crabi rege, crabi de porțelan și crabii
            potcoavă. Crabii adevărați au un abdomen foarte scurt și folosesc
            patru perechi de picioare lungi pentru mers.
            <br /> Adevărații crabi pot merge încet în orice direcție, dar
            atunci când trebuie să se grăbească, de obicei se mișcă în lateral.
            De asemenea,{" "}
            <span className="tealcolor">
              crabii comunică batând cleștele sau batând cu ghearele
            </span>
            . <br /> Una dintre cele mai faimoase curiozități ale crabilor este
            că trebuie să-și schimbe armura din când în când pentru a-și
            continua dezvoltarea. Acest proces se numește ecdiză și este tipic
            artropodelor, indiferent dacă sunt sau nu crustacee. În general, se
            estimează că femelele "năpârlesc" de 18-20 de ori până când ajung la
            maturitate sexuală, în timp ce masculii năpârlesc de 21-23 de ori.
          </div>
        </div>
      </div>
      <div className="secondcolumn p-2 m-2 mx-auto">
        <div className="title h3 text-center m-5">
          Diverse pentru utilizatori
        </div>
        <div className="articles-show mb-5 mt-5">
          <a href="https://cimtx0.csb.app/" className="otherlink">
            <div className="article1-show m-1 p-2 d-flex ">
              <img
                src="https://imj31us4am50.github.io/ascendaquamedia/articlepic7.jpg"
                alt="ocean"
                className="article-show-image"
              />
              <div className="description-article-show">
                <h5 className="m-2 mt-0 mb-0 articleshowtitle">
                  Cât din ocean a fost explorat? Surprinzător de puțin.
                </h5>
                <p className="m-2 mt-0 mb-0 articleshowparagraph">
                  În ciuda căutărilor oceanice istorice și a tehnologiilor
                  moderne de explorare, doar 5% din oceane au fost explorate.
                </p>
              </div>
            </div>
            <div className="article2-show m-1 p-2 d-flex ">
              <img
                src="https://imj31us4am50.github.io/ascendaquamedia/articlepic8.jpg"
                alt="ocean"
                className="article-show-image"
              />
              <div className="description-article-show">
                <h5 className="m-2 mt-0 mb-0 articleshowtitle">
                  Imagini terifiante arată o creatură monstruoasă cu colți
                  enormi
                </h5>
                <p className="m-2 mt-0 mb-0 articleshowparagraph">
                  Adânc în ocean trăiește un pește macabru cu dinți uriași și
                  amenințători, asemănători colților.
                </p>
              </div>
            </div>
            <div className="article3-show m-1 p-2 d-flex ">
              <img
                src="https://imj31us4am50.github.io/ascendaquamedia/articlepic9.jpg"
                alt="ocean"
                className="article-show-image"
              />
              <div className="description-article-show">
                <h5 className="m-2 mt-0 mb-0 articleshowtitle">
                  Descoperirile și observările de adâncime din 2022 sunt
                  fascinante
                </h5>
                <p className="m-2 mt-0 mb-0 articleshowparagraph">
                  O epocă a descoperirilor este peste noi.
                </p>
              </div>
            </div>
          </a>
        </div>

        {/*second part of articles show................................*/}
        <div className="articles-show mb-5 mt-5">
          <a href="https://cimtx0.csb.app/" className="otherlink">
            <div className="article1-show m-1 p-2 d-flex ">
              <img
                src="https://imj31us4am50.github.io/ascendaquamedia/articlepic10.jpg"
                alt="ocean"
                className="article-show-image"
              />
              <div className="description-article-show">
                <h5 className="m-2 mt-0 mb-0 articleshowtitle">
                  Criza poluării cu plastic din lume, explicată.
                </h5>
                <p className="m-2 mt-0 mb-0 articleshowparagraph">
                  O mare parte a planetei înoată în plastic aruncat, care
                  dăunează sănătății animalelor și, probabil, a omului.
                </p>
              </div>
            </div>
            <div className="article2-show m-1 p-2 d-flex ">
              <img
                src="https://imj31us4am50.github.io/ascendaquamedia/articlepic11.jpg"
                alt="ocean"
                className="article-show-image"
              />
              <div className="description-article-show">
                <h5 className="m-2 mt-0 mb-0 articleshowtitle">
                  10 lucruri incredibile despre ocean.
                </h5>
                <p className="m-2 mt-0 mb-0 articleshowparagraph">
                  Criza climatică ne-a oferit tuturor o reînnoită apreciere
                  pentru oceanele planetei noastre și pentru viața marină care
                  trăiește sub suprafața apei.
                </p>
              </div>
            </div>
            <div className="article3-show m-1 p-2 d-flex ">
              <img
                src="https://imj31us4am50.github.io/ascendaquamedia/articlepic12.jpg"
                alt="ocean"
                className="article-show-image"
              />
              <div className="description-article-show">
                <h5 className="m-2 mt-0 mb-0 articleshowtitle">
                  Cele mai înduioșătoare animale: focile.
                </h5>
                <p className="m-2 mt-0 mb-0 articleshowparagraph">
                  Vrei să afli mai multe despre aceste foci drăguțe cu mustăți?
                  Nu mai căuta!
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="containerofcard">
          <div className="flip-card m-2">
            <div className="flip-card-inner">
              <div className="flip-card-front ">
                <img
                  src="https://imj31us4am50.github.io/ascendaquamedia/oceanphoto7.jpg"
                  alt="ocean"
                  className="cardimage"
                />
                <div className="textoverimage h3 text-white">Știați că...</div>
              </div>
              <div className="flip-card-back p-3">
                <p className="cardtextinner">{text}</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="dangers-description m-4">
          <span className="h5">
            Există o serie de metode prin care putem salva viața acvatică.{" "}
            <span className="tealcolor">Iată câteva dintre ele:</span>
          </span>{" "}
          <br />
          <br />
          <span className="tealcolor">1. Reducerea poluării apei:</span>{" "}
          Poluarea apei poate avea un impact devastator asupra vieții acvatice.
          În consecință, reducerea poluării apei este o modalitate importantă de
          a proteja viața acvatică. În acest sens, putem lua măsuri precum
          reducerea emisiilor de poluanți în aer și apă, utilizarea produselor
          de curățare non-toxice, reciclarea și eliminarea corectă a deșeurilor.
          <br />
          <br />
          <span className="tealcolor">
            2. Conservarea habitatelor naturale:
          </span>{" "}
          Distrugerea habitatelor naturale, cum ar fi recifurile de corali,
          zonele umede sau mangrovele, poate duce la pierderea biodiversității
          și a vieții acvatice. Prin urmare, conservarea habitatelor naturale
          este esențială pentru salvarea vieții acvatice. Această conservare
          poate fi realizată prin protejarea și restaurarea habitatelor
          existente, precum și prin crearea de noi habitate.
          <br />
          <br />
          <span className="tealcolor">
            3. Limitarea pescuitului excesiv:
          </span>{" "}
          Pescuitul excesiv poate duce la scăderea numărului de specii acvatice
          și la perturbarea echilibrului ecologic. Pentru a preveni acest lucru,
          putem adopta măsuri precum stabilirea de cote de pescuit și
          interzicerea pescuitului în anumite zone protejate.
          <br />
          <br />
          <span className="tealcolor">
            4. Promovarea tehnologiilor de pescuit sustenabil:
          </span>{" "}
          Tehnologiile de pescuit sustenabil pot ajuta la reducerea impactului
          pescuitului asupra vieții acvatice. Acestea includ utilizarea
          uneltelor de pescuit selective, care prind doar speciile dorite,
          precum și utilizarea de unelte care minimizează capturarea accidentală
          a altor specii.
          <br />
          <br />
          <span className="tealcolor">
            5. Combaterea schimbărilor climatice:
          </span>{" "}
          Schimbările climatice pot avea un impact semnificativ asupra vieții
          acvatice. Pentru a proteja viața acvatică, putem adopta măsuri pentru
          reducerea emisiilor de gaze cu efect de seră și îmbunătățirea
          capacității de adaptare a speciilor acvatice la noile condiții
          climatice.
          <br />
          <br />
          <span className="tealcolor">
            6. Educația și conștientizarea publicului:
          </span>{" "}
          Educația și conștientizarea publicului sunt esențiale pentru
          promovarea conservării vieții acvatice. Prin informarea publicului cu
          privire la impactul activităților umane asupra vieții acvatice și la
          modalitățile de protejare a acesteia, putem încuraja adoptarea de
          comportamente responsabile și protejarea vieții acvatice.
        </div>
        <div className="logo-container mx-auto mt-5 mb-5">
          <img
            src="https://imj31us4am50.github.io/ascendaquamedia/ascendaqualogo.png"
            alt="logo"
            className="logoa"
          />
        </div>
      </div>
    </div>
  );
}
