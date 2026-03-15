import ToSignInCSS from "/formcomponents/ToSignIn.css";

export default function ToSignIn() {
  return (
    <div className="row onna mx-auto pl-3 pr-3 pt-3" style={ToSignInCSS}>
      <div className="mx-auto text-center">
        Ai deja un cont? <a href="#popup2">Conectează-te</a>.
        <br /> Sau{" "}
        <a href="#googlestuff" className="pink">
          folosește un cont Google
        </a>
        .
      </div>

      <div id="popup2" className="overlay">
        <div className="popup">
          <div className="h2 mx-auto">Conectare</div>
          <a className="close" href="#">
            &times;
          </a>

          <div className="content">
            <form>
              <div className="row justify-content-center mx-auto h5">
                <div className="row pl-3 pr-3 pt-3">
                  <label htmlFor="username" className="user-select-none abba">
                    Nume Utilizator
                  </label>
                  <input
                    type="text"
                    /*placeholder="ex: naturelover271"*/

                    name="username"
                    className="p-2"
                    required
                  />
                </div>
                <div className="row pl-3 pr-3 pt-3">
                  <label htmlFor="password" className="user-select-none abba">
                    Parolă
                  </label>
                  <input
                    type="password"
                    /* placeholder="••••••••" */
                    name="password"
                    className="p-2"
                    required
                  />
                </div>
              </div>

              <div className="row pl-3 pr-3 pt-3 justify-content-center">
                <button type="submit" className="btn btn-default text-white">
                  Conectați-vă
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
