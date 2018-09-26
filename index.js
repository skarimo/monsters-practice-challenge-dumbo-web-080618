document.addEventListener("DOMContentLoaded", () => {
  const URL = "http://localhost:3000/monsters/"
  let adapter = new Adapter(URL)
  let page = 1
  Monster.monsterForm()
  getMonstersAndRender(page)


  document.addEventListener("click", (e) => {

    if (e.target.id === "forward") {
      page = page + 1
      getMonstersAndRender(page)

    } else if (e.target.id === "back") {
      page = page - 1
      if (page === 0) {
        alert("no monsters here")
        page = 1
      }
      getMonstersAndRender(page)

    }
  })

  let createButton = document.querySelector("#monster-form").querySelector("button")
  createButton.addEventListener("click", (e) => {
    e.preventDefault()
    let data = Monster.createMonsterObject()
    console.log(data)
    adapter.postMonster(URL, data)
    window.location = window.location.href;
  })



function getMonstersAndRender(page) {

  let monsterContainer = document.querySelector("#monster-container")
  monsterContainer.innerHTML = ""
    adapter.getMonstersByPage(page)
    .then((monsterList) => {
      if (monsterList.length > 0) {
        monsterList.forEach(function(monster) {
        Monster.renderMonsterDiv(monster)
      })
    }
    })

}

})
