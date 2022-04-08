function superbowlWin(record) {
  let game = record.find((game) => game.result === "W");
  return game ? game.year : undefined;
}
