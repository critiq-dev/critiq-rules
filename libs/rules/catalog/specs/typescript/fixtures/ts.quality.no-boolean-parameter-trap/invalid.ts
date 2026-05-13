export function saveInvoice(id: string, sendEmail: boolean, dryRun: boolean) {
  return { id, sendEmail, dryRun };
}
