import { Component, OnInit } from '@angular/core';

import { Sim } from '@ionic-native/sim/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.page.html',
  styleUrls: ['./activate.page.scss'],
})
export class ActivatePage implements OnInit {

  simInfo;

  constructor(private sim: Sim, private platform: Platform) { }

  ngOnInit() {
    console.log('getSimData: called');
    this.platform.ready().then(() => {
      this.sim.getSimInfo().then(
        (info) => {console.log('Sim info: ', info);
              console.log(info);
              this.simInfo = info;
          },
        (err) => console.log('Unable to get sim info: ', err)
      );

      this.sim.hasReadPermission().then(
        (info) => console.log('Has permission: ', info)
      );

      this.sim.requestReadPermission().then(
        () => console.log('Permission granted'),
        () => console.log('Permission denied')
      );
    });
  }

  }
