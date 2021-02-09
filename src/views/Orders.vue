<template>
  <v-container >

    <v-row class="pa-6">
        <h2>Gestion des commandes</h2>
    </v-row>


    <v-row class="mx-auto">
      <v-col cols="9">
        <OrdersTable :orders="orders" @select-order="setOrder" />
      </v-col>

    </v-row>

    <v-snackbar v-model="snackbar" :left="$vuetify.breakpoint.lgAndUp">
      You have selected {{ selectedOrder.tecnumber }},
      {{ selectedOrder.customerlabel }}
      <v-btn color="pink" text @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>

import OrdersTable from '../components/OrdersTable'
import ordersData from '../data/orders.json'


export default {
  name: 'OrdersPage',
  components: {
    OrdersTable
  },
  data() {
    return {
      orders: ordersData,

      selectedOrder: {
        tecnumber: '',
        customerlabel: ''
      },
      snackbar: false
    }
  },
  methods: {
    setOrder(event) {
      this.snackbar = true
      this.selectedOrder.tecnumber = event.tecnumber
      this.selectedOrder.customerlabel = event.customerlabel
    }
  }
}
</script>
