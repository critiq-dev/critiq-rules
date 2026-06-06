export function renderUnsafeHtml(
  req: { query: { html: string } },
  container: HTMLElement,
  panel: HTMLElement,
) {
  const html = req.query.html;
  container.outerHTML = html;
  document.write(html);
  document.writeln(html);
  panel.insertAdjacentHTML('beforeend', html);
}
