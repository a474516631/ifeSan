import san, {DataTypes} from "san";
import "./block.css";
const Block = san.defineComponent({
    template: `
    <div>
        <div id="block1" on-click="changeColor(activeColor)" style="background:{{backgroundColor[activeColor]}};width:100px;height:100px;margin:0 auto;"></div>
        <div id="block2" on-click="changeColor2(activeClass)" class="block block-bg-{{backgroundColor[activeClass]}}"></div>
    </div>
    `,
    
    //数据初始化
    initData: function () {
        return {
            activeColor:0,
            activeClass:0,
            backgroundColor:['blue','red','green','orange','pink'],
        };
    },
    filters: {
        
    },
    changeColor: function (index) {
        index ++
        if(index>=this.data.raw.backgroundColor.length){
            index = 0;
        }
        this.data.set('activeColor',index)
    },
    changeColor2: function (index) {
        index ++
        if(index>=this.data.raw.backgroundColor.length){
            index = 0;
        }
        this.data.set('activeClass',index)
    }
});

export default Block ;
