const{ createApp } = Vue;

createApp({
        data(){
            return {
                display: "0",
                numeroAnterior: null,
                numeroAtual: null,
                operador: null            }
        },
    
    methods:{
        LidarBotão(botao){
            switch (botao)
            {
                case '*':
                case '/':
                case '-':
                case '+':
                    lidarOperador(botao);
                    break; 
                    
                case '.':
                    this.lidarDecimal()
                    break;
                
                case 'C':
                    this.lidarLimpar()
                    break;

                case '=':
                    this.lidarIgual()
                    break;

                default:
                    this.lidarNumero(botao);
            }
        },
        LidarOperador(valor){
            this.numeroAnterior = this.display;
            this.display = '0';
            this.operador = valor;
            console.log(valor)
            console.log(this.numeroAnterior);
            console.log(this.operador);
            
        },
        LidarDecimal(){
            if(!this.display.includes('.')) {
            this.display += ".";
            }
        },
        LidarLimpar(){
            this.display = '0';
            this.numeroAtual = null;
            this.numeroAnterior = null;
            this.operador = null;
        },
        lidarIgual(){
            this.numeroAtual = parseFloat(this.display);

            if (this.operador && this.numeroAnterior !== null){
                switch (this.operador){
                    case '+':
                        this.display = (parseFloat(this.numeroAnterior) + this.numeroAtual).toString();
                        break;
                    case '-':
                        this.display = (parseFloat(this.numeroAnterior) - this.numeroAtual).toString();
                        break;
                    case '*':
                        this.display = (parseFloat(this.numeroAnterior) * this.numeroAtual).toString();
                        break;
                    case '/':
                        if (this.numeroAtual !== 0){
                            this.display = (parseFloat(this.numeroAnterior) / this.numeroAtual).toString();
                        }else {this.display = "Error";}
                        break;
                    default:
                        this.display = "Error";
                        break;
                }
            }
        },
        LidarNumero(valor){
            if (this.display == '0'){
                this.display = valor.toString();
            } else{ 
                this.display += valor.toString();
            }
            
        }

    }
}).mount("#app");