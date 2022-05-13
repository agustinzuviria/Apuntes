
// Global Constantes
const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

// Values
const MODE_ATTACK = "ATTACK";
const MODE_STRONG_ATTACK = "STRONG_ATTACK";
const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_EVENT_PLAYER_STRONG_ATTACK = "PLAYER_STRONG_ATTACK";
const LOG_EVENT_MONSTER_ATTACK = "MONSTER_ATTACK";
const LOG_EVENT_PLAYER_HEAL = "PLAYER_HEAL";
const LOG_EVENT_END_GAME = "PLAYER_END_GAME";

const enteredValue = prompt ("Set Max life", "100")


let chosenMaxLife = parseInt(enteredValue);
if (isNaN (chosenMaxLife) || chosenMaxLife <=0 ) {
  chosenMaxLife = 100
}

let battleLog = [];

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true

adjustHealthBars(chosenMaxLife);

function writeToLog(event, value, monsterHealth, playerHealth) { 
  let logEntry;
  
    logEntry = {
    event: event,
    value: value,
    finalMonsterHealth: monsterHealth,
    finalPlayerHealth: playerHealth};
   battleLog.push(logEntry)
}

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
resetGame(chosenMaxLife);
writeToLog(
  LOG_EVENT_END_GAME, 
  "RESET GAME!", 
  currentMonsterHealth, 
  currentPlayerHealth
);
}


function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage (MONSTER_ATTACK_VALUE)
currentPlayerHealth -= playerDamage;
writeToLog(
  LOG_EVENT_MONSTER_ATTACK, 
  playerDamage, 
  currentMonsterHealth, 
  currentPlayerHealth
);

if (currentPlayerHealth <=0 && hasBonusLife) {
  hasBonusLife = false;
  removeBonusLife();
  setPlayerHealth(initialPlayerHealth);
  currentPlayerHealth = initialPlayerHealth
  alert("You would be dead, but the bonus life saved you!")
} else if(currentMonsterHealth <=0 && currentPlayerHealth>0) {
  alert("you won");
  writeToLog(
    LOG_EVENT_END_GAME, 
    "Player Won", 
    currentMonsterHealth, 
    currentPlayerHealth
  );
} else if(currentPlayerHealth <=0 && currentMonsterHealth>0) {
alert("you lose");
writeToLog(
  LOG_EVENT_END_GAME, 
  "Player Lose", 
  currentMonsterHealth, 
  currentPlayerHealth
);
} else if (currentMonsterHealth <0 && currentPlayerHealth <0) {
  alert ("you have a draw");
  writeToLog(
    LOG_EVENT_END_GAME, 
    "Draw", 
    currentMonsterHealth, 
    currentPlayerHealth
  );
}
if (currentPlayerHealth <=0 || currentMonsterHealth <=0) {
  reset();
}
 }

// BattleFunctions

function attackMonster (mode) {
  let maxDamage
if (mode === MODE_ATTACK) {
  maxDamage = ATTACK_VALUE
  writeToLog(
    LOG_EVENT_PLAYER_ATTACK, 
    ATTACK_VALUE, 
    currentMonsterHealth, 
    currentPlayerHealth
  );
} else {
  maxDamage = STRONG_ATTACK_VALUE
  writeToLog(
    LOG_EVENT_PLAYER_STRONG_ATTACK, 
    STRONG_ATTACK_VALUE, 
    currentMonsterHealth, 
    currentPlayerHealth
  );
}
const damage = dealMonsterDamage (maxDamage);
  currentMonsterHealth -= damage;
  endRound();
}


// Handler Functions
function healPlayerHandler () {
  increasePlayerHealth(HEAL_VALUE);
  if(currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    currentPlayerHealth = chosenMaxLife
  } else {
  currentPlayerHealth += HEAL_VALUE
  }
  endRound();
}

function printLogHandler () {
  console.log(battleLog)
}

function attackHandler() { 
  attackMonster (MODE_ATTACK)
}

function strongAttackHandler() {
  attackMonster (MODE_STRONG_ATTACK)  
}


// Event Listeners
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler)
healBtn.addEventListener("click", healPlayerHandler)
logBtn.addEventListener("click", printLogHandler)