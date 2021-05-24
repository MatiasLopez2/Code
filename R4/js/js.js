
const api = new XMLHttpRequest();
api.open('GET', 'http://api.weatherstack.com/current?access_key=2d0c4cfa479b47d80ea2a4ce52cbce21&query=Argentina', true);
api.send();

api.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){
        let datos = JSON.parse(this.responseText);

        let pais = document.querySelector('#pais');
        pais.innerHTML = '';
        pais.innerHTML += datos.location.country;

        let provincia = document.querySelector('#provincia');
        provincia.innerHTML = '';
        provincia.innerHTML += datos.location.name;

        let hora = document.querySelector('#hora');
        hora.innerHTML = '';
        hora.innerHTML += datos.location.localtime;

        let temperatura = document.querySelector('#temp');
        temperatura.innerHTML = '';
        temperatura.innerHTML += datos.current.temperature;

        let humedad = document.querySelector('#humedad');
        humedad.innerHTML = '';
        humedad.innerHTML += datos.current.humidity;

        let visibilidad = document.querySelector('#visibilidad');
        visibilidad.innerHTML = '';
        visibilidad.innerHTML += datos.current.visibility;
    }
}



const api2 = new XMLHttpRequest();
api2.open('GET', 'http://api.weatherstack.com/current?access_key=2d0c4cfa479b47d80ea2a4ce52cbce21&query=Uruguay', true);
api2.send();

api2.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){
        let datos = JSON.parse(this.responseText);

        let pais1 = document.querySelector('#pais1');
        pais1.innerHTML = '';
        pais1.innerHTML += datos.location.country;

        let provincia1 = document.querySelector('#provincia1');
        provincia1.innerHTML = '';
        provincia1.innerHTML += datos.location.name;

        let hora1 = document.querySelector('#hora1');
        hora1.innerHTML = '';
        hora1.innerHTML += datos.location.localtime;

        let temperatura1 = document.querySelector('#temp1');
        temperatura1.innerHTML = '';
        temperatura1.innerHTML += datos.current.temperature;

        let humedad1 = document.querySelector('#humedad1');
        humedad1.innerHTML = '';
        humedad1.innerHTML += datos.current.humidity;

        let visibilidad1 = document.querySelector('#visibilidad1');
        visibilidad1.innerHTML = '';
        visibilidad1.innerHTML += datos.current.visibility;
    }
}

