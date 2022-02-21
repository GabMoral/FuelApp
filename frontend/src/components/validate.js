export default function validate(data) {
    let errors = {}
    //Username
    if(!data.username.trim()) {
        errors.username = "Username required"
    }
    //Password
    if(!data.password) {
        errors.password = 'Password is required'
    } else if (data.password.length < 6) {
        errors.password = 'Password needs to be 6 characters or more'
    }

    if (!data.password_confirm) {
        errors.password_confirm = 'Password is required'
    } else if(data.password_confirm !== data.password) {
        errors.password_confirm = 'Passwords do not match'
    }

    return errors;
}