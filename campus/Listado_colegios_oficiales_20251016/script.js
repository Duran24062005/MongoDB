document.addEventListener('DOMContentLoaded', async () => {
    async function getDIANData() {
        try {
            const url = 'https://www.datos.gov.co/resource/48xt-tjyj.json';
            const res = await fetch(url);
            return await res.json();
            
        } catch (error) {
            console.error('Error inesperado: ', error)
        }

    };

    let data = await getDIANData();

    console.log(data);
});