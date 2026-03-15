import FooterCSS from "/footer/footer.css";

export default function Footer() {
  return (
    <div
      className="container-fluid m-0 p-0 container-of-footer"
      style={FooterCSS}
    >
      <div className="footer-icons d-flex justify-content-between align-items-center mx-auto">
        <i
          class="fi fi-brands-instagram"
          data-toggle="tooltip"
          title="Instagram"
        ></i>
        <i
          class="fi fi-brands-twitter"
          data-toggle="tooltip"
          title="Twitter"
        ></i>
        <i
          class="fi fi-brands-facebook"
          data-toggle="tooltip"
          title="Facebook"
        ></i>
        <i class="fi fi-brands-github" data-toggle="tooltip" title="Github"></i>
      </div>
      <div className="copyright mx-auto text-center">
        &#169;2022 Ascend Aqua.
      </div>
    </div>
  );
}
