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
            <!-- <span
              class="captcha-img"
              @click="getImgCaptcha"
              v-html="imgCaptcha"
            >
            </span> -->
            <img
              :src="captchaImgs[captchaIndex]"
              alt=""
              class="captcha-img"
              @click="getImgCaptcha"
            />
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
        text="注册并登录"
        @toNext="submitForm"
      ></next-btn>
      <div class="bto-wrapper">
        <router-link to="/login">
          <span>已有账号，去登录</span>
        </router-link>
      </div>
      <div class="footer" style="margin-top: .4rem">
        <p>5000元贷款额度最低利息1元/天</p>
        <p>具体利息因个人征信不同略有浮动</p>
        <p>总体贷款年化利率（单利）7.3%-24%</p>
      </div>
      <footer-msg style="margin-top:0.2rem"></footer-msg>
    </div>
  </div>
</template>
<script>
import NextBtn from '@/components/common/NextBtn'
import { verifyRules } from '@/config/verifyRules'
import { Toast } from 'mint-ui'
import { toRegist } from '@/service/getData'
import { Indicator } from 'mint-ui'

export default {
  data () {
    return {
      logo: require('@/assets/app_logo.png'),
      selectedTab: 0,
      timer: null,
      count: 59,
      btnText: '发送验证码',
      isSendBtnEable: true,
      imgCaptcha: '',
      captchaLock: false, // 防止快速点击
      captchaIndex: Math.floor(Math.random() * 5),
      captchaImgs: [
        require('@/assets/icons/8ydq.png'),
        require('@/assets/icons/egmp.png'),
        require('@/assets/icons/kpma.png'),
        require('@/assets/icons/qw6x.png'),
        require('@/assets/icons/uwwy.png')
      ],
      captchaCodes: ['8ydq', 'egmp', 'kpma', 'qw6x', 'uwwy'],
      userInfo: {
        username: '',
        password: '',
        captcha: '', //图形验证码
        // message: "", //短信验证码
        dealFlag: true
      }
    }
  },
  computed: {
    rightCode () {
      return this.captchaCodes[this.captchaIndex]
    },
    validSuc: function () {
      if (
        verifyRules.phone(this.userInfo.username, false) &&
        this.userInfo.dealFlag
      ) {
        //手机号正确 & 校验表单都填写(未对格式进行校验)
        if (
          this.selectedTab === 0 &&
          Object.keys(this.userInfo).every(key => !!this.userInfo[key])
        ) {
          return true
        }
      }
      return false
    }
  },
  components: {
    NextBtn
  },
  mounted () {},
  created () {
    // 获取图形验证码
    // this.getImgCaptcha()
  },
  methods: {
    /**
     * @description: 初始化 & 刷新验证码, fix:由于网络问题，采用本地存储
     * @param {*}
     */
    async getImgCaptcha () {
      if (this.captchaLock) {
        return
      }
      this.captchaLock = true
      this.captchaIndex = Math.floor(Math.random() * 5)
      this.captchaLock = false
      // const res = await fetchCaptcha()
      // this.captchaLock = false
      // if (res.data) {
      //   this.imgCaptcha = res.data.svgCaptcha
      //   this.rightCode = res.data.code
      // }
    },
    //切换登录方式
    toggleTab (index) {
      this.selectedTab = index
    },
    //勾选协议
    toggleDealStatus () {
      this.userInfo.dealFlag = !this.userInfo.dealFlag
    },
    submitForm () {
      if (this.userInfo.captcha.toLocaleLowerCase() !== this.rightCode) {
        // 这里修改为前端校验验证码
        Toast('验证码错误')
        this.getImgCaptcha()
        return
      }
      Indicator.open('注册中...')
      const { username } = this.userInfo
      // 校验输入是否正确
      if (verifyRules.phone(username)) {
        //md5加密账号密码(提交上传)
        toRegist(this.userInfo)
          .then(res => {
            Indicator.close()
            const { data, code } = res
            // if (code === 10001) {
            //   this.getImgCaptcha()
            //   return
            // }
            if (code === 200) {
              // 将token存入本地
              sessionStorage.setItem('token', data.token)
              sessionStorage.setItem('userInfo', JSON.stringify(data)) // 存入当前用户信息
              Toast('登录成功!')
              // 这里直接取登录后的界面（新注册的用户跳转填写资料）
              this.$router.push('/loanFlow')
            }
          })
          .catch(() => {
            Indicator.close()
          })
      }
    }
  }
}
</script>
<style lang="scss">
.regist-container {
  .btn-container {
    margin: 0.2rem 0;
  }
}
</style>
<style lang="scss" scoped>
@import 'src/style/scss/mixin';
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
      content: ' ';
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
  a {
    color: #333;
  }
}

.captcha-img {
  display: inline-block;
  width: 100px;
  height: auto;
  margin-left: 0.5rem;
}
</style>
