<style>
    .demoDiv {padding: 10px}
    .demoDiv .section {
        margin-top: 15px;
    }
    .demoDiv .section h3 {
        display: block;
        margin-bottom: 4px;
        border-bottom: 1px solid #ededed;
    }
</style>

<template>
    <div class="demoDiv">
        <h2>欢迎来到 {{name}} <small>version={{version}}</small></h2>
        <div class="section">
            <h3>日期工具</h3>
            <p class="h">封装了 <code>moment.js</code> ,调用 today() 或者 D.today() 得到当天日期</p>
            <small>{{today()}}</small>
        </div>
        

        <div class="section">
            <h3>提示信息</h3>
            <div class="h">
                封装基于 <code>iview</code> 的提示工具 <code>window.M</code>, 用法：<br>
                M.ok('message') <br>
                M.notice.ok('message','title')  <br>
            </div>
            <Button @click="tip(false)" type="info">显示简短提醒</Button>
            <Button @click="tip(true)" type="success">显示Notice</Button>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                name:"vue + iview2 starter",
                version: C.version
            }
        },
        methods: {
            tip(notice=false){
                if(notice)
                    M.notice.ok(`hello ${this.name}`,'Notice 类型提示')
                else
                    M.info(`hello ${this.name}`)
            }
        }
    }
</script>