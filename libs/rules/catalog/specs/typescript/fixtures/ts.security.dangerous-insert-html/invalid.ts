export function renderUnsafeHtml(
  container: HTMLElement,
  panel: HTMLElement,
  html: string,
) {
  container.outerHTML = html;
  document.write(html);
  document.writeln(html);
  panel.insertAdjacentHTML('beforeend', html);
}
