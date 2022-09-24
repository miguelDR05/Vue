const app = new Vue({
    el : '#app',
    data : {
        title: 'Hola mundo con computed',
        cantidad : 0
    },
    computed : {
        invertir(){
            return this.title.split('').reverse().join('');
        },
        color(){
            return{
                'bg-success' : this.cantidad <= 10,
                'bg-warning' : this.cantidad > 10 && this.cantidad <= 30,
                'bg-danger' : this.cantidad >= 30 && this.cantidad <=100 ,
            }
        }
    }
})