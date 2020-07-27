<template>
  <main class="article">
    <news-content></news-content>
    <background-image />
  </main>
</template>

<script>
    import backgroundImage from '@/components/common/background-image';
    import NewsContent from '@/components/news/news-content';

    export default {
        name: 'article-page',
        components: {
            backgroundImage,
            NewsContent
        },
        data: () => ({}),
    }
</script>
