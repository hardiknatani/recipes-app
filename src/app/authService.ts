export class AuthService {
    loggedIn = true;
  
    isAuthenticated() {
      const promise:Promise<boolean> = new Promise(
        (resolve, reject) => {
          setTimeout(() => {
            resolve(this.loggedIn);
          }, 200);
        }
      );
      return promise;
    }
  
    login() {
      this.loggedIn = true;
    }
  
    logout() {
      this.loggedIn = false;
    }
  }
  