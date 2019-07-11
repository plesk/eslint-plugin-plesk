module.exports = {
    rules: {
        'data-type-required': {
            create: context => {
                const requiredNames = ['Drawer', 'Dialog', 'Popover'];

                return {
                    JSXOpeningElement: node => {
                        if (!requiredNames.includes(node.name.name)) {
                            return;
                        }

                        const [dataTypeAttribute] = node.attributes.filter(attr => attr.name.name === 'data-type');

                        if (!dataTypeAttribute) {
                            context.report({
                                node,
                                message: 'Expect data-type attribute for this element',
                            });
                        }
                    },
                };
            },
        },
    },
};
