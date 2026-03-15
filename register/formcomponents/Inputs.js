import InputsCSS from "/formcomponents/Inputs.css";

export default function Inputs() {
  return (
    <div className="row justify-content-center mx-auto h5" style={InputsCSS}>
      <div className="row pl-3 pr-3 pt-3">
        <label htmlFor="username" className="user-select-none abba">
          Nume Utilizator
        </label>
        <input
          type="text"
          placeholder="ex: utilizator381"
          name="username"
          className="p-2"
          minlength="6"
          maxlength="20"
          required
        />
      </div>
      <div className="row pl-3 pr-3 pt-3">
        <label htmlFor="password" className="user-select-none abba">
          Parolă
        </label>
        <input
          type="password"
          placeholder="••••••••"
          minlength="6"
          name="password"
          className="p-2"
          required
        />
      </div>
    </div>
  );
}
