import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;
import javax.net.ssl.TrustManagerFactory;
import javax.net.ssl.X509TrustManager;

class ValidatingTrust {
  X509TrustManager defaultManager(TrustManagerFactory factory) {
    return (X509TrustManager) factory.getTrustManagers()[0];
  }
}
