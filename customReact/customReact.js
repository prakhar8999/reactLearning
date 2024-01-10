function customRender(container,element){
    const domElement = document.createElement(element.type);
    domElement.innerHTML = element.child;
    // domElement.setAttribute('href',element.props.href);
    // domElement.setAttribute('target',element.props.target);

    for (const prop in element.props) {
        console.log(prop)
        console.log(element.props[prop])
        domElement.setAttribute(prop, element.props[prop])
    }

    container.appendChild(domElement);
}

const reactElement = {
    type : 'a',
    props : {
        href : "https://www.google.co.in/",
        target : "_blank"
    },
    child : "Click Here To Visit Google"
}

const mainContainer = document.querySelector("#root")

customRender(mainContainer,reactElement)