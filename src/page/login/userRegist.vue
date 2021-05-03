<template>
  <div class="regist-container">
    <head-top :isBack="true" theme="light"></head-top>
    <div class="rating-page">
      <div class="logo">
        <img :src="logo" alt="" />
      </div>
      <div class="login_form">
        <section class="field-item-container">
          <mt-field
            label="手机号码"
            placeholder="请输入手机号码"
            v-model="userInfo.username"
          ></mt-field>
          <div class="divider-block" style="background: #fff"></div>
          <mt-field
            label="账号密码"
            placeholder="请输入账号密码"
            type="password"
            v-model="userInfo.password"
          ></mt-field>
          <!-- 暂时去掉 -->
          <!-- <mt-field
            label="短信验证码"
            placeholder="请输入"
            v-model="userInfo.message"
            :attr="{ maxlength: 4 }"
          >
            <mt-button
              class="getMsgCode"
              type="primary"
              size="normal"
              @click.native="getMsgCode"
              :class="!isSendBtnEable && 'disabled'"
              v-text="btnText"
            ></mt-button>
          </mt-field> -->
          <mt-field
            label="图形验证码"
            placeholder="请输入"
            v-model="userInfo.captcha"
            :attr="{ maxlength: 4 }"
          >
            <span
              class="captcha-img"
              @click="getImgCaptcha"
              v-html="imgCaptcha"
            >
            </span>
          </mt-field>
        </section>
      </div>
      <div class="deal-wrapper">
        <span
          class="checkbox"
          :class="{ selected: userInfo.dealFlag }"
          @click="toggleDealStatus"
        ></span>
        <div>
          我已阅读并同意
          <router-link :to="{ path: '/deal/1' }"
            >《好分期注册协议》</router-link
          >
          <router-link :to="{ path: '/deal/2' }">《隐私权政策》</router-link>
        </div>
      </div>
      <!--底部下一步按钮组件-->
      <next-btn
        :enable="validSuc"
        formType="login"
        text="注册"
        @toNext="submitForm"
      ></next-btn>
    </div>
  </div>
</template>
<script>
import NextBtn from "@/components/common/NextBtn";
import { verifyRules } from "@/config/verifyRules";
import { Toast } from "mint-ui";
import { toRegist, fetchCaptcha } from "@/service/getData";
import { Indicator } from "mint-ui";
export default {
  data() {
    return {
      logo: require("@/assets/app_logo.png"),
      selectedTab: 0,
      timer: null,
      count: 59,
      btnText: "发送验证码",
      isSendBtnEable: true,
      imgCaptcha: "",
      captchaLock: false, // 防止快速点击
      userInfo: {
        username: "",
        password: "",
        captcha: "", //图形验证码
        // message: "", //短信验证码
        dealFlag: true,
      },
    };
  },
  computed: {
    validSuc: function () {
      if (
        verifyRules.phone(this.userInfo.username, false) &&
        this.userInfo.dealFlag
      ) {
        //手机号正确 & 校验表单都填写(未对格式进行校验)
        if (
          this.selectedTab === 0 &&
          Object.keys(this.userInfo).every((key) => !!this.userInfo[key])
        ) {
          return true;
        }
      }
      return false;
    },
  },
  components: {
    NextBtn,
  },
  mounted() {},
  created() {
    // 获取图形验证码
    this.getImgCaptcha();
  },
  methods: {
    /**
     * @description: 初始化 & 刷新验证码
     * @param {*}
     */
    async getImgCaptcha() {
      if (this.captchaLock) {
        return;
      }
      this.captchaLock = true;
      const res = await fetchCaptcha();
      this.captchaLock = false;
      this.imgCaptcha = res.data && res.data.svgCaptcha;
    },
    //切换登录方式
    toggleTab(index) {
      this.selectedTab = index;
    },
    //勾选协议
    toggleDealStatus() {
      this.userInfo.dealFlag = !this.userInfo.dealFlag;
    },
    submitForm() {
      Indicator.open("注册中...");
      const { username, password } = this.userInfo;
      // 校验输入是否正确
      if (verifyRules.phone(username)) {
        //md5加密账号密码(提交上传)
        toRegist(this.userInfo)
          .then((res) => {
            Indicator.close();
            const { data, code } = res;
            if (code === 10001) {
              this.getImgCaptcha();
              return;
            }
            // 将token存入本地
            sessionStorage.setItem("token", data.token);
            if (code === 200) {
              Toast("注册成功!");
              // 返回登录界面，回填数据
              this.$router.push("/login", { params: { username, password } });
            }
          })
          .catch(() => {
            Indicator.close();
          });
      }
    },
  },
};
</script>
<style lang="scss">
.regist-container {
  .btn-container {
    margin: 0.2rem 0;
  }
}
</style>
<style lang="scss" scoped>
@import "src/style/scss/mixin";
.logo {
  text-align: center;
  width: 0.7rem;
  margin: 0 auto;
  margin-bottom: 0.2rem;
  img {
    width: 100%;
    height: auto;
  }
}
.nav_wrapper {
  box-sizing: border-box;
  margin-bottom: 0.3rem;
  padding-left: 0.15rem;
  @include fj(flex-start);
  @include sc(24px, #000);
  div.nav_item {
    color: #ccc;
    position: relative;
    padding-bottom: 0.1rem;
    &.selected {
      color: #000;
    }
    &.selected:after {
      content: " ";
      background-color: $color-primary;
      width: 0.3rem;
      height: 3px;
      border-radius: 3px;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .divider-line {
    background-color: #ddd;
    width: 1px;
    height: 14px;
    position: relative;
    top: -6px;
    display: inline-block;
    margin: 0 0.13rem;
  }
}
.regist-container {
  .rating-page {
    background-color: #fff;
  }
}
.deal-wrapper {
  display: flex;
  padding: 0 0.15rem;
  margin: 0.2rem 0;
  div:last-child {
    margin-left: 0.05rem;
    line-height: 1.7;
  }
  a {
    color: rgb(2, 146, 213);
  }
}
.divider-block {
  width: 100%;
  height: 0.15rem;
}
.bto-wrapper {
  padding: 0 0.15rem;
  text-align: right;
}

.captcha-img {
  display: inline-block;
  width: 100px;
  height: auto;
  margin-left: 0.5rem;
}
</style>
