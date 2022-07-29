import {Toast} from 'mint-ui'
export const verifyRules =  {
    id_card(val){
        if(!(/(^\d{15}$)|(^\d{17}(\d|X)$)/).test(val)){
            Toast({
                message: '身份证号码格式不正确',
                position: 'middle',
                duration: 2000
            });
            return false;
        }
        return true;
    },
    // fix-更新最新手机号正则
    phone(val,needMsg = true){
        if(!(/^1([38][0-9]|14[579]|5[^4]|16[6]|7[1-35-8]|9[189])\d{8}$/).test(val)){
            needMsg && (Toast({
                message: '手机号码格式错误',
                position: 'middle',
                duration: 2000
            }));
            return false;
        }
        return true;
    },
    email(val){
        if(!(/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/).test(val)){
            Toast({
                message: '邮箱格式错误',
                position: 'middle',
                duration: 2000
            });
            return false;
        }
        return true;
    },
    pwd(val){
        if(!(/^[0-9A-Za-z]{6,}$/).test(val)){
            Toast({
                message: '密码由6位数字字母组成',
                position: 'middle',
                duration: 2000
            });
            return false;
        }
        return true;
    },
    bank_no(val){
        if(!(/^([1-9]{1})(\d{14}|\d{18})$/).test(val)){
            Toast({
                message: '银行卡号格式错误',
                position: 'middle',
                duration: 2000
            });
            return false;
        }
        return true;
    }

}