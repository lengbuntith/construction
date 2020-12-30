<template>
    <div class="service bg-white pb-5">
        <b-row
      class="catbar border m-0 py-3 mb-3 shadow-sm rounded-bottom"
      align-h="between"
    >
      <b-col class="text-left text-uppercase font-weight-bold"
        >Our Services</b-col
      >
    </b-row>
        <b-row v-if="services" class="pl-5">
            <!-- {{careers.title.rendered}} -->
            <span v-html="services.content.rendered"></span>
            
        </b-row>
    </div>
</template>

<script>
import axios from 'axios'
    export default {

        data(){
            return{
                services: []
            }
        },

        created(){
        axios
      .get("https://admin.mvgroup-cambodia.com//wp-json/wp/v2/posts/28")
      .then((response) => {
        this.services = response.data;
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