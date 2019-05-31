new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
	computed: {
		resultado(){
			return this.valor != '37'? 'Diferente de 37': 'Igual a 37';
		}
	},
	watch: {
		resultado(antigo, novo){
			setTimeout(()=>{
				this.valor = 0 ;
			}, 5000)
		}
	}
});