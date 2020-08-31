export class UserDto {

  userId: string;

  password: string;

  constructor() {  }

  asRequestModel(): any {
    return { user_id: this.userId, password: this.password };
  }
}
