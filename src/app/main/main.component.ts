import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

export interface SearchDTO {
	id: number;
	name: string;
	image: string;
	description: string;
}

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
	public searchresults: SearchDTO[] = [];
	constructor(private dataService: DataService) {
	}

	ngOnInit() {
		this.getSearchResults();
	}

	public getSearchResults(): void {
		this.dataService.getData('/search?itemsperpage=10&pagenumber=1').subscribe((searchresults: SearchDTO) => {
			this.searchresults = JSON.parse(JSON.stringify(searchresults));
			console.log(this.searchresults);
		}, (error: any) => {
			console.error(error);
		});
	}
}
