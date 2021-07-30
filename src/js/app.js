import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

const gameSaving = new GameSaving();
export default class GameSavingLoader {
  static load() {
    try {
      read()
        .then((result) => json(result));
    } catch (error) {
      console.log(error);
    }
    return gameSaving;
  }
}
