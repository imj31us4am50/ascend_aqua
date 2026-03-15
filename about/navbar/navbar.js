import navbarCSS from "/navbar/navbar.css";

export default function navbar() {
  window.addEventListener(
    "resize",
    function (event) {
      let dropdownmenu = document.getElementById("dropdownmenu");
      dropdownmenu.style.display = "none";
    },
    true
  );
  return (
    <div className="nav-container container-fluid m-0 p-0" style={navbarCSS}>
      <div className="nav1 p-2">
        <div className="logo">
          <a href="#home">
            <img
              src="https://imj31us4am50.github.io/ascendaquamedia/ascendaqualogo.png"
              alt="logo"
              className="logo"
            />
          </a>
        </div>
        <div className="nav1-1">
          <ul className="d-flex align-items-center p-0 m-0">
            <li>
              <a href="#home">ACASĂ</a>
            </li>
            <li>
              <a href="#articles">ARTICOLE</a>
            </li>
            <li>
              <a href="#games">JOCURI</a>
            </li>
            <li>
              <a href="#chat">CHAT</a>
            </li>
          </ul>
        </div>
        <div className="nav1-2">
          <ul className="d-flex align-items-center p-0 m-0">
            <li>
              <a href="#about" id="current">
                DESPRE
              </a>
            </li>
            <li id="highlight">
              <a href="#account">CONTUL MEU</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav2">
        <div className="nav2logoandmenuiconcontainer justify-content-between p-2 pb-0">
          <div className="logo">
            <a href="#home">
              <img
                src="https://imj31us4am50.github.io/ascendaquamedia/ascendaqualogo.png"
                alt="logo"
                className="logo"
              />
            </a>
          </div>
          <div className="dropdown">
            <div
              className="dropdownicon text-white"
              id="dropdownicon"
              onClick={() => {
                let dropdown = document.getElementById("dropdownmenu");

                if (dropdown.style.display === "none") {
                  // dropdown.classList.remove("displaynone");
                  // dropdown.classList.add("displayblock");
                  dropdown.style.display = "block";
                } else {
                  // dropdown.classList.remove("displayblock");
                  // dropdown.classList.add("displaynone");
                  dropdown.style.display = "none";
                }
              }}
            >
              {/* <img
                src="https://imj31us4am50.github.io/ascendaquamedia/menu.png"
                alt="menu icon"
              /> */}
              <i class="fi fi-rs-burger-menu"></i>
            </div>
          </div>
        </div>

        <div className="dropdownmenu" id="dropdownmenu">
          <li className="dropdownitem">
            <a href="#home">
              {/* <img
                src="https://imj31us4am50.github.io/ascendaquamedia/home.png"
                width="16"
                className="icon"
                alt="home icon"
              /> */}
              <i class="fi fi-rs-home" id="home_drpdwnicon"></i>
              ACASĂ
            </a>
          </li>
          <li className="dropdownitem">
            <a href="#articles">
              {/* <img
                src="https://imj31us4am50.github.io/ascendaquamedia/article.png"
                width="16"
                className="icon"
                alt="article icon"
              /> */}
              <i class="fi fi-rs-document" id="articles_drpdwnicon"></i>
              ARTICOLE
            </a>
          </li>
          <li className="dropdownitem">
            <a href="#games">
              {/* <img
                src="https://imj31us4am50.github.io/ascendaquamedia/games.png"
                width="16"
                className="icon"
                alt="games icon"
              /> */}
              <i class="fi fi-rs-puzzle-piece" id="games_drpdwnicon"></i>
              JOCURI
            </a>
          </li>
          <li className="dropdownitem">
            <a href="#chat">
              {/* <img
                src="https://imj31us4am50.github.io/ascendaquamedia/message.png"
                width="16"
                className="icon"
                alt="chat icon"
              /> */}
              <i class="fi fi-rs-comment" id="chat_drpdwnicon"></i>
              CHAT
            </a>
          </li>
          <li className="dropdownitem">
            <a href="#about" id="current">
              {/* <img
                src="https://imj31us4am50.github.io/ascendaquamedia/about.png"
                width="16"
                className="icon"
                alt="about icon"
              /> */}
              <i class="fi fi-rs-info" id="about_drpdwnicon"></i>
              DESPRE
            </a>
          </li>
          <li className="dropdownitem">
            <a href="#account">
              {/* <img
                src="https://imj31us4am50.github.io/ascendaquamedia/user.png"
                width="16"
                className="icon"
                alt="user icon"
              /> */}
              <i class="fi fi-rs-user" id="account_drpdwnicon"></i>
              CONTUL MEU
            </a>
          </li>
        </div>
      </div>
    </div>
  );
}
