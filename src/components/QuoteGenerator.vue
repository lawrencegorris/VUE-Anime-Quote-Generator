<template>
    <QuoteLayout :quote="quote" :character="character" :anime="anime"/>
    <button @click="fetchData()">Generate Quote</button>
</template>

<script>
import QuoteLayout from './QuoteLayout.vue'

export default {
    name: 'QuoteGenerator',
    components: {
        QuoteLayout
    },
    data(){
        return{
            anime: this.anime,
            character: this.character,
            quote: this.quote
        }
    },
    methods: {
        async fetchData(){
            const url = 'https://animechan.vercel.app/api/random';
            const response = await fetch(url);
            const randomQuote = await response.json();
            
            this.anime = randomQuote.anime
            this.character = randomQuote.character
            this.quote = randomQuote.quote
            console.log(this.anime + ': ' + this.quote + ' -' + this.character)
            return
        }
    }
}



</script>