export default {
    state: {
        article: null
    },
    mutations: {
        setArticle(state, payload) {
            state.article = payload;
        }
    },
    actions: {
         fetchArticle(context, payload) {
            try {
                const responce =  fetch('http://localhost:3000/article')
                .then(responce => {
                    return responce.json()
                })
                .then(article => {
                    //console.log(article[0].text)
                    payload = article[0].text
                    context.commit('setArticle', payload)
                })
            }
            catch(e) {
                console.log(e)
            }
        }
    },
    getters: {
        getArticle(state) {
            return state.article
        }
    }
}