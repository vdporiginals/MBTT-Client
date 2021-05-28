import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
export interface Frontmatter {
  description?: string;
  date?: string;
  publishedAt?: string;
  updatedAt?: string;
  tags?: string[];
  title: string;
  image: string;
  url?: string;
  readingTime?: number;
}
@Injectable({
  providedIn: 'root',
})
export class MetaService {
  private _defaultImage =
    'http://gs1.org.vn/wp-content/themes/gs1/images/logo.png';

  constructor(
    private readonly meta: Meta,
    private readonly title: Title,
    @Inject(DOCUMENT) private readonly dom: Document
  ) {}

  update(front: Frontmatter) {
    this.title.setTitle(MetaService.getTitle(front.title));

    this.meta.updateTag({
      property: 'og:title',
      content: front.title,
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content: front.title,
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: front.description,
    });

    this.meta.updateTag({
      property: 'og:description',
      content: front.description,
    });

    this.meta.updateTag({
      name: 'description',
      content: front.description,
    });

    this.meta.updateTag({
      property: 'og:url',
      content: front.url,
    });

    if (front.tags?.length) {
      this.meta.updateTag({ name: 'keywords', content: front.tags.join(', ') });
    }

    this.meta.updateTag({
      name: 'twitter:image',
      content: front.image || this._defaultImage,
    });

    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary',
    });

    this.meta.updateTag({
      name: 'twitter:creator',
      content: 'Gs1 Vietnam',
    });

    this.meta.updateTag({
      property: 'og:image',
      content: front.image || this._defaultImage,
    });

    this.updateCanonical(front.url);
  }

  updateTagTitle(tagName: string) {
    this.resetMeta();
    this.title.setTitle(MetaService.getTitle(tagName));
  }

  resetMeta() {
    this.meta.removeTag("property='og:title'");
    this.meta.removeTag("property='og:description'");
    this.meta.removeTag("property='og:url'");
    this.meta.removeTag("name='twitter:title'");
    this.meta.removeTag("name='twitter:description'");
    this.meta.removeTag("name='keywords'");

    this.meta.updateTag({
      name: 'description',
      content: 'Gs1 Vietnam',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: this._defaultImage,
    });

    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary',
    });

    this.meta.updateTag({
      name: 'twitter:creator',
      content: 'Gs1 Vietnam',
    });

    this.meta.updateTag({
      property: 'og:image',
      content: this._defaultImage,
    });
    this.title.setTitle('Gs1 Vietnam');
    this.updateCanonical();
  }

  private static getTitle(title: string) {
    return `${title} | Gs1 Vietnam`;
  }

  private updateCanonical(url: string = environment.API_URL) {
    let head = this.dom.querySelector('head');
    if (head != null && Array.isArray(head)) {
      head = head[0];
    }
    let element: HTMLLinkElement =
      this.dom.querySelector(`link[rel='canonical']`) || null;
    if (!element) {
      element = this.dom.createElement('link') as HTMLLinkElement;
      head?.appendChild(element);
    }
    element.setAttribute('rel', 'canonical');
    element.setAttribute('href', url);
  }
}
