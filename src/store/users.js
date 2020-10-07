export default {
    state: {
        users: null,
        user: null,
        auth: false
    },
    mutations: {
        setUsers(state, payload) {
            state.users = payload;
        },
        setUser(state, payload) {
            state.user = payload;
        },
        setAuth(state, payload) {
            state.auth = payload;
        },
    },
    actions: {
        fetchUser(context, payload) {
            try {
                const responce =  fetch('http://localhost:3000/users')
                .then(responce => {
                    return responce.json()
                })
                .then(users => {
                    //console.log(users)
                    payload = users
                    context.commit('setUsers', payload)
                })
            }
            catch(e) {
                console.log(e)
            }
        }
    },
    getters: {
        getUsers(state) {
            return state.users
        },
        getAuth(state) {
            return state.auth
        },
        getUser(state) {
            return state.user
        }
    }
}