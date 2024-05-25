const Input = (props) => {
    const {name, id, type, value, onChange, placeholder, required, inputStyle, label, labelStyle} = props;
    return (
        <tr>
            <td style={labelStyle}><label htmlFor={id}>{label}</label></td>
            <td>
                <input 
                    value={value}
                    type={type} 
                    name={name}
                    id={id}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    style={inputStyle}
                />
            </td>
        </tr>
    );
}

export default Input;