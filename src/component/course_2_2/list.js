import san, {DataTypes} from "san";
import "./list.css";
var List = san.defineComponent({
    template: `
    <div class="san-list">
        <div>
            <button on-click="add()">添加</button>
        </div>
        <div>
            <table class="default-table">
                <tr>
                    <th>姓名</th>
                    <th>审核状态</th>
                    <th>操作</th>
                </tr>
                <tr s-for="item,index in personList">
                    <td class="tac">{{item['name']}}</td>
                    <td class="tac">{{ status[item['status']] }}</td>
                    <td class="tac">
                        <button  s-if="item['status']!=0" on-click="delete(index)">删除</button>
                        <button  s-else on-click="check(index)">审核</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    `,
    
    //数据初始化
    initData: function () {
        return {
            personList:[
                {
                    name:'张三',
                    status:'2'
                },
                {
                    name:'李四',
                    status:'1'
                },
                {
                    name:'王五',
                    status:'0'
                },
                {
                    name:'赵六',
                    status:'0'
                },
                {
                    name:'孙七',
                    status:'0'
                }
            ],
            status : {
                '0':'待审核',
                '1':'不合格',
                '2':'合格'
            }
        };
    },
    filters: {
        
    },
    add: function () {
        //获取原来数组的元素随机选择一个加入
        var index = parseInt(Math.random()*this.data.raw.personList.length)
        //console.log();
        this.data.push('personList',this.data.raw.personList[index]);
        
    },
    check: function (index) {
        //随机状态 不能全部合格吧 = =
        
        var status = parseInt(Math.random()*100);
        status = status >= 60?'2':'1';
        this.data.set('personList['+index+']["status"]',status);
    },

    delete: function (index) {
        //removeAt通过数据项的索引移除一条数据
        this.data.removeAt('personList',index);
    }
});

export default List ;
