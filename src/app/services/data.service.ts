import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	baseUrl = environment.baseUrl;
	public constructor(private http: HttpClient) { }

	public getData(uri: string): Observable<Object> {
		let url = this.baseUrl + uri;
		return this.http.get(url);
	}
}
