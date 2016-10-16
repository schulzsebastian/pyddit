var vm = new Vue({
    el: "#app",
    data: {
        python: {
            title: 'Python',
            data: []
        },
        dailyProgrammer: {
            title: 'DailyProgrammer',
            data: []
        },
        learnPython: {
            title: 'LearnPython',
            data: []
        }
    },
    created: function(){
        this.$http.get("https://www.reddit.com/r/"+this.python.title+"/top.json?limit=5")
        .then(function(resp){
            this.python.data = (resp.data.data.children)
        })
        this.$http.get("https://www.reddit.com/r/"+this.dailyProgrammer.title+"/top.json?limit=5")
        .then(function(resp){
            this.dailyProgrammer.data = (resp.data.data.children)
        })
        this.$http.get("https://www.reddit.com/r/"+this.learnPython.title+"/top.json?limit=5")
        .then(function(resp){
            this.learnPython.data = (resp.data.data.children)
        })
    }
})
