<template>
  <div id="app">
    <b-container>
      <b-row class="header justify-content-center border">
        <img src="./assets/logo.png" width="100px" alt="" />
      </b-row>
    

    <b-row class="menu mt-1 border">
      <b-tabs
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
    </b-container>
    <b-container>
      <b-row class="mt-1 justify-content-center">
        <b-col class="sidebar bg-danger border" cols="3">
          <b-col
            >
            
              <b-list-group>
                
                <div class="mt-4 bg-primary text-center text-white font-weight-bold p-2">Product by category</div>
                <b-list-group-item>Cras justo odio</b-list-group-item>
                <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
                <b-list-group-item>Morbi leo risus</b-list-group-item>
                <b-list-group-item>Porta ac consectetu</b-list-group-item>
                <b-list-group-item>Vestibulum at eros</b-list-group-item>
              </b-list-group>
            
          </b-col>
          <b-col
            >
            
              <b-list-group>
                
                <div class="mt-4 bg-primary text-center text-white font-weight-bold p-2">Product by category</div>
                <b-list-group-item>Cras justo odio</b-list-group-item>
                <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
                <b-list-group-item>Morbi leo risus</b-list-group-item>
                <b-list-group-item>Porta ac consectetu</b-list-group-item>
                <b-list-group-item>Vestibulum at eros</b-list-group-item>
              </b-list-group>
            
          </b-col>
          <b-col
            >
            
              <b-list-group>
                
                <div class="mt-4 bg-primary text-center text-white font-weight-bold p-2">Product by category</div>
                <b-list-group-item>Cras justo odio</b-list-group-item>
                <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
                <b-list-group-item>Morbi leo risus</b-list-group-item>
                <b-list-group-item>Porta ac consectetu</b-list-group-item>
                <b-list-group-item>Vestibulum at eros</b-list-group-item>
              </b-list-group>
            
          </b-col>
        </b-col>

        <b-col class="content p-0" cols="9">
          <router-view />
        </b-col>
      </b-row>
    </b-container>
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
</style>
