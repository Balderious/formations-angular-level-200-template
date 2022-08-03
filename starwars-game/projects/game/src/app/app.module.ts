import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameModule } from './features/game/game.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import {UserModule} from "./features/user/user.module";
import {GameTestComponent} from "./features/game-test/game-test.component";
import {TimerTestComponent} from "./features/timer-test/timer-test.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
  ],
  imports: [
    BrowserModule,
    GameModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    UserModule,
    GameTestComponent,
    TimerTestComponent
  ],
  providers: [
    // SearchService
    // { provide: SearchService, useClass: SearchService }
  ],
  bootstrap: [AppComponent, HeaderComponent, SideBarComponent]
})
export class AppModule { }
