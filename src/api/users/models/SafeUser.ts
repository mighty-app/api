export interface SafeUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  picture: string | null;
}

export class RealSafeUser implements SafeUser {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly username: string;
  readonly picture: string | null;

  constructor(id: string, firstName: string, lastName: string, email: string, username: string, picture?: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.username = username;
    this.picture = picture ?? null;
  }
}
