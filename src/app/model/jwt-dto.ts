export class JwtDto{
    token!: string;
    type!: string;
    nombreUsuario!: string;
    authorities!: string[];

    get Token(): string{
        return this.token;
    }
}