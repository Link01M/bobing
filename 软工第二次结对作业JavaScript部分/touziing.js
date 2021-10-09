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
        this.dianshu=this.randomType1;
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
        let resultNode = cc.find("Canvas/result");
        //获得一种骰子的面
        let touziSet = this.touzi_sets
        //获得精灵组件
        let sprite1 = cc.find("Canvas/beijing/touzi1").getComponent(cc.Sprite);
        let sprite2 = cc.find("Canvas/beijing/touzi2").getComponent(cc.Sprite);
        let sprite3 = cc.find("Canvas/beijing/touzi3").getComponent(cc.Sprite);
        let sprite4 = cc.find("Canvas/beijing/touzi4").getComponent(cc.Sprite);
        let sprite5 = cc.find("Canvas/beijing/touzi5").getComponent(cc.Sprite);
        let sprite6 = cc.find("Canvas/beijing/touzi6").getComponent(cc.Sprite);
        sprite1.spriteFrame = this.touzi1.touzis[this.randomType1];
        sprite2.spriteFrame = this.touzi2.touzis[this.randomType2];
        sprite3.spriteFrame = this.touzi3.touzis[this.randomType3];
        sprite4.spriteFrame = this.touzi4.touzis[this.randomType4];
        sprite5.spriteFrame = this.touzi5.touzis[this.randomType5];
        sprite6.spriteFrame = this.touzi6.touzis[this.randomType6];



    },
    clickCapture:function (event,customEventDate){
        cc.director.loadScene("game")
    },
    clickCapture2:function (event,customEventDate){
        let resultNode = cc.find("Canvas/result");
        resultNode.active = false
    },
    clickCapture3:function (event,customEventDate){
        cc.director.loadScene("jiemian")
    },
    clickCapture4:function (event,customEventDate){
        let resultNode = cc.find("Canvas/result");
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
