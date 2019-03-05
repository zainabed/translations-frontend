import { Injectable } from "@angular/core";
import { UserDetails } from "@app/lib/security/user.details";

@Injectable()
export class UserDetailsService {
    userDetails: UserDetails;
}