        const img = document.getElementById( 'img' );
        const buttons = document.getElementById( 'buttons' );
        let colorIndex = 0;
        let intervalId = null;

        const trafficLight = ( event ) => {
            stopAutomatico();
            turnOn[event.target.id]();
        }
        
        const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

        const changeColor = () => {
            const colors = ['vermelho','amarelo','verde'];
            const color = colors[ colorIndex ];
            turnOn[color]();
            nextIndex();
        }

        const stopAutomatico = () => {
            clearInterval ( intervalId );
        }
        const turnOn = {
            'vermelho': () => img.src = './images/vermelho.png',
            'amarelo': () => img.src = './images/amarelo.png',
            'verde': () => img.src = './images/verde.png',
            'automatico': () => intervalId = setInterval( changeColor, 1000 )
        }

        buttons.addEventListener( 'click', trafficLight );    