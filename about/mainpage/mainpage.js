import mainpageCSS from "/mainpage/mainpage.css";

export default function MainPage() {
  return (
    <div
      className="container-fluid m-0 p-5 maincontainerofmainpage d-flex justify-content-center align-items-start"
      style={mainpageCSS}
    >
      {/* <div className="container-of-3-flexed-items d-flex align-items-center- justify-content-around text-center">
        <div className="firstel m-1 mx-auto p-3 lightbg">
          <div className="h2 tealcolor">Articole</div>
          <div className="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </div>
        </div>
        <div className="secondel m-1 mx-auto p-3 lightbg">
          <div className="h2 tealcolor">Jocuri</div>
          <div className="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </div>
        </div>
        <div className="thirdel m-1 mx-auto p-3 lightbg">
          <div className="h2 tealcolor">Chat</div>
          <div className="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </div>
        </div>
      </div> */}

      <div className="comp1 m-4 mx-auto">
        <div className="aboutpagemain-description">
          Această platformă este concepută pentru a vă oferi informații
          valoroase și actualizate despre viața marină și pericolele care o
          amenință, precum și soluții posibile pentru protejarea acesteia. Prin
          intermediul acestei platforme, puteți învăța despre diferitele tipuri
          de animale marine, de la balene și delfini, la corali și nevertebrate,
          precum și despre habitatul lor natural și despre importanța lor pentru
          echilibrul ecosistemelor acvatice.
          <br />
          <br /> Puteți afla despre modul în care diferitele specii marine
          interacționează și cum aceste interacțiuni afectează mediul
          înconjurător. De asemenea, vă putem oferi informații despre pericolele
          cu care se confruntă viața acvatică, inclusiv poluarea, pescuitul
          excesiv, încălzirea globală, suprapopularea, activitățile umane și
          multe altele. Prin înțelegerea acestor probleme, suntem mai bine
          pregătiți să identificăm și să aplicăm soluții pentru a proteja viața
          acvatică și habitatul lor. Platforma noastră oferă, de asemenea, o
          serie de resurse educaționale, cum ar fi tutoriale video, articole
          informative și infografice, pentru a vă ajuta să înțelegeți mai bine
          problemele de mediu și să vă angajați activ în eforturile de protejare
          a vieții acvatice.
          <br />
          <br /> În plus, puteți afla despre diferite organizații și inițiative
          care lucrează pentru protejarea mediului marin și cum puteți contribui
          la aceste eforturi. Prin intermediul acestei platforme, ne propunem să
          vă oferim informații valoroase și actualizate despre viața acvatică și
          pericolele cu care se confruntă, în speranța că veți fi inspirați să
          acționați și să protejați acest mediu valoros.{" "}
          <span className="tealcolor">
            Mulțumim că ați ales să fiți alături de noi și să susțineți mediul
            marin!
          </span>
          <br />
          <br />
          <br />
          <div className="logo-container mb-5">
            <img
              src="https://imj31us4am50.github.io/ascendaquamedia/ascendaqualogo.png"
              alt="logo"
              className="descriptionlogoin"
            />
          </div>
        </div>
      </div>
      <div className="comp2 mx-auto">
        <div className="compb m-2 d-flex justify-content-between align-items-center mx-auto">
          <div className="component1 text-center m-3 styling">
            <div className="icon tealcolor">
              <i class="fi fi-rs-comment"></i>
            </div>
            <div className="description">
              <h3 className="tealcolor">Chat</h3>
              <p>
                O modalitate de a comunica cu ceilalți utilizatori Ascend Aqua.
              </p>
            </div>
          </div>
          <div className="component2 text-center m-3 styling">
            <div className="icon tealcolor">
              <i class="fi fi-rs-document"></i>
            </div>
            <div className="description">
              <h3 className="tealcolor">Articole</h3>
              <p>
                Materiale explicative pentru situația în care se află mediul
                acvatic.
              </p>
            </div>
          </div>
          <div className="component3 text-center m-3 styling">
            <div className="icon tealcolor">
              <i class="fi fi-rs-puzzle-piece"></i>
            </div>
            <div className="description">
              <h3 className="tealcolor">Jocuri</h3>
              <p>
                Activități recreaționale pentru toate vârstele, în special
                pentru copii.
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />

        <h3 className="tealcolor text-center">
          Ai întrebări? Adresează-le aici:
        </h3>
        <div className="askaquestion">
          <div className="questionform mt-5 p-1 mx-auto">
            <form method="post">
              <div className="inputspart d-flex align-items-start">
                <div className="information-part p-4 w-100">
                  <input
                    type="text"
                    placeholder="Nume"
                    required
                    className="nameinput d-block p-2 m-2 mb-3"
                  ></input>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="emailinput d-block p-2 m-2 mb-3"
                  ></input>
                </div>
                <div className="message-part p-4 w-100">
                  <textarea
                    placeholder="Mesajul tău"
                    required
                    className="messageinput d-block p-2 m-2"
                    spellcheck="false"
                  ></textarea>
                </div>
              </div>
              <div className="submitbutton text-center">
                <button
                  className="btn opziqe btn-default text-white m-3"
                  type="submit"
                >
                  Trimite mesaj
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
