<template>
  <div id="header">
    <div>
      <ul>
        <li class="hover-underline-animation">
          <router-link to="/">Home</router-link>
        </li>
        <li class="hover-underline-animation">
          <router-link to="/clients">Clientes</router-link>
        </li>
        <li class="hover-underline-animation">
          <router-link to="/product">Produtos</router-link>
        </li>
        <li class="hover-underline-animation">
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
  background: #073f32;
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
  text-transform: uppercase;
}

a {
  color: white !important;
  font-weight: bold;
}

/* underline animation */
.hover-underline-animation {
  display: inline-block;
  position: relative;
  color: #0087ca;
}

.hover-underline-animation:after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
