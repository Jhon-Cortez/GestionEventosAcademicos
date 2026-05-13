export class UserModel{
    static validate(email, password){
        return(
            email !=='' && password!==''
        );
    }
}