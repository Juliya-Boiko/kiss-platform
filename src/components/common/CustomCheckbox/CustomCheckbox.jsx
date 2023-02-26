import { CheckboxLabel, CheckboxInput, CheckboxIcon } from "./CustomCheckbox.styled";

export const CustomCheckbox = ({ name, onChange, setShowModal }) => { 
  return (
    <CheckboxLabel>
      <CheckboxInput type="checkbox" name={name} onChange={onChange} />
      <CheckboxIcon />
      <p>I agree to the <span style={{ color: "green" }} onClick={setShowModal}>terms, conditions and Privacy Policy </span></p>
    </CheckboxLabel>
  );
};