<template>
    <GeneratorButton @click="fetchData()"/>
    <QuoteLayout class="align-text-middle" :quote="quote" :character="character" :anime="anime"/>
</template>

<script>
import QuoteLayout from './QuoteLayout.vue'
import GeneratorButton from './GeneratorButton.vue'

export default {
    name: 'QuoteGenerator',
    components: {
        QuoteLayout, GeneratorButton
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
            return
        }
    }
}



</script>