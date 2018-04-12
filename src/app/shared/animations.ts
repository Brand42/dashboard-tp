import {animate, state, style, transition, trigger} from '@angular/core';

// https://www.udemy.com/the-complete-angular-master-class/learn/v4/t/lecture/7681422?start=0
// Make animations reusable
export let sidemenu = trigger('sideMenuAnime', [
  state('close', style({width:'0px', visibility: 'hidden'})),
  state('open', style({width:'260px'})),
  transition('open => close', animate('500ms ease-in')),
  transition('close => open', animate('500ms ease-out'))
]);

export let mainContainer = trigger('mainContainerAnime', [
  state('close', style({marginLeft:'90px'})),
  state('open', style({marginLeft:'260px'})),
  transition('open => close', animate('500ms ease-in')),
  transition('close => open', animate('500ms ease-out'))
]);

export let hero = trigger('heroAnime', [
  state('close', style({paddingLeft:'105px'})),
  state('open', style({paddingLeft:'280px'})),
  transition('open => close', animate('500ms ease-in')),
  transition('close => open', animate('500ms ease-out'))
]);

export let mobileMenu = trigger('menuAnimeMobile', [
  state('mobileIn', style({transform: 'translate3d(0, 0, 0)'})),
  state('mobileOut', style({transform: 'translate3d(-100%, 0, 0)'})),
  transition('mobileIn => mobileOut', animate('500ms ease-in')),
  transition('mobileOut => mobileIn', animate('500ms ease-out'))
]);

export let mobileMenuIcon = trigger('menuAnimeMobileIcon', [
  state('mobileIn', style({transform: 'translate3d(220px, 0, 0)'})),
  state('mobileOut', style({transform: 'translate3d(0, 0, 0)'})),
  transition('mobileIn => mobileOut', animate('500ms ease-in')),
  transition('mobileOut => mobileIn', animate('500ms ease-out'))
]);
