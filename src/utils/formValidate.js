
export const formValidateLogin = (email, password) => {
    const validateEmail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(email);
    const validatePassword =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);

    if (!validateEmail) return "Email is not Valid";
    if (!validatePassword) return "Password is not Valid";
    return null;
}