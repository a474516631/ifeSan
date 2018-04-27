

import san from 'san';
import person from './component/course_2_1/person.js';
import list from './component/course_2_2/list.js';
import "./index.css";

var app = san.defineComponent({
    components: {
        'ui-course-2-1': person,
        'ui-course-2-2': list,
    },
    // template
    template:
    `
        <div class="app">
            <div class="san-select-course">
                <div s-for="item in  course" on-click="toggle(item.key)">
                    {{item.name}}
                </div>
            </div>
            <div class="san-course-content">
                <ui-course-2-1 class="{{active_course=='2-1'?'':'hidden'}}"></ui-course-2-1>
                <ui-course-2-2 class="{{active_course=='2-2'?'':'hidden'}}"></ui-course-2-2>
            </div>
        </div>        
    
    `,
    initData: function () {
        return {
            course: [
                {
                    key:"2-1",
                    name: '2.1 数据操作',
                },
                {
                    key:"2-2",
                    name: '2.2 条件和循环',
                },
            ],
            active_course:'2-1'
        };

    },
    toggle:function (key) {
        console.log(key)
        this.data.set('active_course',key);
    }
    
});

var app =  new app();
app.attach(document.body);
