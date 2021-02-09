<template>
	<v-card width="400" class="mx-auto mt-5">

		<v-card-title>
			<v-toolbar-side-icon>
				<v-img class="mr-3" src="@/assets/technix-login.jpg" max-width="120"  ></v-img>
			</v-toolbar-side-icon>
			<h1 class="display-1">Connexion</h1>
		</v-card-title>
		<v-card-text>
			<v-form>
				<v-text-field label="Utilisateur" prepend-icon="mdi-account-circle" />
				<v-text-field
					:type="showPassword ? 'text' : 'password'"
					label="Mot de passe"
					prepend-icon="mdi-lock"
					:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
					@click:append="showPassword = !showPassword"
				/>
			</v-form>
		</v-card-text>
		<v-divider></v-divider>
		<v-card-actions>
			<v-btn color="primary" width="100%">Connexion</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
export default {
	name: 'LoginPage',
	data() {
		return {
			showPassword: false
		}
	}
}
</script>

<style></style>
