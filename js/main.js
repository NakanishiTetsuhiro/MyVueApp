{
    'use strict'

    // two way data binding (to UI)

    var vm = new Vue({
        el: '#app',
        data: {
            newItem: '',
            todos: [
                'task1',
                'task2',
                'task3'
            ]
        },
        methods: {
            // // formでsubmitするのをpreventDefault()で抑制できるぜ！
            // addItem: function(e) {
            //     e.preventDefault();
            //     this.todos.push(this.newItem)
            // けど、htmlの方で@submit.preventってしたら上のコードと同じ意味になる
            addItem: function() {
                this.todos.push(this.newItem)
            }
        }
    })
}