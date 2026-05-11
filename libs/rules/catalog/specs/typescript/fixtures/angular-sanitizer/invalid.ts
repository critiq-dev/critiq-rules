import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

export class ProfileComponent {
  bio = this.sanitizer.bypassSecurityTrustHtml(
    this.route.snapshot.queryParamMap.get('bio') ?? '',
  );

  constructor(
    private readonly sanitizer: DomSanitizer,
    private readonly route: ActivatedRoute,
  ) {}
}
