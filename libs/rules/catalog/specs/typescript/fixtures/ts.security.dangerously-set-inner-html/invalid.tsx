const unsafeMarkup = { __html: htmlContent };

export function UnsafePanel({
  htmlContent,
}: {
  htmlContent: string;
}) {
  return (
    <section>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      <div dangerouslySetInnerHTML={unsafeMarkup} />
    </section>
  );
}
