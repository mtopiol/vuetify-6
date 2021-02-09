<template>
 
      <v-container fluid >
        <v-row  class="pa-0">
          <v-col cols="7" md="7">
            <v-card
                class="mb-12"
                color="grey lighten-4"
                height="350px"
                outlined
            >
            <v-row  class="pa-2">
                <v-col cols="7" md="7">
                    <v-text-field label="TEC N°" 
                        dense
                        outlined
                        prepend-icon="mdi-identifier"
                        v-model="tecnumber"
                    >
                    </v-text-field>
                    <v-autocomplete
                        v-model="customer_id"
                        :items="companies"
                        :loading="isLoading"
                        :search-input.sync="search"
                        color="black"
                        hide-no-data
                        hide-selected
                        item-text="name"
                        item-value="code"
                        label="Client"
                        placeholder="Recherche client"
                        prepend-inner-icon="mdi-account-outline"
                        clearable
                        return-object
                    >
                        <template v-slot:item="{ item }">
                            <v-list-item-content>
                                <v-list-item-title v-text="item.name"></v-list-item-title>
                                <v-list-item-subtitle v-text="item.code"></v-list-item-subtitle>
                            </v-list-item-content>
                        </template>

                    </v-autocomplete>      
                    <v-autocomplete
                        v-model="finalcustomer_id"
                        :items="companies"
                        :loading="isLoading"
                        :search-input.sync="search"
                        color="black"
                        hide-no-data
                        hide-selected
                        item-text="name"
                        item-value="code"
                        label="Client final"
                        placeholder="Recherche client final"
                        prepend-icon="mdi-account-box"
                        clearable
                        return-object
                    >
                        <template v-slot:item="{ item }">
                            <v-list-item-content>
                                <v-list-item-title v-text="item.name"></v-list-item-title>
                                <v-list-item-subtitle v-text="item.code"></v-list-item-subtitle>
                            </v-list-item-content>
                        </template>

                    </v-autocomplete>                                   

                   <v-autocomplete
                        v-model="commercial_id"
                        :items="sellers"
                        :loading="isLoading"
                        :search-input.sync="search"
                        color="black"
                        hide-no-data
                        hide-selected
                        item-value="id"
                        :item-text="item => item.name +' '+ item.firstname"
                        label="Commercial"
                        placeholder="Recherche commercial "
                        prepend-inner-icon="mdi-account-plus"
                        clearable                        
                        return-object
                    >
                        <template v-slot:item="{ item }">
                            <v-list-item-content>
                                <v-list-item-title v-text="item.name"></v-list-item-title>
                                <v-list-item-subtitle v-text="item.firstname"></v-list-item-subtitle>
                            </v-list-item-content>
                        </template>
                    </v-autocomplete>  

                    <v-radio-group  v-model="radios" label="Recu par" dense row>
                        <template v-slot:label>
                        <div >Reçu par :</div>
                        </template>
                        <v-radio value="Courrier" label="Courrier">
                        </v-radio>
                        <v-radio value="Email" label="Email">
                        </v-radio>
                        <v-radio value="Fax" label="Fax">
                        </v-radio>                      
                    </v-radio-group>

                </v-col>     

                <v-col cols="5" md="5">
                    <v-text-field
                        label="N° Série" 
                        dense 
                        outlined
                    >
                    </v-text-field>

                    <v-autocomplete
                        v-model="customer_code"
                        :items="companies"
                        :loading="isLoading"
                        :search-input.sync="search"
                        color="black"
                        hide-no-data
                        hide-selected
                        item-text="code"
                        item-value="name"
                        label="Code Alix"
                        placeholder="Recherche client "
                        prepend-inner-icon="mdi-barcode"
                        clearable                        
                        return-object
                    >
                        <template v-slot:item="{ item }">
                            <v-list-item-content>
                                <v-list-item-title v-text="item.code"></v-list-item-title>
                                <v-list-item-subtitle v-text="item.name"></v-list-item-subtitle>
                            </v-list-item-content>
                        </template>
                    </v-autocomplete>                     
                    <v-autocomplete
                        v-model="final_customer_code"
                        :items="companies"
                        :loading="isLoading"
                        :search-input.sync="search"
                        color="black"
                        hide-no-data
                        hide-selected
                        item-text="code"
                        item-value="name"
                        label="Code Alix"
                        placeholder="Recherche client "
                        prepend-icon="mdi-barcode"
                        clearable                       
                        return-object
                    >
                        <template v-slot:item="{ item }">
                            <v-list-item-content>
                                <v-list-item-title v-text="item.code"></v-list-item-title>
                                <v-list-item-subtitle v-text="item.name"></v-list-item-subtitle>
                            </v-list-item-content>
                        </template>
                    </v-autocomplete>                     
                    <v-dialog
                        ref="dialog"
                        v-model="modal"
                        :return-value.sync="date"
                        hint="MM/DD/YYYY format"
                        persistent-hint
                        persistent
                        width="290px"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                            v-model="date"
                            label="Date Réception Commande"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker
                            v-model="date"
                            scrollable
                        >
                            <v-spacer></v-spacer>
                            <v-btn
                            text
                            color="primary"
                            @click="modal = false"
                            >
                            Annuler
                            </v-btn>
                            <v-btn
                            text
                            color="primary"
                            @click="$refs.dialog.save(date)"
                            >
                            Sauvegarder
                            </v-btn>
                        </v-date-picker>
                    </v-dialog>
                </v-col>      

            </v-row>
            </v-card>
          </v-col>      
          <v-col cols="5" md="5"   >            
            <v-card 
                class="mb-12 "
                color="grey lighten-4"
                height="350px"
                outlined
            >
            <v-row  class="pa-2">
              <v-col cols="12" md="12"   >            
                
                <v-textarea
                    clearable
                    clear-icon="mdi-close-circle"
                    label="Observations"
                    rows="5"
                    no-resize          
                    outlined          
                ></v-textarea>
                <v-autocomplete
                    v-model="validationcommercial_id"
                    :items="sellers"
                    :loading="isLoading"
                    :search-input.sync="search"
                    color="black"
                    hide-no-data
                    hide-selected
                    item-value="id"
                    :item-text="item => item.name +' '+ item.firstname"
                    label="Validation Ingénieur Application "
                    placeholder="Recherche commercial "
                    prepend-inner-icon="mdi-account-star"
                    clearable                        
                    return-object
                    
                >
                    <template v-slot:item="{ item }">
                        <v-list-item-content>
                            <v-list-item-title v-text="item.name"></v-list-item-title>
                            <v-list-item-subtitle v-text="item.firstname"></v-list-item-subtitle>
                        </v-list-item-content>
                    </template>
                </v-autocomplete>  
              </v-col>
            </v-row>   
            </v-card>
          </v-col>            
    
        </v-row>
      </v-container>

</template>

<script>
import sellers from '../../data/sellers.json'
import companies from '../../data/companies.json'

    export default {
        name:"FormRegistration",
        data: () => ({
            sellers: sellers,
            companies: companies,            
        }),        
        methods:{

        },
    }
</script>

<style lang="scss" scoped>
.v-input input {
    font-size: 12px;
}
.v-list-item__title {
    font-size: 12px;
}

 .v-list-item__subtitle {
    font-size: 10px;
}


.v-list-item__subtitle {
    font-size: 10;
}

.v-select.v-text-field input {
  font-size: 12px
}
.v-text-field fieldset {
    font-size: 12px;
}
.v-input__control {
    font-size: 12px;
}

.v-text-field {
    font-size: 12px;
}

.v-input--radio-group.v-input--radio-group--row .v-radio {
    margin-right: 3px;
    padding-left: 3px;

}


</style>