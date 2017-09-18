export class AuthService {
    private loggedIn = false;

    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }

    isLoggedIn() {
        return this.loggedIn;
    }
}