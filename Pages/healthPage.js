import Util from "../Utils/Utils";
class Health{

    constructor(Page){
    this.page=Page
    this.health="//img[@title='HEALTH']"

    }
async healthClicked(){
await Util.click(this.page,this.health,'Clicked on health')
}


}
module.exports=Health;