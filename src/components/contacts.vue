<template>
<main class="contacts">
	<header-title  :headerTitle="pageData.title || headerTitle" />
	<b-container fluid>
		<img-txt-row
			v-for="item in normalizeData"
			:key="item.id"
			:rowText="item.text"
			:rowImages="item.img"
			data-aos="fade-left"
		/>
		<!--
		<form-feedback  />
		-->
	</b-container>
	<background-image />
</main>
</template>

<script>
import imgTxtRow from './common/img-txt-row';
import headerTitle from './common/header-title';
import formFeedback from './contacts/form-feedback';
import backgroundImage from './common/background-image';

export default {
	name: 'contacts',
	components: {
		imgTxtRow,
		formFeedback,
		headerTitle,
		backgroundImage
	},
	data: () => ({
		headerTitle: 'Контакты',
		textData: [
			{
				id: 1,
				title: 'Если у Вас есть вопрос или замечание, свяжитесь с нами по нижеуказанным координатам',
				img: [
					{
						id: 1,
						src: 'contacts.jpg'
					}
				],
				text: ['194044, Россия, Санкт-Петербург, Малый Сампсониевский проспект, 3а'],
				phone: '+7 812 740 57 57',
				mail: 'vasiliev@bs.ru'
			}
		]
	}),

	computed: {
		pageData() {
			if (!this.$store.getters.page || !this.$store.getters.page.Contacts) return null;
			return this.$store.getters.page.Contacts;
		},

		normalizeData() {
			if (!this.pageData) return this.textData;
			const {id, title, describe, img} = this.pageData;
			return [
				{
					id,
					title,
					text: [describe],
					img: [{
						id: 1,
						src: img
					}]
				}
			]
		}
	}
}
</script>

<style lang="less">
@import '../less/variables.less';

main {
	&.contacts .background-image {
		background-image: url('../assets/img/contacts_bg.jpg');
	}
	&.contacts {
		.textRow {
			&__content {
				/*
				p {
					margin-top: 35px;

					.up(@xl;{
						margin-bottom: 0;
					});
				}
				.contact-links {
					margin-top: 20px;

					p {
						margin-top: 0;
					}
				}
				*/
			}
		}
	}
}
</style>
