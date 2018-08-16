<template>
<div>
  <div class="checkdate">
    <div class="checkin">
      <p>入住</p>
      <div class="date" @click="begincalendar=true">
        {{ beginday }}
        <span class="week">周{{ nowweek }}</span>
      </div>
    </div>
    <div class="days">
      <div>{{ days }}晚</div>
    </div>
    <div class="checkout" @click="endcalendar=true">
      <p>离店</p>
      <div class="date">
        {{ endday }}
        <span class="week">周{{ endweek }} </span>
      </div>
    </div>
  </div>
  <div class="keyword">
    <input type="text" id="keyword" placeholder="关键字/位置/酒店名">
  </div>
  <div class="search">
    <button class="search-btn">查询</button>
  </div>
  <div class="cover" v-if="begincalendar">
    <Calendar @click-event="chooseBeginDate($event)" v-bind:choose-date="nowdate"></Calendar>
  </div>
  <div class="cover" v-if="endcalendar">
    <Calendar @click-event="chooseEndDate($event)" v-bind:choose-date="enddate"></Calendar>
  </div>
</div>
</template>

<script>
import Calendar from "./Calendar.vue";
export default {
  name: "DateSelector",
  data() {
    return {
      begincalendar: false,
      endcalendar: false,
      nowdate: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate()
      ),
      enddate: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate() + 1
      ),
      weeks: ["日", "一", "二", "三", "四", "五", "六"]
    };
  },
  computed: {
    beginday() {
      let date = this.nowdate.toLocaleDateString().substring(5);
      return date.replace(/\//, "月") + "日";
    },
    endday() {
      let date = this.enddate.toLocaleDateString().substring(5);
      return date.replace(/\//, "月") + "日";
    },
    nowweek() {
      return this.weeks[this.nowdate.getDay()];
    },
    endweek() {
      return this.weeks[(this.nowdate.getDay() + 1) % 7];
    },
    days() {
      let begin = this.nowdate.getTime();
      let end = this.enddate.getTime();
      return (end - begin) / 86400000;
    }
  },
  methods: {
    chooseBeginDate($event) {
      this.begincalendar = false;
      let startdate = new Date($event.year, $event.month - 1, $event.day);
      if (startdate >= this.enddate) {
        this.enddate = new Date($event.year, $event.month - 1, $event.day + 1);
      }
      this.nowdate = startdate;
    },
    chooseEndDate($event) {
      this.endcalendar = false;
      let enddate = new Date($event.year, $event.month - 1, $event.day);
      if (enddate <= this.nowdate) {
        this.nowdate = new Date($event.year, $event.month - 1, $event.day - 1);
      }
      this.enddate = enddate;
    }
  },
  components: {
    Calendar: Calendar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  border: none;
  outline: none;
  line-height: 0.8rem;
}
input:focus {
  outline: none;
}
input::-webkit-input-placeholder {
  color: #b0bbcd;
}
.checkdate {
  height: 1.15rem;
  padding: 0.2rem 0.3rem 0;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  justify-content: space-between;
}
.checkdate p {
  color: #acacac;
}
.checkin {
  flex: 1;
}
.checkout {
  flex: 1;
}
.week {
  font-size: 0.20rem;
}
.days {
  padding: 0.4rem;
}
.date {
  line-height: 0.6rem;
  font-size: 0.3rem;
  font-weight: bold;
}
.keyword {
  height: 0.8rem;
  padding: 0 0.3rem;
  border-bottom: 1px solid #f2f2f2;
}
.search {
  margin: 0.2rem;
}
.search-btn {
  width: 100%;
  height: 0.8rem;
  background: #ff6026;
  color: #fff;
  border: none;
  outline: none;
}
.search-btn:focus {
  border: none;
}
.cover {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background: #fff;
  z-index: 9;
}
</style>
