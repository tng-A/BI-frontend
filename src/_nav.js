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
          name: 'Merchant Business',
          url: '/login',
          wrapper: {            // optional wrapper object
            element: 'div',        // required valid HTML5 element tag
            attributes: { 
              className:'gov'         
            } ,       // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
          }, 
        },
        {
          name: 'Consumer Business',
          url: '/login',
          wrapper: {            // optional wrapper object
            element: 'div',        // required valid HTML5 element tag
            attributes: { 
              className:'gov'         
            } ,       // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
          }, 
        },
        {
          name: 'Entreprise Integration',
          url: '/login',
          wrapper: {            // optional wrapper object
            element: 'div',        // required valid HTML5 element tag
            attributes: { 
              className:'gov'         
            } ,       // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
          }, 
        },
        {
          name: 'Platform Business',
          url: '/login',
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
          name: 'Business',
          url: '/login',
        },
      ],
    },
    {
      name: 'PRODUCTS',
      class:"nav-title", 
      icon: 'icon-bag',  
      children: [
        {
          name: 'Agency Network',
          url: '/products',
        },
        {
          name: 'Trust Services',
          url: '/products',
        },
        {
          name: 'Auth Services',
          url: '/products',
        },
        {
          name: 'Supply Chain',
          url: '/products',
        },
        {
          name: 'Parastatals',
          url: '/products',
        },
        {
          name: 'E-commerce',
          url: '/products',
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
          url: '/login',
        },
        {
          name: 'Billable',
          url: '/login',
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
        },
        {
          name: 'Meru',
          url: '/login',
        },
        {
          name: 'KPLC',
          url: '/login',
        },
      ],
    },
    {
      name: 'INCOME STREAMS',
      url: '/pages', 
      icon: 'icon-graph',  
      class:"nav-title",  
      children: [
        {
          name: 'Parking',
          url: '/login',
        },
        {
          name: 'Cess',
          url: '/login',
        },
      ],
    },
  ]
};
