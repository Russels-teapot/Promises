import GameSaving from './GameSaving';
import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  load() {
    read()
      .then((result) => json(result))
      .then((result) => new GameSaving(result));
  }
}
