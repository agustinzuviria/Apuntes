const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;


let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true

adjustHealthBars(chosenMaxLife);

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
resetGame(chosenMaxLife)
}


function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage (MONSTER_ATTACK_VALUE)
currentPlayerHealth -= playerDamage;
if (currentPlayerHealth <=0 && hasBonusLife) {
  hasBonusLife = false;
  removeBonusLife();
  setPlayerHealth(initialPlayerHealth);
  currentPlayerHealth = initialPlayerHealth
  alert("You would be dead, but the bonus life saved you!")
} else if(currentMonsterHealth <=0 && currentPlayerHealth>0) {
    alert("you won");
  } else if(currentPlayerHealth <=0 && currentMonsterHealth>0) {
    alert("you lose")
  } else if (currentMonsterHealth <0 && currentPlayerHealth <0) {
    alert ("you have a draw")
  }
if (currentPlayerHealth <=0 || currentMonsterHealth <=0) {
  reset()
}
 }



function attackMonster (mode) {
  let maxDamage
if (mode === "ATTACK") {
  maxDamage = ATTACK_VALUE
} else {
  maxDamage = STRONG_ATTACK_VALUE
}
const damage = dealMonsterDamage (maxDamage);
  currentMonsterHealth -= damage;
  endRound();
}

function healPlayerHandler () {
  increasePlayerHealth(HEAL_VALUE);
  if(currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    currentPlayerHealth = chosenMaxLife
  } else {
  currentPlayerHealth += HEAL_VALUE
  }
  endRound();
}

function attackHandler() { 
  attackMonster ("ATTACK")
}

function strongAttackHandler() {
  attackMonster ("STRONG_ATTACK")  
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler)
healBtn.addEventListener("click", healPlayerHandler)