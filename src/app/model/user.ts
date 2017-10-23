/**
 * Created by Administrator on 2017/10/21.
 */
export class User {
  id: number;
  username: string;
  password: string;

  constructor() {
  }

  build(username: string, password: string): User {
    this.username = username;
    this.password = password;
    return this;
  }
}
