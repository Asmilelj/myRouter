<template>
    <div>
        <div>
           <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
                <template v-for="item in permission_routers"
                            v-if="!item.hidden && item.children.length>=1 && item.path.split('/')[1] === menu">
                    <!--有二级菜单的设置路由-->
                    <template v-for="child in item.children">
                    <!--设置下面的二级菜单显示-->
                    <el-menu-item :name="item.path+'/'+child.path" :key="child.name">
                        <span class="layout-text" :key="child.name">{{ child.title }}</span>
                    </el-menu-item>
                    </template>
                </template>
            </el-menu>
        </div>
    </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  export default {
    data() {
        return {
            iconSize: 14,
            //当前选中导航的name
            menu: ""
        }
    },
    computed: {
        ...mapGetters([
            'permission_routers',
            'sidebar'
        ]),
        openedSubmenuArr() {
            let n = this.$route.path.split("/")[1];
            return [n];
        }
    },
    methods: {
        changeMenu(active) {
            this.$router.push(active);
        },
        changeNavMenu(url) {
            this.menu = url;
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
  }
</script>