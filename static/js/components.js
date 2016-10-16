Vue.component('articles-card', {
    props: {
        data: Array,
        title: String
    },
    template: `
        <div class="col-md-4">
            <h3 v-text="title"></h3><br>
            <div class="card card-block" v-for="post in data">
                <p><span class="card-title" v-text="post.data.title"></span><br>
                <a class="card-link" :href="post.data.url" v-text="post.data.url.slice(0,50) + '...'"></a></p>
            </div>
        </div>
    `
})
