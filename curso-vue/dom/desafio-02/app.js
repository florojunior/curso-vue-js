new Vue({
    el: '#desafio',
    data: {
        valor: ''
    }, 
	methods: {
		alerta(){
			alert('Alertar');
		},
		escreverTecla(event){
			this.valor = event.target.value;
		}
	}
})