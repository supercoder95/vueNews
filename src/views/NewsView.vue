<template>
  <div>
    <p v-for="item in this.$store.state.news" :key="item.id">
      <a v-bind:href="item.url">
        {{ item.title }}
      </a>
      <samll>
        {{ item.time_ago }} by
        <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
      </samll>
    </p>
  </div>
</template>

<script>

export default {
  created() {
    this.$store.dispatch("FETCH_NEWS");
  },
};
</script>

<style>
</style>
