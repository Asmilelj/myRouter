<template>
    <el-row class="login-forms">
        <el-col :span="14" class="login-left">
          <div class="login-top-img">
           
          </div>
          <div class="login-bottom-img">
            
          </div>
        </el-col>   
        <el-col :span="10" class="login-right">
            <div class="login-right-btn">
                <el-form :model="form" ref="form" :rules="formRules" class="demo-form login-form">
                    <el-form-item>
                      <div>
                        <span class="in-bl" style="font-size:19px;font-size: 19px; vertical-align: text-bottom; padding-left: 9px;">智慧亲子管理后台</span>
                      </div>
                    </el-form-item>
                    <el-form-item prop="loginName" class="li-input">
                     
                      <el-input type="name" placeholder="请输入您的账号" v-model="form.loginName" auto-complete="off" maxlength="20"></el-input>
                    </el-form-item>
                    <el-form-item prop="password" class="li-input">
                      
                      <el-input type="password" placeholder="请输入您的密码" v-model="form.password" auto-complete="off" maxlength="16"></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary"  @click="submitForm('form')">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-col>
        <el-col :span="24">
            <div style="text-align:center;color:#AAAAAA;position: fixed;bottom: 4vh;left:45vw;">
                <p>联系方式：0571-28066662</p>
            </div>
        </el-col>
         <!-- 警告框 -->
        <div style="display: none;">
            <el-button :plain="true" @click="open1">消息</el-button>
            <el-button :plain="true" @click="open2">成功</el-button>
            <el-button :plain="true" @click="open3">警告</el-button>
            <el-button :plain="true" @click="open4">错误</el-button>
        </div>
    </el-row>
</template>

<script>

export default {
  name: "login",
  data() {
    const validateName = (rule,value,callback) => {
      if (value == "") {
        callback(new Error('用户名不能为空'));
      }else {
        callback();
      }
    };
    const validatePassword = (rule,value,callback) => {
      let regex = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,15}$/.test(value);
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!regex) {
        callback(new Error("请输入6-16位数字加字母！"));
      } else {
        callback();
      }
    }
    return {
      form: {
        loginName: '',
        password: ''
      },
      formRules: {
        loginName: [
          { min: 1, max: 20, message: "最大不能超过20位", trigger: "blur" },
          { validator: validateName, trigger: 'blur'}
        ],
        password: [
          { validator:validatePassword, trigger: "blur" }
        ]
      },
    };
  },
  methods: {
    //登录
    submitForm(form) {
      let self = this;
      let urlHost = process.env.API_HOST;
      this.$router.push("/");
    },
    //警示框
    open1(val) {
        this.$message({
        showClose: true,
        message: val
        });
    },
    open2(val) {
        this.$message({
        showClose: true,
        message: val,
        type: 'success'
        });
    },
    open3(val) {
        this.$message({
        showClose: true,
        message: val,
        type: 'warning'
        });
    },
    open4(val) {
        this.$message({
        showClose: true,
        message: val,
        type: 'error'
        });
    },
  },
  mounted() {
    window.scrollTo(0,0);
    sessionStorage._familyViewT = '1';
    this.changeValidateCode()
  }
};
</script>

<style scoped>
.login-forms{
  height: 100vw;
  height: 100vh;
}
.login-forms >>> .el-input__suffix{
  display:none;
  }
.img-url{
  position: absolute;
  right: 0.5vw;
  bottom: 2px;
  cursor: pointer;
  }
.login-form{
  width: 100%;
  margin:0;
}
.login-left{
  padding:29px 45px 0px;
}
.login-bottom-img{
  padding:0px;
}
.login-bottom-img > img{
  margin-top: 7vh;
  width: 45vw;
}
.login-top-img{
  text-align:left;
}
.login-top-img >img{
  width:10vw;
}
.login-right{
  margin-top: 10vh;
  padding-top:60px;
  padding-right:86px;
}
.login-right-btn{
  border-radius:3px;
  border:1px solid #ece9e9;
  background: #fff;
  padding: 23px 38px;
  width: 33vw;
  box-sizing: border-box;
}
p{
  margin:0;
  padding:0;
}
.login-forms >>> .el-form-item__content{
  position:relative;
}
.login-name,.login-password,.login-code{
  position:absolute;
  width: 17px;
  height: 18px;
  z-index: 200;
  left: 0.4vw;
  margin-top: 10px;
  }
.validator-num{
  position:relative;
}
.login-forms >>> .el-input{
  width:300px;
}
.login-forms >>> .el-form-item__error{
  left:35px;
}
.login-forms  >>> .el-input__inner{
padding-left:25px;
}
.login-forms  >>> .el-form-item.is-success .el-input__inner{
  border-color:#417FF6
}
.login-forms  >>> .el-form-item.is-success .el-input__validateIcon{
  color:#417FF6;
}
.login-forms  >>>  .el-form-item__content:last-child .el-button--primary{
  width: 300px;
}
.li-input{
  display: inline-block;
}
</style>

