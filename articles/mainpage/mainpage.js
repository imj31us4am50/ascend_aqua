import mainpageCSS from "/mainpage/mainpage.css";

export default function MainPage() {
  return (
    <div
      className="container-fluid m-0 p-3 maincontainerofmainpage d-flex justify-content-around align-items-start"
      style={mainpageCSS}
    >
      <div className="first-column p-4">
        <div className="posting-system">
          <div className="user-details-row p-2">
            <div className="user-pfp">
              <img
                src="https://imj31us4am50.github.io/ascendaquamedia/articlepic11.jpg"
                className="imagepfp bg-danger p-2 toremove"
                id="userpfp"
                alt="user"
              />
              <p className="d-inline m-3" id="username">
                <span className="toremove text-danger">username PHP</span>
              </p>
            </div>
          </div>
          <div className="user-create-post-field">
            <form action="/action_page.php">
              <textarea
                className="user-post-textarea p-3"
                placeholder="Scrie ceva..."
                spellCheck="false"
              />

              <div className="bottom-buttons d-flex justify-content-between align-items-center">
                <label className="custom-file-upload text-center m-2">
                  <input
                    type="file"
                    id="img"
                    name="img"
                    accept="image/*"
                    className="uploadimageinput"
                  />{" "}
                  Încarcă o imagine
                </label>
                <input
                  type="submit"
                  value="Postează"
                  className="post-button m-2"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="second-column p-4">
        <span className="toremove text-danger">
          display articles from other users from database
        </span>
        <div className="article-post">
          <div className="user-details p-2">
            <img src="" className="imagepfp" id="userpfp" alt="" />
            <p className="d-inline m-3" id="username"></p>
          </div>
          <div className="user-post">
            <p id="post-text"></p>
            <img src="" alt="" /> {/*fetch image from database if it exists */}
          </div>
        </div>
      </div>
    </div>
  );
}
