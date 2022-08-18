<template>
    <section>
        <button @click.prevent="clickOut(keywordlist,SELECTOR1, URL1)" class="selektorbutton" id="artikel">Artikel</button>
        <button @click.prevent="clickOut(keywordlist,SELECTOR2, URL2)" class="selektorbutton" id="artikel_mobile">Artikel Mobile</button>
        <button @click.prevent="clickOut(keywordlist,SELECTOR3, URL3)" class="selektorbutton" id="beipack">Beipack</button>
        <button @click.prevent="clickOut(keywordlist,SELECTOR4, URL4)" class="selektorbutton" id="beipack_mobile">Beipack Mobile</button>
    </section>
</template>

<script>
    export default {
        emits: ['activate-button'],
        props: ['keywordlist'],
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
            clickOut(ndata,selector, url) {
                if (typeof ndata === 'undefined') {
                    alert('Please select a dataset first!')
                } else {
                    console.log(ndata,selector,url)
                        
                    let str = this.objToString(ndata);
                    let jsSelectorText = `
    var selector = ${selector};
    var date = new Date();
    var month = date.getMonth() + 1;
    var keywords = {\n\t${str}};
    var keywordFound = false;

    if (window.dm_ccc_kwl && window.dm_ccc_kwl.length) {
        for (var i = 0; i <= window.dm_ccc_kwl.length; i++) {
            if (keywords.hasOwnProperty(window.dm_ccc_kwl[i])) {
                console.log(keywords[window.dm_ccc_kwl[i]], month);
                console.log(keywords[window.dm_ccc_kwl[i]].indexOf(month));
                if (keywords[window.dm_ccc_kwl[i]].indexOf(month) > -1) {
                    console.log(keywords[window.dm_ccc_kwl[i]].indexOf(month)); 
                    keywordFound = true;
                    break;
                }
            }
        }
    }

    if (!keywordFound) {
        if (document.querySelector(selector)) {
            return document.querySelector(selector);
        }
        return false;
    }`;

                    this.copyToClipboard(jsSelectorText);

                    window.open(url, '_blank').focus();
                }
            },
            objToString(obj) {                                             //transforms data into a string
                let str = "";
      
                for (const [p, val] of Object.entries(obj)) {
                    str += `'${p}': [${val}],\n\t`;
                }

                return str;
            },
            copyToClipboard(text) {
                let copyFrom = document.createElement("textarea");
                copyFrom.textContent = text;
                document.body.appendChild(copyFrom);
                copyFrom.select();
                document.execCommand('copy');
                copyFrom.blur();
                document.body.removeChild(copyFrom);
            }
        }
    }
</script>