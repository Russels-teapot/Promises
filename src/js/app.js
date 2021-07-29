import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    read()
      .then((result) => json(result));
  }
}
