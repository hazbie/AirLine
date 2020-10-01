const FLIGHTS_DATA = [ 
    {
        country: 'Canada',
        id: 1,
        routes: [
            {
                price: '590€',
                departure: '2020-02-20 (time: 17:10)',
                arrival: '2020-02-20 (time: 21:20)', 
                returnTime:'2020-03-01 (time: 17:10)',     
                id: 1,
                from: 'Canada',
                to: 'China',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],               
                company:'Adria'
            },
            {
                price: '500€',
                departure: '2020-02-27 (time: 18:10)',
                arrival: '2020-02-27 (time: 21:20)',
                returnTime:'2020-02-07 (time: 18:10)',        
                id: 2,
                from: 'Canada',
                to: 'England',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Advanced Air'   
            },
            {
                price: '480€',
                departure: '2020-02-20 (time: 18:10)',
                arrival: '2020-02-20 (time: 21:20)',
                returnTime:'2020-03-03 (time: 18:10)',         
                id: 3,
                from: 'Canada',
                to: 'Germany',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Aegean'
            },
            {
                price: '380€',
                departure: '2020-02-27 (time: 18:10)',
                arrival: '2020-02-27 (time: 21:20)',
                returnTime:'2020-03-07 (time: 18:10)',        
                id: 4,
                from: 'Canada',
                to:'Italy',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Air Canada'     
            },
            {
                price: '380€',
                departure: '2020-02-20 (time: 18:10)',
                arrival: '2020-02-20 (time: 21:20)',
                returnTime:'2020-03-01 (time: 18:10)',       
                id: 5,
                from: 'Canada',
                to: 'Portugal',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Air China'    
            }
        ]
    },


    {  
        country: 'China',
        id: 2,
        routes: [
            {
                price: '590€',
                departure: '2020-02-21 (time: 18:10)',
                arrival: '2020-02-21 (time: 21:20)',
                returnTime:'2020-03-01 (time: 18:10)',         
                id: 6,
                from: 'China',
                to:'Canada',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Air Europa'
            },
            {
                price: '390€',
                departure: '2020-02-28 (time: 18:10)',
                arrival: '2020-02-28 (time: 21:20)',
                returnTime:'2020-03-08 (time: 18:10)',       
                id: 7,
                from: 'China',
                to: 'England',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Lufthansa'     
            },
            {
                price: '290€',
                departure: '2020-02-21 (time: 18:10)',
                arrival: '2020-02-21 (time: 21:20)',
                returnTime:'2020-03-09 (time: 18:10)',      
                id: 8,
                from: 'China',
                to: 'Germany',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Olympic'  
            },
            {
                price: '290€',
                departure: '2020-02-28 (time: 18:10)',
                arrival: '2020-02-28 (time: 21:20)',
                returnTime:'2020-03-08 (time: 18:10)',        
                id: 9,
                from: 'China',
                to: 'Italy',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Skyjet Airlines'
            },
            {
                price: '490€',
                departure: '2020-02-21 (time: 18:10)',
                arrival: '2020-02-21 (time: 21:20)',
                returnTime:'2020-03-09 (time: 18:10)',        
                id: 10,
                from: 'China',
                to: 'Portugal',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'United'      
            }
        ]
    },


    {
        country: 'England',
        id: 3,
        routes: [
            {
                price: '500€',
                departure: '2020-02-22 (time: 18:10)',
                arrival: '2020-02-22 (time: 21:20)',
                returnTime:'2020-03-08 (time: 18:10)',        
                id: 11,
                from: 'England',
                to: 'Canada',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Adria'
            },
            {
                price: '390€',
                departure: '2020-02-29 (time: 18:10)',
                arrival: '2020-02-29 (time: 21:20)',
                returnTime:'2020-03-09 (time: 18:10)',        
                id: 12,
                from: 'England',
                to: 'China',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Advanced Air'
            },
            {
                price: '290€',
                departure: '2020-02-22 (time: 18:10)',
                arrival: '2020-02-22 (time: 21:20)',
                returnTime:'2020-03-08 (time: 18:10)',        
                id: 13,
                from: 'England',
                to: 'Germany',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Aegean' 
            },
            {
                price: '250€',
                departure: '2020-02-29 (time: 18:10)',
                arrival: '2020-02-29 (time: 21:20)',
                returnTime:'2020-03-09 (time: 18:10)',        
                id: 14,
                from: 'England',
                to: 'Italy',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Air Canada'
            },
            {
                price: '290€',
                departure: '2020-02-22 (time: 18:10)',
                arrival: '2020-02-22 (time: 21:20)',
                returnTime:'2020-03-08 (time: 18:10)',        
                id: 15,
                from: 'England',
                to: 'Portugal',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Air China'
            }
        ]
    },


    {
        country: 'Germany',
        id: 4,
        routes: [
            {
                price: '480€',
                departure: '2020-02-23 (time: 18:10)',
                arrival: '2020-02-23 (time: 21:20)',
                returnTime:'2020-03-07 (time: 18:10)',        
                id: 16,
                from: 'Germany',
                to: 'Canada',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Air Europa'
            },
            {
                price: '290€',
                departure: '2020-02-20 (time: 18:10)',
                arrival: '2020-02-20 (time: 21:20)',
                returnTime:'2020-03-01 (time: 18:10)',        
                id: 17,
                from: 'Germany',
                to: 'China',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Lufthansa'
            },
            {
                price: '290€',
                departure: '2020-02-23 (time: 18:10)',
                arrival: '2020-02-23 (time: 21:20)', 
                returnTime:'2020-03-07 (time: 18:10)',       
                id: 18,
                from: 'Germany',
                to: 'England',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Olympic'
            },
            {
                price: '250€',
                departure: '2020-03-01 (time: 18:10)',
                arrival: '2020-03-01 (time: 21:20)',
                returnTime:'2020-03-10 (time: 18:10)',        
                id: 19,
                from: 'Germany',
                to: 'Italy',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Skyjet Airlines'
            },
            {
                price: '290€',
                departure: '2020-02-23 (time: 18:10)',
                arrival: '2020-02-23 (time: 21:20)',
                returnTime:'2020-03-03 (time: 18:10)',        
                id: 20,
                from: 'Germany',
                to: 'Portugal',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'United'
            }
        ]
    },


    {
        country: 'Italy',
        id: 5,
        routes: [
            {
                price: '380€',
                departure: '2020-02-24 (time: 18:10)',
                arrival: '2020-02-24 (time: 21:20)',
                returnTime:'2020-03-14 (time: 18:10)',        
                id: 21,
                from: 'Italy',
                to: 'Canada',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Adria'                  
            },
            {
                price: '290€',
                departure: '2020-03-02 (time: 18:10)',
                arrival: '2020-03-02 (time: 21:20)',
                returnTime:'2020-03-12 (time: 18:10)',        
                id: 22,
                from: 'Italy',
                to: 'China',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Advanced Air'  
            },
            {
                price: '250€',
                departure: '2020-02-24 (time: 18:10)',
                arrival: '2020-02-24 (time: 21:20)',
                returnTime:'2020-03-04 (time: 18:10)',        
                id: 23,
                from: 'Italy',
                to: 'England',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Aegean'   
            },
            {
                price: '250€',
                departure: '2020-02-03 (time: 18:10)',
                arrival: '2020-02-03 (time: 21:20)',
                returnTime:'2020-03-13 (time: 18:10)',        
                id: 24,
                from: 'Italy',
                to: 'Germany',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Air Canada'  
            },
            {
                price: '290€',
                departure: '2020-02-24 (time: 18:10)',
                arrival: '2020-02-24 (time: 21:20)',
                returnTime:'2020-03-04 (time: 18:10)',        
                id: 25,
                from: 'Italy',
                to: 'Portugal',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Air China'
            }
        ]
    },


    {      
        country: 'Portugal',
        id: 6,
        routes: [
            {
                price: '380€ ',
                departure: '2020-02-14 (time: 18:10)',
                arrival: '2020-02-14 (time: 21:20)',
                returnTime:'2020-02-24 (time: 18:10)',        
                id: 26,
                from: 'Portugal',
                to: 'Canada',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Air Europa' 
            },
            {
                price: '490€',
                departure: '2020-02-24 (time: 18:10)',
                arrival: '2020-02-24 (time: 21:20)',
                returnTime:'2020-03-04 (time: 18:10)',        
                id: 27,
                from: 'Portugal',
                to: 'China',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Lufthansa'   
            },
            {
                price: '290€',
                departure: '2020-02-14 (time: 18:10)',
                arrival: '2020-02-14 (time: 21:20)',
                returnTime:'2020-02-24 (time: 18:10)',       
                id: 28,
                from: 'Portugal',
                to: 'England',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Olympic'    
            },
            {
                price: '290€',
                departure: '2020-02-21 (time: 18:10)',
                arrival: '2020-02-21 (time: 21:20)',
                returnTime:'2020-03-01 (time: 18:10)',        
                id: 29,
                from: 'Portugal',
                to: 'Germany',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Skyjet Airlines'
            },
            {
                price: '290€',
                departure: '2020-02-14 (time: 18:10)',
                arrival: '2020-02-14 (time: 21:20)',
                returnTime:'2020-02-24 (time: 18:10)',        
                id: 30,
                from: 'Portugal',
                to: 'Italy',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'United'
            }
        ]
    }
 ]
export default FLIGHTS_DATA;
