import { Component, OnInit } from '@angular/core';
import { TabModel } from '../models/tab.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss'
})
export class TabComponent{

  selectedTab: 'all' | 'done' | 'undone' = 'all';

  constructor(public route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.selectedTab = (this.route.snapshot.queryParamMap.get('filter') as 'all' | 'done' | 'undone' ) || 'all';
    this.route.queryParams.subscribe(params => {
      this.selectedTab = params['filter'];
    });
  }


   tabs: TabModel[] = [
    {id: 1, name: 'All Tasks', filter: 'all'},
    {id: 2, name: 'Resolved Tasks', filter: 'done'},
    {id: 3, name: 'Unresolved Tasks', filter: 'undone'},
   ]

}
