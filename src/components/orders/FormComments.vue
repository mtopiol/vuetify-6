<template>
      <v-container fluid>
        <v-row dense>
          <v-col cols="4">
            <v-card 
                class="mb-12 pa-2"
                color="grey lighten-3"
                height="350px"
            >    
              <v-textarea
                clearable
                clear-icon="mdi-close-circle"
                label="Options spéciales"
                dense
                outlined
              ></v-textarea>
            </v-card>            
          </v-col>    
          <v-col cols="4">
            <v-card 
                class="mb-12 pa-2"
                color="grey lighten-3"
                height="350px"
            >    
              <v-checkbox
                v-model="checkbox"
                label="Charger Formulaire"
                dense
                hide-details 
              ></v-checkbox>
              <v-checkbox
                v-model="checkbox1"
                label="Faire produit identique à "
                dense
              ></v-checkbox>
              <v-textarea
                clearable
                clear-icon="mdi-close-circle"
                label="Informations complémentaire"
                outlined
                rows="5"
                no-resize               
              ></v-textarea>
            </v-card> 
          </v-col> 
          <v-col cols="4">
            <v-card 
              class="mb-12 pa-2"
              color="grey lighten-3"
              height="350px"
            >    
              <v-checkbox
                v-model="checkbox"
                label="Plaquette"
                dense
              >
              </v-checkbox>
              
              <v-textarea
                clearable
                clear-icon="mdi-close-circle"
                label="Nom"
                outlined
                rows="5"
                no-resize
              ></v-textarea>

              <v-checkbox
                v-model="checkbox"
                label="Spare parts"
                dense
                hide-details
              ></v-checkbox>
              
              <v-textarea
                clearable
                clear-icon="mdi-close-circle"
                outlined
                rows="1"
                no-resize
              ></v-textarea>

            </v-card> 
        
          </v-col>                      
        </v-row>
      </v-container>     

</template>


<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.v-input--selection-controls {
    margin-top: 0;
    padding-top: 0px;
    font-size: 12px
}

.v-text-field {
    margin-top: 0;
    padding-top: 0px;
      font-size: 12px
}

</style>