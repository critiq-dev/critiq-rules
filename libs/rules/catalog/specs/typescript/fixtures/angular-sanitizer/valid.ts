import { DomSanitizer } from '@angular/platform-browser';

export class VideoComponent {
  readonly videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    'https://www.youtube.com/embed/dQw4w9WgXcQ',
  );

  constructor(private readonly sanitizer: DomSanitizer) {}
}
