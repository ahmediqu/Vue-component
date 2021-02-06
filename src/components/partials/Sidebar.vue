<template>
  <div>
    <div class="zap-slideout"
         :class="{ isOpen: isOpen }">
      <div class="zap-slideout-opener"
           @click="toggle">{{openerText}}</div>
      <ul class="zap-slideout-menu">

        <li class="zap-slideout-menu-item"
            v-for="(item, index) in menu" :key="index">{{item}}</li>

      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data(){
    return {
      openerText: 'Open',
      isOpen: false,
      menu: [ 'Home', 'Work', 'Contact' ],
      smallMenu: [ 'Tips', 'Resources', 'Shenanigans' ]
    }
  },
  methods: {
    open() {
      this.openerText = 'Close';
      this.isOpen = true;
    },
    close() {
      this.openerText = 'Open';
      this.isOpen = false;
    },
    toggle() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    }
  }
}

</script>

<style scoped>

.info {
  position: absolute;
  top: 50%; left: 50%;
  transform: translateX(-50%);
  text-align: center;
}

.title {
  font-size: 14px;
  font-weight: 600;
}

.description {
  margin-top: 20px;
}

/*
Our Zap Slideout styles...
 */
.zap-slideout {
  position: relative;
  width: 240px;
  height: 100vh;
  padding: 30px;
  background-color: #ddd;
  transform: translateX(-100%);
  transition: transform 0.6s ease(out-cubic);
}
.isOpen {
   transform: translateX(0);
 }


.zap-slideout-opener {
  position: absolute;
  top: 20px;
  left: 100%;
  margin-left: 20px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #000;
  cursor: pointer;
}
.zap-slideout-opener:hover {
   text-decoration: underline;
 }


.zap-slideout-menu {
  font-weight: 600;
  color: #fff;
}

.zap-slideout-menu-item {
  font-size: 16px;
  color: #000000;
}

.zap-slideout-menu-item--small {
  font-size: 18px;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #ecf0f1;
}

/* The famed Zap agency logo (TM) */
.zap-emoji {
  height: 120px;
}
</style>