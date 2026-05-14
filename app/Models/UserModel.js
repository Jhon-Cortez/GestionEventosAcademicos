export class UserModel {
    //aca igual, supuesto arreglo hotfix
    static validate(email, password) {

        email = email.trim();

        // validar gmail
        const gmailRegex =
            /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

        if (!gmailRegex.test(email)) {

            alert(
                "Correo inválido, solo se permite @gmail.com"
            );

            return false;
        }

        // password vacío
        if (password.trim() === '') {

            alert(
                "La contraseña es obligatoria"
            );

            return false;
        }

        // redirección
        window.location.href =
            "dashboard.html";

        return true;

    }

}