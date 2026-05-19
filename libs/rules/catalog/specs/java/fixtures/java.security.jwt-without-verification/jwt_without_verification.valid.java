import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;

class TokenReader {
  String subject(String rawToken, Algorithm algorithm) {
    JWTVerifier verifier = JWT.require(algorithm).build();
    DecodedJWT verified = verifier.verify(rawToken);
    return verified.getSubject();
  }
}
