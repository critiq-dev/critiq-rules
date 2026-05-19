---
"@critiq/rules": minor
---

Ship 6 new Java audit security catalog rules covering unsafe Jackson polymorphic deserialization, XXE on `DocumentBuilderFactory` / `SAXParserFactory` / `TransformerFactory` / `XMLInputFactory`, Hibernate `Session.createQuery` and `createNativeQuery` string concatenation, the shell form of `Runtime.getRuntime().exec(String)`, and predictable `SecureRandom` seeding.
