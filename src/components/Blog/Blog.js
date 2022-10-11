import React from 'react';

const Blog = () => {
    return (
        <div className="products bg-card-color col-span-7 lg:col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 p-7 lg:p-28 text-white">
        <div className=' shadow-2xl rounded-lg relative bg-card-bg-color  border border-slate-800'>
            <div className='p-4  '>
                <p className='text-lg text-blue-color font-bold mb-2'>What is the purpose of react router ?</p>
                <div className='bg-main-color p-2 rounded text-slate-300 flex flex-col gap-3 '>
                    <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>

                    <p>The main Components of React Router are</p>

                    <p className='text-lg font-bold text-slate-200'> BrowserRouter</p>
                    <p>BrowserRouter is a router implementation that uses the HTML5 history API to keep your UI in sync with the URL</p>

                    <p className='text-lg font-bold text-slate-200'>Routes</p>
                    <p>It’s a new component introduced in the v6 and a upgrade of the component. The main advantages of Routes over Switch are:
Relative s and s
Routes are chosen based on the best match instead of being traversed in order.</p>

                    <p className='text-lg font-bold text-slate-200'>Route</p>
                    <p>Route is the conditionally shown component that renders some UI when its path matches the current URL</p>

                    <p className='text-lg font-bold text-slate-200'>Link</p>
                    <p>Link component is used to create links to different routes and implement navigation around the application. It works like HTML anchor tag</p>
                </div>
            </div>
        </div>
        <div className=' shadow-2xl rounded-lg relative bg-card-bg-color  border border-slate-800'>
            <div className='p-4  '>
                <p className='text-lg text-blue-color font-bold mb-2'>How does context api works?
</p>
                <div className='bg-main-color p-2 rounded text-slate-300 flex flex-col gap-3 '>
                    <p className='text-lg font-bold text-slate-200'>What is Context API?</p>
                    <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                    <p className='mb-3'>Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.</p>
                    

                    <p className='text-lg font-bold text-slate-200'>React context API: How it works?</p>
                    <p>React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>

                    <p className='text-lg font-bold text-slate-200'>Context API will replace redux?</p>
                    <p>No. Well, not entirely.

Redux is great for state management. Redux has its disadvantages, and that's why it's important to know what Context API gives us that Redux doesn't:</p>
                    
                </div>
            </div>
        </div>
        
        <div className=' shadow-2xl rounded-lg relative bg-card-bg-color  border border-slate-800'>
            <div className='p-4  '>
                <p className='text-lg text-blue-color font-bold mb-2'>What is useRef? Explain.</p>
                <div className='bg-main-color p-2 rounded text-slate-300 flex flex-col gap-2 '>
                    <p>The useRef Hook is a function that returns a mutable ref object whose .current property is initialized with the passed argument (initialValue). The returned object will persist for the full lifetime of the component.</p>

                    <p>There are two main uses of useRef that are explained in the following sections: </p>

                    <p className='text-lg font-bold text-slate-200'>Accessing the DOM nodes or React elements</p>

                    <p>In a functional component using useRef instead of createRef is better because. If you create a ref using createRef in a functional component, React will create a new instance of the ref on every re-render instead of keeping it between renders.</p>

                    <p className='text-lg font-bold text-slate-200'>Keeping a mutable variable</p>

                    <p>Both in class components and functional components using Hooks, we have two ways of keeping data between re-renders:</p>
                    
                    <p className='text-md font-bold text-slate-200'>In class components</p>
                    <p>In the component state: Every time the state changes, the component will be re-rendered.</p>

                    <p className='text-md font-bold text-slate-200'>In functional components</p>
                    <p>The equivalent ways in functional components using Hooks:
In a state variable: useState or useReducer. Updates in state variables will cause a re-render of the component.
</p>
                   
                    
                </div>
            </div>
        </div>
    </div>
    );
};

export default Blog;