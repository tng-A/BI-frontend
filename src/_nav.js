import Products from './views/Products';

class NavbarGenerator {
  
  static isLinkVisible = (linkItem, userRole) => {
    const { onlyVisibleTo } = linkItem;
    let hasPermission;
    if (onlyVisibleTo) {
      hasPermission =
        userRole && userRole.some(role => onlyVisibleTo.includes(role));
    }
    const showItem = !onlyVisibleTo || hasPermission;

    return showItem;
  };

  static generateDropdownContents = (items, userRole) => {
    const dropDownItems = items.map((dropdownItem, index) => {
      // show if item.onlyVisibleTo || if item.onlyVisibleTo and it includes the current users role
      const showItem = this.isLinkVisible(dropdownItem, userRole);
      return showItem ? dropdownItem : null;
    });
    return dropDownItems.filter(item => item !== null);
  };

  static generateNavbarobject = (navbarData, role) => {
    let items = [
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
        name: 'Value Centers',
        icon: 'icon-puzzle',
        children: [
          ,
          { name: 'Andela CLUB', url: 'product/1', onlyVisibleTo: ['FINANCE'] }
        ]
      },
      {
        name: 'Products',
        icon: 'icon-puzzle',
        children: []
      },
      {
        name: 'Revenue Streams',
        icon: 'icon-puzzle',
        children: []
      }
    ];
    let centerNames = '';
    let centerIds;
    let valueCenterschildren = [];

    let productNames = '';
    let productIds;
    let productsChildren = [];

    let revenueNames = '';
    let revenueIds;
    let revenueChildren = [];

    if (navbarData.length !== 0) {
      navbarData.forEach(center => {
        centerNames = center.name;
        centerIds = center.id;
        valueCenterschildren.unshift({
          name: centerNames,
          url: `product/${centerIds}`,
          onlyVisibleTo: ['ADMIN']
        });
        const valueCenterItem = items.find(
          item => item.name === 'Value Centers'
        );

        const valueCentersDropdownItems = this.generateDropdownContents(
          valueCenterschildren,
          role
        );
        if (valueCentersDropdownItems.length !== 0) {
          valueCenterItem.children = valueCentersDropdownItems;
        }

        const products = center.product;

        products.forEach(product => {
          productNames = product.name;
          productIds = product.id;
          productsChildren.unshift({
            name: productNames,
            url: `revenue/${productIds}`,
            onlyVisibleTo: ['ADMIN']
          });
          const productItem = items.find(item => item.name === 'Products');
          const productDropdownItems = this.generateDropdownContents(
            productsChildren,
            role
          );
          if (productDropdownItems.length !== 0) {
            productItem.children = productDropdownItems;
          }
          const revenueStreams = product.revenue_stream;
          revenueStreams.forEach(stream => {
            revenueNames = stream.name;
            revenueIds = stream.id;
            revenueChildren.unshift({
              name: revenueNames,
              url: `income-streams/${revenueIds}`,
              onlyVisibleTo: ['ADMIN']
            });
            const revenueItem = items.find(
              item => item.name === 'Revenue Streams'
            );
            const revenueDropdownItems = this.generateDropdownContents(
              revenueChildren,
              role
            );
            if (revenueDropdownItems.length !== 0) {
              revenueItem.children = revenueDropdownItems;
            }
          });
        });
      });
    }

    const itemswithChildren = items.filter(item => item.children);
    const filteredItems = itemswithChildren.filter(
      item => item.children.length !== 0
    );

    filteredItems.unshift({
      name: 'WEBTRIBE',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'ADMIN'
      }
    });
   

    return { items: filteredItems };
  };
}

export default NavbarGenerator;
