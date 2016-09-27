import { isNullOrUndefined } from 'util';

export class Objects {

  public static requireNonNull(value: Object, message: String) {
    if (isNullOrUndefined(value)) {
      throw new Error(message.toString());
    }
  }

}
