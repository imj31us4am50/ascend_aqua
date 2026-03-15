import "./styles2.css";
import Title from "/formcomponents/Title.js";
import Inputs from "/formcomponents/Inputs.js";
import Checkbox from "/formcomponents/Checkbox.js";
import Button from "/formcomponents/Button.js";
import ToSignIn from "/formcomponents/ToSignIn.js";

export default function SignInUpForm() {
  return (
    <div className="container-fluid container-of-signup-form mx-auto p-4 pt-5">
      <Title />
      <form>
        <Inputs />
        <Checkbox />
        <Button />
      </form>
      <ToSignIn />
    </div>
  );
}
