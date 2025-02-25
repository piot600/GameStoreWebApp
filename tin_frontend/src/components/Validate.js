export const validateNotEmpty = (value) => {
    console.log(value)
    if(value === 0) return 'Pole nie może być puste';
        return value.trim() !== '' ? '' : 'Pole nie może być puste';
};

export const validateNumber = (value) => {
    const notEmptyError = validateNotEmpty(value);
    if (notEmptyError) {
        return notEmptyError;
    }
    return !isNaN(value) ? '' : 'Błąd! Wprowadź liczbę';
};

export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? '' : 'Błędny adres email';
};

export const validatePasswordLength = (password) => {
    return password.length >= 5 ? '' : 'Hasło musi mieć co najmniej 5 znaków';
};
