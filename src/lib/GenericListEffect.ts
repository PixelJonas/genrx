import {Injectable} from '@angular/core';
import {Actions, Effect, toPayload} from '@ngrx/effects';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import {GenericListActions} from './GenericListActions';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {GenericListService} from './GenericListService';
import {GenericListConfig} from './GenericListConfig';

@Injectable()
export abstract class GenericListEffect<T> {
  //noinspection JSUnusedGlobalSymbols
  @Effect()
  loadGenericItems$: Observable<Action> = this.action$
    .ofType(this.config.LOAD_ITEMS)
    .switchMap(() => this.service.getItems())
    .map(items => this.actions.loadItemsSuccess(items));

  //noinspection JSUnusedGlobalSymbols
  @Effect()
  getGenericItem$: Observable<Action> = this.action$
    .ofType(this.config.GET_ITEM)
    .map(toPayload)
    .switchMap(id => this.service.getItem(id))
    .map(item => this.actions.getItemSuccess(item));

  //noinspection JSUnusedGlobalSymbols
  @Effect()
  saveGenericItem$: Observable<Action> = this.action$
    .ofType(this.config.SAVE_ITEM)
    .map(toPayload)
    .switchMap(item => this.service.saveItem(item))
    .map(item => this.actions.saveItemSuccess());

  //noinspection JSUnusedGlobalSymbols
  @Effect()
  addGenericItem$: Observable<Action> = this.action$
    .ofType(this.config.ADD_ITEM)
    .map(toPayload)
    .switchMap(item => this.service.saveItem(item))
    .map(item => this.actions.addItemSuccess());

  //noinspection JSUnusedGlobalSymbols
  @Effect()
  deleteGenericItem$: Observable<Action> = this.action$
    .ofType(this.config.DELETE_ITEM)
    .map(toPayload)
    .switchMap(item => this.service.deleteItem(item))
    .map(item => this.actions.deleteItemSuccess());

  //noinspection JSUnusedGlobalSymbols
  constructor(private action$: Actions,
              private service: GenericListService,
              private actions: GenericListActions<T>,
              private config: GenericListConfig) {
  }
}
