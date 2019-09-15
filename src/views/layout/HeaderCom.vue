<template>
    <div class="header">
        <div class="pc">
            <el-row :gutter="20">
                <el-col :span="4">
                    <a href="#" class="logo">
                        <img :src="logo" alt="logo">
                    </a>
                </el-col>
                <el-col :span="16">
                    <menu-item :mode="'horizontal'"
                        :bgColor="bgColor" :textColor="textColor" :activeTextColor="activeTextColor"></menu-item>
                </el-col>
                <el-col :span="4">
                    <router-link :to="'/login'">登录</router-link>
                    <span>/</span>
                    <router-link :to="'/register'">注册</router-link>
                </el-col>
            </el-row>
        </div>
        <div class="mobile">
            <el-row :gutter="20">
                <el-col :span="6">
                    <span style="font-family:Comic Sans MS;font-size:14px;" @click="collapse=!collapse"><div class="menu-icon"></div></span>
                </el-col>
                <el-col :span="12">
                    <a href="#" class="logo">
                        <img :src="logo" alt="logo">
                    </a>
                </el-col>
                <el-col :span="8">
                    <router-link :to="'/login'">登录</router-link>
                    <span>/</span>
                    <router-link :to="'/register'">注册</router-link>
                </el-col>
            </el-row>
            <menu-item v-if="!collapse" :isMobile="true"
                       :bgColor="mBgColor" :textColor="mTextColor" :activeTextColor="mActiveTextColor"></menu-item>
        </div>
    </div>
</template>

<script>
    import MenuItem from '@/components/layout/MenuItem.vue'
    import logo from '@/assets/imgs/logo.png'
    export default {
        name: "HeaderCom",
        components: {
            MenuItem
        },
        data:function(){
            return {
                logo,
                collapse:true,
                bgColor: 'rgba(255,255,255,0)',
                textColor: 'rgba(255,255,255,1)',
                activeTextColor: 'rgba(255,255,255,1)',
                mBgColor: 'rgba(255,255,255,1)',
                mTextColor: 'rgba(0,0,0,1)',
                mActiveTextColor: 'rgba(0,0,0,1)',
            }
        },
        methods: {
            handleSelect(a, b) {
                console.log('handleselect')
            },
        }
    }
</script>

<style lang="scss">
    @import "@/styles/layout/header.scss";
</style>