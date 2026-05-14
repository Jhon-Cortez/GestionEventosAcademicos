export class UserModel {

    static validate(email, password) {

        if (email !== '' && password !== '') {
            if(password.trmim() === ""){
                alert("Contraseña no puede ser solo espacios en blanco");
                return false;
            }
            return true;
        }
        alert("Campos vacíos");

        return false;
    }

}
//window.location.href =
            //window.location.href ="../Views/dashboard.html";