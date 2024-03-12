import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Category} from "../models/category";
import {CategoryRequest} from "../models/requests/categoryRequest";


@Injectable({
    providedIn: 'root'
})
export class CategoriesService {
    private API_PATH = 'http://localhost:8080/api/v1/category';

    constructor(private http: HttpClient) {
    }

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(
                `Backend returned code ${error.status}, body was: `, error.error);
        }
        // Return an observable with a user-facing error message.
        return throwError(() => new Error('Something bad happened; please try again later.'));
    }

    getAllCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(`${this.API_PATH}/all`)
            .pipe(
                catchError(this.handleError)
            );
    }

    createCategory(categoryRequest: CategoryRequest): Observable<Category> {
        return this.http.post<Category>(`${this.API_PATH}/create`,
            categoryRequest,
            {headers: new HttpHeaders({'Content-Type': 'application/json'})})
            .pipe(
                catchError(this.handleError)
            );
    }

    createCategories(categoriesRequest: CategoryRequest[]): Observable<Category[]> {
        return this.http.post<Category[]>(`${this.API_PATH}/create/all`,
            categoriesRequest,
            {headers: new HttpHeaders({'Content-Type': 'application/json'})})
            .pipe(
                catchError(this.handleError)
            );
    }
}
