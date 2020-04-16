<template>
  <div class="jokes text-center">
    <CreateJoke v-if="$auth.isAuthenticated" />
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