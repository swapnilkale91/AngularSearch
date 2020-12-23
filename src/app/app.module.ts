import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { ImageDetailsComponent } from './image-details/image-details.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
	AppComponent,
	MainComponent,
	ImageDetailsComponent,
  ],
  imports: [
	BrowserModule,
	AppRoutingModule,
	BrowserAnimationsModule,
	HttpClientModule,
	MatCardModule,
	MatPaginatorModule,
	MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
