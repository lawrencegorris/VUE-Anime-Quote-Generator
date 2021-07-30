<template>
    <h2>Quote: {{quote}}</h2>  
    <h2>Character: {{character}}</h2> 
    <h2>Anime: {{anime}}</h2>
</template>

<script>
export default {
    name: 'QuoteLayout',
    props: {
        quote: String,
        character: String,
        anime: String
    }
}
</script>