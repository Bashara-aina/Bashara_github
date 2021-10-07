import "https://unpkg.com/vue@next"


const app = Vue.createApp({
    data(){
        return{
            suhu1: 0,
            suhu2: 0,
            option1: '',
            option2: ''
        }
    },
    watch: {
        option1(value){
            if (value === 'Celcius'){
                if(this.option2 === 'Celcius'){
                this.suhu2 = this.suhu1;
            }
            

                if (value === 'Fahrenheit'){
                    var result = (this.suhu1 * 9/5) + 32;
                    thus.suhu2 = result
                }

                if (value === "Kelvin"){
                    var result = this.suhu1 + 273.15;
                    this.suhu2 = result;
                }
            }
            
            if (value === 'Fahrenheit'){
                if (value === 'Celcius'){
                    var result = (this.suhu1 - 32) *5/9;
                    thus.suhu2 = result
                    }

                if (value === 'Fahrenheit'){
                    this.suhu2 = this.suhu1;
                }

                if (value === "Kelvin"){
                    var result = ((this.suhu1 - 32) * 5/9) + 273.15 ;
                    this.suhu2 = result;
                }
            }

            if (value === 'Kelvin'){
                if (value === 'Celcius'){
                    var result = (this.suhu1 - 32) *5/9;
                    thus.suhu2 = result
                }

                if (value === 'Fahrenheit'){
                    this.suhu2 = this.suhu1;
                }

                if (value === "Kelvin"){
                    this.suhu2 = this.suhu1;
                }
            }

        },

        option2(value){
            if (value === 'Celcius'){
                if(this.option2 === 'Celcius'){
                this.suhu2 = this.suhu1;
            }
            

                if (value === 'Fahrenheit'){
                    var result = (this.suhu1 * 9/5) + 32;
                    thus.suhu2 = result;
                }

                if (value === "Kelvin"){
                    var result = this.suhu1 + 273.15;
                    this.suhu2 = result;
                }
            }
            
            if (value === 'Fahrenheit'){
                if (value === 'Celcius'){
                    var result = (this.suhu1 - 32) *5/9;
                    thus.suhu2 = result;
                    }

                if (value === 'Fahrenheit'){
                    this.suhu2 = this.suhu1;
                }

                if (value === "Kelvin"){
                    var result = ((this.suhu1 - 32) * 5/9) + 273.15 ;
                    this.suhu2 = result;
                }
            }

            if (value === 'Kelvin'){
                if (value === 'Celcius'){
                    var result = (this.suhu1 - 32) *5/9;
                    thus.suhu2 = result;
                }

                if (value === 'Fahrenheit'){
                    this.suhu2 = this.suhu1;
                }

                if (value === "Kelvin"){
                    this.suhu2 = this.suhu1;
                }
            }
        }
    }
})


