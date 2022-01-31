import {  Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

export interface ShrtnLinkJson {
  ok: boolean;
  result: {
    code: string;
    short_link: string;
    full_short_link: string;
    short_link2: string;
    full_short_link2: string;
    short_link3: string;
    full_short_link3: string;
    share_link: string;
    full_share_link: string;
    original_link: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class LinkShortenerApiService {
  private _shrtnUrlBase = 'https://api.shrtco.de/v2/shorten';
  private _receiveUrl = '';

  

  constructor(private http: HttpClient) {}

  getUrl(url: string) {
    this._receiveUrl = url;
  }

  getShrtnUrl(): Observable<ShrtnLinkJson> {
    let getReqUrl = this._shrtnUrlBase + '?url=' + this._receiveUrl;
    return this.http.get<ShrtnLinkJson>(getReqUrl);
  }
}
