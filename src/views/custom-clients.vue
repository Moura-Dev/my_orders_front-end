/* eslint-disable vue/valid-v-slot */
<template>
  <div class="data-table pb-5">
    <v-data-table
      :headers="headers"
      :items="desserts"
      sort-by="calories"
      class="elevation-7 table"
      :search="search"
      dark
    >
      <template v-slot:top>
        <v-toolbar
          flat
          style="background: #073f32 !important; border-bottom: 1px solid black"
        >
          <v-toolbar-title>Clientes</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="#01B06E" dark class="mb-2" v-bind="attrs" v-on="on">
                Adicionar
              </v-btn>
              <v-text-field
                v-model="search"
                label="Procurar empresa"
                dense
                style="max-width: 300px"
                class="pr-4 pt-3"
              ></v-text-field>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.name"
                        label="Empresa"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.cnpj"
                        label="CNPJ"
                        v-maska="'##.###.###/####-##'"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.state_subscribe"
                        label="Inscrição estadual"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.fantasy_name"
                        label="Nome fantasia"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.telephone"
                        label="Telefone"
                        v-maska="'(##) ####-####'"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.cellphone"
                        label="Celular"
                        v-maska="'(##) #####-####'"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancelar
                </v-btn>
                <v-btn color="blue darken-1" text @click="save"> Salvar </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Tens certeza que desejas remover este cliente?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reset </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data: () => ({
    search: "",
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Empresas",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "CNPJ", value: "cnpj" },
      { text: "Nome fantasia", value: "fantasy_name" },
      { text: "Inscricao estadual", value: "state_subscribe" },
      { text: "Telefone", value: "telephone" },
      { text: "Celular", value: "cellphone" },
      { text: "Editar/Deletar", value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      cnpj: null,
      fantasy_name: "",
      state_subscribe: null,
      telephone: "",
      cellphone: "",
    },
    defaultItem: {
      name: "",
      cnpj: null,
      fantasy_name: "",
      state_subscribe: null,
      telephone: "",
      cellphone: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Adicionar empresa" : "Editar dados";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    filterOnlyCapsText(value, search) {
      return (
        value != null &&
        search != null &&
        typeof value === "string" &&
        value.toString().toLowerCase().indexOf(search) !== -1
      );
    },
    initialize() {
      this.desserts = [
        {
          name: "Valve",
          cnpj: "76.855.726/0001-78",
          fantasy_name: "Valve",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "Toyota",
          cnpj: "58.873.732/0001-76",
          fantasy_name: "Toyota",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
        {
          name: "iFood",
          cnpj: "03.874.572/0001-98",
          fantasy_name: "iFood",
          state_subscribe: 1,
          telephone: "(99) 99999-9999",
          cellphone: "(99) 99999-9999",
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>

<style scoped>
.data-table {
  width: 100%;
  height: 100%;
  background: #051f13;
  margin: 0 auto;
}

.table {
  background: #073f32 !important;
  max-width: 99%;
  margin: 0 auto;
  margin-top: 1em;
  border-radius: 15px;
  opacity: 0.94;
}
</style>
