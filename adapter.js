class Adapter {
  constructor(baseURL){
    this.baseURL = baseURL
  }

  get(path){
    return fetch(path).then(res => res.json())
  }

  getMonstersByPage(page) {
    return this.get(this.baseURL+`?_limit=50&_page=${page}`)
  }

  postMonster(path, data) {
    return fetch((path), {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json()).then(console.log())
  }

}
