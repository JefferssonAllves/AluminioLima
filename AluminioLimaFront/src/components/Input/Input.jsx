import "./Input.css"

const InputText = ({ label, name, onChange}) => {
  return (
    <div className="container-input">
      <label className="input-label" name={name}>{label}</label>
      <input className="input-text" type="text" name={name} onChange={onChange}/>
    </div>
  );
};

export default InputText;