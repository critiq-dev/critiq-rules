export function MultiChild() {
  return (
    <>
      <Header />
      <Content />
    </>
  );
}

function Header() {
  return <h1>Title</h1>;
}

function Content() {
  return <p>Body</p>;
}
