import { Observable } from 'rxjs/Observable';

export abstract class GenericListService {
  abstract getItems(): Observable<any[]>;

  abstract getItem(identifier): Observable<any>;

  abstract saveItem(item);

  abstract deleteItem(item);
}
