import javax.xml.stream.XMLInputFactory;

class Fixture {
  XMLInputFactory factory() {
    XMLInputFactory xif = XMLInputFactory.newInstance();
    xif.setProperty(XMLInputFactory.SUPPORT_DTD, false);
    return xif;
  }
}
