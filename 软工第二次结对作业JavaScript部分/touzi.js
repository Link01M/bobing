// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
let touzilei = require("touzilei")
cc.Class({
    extends: cc.Component,

    properties: {
            touzi_sets:{
                default: [],
                type: [cc.SpriteFrame]
            },

        touzi1:null,
        touzi2:null,
        touzi3:null,
        touzi4:null,
        touzi5:null,
        touzi6:null


    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        this.intervalTime = 0;
        //随机一个数
        this.randomType1 = Math.floor(Math.random()*6);
        this.randomType2 = Math.floor(Math.random()*6);
        this.randomType3 = Math.floor(Math.random()*6);
        this.randomType4 = Math.floor(Math.random()*6);
        this.randomType5 = Math.floor(Math.random()*6);
        this.randomType6 = Math.floor(Math.random()*6);
        this.touzi1 = new touzilei(0);
        this.touzi2 = new touzilei(0);
        this.touzi3 = new touzilei(0);
        this.touzi4 = new touzilei(0);
        this.touzi5 = new touzilei(0);
        this.touzi6 = new touzilei(0);
        this.touzi1.touzis = this.touzi_sets;
        this.touzi2.touzis = this.touzi_sets;
        this.touzi3.touzis = this.touzi_sets;
        this.touzi4.touzis = this.touzi_sets;
        this.touzi5.touzis = this.touzi_sets;
        this.touzi6.touzis = this.touzi_sets;
        this.touzi1.dianshu = this.randomType1+1;
        this.touzi2.dianshu = this.randomType2+1;
        this.touzi3.dianshu = this.randomType3+1;
        this.touzi4.dianshu = this.randomType4+1;
        this.touzi5.dianshu = this.randomType5+1;
        this.touzi6.dianshu = this.randomType6+1;

    },

    start () {
        let resultNode = cc.find("Canvas/beijing/result");
        //获得一种骰子的面
        let touziSet = this.touzi_sets
        //获得精灵组件
        let sprite1 = cc.find("Canvas/beijing/touzi1").getComponent(cc.Sprite);
        let sprite11 = cc.find("Canvas/beijing/touzi1");
        let sprite2 = cc.find("Canvas/beijing/touzi2").getComponent(cc.Sprite);
        let sprite22 = cc.find("Canvas/beijing/touzi2");
        let sprite3 = cc.find("Canvas/beijing/touzi3").getComponent(cc.Sprite);
        let sprite33 = cc.find("Canvas/beijing/touzi3");
        let sprite4 = cc.find("Canvas/beijing/touzi4").getComponent(cc.Sprite);
        let sprite44 = cc.find("Canvas/beijing/touzi4");
        let sprite5 = cc.find("Canvas/beijing/touzi5").getComponent(cc.Sprite);
        let sprite55 = cc.find("Canvas/beijing/touzi5");
        let sprite6 = cc.find("Canvas/beijing/touzi6").getComponent(cc.Sprite);
        let sprite66 = cc.find("Canvas/beijing/touzi6");
        let circle1 = cc.find("Canvas/circle1");
        let circle2 = cc.find("Canvas/circle2");
        let circle3 = cc.find("Canvas/circle3");
        let circle4 = cc.find("Canvas/circle4");
        let circle5 = cc.find("Canvas/circle5");
        let circle6 = cc.find("Canvas/circle6");
        sprite1.spriteFrame = this.touzi1.touzis[this.randomType1];
        sprite2.spriteFrame = this.touzi2.touzis[this.randomType2];
        sprite3.spriteFrame = this.touzi3.touzis[this.randomType3];
        sprite4.spriteFrame = this.touzi4.touzis[this.randomType4];
        sprite5.spriteFrame = this.touzi5.touzis[this.randomType5];
        sprite6.spriteFrame = this.touzi6.touzis[this.randomType6];
        sprite11.active = false;
        sprite22.active = false;
        sprite33.active = false;
        sprite44.active = false;
        sprite55.active = false;
        sprite66.active = false;
        let zondian = 0;
        zondian = this.touzi1.dianshu+this.touzi2.dianshu+this.touzi3.dianshu+this.touzi4.dianshu+this.touzi5.dianshu+this.touzi6.dianshu
        cc.log(zondian);
        let score = [this.touzi1.dianshu,this.touzi2.dianshu,this.touzi3.dianshu,this.touzi4.dianshu,this.touzi5.dianshu,this.touzi6.dianshu]
        cc.log(score)
        let shu1 =0;
        let shu2 =0;
        let shu3 =0;
        let shu4 =0;
        let shu5 =0;
        let shu6 =0;
        for (let i = 0;i < 6;i++){
            if(score[i]===1){
                shu1++;
            }
            if(score[i]===2){
                shu2++;
            }
            if(score[i]===3){
                shu3++;
            }
            if(score[i]===4){
                shu4++;
            }
            if(score[i]===5){
                shu5++;
            }
            if(score[i]===6){
                shu6++;
            }
            time:0;
        }
            let o = "   真遗憾！"
            if(shu4 === 4 && shu1 === 2 ){
                cc.log("状元：插金花");
                o = "状元：插金花";
            }
            if(shu4 === 6){
                cc.log("状元：六杯红");
                o = "状元：六杯红";
            }
            if(shu6 === 6 || shu2 === 6 || shu3 === 6 || shu5 === 6){
                cc.log("状元：六杯黑");
                o ="状元：六杯黑";
            }
            if(shu1 === 6){
                cc.log("状元：遍地锦");
                o = "状元：遍地锦";
            }
            if(shu4 === 5){
                cc.log("状元：五红");
                o = "状元：五红";
            }
            if(shu3 === 5 || shu1 ===5 || shu2 === 5 || shu5 === 5 || shu6 === 5){
                cc.log("状元：五子登科")
                o = "状元：五子登科";
            }
            if(shu1 === 1 &&shu2 === 1 &&shu3 === 1 &&shu4 === 1 &&shu5 === 1 &&shu6 === 1 ){
                cc.log("榜眼：对堂");
                o = "榜眼：对堂";
            }
            if(shu4 === 3){
                cc.log("探花：三红");
                o = "探花：三红";
            }
            if(shu3 === 4 || shu1 === 4 || shu2 === 4 || shu5 === 4 || shu6 === 4){
                cc.log("进士：四进");
                o = "进士：四进";
            }
            if(shu4 === 2){
                cc.log("举人：二举");
                o = "举人：二举";
            }
            let buttonNode = cc.find("Canvas/beijing/yao").getComponent(cc.Button);
            buttonNode.interactable = false;
            this.time = 2;
            this.schedule(function (){
                this.time--;
                if(this.time === 0){
                    cc.log("显示结果");
                    let jig1Node = cc.find("Canvas/beijing/result/jig");
                    let closeNode = cc.find("Canvas/beijing/result/close");
                    jig1Node.getComponent(cc.Label).string = o;
                    resultNode.active = true;
                    buttonNode.interactable = true;
                    sprite11.active = true;
                    sprite22.active = true;
                    sprite33.active = true;
                    sprite44.active = true;
                    sprite55.active = true;
                    sprite66.active = true;
                    circle1.active = false;
                    circle2.active = false;
                    circle3.active = false;
                    circle4.active = false;
                    circle5.active = false;
                    circle6.active = false;
                }
            },1)


    },
    clickCapture:function (event,customEventDate){
        cc.director.loadScene("game")
    },
    clickCapture2:function (event,customEventDate){
        let resultNode = cc.find("Canvas/beijing/result");
        resultNode.active = false
    },
    clickCapture3:function (event,customEventDate){
        cc.director.loadScene("jiemian")
    },
    clickCapture4:function (event,customEventDate){
        let resultNode = cc.find("Canvas/beijing/result");
        resultNode.active = true;
    },
    clickCapture5:function (event,customEventDate){
        cc.director.loadScene("rule");
    },
    clickCapture6:function (event,customEventDate){
        cc.director.loadScene("award");
    },
    // update (dt) {},
});
