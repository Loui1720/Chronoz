function preload() {
  jsonData = loadJSON('JSON/data.json');
}



function mouseReleased() {
  if (state == 'START_MENU') {
    if (settingsButton.hover() && settingsState == false) {
      settingsState = true;
      return;
    }
    if (startButton.hover() && settingsState == false) {
      state = 'PLAYING';
      return;
    }
  }

  if (settingsState && exitSettingsButton.hover()) {
    settingsState = false;
    return;
  }

  if (state == 'FINISHED' && tryAgainButton.hover()) {
    state = 'START_MENU';
    return;
  }
}



function keyReleased() {
  if (keyCode === 32 && state == 'PLAYING') { // 32 = Spacebare
    state = 'PAUSED';
    return;
  }
  if (keyCode === 32 && state == 'PAUSED') {
    state = 'PLAYING';
    return;
  }
}



function mysteryBoxSpawn() {
  if (mysteryBoxCounter.count < 0 && !mysteryBoxShow && state == 'PLAYING') {
    mysteryBoxShow = true;
    return;
  }
  else if (mysteryBoxCounter.count >= 0 && !mysteryBoxShow && state == 'PLAYING') {
    // TODO
    return;
  }

}



function done() {
  if (counter.count == timeOut) {
    state = 'FINISHED';
    
    if (score.score > jsonData.highscore) {
      jsonData.highscore = score.score;
      currentHighscore.score = jsonData.highscore;
    }
    return;
  }
}
