<template>
  <div class="about text-center text-info">
    <h2 class="text-info">{{ profile.name }}'s Profile</h2>
    <img class="border border-dark rounded-circle" :src="profile.picture" alt />
    <h5>Jokes Submitted:</h5>
    <p>{{ profile.email }}</p>
  </div>
</template>

<script>
export default {
  name: "Profile",
  computed: {
    profile() {
      return this.$store.state.profile;
    }
  }
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
