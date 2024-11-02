import Util from "../Utils/Utils";
class Motor{

    constructor(Page){
        this.page=Page;
        this.motor="//img[@title='FW']"

    }

async motorClicked(){
await Util.click(this.page,this.motor,'Clicked on motor')

}

}
module.exports=Motor;