<template>
	<v-app>
		<v-app-bar app color="#253f8a" dark>
			<v-img class="mr-3" src="@/assets/technix-bandeau.jpg" max-width="80" ></v-img>
			<v-spacer></v-spacer>
			<v-btn text rounded to="/">Accueil</v-btn>
			<v-btn text rounded to="/users"     >Utilisateurs</v-btn>
			<v-btn text rounded to="/orders"    >Commandes</v-btn>
			<v-btn text rounded to="/tracking"  >Suivi</v-btn>
			<v-btn text rounded to="/login"     >Connexion</v-btn>

		</v-app-bar>
		<v-main>
			<router-view></router-view>
		</v-main>
		<v-footer color="primary lighten-1" padless>
			<v-layout justify-center wrap>
				<v-flex primary  py-4 text-center white--text xs12>
					{{ new Date().getFullYear() }} — <strong>Technix</strong>
				</v-flex>
			</v-layout>
		</v-footer>
	</v-app>
</template>

<script>
export default {
	name: 'App',
	data() {}
}
</script>
<style lang="scss" >

 .v-text-field .v-input__control .v-input__slot {
    min-height: auto !important;
    display: flex !important;
    align-items: center !important;
  }

.v-input .v-label {
    font-size: 12px;
}

.v-input--selection-controls__ripple {
  font-size: 12px;
}


.page {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 56px);
}

</style>


