import { BaseEntity } from './common/base';

export type UserProps = {
  name: string;
  email: string;
  password: string;
};

export class User extends BaseEntity {
  public name: string;
  public email: string;
  public password: string;

  constructor(props: UserProps, id?: string) {
    super(id);

    const splittedName = props.name.split(' ');

    if (splittedName.length <= 1) {
      throw new Error('user name must have at least two words');
    }

    if (splittedName[0].length < 3) {
      throw new Error('first name must have at least 3 caracters');
    }

    if (splittedName[1].length < 2) {
      throw new Error('second name must have at least 2 caracters');
    }

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!emailRegex.test(props.email)) {
      throw new Error('invalid email format');
    }

    if (props.password.length < 8) {
      throw new Error('password must have at least 8 caracters');
    }

    Object.assign(this, props);
  }
}
