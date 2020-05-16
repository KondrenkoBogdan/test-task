export const required = (value) => {
    if(!value) return "This field can't be empty"
}
export const userNameValidator = (value) => {
    if(!/^[a-zA-Z]{2,15}$/.test(value)) return "Invalid User Name";
}
export const emailValidator = (value) => {
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(value)) return "Invalid email";
}
export const passworldValidation = (value) => {
    if(!/^(?=.*[0-9])(?=.*[a-zA-Z]).{3,}$/.test(value)) return "Invalid password"
}
export const repeatPasswordValidation = (value, allValues) => {
    if(value!==allValues.password) return "Password mismatch"
    debugger
}
