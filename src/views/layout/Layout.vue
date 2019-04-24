<template>
    <div class="main">
       <div class="main-header-con">
         <Navbar @select="selectMenu" :menuActive="menuActive"/>
       </div>
       <div class="sidebar-menu-con">
         <Sidebar ref="sidebar"/>
       </div> 
       <div class="single-page-con">
          <div class="single-page">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
          </div>
          <Bottom/>
       </div>
    </div>
</template>
<script>
    import Sidebar from './Sidebar.vue'
    import Bottom from './Bottom.vue'
    import Navbar from './Navbar.vue'
    import {mapGetters} from 'vuex';
    import util from '@/utils/util.js';

    export default {
        name: 'layout',
        components: {
            Sidebar,
            Bottom,
            Navbar
        },
        data() {
            return {
                hideMenuText: false,
                currentPath: "",
                // 当前选中菜单的名称(name属性)
                menuActive: "",
                //是否完成初始化
                init:false
            };
        },
        computed: {
            ...mapGetters([
                'sidebar',
            ]),
        },
        methods: {
            changePathArr(name) {
                let pathArr = util.setCurrentPath(this, name);
                this.$store.dispatch('ChangeCurrentPathArr', pathArr);
                let tag = pathArr[pathArr.length - 1];
                this.$store.commit('addPageOpened', tag);
            },
            //导航栏选择菜单时回调
            selectMenu(name) {
                this.$refs.sidebar.changeNavMenu(name);
                this.menuActive = name;
            }
        },
        watch: {
            '$route'(to) {
                this.changePathArr(to.name)
            }
        },
        mounted() {
            this.changePathArr(this.$route.name);
            //初始化导航
            this.selectMenu(this.$route.path.split('/')[1])
        }
    }
</script>
<style lang="less">
    .sidebar-menu-con {
        width:200px;
    }
</style>