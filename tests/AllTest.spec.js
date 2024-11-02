const {test,expect}=require('@playwright/test')
//import Login from '../Pages/loginPage'
const Login = require('../Pages/loginPage.js');
const Life =require('../Pages/lifePage')
const Health=require('../Pages/healthPage')
const Motor=require('../Pages/motorPage')

 let login;
 let life;
 let health;
 let motor;
 let page;
 let context;
test.beforeEach(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
    login = new Login(page);
    life=new Life(page)
    health=new Health(page)
    motor=new Motor(page)
});
test('Life Test',async()=>{
   await login.opensite();
   await life.lifeClicked();
})
test('Health Test',async()=>{
   await login.opensite();
   await health.healthClicked();
  
})
test('Motor Test',async()=>{
   await login.opensite();
   await motor.motorClicked()
  
})
test.afterEach(()=>{
page.close()
context.close()
})