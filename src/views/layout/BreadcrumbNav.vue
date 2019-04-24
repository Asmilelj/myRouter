<template>
    <div style="display:flex">
        <div v-for="(item,index) in currentPathArr" :href="item.path" :key="item.name"
            v-if="!item.hidden && index < maxItem">
            <el-menu-item :index="item.path.split('/')[1]" v-if="item.children.length<=1" >
                <router-link tag='span' :to="item.path + '/' + item.children[0].path"
                     style="display: inline-block;height:100%;width:100%">
                    {{item.title}}
                </router-link>
            </el-menu-item>
        </div>
    </div>
</template>
<script>

  export default {
    data() {
      return {
        //超过几个列表后显示下拉菜单 (前面有两个隐藏列，所以需要加上2)
        maxItem: 7
      }
    },
    computed: {
      currentPathArr() {
        console.log('routers', this.$store.state.app.routers);
        return this.$store.state.app.routers;
      },
    }
  }
</script>