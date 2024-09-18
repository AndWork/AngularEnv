import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { provideHttpClient } from "@angular/common/http";
import { ItemListComponent } from "./item-list/item-list.component";
import { FormsModule } from '@angular/forms';
import { AppRoutesModule } from "./app.routes";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [ItemListComponent],
    imports: [BrowserModule, FormsModule],
    providers: [provideHttpClient()],
})

export class AppModule { }
              

/*OLD import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { UserListComponent } from "./components/user-list/user-list.component";
import { UserAddComponent } from "./components/user-add/user-add.component";

@NgModule({
    declarations: [
        UserListComponent,
        UserAddComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppComponent,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }*/