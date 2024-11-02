//const log = require('./Utils/Utils.js');

import Util from "../Utils/Utils.js";
class Login{


constructor(Page){
this.page=Page;
this.mobileNumber="input[name='mobileNumber']"
this.continue="//span[.='Continue']"
this.OTP="//input[@class='OTPInput']"
this.verifyOTP="//span[.='Verify OTP']"
this.sell="//span[@class='headerLinkIcon sell']"


}

async opensite(){
await this.page.goto('https://app.mintpro.in');
await Util.log('Site opened '+ await this.page.url())
await Util.fill(this.page,this.mobileNumber,'6999912345','Filled valaue 6999912345')
await Util.click(this.page,this.continue,'Clicked on Continie')
await Util.fill(this.page,this.OTP,'1234','Filled OTP 1234')
await Util.click(this.page,this.verifyOTP,'Clicked on verifying OTP')
await Util.click(this.page,this.sell,'Clcked on sell')


}
}

module.exports = Login;