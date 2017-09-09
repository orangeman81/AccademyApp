import { Injectable } from '@angular/core';

import * as feathers from 'feathers/client';
import * as reactive from 'feathers-reactive';
import * as io from 'socket.io-client';
import * as hooks from 'feathers-hooks';
import * as socketio from 'feathers-socketio/client';
import * as authentication from 'feathers-authentication-client';

// TS Lint will complain here. Unfortunately feathers-reactive needs the entire Rx object passed on creation.
import * as Rx from 'rxjs';

/**
 * Simple wrapper for feathers
 */
@Injectable()
export class Feathers {
  // There are no proper typings available for feathers, due to its plugin-heavy nature
  private _feathers: any;
  private _socket: any;

  constructor() {
    this._socket = io(window.location.hostname);       // init socket.io

    this._feathers = feathers();                      // init Feathers
    this._feathers.configure(hooks());                // add hooks plugin
    this._feathers.configure(reactive(Rx, {               // add feathers-reactive plugin
      idField: '_id'
    })); 
    this._feathers.configure(socketio(this._socket)); // add socket.io plugin
    this._feathers.configure(authentication({         // add authentication plugin
      storage: window.localStorage
    }));
  }

  public service(name: string) {
    return this._feathers.service(name);
  }

  public authenticate(credentials?): Promise<any> {
    return this._feathers.authenticate(credentials);
  }

  public logout() {
    return this._feathers.logout();
  }
}