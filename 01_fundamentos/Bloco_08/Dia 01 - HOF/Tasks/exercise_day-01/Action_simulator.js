const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const damegeDragon = (strength) => {
  return Math.floor(Math.random() * (strength - 15) + 15)
}

console.log(damegeDragon(dragon.strength));

const damengeWarrior = (strength, weaponDmg) => {
  const damege = strength * weaponDmg
  return Math.floor(Math.random() * (damege - strength) + strength)
}

console.log(damengeWarrior(warrior.strength, warrior.weaponDmg));

const calculateMagic = (damege, mana) => ({
  
})