import { Injectable, Inject } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	public constructor(private http: HttpClient, @Inject('BACKEND_API_URL') private apiUrl: string) { }

	public getData(uri: string): Observable<Object> {
		let url = this.apiUrl + uri;
		return this.http.get(url);
	}
}
