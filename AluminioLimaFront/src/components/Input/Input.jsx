import "./Input.css"

const InputText = ({ label, onChange}) => {
  return (
    <div className="container-input">
      <label className="input-label">{label}</label>
      <input className="input-text" type="text" onChange={onChange}/>
    </div>
  );
};

export default InputText;