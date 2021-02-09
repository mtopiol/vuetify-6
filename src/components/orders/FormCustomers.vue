<template>
  <v-container fluid >
    <v-row  class="pa-0">
      <v-col cols="12" md="6">
        <v-card
            color="grey lighten-4"
            height="180px"

        >
            <v-row>
                <v-col cols="4" md="4">
                    <v-text-field label="Quantité" 
                        dense
                        outlined
                        prepend-icon="mdi-numeric"
                        v-model="tecnumber"
                        hide-details   
                   
                    >
                    </v-text-field>                    

                </v-col>
                <v-col cols="2" md="2"></v-col>
                <v-col cols="4" md="4">
                    <v-text-field 
                        label="Référence"
                        dense
                        outlined
                        hide-details="auto"
                        prepend-icon="mdi-identifier"                        
                       
                    >
                    </v-text-field>                    
                </v-col>

            </v-row>               
            <v-row>
                <v-col cols="12" md="6">
                    <v-text-field label="N° Devis" 
                        dense
                        outlined
                        prepend-icon="mdi-offer"
                        v-model="tecnumber"
                        hide-details="auto"                       
                    >
                    </v-text-field>                    

                </v-col>
                <v-col cols="12" md="4">
                    <v-checkbox
                        v-model="DevisJoint"
                        label="Devis ci-joint"
                        dense
                        hide-details
                    >
                    </v-checkbox>                 
                </v-col>

                <v-col cols="12" md="12" class="ml-2" >
                    <v-radio-group  v-model="radios" label="Polarité :" dense row >
                        <v-radio value="P" label="P" >
                        </v-radio>
                        <v-radio value="N" label="N">
                        </v-radio>
                        <v-radio value="R" label="R">
                        </v-radio>                      
                        <v-radio value="F" label="F" hide-details>
                        </v-radio>                      
                    </v-radio-group>                   
                </v-col>  
            </v-row>            
        </v-card>
      </v-col>  
      <v-col cols="12" md="6">
        <v-card
            color="grey lighten-4"
            height="18git branch -M main0px"

        >
            <div class="d-flex justify-start" >
                    <v-menu
                        v-model="menu2"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                    >
                        <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            v-model="date"
                            label="Date de livraison contractuelle"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                        ></v-text-field>
                        </template>
                        <v-date-picker
                        v-model="date"
                        @input="menu2 = false"
                        ></v-date-picker>
                    </v-menu>

                    <v-menu
                        v-model="menu3"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                        hide-details
                    >
                        <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            v-model="date"
                            label="Date de livraison souhaitée"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                        ></v-text-field>
                        </template>
                        <v-date-picker
                        v-model="date"
                        @input="menu3 = false"
                        ></v-date-picker>
                    </v-menu>
                </div>
                <div class="d-flex justify-start" style="width:50%" >  
                    <v-menu
                        v-model="menu4"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"

                    >
                        <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            v-model="date"
                            label="Date limite pour prévenir le client"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                            hide-details
                        ></v-text-field>
                        </template>
                        <v-date-picker
                        v-model="date"
                        @input="menu4 = false"
                        ></v-date-picker>
                    </v-menu>
            </div>                    
        </v-card>
      </v-col>       
    </v-row>     
    <v-row  >
      <v-col cols="12" md="6" >
        <v-card
            class=" mb-12"
            color="grey lighten-4"
            height="170px"
        >
        <div class="pt-5 pl-4 d-flex justify-start">
                <v-radio-group  v-model="radios" label="Transport :" dense row hide-details="auto" >
                <v-radio value="C" label="Client">
                </v-radio>
                <v-radio value="N" label="Client final">
                </v-radio>
                <v-radio value="R" label="Technix">
                </v-radio>                      
            </v-radio-group> 
        </div>

        <div class="ma-2 ml-5 d-flex justify-start">
            <div>
            <span style="font-size:12px">Paiements : </span>
                <v-checkbox
                    v-model="checkbox"
                    label="Acompte"
                    dense
                    class="m-2 pr-3"
                    hide-details="auto"
                ></v-checkbox>
                <v-checkbox
                    v-model="checkbox"
                    label="Avant expédition"
                    dense
                    class="pr-3"
                    hide-details="auto"
                ></v-checkbox>
            </div>  
          
        <div class="ml-10">
            <span  style="font-size:12px">Langue manuelle : </span>
                <v-checkbox
                    v-model="checkbox"
                    label="Anglais"
                    dense
                    hide-details="auto"
                ></v-checkbox>
                <v-checkbox
                    v-model="checkbox"
                    label="Francais"
                    dense
                ></v-checkbox>

        </div>   
        </div>                               
        </v-card>
      </v-col>  
      <v-col cols="6" md="6">
        <v-card
            class="mb-12"
            color="grey lighten-4"
            height="170px"
            
        >
            <p class="text-subtitle-1 text-center">Contacter  le client avant expédition :</P>
            <v-row>
                <v-col cols="12" md="3" class="ml-4" >
                    <v-checkbox
                        v-model="checkbox"
                        label="Paiement"
                        dense
                        hide-details 
                    ></v-checkbox>
                    <v-checkbox
                        v-model="checkbox"
                        label="Envoi PV"
                        dense
                        hide-details 
                    ></v-checkbox>
                    <v-checkbox
                        v-model="checkbox"
                        label="Autre"
                        dense
                        hide-details 
                    ></v-checkbox>                    
                </v-col>
                <v-col cols="12" md="4" class="ml-4" >
                    <v-checkbox
                        v-model="checkbox"
                        label="Envoi manuel"
                        dense
                        hide-details 
                    ></v-checkbox>
                    <v-checkbox
                        v-model="checkbox"
                        label="Recette avec client"
                        dense
                        hide-details 
                    ></v-checkbox>
                     
                </v-col>
            </v-row>               
         
        </v-card>
      </v-col>       
    </v-row>            
  </v-container>     
</template>


<script>
    export default {
    data: () => ({
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      menu3: false,
      menu4: false,

    }),        
    }
</script>

<style lang="scss" scoped>
.v-input--selection-controls {
    margin-top: 0px;
    padding-top: 0px;
}
.v-list-item__title {
    font-size: 12px;
}

 .v-list-item__subtitle {
    font-size: 10px;
}

.v-text-field  {
    cursor: text;
    font-size: 12px;
}

</style>