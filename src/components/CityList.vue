<template>
    <div class="back">
        <div class="fix-top">
            <div class="tit">
            选择目的地
            </div>
            <div class="search">
                <input type="text" v-model="inputcity"  class="search-input" placeholder="输入城市">
            </div>
            <div class="tip">
                覆盖全国<span style="font-size:0.3rem;color:#ff8c00">2000</span>多个目的地
            </div>  
        </div>
        
        <div class="list">
            <div v-for="o in letterlist" v-bind:key="o" v-bind:id="o">
                <div class="list-letter">
                    {{ o }}
                </div>
                <div class="list-city">
                    <ul>
                        <li @click="chooseCity(cityname.name)" v-for="(cityname,index) in lettercity[o] " v-bind:key="index">
                            {{cityname.name}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="search-list" v-if="showsearchlist" >
            <div @click="chooseCity(s.name)" v-for="(s,i) in searchresult" v-bind:key="i" v-html="showsearchReasult(s.name)">
            </div>
        </div>
        <div class="letter-nav" v-if="!showsearchlist" >
            <div v-for="o in letterlist" v-bind:key="o+'-nav'" @click="letterNav(o)" >
                {{ o }}
            </div>
        </div>
    </div>
</template>
<script>
import city from "../assets/data/city.json";

export default {
  name: "CityList",
  data() {
    return {
      citylist: city,
      letterlist: [],
      lettercity: {},
      inputcity: "",
      showsearchlist: false,
      searchresult: []
    };
  },
  created() {
    this.buildLetter();
    this.buildCity();
  },
  watch: {
    inputcity: function() {
      //监听inputcity的值
      if (this.inputcity == "") {
        this.showsearchlist = false;
      } else {
        this.showsearchlist = true;
        this.searchresult = this.cityFilter(this.inputcity);
      }
    }
  },
  methods: {
    buildLetter() {
      // 构建字母项
      for (let i = 0; i < 26; i++) {
        let o = {};
        let letter = String.fromCharCode(65 + i);
        o[letter] = [];
        this.letterlist.push(letter);
        this.lettercity[letter] = [];
      }
    },
    buildCity(cityNamesFilter) {
      // 按拼音构建构建城市
      for (let i = 0; i < this.citylist.length; i++) {
        let firstLetter = this.citylist[i].pinyin.substr(0, 1);
        this.lettercity[firstLetter].push(this.citylist[i]);
      }
    },
    letterNav(letter) {
      document.getElementById(letter).scrollIntoView();
    },
    cityFilter(city) {
      // 城市搜索筛选
      let citynamelist = [];
      for (let i = 0; i < this.citylist.length; i++) {
        if (this.citylist[i].name.indexOf(city) != -1) {
          citynamelist.push(this.citylist[i]);
        }
      }
      return citynamelist;
    },
    showsearchReasult(n) {
      let reg = new RegExp(this.inputcity, "g");
      let pretxt = n;
      let newtxt = pretxt.replace(
        reg,
        '<span style="color: #ff6026">' + this.inputcity + "</span>"
      );
      return newtxt;
    },
    chooseCity(c) {
      this.inputcity = c;
      this.$store.commit("cityChoosed", c);
      this.$router.back();
    }
  }
};
</script>
<style scoped>
ul,
li {
  list-style: none;
}
.back {
  background: #f7f7f7;
}
.fix-top {
  position: fixed;
  top: 0;
  width: 100%;
  height: 2.5rem;
  background: #f7f7f7;
}
.tit {
  height: 0.9rem;
  border-bottom: 1px solid #eee;
  text-align: center;
  line-height: 0.9rem;
  font-size: 0.28rem;
}
.search {
  height: 0.9rem;
  padding: 0.15rem;
}
.search-input {
  width: 100%;
  height: 0.6rem;
  padding: 0 0.3rem;
  border: 1px solid #e7e7e7;
  border-radius: 20px;
  outline: none;
}
.search-input:focus {
  border: 1px solid #e7e7e7;
}
.tip {
  text-align: center;
  line-height: 0.7rem;
  background: #fff;
}
.list {
  position: fixed;
  width: 100%;
  height: 20rem;
  margin-top: 2.5rem;
  overflow: scroll;
  border-top: 1px solid #bcbcbc;
  z-index: 9;
}
.list-letter {
  line-height: 0.5rem;
  padding: 0 0.2rem;
}
.list-city {
  line-height: 0.9rem;
  padding: 0 0.2rem;
  background: #fff;
}
.list-city li {
  font-size: 0.28rem;
  border-bottom: 1px solid #dcdcdc;
}
/* 搜索结果 */
.search-list {
  position: fixed;
  width: 100%;
  height: 90vh;
  padding-bottom: 5vh;
  margin-top: 1.8rem;
  background: #fff;
  z-index: 10;
  overflow: scroll;
  font-size:0.26rem;
}
.search-list div {
  line-height: 0.9rem;
  padding: 0 0.2rem;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}
.letter-nav {
  position: fixed;
  right: 0.1rem;
  bottom: 0;
  z-index: 9;
  color: #0088cf;
  font-weight: bold;
}
.letter-nav div {
  width: 0.5rem;
  height: 0.35rem;
  text-align: center;
  line-height: 0.35rem;
}
</style>


