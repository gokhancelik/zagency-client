import { NgModule } from '@angular/core';

import { HeaderComponent } from './header';
import { FooterComponent } from './footer';

@NgModule({
    imports: [],
    exports: [HeaderComponent, FooterComponent],
    declarations: [HeaderComponent, FooterComponent],
    providers: [],
})
export class ThemeModule { }
