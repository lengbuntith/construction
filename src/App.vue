<template>
  <div id="app" class="bg-light">
    
    
     <b-row class="header bg-light no-gutters justify-content-center border">
        <img src="./assets/logo.png" width="100px" alt="" />
      </b-row>
    


    <b-row  class="menu no-gutters mb-2 bg-white justify-content-center shadow-sm">
      <b-tabs class=""
        active-nav-item-class="text-uppercase bg-danger text-white "
        active-tab-class="font-weight-bold text-success"
      >
        <b-tab
          title="HOME"
          active
          @click="
            () => {
              this.$router.push('/');
            }
          "
        ></b-tab>
        <b-tab
          title="ABOUT COMPANY"
          @click="
            () => {
              this.$router.push('/about');
            }
          "
        ></b-tab>
        <b-tab
          title="PRODUCT"
          @click="
            () => {
              this.$router.push('/product');
            }
          "
        ></b-tab>
        <b-tab
          title="SERVICE"
          @click="
            () => {
              this.$router.push('/service');
            }
          "
        ></b-tab>
        <b-tab
          title="OUR EVENT"
          @click="
            () => {
              this.$router.push('/our-event');
            }
          "
        ></b-tab>
        <b-tab
          title="CAREER"
          @click="
            () => {
              this.$router.push('/career');
            }
          "
        ></b-tab>
        <b-tab
          title="CONTACT US"
          @click="
            () => {
              this.$router.push('/contact-us');
            }
          "
        ></b-tab>

      </b-tabs>
    </b-row>
  
  <b-container fluid="lg">

      <b-row class="  no-gutters justify-content-center mt-1">
        <b-col class="sidebar border shadow-sm" cols="3">
          <b-col
            >
              
              <b-list-group class="mt-3 shadow">
                
                <div class="bg-danger text-center text-white font-weight-bold p-2">Product by Category</div>
                <b-list-group-item class="text-uppercase">roof material</b-list-group-item>
                <b-list-group-item class="text-uppercase">floor material</b-list-group-item>
                <b-list-group-item class="text-uppercase">wall decor material</b-list-group-item>
                <b-list-group-item class="text-uppercase">bathroom material</b-list-group-item>
                <b-list-group-item class="text-uppercase">other</b-list-group-item>
              </b-list-group>
            
          </b-col>

          <b-col
            >
              
              <b-list-group class="mt-4 shadow">
                
                <div class="bg-danger text-center text-white font-weight-bold p-2">Product by Country</div>
                <b-list-group-item class="text-uppercase">khmer</b-list-group-item>
                <b-list-group-item class="text-uppercase">thailand</b-list-group-item>
                <b-list-group-item class="text-uppercase">vietname</b-list-group-item>
                <b-list-group-item class="text-uppercase">china</b-list-group-item>
                <b-list-group-item class="text-uppercase">malaysia</b-list-group-item>
                <b-list-group-item class="text-uppercase">other</b-list-group-item>
              </b-list-group>
            
          </b-col>

          <b-col
            >
              
              <b-list-group class="mt-4">
                
                <div class="shadow-sm bg-danger text-center text-white font-weight-bold p-2">Product & Comapany</div>
                
                  <img class="mt-2" src="./assets/butterfly.jpg" alt="">
                  <img class="mt-2" src="./assets/cpac.jpg" alt="">
                  <img class="mt-2" src="./assets/excella.jpg" alt="">
                  <img class="mt-2" src="./assets/gomdatviet.jpg" alt="">
                
                
              </b-list-group>
            
          </b-col>

  
          
        </b-col>

        <b-col class="content p-0 no-gutters" cols="9">
          <router-view />
        </b-col>
      
      </b-row>
</b-container>

    <!-- <b-row class="footer no-gutters bg-danger" >
      footer
    </b-row> -->

    <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
  </div>

</template>
<script>
// @ is an alias to /src
export default {
  name: "App",
  components: {},
};
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
* {
  font-family: "Montserrat", sans-serif;
}
/* #nav a.router-link-exact-active {
  color: #42b983;
} */
.nav-link {
  border-right: 1px solid #eeeeee !important;
  color: black;
  margin-right: 4px;
  font-weight: bold;
}
.nav-link:hover {
  color: white;
  background-color: red;
}

.sidebar{
  background-color: firebrick;
}



</style>