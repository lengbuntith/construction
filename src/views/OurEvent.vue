<template>
    <div class="event bg-white pb-5">
        <b-row
      class="catbar border m-0 py-3 mb-3 shadow-sm rounded-bottom"
      align-h="between"
    >
      <b-col class="text-left text-uppercase font-weight-bold"
        >Events</b-col
      >
    </b-row>
        <b-row v-if="events" class="pl-5">
            
            <span v-html="events.content.rendered"></span>
            
        </b-row>
    </div>
</template>

<script>
import axios from 'axios'
    export default {

        data(){
            return{
                events: []
            }
        },

        created(){
        axios
      .get("http://admin.mvgroup-cambodia.com//wp-json/wp/v2/posts/14")
      .then((response) => {
        this.events = response.data;
      });
        }


        }
   
</script>

<style scoped>
.rounded-bottom {
  border-bottom-left-radius: 1rem !important;
}

.catbar {
  background-color: #fff;
}
</style>