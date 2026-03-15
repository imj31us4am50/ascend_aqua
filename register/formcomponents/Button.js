import ButtonCSS from "/formcomponents/Button.css";

export default function Button() {
  return (
    <div
      className="row pl-3 pr-3 pt-3 justify-content-center"
      style={ButtonCSS}
    >
      <button type="submit" className="btn btn-default text-white">
        Înregistrează-te
      </button>
    </div>
  );
}
