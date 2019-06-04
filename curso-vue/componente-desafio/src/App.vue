<template>
	<v-app>
		<v-navigation-drawer app>
			<v-toolbar flat>
				<v-list>
					<v-list-tile>
						<v-list-tile-title class="title">
							Menu
						</v-list-tile-title>
					</v-list-tile>
				</v-list>
			</v-toolbar>

			<v-divider></v-divider>

			<v-list dense class="pt-0">
				<v-list-tile v-for="item in itensMenu" :key="item.titulo">
					<v-list-tile-action>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title>{{ item.titulo }}</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
			</v-list>
		</v-navigation-drawer>
    <base-top-bar/>
    <base-content/>
    <base-foot-bar/>
	</v-app>
</template>

<script>

  import Topbar from './Topbar.vue';
  import Footbar from './FootBar.vue';
  import Content from './Content.vue';

  export default {
    components:{'base-top-bar': Topbar, 'base-foot-bar': Footbar, 'base-content': Content},
    data() {
      return {
        itensMenu: [
          {titulo: 'Início', icon: 'dashboard'},
          {titulo: 'Sobre', icon: 'question_answer'}
        ]
      }
    }
  }
</script>
