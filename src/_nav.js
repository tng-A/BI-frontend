export default {
  items: [
    {
      name: 'Value Center',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'ADMIN'
      }
    },
    {
      title: true,
      name: 'Departments',
      wrapper: {
        // optional wrapper object
        element: '', // required valid HTML5 element tag
        attributes: {} // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: '' // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Business',
      url: '/base/breadcrumbs',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Products',
          url: '/product',
          icon: 'icon-puzzle',
          children: [
            {
              name: 'Product Perfomance',
              url: '/product',
              icon: 'icon-puzzle'
            },
            {
              title: true,
              name: 'Income Streams',
              wrapper: {
                element: '',
                attributes: {}
              },
              class: ''
            },

            {
              name: 'Parking',
              url: '/base/breadcrumbs',
              icon: 'icon-puzzle'
            },
            {
              name: 'Land Rates',
              url: '/base/cards',
              icon: 'icon-puzzle'
            },
            {
              name: 'Transactions',
              url: '/base/carousels',
              icon: 'icon-puzzle'
            },
            {
              name: 'Collapses',
              url: '/base/collapses',
              icon: 'icon-puzzle'
            }
          ]
        }
      ]
    },
    {
      name: 'Legal',
      url: '/base/breadcrumbs',
      icon: 'icon-puzzle'
    },
    {
      name: 'Human Resource',
      url: '/base/breadcrumbs',
      icon: 'icon-puzzle'
    },
    {
      name: 'Finance',
      url: '/base/breadcrumbs',
      icon: 'icon-puzzle'
    }
  ]
};
