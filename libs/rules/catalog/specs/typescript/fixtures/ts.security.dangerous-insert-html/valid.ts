export function renderSafeHtml(
  container: HTMLElement,
  panel: HTMLElement,
  html: string,
) {
  const safeHtml = DOMPurify.sanitize(html);

  container.outerHTML = '<section>fixed</section>';
  document.write(`<div>${safeHtml}</div>`);
  document.writeln('<div>fixed</div>');
  panel.insertAdjacentHTML('beforeend', `<div>${safeHtml}</div>`);
}
