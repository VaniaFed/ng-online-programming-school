import {HttpHeaders} from '@angular/common/http';

export const formBodyAndHeaders = (payload: any) => ({
  body: JSON.stringify(payload),
  httpOptions: {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
});
