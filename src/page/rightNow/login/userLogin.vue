<template>
  <div class="login_container">
    <div class="rating-page">
      <div class="top-img-wrapper">
        <img class="res-img" :src="require('@/assets/right-now/top.png')" alt="" />
      </div>
      <div class="login_form">
        <section class="field-item-container simple-form">
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
          <mt-field
            label="图形验证码"
            placeholder="请输入"
            v-if="submitType === 'regist'"
            v-model="userInfo.captcha"
            :attr="{ maxlength: 4 }"
          >
            <img
              :src="captchaImgs[captchaIndex]"
              alt=""
              class="captcha-img"
              @click="getImgCaptcha"
            />
          </mt-field>
        </section>
      </div>

      <LoginBtn
        :enable="validSuc"
        :submitType="submitType"
        @toNext="handleSubmit"
        @onChangeType="changeType"
      ></LoginBtn>
      <div class="deal-wrapper">
        <span
          class="switch"
          :class="{ selected: userInfo.dealFlag }"
          @click="toggleDealStatus"
        >
          <svg class="icon" aria-hidden="true">
            <use
              :xlink:href="
                userInfo.dealFlag
                  ? '#icon-choosehandle'
                  : '#icon-yuanxingweixuanzhong'
              "
            ></use>
          </svg>
        </span>

        <div>
          我已阅读并接受
          <router-link :to="{ path: '/rightNow/deal/1' }"
            >《国美易卡服务协议》</router-link
          >
          <router-link :to="{ path: '/rightNow/deal/2' }"
            >《国美易卡隐私权政策》</router-link
          >
        </div>
      </div>
      <div class="footer-wrapper">
        <img
          class="res-img"
          :src="require('@/assets/right-now/bottom.png')"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script>
import LoginBtn from '@/components/rightNow/LoginBtn'
import { verifyRules } from '@/config/verifyRules'
import { Toast } from 'mint-ui'
import { toLogin, toRegist } from '@/service/getData'
import { Indicator } from 'mint-ui'
export default {
  data () {
    return {
      submitType: 'login',
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
        if (this.submitType === 'login' && this.userInfo.password) {
          return true
        } else {
          //手机号正确 & 校验表单都填写(未对格式进行校验)
          if (Object.keys(this.userInfo).every(key => !!this.userInfo[key])) {
            return true
          }
        }
      }
      return false
    }
  },
  components: {
    LoginBtn
  },
  mounted () {},
  created () {},
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
    },
    //勾选协议
    toggleDealStatus () {
      this.userInfo.dealFlag = !this.userInfo.dealFlag
    },
    changeType (type) {
      this.submitType = type
    },
    handleSubmit () {
      this.submitType === 'login' ? this.submitForm() : this.registForm()
    },
    submitForm () {
      Indicator.open('登录中...')
      // 校验输入是否正确
      if (verifyRules.phone(this.userInfo.username)) {
        //md5加密账号密码(提交上传)
        toLogin(this.userInfo)
          .then(res => {
            Indicator.close()
            const { data } = res
            // 将token存入本地
            sessionStorage.setItem('token', data.token)
            sessionStorage.setItem('userInfo', JSON.stringify(data)) // 存入当前用户信息
            if (res.code === 200) {
              // 判断是否是测试账号，测试账号直接进入详情界面
              if (data.isTestAccount === 1) {
                 Toast('登录成功!')
                this.$router.push('/rightNow/confirmLoan')
              } else { // 未做其他处理了
                Toast('未知异常,请联系管理员！')
                // 判断用户是否已经进件过，进件过 -> 申请成功界面    未进件  -> 走申请流程
                // if (data.isApplyed === 0) {
                //   this.$router.push('/loanFlow')
                // } else if (data.isApplyed === 1) {
                //   this.$router.push('/loanResult')
                // }
              }
            }
          })
          .catch(() => {
            Indicator.close()
          })
      }
    },
    registForm () {
      if (this.userInfo.captcha !== this.rightCode) {
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
  },
  watch: {
    submitType (val) {
      // 清空部分输入框
      if (val === 'register') {
        this.userInfo.username = ''
        this.userInfo.captcha = ''
        this.userInfo.password = ''
      }
    }
  }
}
</script>
<style lang="scss">
.login_container {
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
.login_container {
  .rating-page {
    top: 0;
    background-color: #f4f4fc;
  }
}
.deal-wrapper {
  display: flex;
  padding: 0 0.37rem;
  margin-top: 0.2rem;
  font-size: 0.12rem;
  color: #575e70;
  a {
    color: #575e70;
  }
  div:last-child {
    margin-left: 0.05rem;
    line-height: 1.7;
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

.getCaptcha.mint-button {
  height: 35px;
  margin-left: 0.5rem;
}
.captcha-img {
  display: inline-block;
  width: 100px;
  height: auto;
}
</style>
