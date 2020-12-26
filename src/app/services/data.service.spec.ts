import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';

describe('DataService', () => {
	let service: DataService;
	beforeEach(() => TestBed.configureTestingModule({
		"imports": [HttpClientModule],
		"providers": [
			{ 'provide': 'BACKEND_API_URL', useValue: 'http://localhost:3000' },
			{ 'provide': DataService, useValue: {service} },]
	}));

	it('should be created', () => {
		const service: DataService = TestBed.get(DataService);
		expect(service).toBeTruthy();
	});
});
