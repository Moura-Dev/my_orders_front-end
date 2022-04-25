<template>
  <div id="header">
    <div>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/company">Empresa</router-link>
        </li>
        <li>
          <router-link to="/product">Produtos</router-link>
        </li>
        <li>
          <router-link to="/order">Pedidos</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
#header {
  width: 100%;
  height: 70px;
  background: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
}

ul {
  display: flex;
}

li {
  list-style: none;
  margin: 0px 45px;
}
</style>
