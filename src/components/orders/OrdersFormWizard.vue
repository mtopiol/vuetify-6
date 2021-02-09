<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step
        :complete="e1 > 1"
        step="1"
      >
        Enregistrement Commande
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 2"
        step="2"
      >
        Livraison
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 3"
        step="3"
      >
        Fabrication
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 4"
        step="4"
      >
        Controle Unit
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step 
        step="5"
      >
        Divers
      </v-stepper-step>
    </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <form-registration/>
          <div class="d-flex justify-space-between mb-6">
           <v-btn
            color="primary"
            @click="$emit('close')"
          >
            Sortie
          </v-btn>
          

          <v-btn
            color="primary"
            @click="e1 = 2"
          >
            Suivant
          </v-btn>
        </div>
        </v-stepper-content>
        <v-stepper-content step="2">
          <form-customers/>          
          <div class="d-flex justify-space-between mb-6">
           <v-btn
            color="primary"
            @click="$emit('close')"
          >
            Sortie
          </v-btn>

          <v-btn 
            text
            color="primary"
            @click="e1 = 1"
          >
            Précedent
          </v-btn>
  
          <v-btn
            color="primary"
            @click="e1 = 3"
          >
            Suivant
          </v-btn>
        </div>  
        </v-stepper-content>

        <v-stepper-content step="3">
          <form-fabrication/>
          <div class="d-flex justify-space-between mb-6">
           <v-btn
            color="primary"
            @click="$emit('close')"
          >
            Sortie
          </v-btn>

          <v-btn 
            text
            color="primary"            
            @click="e1 = 2"
          >
            Précedent
          </v-btn>

          <v-btn
            color="primary"
            @click="e1 = 4"
          >
            Suivant
          </v-btn>
        </div>
        </v-stepper-content>
  
        <v-stepper-content step="4">
          <form-control-unit/>          
          <div class="d-flex justify-space-between mb-6">
           <v-btn
            color="primary"
            @click="$emit('close')"
            
          >
            Sortie
          </v-btn>

          <v-btn 
            text
            color="primary"
            @click="e1 = 3"
          >
            Précedent
          </v-btn>
  
          <v-btn
            color="primary"
            @click="e1 = 5"
          >
            Suivant
          </v-btn>
          </div>
        </v-stepper-content>



        <v-stepper-content step="5" >
          <form-comments/>   
          <div class="d-flex justify-space-between mb-6">

           <v-btn
            color="primary"
            @click="$emit('close')"
          >
            Sortie
          </v-btn>

          <v-btn 
            text
            color="primary"
            @click="e1 = 4"
          >
            Précedent
          </v-btn>

          <v-btn
            color="primary"
            @click="e1 = 1"
          >
            Suivant
          </v-btn>
        </div>
        </v-stepper-content>

      </v-stepper-items>

  </v-stepper>
</template>

<script>
  export default {
    name:"OrdersFormWizard",
    components:{
      'form-customers': require('./FormCustomers').default,
      'form-fabrication': require('./FormFabrication').default,
      'form-registration': require('./FormRegistration').default,
      'form-control-unit': require('./FormControlUnit').default,
      'form-comments': require('./FormComments').default,

    },
    data () {
      return {
        e1: 1,
      }
    },
        
  }
</script>

<style lang="scss" scoped>

</style>