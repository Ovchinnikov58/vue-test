<template>  
    <div class="container">
        <nav class="Nav-block">
            <router-link class="link" to="/" active-class="link--active" exact>HOME</router-link>
            <router-link class="link" to="/article" active-class="link--active" exact="">ARTICLE</router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data () {
            return {
            }
        }
    }
</script>

<style lang="scss" scoped>
    .title {
        color: blue;
    }
    .container {
        display: flex; 
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .link {
        color: rgb(133, 231, 174);
        font-size: 20px;
    }
    .link--active {
        font-weight: bold;
        text-decoration: underline;
        font-size: 25px;
    }
    .Nav-block {
        margin-bottom: 30px;
        display: flex;
        justify-content: space-around;
        width: 300px;
    }

</style>