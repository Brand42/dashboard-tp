import {Injectable} from '@angular/core';

@Injectable()
export class ContentService {

  pages: Object = {
    'home': {
      title: 'Home',
      name: 'Julia',
      content: 'Some home content.',
      image: 'http://lorempixel.com/400/200'
    },
    'about': {
      title: 'About',
      subtitle: 'About Us',
      content: 'Some content about us.',
      image: 'http://lorempixel.com/600/300'
    },
    'contact': {
      title: 'Contact',
      subtitle: 'Contact Us',
      content: 'How to contact us.',
      image: 'http://lorempixel.com/220/100'
    }
  };

  constructor() {
  }

}
