export class UserModel {

    static validate(email, password) {

        if (email !== '' && password !== '') {

            window.location.href =
                window.location.href ="../Views/dashboard.html";

            return true;
        }

        alert("Campos vacíos");

        return false;
    }

}