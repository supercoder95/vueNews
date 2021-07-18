<template>
  <div>
    <list-item>
      
    </list-item>
    
    <ul class="ask-list">
      <li v-for="item in fetchedAsk" :key="item.id" class="post">
        <!-- point section -->
        <div class="points">
          {{ item.points }}
        </div>
        <!-- etc infomation -->
        <div>
          <p class="ask-title">
            <a href="item.url">
            {{ item.title }}
            </a>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
              <router-link v-bind:to="`item/${item.id}`">
                {{ item.user}}
              </router-link>
          </small>
        </div>
      </li>
    </ul>
  </div>                
</template>

<script>
// import { mapGetters } from 'vuex';
import ListItem from '../components/ListItem.vue'

export default {
  components: {
    ListItem,
  }

  // computed: {
  //   ...mapGetters([
  //     'fetchedAsk'
  //   ]),
  // },
  // created() {
  //     this.$store.dispatch('FETCH_ASK')
  // }
}
</script>