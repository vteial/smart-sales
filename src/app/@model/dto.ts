import {prop} from '@rxweb/reactive-form-validators';

export class UserDto {

  userId: string;
  password: string;

  constructor() {  }

  asRequestModel(): any {
    return { user_id: this.userId, password: this.password };
  }
}

export class Testimonial {

  @prop()
  id: number;
  @prop()
  name: string;
  @prop()
  designation: string;
  @prop()
  description: string;

  constructor() {  }
}
