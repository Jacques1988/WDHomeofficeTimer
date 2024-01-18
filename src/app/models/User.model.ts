export class User {
    id: string;
    firstname: string;
    lastname: string;
    birthdate: string;
    username: string;

    constructor(
        id: string,
        firstname: string,
        lastname: string,
        birthdate: string,
        username: string
    ) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthdate = birthdate;
        this.username = username;
    }
}