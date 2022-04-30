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
          <router-link to="/home">
            <v-btn class="white--text" elevation="0" text v-on="on">
              Home
            </v-btn></router-link
          >
        </li>
        <li class="hover-underline-animation">
          <v-menu offset-y close-on-click>
            <template #activator="{ on }">
              <v-btn class="white--text" elevation="0" text v-on="on">
                Empresas
                <v-icon right> mdi-chevron-down </v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item-group>
                <v-list-item v-for="titles in routes" :key="titles">
                  <v-list-item-content>
                    <v-list-item-title
                      class="d-flex align-center justify-space-between"
                    >
                      <router-link :to="titles.to">
                        <div class="black--text pb-4 pt-4">
                          {{ titles.title }}
                        </div>
                      </router-link>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-menu>
        </li>
        <li class="hover-underline-animation">
          <router-link to="/product">
            <v-btn class="white--text" elevation="0" text v-on="on">
              Produtos
            </v-btn></router-link
          >
        </li>
        <li class="hover-underline-animation">
          <router-link to="/order">
            <v-btn class="white--text" elevation="0" text v-on="on">
              Pedidos
            </v-btn></router-link
          >
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

<script>
export default {
  data() {
    return {
      routes: [
        {
          title: "Clientes",
          to: "/clients",
        },
        {
          title: "Transportadoras",
          to: "/transporter",
        },
        {
          title: "Fábricas",
          to: "/fabric",
        },
      ],
    };
  },
};
</script>

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
