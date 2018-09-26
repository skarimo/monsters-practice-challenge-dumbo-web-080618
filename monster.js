let Monster = (function() {
  return class Monster {
    constructor(name, age, description) {
      this.name = name
      this.age = age
      this.description = description
    }

  static createMonsterDiv(monster) {
    let div = document.createElement("div")
    div.innerHTML = `<h2>${monster.name}</h2><h4>Age: ${monster.age}</h4><p>Bio: ${monster.description}</p>`
    return div
  }

  static renderMonsterDiv(monster) {
    let monsterContainer = document.querySelector("#monster-container")
    let div = Monster.createMonsterDiv(monster)
    monsterContainer.append(div)
  }

  static monsterForm() {
    let monsterFormContainer = document.querySelector("#create-monster")
    monsterFormContainer.innerHTML = `<form id="monster-form"><input id="name" placeholder="name..."><input id="age" placeholder="age..."><input id="description" placeholder="description..."><button>Create</button></form>`
  }

  static createMonsterObject() {
    let name = document.querySelector("#name").value
    let age = document.querySelector("#age").value
    let description = document.querySelector("#description").value

    let newMonster = new Monster(name, age, description)
    return newMonster

  }


  }
})()
