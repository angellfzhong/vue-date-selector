<template>
  <div class="city">
          <div>
            <p>国内/海外目的地</p>           
                <div class="position">
                    <router-link to="/citylist">
                    {{ thecity }}
                    </router-link>  
                </div>           
          </div>
          
          <div class="location" @click="getPosition">
           当前位置
         </div>
    </div>
</template>

<script>
export default {
  name: "DateSelector",
  data() {
    return {
      thecity: this.$store.state.mycity
    };
  },
  methods: {
    getPosition() {}
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.city {
  height: 1.1rem;
  padding: 0.2rem 0.3rem;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  justify-content: space-between;
}
.city p {
  line-height: 0.3rem;
  color: #acacac;
}
.position {
  line-height: 0.55rem;
  font-size: 0.24rem;
}
.location {
  width: 1.7rem;
  height: 100%;
  padding-top: 0.45rem;
  border-left: 1px solid #f2f2f2;
  background: url("../assets/images/location.png") center 0.05rem no-repeat;
  background-size: 0.38rem;
  text-align: center;
  color: #478afc;
}
a {
  color: #000;
  font-size: 0.25rem;
  text-decoration: none;
}
</style>