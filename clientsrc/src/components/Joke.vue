<template>
  <div class="joke">
    <h5>{{jokeData.setup}}</h5>
    <h5>{{jokeData.punchline}}</h5>
    <p>Created by: {{jokeData.creator.name}}</p>
  </div>
</template>


<script>
export default {
  name: "joke",
  props: ["jokeData"],
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>