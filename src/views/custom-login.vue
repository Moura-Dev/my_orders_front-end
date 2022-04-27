<template>
  <div id="login" class="pt-16">
    <div class="fake-header d-flex justify-center align-center">
      <img src="https://img.icons8.com/color/344/vue-js.png" width="40" />
      <h1>ulkan manager</h1>
    </div>
    <v-card class="elevation-7 profile-box">
      <v-toolbar dark color="#08342a">
        <v-toolbar-title>Login</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="login"
            name="login"
            label="Login"
            type="text"
          ></v-text-field>
          <v-text-field
            v-model="password"
            id="password"
            name="password"
            label="Senha"
            type="password"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="success" @click="loginValidation">Login</v-btn>
      </v-card-actions>
    </v-card>
    <div class="text-center">
      <v-snackbar v-model="snackbar" :multi-line="multiLine">
        {{ text }}

        <template v-slot:action="{ attrs }">
          <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
    <div class="text-center">
      <v-snackbar v-model="snackbar2" :multi-line="multiLine">
        {{ text2 }}

        <template v-slot:action="{ attrs }">
          <v-btn color="red" text2 v-bind="attrs" @click="snackbar2 = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: "",
      password: "",
      multiLine: true,
      snackbar: false,
      snackbar2: false,
      text: `Senha incorreta, tente novamente`,
      text2: `Preencha todos os dados para logar`,
    };
  },
  methods: {
    loginValidation() {
      if (
        this.login === "dare" ||
        (this.login === "jota" && this.password === "12345")
      ) {
        this.$router.push("/home");
      } else if (
        (this.login === "" && this.password === "") ||
        this.login === "" ||
        this.password === ""
      ) {
        this.snackbar2 = true;
      } else {
        this.snackbar = true;
      }
    },
  },
};
</script>

<style scoped>
#login {
  background: #051f13;
  width: 100%;
  height: 100%;
  color: white;
}
.fake-header {
  width: 100%;
  height: 67px;
  background: #073f32;
  position: absolute;
  top: 0;
}
.profile-box {
  background: #08342a;
  width: 30%;
  margin: 0 auto;
  margin-top: 4em;
  border: 5px solid rgb(255, 255, 255);
}
</style>
