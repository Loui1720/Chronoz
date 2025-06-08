
function setup() {
  createCanvas(700, 700);
  background(200);
  
  // CLASSES
  orb = new Orb(width / 2, height / 2, 10);
  score = new Score(10, 100, 125, 25);
  currentHighscore = new Score(10, 100 + 125, 125, 25);
  target = new Target(25);
  mysteryBox = new MysteryBox();
  mysteryBoxCounter = new Counter(0, 0, random(5, 10), 0, 0);
  counter = new Counter(width/2 - 750/3.65, height/2 + 750/3, 5, 750, 5);
  startButton = new Button(width/2 - 115/2, height/3, 115, 55, 15, 5, 'START');
  settingsButton = new Button(width/1.25 - 115/2, 25, 170, 55, 15, 5, 'SETTINGS');
  exitSettingsButton = new Button(width/1.25 - 115/2, 25, 85, 55, 15, 5, 'EXIT');
  settings = new Settings(width/1.5, 0, width, height, color(200));
  tryAgainButton = new Button(width/2 - 145/2, height/3, 145, 55, 15, 5, 'Try Again');

  // START VALUES
  currentHighscore.score = jsonData.highscore;
  timeOut = 0;
  
  // STATE
  state = 'START_MENU';
  settingsState = false;
  mysteryBoxShow = false;
  playing = false;
  finished = false;
}



function draw() {
  background(200, 75);
  
  score.show();
  counter.show();
  orb.show();
  
  switch (state) {
    
    case 'START_MENU': // Start menu
      counter.reset();
      score.reset();
      currentHighscore.show();
      startButton.show();
      orb.reset();

      if (settingsState == true) {
        settings.show();
        exitSettingsButton.show();
      }

      if (settingsState == false) {
        settingsButton.show();
      }
      break;
      

    case 'PLAYING': // Playing
      counter.update();
      mysteryBox.show(mysteryBoxShow);
      mysteryBox.update(orb, mysteryBoxShow);
      mysteryBoxCounter.update();
      target.show();
      target.update(orb, score);
      orb.update();
      break;


    case 'PAUSED': // Paused
      textSize(32);
      strokeWeight(2);
      fill(200);
      text('Power Up', width/2 - 115/2 - 10, height/3 + 32 + 5);
      mysteryBoxShow = false;
      mysteryBoxCounter.reset();
      break;
      

    case 'FINISHED': // Try again menu
      currentHighscore.show();
      tryAgainButton.show();
      break;
      
    default:
      break;
  }
  
  mysteryBoxSpawn();
  done();
  
  frameRate(60);
}
