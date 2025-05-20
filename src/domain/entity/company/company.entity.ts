export class Company {
  constructor(
    public readonly id: string,
    public name: string,
    public readonly createdAt: Date,
    public status: boolean = true,
  ) {}

  rename(newName: string) {
    if (!newName || newName.trim().length < 3) {
      throw new Error(
        'El nombre de la empresa debe tener al menos 3 caracteres.',
      );
    }
    this.name = newName;
  }

  deactivate() {
    this.status = false;
  }

  activate() {
    this.status = true;
  }

  toPersistence() {
    return {
      id: this.id.toString(),
      name: this.name,
      createdAt: this.createdAt,
      status: this.status,
    };
  }
}
