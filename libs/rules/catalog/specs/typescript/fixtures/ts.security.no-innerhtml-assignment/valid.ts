export function renderSanitizedHtml(
  container: HTMLElement,
  otherContainer: HTMLElement,
  input: string,
) {
  const safeHtml = DOMPurify.sanitize(input);

  container.innerHTML = safeHtml;
  otherContainer.innerHTML = '<div>fixed</div>';
}
