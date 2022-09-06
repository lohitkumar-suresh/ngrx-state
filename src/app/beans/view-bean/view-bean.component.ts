import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { Bean } from '../model/bean';

@Component({
  selector: 'app-view-bean',
  templateUrl: './view-bean.component.html',
  styleUrls: ['./view-bean.component.css']
})
export class ViewBeanComponent implements OnInit, OnDestroy {
  bean!: Bean;
  beanSubscription!: Subscription;
  constructor(private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
    });


  }

  ngOnDestroy(): void {
      if(this.beanSubscription){
        this.beanSubscription.unsubscribe();
      }
  }

}
