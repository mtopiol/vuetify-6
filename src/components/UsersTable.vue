/*
 *  Composant Users
 */
 
<template >
  <v-row align="center" class="list px-3 mx-auto">
    <v-col cols="8" md="4">
      <v-text-field
        v-model="searchbyname"
        append-icon="mdi-magnify"
        label="Rechercher un utilisateur"
        single-line
        hide-details
      ></v-text-field>
    </v-col>

    <v-col cols="12" sm="12">

      <v-card>
        <v-data-table
          :headers="headers"
          :items="users"
          :items-per-page="5"
          @click:row="selectRow"
          :multi-sort="true"
          :search="searchbyname"
          
        >
          <template #item.full_name="{ item }">{{ item.name }} {{ item.firstname }}</template>

          <template v-slot:top>
              <v-toolbar flat color="white">
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" max-width="500px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        color="#253f8a"
                        dark
                        class="mb-2"
                        v-bind="attrs"
                        v-on="on"
                    >Ajout</v-btn>
                  </template>
                  <v-card>
                    <v-card-title  >
                        <span class="headline">{{ formTitle }}</span>
                    </v-card-title>

                    <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col cols="12" sm="6" md="6">
                              <v-text-field 
                                v-model="editedItem.name" 
                                label="Nom">
                              </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                              <v-text-field 
                                v-model="editedItem.firstname" 
                                label="Prenom">
                              </v-text-field>
                            </v-col>
                          </v-row>
                          <v-row>                                                
                            <v-col cols="12" sm="6" md="6">
                              <v-text-field   
                                v-model="editedItem.email" 
                                label="Email">
                              </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                              <v-select
                                :items="roles"
                                item-text="name"
                                item-value="id"              
                                label="Role"
                                v-model="editedItem.roleid"                
                                standard
                              ></v-select>                            
                            </v-col>
                          </v-row>
                          <v-row>                                                
                              <v-col cols="12" sm="6" md="6">
                                <div>Compte :</div>
                              <template> 
                              <v-switch l v-model="editedItem.isActif"></v-switch>
                              </template>                           
                              </v-col>
                          </v-row>
                        </v-container>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="close">Annuler</v-btn>
                        <v-btn color="blue darken-1" text @click="save">Sauvegarder</v-btn>
                    </v-card-actions>
                  </v-card>
              </v-dialog>
              </v-toolbar>
          </template>

          /* Template pour le composant isActif 
          <template v-slot:item.isActif="{ item }"  >
            <v-switch
              v-model="item.isActif" height="5px"
              disabled 
            ></v-switch>
          </template>

          /* Template pour les options edit et delete
          <template v-slot:item.actions="{ item }">
              <div class="text-truncate">
                <v-icon
                  class="mr-2"
                  @click="editItem(item)"
                  color="primary" 
                >
                  mdi-pencil
                </v-icon>
                <v-icon
                  @click="deleteItem(item)"
                  color="pink" 
                >
                  mdi-delete
                </v-icon>
            </div>
          </template>

        </v-data-table>
      </v-card>
    </v-col>
  </v-row>      
</template>

<script>
export default {
  name: 'UsersTable',
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    dialog: false,
    searchbyname: '',
    headers: [
      { text: 'Identifiant', value: 'id' },
      { text: 'Nom', value: 'full_name' },
      { text: 'Email', value: 'email' },
      { text: 'Role', value: 'role' },
      { text: 'Compte Actif', value: 'isActif' },
      { text: 'Action', value: 'actions', sortable: false },      
    ],

    roles: [
        { 
          id: 1,
          name:'Admin'
        },
        {
          id: 2,
          name: 'Secretariat'
        },
        {
          id: 3,
          name: 'Atelier'
        },
        {
          id: 4,
          name: 'Commercial'
        },
        {
          id: 5,
          name: 'Ingenieur '
        }
    ],

    editedIndex: -1,
    editedItem: {
      name: '',
      firstname: '',
      email: '',
      roleid: 0,
      role: "",
      isActif: 0,
    },
    defaultItem: {
      name: '',
      firstname: '',
      email: '',
      roleid: 0,      
      role: "",
      isActif: 0,
    },    
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Ajout d\'un utilisateur' : 'Modification d\'un utilisateur'
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
  },  

  methods: {
    selectRow(event) {
      const user = {
        name: event.name,
        role: event.role
      }

      this.$emit('select-user', user)
    },

    initialize () {
      this.orders = []
    },

    editItem (item) {
      this.editedIndex = this.users.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.users.indexOf(item)
      confirm('Etes vous sur de vouloir supprimer cet enregistrement ?') && this.users.splice(index, 1)
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.orders[this.editedIndex], this.editedItem)
      } else {
        this.users.push(this.editedItem)
      }
      this.close()
    },    
  }
}
</script>

