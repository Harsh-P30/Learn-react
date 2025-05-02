// const element = createElement(type, props, ...children)  -> syntax of create element in react.

// const h1 = React.createElement("h1").innerText="Hello Master we are learning react here using direct CDN"; -> it will work but not in proper manner


const h1 = React.createElement('h1',  // creating a single node "h1";
    {
        className: "heading",
        style: { color: "red" }
    },
    "Hello Master we are learning react here using direct CDN"
);

const element = React.createElement(
    React.Fragment,  // use for wrap up, it doesnot make any kind of div and boxex.
    null,

    React.createElement('h1',
        {
            className: "heading",
            style: { color: "red" }
        },
        "Hello Master we are learning react here using direct CDN"
    ),

    React.createElement('p',
        {
            className: 'paragraph',
            style: {
                textDeceloration: 'italic'
            }
        },
        "Hello baby"
    )
);

const elementsArray =[  // create multiple element into a single array
    React.createElement('h1',{},'click the button'),
    React.createElement('button',{},'click me'),
    React.createElement('button',{},'click')
];

const root = ReactDOM.createRoot(document.querySelector("body"));
root.render(h1);  // for render single element.
// root.render(element); // for render multiple this in once you have to wrap up into a single element or node. and here we use fragment{fragment just wrap up the multiple nodes into a single node}
// root.render(elementsArray); // for render multiple this in once you have to wrap up into a single element or node.and here we use a array 


