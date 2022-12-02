export interface User {
    id?: number;
    name: string;
    password: string;
    repeatPassword: string;
    email: string;
    offers: boolean;
    country: string;
    city: string;
}
