class Fixture {
  void query(org.hibernate.Session session, String name) {
    session.createQuery("FROM User u WHERE u.name = :name").setParameter("name", name);
  }
}
