<template>
<div class="form-feedback">
	<b-form-row tag="form" @submit="onSubmit" @reset="onReset" v-if="show">
		<b-col cols="12" xl="6">
			<b-row no-gutters>
				<b-col cols="12" md="6">
					<b-form-group 
					id="input-group-1" 
					label="Имя *" 
					label-for="input-1"
					description="Please enter something"
					>
						<b-form-input
						id="input-1"
						v-model="form.name"
						required
						></b-form-input>
					</b-form-group>
				</b-col>

				<b-col cols="12" md="6">
					<b-form-group 
					id="input-group-2"
					label="Фамилия *" 
					label-for="input-2"
					description="Please enter something"
					>
						<b-form-input
						id="input-2"
						v-model="form.surname"
						required
						></b-form-input>
					</b-form-group>
				</b-col>

				<b-col cols="12" md="6">
					<b-form-group 
					id="input-group-3" 
					label="Компания" 
					label-for="input-3"
					description="Please enter something"
					>
						<b-form-input
						id="input-3"
						v-model="form.company"
						></b-form-input>
					</b-form-group>
				</b-col>

				<b-col cols="12" md="6">
					<b-form-group
					id="input-group-4"
					label="Адрес электронной почты *"
					label-for="input-4"
					description="Please enter something"
					>
						<b-form-input
						id="input-1"
						v-model="form.email"
						type="email"
						required
						></b-form-input>
					</b-form-group>
				</b-col>
			</b-row>
		</b-col>

		<b-col cols="12" xl="6">
			<b-form-group 
			id="input-group-5" 
			label="Ваш вопрос *" 
			label-for="input-5"
			description="Please enter something"
			>
				<b-form-textarea
				id="input-5"
				v-model="form.text"
				required
				></b-form-textarea>
			</b-form-group>

			<b-form-group class="form-btn">
				<p>Нажимая “Отправить”, Вы соглашаетесь с <a href="#!">политикой обработки персональных данных</a></p>
				<b-button type="submit" variant="primary">Отправить</b-button>
			</b-form-group>
		</b-col>
    </b-form-row>
</div>
</template>

<script>
export default {
	name: 'form-feedback',
	data: () => ({
        form: {
			name: '',
			surname: '',
			company: '',
			email: '',
			text: ''
        },
        show: true
	}),
    methods: {
		onSubmit(evt) {
			evt.preventDefault()
			alert(JSON.stringify(this.form))
		},
		onReset(evt) {
			evt.preventDefault()
			// Reset our form values
			this.form.email = ''
			this.form.name = ''
			this.form.food = null
			this.form.checked = []
			// Trick to reset/clear native browser form validation state
			this.show = false
			this.$nextTick(() => {
				this.show = true
			})
		}
    }
}
</script>

<style lang="less">
@import '../../less/variables.less';

.form-feedback {
	background-color: @white;
	padding: 40px 20px;
	margin-bottom: 20px;

	.form-row {
		margin: 0 -10px;

		& > [class*="col-"] {
			padding: 0;
		}

		.up(@xl; {
			margin: 0 -25px;
		});
	}

	.up(@md;{
		padding: 40px 60px;
		margin-bottom: 40px;
	});

	.up(@lg;{
		padding: 60px 70px;
		margin-bottom: 80px;
	});

}

.form-group { 
	font-size: 13px;
	line-height: 16px;
	font-weight: 300;
	padding: 0 10px;
	margin-bottom: 20px;

	p {
		text-align: center;
		font-size: 11px;
		line-height: 13px;
		color: #ADB5BD;
	}

    .up(@lg;{
        font-size: 16px;
		line-height: 20px;
    });

	.up(@xl; {
		padding: 0 25px;
	});
}

.form-control {
	font-size: 15px;
	line-height: 20px;
	font-weight: 300;
	padding: 15px 10px;
	height: auto;
	background-color: @softblue;
	border-radius: 0;
	border: none;

	&:focus {
		box-shadow: none;
		background-color: @softblue;
	}

    .up(@lg;{
        font-size: 20px;
		line-height: 25px;
		padding: 13px 10px;
    });
}

.form-text {
	color: #ADB5BD !important;
}

.form-btn {
	margin-bottom: 0;

	& > div {
		display: flex;
		align-items: center;
		justify-content: space-between;
    	flex-flow: column;

		p {
			margin-bottom: 30px;

			a {
				text-decoration: underline;
			}

			.up(@xl;{
				margin-bottom: 0;
			});
		}

		.btn {
			margin: 0 auto;
			
			.up(@xl;{
				margin: 0 0 0 20px;
			});
		}

		.up(@xl;{
			flex-flow: row;
		})
	}

	.up(@xl;{
		padding-top: 6px;
	});
}

textarea {
	&.form-control {
		resize: none;
		height: 175px;
	}
}
</style>