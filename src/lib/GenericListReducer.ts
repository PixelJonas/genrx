import { Action } from '@ngrx/store';
import * as _ from 'lodash';
import {GenericListConfig} from "./GenericListConfig";


export function reduce<T>(state, action: Action, config: GenericListConfig) {
  const identifierObject = {};
  if (action.payload) {
    identifierObject[`${config.identifier}`] = action.payload[`${config.identifier}`];
  }
  switch (action.type) {
    case config.LOAD_ITEMS_SUCCESS:
      return action.payload;
    case config.ADD_ITEM:
      return [...state, action.payload];
    case config.SAVE_ITEM_SUCCESS: {
      const index = _.findIndex(state, identifierObject);
      if (index >= 0) {
        return [
          ...state.slice(0, index),
          action.payload,
          ...state.slice(index + 1)
        ];
      }
      return state;
    }
    case config.DELETE_ITEM_SUCCESS: {
      return state;
    }
    default:
      return state;
  }
}
