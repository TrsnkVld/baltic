<template>
<section class="servicesSection">
    <div class="container-fluid">
        <div class="wrap">
			<b-row tag="ul" class="servicesList">
				<single-service 
					v-for="item in services" 
					:key="item.id" 
					:serviceTitle="item.title" 
					:serviceDesc="item.description" 
					:serviceIcon="item.icon"
				></single-service>
			</b-row>
        </div>
    </div>

</section>
</template>

<script>
import singleService from '../common/single-service';

export default {
    name: 'ourServicesSection',
    components: {
        singleService,
    },
    data: () => ({
        services: [
			{
                id: 1,
                title: 'Поиск подходящего судна',
                description: 'Мы знаем, какие суда необходимы для наших клиентов с учетом всех их потребностей, и нас хорошо знают судовладельцы, которые могут предоставить эти суда. Мы уверены в том, что сможем найти оптимальное решение.',
                icon: 'icon-shipColoured',
            },
            {
                id: 2,
                title: 'Подготовка договора морской перевозки',
                description: 'Мы обладаем глубокими знаниями, основанными на многолетнем опыте наших сотрудников, в области фрахтования судов и перевозки грузов. Мы нацелены на то, чтобы риски наших клиентов были минимальны, а их бизнес процветал.',
                icon: 'icon-blankColoured',
            },
            {
                id: 3,
                title: 'Проверка расчетов демереджа и диспача',
                description: 'С появлением линейного судоходства и контейнеризации профессиональное сообщество, обладающее знаниями в вопросах расчета сталийного времени, постепенно сокращается. Мы – те, кто бережно хранит эти знания и разбирается в этом.',
                icon: 'icon-magnifier',
            },
            {
                id: 4,
                title: 'Юридическая помощь при решении спорных вопросов',
                description: 'Полностью избежать возникновения спорных ситуаций в морских перевозках невозможно. Стихия, многообразие культур, обычаев, юрисдикций при заключении торговых сделок и договоров перевозки, политические и экономические изменения могут поставить непростые вопросы перед нами. Мы готовы к этим вызовам и постоянно совершенствуем наш многолетний опыт в поиске решений самых непростых спорных вопросов.',
                icon: 'icon-gavel',
            },
            {
                id: 5,
                title: 'Обеспечение клиентов оперативными данными',
                description: 'Мы знаем, как важна информация для принятия управленческих решений в современном мире. Мы уделяем особое внимание тому, чтобы наши клиенты непрерывно получали полную и достоверную информацию.',
                icon: 'icon-headphones',
            },
        ]
    })
}
</script>

<style lang="less" >//scoped
@import '../../less/variables.less';

.servicesSection {
	margin-bottom: 20px;

    .wrap {
		padding: 30px 20px 15px;
		background: @white;

		.up(@md;{
			padding: 30px 15px;
		});

		.up(@lg;{
			padding: 55px 35px 10px;
		});
	}
	
	.up(@md;{
		margin-bottom: 40px;
	});
	
	.up(@lg;{
		margin-bottom: 80px;
	});
}

.servicesList {
	//margin: 0 -20px;
	
	.up(@md;{
		//margin: 0 -60px;
	});
	
	.up(@lg;{
		margin: 0;
	});
	
}
</style>
