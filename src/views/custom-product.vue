/* eslint-disable vue/valid-v-slot */
<template>
  <div class="data-table pb-5">
    <v-data-table
      :headers="headers"
      :loading="loading"
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
          <v-toolbar-title>Produtos</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="#01B06E" dark class="mb-2" v-bind="attrs" v-on="on">
                Adicionar
              </v-btn>
              <v-text-field
                v-model="search"
                label="Procurar produto"
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
                        label="Nome"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.code"
                        label="Código"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.price"
                        label="Preço"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.ipi"
                        label="IPI"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.active"
                        label="Ativo"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-select
                        v-model="editedItem.company"
                        :items="items"
                        label="Fábrica"
                      >
                      </v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.created"
                        label="Criado"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.updated"
                        label="Atualizado"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.description"
                        label="Descrição"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-row>
                  <v-col cols="5">
                    <v-btn color="success">Criar empresa</v-btn>
                  </v-col>
                  <v-col>
                    <v-btn text color="error" @click="close"> Cancelar </v-btn>
                    <v-btn text color="blue darken-1" @click="save">
                      Salvar
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Tem certeza que desejas remover este produto?</v-card-title
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
    items: ["Valve", "iFood", "Toyota", "Jack Daniels"],
    dialog: false,
    loading: true,
    dialogDelete: false,
    headers: [
      {
        text: "Produtos",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Código", value: "code" },
      { text: "Preço", value: "price" },
      { text: "IPI", value: "ipi" },
      { text: "Ativo", value: "active" },
      { text: "Fábrica", value: "company" },
      { text: "Criado", value: "created" },
      { text: "Atualizado", value: "updated" },
      { text: "Descrição", value: "description" },
      { text: "Editar/Deletar", value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      code: "",
      price: "",
      ipi: null,
      active: null,
      company: null,
      created: null,
      updated: null,
      description: "",
    },
    defaultItem: {
      name: "",
      code: "",
      price: "",
      ipi: null,
      active: null,
      company: null,
      created: null,
      updated: null,
      description: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Adicionar produto" : "Editar dados";
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
      setTimeout(() => {
        const ipi = 1;
        this.desserts = [
          {
            name: "Tesoura",
            code: "123-123-123",
            price: "R$ 5,00",
            ipi: `${ipi} %`,
            active: "Sim",
            company: "Tesouras Maker",
            created: "01/01/2022",
            updated: "01/01/2022",
            description: "description",
          },
          {
            name: "Tesoura",
            code: "123-123-123",
            price: "R$ 5,00",
            ipi: `${ipi} %`,
            active: "Sim",
            company: "Tesouras Maker",
            created: "01/01/2022",
            updated: "01/01/2022",
            description: "description",
          },
          {
            name: "Tesoura",
            code: "123-123-123",
            price: "R$ 5,00",
            ipi: `${ipi} %`,
            active: "Sim",
            company: "Tesouras Maker",
            created: "01/01/2022",
            updated: "01/01/2022",
            description: "description",
          },
          {
            name: "Tesoura",
            code: "123-123-123",
            price: "R$ 5,00",
            ipi: `${ipi} %`,
            active: "Sim",
            company: "Tesouras Maker",
            created: "01/01/2022",
            updated: "01/01/2022",
            description: "description",
          },
          {
            name: "Tesoura",
            code: "123-123-123",
            price: "R$ 5,00",
            ipi: `${ipi} %`,
            active: "Sim",
            company: "Tesouras Maker",
            created: "01/01/2022",
            updated: "01/01/2022",
            description: "description",
          },
          {
            name: "Tesoura",
            code: "123-123-123",
            price: "R$ 5,00",
            ipi: `${ipi} %`,
            active: "Sim",
            company: "Tesouras Maker",
            created: "01/01/2022",
            updated: "01/01/2022",
            description: "description",
          },
          {
            name: "Tesoura",
            code: "123-123-123",
            price: "R$ 5,00",
            ipi: `${ipi} %`,
            active: "Sim",
            company: "Tesouras Maker",
            created: "01/01/2022",
            updated: "01/01/2022",
            description: "description",
          },
          {
            name: "Tesoura",
            code: "123-123-123",
            price: "R$ 5,00",
            ipi: `${ipi} %`,
            active: "Sim",
            company: "Tesouras Maker",
            created: "01/01/2022",
            updated: "01/01/2022",
            description: "description",
          },
          {
            name: "Tesoura",
            code: "123-123-123",
            price: "R$ 5,00",
            ipi: `${ipi} %`,
            active: "Sim",
            company: "Tesouras Maker",
            created: "01/01/2022",
            updated: "01/01/2022",
            description: "description",
          },
          {
            name: "Tesoura",
            code: "123-123-123",
            price: "R$ 5,00",
            ipi: `${ipi} %`,
            active: "Sim",
            company: "Tesouras Maker",
            created: "01/01/2022",
            updated: "01/01/2022",
            description: "description",
          },
          {
            name: "Tesoura",
            code: "123-123-123",
            price: "R$ 5,00",
            ipi: `${ipi} %`,
            active: "Sim",
            company: "Tesouras Maker",
            created: "01/01/2022",
            updated: "01/01/2022",
            description: "description",
          },
          {
            name: "Tesoura",
            code: "123-123-123",
            price: "R$ 5,00",
            ipi: `${ipi} %`,
            active: "Sim",
            company: "Tesouras Maker",
            created: "01/01/2022",
            updated: "01/01/2022",
            description: "description",
          },
          {
            name: "Tesoura",
            code: "123-123-123",
            price: "R$ 5,00",
            ipi: `${ipi} %`,
            active: "Sim",
            company: "Tesouras Maker",
            created: "01/01/2022",
            updated: "01/01/2022",
            description: "description",
          },
          {
            name: "Tesoura",
            code: "123-123-123",
            price: "R$ 5,00",
            ipi: `${ipi} %`,
            active: "Sim",
            company: "Tesouras Maker",
            created: "01/01/2022",
            updated: "01/01/2022",
            description: "description",
          },
          {
            name: "Tesoura",
            code: "123-123-123",
            price: "R$ 5,00",
            ipi: `${ipi} %`,
            active: "Sim",
            company: "Tesouras Maker",
            created: "01/01/2022",
            updated: "01/01/2022",
            description: "description",
          },
          {
            name: "Tesoura",
            code: "123-123-123",
            price: "R$ 5,00",
            ipi: `${ipi} %`,
            active: "Sim",
            company: "Tesouras Maker",
            created: "01/01/2022",
            updated: "01/01/2022",
            description: "description",
          },
          {
            name: "Tesoura",
            code: "123-123-123",
            price: "R$ 5,00",
            ipi: `${ipi} %`,
            active: "Sim",
            company: "Tesouras Maker",
            created: "01/01/2022",
            updated: "01/01/2022",
            description: "description",
          },
          {
            name: "Tesoura",
            code: "123-123-123",
            price: "R$ 5,00",
            ipi: `${ipi} %`,
            active: "Sim",
            company: "Tesouras Maker",
            created: "01/01/2022",
            updated: "01/01/2022",
            description: "description",
          },
          {
            name: "Tesoura",
            code: "123-123-123",
            price: "R$ 5,00",
            ipi: `${ipi} %`,
            active: "Sim",
            company: "Tesouras Maker",
            created: "01/01/2022",
            updated: "01/01/2022",
            description: "description",
          },
          {
            name: "Tesoura",
            code: "123-123-123",
            price: "R$ 5,00",
            ipi: `${ipi} %`,
            active: "Sim",
            company: "Tesouras Maker",
            created: "01/01/2022",
            updated: "01/01/2022",
            description: "description",
          },
          {
            name: "Tesoura",
            code: "123-123-123",
            price: "R$ 5,00",
            ipi: `${ipi} %`,
            active: "Sim",
            company: "Tesouras Maker",
            created: "01/01/2022",
            updated: "01/01/2022",
            description: "description",
          },
          {
            name: "Tesoura",
            code: "123-123-123",
            price: "R$ 5,00",
            ipi: `${ipi} %`,
            active: "Sim",
            company: "Tesouras Maker",
            created: "01/01/2022",
            updated: "01/01/2022",
            description: "description",
          },
          {
            name: "Tesoura",
            code: "123-123-123",
            price: "R$ 5,00",
            ipi: `${ipi} %`,
            active: "Sim",
            company: "Tesouras Maker",
            created: "01/01/2022",
            updated: "01/01/2022",
            description: "description",
          },
          {
            name: "Tesoura",
            code: "123-123-123",
            price: "R$ 5,00",
            ipi: `${ipi} %`,
            active: "Sim",
            company: "Tesouras Maker",
            created: "01/01/2022",
            updated: "01/01/2022",
            description: "description",
          },
          {
            name: "Tesoura",
            code: "123-123-123",
            price: "R$ 5,00",
            ipi: `${ipi} %`,
            active: "Sim",
            company: "Tesouras Maker",
            created: "01/01/2022",
            updated: "01/01/2022",
            description: "description",
          },
          {
            name: "Tesoura",
            code: "123-123-123",
            price: "R$ 5,00",
            ipi: `${ipi} %`,
            active: "Sim",
            company: "Tesouras Maker",
            created: "01/01/2022",
            updated: "01/01/2022",
            description: "description",
          },
          {
            name: "Tesoura",
            code: "123-123-123",
            price: "R$ 5,00",
            ipi: `${ipi} %`,
            active: "Sim",
            company: "Tesouras Maker",
            created: "01/01/2022",
            updated: "01/01/2022",
            description: "description",
          },
          {
            name: "Tesoura",
            code: "123-123-123",
            price: "R$ 5,00",
            ipi: `${ipi} %`,
            active: "Sim",
            company: "Tesouras Maker",
            created: "01/01/2022",
            updated: "01/01/2022",
            description: "description",
          },
          {
            name: "Tesoura",
            code: "123-123-123",
            price: "R$ 5,00",
            ipi: `${ipi} %`,
            active: "Sim",
            company: "Tesouras Maker",
            created: "01/01/2022",
            updated: "01/01/2022",
            description: "description",
          },
          {
            name: "Tesoura",
            code: "123-123-123",
            price: "R$ 5,00",
            ipi: `${ipi} %`,
            active: "Sim",
            company: "Tesouras Maker",
            created: "01/01/2022",
            updated: "01/01/2022",
            description: "description",
          },
          {
            name: "Tesoura",
            code: "123-123-123",
            price: "R$ 5,00",
            ipi: `${ipi} %`,
            active: "Sim",
            company: "Tesouras Maker",
            created: "01/01/2022",
            updated: "01/01/2022",
            description: "description",
          },
          {
            name: "Tesoura",
            code: "123-123-123",
            price: "R$ 5,00",
            ipi: `${ipi} %`,
            active: "Sim",
            company: "Tesouras Maker",
            created: "01/01/2022",
            updated: "01/01/2022",
            description: "description",
          },
          {
            name: "Tesoura",
            code: "123-123-123",
            price: "R$ 5,00",
            ipi: `${ipi} %`,
            active: "Sim",
            company: "Tesouras Maker",
            created: "01/01/2022",
            updated: "01/01/2022",
            description: "description",
          },
          {
            name: "Tesoura",
            code: "123-123-123",
            price: "R$ 5,00",
            ipi: `${ipi} %`,
            active: "Sim",
            company: "Tesouras Maker",
            created: "01/01/2022",
            updated: "01/01/2022",
            description: "description",
          },
          {
            name: "Tesoura",
            code: "123-123-123",
            price: "R$ 5,00",
            ipi: `${ipi} %`,
            active: "Sim",
            company: "Tesouras Maker",
            created: "01/01/2022",
            updated: "01/01/2022",
            description: "description",
          },
          {
            name: "Tesoura",
            code: "123-123-123",
            price: "R$ 5,00",
            ipi: `${ipi} %`,
            active: "Sim",
            company: "Tesouras Maker",
            created: "01/01/2022",
            updated: "01/01/2022",
            description: "description",
          },
          {
            name: "Tesoura",
            code: "123-123-123",
            price: "R$ 5,00",
            ipi: `${ipi} %`,
            active: "Sim",
            company: "Tesouras Maker",
            created: "01/01/2022",
            updated: "01/01/2022",
            description: "description",
          },
          {
            name: "Tesoura",
            code: "123-123-123",
            price: "R$ 5,00",
            ipi: `${ipi} %`,
            active: "Sim",
            company: "Tesouras Maker",
            created: "01/01/2022",
            updated: "01/01/2022",
            description: "description",
          },
          {
            name: "Tesoura",
            code: "123-123-123",
            price: "R$ 5,00",
            ipi: `${ipi} %`,
            active: "Sim",
            company: "Tesouras Maker",
            created: "01/01/2022",
            updated: "01/01/2022",
            description: "description",
          },
          {
            name: "Tesoura",
            code: "123-123-123",
            price: "R$ 5,00",
            ipi: `${ipi} %`,
            active: "Sim",
            company: "Tesouras Maker",
            created: "01/01/2022",
            updated: "01/01/2022",
            description: "description",
          },
          {
            name: "Tesoura",
            code: "123-123-123",
            price: "R$ 5,00",
            ipi: `${ipi} %`,
            active: "Sim",
            company: "Tesouras Maker",
            created: "01/01/2022",
            updated: "01/01/2022",
            description: "description",
          },
        ];
        this.loading = false;
      }, 1200);
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
