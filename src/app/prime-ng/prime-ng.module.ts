import { NgModule } from '@angular/core';

// PrimeNg
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
// import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';


@NgModule({
  exports: [
    // MenuModule,
    AvatarModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    PanelModule,
  ]
})
export class PrimeNgModule { }
