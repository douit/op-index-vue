<template>
    <el-submenu v-if="menu.children && menu.children.length > 0" :index="''+menu.id">
        <template slot="title">{{ menu.name }}</template>
        <item v-for="item in menu.children" :key="item.id" :menu="item"></item>
    </el-submenu>
    <el-menu-item v-else :index="''+menu.id">{{menu.name}}</el-menu-item>
</template>

<script>
    export default {
        name: "Item",
        props:{
            menu:Object
        }
    }
</script>

<style scoped>

</style>