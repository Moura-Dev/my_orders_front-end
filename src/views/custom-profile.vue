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
                value="Tarcisio User"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                solo
                dense
                label="CPF"
                value="111.111.111-11"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                solo
                dense
                label="Email"
                value="tarcisio@email.com"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                solo
                dense
                label="Celular"
                value="(91) 99999-9999"
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
                value="Rua exemplo dos exemplos"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                solo
                dense
                label="CEP"
                value="66085-050"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                solo
                dense
                label="Bairro"
                value="Nazaré"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                solo
                dense
                label="Complemento"
                value="Casa"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                solo
                dense
                label="Cidade/Estado"
                value="Belém - Pará"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6"> </v-col>
            <v-col>
              <v-btn color="success">Salvar Alterações</v-btn>
            </v-col>
            <v-col>
              <v-btn color="error">Sair da conta</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

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
