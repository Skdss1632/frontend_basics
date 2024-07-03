fetch('thapa_technical_js_series/js_projects/autocomplete_app_js/states.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(states => {
        states.forEach(state => {
            console.log(`Name: ${state.name}`);
            console.log(`Abbreviation: ${state.abbr}`);
            console.log(`Capital: ${state.capital}`);
            console.log(`Latitude: ${state.lat}`);
            console.log(`Longitude: ${state.long}`);
            console.log('---------------------------');
        });
    })
    .catch(error => console.error('Error loading JSON:', error))
