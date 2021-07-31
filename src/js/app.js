import GameSavingLoader from './GameSavingLoader';

const gameSavingLoader = new GameSavingLoader();

try {
  gameSavingLoader.load();
} catch (error) {
  console.log(error);
}
