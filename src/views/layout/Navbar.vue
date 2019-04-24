<template>
    <div>
        <div class="nav-main">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <breadcrumbNav/>
          </el-menu>
        </div>
    </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  import breadcrumbNav from './BreadcrumbNav.vue';
  export default {
    name: 'navbar',
    components: {
      breadcrumbNav
    },
    data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        this.$emit("select", key);
      }
    }
  }
</script>