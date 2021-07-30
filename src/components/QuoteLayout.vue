<template>  
    <p class="text-yellow-300 font-medium text-xl p-5 sm:px-40 sm:mt-20 lg:mt-32">{{quote}} <br><br> - {{character}}, <span class="italic">{{anime}}</span></p>
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