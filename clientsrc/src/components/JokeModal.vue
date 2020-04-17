<template>
  <div id="jokeModal" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Submit a Joke</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span class="text-danger" aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <CreateJoke></CreateJoke>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import CreateJoke from "../components/CreateJoke";
export default {
  name: "jokemodal",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {
    CreateJoke
  }
};
</script>


<style scoped>
</style>