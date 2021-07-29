import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    try {
      read()
        .then((result) => json(result));
    } catch (error) {
      console.log(error);
    }
  }
}
