<template>  
    <div class="article">
        <h1 class="title">Article</h1>
        <p class="article-text">{{article}}</p>

        <div>
            <h2 class="title">Comments</h2>
            <ul>
                <li v-for="item in getComments" :key="item.id" class="comment">
                    <span class="comment_label">Name:</span> {{item.name}} <span class="comment_label">comment:</span> {{item.text}} <span class="comment_label">time: {{item.date}}</span>
                </li>
            </ul>
        </div>
        <div class="add-comment" v-if="auth">
            <textarea name="" id="" cols="40" rows="5" v-model="text"></textarea>
            <button  class="button" @click="addComment">Add comment</button>
        </div>
        
    </div>
</template>

<script>
    export default {
        data () {
            return {
                text: ''
            }
        },
        methods: {
            update() {
                this.$store.dispatch('fetchArticle')
                this.$store.dispatch('fetchComments')
            },
            addComment() {
                //console.log(this.text)

                const date = `${new Date().getDate()}.${new Date().getMonth()+1}.${new Date().getFullYear()}`

                const comment = {
                    text: this.text,
                    name: this.$store.getters.getUser,
                    date: date
                }
                    if (this.text !== '') {
                    //console.log(comment)
                    try {
                        this.$http.post('http://localhost:3000/comments', comment)
                        .then(responce => {
                            return responce.json()
                        })
                        .then(newCom => {
                            //console.log(newCom)
                            this.text= ""
                            this.$store.dispatch('fetchComments')
                        })
                    }
                    catch(e) {
                        console.log(e)
                    }
                }
            },
            // show() {
            //     console.log(this.getComments)
            // }
        },
        created() {
            this.update()
        },
        computed:{ 
            article(){return this.$store.getters.getArticle},
            auth(){return this.$store.getters.getAuth},
            getComments() {return this.$store.getters.getComments},
        },
    }
</script>

<style lang="scss" scoped>
    .article {
        text-align: center;
        height: 100%;
    }
    .add-comment {
        display: flex;
        flex-direction: column;
    }
    .title {
        margin-bottom: 20px;
        color: rgb(235, 235, 79);
    }
    textarea {
        margin: 20px 0;
        padding: 10px;
    }
    .article-text {
        width: 400px;
        text-align: justify;
        margin-bottom: 20px;
        border: 1px solid #fff;
        padding: 10px;
        font-size: 15px;
    }
    .comment{
        border: 1px solid #fff;
        font-size: 14px;
        padding: 5px;
        margin-bottom: 10px;

    }
    .comment_label {
        color: rgb(235, 235, 79);
    }
</style>