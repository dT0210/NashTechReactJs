import { useEffect, useState } from "react";
import Input from "./Input";

const RegisterForm = () => {
    const [validation, setValidation] = useState({
        username: false,
        email: false,
        gender: false,
        password: false,
        confirmPassword: false,
        agreement: false
    });

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
        gender: 0
    });

    const [touched, setTouched] = useState({ 
        username: false,
        email: false,
        password: false,
        confirmPassword: false
    });

    const handleCheckBoxOnChange = (event) => {
        setValidation({
            ...validation, 
            agreement: event.target.checked
        });
    }

    const handleValueOnChange = (event) => {
        const {name, value} = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
        setTouched(prevTouched => ({
            ...prevTouched,
            [name]: true
        }));
    }

    useEffect(() => {
        if (touched.username) {
            const validateUsername = () => {
                const regex = /^[A-Za-z0-9]{4,}$/;
                const isValid = regex.test(formData.username);
                setValidation(prevValidation => ({
                    ...prevValidation,
                    username: isValid
                }));
            }
            validateUsername();
        }
    }, [formData.username, touched.username]);

    useEffect(() => {
        if (touched.email) {
            const validateEmail = () => {
                const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                const isValid = regex.test(formData.email);
                setValidation(prevValidation => ({
                    ...prevValidation,
                    email: isValid
                }));
            }
            validateEmail();
        }
    }, [formData.email, touched.email]);

    useEffect(() => {
        if (touched.password) {
            const validatePassword = () => {
                const isValid = formData.password.length >= 8;
                setValidation(prevValidation => ({
                    ...prevValidation,
                    password: isValid
                }));
            }
            validatePassword();
        }
        if (touched.confirmPassword) {
            const validateConfirmPassword = () => {
                const isValid = formData.password === formData.confirmPassword;
                setValidation(prevValidation => ({
                    ...prevValidation,
                    confirmPassword: isValid
                }));
            }
            validateConfirmPassword();
        }
    }, [formData.password, formData.confirmPassword, touched.password, touched.confirmPassword]);

    useEffect(() => {
        const isValid = formData.gender != 0;
        setValidation(prevValidation => ({
            ...prevValidation,
            gender: isValid
        }));
    }, [formData.gender])

    return (
        <div className="form-wrapper">
            <form className="form">
                <table>
                    <tbody>
                        <Input 
                            name="username"
                            id="username"
                            type="text"
                            value={formData.username}
                            onChange={handleValueOnChange}
                            placeholder="Username"
                            required={true}
                            label="Username"
                            labelStyle={{width: "140px"}}    
                        />
                        {(touched.username && !validation.username) && (<tr>
                            <td></td>
                            <td className="form-error" id="usernameError">
                                Username must have at least 4 characters, only contains characters A-Z, a-z, 0-9
                            </td>
                        </tr>)}
                        <Input
                            value={formData.email}
                            onChange={handleValueOnChange}
                            placeholder="Email"
                            name="email"
                            id="email"
                            required={true}
                            type="email"
                            label="Email"
                        />
                        {(touched.email && !validation.email) && (<tr>
                            <td></td>
                            <td className="form-error" id="emailError">
                                Email is not valid
                            </td>
                        </tr>)}
                        <tr>
                            <td><label htmlFor="gender">Gender</label></td>
                            <td>
                                <select name="gender" id="gender" value={formData.gender} onChange={handleValueOnChange}>
                                    <option value={0} disabled>--Select gender--</option>
                                    <option value={1}>Male</option>
                                    <option value={2}>Female</option>
                                </select>
                            </td>
                        </tr>
                        <Input
                            value={formData.password}
                            type="password"
                            name="password"
                            id="password"
                            onChange={handleValueOnChange}
                            required={true}
                            placeholder="Password"
                            label="Password"
                        />
                        {(touched.password && !validation.password) && (<tr>
                            <td></td>
                            <td className="form-error" id="passwordError">
                                Password length must be at least 8 characters
                            </td>
                        </tr>)}
                        <Input
                            value={formData.confirmPassword}
                            name="confirmPassword"
                            id="confirmPassword"
                            type="password"
                            onChange={handleValueOnChange}
                            required={true}
                            placeholder="Re-type password"
                            label="Confirm password"
                        />
                        {(touched.confirmPassword && !validation.confirmPassword) && (<tr>
                            <td></td>
                            <td className="form-error" id="confirmPasswordError">
                                Passwords do not match
                            </td>
                        </tr>)}
                        <tr>
                            <td colSpan={2}>
                                <input type="checkbox" name="agreement" id="agreement" checked={validation.agreement} onChange={handleCheckBoxOnChange}/>
                                <label htmlFor="agreement">I have read agreement</label>
                            </td>
                        </tr>
                    </tbody>
                    
                </table>
                <div style={{display: "flex", justifyContent: "center", marginTop: "20px"}}>
                    <button disabled={!Object.keys(validation).every(key => validation[key])}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;