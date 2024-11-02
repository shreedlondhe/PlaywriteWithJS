
class Util{



    static async log(message, level = 'INFO') {
        const timestamp = new Date().toISOString();
        await console.log(`[${timestamp}] [${level}] ${message}`);
    }

    static async fill(page,locator,value,msg){
    await page.fill(locator,value);
    await this.log(msg)
    }

    static async click(page,locator,msg){
    await page.click(locator);
    await this.log(msg)

    }
    static async wait(page,sec){
    await page.waitForTimeout(sec)
    this.log('Waited for '+ sec+' sec')
    }


}
module.exports = Util;

