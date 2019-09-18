//
// React is the module where we access hooks, which allow
// us to manage "state".
//
// Remember that application state is simply a collection of
// data. When we design a component, we can create "state data"
// variables and/or objects. To create them, we use React.useState().
//
// See below for more information on React.useState().
//
// ReactDOM is our starting point for "rendering" the application.
// We call ReactDOM.render() with a reference to our component
// function (in JSX syntax - in angle brackets, like an HTML tag).
//
import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

//
// Note that when creating "function" components (as opposed to
// "class" components), the function name (which is used as the
// "component name") ** must be upper case! **
//
// The following function would NOT work as a component...
//
//    function myComponent() {
//      return (<div>mydivtext</div>);
//    }
//
// If you tried to use it in ReactDOM.render() like this:
//
//    ReactDOM.render(<myComponent/>, rootElement);
//
// ...nothing would render, and you would see the following
// warning in the console:
//
//    "Warning: <myComponent /> is using incorrect casing. Use
//     PascalCase for React components, or lowercase for HTML
//     elements."
//
// Component functions must be PascalCase - they must begin with an
// uppercase character.
//
function App() {
  //
  // Here we use "array destructuring" to get a state variable
  // and a setter method for setting the state variable's value.
  //
  // React.useState() returns an array with two objects:
  //
  //    [value, function]
  //
  // Try this:
  //
  //    console.log(React.useState());
  //
  // .useState() always returns the same thing, they are just assigned
  // to the variables we include in the array on the left side of the
  // equation... this is how array destructuring works.
  //
  // I think this article describes both array and object destructuring
  // well, including the motivation for them:
  //
  //    https://codeburst.io/es6-destructuring-the-complete-guide-7f842d08b98f
  //
  // Note that creating the state var and setter method MUST happen
  // within our Component Function in order for event handlers and
  // other logic code within the component to have access to them.
  //
  const [count, setCount] = React.useState(0);

  //
  // This is an example of an event handler method. In order for it
  // to have access to our state variable and setter method, this
  // event handler method must be declared/defined *inside* our
  // Component Function (where the state var and setter are declared)
  //
  // Event handlers that are set up by React in this way use the same
  // event object and prototype/methods that event listeners in the
  // DOM do. Methods like ".preventDefault()" and ".stopPropagation()"
  // are available.
  //
  // In this case, we just want to handle the Reset button click by
  // resetting the state variable value to 0 (using the setter method.)
  //
  const handleReset = e => {
    // e.preventDefault();
    setCount(0);
  };

  //
  // VERY IMPORTANT: Component Functions should return valid JSX.
  //
  // See https://reactjs.org/docs/introducing-jsx.html for an intro to JSX.
  // See https://reactjs.org/docs/jsx-in-depth.html for in-depth JSX.
  //
  // It's wise to enclose your JSX in parentheses to avoid problems with
  // Automatic Semicolon Insertion (see this article for more info:
  // http://www.bradoncode.com/blog/2015/08/26/javascript-semi-colon-insertion/)
  //
  // Note that JSX is *not* JavaScript. It can be included in the flow
  // of JavaScript syntax. But before it is delivered to a browser for
  // its JavaScript engine to execute, it must be converted into real
  // JavaScript. Babel is a common "transpiler" (an application that
  // converts code from one language to another... including from JSX
  // into JavaScript).
  //
  // When create-react-app is used to create a React application "shell",
  // Babel is included, along with a package called "react-scripts".
  // "react-scripts" can be used to run the React application, and
  // as part of the process for running it, react-scripts puts the
  // React source files (including JSX) through Babel to produce
  // pure JavaScript.
  //
  // See https://babeljs.io/en/repl for a Babel repl that you can play
  // with to see what JavaScript would come out if  you put the contents
  // of this file through it.
  //
  // Related to this is the fact that you can create React applications
  // without using JSX at all... JSX is just a convenient template
  // syntax for helping to visualize how the DOM should look when
  // application state changes.
  //
  // See https://reactjs.org/docs/react-without-jsx.html. As it says,
  // if you didn't want to mess with a transpiler like Babel, you can
  // use the React framework using pure JavaScript. It is, afterall,
  // a JavaScript library...
  //
  // Note also that the npm module "create-react-app" automatically
  // installs all of the dependencies to make Babel work, so it's very
  // convenient. But in production, you would need to have Babel (or
  // something similar) set up on your server to transpile your React/JSX
  // app into JavaScript before sending it to the browser/client.
  //
  // If you want to see what a fully transpiled/packaged React app looks
  // like before it is transferred to a browser, install create-react-app
  // on your machine, and use it to create a shell app. Then, simply
  // type "yarn build" or "npm run build" (if you don't have yarn
  // installed). The entire app will be transpiled and packaged into
  // a subdirectory called "build". Look at the *.js files found in
  // ./build/static/js.
  //
  // yarn/npm will run react-scripts, which will use Babel and another
  // package called "Webpack", to convert to JavaScript and "minify"
  // all of the JavaScript source files (including all dependencies)
  // for delivery to the client.
  //
  return (
    <div className="counter">
      <h3>React Counter</h3>

      <p className="click_desc">
        {`Your click count is `}
        <span>{count}</span>
      </p>

      <div className="button_container">
        {/* 
          Ponder this: Why do I have to do my comments this way in the JSX
          portion of my code?

          Regarding the onClick() event handler below... Because the JSX
          syntax is so much like regular HTML, the only way to manage
          event handlers is inline, like the onClick event handler on the
          button below.

          Try this: What would happen if you did this for the event 
          handler (just called setCount, instead of used a callback 
          method)?

              onClick={setCount(count+1)}

          (Look at the console...) Why is there an "infinite looooop?" 
          Hint: the answer is related to the fact that React re-renders
          the component every time the state data changes, and the fact
          that JavaScript expressions in {} is evaluated every time
          it is encountered. (FYI, JavaScript expressions in {} is
          referred to as "JavaScript Interpolation in JSX").         
        */}
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Add 1
        </button>
        <button
          onClick={() => {
            setCount(count * 5);
          }}
        >
          Multiply by 5
        </button>
        {/*
          This event handler references a function that has been
          declared above in this Component Function.
        */}
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

//
// in order to render our component, we need to have a place in the
// DOM for the actual HTML elements that our JSX produces to live.
//
// In this example, we query the DOM for a div with ID "root",
// and pass that DOM node to ReactDOM.render(), along with a reference
// to our component in JSX syntax, instructing React to render our
// component in that container.
//
const rootElement = document.querySelector("#root");
ReactDOM.render(<App />, rootElement);

//
// You can have multiple components rendering into multiple containers
// in your DOM. For example, the following "dumb" component just returns
// text. The index.html file has a paragraph element ("<p/>") with ID
// "dumbParagraph". Notice the ReactDOM.render() below... You can render
// any valid JSX into any suitable component. As an experiment, see
// what happens if you try to render <App/> into the pElement below
// (i.e. put the <div/> from the <App/> component into a <p/> element
// in the DOM). Does it work? What does the console look like?
//
function DumbComponent() {
  return "hey there";
}
const pElement = document.querySelector("#dumbParagraph");
ReactDOM.render(<DumbComponent />, pElement);
