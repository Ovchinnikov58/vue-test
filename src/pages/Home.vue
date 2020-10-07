<template>  
    <div class="home">
        <h1 class="title">Home</h1>
        <div v-if="!auth">
            <button @click="showAuth" class="button">Авторизация</button>
            <button  @click="showReg" class="button">Регистрация</button>
        </div>

        <div v-if="auth">
            <h1>Привет {{userName}}</h1>
            <button class="button logoutBtn" @click="logout">Logout</button>
        </div>

        <form action="" class="modal Auth-form" v-if="authForm">
            <h2 class="modal_title">Авторизация</h2>

            <label for="logA" >Login</label>
            <input type="text" id="logA" required v-model.trim="authLogin">

            <label for="pasA">Password</label>
            <input type="password" id="pasA" required v-model.trim="authPas">

            <input type="submit" class="button" @click.prevent="authUser">
        </form>

        <form action="" class="modal Reg-form" v-if="regForm">
            <h2 class="modal_title">Регистрация</h2>

            <label for="logR">Login</label>
            <input type="text" id="logR" required v-model.trim="regLogin">

            <label for="pasR">Password</label>
            <input type="password" id="pasR" required v-model.trim="regPas">

            <input type="submit" class="button" @click.prevent="createUser">
        </form>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                article: '2222',
                //userName: 'Игорь',
                authForm: false,
                regForm: false,
                regLogin: '',
                regPas: '',
                authLogin: '',
                authPas: ''
            }
        },
        computed:{ 
            auth(){return this.$store.getters.getAuth},
            getUsers() {return this.$store.getters.getUsers},
            userName() {return this.$store.getters.getUser}
        },
        methods: {
            showAuth() {
                this.authForm = !this.authForm;
                this.regForm = false;
            },
            showReg() {
                this.regForm = !this.regForm;
                this.authForm = false;
            },
            createUser() {
                const user = {
                    name: this.regLogin,
                    password: this.regPas
                }
                if (user.name !== '' && user.password !== '') {
                    //console.log(user)
                    try {
                        this.$http.post('http://localhost:3000/users', user)
                        .then(responce => {
                            return responce.json()
                            //this.$store.dispatch('fetchUser')
                        })
                        .then(newUser => {
                            //console.log(newUser)
                            this.$store.dispatch('fetchUser')
                        })
                    }
                    catch(e) {
                        console.log(e)
                    }
                    this.regForm = false;
                    this.regLogin = '';
                    this.regPas = '';
                    this.$store.dispatch('fetchUser')
                    //console.log(this.getUsers)
                }
            },
            loadUser() {
                this.$store.dispatch('fetchUser')
            },
            authUser() {
                const users = Array.from(this.getUsers)
                //console.log(users)
                //console.log(this.authLogin)
                //console.log(this.authPas)

                for (let user of users) {
                    if (user.name.toLowerCase() === this.authLogin.toLowerCase() && user.password.toLowerCase() === this.authPas.toLowerCase()) {
                        //console.log(user.name)
                        this.$store.commit('setUser', user.name)
                        this.$store.commit('setAuth', true)
                        this.authForm = !this.authForm
                        this.authLogin = ''
                        this.authPas = ''
                    }
                }

            },
            logout() {
                this.$store.commit('setAuth', false)
                //this.$store.commit('setUser', null)
            }
        },
         created() {
            this.loadUser()
        }
    }
</script>

<style lang="scss" scoped>
.home {
    text-align: center;
}
.modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    border: 2px solid #fff;
    padding: 20px;
    margin: 30px 0;
    input {
        margin: 5px 0;
    }
}
.modal_title {
    margin-bottom: 20px;
}
.title {
    margin-bottom: 20px;
    color: rgb(235, 235, 79);
}
.logoutBtn {
    margin-top: 20px;
    padding: 5px;
}
</style>