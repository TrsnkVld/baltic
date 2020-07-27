<template>
        <b-row tag="ul" class="fleetList align-items-start">
            <b-col tag="li" cols="12" class="fleetList__item" v-for="item in listItems" :key="item.index">
                {{ item }}
            </b-col>
        </b-row>
</template>

<script>
    export default {
        name: 'fleetList',
		components: {},
		props: [
			"listItems"
		],
        data: () => ({ })
    }
</script>

<style lang="less">
@import '../../less/variables.less';

.fleetList {
    list-style: none;
    padding: 40px 0;
    margin-bottom: 0;
    color: @white;
    
    &__item {
        display: flex;
		margin-bottom: 20px;

        &::before {
            content: '—';
            margin-right: 15px;

            .up(@md; {
                margin-right: 25px;
            });
        }

        &:last-child {
            margin-bottom: 0;
        }
    }

    .up(@lg;{
        padding: 0 0 80px;
    });
}
</style>







