export class Auth {
  constructor(
    public readonly id: string,
    public name: string,
    public address: string,
    public active: boolean = true,
  ) {}
}
