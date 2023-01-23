export type PartialUser = Partial<User>

export interface User {
  uuid: string;
  name: string;
  lastname: string;
  username: string;
  phone: string;
  photo: string;
  password: string;
  status: string;
}
