<template>
  <b-card bg-variant="light" border-variant="info" :header="jokeData.setup" align="center">
    <b-card-text>
      <h5>{{jokeData.punchline}}</h5>
      <p class="pt-5">Created by: {{jokeData.creator.name}}</p>
    </b-card-text>
  </b-card>

  <!-- <div class="joke">
    <h5>{{jokeData.setup}}</h5>

  </div>-->
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
p {
  font-size: small;
}
</style>