import san, {DataTypes} from "san";
import "./person.css";

var Person = san.defineComponent({
    template: `
    <div class="san-from">

        <div>{{hello}}</div>
        
        <div class="san-form-info">
            <div>
                <label>姓名(String)</label>
                <span>{{ info.name }}</span>
                
            </div>
            <div>
                <label>年龄(Number)</label>
                <span>{{ info.age }}</span>
            </div>
            <div>
                <label>简介(String)</label>
                <span>{{ info.des }}</span>
            </div>
        </div>
        <div class="san-form-input">
            <div>
                <label>姓名：</label>
                <input maxlength="20" type="text" value="{= info.name =}">
                <span class="{{info.name.length>0?'validate_success':'validate_error'}}">{{ validate.validate_name }}</span>
            </div>
            <div>
                <label>年龄：</label>
                <input maxlength="3" type="number" value="{= info.age =}">
                <span class="{{info.age>0?'validate_success':'validate_error'}}">{{ validate.validate_age }}</span>
            </div>
            <div>
                <label>简介：</label>
                <input maxlength="100" type="text" value="{= info.des =}">
                <span class="{{info.des.length?'validate_success':'validate_error'}}">{{ validate.validate_des }}</span>
            </div>
        </div>
        <div>
            <label> 信息： </label><button type="button"  on-click="cleanFrom">清除信息</button>
        </div>
    </div>
    `,
    //数据校验
    dataTypes: {
        'info':DataTypes.shape({
            'name': DataTypes.string,
            'age': DataTypes.number,
            'des': DataTypes.string
        })
    },
    //数据初始化
    initData: function () {
        return {
            'hello':'hello world!',
            'info':{},
            'validate':{
                'validate_name':'请输入名字',
                'validate_age':'请输入正确年龄',
                'validate_des':'请输入简介',
                'validate_success':'正确',
            }
        };
    },
    filters: {
        
    },
    cleanFrom: function () {
        this.data.set('info',{});
        
    }
});

//要使用组件嵌套 不用new  估计是内部嵌套时自动new了一次 new俩次不报错，但是组件无法渲染;
//var person = new Person();

export default Person ;
