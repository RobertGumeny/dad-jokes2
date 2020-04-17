<template>
  <div class="jokes text-center container-fluid">
    <div class="row">
      <div class="col-12 my-1 text-center">
        <div v-if="$auth.isAuthenticated">
          <button
            type="button"
            class="btn btn-info"
            data-toggle="modal"
            data-target="#jokeModal"
          >Submit a Joke</button>
          <JokeModal id="jokeModal"></JokeModal>
        </div>
        <small class="text-danger" v-else>You must log in to create a joke.</small>
      </div>
    </div>
    <!-- Jokes displayed below -->
    <div>
      <b-card-group columns>
        <Joke v-for="joke in jokes" :jokeData="joke" :key="joke._id"></Joke>
      </b-card-group>
    </div>
  </div>
</template>


<script>
import CreateJoke from "../components/CreateJoke";
import JokeModal from "../components/JokeModal";
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
    Joke,
    JokeModal
  }
};
</script>


<style scoped>
</style>