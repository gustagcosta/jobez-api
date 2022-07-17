import { v4 as uuid } from 'uuid';

export class BaseEntity {
  constructor(readonly id?: string) {
    if (!id) {
      this.id = uuid();
    }
  }
}
