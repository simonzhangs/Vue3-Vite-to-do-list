<template>
    <div class="todolist">
        <el-row justify="center">
        <h1>New ToDo</h1>
        </el-row>
        <el-row justify="center">
            
                <el-form @submit.prevent="addList">
                    <el-col :span="24">
                    <el-input 
                    v-model="newToDo" 
                    name="newTodo"
                    auto-complete="off"
                    placeholder="Please在这里输入待办事情" />
                    </el-col>
                    <el-col :span="24">
                        <el-button type="primary" plain 
                        @click="addList">添加</el-button>
                    </el-col>
                </el-form>
            
            
        </el-row>

        <div class="needtodo">
            <el-row justify="center">
                <el-col :span="8">
                    <h2>ToDo List</h2>
                    <el-divider></el-divider>
                    <ul>
                        <li v-for="(todolist,index) in todolists"
                        :key="index">
                            <span
                            :class="{done:todolist.done}"
                            @click="doneTodo(todolist)">
                            {{todolist.msg}}</span>

                            <el-button type="success"
                            @click="doneTodo(index,todolists)">
                                Done</el-button>
                            <el-button type="primary"
                            @click="removeTodo(index)">Remove</el-button>
                        
                        </li>
                    </ul>
                    <h4 v-if="todolists.length === 0">Empty list.</h4>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default{
    name:'todo-list',
    data(){
        return{
            newToDo:'',
            todolists:[
                {id:0,done:false,msg:'do the vue'},
                {id:1,done:true,msg:'do the work'}
            ],
            listNum:1,
        }
    },
    methods:{
        addList(){
            if(this.newToDo){
                this.listNum++
                this.todolists.push({
                    id:this.listNum,
                    done:false,
                    msg:this.newToDo
                })

            console.log(this.input,this.listNum)
            console.log(this.todolists)
            this.newToDo=''
            }
            
        },
        removeTodo(index){
            this.todolists.splice(index,1) 
        },
        doneTodo(index,todolists){
            this.todolists[index].done = !this.todolists[index].done;
            console.log(todolists)
        }
    }
    
}

</script>

<style scope>
/* .add{
    display: flex;
    flex-direction: row;
    width: 500px;
    margin: 10px auto;
}
.add input.el-input__inner {
    display: flex;
    flex: auto;
}
.add button.el-button--primary{
    display: flex;
} */

span.done{
    text-decoration: line-through;
}

</style>