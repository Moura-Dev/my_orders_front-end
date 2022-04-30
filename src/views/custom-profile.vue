<template>
  <div id="profile" class="pt-5 pb-5">
    <div class="profile-box">
      <v-row>
        <v-col cols="2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            width="100"
          />
        </v-col>
        <v-col>
          <v-row>
            <v-col><h2>Informações</h2></v-col>
          </v-row>
          <v-row>
            <v-col>
              <h3 class="text-box">Tarcísio Almeida</h3>
            </v-col>
            <v-col>
              <h3 class="text-box">111.111.111.11</h3>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <h3 class="text-box">tarcisio.almeida@email.com</h3>
            </v-col>
            <v-col>
              <h3 class="text-box">(91) 99999-9999</h3>
            </v-col>
          </v-row>
          <v-row>
            <v-col><h2>Endereço residencial</h2></v-col>
          </v-row>
          <v-row>
            <v-col>
              <h3 class="text-box">Avenida endereço dos endereços</h3>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <h3 class="text-box">00000-000</h3>
            </v-col>
            <v-col>
              <h3 class="text-box">Nazaré</h3>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <h3 class="text-box">Apartamento 5</h3>
            </v-col>
            <v-col>
              <h3 class="text-box">Belém - PA</h3>
            </v-col>
          </v-row>
          <v-row class="pt-5">
            <v-col cols="6"> </v-col>
            <v-col>
              <v-btn @click="openEditModal" color="success"
                >Editar informações</v-btn
              >
            </v-col>
            <v-col>
              <router-link to="/"
                ><v-btn color="error">Sair da conta</v-btn></router-link
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <!-- MODAL -->
      <v-row>
        <v-dialog v-model="dialog" persistent max-width="600px">
          <v-card>
            <v-card-title>
              <span class="text-h5">Editar informações</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="Nome" required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="CPF"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="Email" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field label="Celular" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field label="Endereço" required></v-text-field>
                  </v-col>
                  <v-col>
                    <v-row>
                      <v-col>
                        <v-text-field label="CEP" required></v-text-field>
                      </v-col>
                      <v-col>
                        <v-text-field label="Bairro" required></v-text-field>
                      </v-col>
                      <v-col>
                        <v-text-field
                          label="Complemento"
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field label="Cidade-Estado" required></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="white--text" color="red" @click="dialog = false">
                Cancelar
              </v-btn>
              <v-btn color="success" @click="dialog = false">
                Salvar informações
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      <!-- MODAL -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      profileData: {
        name: "Tarcísio Almeida",
        cpf: "111.111.111-11",
        email: "tarcisio.almeida@email.com",
        phoneNumber: "(91) 99999-9999",
        address: "Rua exemplo dos exemplos",
        cep: "11111-11",
        bairro: "Nazaré",
        complemento: "Casa",
        state_uf: "Belém - Pará",
      },
      profileDataModel: {
        name: "Tarcísio Almeida",
        cpf: "111.111.111-11",
        email: "tarcisio.almeida@email.com",
        phoneNumber: "(91) 99999-9999",
        address: "Rua exemplo dos exemplos",
        cep: "11111-11",
        bairro: "Nazaré",
        complemento: "Casa",
        state_uf: "Belém - Pará",
      },
    };
  },
  methods: {
    openEditModal() {
      this.dialog = true;
    },
  },
};
</script>

<style scoped>
#profile {
  width: 100%;
  height: 100%;
  background: #051f13;
  color: white;
}

.profile-box {
  background: #08342a;
  width: 70%;
  height: 68%;
  margin: 0 auto;
  padding: 2em;
}

.text-box {
  width: 100%;
  background: white;
  color: black;
  padding: 0.3em;
  border-radius: 2px;
}
</style>
