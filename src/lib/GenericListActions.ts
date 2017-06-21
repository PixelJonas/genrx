import { Action } from '@ngrx/store';
import { GenericListConfig } from './GenericListConfig';

export class GenericListActions<T> {
  private config;

  constructor(config: GenericListConfig) {
    this.config = config;
  }

  configure<Z extends GenericListConfig>(config: Z) {
    this.config = config;
  }

  loadItems(): Action {
    return {
      type: this.config.LOAD_ITEMS
    };
  }

  loadItemsSuccess(items: T[]): Action {
    return {
      type: this.config.LOAD_ITEMS_SUCCESS,
      payload: items
    };
  }

  getItem(id): Action {
    return {
      type: this.config.GET_ITEM,
      payload: id
    };
  }

  getItemSuccess(item: T): Action {
    return {
      type: this.config.GET_ITEM_SUCCESS,
      payload: item
    };
  }

  resetBlankItem(): Action {
    return {
      type: this.config.RESET_BLANK_ITEM
    };
  }

  saveItem(item: T): Action {
    return {
      type: this.config.SAVE_ITEM,
      payload: item
    };
  }

  saveItemSuccess(): Action {
    return {
      type: this.config.SAVE_ITEM_SUCCESS
    };
  }

  addItem(item: T): Action {
    return {
      type: this.config.ADD_ITEM,
      payload: item
    };
  }

  addItemSuccess(): Action {
    return {
      type: this.config.ADD_ITEM_SUCCESS,
    };
  }

  deleteItem(item: T): Action {
    return {
      type: this.config.DELETE_ITEM,
      payload: item
    };
  }


  deleteItemSuccess(): Action {
    return {
      type: this.config.DELETE_ITEM_SUCCESS
    };
  }
}
