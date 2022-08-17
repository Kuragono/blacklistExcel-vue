<template>
    <section>
        <button @click.prevent="clickOut(SELECTOR1, URL1)" class="selektorbutton" id="artikel">Artikel</button>
        <button @click.prevent="clickOut(SELECTOR2, URL2)" class="selektorbutton" id="artikel_mobile">Artikel Mobile</button>
        <button @click.prevent="clickOut(SELECTOR3, URL3)" class="selektorbutton" id="beipack">Beipack</button>
        <button @click.prevent="clickOut(SELECTOR4, URL4)" class="selektorbutton" id="beipack_mobile">Beipack Mobile</button>
    </section>
</template>

<script>
    export default {
        emmits: ['activate-button'],
        data() {
            return {
                SELECTOR1: `#dm_conative_artikel`,
                URL1: 'https://cc.conative.de/#/adslots/1493/positioning/3155',
                SELECTOR2: `#dm_conative_artikel_mobile`,
                URL2: `https://cc.conative.de/#/adslots/1493/positioning/3156`,
                SELECTOR3: `#dm_conative_beipack`,
                URL3: 'https://cc.conative.de/#/adslots/1493/positioning/3157',
                SELECTOR4: `#dm_conative_beipack_mobile`,
                URL4: 'https://cc.conative.de/#/adslots/1493/positioning/3158'
            }
        },
        methods: {
            clickOut(selector, url) {
                console.log(selector,url)
                window.open(url, '_blank').focus();
            }
        },
    }
</script>

<style>

</style>