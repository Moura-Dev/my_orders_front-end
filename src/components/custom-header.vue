<template>
  <div id="header">
    <div>
      <router-link to="/home">
        <img src="https://img.icons8.com/color/344/vue-js.png" width="50" />
      </router-link>
    </div>
    <div>
      <ul>
        <li class="hover-underline-animation">
          <router-link to="/home">Home</router-link>
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
    <div class="d-flex align-center justify-center">
      <router-link to="/profile">
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          width="35"
        />
      </router-link>
    </div>
  </div>
</template>

<style scoped>
#header {
  width: 100%;
  height: 75px;
  background: #073f32;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

ul {
  display: flex;
}

li {
  list-style: none;
  margin: 0px 20px;
  text-transform: uppercase;
  font-size: 1rem;
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
