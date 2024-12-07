import { NgModule } from '@angular/core';

// PrimeNg
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar'
import { MenuModule } from 'primeng/menu';


@NgModule({
  exports: [
    AvatarModule,
    ButtonModule,
    CardModule,
    MenubarModule,
    MenuModule,
  ]
})
export class PrimeNgModule { }
