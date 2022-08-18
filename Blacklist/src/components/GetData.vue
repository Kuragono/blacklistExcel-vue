<template lang="">
    <div>
        <input type="file" name="input_file" id="dm_csvreader" accept=".csv" @change="getData">
    </div>
</template>

<script>
export default {
    emits: ['get-data'],
    methods: {
        getData(event) {
            if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
                console.log('The File APIs are not fully supported in this browser.');
                return;
            }

            if (!event.target.files) {
                console.log("This browser doesn't support the chosen file.");
            } else if (!event.target.files[0]) {
                console.log("No file selected.");
            } else {
                console.log('file read')
                let file = event.target.files[0];
                let reader = new FileReader();
                reader.onload = (event) => this.readData(reader.result);
                reader.readAsText(file);
            }
        },
        readData(ndata) {                                                 //reads the data
            let keywordsArray = ndata.split('\r\n');    //splits the data into more human readable data
            let tmpArray = [];                                      //creates a temporary array to work on
            for (let i = 1; i < keywordsArray.length; i++) {
                tmpArray.push(keywordsArray[i].split(";"));
            }
            globalThis.data = this.createObject(tmpArray);
            this.createTable(data);
        },
        createObject(data) {                                         //transforms data into an Object for better accessability
            let keyword = '';
            let keywordlist = {};
            for (let i = 0; i < data.length; i++) {
                let indexList = [];
            for (let j = 0; j < data[i].length; j++) {
                if (keyword != data[i][j]) {
                    keyword = data[i][j];
                    if (keyword != '') {
                        indexList.push(j+1);
                    }
                } else {
                    if (keyword != '') {
                        indexList.push(j+1);
                    }
                }
                keywordlist[keyword] = indexList;
                }
            }
            delete keywordlist[""];                                            //deletes the "" key/value pair
            return (keywordlist);
        },
        createTable(data) {
            let body = document.querySelector('body');
            let table = document.createElement('table');
            table.cellSpacing = 0;
            body.appendChild(table);
            let row = table.insertRow(-1);
            let keywordCell = row.insertCell(0); 
            let monthCell = row.insertCell(1);
            keywordCell.textContent = "Keyword";
            monthCell.textContent = "Monat";
            for (const [key, value] of Object.entries(data)) { 
                let row = table.insertRow(-1);
                let leftCell = row.insertCell(0); 
                let rightCell = row.insertCell(1);
                leftCell.textContent = key;
                rightCell.textContent = value;
            }
        }
    },
}
</script>