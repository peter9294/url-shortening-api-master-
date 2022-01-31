import { Component, ViewChild, ElementRef } from '@angular/core';
import { KeyValue } from '@angular/common';

import { LinkShortenerApiService } from './../services/link-shortener-api.service';

@Component({
  selector: 'app-link-shortener',
  templateUrl: './link-shortener.component.html',
  styleUrls: ['./link-shortener.component.scss'],
})
export class LinkShortenerComponent {
  url: string = '';
  shrtnUrl?: object = sessionStorage;
  constructor(private linkShortener: LinkShortenerApiService) {}

  @ViewChild('alert') alertBox!: ElementRef;
  @ViewChild('linkBox') linkBox!: ElementRef;

  getShrtnUrl(): void {
    // send url to service
    if (this.url === '') {
      this.alertBox.nativeElement.style.display = 'initial';
      this.linkBox.nativeElement.style.border = '2px solid red';
    } else {
      this.alertBox.nativeElement.style.display = 'none';
      this.linkBox.nativeElement.style.border = 'none';
      this.linkShortener.getUrl(this.url);
      // get shortened link
      this.linkShortener.getShrtnUrl().subscribe((data) =>
        sessionStorage.setItem(
          sessionStorage.length.toString(),
          JSON.stringify({
            original: data.result.original_link,
            result: data.result.short_link,
          })
        )
      );
      this.shrtnUrl = sessionStorage;
    }
  }

  reverseKeyOrder = (
    a: KeyValue<string, string>,
    b: KeyValue<string, string>
  ): number => {
    return a.key > b.key ? -1 : b.key > a.key ? 1 : 0;
  };

  copyLink(link: string, event: any) {
    navigator.clipboard.writeText(JSON.parse(link).result);
    event.target.textContent = 'Copied!';
    event.target.style.backgroundColor = 'hsl(257, 27%, 26%)';
  }
}
