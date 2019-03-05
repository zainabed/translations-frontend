import { JwtToken } from "@app/lib/security/jwt.token";

export class UserDetails {
    username: string;
    userId: string;
    roles: [string];
    jwt: JwtToken;
}
