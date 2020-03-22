import { Observable } from 'rxjs';

export abstract class Registration {
    abstract register(user: User): Observable<User>;
}