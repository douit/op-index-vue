<template>
    <!--导航菜单-->
    <el-menu v-if="isMobile" :default-active="activeIndex" :mode="mode" @select="handleSelect"
             :background-color="bgColor" :text-color="textColor" :active-text-color="activeTextColor">
        <item v-for="menu in menuList" :key="menu.id" :menu="menu"></item>
    </el-menu>
    <el-menu v-else :default-active="activeIndex" :mode="mode" @select="handleSelect"
             :background-color="bgColor" :text-color="textColor" :active-text-color="activeTextColor">
        <template v-for="menu in menuList">
            <el-submenu v-if="menu.children && menu.children.length > 0" :index="''+menu.id">
                <template slot="title">{{ menu.name }}</template>
                <el-menu-item :index="''+item.id" v-for="item in menu.children" :key="item.id">
                    <h4>{{ item.name }}</h4>
                    <ol v-if="item.children && item.children.length>0">
                        <li v-for="li in item.children" :key="li.id">
                            {{ li.name }}
                        </li>
                    </ol>
                </el-menu-item>
            </el-submenu>
            <el-menu-item v-else :index="''+menu.id">{{menu.name}}</el-menu-item>
        </template>
    </el-menu>
</template>

<script>
    import { mapGetters, mapState } from 'vuex'
    import Item from './Item.vue'
    export default {
        name: "MenuItem",
        components:{
            Item
        },
        props: {
            mode: {
                type: String,
                default: 'vertical'
            },
            isMobile: {
                type: Boolean,
                default: false
            },
            bgColor: String,
            textColor: String,
            activeTextColor: String,
        },
        computed: {
            ...mapGetters({
                menuList: 'menuList'
            })
        },
        data: function(){
            return {
                activeIndex: '1'
            }
        },
        methods: {
            handleSelect(a, b) {
                console.log('handleselect')
            },
        }
    }
</script>

<style scoped>

</style>