import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {catchError, map, Observable, of} from 'rxjs';
import {TrainingService} from "../training/training.service";

@Injectable({
  providedIn: 'root'
})
export class TrainingResolver implements Resolve<boolean> {
  constructor(private trainingService: TrainingService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.trainingService.getTrainings().pipe(map(training => training.data,
      catchError(error => {
        return of('No data');
      })));

  }
}
