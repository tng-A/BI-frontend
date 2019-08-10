export default {
  items: [
    {
      name: 'Analytics',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'ADMIN',
      },
    },
    {
      title: true,
      name: 'Products',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'County Goverment',
      url: '/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Parking',
          url: '/base/breadcrumbs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Land Rates',
          url: '/base/cards',
          icon: 'icon-puzzle',
        },
        {
          name: 'Transactions',
          url: '/base/carousels',
          icon: 'icon-puzzle',
        },
        {
          name: 'Collapses',
          url: '/base/collapses',
          icon: 'icon-puzzle',
        },
      ],
    },
   
  ],
};
