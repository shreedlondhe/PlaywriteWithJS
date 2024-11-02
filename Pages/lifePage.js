import Util from "../Utils/Utils";
class Life{

constructor(Page){
this.page=Page;
this.life="//img[@title='LIFE']"
}

async lifeClicked(){
    await Util.click(this.page,this.life,'Clicked on life')
   
}

}
module.exports=Life;