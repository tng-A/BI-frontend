export default {
  items: [
    {
      name: 'WEBTRIBE',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'ADMIN'
      }
    },
    
    {
      name: 'VALUE CENTERS',
      icon: 'icon-home',
      url: '/pages', 
      class:"nav-title",
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {          
        } ,       // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },  
      children: [
        {
          name: 'Entreprise Integration',
          url: '/enterprise',
          wrapper: {            // optional wrapper object
            element: 'div',        // required valid HTML5 element tag
            attributes: { 
              className:'gov'         
            } ,       // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
          }, 
        },
      ],
    },
    {
      name: 'DEPARTMENTS',
      url: '/pages', 
      icon: 'icon-briefcase',
      class:"nav-title",  
      children: [
        {
          name: 'Goverment Business',
          url: '/goverment-business',
        },
      ],
    },
    {
      name: 'PRODUCTS',
      class:"nav-title", 
      icon: 'icon-bag',  
      children: [
        {
          name: 'County System',
          url: '/product',
        },

      ],
    },
    {
      name: 'REVENUE TYPES',
      url: '/pages',  
      class:"nav-title", 
      icon: 'cui-credit-card',
      children: [
        {
          name: 'County',
          url: '/county',
        },
      ],
    },
    {
      name: 'REVENUE STREAMS',
      url: '/pages',
      icon: 'icon-graph',  
      class:"nav-title",   
      children: [
        {
          name: 'Embu',
          url: '/login',
        }
      ],
    },
    {
      name: 'INCOME STREAMS',
      url: '/income-stream', 
      icon: 'icon-graph',  
      class:"nav-title",  
      children: [
        {
          name: 'Parking',
          url: '/income-stream',
        }
      ],
    },
  ]
};
