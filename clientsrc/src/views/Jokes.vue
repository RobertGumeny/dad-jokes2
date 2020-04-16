<template>
  <div class="jokes text-center">
    <div v-if="$auth.isAuthenticated">
      <b-button variant="success" v-b-modal.modal-1>Submit a Joke</b-button>

      <b-modal id="modal-1" title="Submit a Joke" hide-footer-ok>
        <CreateJoke />
        <template v-slot:modal-footer>
          <div class="w-100"></div>
        </template>
      </b-modal>
    </div>
    <!-- <CreateJoke v-if="$auth.isAuthenticated" /> -->
    <small class="text-danger" v-else>You must log in to create a joke.</small>
    <!-- Jokes displayed below -->
    <Joke v-for="joke in jokes" :jokeData="joke" :key="joke._id"></Joke>
  </div>
</template>


<script>
import CreateJoke from "../components/CreateJoke";
import Joke from "../components/Joke";
export default {
  name: "jokes",
  data() {
    return {};
  },
  mounted() {
    console.log(this.$auth);
    this.$store.dispatch("getJokes");
  },
  computed: {
    jokes() {
      return this.$store.state.jokes;
    }
  },
  methods: {},
  components: {
    CreateJoke,
    Joke
  }
};
</script>


<style scoped>
</style>