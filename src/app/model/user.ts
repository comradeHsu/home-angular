/**
 * Created by Administrator on 2017/10/21.
 */
export class User {
  id: string;
  username: string;
  password: string;
  type: number;
  checked: string;

  constructor() {
  }

  build(username: string, password: string): User {
    this.username = username;
    this.password = password;
    return this;
  }
}
