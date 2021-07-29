<template>
    <button @click="fetchData()">Generate Quote</button>
</template>

<script>
export default {
    name: 'QuoteGenerator',
    methods: {
        async fetchData(){
            const url = 'https://animechan.vercel.app/api/random';
            const response = await fetch(url);
            const randomQuote = await response.json();
            console.log(randomQuote);
        }
    }
}



</script>