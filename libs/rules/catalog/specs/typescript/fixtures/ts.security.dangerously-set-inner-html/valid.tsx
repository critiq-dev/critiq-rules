const safeMarkup = { __html: DOMPurify.sanitize(htmlContent) };

export function SafePanel({
  htmlContent,
}: {
  htmlContent: string;
}) {
  return (
    <section>
      <div dangerouslySetInnerHTML={safeMarkup} />
      <div dangerouslySetInnerHTML={{ __html: '<p>fixed</p>' }} />
    </section>
  );
}
