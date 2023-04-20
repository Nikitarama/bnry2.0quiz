<template>
  <div class="search-bar">
    <label for="search">Search products</label>
    <input type="search" id="search">
  </div>
  
  
</template>

<script>
export default {
  map(){
    const userCardTemplate = document.querySelector("[data-user-template]")
    const userCardContainer = document.querySelector("[data-user-cards-container]")
    const searchInput = document.querySelector("[data-search]")
    let users = []

    searchInput.addEventListener("input", (e)=> {

      
    })

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
      data.forEach(user => {
        const card = userCardTemplate.content.cloneNode(true).children[0]
        const header = card.querySelector("[data-header]")
        const body = card.querySelector("[data-body]")
        header.textContent = user.name
        body.textContent = user.email 
        userCardContainer.append(card)

        return {name: user.name, email: user.email, element:card }
      })
    })
  }
}


</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
