var app = new Vue({
    el: '#app',
    data: {
        list: [
            {
                id: 1,
                name: 'iPhone X',
                price: 8999,
                count: 1,
                selected: false
            },
            {
                id: 2,
                name: 'Lumix 100M2',
                price: 5999,
                count: 1,
                selected: false
            },
            {
                id: 3,
                name: 'Macbook Pro',
                price: 21488,
                count: 1,
                selected: false
            }
        ]
    },
    computed: {
        totalPrice: function(){
            var total = 0;
            for (var i = 0, len = this.list.length; i < len; i++){
                var item = this.list[i];
                if (item.selected === true){
                    total += item.price * item.count;
                }
            }
            return total.toString().replace(/\B(?=(\d{3})+$)/g, ',');
        }
    },
    methods: {
        handleReduce: function(index){
            if (this.list[index].count === 1)return;
            this.list[index].count--;
        },
        handleAdd: function(index){
            this.list[index].count++;
        },
        handleRemove: function(index){
            this.list.splice(index, 1);
        },
        handleSelected: function(index){
            if (this.list[index].selected === false){
                this.list[index].selected = true;
            }
            else{
                this.list[index].selected = false;
            }
        },
        selectAll: function(){
                for (var i = 0, len = this.list.length; i < len; i++){
                    this.list[i].selected = true;
                }
        }
    }
});