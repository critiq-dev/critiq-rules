import jakarta.persistence.EntityManager;
import jakarta.servlet.http.HttpServletRequest;

class Repo {
  EntityManager em;

  Object find(HttpServletRequest request) {
    return em
        .createQuery("select u from User u where u.email = '" + request.getParameter("email") + "'")
        .getResultList();
  }
}
