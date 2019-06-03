// JavaScript source code
new Vue({
	el:'#app',
	data:{
		playerlife:100,
		monsterlife:100,
		running: false
	},
	computed:{
		hasResult(){
			return this.playerlife == 0 || this.monsterlife == 0;
		}
	},
	methods:{
		startGame(){
			this.running = true;
			this.monsterlife = 100; this.playerlife = 100;
		},
		attack(especial){
			this.hurt('playerlife',7,12,false);
			this.hurt('monsterlife',5,10,especial);
		},
		hurt(prop, min, max, especial){
			const plus = especial ?  5 : 0;
			const hurt = this.getRandom(min+plus,max+plus);
			this[prop] = Math.max(this[prop] - hurt,0);
		},
		getRandom(min, max){
			const value = Math.random() * (max - min) + min;
			return Math.round(value);
		}
	},
	watch:{
		hasResult(value){
			console.log(value);
			this.running = false;
		},
		playerlife(value){
			console.log(value);
		}
	}
})