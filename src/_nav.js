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
      icon: '',
      children: [
        {
          title: true,
          name: 'Products',
          wrapper: {
            // optional wrapper object
            element: '', // required valid HTML5 element tag
            attributes: {} // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
          },
          class: '' // optional class names space delimited list for title item ex: "text-center"
        },
        {
          name: 'County System',
          url: '/product',
          icon: 'icon-task',
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
              url: '/income-streams',
              icon: 'icon-puzzle'
            },
            {
              name: 'Land Rates',
              url: '/income-streams',
              icon: 'icon-puzzle'
            },
            {
              name: 'Transactions',
              url: '/income-streams',
              icon: 'icon-puzzle'
            }
          ]
        }
      ]
    },
    {
      name: 'Legal',
      url: '/#',
      icon: 'icon-puzzle'
    },
    {
      name: 'Human Resource',
      url: '/#',
      icon: 'icon-puzzle'
    },
    {
      name: 'Finance',
      url: '/#',
      icon: 'icon-puzzle'
    }
  ]
};
