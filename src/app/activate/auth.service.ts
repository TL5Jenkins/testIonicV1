import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private storage: Storage) {
  }

  activate() {
    // TODO call a service to verify activation code, create token and save to storage
    this.storage.set('ePodDriverToken', 'dumnyToken');
    // TODO navigate to list page after activating
  }

  isAuthenticated(): Promise<boolean> {

    return this.storage.get('ePodDriverToken').then((val) => {
      console.log('return true: ' + val);
      if ( val === null ) {
        return false;
      } else {
        return true;
      }
    });

  }

  handleError( error ) {
  }

  quit() {
       // TODO update
  }
}
