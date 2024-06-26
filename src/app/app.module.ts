import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { FooterComponent } from './_components/footer/footer.component';
import { MemberListComponent } from './_pages/member-list/member-list.component';
import { MemberAddComponent } from './_pages/member-add/member-add.component';
import { TextInputComponent } from './_components/text-input/text-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MemberEditComponent } from './_pages/member-edit/member-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MemberListComponent,
    MemberAddComponent,
    TextInputComponent,
    MemberEditComponent,
  ],
  imports: [AppRoutingModule, BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
