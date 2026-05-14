import { UserModel }
    from "../../app/Models/UserModel.js";

const form =
    document.getElementById("login");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    UserModel.validate(
        email,
        password
    );

});