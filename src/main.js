// 引用完整版 Vue，方便讲解
import Vue from "vue/dist/vue.js";

Vue.config.productionTip = false;

new Vue({
  data: {
    user: {
      email: "Origami@qq.com",
      nickname: "折纸",
      phone: "13812312138"//手机号最好用字符串来存，因为有时会有+86这种前缀
    }
  },
  computed: {//计算属性
    displayName: {
      get() {//读取属性
        const user = this.user;
        return user.nickname || user.email || user.phone;
      },
      set(value) {//设置属性
        console.log(value);
        this.user.nickname = value;
      }
    }
  },
  // DRY don't repeat yourself
  // 不如用 computed 来计算 displayName
  template: `
    <div>
      {{displayName}}
      <div>
      {{displayName}}
      <button @click="add">set</button>
      </div>
    </div>
  `,
  methods: {
    add() {
      console.log("add");
      this.displayName = "小智";
    }
  }
}).$mount("#app");
