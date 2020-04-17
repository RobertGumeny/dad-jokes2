<template>
  <div class="navigation">
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-brand to="/">JokesApp</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Main links -->
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'Home' }">Home</b-nav-item>
          <b-nav-item :to="{ name: 'Jokes' }">Jokes</b-nav-item>
        </b-navbar-nav>
        <!-- Right justified user login/logout -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right v-if="$auth.isAuthenticated">
            <template v-slot:button-content>
              <b-avatar :src="profile.picture"></b-avatar>
            </template>
            <b-dropdown-item :to="{ name: 'Profile' }">Profile</b-dropdown-item>
            <b-dropdown-item @click="logout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-button variant="primary" size="sm" v-else @click="login">Log In</b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import axios from "axios";
import { getUserData } from "@bcwdev/auth0-vue";
export default {
  name: "navigation",
  methods: {
    async login() {
      await this.$auth.loginWithPopup();
      this.$store.dispatch("setBearer", this.$auth.bearer);
      console.log("this.$auth.user: ");
      console.log(this.$auth.user);
      this.$store.dispatch("getProfile");
    },
    async logout() {
      this.$store.dispatch("resetBearer");
      await this.$auth.logout({ returnTo: window.location.origin });
    }
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    }
  }
};
</script>

<style>
</style>
