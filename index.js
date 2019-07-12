const { elementType, getProp, getPropValue } = require('jsx-ast-utils');

module.exports = {
    rules: {
        'data-type-required': {
            create: context => ({
                JSXOpeningElement: node => {
                    const [options = {}] = context.options;
                    const elements = ['Drawer'].concat(options.additionalElements || []);
                    const nodeType = elementType(node);

                    if (!elements.includes(nodeType)) {
                        return;
                    }

                    const prop = getProp(node.attributes, 'data-type');
                    const propValue = getPropValue(prop);

                    if (!prop || !propValue || typeof propValue !== 'string') {
                        context.report({
                            node,
                            message: `<${nodeType}> components must have a valid "data-type" attribute`,
                        });
                    }
                },
            }),
        },
    },
};
