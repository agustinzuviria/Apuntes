const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;


let chosenMaxLife = 50;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function endRound() {
  const playerDamage = dealPlayerDamage (MONSTER_ATTACK_VALUE)
currentPlayerHealth -= playerDamage;
  if(currentMonsterHealth <=0 && currentPlayerHealth>0) {
    alert("you won");
  } else if(currentPlayerHealth <=0 && currentMonsterHealth>0) {
    alert("you lose")
  } else if (currentMonsterHealth <0 && currentPlayerHealth <0) {
    alert ("you have a draw")
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
  alert(currentPlayerHealth)
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