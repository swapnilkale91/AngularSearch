import { Component, OnInit, Input } from '@angular/core';
import { SearchDTO } from '../main/main.component';

@Component({
	selector: 'app-image-details',
	templateUrl: './image-details.component.html',
	styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {

	constructor() { }

	@Input() public imagedetails: Array<SearchDTO>;

	ngOnInit() {
	}
	
}
