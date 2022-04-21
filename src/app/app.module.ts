import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { ToastrModule } from 'ngx-toastr';

import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserDialogComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
	FormsModule,
	BrowserAnimationsModule, // required animations module
	ToastrModule.forRoot({
		timeOut: 3000,
		positionClass: 'toast-bottom-right',
		preventDuplicates: true,
	  }), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
