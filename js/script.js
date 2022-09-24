const app = new Vue({
    el : '#app',
    data : {
        titulo : 'Programando en Vue',
        frutas : [
            {nombre: 'Pera', cantidad: 10},
            {nombre: 'Manzana', cantidad: 0},
            {nombre: 'Cereza', cantidad: 6},
            {nombre: 'Zanahoria', cantidad: 5}
        ],
        newFruta : '',
        totalFrutas : 0
    },
    methods: {
        // con this podemos acceder a cualuqir propiedad de nuestra instancia -> de tal manera que no nos genere problemas
        guardarFruta(){
            console.log('diste click')
            this.frutas.push({
                nombre: this.newFruta, cantidad: 0,
            });
            this.newFruta = '';
        }
    },
    computed: {
        sumarFrutas(){
            this.totalFrutas = 0;
            for( fruta of this.frutas){
                this.totalFrutas = this.totalFrutas + fruta.cantidad;
            }
            return this.totalFrutas;
        }
    }
})