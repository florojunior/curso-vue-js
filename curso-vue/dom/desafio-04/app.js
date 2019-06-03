new Vue({
	el: '#desafio',
	data: {
		classAltenando: 'destaque',
		classDinamica: '',
		aplicarClass3: 'true'
	},
	computed:{
		aplicarTrueFalse(){
			return this.aplicarClass3=='false';
		}
	},
	methods: {
		iniciarEfeito() {
			setInterval(()=>{
				this.classAltenando = this.classAltenando == 'destaque' ? 'encolher' : 'destaque'
			},1000)
		},
		iniciarProgresso() {

		}
	}
})
