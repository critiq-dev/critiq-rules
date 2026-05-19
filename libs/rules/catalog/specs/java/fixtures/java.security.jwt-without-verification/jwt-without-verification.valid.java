import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;

class Fixture {
  DecodedJWT parse(String token, String secret) {
    return JWT.require(Algorithm.HMAC256(secret)).build().verify(token);
  }
}
