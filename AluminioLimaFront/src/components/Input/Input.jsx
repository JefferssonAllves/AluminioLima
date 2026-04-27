import "./Input.css"

const InputText = ({ label }) => {
  return (
    <div className="container">
      <label className="input-label">{label}</label>
      <input className="input-text" type="text" />
    </div>
  );
};

export default InputText;