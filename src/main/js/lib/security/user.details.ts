import { JwtToken } from "@app/lib/security/jwt.token";

/**
 * 
 */
export class UserDetails {
    
    username: string;
    id: string;
    roles: [string];
    email?: string;
    jwt?: JwtToken;

   
}
