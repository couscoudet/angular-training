import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GlobalComponent } from './layout/global/global.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainComponent } from './layout/main/main.component';
import { HooksComponent } from './test/hooks/hooks.component';
import { FormsModule } from '@angular/forms';
import { ForLoopComponent } from './exo/for-loop/for-loop.component';
import { SwitchcaseComponent } from './exo/switchcase/switchcase.component';
import { FruitsComponent } from './exo/fruits/fruits.component';
import { ChangeClassComponent } from './exo/change-class/change-class.component';
import { ChangeStyleComponent } from './exo/change-style/change-style.component';
import { PremiereDirectiveDirective } from './premiere-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    GlobalComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HooksComponent,
    ForLoopComponent,
    SwitchcaseComponent,
    FruitsComponent,
    ChangeClassComponent,
    ChangeStyleComponent,
    PremiereDirectiveDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
