<template>
    <section class="newsSection infoSection">
        <div class="container-fluid">
            <div class="wrap">
                <h2 class="infoSection__title h1">Новости</h2>
                <div class="row">
                    <single-article 
						v-for="article in articles" 
						:key="article.id" 
						:articleImg="require(`@/assets/img/${article.img}`)" 
						:articleDate="article.date" 
						:articleTitle="article.title"
					></single-article>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
import singleArticle from '../common/single-article';

export default {
    name: 'newsSection',
    components: {
		singleArticle,
    },
    data: () => ({
        articles: [{
                id: 1,
                title: 'Балтик Шиппинг приняла участие в 27-ой Международной выставке продуктов питания',
                img: 'article.png',
                date: '12.07.2019',
            },
            {
                id: 2,
                title: 'Балтик Шиппинг приняла участие в 27-ой Международной выставке продуктов питания',
                img: 'article.png',
                date: '12.07.2019',
            },
            {
                id: 3,
                title: 'Балтик Шиппинг приняла участие в 27-ой Международной выставке продуктов питания',
                img: 'article.png',
                date: '12.07.2019',
            },
            {
                id: 4,
                title: 'Балтик Шиппинг приняла участие в 27-ой Международной выставке продуктов питания',
                img: 'article.png',
                date: '12.07.2019',
            }
        ]
    })
}
</script>

<style lang="less">
@import '../../less/variables.less';


</style>
