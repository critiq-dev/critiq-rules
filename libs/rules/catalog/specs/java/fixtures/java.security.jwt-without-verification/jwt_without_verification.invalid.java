import com.auth0.jwt.JWT;
import com.auth0.jwt.interfaces.DecodedJWT;

class TokenReader {
  String subject(String rawToken) {
    DecodedJWT decoded = JWT.decode(rawToken);
    return decoded.getSubject();
  }
}
