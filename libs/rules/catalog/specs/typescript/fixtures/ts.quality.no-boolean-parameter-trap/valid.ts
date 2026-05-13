export function saveInvoice(
  id: string,
  options: { sendEmail: boolean; dryRun: boolean },
) {
  return { id, options };
}
