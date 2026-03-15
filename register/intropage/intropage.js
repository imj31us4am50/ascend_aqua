import intropageCSS from "/intropage/intropage.css";
import SIIF from "/formcomponents/App2.js";
import Footer from "/footer/footer.js";

export default function IntroPage() {
  return (
    <div
      className="container-fluid intropagecontainer m-0 p-0"
      style={intropageCSS}
    >
      <div className="logo p-2 pb-0">
        <img
          src="https://imj31us4am50.github.io/ascendaquamedia/ascendaqualogo.png"
          alt="logo"
          className="logo"
        />
      </div>
      {/* -----------upper tilt-------------------- */}
      {/* <div className="upper-tilt-svg position-relative">
        <div class="custom-shape-divider-top-1669817726">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div> */}

      {/* -----------end of upper tilt-------------------- */}
      <div className="intro-page-1" id="intro-page-1">
        {/* <SignInUpForm /> */}
        <div className="formdesc-container d-flex justify-content-between align-items-center">
          <div className="desccont">
            <div className="title mx-auto text-center">
              <h1 className="tealcolor">Ascend Aqua</h1>
            </div>
            <div className="subtitle text-center">
              Locul unde misterele deținute de mediul acvatic sunt descoperite
            </div>
            <div className="description">
              Află mai multe despre felul în care poți contribui la
              îmbunătățirea condiției mediului acvatic și de asemenea a vieții
              acvatice în pericol. Materialele oferite sunt cu scop informativ
              și educativ.
            </div>
          </div>
          <div className="formcont" id="signinupform">
            <SIIF />
          </div>
        </div>
        <div className="container-anchor-link">
          {/* <i class="fi fi-rs-angle-double-small-down"></i> */}
          <a href="#intro-page-2" className="text-decoration-none">
            <i
              class="fi fi-rs-angle-down"
              data-toggle="tooltip"
              title="Înainte"
            ></i>
          </a>
        </div>
      </div>

      {/* ----------- lower tilt-------------------- */}
      {/* <div className="lower-tilt-svg position-relative">
        <div class="custom-shape-divider-bottom-1669817849">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div> */}
      {/* ----------- end of lower tilt-------------------- */}

      <div className="intro-page-2" id="intro-page-2">
        <a href="#intro-page-1" className="text-decoration-none">
          <i class="fi fi-rs-angle-up" data-toggle="tooltip" title="Înapoi"></i>
        </a>
        <div className="container-of-intropage1 p-2">
          <div className="containerofdesccomp d-flex justify-content-between align-items-center mx-auto mt-3">
            <div className="comp m-2 d-flex justify-content-between align-items-center mx-auto">
              <div className="component1 text-center m-3 styling">
                <div className="icon tealcolor">
                  <i class="fi fi-rs-comment"></i>
                </div>
                <div className="description">
                  <h3 className="tealcolor">Chat</h3>
                  <p>
                    O modalitate de a comunica cu ceilalți utilizatori Ascend
                    Aqua.
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
            <div className="desc m-2 p-2">
              <div className="title mx-auto text-center tealcolor">
                <h3>Descoperă opțiunile pe care le oferim</h3>
              </div>
              <div className="description text-center maxwidth mx-auto">
                Pe platforma noastră ai toate instrumentele de care ai nevoie
                pentru a înțelege modul de funcționare a mediului acvatic și
                lucrurile frumoase pe care acesta le deține. Punem la dispoziție
                o sumă de feature-uri utile care necesită crearea unui cont.
              </div>
            </div>
          </div>
        </div>
        <div className="container-send-to-signinupform mx-auto text-center m-5">
          <h3>Numai cu cont...!</h3>
          <p className="p-2 maxwidth mx-auto m-2">
            Pentru a putea accesa conținutul paginii este necesară conectarea la
            un cont existent sau înregistrarea folosind un nume și parolă (sau
            contul Google). Înregistrarea / Conectarea este facilitată prin
            formularul oferit în prima parte a paginii. (Termenii și condițiile
            trebuiesc citite și acceptate).
          </p>
          <a href="#intro-page-1">
            <button className="btn btn-default text-white sendtosigninupformbtn">
              Începe acum
            </button>
          </a>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}
