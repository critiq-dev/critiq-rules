import com.auth0.jwt.JWT;
import com.auth0.jwt.interfaces.DecodedJWT;

class Fixture {
  DecodedJWT parse(String token) {
    return JWT.decode(token);
  }
}
