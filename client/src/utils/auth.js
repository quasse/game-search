import decode from "jwt-decode";

class AuthService {
  login(idToken) {
    localStorage.setItem("id_token", idToken);

    window.location.assign("/");
  }

  loggedIn() {
    const token = localStorage.getItem("id_token");
    return !!token && !this.isTokenExpired(token);
  }

  logout(){
    localStorage.removeItem("id_token");
    window.location.assign('/');
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }
}

export default new AuthService();
