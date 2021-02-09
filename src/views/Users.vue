<template>
  <v-container >

    <v-row class="pa-6">
        <h2>Gestion des utilisateurs</h2>
    </v-row>


    <v-row class="mx-auto">
      <v-col cols="8">
        <UsersTable :users="users" @select-user="setUser" />
      </v-col>

    </v-row>

    <v-snackbar v-model="snackbar" :left="$vuetify.breakpoint.lgAndUp">
      You have selected {{ selectedUser.name }},
      {{ selectedUser.role }}
      <v-btn color="pink" text @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>

import UsersTable from '../components/UsersTable'
import usersData from '../data/users.json'


export default {
  name: 'UsersPage',
  components: {
    UsersTable
  },
  data() {
    return {
      users: usersData,

      selectedUser: {
        name: '',
        role: ''
      },
      snackbar: false
    }
  },
  methods: {
    setUser(event) {
      this.snackbar = true
      this.selectedUser.name = event.name
      this.selectedUser.role = event.role
    }
  }
}
</script>
