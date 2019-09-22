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
    const dropDownItems = items.map(dropdownItem => {
      // show if item.onlyVisibleTo || if item.onlyVisibleTo and it includes the current users role
      const showItem = this.isLinkVisible(dropdownItem, userRole);
      return showItem ? dropdownItem : null;
    });
    return dropDownItems;
  };

  static generateNavbarobject = (valueCenters, role) => {
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
          { name: 'Boys CLUB', url: 'product/1', onlyVisibleTo: ['FINANCE'] },
          { name: 'Andela CLUB', url: 'product/1', onlyVisibleTo: ['FINANCE'] }
        ]
      }
    ];
    let centerNames = '';
    let centerIds;
    let valueCenterschildren = [];
    // console.log(valueCenters, 'what is here');

    if (valueCenters.length !== 0) {
      valueCenters.forEach(center => {
        centerNames = center.name;
        centerIds = center.id;
        valueCenterschildren.push({
          name: centerNames,
          url: `product/${centerIds}`,
          onlyVisibleTo: ['ADMIN']
        });
        const valueCenterItem = items.find(
          item => item.name === 'Value Centers'
        );

        const dropdownItems = this.generateDropdownContents(
          valueCenterschildren,
          role
        );
        if (!dropdownItems.includes(null)) {
          valueCenterItem.children = dropdownItems;
        }
      });
    }
    return { items: items };
  };
}

export default NavbarGenerator;

