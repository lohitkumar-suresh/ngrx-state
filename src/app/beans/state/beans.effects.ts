import { loadBeans, loadBeansSuccess } from './beans.actions';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BeansService } from "../services/beans.service";
import { map, mergeMap, switchMap } from 'rxjs/operators';

@Injectable()
export class BeansEffects {

  constructor(private actions$: Actions, private beansService: BeansService){

  }

  loadBeans$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadBeans),
      mergeMap((action) => {
        return this.beansService.getPosts().pipe(
          map((beans) => {
            return loadBeansSuccess({ beans });
          })
        );
      })
    );
  });

}
