module.exports = {
    rules: {
        'data-type-required': {
            create: context => {
                const [options = {}] = context.options;
                const elements = ['Drawer'].concat(options.additionalElements || []);

                return {
                    JSXOpeningElement: node => {
                        if (!elements.includes(node.name.name)) {
                            return;
                        }

                        const [dataTypeAttribute] = node.attributes.filter(attr => attr.name && attr.name.name === 'data-type');

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
