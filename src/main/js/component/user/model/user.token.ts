export interface UserToken {
    sub: string;
    roles: any;
    exp: number;
    username?: string;
    userId?: string;
}