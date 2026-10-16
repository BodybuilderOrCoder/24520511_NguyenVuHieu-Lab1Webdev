export function createTextElement(text) {
    if (typeof text !== "string" && typeof text !== "number") {
        throw new TypeError("Text node must contain a string or number");
    }

    return {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: String(text),
            children: []
        }
    };
}

export function createElement(type, props, ...children) {
    if (typeof type !== "string" || !/^[a-z][a-z0-9-]*$/.test(type)) {
        throw new TypeError("Element type must be a valid HTML tag name");
    }

    if (
        props !== null &&
        (typeof props !== "object" || Array.isArray(props))
    ) {
        throw new TypeError("Element props must be an object or null");
    }

    const normalizedChildren = children
        .flat(Infinity)
        .filter(child =>
            child !== null &&
            child !== undefined &&
            typeof child !== "boolean"
        )
        .map(child => {
            if (typeof child === "string" || typeof child === "number") {
                return createTextElement(child);
            }

            if (
                child !== null &&
                typeof child === "object" &&
                typeof child.type === "string" &&
                child.props !== null &&
                typeof child.props === "object" &&
                Array.isArray(child.props.children)
            ) {
                return child;
            }

            throw new TypeError("Invalid child node");
        });

    return {
        type,
        props: {
            ...(props || {}),
            children: normalizedChildren
        }
    };
}