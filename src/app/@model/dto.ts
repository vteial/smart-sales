import {prop} from '@rxweb/reactive-form-validators';

export class UserDto {

  @prop()
  userId: string;
  @prop()
  password: string;

  constructor() {  }

  asRequestModel(): any {
    return { user_id: this.userId, password: this.password };
  }
}

export class Contact {

  @prop()
  id: string;
  @prop()
  name: string;
  @prop()
  phone: string;
  @prop()
  email: string;
  @prop()
  subject: string;
  @prop()
  message: string;
  @prop()
  time: Date;

  constructor() {  }
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

export class Company {

  @prop()
  name: string;
  @prop()
  phone: string;
  @prop()
  fax: string;
  @prop()
  email: string;
  @prop()
  address: string;

  constructor() {  }
}
