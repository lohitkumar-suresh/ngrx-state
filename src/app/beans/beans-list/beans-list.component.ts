import { Bean } from './../model/bean';
import { AppState } from './../../store/app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadBeans } from '../state/beans.actions';
import { getBeans, getLoadingStatus } from '../state/beans.selector';

@Component({
  selector: 'app-beans-list',
  templateUrl: './beans-list.component.html',
  styleUrls: ['./beans-list.component.css']
})
export class BeansListComponent implements OnInit {

  beans!: Observable<Bean[]>;
  isLoadingResults!: Observable<boolean>;
  displayedColumns: string[] = ['id', 'intensifier', 'blend_name', 'variety', 'customColumn1'];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.beans = this.store.select(getBeans);
    this.isLoadingResults = this.store.select(getLoadingStatus);
    this.store.dispatch(loadBeans());
  }

  viewDetails(id? :any) {
    alert(`TODO: View Details of: ${id}`);
  }

}
