import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { PageEvent } from '@angular/material/paginator';

export interface SearchDTO {
	id: number;
	name: string;
	imageurl: string;
	description: string;
}

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
	public searchresults: SearchDTO[] = [];
	public length: number;
	public pageSize: number;
	public pageSizeOptions: number;
	public displayedColumns: string[] = ['name', 'imageurl', 'description'];

	constructor(private dataService: DataService) {
	}

	ngOnInit() {
		this.getSearchResults();
	}

	public getSearchResults(event? :PageEvent): void {
		console.log('event : ', event);
		this.dataService.getData('/search?itemsperpage=7&pagenumber=1&orderby=id').subscribe((searchresults: SearchDTO) => {
			this.searchresults = JSON.parse(JSON.stringify(searchresults));
			console.log(this.searchresults);
		}, (error: any) => {
			console.error(error);
		});
	}
}
