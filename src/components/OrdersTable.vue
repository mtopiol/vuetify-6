/*
 *  Composant Orders
 */
 
<template >
  <v-row align="center" class="list px-3 mx-auto">
    <v-col cols="8" md="4">
      <v-text-field
        v-model="searchby"
        append-icon="mdi-magnify"
        label="Rechercher une commande"
        single-line
        hide-details
      ></v-text-field>
    </v-col>

    <v-col cols="12" sm="12">

      <v-card >
        <v-data-table
          :headers="headers"
          :items="orders"
          :items-per-page="5"

          @click:row="selectRow"
          :multi-sort="true"
          :search="searchby"
          
        >
         <template v-slot:top >
              <v-toolbar flat color="white">
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" max-width="1000px" persistent>
                  <template v-slot:activator="{ on, attrs }">
                  <v-btn
                      color="#253f8a"
                      dark
                      class="mb-0"
                      v-bind="attrs"
                      v-on="on"
                  >Ajout</v-btn>
                  </template>
                  <v-card>
                    <v-card-title class="primary white--text">
                        <span class="headline">{{ formTitle }}</span>
                    </v-card-title>
                    <orders-from-wizard @close="close()"/>
                  </v-card>
              </v-dialog>
              </v-toolbar>
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
              <v-icon
                  class="mr-2"
                  color="green" 
              >
                  mdi-content-copy
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
  name: 'OrdersTable',
  props: {
    orders: {
      type: Array,
      required: true
    }
  },
  components: {
    'orders-from-wizard' : require('../components/orders/OrdersFormWizard.vue').default
  },  
  data: () => ({
    dialog: false,      
    searchby: '',
    headers: [
      { text: 'Identifiant', value: 'id' },
      { text: 'N° Tec', value: 'tecnumber' },
      { text: 'Client', value: 'customerlabel' },
      { text: 'Date Commande', value: 'dateorderreceived' },
      { text: 'Quantite', value: 'quantity' },
      { text: 'Reference', value: 'reference' },
      { text: 'N° Devis ', value: 'devisnumber' },
      { text: 'Date de livraison', value: 'deliverydateplanned' },
      { text: 'Statut', value: 'status' },
      { text: 'Action', value: 'actions', sortable: false },      
    ],

    editedIndex: -1,
    editedItem: {
      tecnumber: '',
      customerlabel:'',
      dateorderreceived: '',
      quantity: 0,
      reference: '',
      devisnumber: '',
      deliverydateplanned: '',
      status: '',      
    },
    defaultItem: {
      tecnumber: '',
      customerlabel:'',
      dateorderreceived: '',
      quantity: 0,
      reference: '',
      devisnumber: '',
      deliverydateplanned: '',
      status: '', 
    },
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Ajout d\'une commande' : 'Modification d\'une commande'
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
  },  

  methods: {
    selectRow(event) {
      const order = {
        tecnumber: event.tecnumber,
        customerlabel: event.customerlabel
      }

      this.$emit('select-order', order)
    },

    initialize () {
      this.orders = []
    },

    editItem (item) {
      this.editedIndex = this.orders.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.orders.indexOf(item)
      confirm('Etes vous sur de vouloir supprimer cet enregistrement ?') && this.orders.splice(index, 1)
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
        this.orders.push(this.editedItem)
      }
      this.close()
    },
  }
}
</script>


