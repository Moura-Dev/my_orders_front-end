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
              <v-text-field
                solo
                dense
                label="Nome"
                v-model="profileDataModel.name"
                :value="profileData.name"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                solo
                dense
                label="CPF"
                v-model="profileDataModel.cpf"
                :value="profileData.cpf"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                solo
                dense
                label="Email"
                v-model="profileDataModel.email"
                :value="profileData.email"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                solo
                dense
                label="Celular"
                v-model="profileDataModel.phoneNumber"
                :value="profileData.phoneNumber"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col><h2>Endereço residencial</h2></v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                solo
                dense
                label="Endereço"
                v-model="profileDataModel.address"
                :value="profileData.address"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                solo
                dense
                label="CEP"
                v-model="profileDataModel.cep"
                :value="profileData.cep"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                solo
                dense
                label="Bairro"
                v-model="profileDataModel.bairro"
                :value="profileData.bairro"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                solo
                dense
                label="Complemento"
                v-model="profileDataModel.complemento"
                :value="profileData.complemento"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                solo
                dense
                label="Cidade/Estado"
                v-model="profileDataModel.state_uf"
                :value="profileData.state_uf"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6"> </v-col>
            <v-col>
              <v-btn @click="saveProfile" color="success"
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
    saveProfile() {
      this.profileData.name = this.profileDataModel.name;
      this.profileData.cpf = this.profileDataModel.cpf;
      this.profileData.email = this.profileDataModel.email;
      this.profileData.phoneNumber = this.profileDataModel.phoneNumber;
      this.profileData.address = this.profileDataModel.address;
      this.profileData.cep = this.profileDataModel.cep;
      this.profileData.bairro = this.profileDataModel.bairro;
      this.profileData.complemento = this.profileDataModel.complemento;
      this.profileData.state_uf = this.profileDataModel.state_uf;
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
  height: 95%;
  margin: 0 auto;
  padding: 2em;
}
</style>
