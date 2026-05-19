import java.util.List;
import org.hibernate.Session;

class UserRepo {
  Session session;

  List<User> findByEmail(String email) {
    return session
        .createQuery("from User u where u.email = :email", User.class)
        .setParameter("email", email)
        .getResultList();
  }
}
