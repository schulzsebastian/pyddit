var vm = new Vue({
    el: "#app",
    data: {
        type: '',
        subreddit: []
    },
    methods: {
        getData: function(){
            var self = this
            this.$http.get("https://www.reddit.com/r/"+self.type+"/top.json?limit=10")
            .then(function(resp){
                this.subreddit = resp.data.data.children
            })
        }
    }
})
