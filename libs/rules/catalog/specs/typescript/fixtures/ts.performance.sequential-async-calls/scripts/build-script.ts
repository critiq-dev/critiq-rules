import { readFile, writeFile } from 'node:fs/promises';

export async function processSponsors(sponsorFiles: string[]): Promise<void> {
  const sponsors: unknown[] = [];
  for (const file of sponsorFiles) {
    const data = await readFile(file, 'utf8');
    const sponsor = JSON.parse(data);
    sponsors.push(sponsor);
  }
  await writeFile('sponsors.json', JSON.stringify(sponsors));
}
