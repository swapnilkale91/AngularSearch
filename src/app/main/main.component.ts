import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { PageEvent, MatPaginator } from '@angular/material/paginator';

export interface SearchDTO {
	id: number;
	name: string;
	imageurl: string;
	description: string;
}

interface Sort {
	value: string;
	viewValue: string;
}

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
	public searchresults: SearchDTO[] = [];
	public searchvalue: string = '';
	public orderby: string = '';
	public orderdirection: string = '';
	public searchresultcount: number;
	public pagenumber: number = 1;
	public itemsperpage: number = 6;
	public itemsperpageoptions: number[] = [6];
	public displayedColumns: string[] = ['id', 'name', 'imageurl', 'description'];
	public sortvalues: Sort[] = [
		{ value: 'name asc', viewValue: 'Name (Ascending)' },
		{ value: 'name desc', viewValue: 'Name (Descending)' },
		{ value: 'datelastedited asc', viewValue: 'Date Last Edited (Ascending)' },
		{ value: 'datelastedited desc', viewValue: 'Date Last Edited (Descending)' },
	];
	public selectedsortvalue: string;

	@ViewChild(MatPaginator, { 'static': false }) paginator: MatPaginator;

	constructor(private dataService: DataService) {
	}

	ngOnInit() {
		this.searchvalue = localStorage.getItem('searchvalue');
		this.selectedsortvalue = localStorage.getItem('sortvalue');
		this.getSearchResults();
	}

	public getSearchResults(): void {
		let queryparams = `/search?search=${this.searchvalue}&orderby=${this.orderby}&orderdirection=${this.orderdirection}&itemsperpage=${this.itemsperpage}&pagenumber=${this.pagenumber}`;
		this.dataService.getData(queryparams).subscribe((searchresults: any) => {
			this.searchresults = JSON.parse(JSON.stringify(searchresults.data));
			this.searchresultcount = searchresults.totalcount;
			console.log(this.searchresults);
		}, (error: any) => {
			console.error(error);
		});
	}

	public getSearchResultsFromPaginator(event?: PageEvent): void {
		this.pagenumber = (event) ? event.pageIndex + 1 : this.pagenumber;
		this.getSearchResults();
	}

	public getSearchResultsFromSearchBox(search: string): void {
		this.searchvalue = search;
		this.pagenumber = 1;
		localStorage.setItem('searchvalue', this.searchvalue);
		this.paginator.firstPage();
		this.getSearchResults();
	}

	public getSearchResultsFromSort(sortevent: any): void {
		this.orderby = sortevent.value.split(' ')[0];
		this.orderdirection = sortevent.value.split(' ')[1];
		localStorage.setItem("sortvalue", sortevent.value);
		this.getSearchResults();
	}

	public clearSearchValue() {
		this.searchvalue = '';
		localStorage.setItem('searchvalue', '');
		this.getSearchResults();
	}
}
