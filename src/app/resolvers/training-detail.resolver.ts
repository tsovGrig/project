import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot, ActivatedRoute
} from '@angular/router';
import {catchError, map, Observable, of} from 'rxjs';
import {TrainingService} from "../training/training.service";


@Injectable({
  providedIn: 'root'
})
export class TrainingDetailResolver implements Resolve<boolean> {
  id:any;
  constructor(private trainingService:TrainingService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.trainingService.getTrainingById(route.params['id']).pipe(map(training => training.data,
      catchError(error => {
        return of('No data');
      })));
  }
}
