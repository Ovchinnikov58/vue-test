export default {
    state: {
        comments: null
    },
    mutations: {
        setComments(state, payload) {
            state.comments = payload;
        }
    },
    actions: {
         fetchComments(context, payload) {
            try {
                const responce =  fetch('http://localhost:3000/comments')
                .then(responce => {
                    return responce.json()
                })
                .then(comments => {
                    //console.log(comments)
                    payload = comments
                    context.commit('setComments', payload)
                })
            }
            catch(e) {
                console.log(e)
            }
        }
    },
    getters: {
        getComments(state) {
            return state.comments
        }
    }
}