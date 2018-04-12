import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-myprogress',
  templateUrl: './myprogress.component.html',
  styleUrls: ['./myprogress.component.scss']
})
export class MyprogressComponent implements OnInit {

  // User input add new items functionality:
  // code.tutsplus.com/tutorials/creating-a-grocery-list-manager-using-angular-part-1-add-display-items--cms-28586
  // task: string;
  // tasks = [];
  //
  // onClick(){
  //   this.tasks.push({name: this.task});
  //   this.task = '';
  // }

  myprogress = {
    title: 'My progress',
    summary: 'Track your progress through your qualification. You may work through these learning areas in any order.',
    item1: {
      title: 'Accounts preparation',
      task: '2/2 tasks',
      status: 'Completed',
      module: {
        title1: 'Lorem ipsum dolor - sit amet',
        title2: 'Lorem ipsum dolor - sit amet'
      }
    },
    item2: {
      title: 'Accounting Systems and Controls',
      task: '4/4 tasks',
      status: 'Completed',
      module: {
        title1: 'Lorem ipsum dolor - sit amet',
        title2: 'Lorem ipsum dolor - sit amet',
        title3: 'Lorem ipsum dolor - sit amet',
        title4: 'Lorem ipsum dolor - sit amet'
      }
    },
    item3: {
      title: 'Management Accounting',
      task: '2/3 tasks',
      status: 'In progress',
      module: {
        title1: 'Module 1 - Credit Management',
        title2: 'Module 2 - Cash and Treasury Management',
        title3: 'Module 3 - External auditing'
      }
    },
    item4: {
      title: 'Work Effectively in Finance',
      task: '0/2 tasks',
      status: 'Pending',
      module: {
        title1: 'Lorem ipsum dolor - sit amet',
        title2: 'Lorem ipsum dolor - sit amet'
      }
    }
  };

  public my_Class = 'style1';

  toggle_class(){
    if(this.my_Class === 'style1'){
      this.my_Class = 'style2';
    }else{
      this.my_Class = 'style1';
    }
  }

  isClassVisible1: false;
  isClassVisible2: false;
  isClassVisible3: false;
  isClassVisible4: false;

  constructor() { }

  ngOnInit() {
  }

}
