import React, {useState} from "react";
import s from "./secondPart.module.css"
import { reduxForm, Field } from "redux-form";
import { inputField } from "../../common/formControl";
import {
    required,
    userNameValidator,
    emailValidator,
    passworldValidation,
    repeatPasswordValidation
} from "../../common/validators";
import {EyeInvisibleOutlined} from '@ant-design/icons';

let SecondPart = ({ handleSubmit }) => {

    let [atribute, setAtribute]=useState("password")

    let toggleVisible = () => {
        if(atribute==="password"){
            setAtribute("text")
        } else {
            setAtribute("password")
        }
     }
    debugger
    return (<div className={s.formDiv}>
        <form onSubmit={handleSubmit} className={s.form}>
            <Field name="userName" type="text" placeholder="USER NAME"
                validate={[required, userNameValidator]} component={inputField} />
            <Field name="email" type="text" placeholder="EMAIL"
                validate={[required, emailValidator]} component={inputField} />
            <Field name="firstName" type="text" placeholder="FIRST NAME"
                component={inputField} />
            <Field name="lastName" type="text" placeholder="LAST NAME"
                component={inputField} />
            <Field toggleVisible={toggleVisible} atribute={atribute} name="password" type={atribute} placeholder="PASSWORD"
                validate={[required, passworldValidation]} component={inputField} />
            <Field toggleVisible={toggleVisible} name="repeatPassword" atribute={atribute} type={atribute} placeholder="REPEAT PASSWORD"
                validate={[required, repeatPasswordValidation]} component={inputField} />
            <button>Submit</button>
        </form>
    </div>)
}

SecondPart = reduxForm({ form: "MY-INFO" })(SecondPart)

export default SecondPart;