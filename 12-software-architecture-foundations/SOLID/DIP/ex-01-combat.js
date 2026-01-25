const DEFAULT_RANDOM_DEMMAGE = 10;

const createCharacter = (name) => ({
  name,
});

const withHealth = (newHealth) => (state) => ({
  setHealth(newHealth) {
    state.health = newHealth;
  },

  getHealth() {
    return state.health;
  }
});

const withDemage = (demage) => (state) => ({
  demage,
  getDemage() {
    return state.demage;
  }
});

const extractCombatStats = (attacker, target) => {
  return {
    hit: attacker.hit ?? 0,
    demage: target.demage ?? 0,
  }
}

const randomDemageNumber = () => {
   return  Math.floor(Math.random() * DEFAULT_RANDOM_DEMMAGE);
}

const calculateDemage = ({hit, demage}) => {
    const randomDemage = randomDemageNumber();

    return hit + demage + randomDemage;
}

const calculateHealth = (oldHealth, demage) => {
  const calculatedHealth = oldHealth - demage;

  return calculatedHealth > 0 ? calculatedHealth : 0;
};

const hit = (attacker, target) => {
    const combatStats = extractCombatStats(attacker, target);
    const targetHealth = target.getHealth();
    const calculatedDemage = calculateDemage(combatStats)
    const newHealth = calculateHealth(targetHealth, calculatedDemage)
    console.log(`${attacker.name} hits ${target.name} for ${calculatedDemage} points of demage!`);
    target.setHealth(newHealth);
};

const isTargetDeadCheck = (newHealth) => {
  if(newHealth < 1) {
    return true;
  }

  return false;
};

const extractResultData = (isTargetDead, target, attacker, newHealth) => {
  return {
    isTargetDead,
    targetName: target.name,
    attackerName: attacker.name,
    newHealth
  }
}

const showMsgAfterHit = ({isTargetDead,targetName, attackerName, newHealth})=> {
  if(isTargetDead) {
    return  console.log(`${targetName} is Dead. ${attackerName} won the game`)
  }

  console.log(`${targetName} has just ${newHealth} left`)
}

const engine = (log) => (attacker, target) => {
  hit(attacker,target);

  const targetNewHealth = target.getHealth();
  const isTargetDead = isTargetDeadCheck(targetNewHealth);
  const extractedResultData = extractResultData(isTargetDead, target, attacker, targetNewHealth)

  log(extractedResultData)
}

const createHero = ({name, health, demage}) => {
  const state = {name, health, demage};

  return Object.assign({}, createCharacter(name), withHealth(health)(state), withDemage(demage)(state))
}

const hero = createHero({name: 'Hero', health: 100, demage: 10});

const monster = createHero({name: 'Monster', health: 50, demage: 20});

engine(showMsgAfterHit)(hero, monster);
engine(showMsgAfterHit)(monster, hero);
engine(showMsgAfterHit)(hero, monster);
