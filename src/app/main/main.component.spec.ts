import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../services/data.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';

describe('MainComponent', () => {
	let component: MainComponent;
	let fixture: ComponentFixture<MainComponent>;
	let dataService: DataService;
	const searchresults = {"data":[{"id":5301,"name":"Customer Assurance Liaison","imageurl":"http://loremflickr.com/640/480","description":"Vel voluptatem id repudiandae aut omnis. Deleniti tempore aliquam quia magnam eos. Sunt saepe nisi delectus."},{"id":5302,"name":"Dynamic Infrastructure Designer","imageurl":"http://loremflickr.com/640/480","description":"Quaerat in rerum. Possimus reprehenderit provident ea voluptatem qui et enim. Ducimus ea soluta esse modi quia."},{"id":5303,"name":"Regional Configuration Designer","imageurl":"http://loremflickr.com/640/480","description":"Rerum voluptatibus deleniti. Et quo ea magnam quisquam aliquam sequi sed praesentium. Similique est maiores. Tempora sed ad dolores error deserunt possimus sed perferendis molestiae. Doloribus fuga velit ipsum voluptatem ut ducimus."},{"id":5304,"name":"District Metrics Executive","imageurl":"http://loremflickr.com/640/480","description":"Odit repudiandae et nemo voluptas quae. Voluptatibus inventore iure deserunt aliquid qui esse. Impedit molestias ea sed. Neque perspiciatis excepturi odit. Quibusdam facere dolor. Adipisci recusandae recusandae."},{"id":5305,"name":"International Brand Analyst","imageurl":"http://loremflickr.com/640/480","description":"Fuga cupiditate dolorum eos. Quia vel et eos qui tempora. Et et et et alias at suscipit. Corporis eum nostrum recusandae similique rerum sit perferendis ut. Qui excepturi laborum est et fugit laborum."},{"id":5306,"name":"Human Factors Analyst","imageurl":"http://loremflickr.com/640/480","description":"Quis eos in repudiandae. Dicta dolore rerum unde sapiente. Consequatur ea rerum non alias et sapiente dolore aliquid. Eius quia delectus porro id non voluptas."}],"totalcount":100};

	class MockDataService {

		public getData(uri: string): Observable<any> {
			if (uri.match(/search=([^&]*)/)) {
				return of(searchresults);
			}

			return throwError('no results matched');
		}
	}

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			'declarations': [MainComponent],
			'imports': [
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
			'providers': [
				{ 'provide': DataService, useClass: MockDataService }
			],
			'schemas': [NO_ERRORS_SCHEMA]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MainComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

 	it('should clear search values', () => {
		component.searchvalue = 'search something';
		component.clearSearchValue();
		expect(component.searchvalue).toBe('');
	});

	it('should set search value', () => {
		const spyOngetSearchResults: jasmine.Spy = spyOn(component, 'getSearchResults');
		component.getSearchResultsFromSearchBox('searchvalue');
		expect(component.searchvalue).toBe('searchvalue');
		expect(component.pagenumber).toBe(1);
		expect(spyOngetSearchResults).toHaveBeenCalled();
	});

	it('should set sort variables', () => {
		const spyOngetSearchResults: jasmine.Spy = spyOn(component, 'getSearchResults');
		component.getSearchResultsFromSort({'value': 'Name asc'});
		expect(component.orderby).toBe('Name');
		expect(component.orderdirection).toBe('asc');
		expect(spyOngetSearchResults).toHaveBeenCalled();
	});

	it('should set paging variables', () => {
		const spyOngetSearchResults: jasmine.Spy = spyOn(component, 'getSearchResults');
		let pageevent: PageEvent = {previousPageIndex: 0, pageIndex: 1, pageSize: 6, length: 100}
		component.getSearchResultsFromPaginator(pageevent);
		expect(component.pagenumber).toBe(2);
		expect(spyOngetSearchResults).toHaveBeenCalled();
	});

	it('should does not set paging variables when page event is not passed', () => {
		const spyOngetSearchResults: jasmine.Spy = spyOn(component, 'getSearchResults');
		let pageno = component.pagenumber;
		let pageevent: PageEvent = undefined;
		component.getSearchResultsFromPaginator(pageevent);
		expect(component.pagenumber).toBe(pageno);
		expect(spyOngetSearchResults).toHaveBeenCalled();
	});
});
