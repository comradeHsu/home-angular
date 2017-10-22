/**
 * Created by Administrator on 2017/10/21.
 */
export class User {
  id: number;
  username: string;
  password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}
