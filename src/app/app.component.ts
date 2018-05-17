import {Component, trigger, state, style, transition, animate, keyframes, ChangeDetectorRef} from '@angular/core';
import {sidemenu, mainContainer, hero, mobileMenu, mobileMenuIcon} from './shared/animations';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        //  These animations are stored in ./shared/animations
        sidemenu,
        mainContainer,
        hero,
        mobileMenu,
        mobileMenuIcon
        // trigger('myTrigger', [
        //   state('small', style({
        //     transform: 'scale(1)'
        //   })),
        //   state('large', style({
        //     transform: 'scale(1.4)'
        //   })),
        //   state('extraLarge', style({
        //     transform: 'scale(2)'
        //   })),
        //   state('fadeIn', style({
        //     opacity: '1',
        //   })),
        //   // transition('small => large', animate('500ms ease-in')),
        //   // transition('large => small', animate('500ms ease-out'))
        //   // transition('small => large, large => small', animate('500ms'))
        //   // transition('small <=> large', animate('500ms'))
        //   // transition('* => *', animate('500ms ease-in')),
        //   //   transition('void => *', [
        //   //       style({ opacity: '0', transform: 'translateX(200px)'}),
        //   //       animate('500ms 0 ease-out')
        //   //   ])
        //   transition('void => *', [
        //     animate(2000, keyframes([
        //       style({opacity: 0, transform: 'translateY(-30px)', offset: 0}),
        //       style({opacity: 1, transform: 'translateY(5px)', offset: .3}),
        //       style({opacity: 1, transform: 'translateY(0)', offset: 1}),
        //     ]))
        //   ])
        // ]),
        // trigger('removeMe', [
        //   state('out', style({
        //     transform: 'scale(0)',
        //     opacity: 0
        //   })),
        //
        //     transition('* => out', [
        //         animate('500ms 0s ease-in', keyframes([
        //             style({opacity: 1, transform: 'translateX(-8px)', offset: 0}),
        //             style({opacity: 1, transform: 'translateX()', offset: 0.3}),
        //             style({opacity: 0, transform: 'translateX(50px)', offset: 1})
        //         ]))
        //     ])
        // ])
    ]
})
export class AppComponent {

    openClose: string = 'open';

    hideAndShow(): void {

        this.openClose = (this.openClose === 'open') ? 'close' : 'open';

        // alert('alert hideshow' + this.openClose);
    }

    menuState: string = 'mobileOut';

    hideShowMobileMenu() {
        // 1-line if statement that toggles the value:
        this.menuState = this.menuState === 'mobileOut' ? 'mobileIn' : 'mobileOut';
    }

    //Menu tree
    title: String;
    menuList: any;
    selected: any;

    constructor() {
        this.title = 'Collapsible menu - Angular 2';
        this.menuList = [
            {
                'name': 'Training and assessment',
                'subMenu1': ['Study support'],
                'subsubMenu1': [
                    'Study support search',
                    'AAT Accounting Qualifications (AQ2016) updates',
                    'AAT short qualification 2016 updates',
                    'AAT Foundation Diploma in Accounting and Business',
                    'AAT Level 4 Higher Apprenticeship',
                    'AAT Bookkeeping Qualifications',
                    'AAT Access Level 1',
                    'AAT Level 2 Award in Accounting Skills to Run your Business',
                    'AAT Essentials one-day training programmes'
                ],
                'subMenu2': ['Assessments'],
                'subsubMenu2': [
                    'SecureAssess',
                    'SecureAssess support',
                    'Synoptic assessment windows and results',
                    'AAT past papers search',
                    'AAT fees information',
                    'Find an assessment venue'
                ]
            },
            {
                'name': 'Professional zone',
                'subMenu1': ['Professional standards'],
                'subsubMenu1': [
                    'Get started with CPD',
                    'Fit and proper requirements',
                    'Professional ethics'
                ],
                //NO items in this menu tree
                // 'subMenu2': ['Professional standards'],
                // 'subsubMenu2': [
                //     'Professional standards',
                //     'Fit and proper requirements',
                //     'Professional ethics'
                // ]
            },

            {
                'name': 'Support resources',
                'subMenu1': ['For centres'],
                'subsubMenu1': [
                    'Events and support',
                    'EV zone',
                    'Quality assurance resources',
                    'Excel e-learning',
                    'Payment codes for student registration',
                    'AAT in a box',
                    'Career help',
                ],
                'subMenu2': ['Marketing support'],
                'subsubMenu2': [
                    'Promote your centre',
                    'Use AAT logos',
                    'AAT text for your website',
                    'Prospective student presentation',
                    'AAT advertising to support your intake',
                    'Press pack for training providers',
                    'Useful contacts'
                ]
            },
            {
                'name': 'News and events',
                'subMenu1': ['News'],
                'subsubMenu1': [
                    'AAT Comment',
                    'Summing Up',
                    'Training provider news',
                    'AAT Weekly',
                    'Engage'
                ],
                'subMenu2': ['Events'],
                'subsubMenu2': [
                    'Types of events',
                    'Events search',
                    'Event terms and conditions',
                    'My events'
                ]
            }
        ];
    }

    select(item) {
        this.selected = (this.selected === item ? null : item);
    }

    isActive(item) {
        return this.selected === item;
    }

    select1(item1) {
        this.selected = (this.selected === item1 ? null : item1);
    }

    isActiveChild(item1) {
        return this.selected === item1;
    }

    // state: string = 'fadein';
    // // items = ['item1', 'item2', 'item3'];
    // items = new Array();
    // animDetails: string = 'Waiting for this thing';
    // btnState: string = 'in';
    //
    // constructor(private cdRef: ChangeDetectorRef) {
    //
    // }
    //
    //
    // toggleState() {
    //   // this.state = (this.state === 'small' ? 'large' : 'small');
    //   this.items.push('another item');
    //   this.state = 'fadeIn';
    //   this.btnState = 'out';
    // }
    //
    // animStart(event: any) {
    //   console.log('Animation starts');
    //   console.log(event);
    // }
    //
    // animDone(event: any) {
    //   this.animDetails = 'It took me ' + event.totalTime + 'ms to complete.';
    //   this.cdRef.detectChanges();
    //   console.log('Animation finito');
    // }
    //
    // // title = 'Frontpage';
}
