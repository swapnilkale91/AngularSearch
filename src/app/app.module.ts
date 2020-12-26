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
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon'
import { environment } from 'src/environments/environment';

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
	MatTableModule,
	MatInputModule,
	MatSelectModule,
	MatIconModule
  ],
  providers: [ 
	  { provide: "BACKEND_API_URL", useValue: environment.apiUrl }
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
