<template>  
    <p class="text-yellow-300 font-medium text-xl md:px-10 p-5">{{quote}} <br><br> - {{character}}, <span class="italic">{{anime}}</span></p>
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