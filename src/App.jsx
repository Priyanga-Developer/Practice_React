// import { useContext, useEffect, useState } from 'react';

// // import ClassComp from './Class'
// // import ErrorBoundary from './ErrorBoundary'
// // import Func from './Func'
// // import Login from './Component/Login'
// // import Main from "./Component/Main"
// // import {createBrowserRouter,Outlet ,RouterProvider ,redirect,Navigate} from "react-router-dom"
// // import React from 'react'
// // import Header from './Component/Header'
// // import ProtectedRoute from './Component/ProtectedRoute'

// // const AppLayout = () => { 

// //   return (
// //     <div className='App'>
// //        <Header/>
// //        <Outlet/>
// //     </div>
// //   )
  
// // }
// // const loggedIn=true

// // const Router=createBrowserRouter([{
// //   path:"/",
// //   // loader: () => (loggedIn ? redirect('/Login') : null),
// //   element:<AppLayout/>,
// //   children:[
// //     {
// //     path:"/",
// //     element:
// //     <ProtectedRoute>
// //        <Main/>
// //     </ProtectedRoute>,
// //     },
// //     {
// //       path:"/Login",
// //       element:<Login/>,
// //     },
// // ]
// // }])

// // const App=()=> <RouterProvider router={Router}/>
// // export default App

// // function App() {
// //   const newData="this is prop"
// //   return (
// //     <>
// //     <Login/>
// //     <ErrorBoundary>
// //         <ClassComp/>
// //      </ErrorBoundary>
// //      <Func newprop={newData}/>
// //     </>
// //   )
// // }

// // export default App

// import React from 'react'
// // import DataContext from './Hooks/DataContext';
// // import Ref from './Ref';
// // import Memo from './Memo';
// // import Callback from './Callback';
// // import Reducer from './Reducer';
// // import Event from './Event';
// // import ControlledInputs from './ControlledInputs';
// // import ToDo from './ToDo';
// import Header from './RouterComponents/Header';
// import Footer from './RouterComponents/Footer';
// import { Outlet, Route, Routes } from 'react-router-dom';
// import Home from './RouterComponents/Home';
// import About from './RouterComponents/About';
// import PostPage from './RouterComponents/PostPage';
// import Post from "./RouterComponents/Post";
// import Missing from './RouterComponents/Missing';
// import { auth ,dB,provider} from "./firebase/firebaseconfig";
// import { onAuthStateChanged, signInWithPopup ,createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut} from "firebase/auth"
// import { addDoc, collection, deleteDoc, getDocs,doc, updateDoc } from 'firebase/firestore';

// const App = () => {
// //  const {count,handleOnclick}=useContext(DataContext)
// // console.log("function1");
// // useEffect (()=>{
// //    console.log("useEffect");
// // },[])
// // console.log("function2");
// const [user,setUser]=useState("");
// const [email,setEmail] =useState("");
// const [password,setPassword]=useState("");
// const [name,setName]=useState("");
// const [movieList,setMovieList]=useState([]);
// const [title,setTitle]=useState("");
// const [year,setYear]=useState("");
// const [isAward,setIsAward]=useState(true);
// const [newTitle,setNewTitle]=useState("");

// const handleGoogleLogin=async()=>{
//   try {
//     const results= await signInWithPopup(auth,provider);
//      console.log(auth?.currentUser?.email);
//      console.log(results.user.email);

//   } catch (error) {
//      console.log(error.message);
//   }
// }
// useEffect(()=>{
//   const subscribe= onAuthStateChanged(auth,(currentUser)=>{
//     setUser(currentUser)
//   })
//   return ()=>subscribe()
// },[])

// const handleSignUp=async()=>{
//   try {
//     const results=await createUserWithEmailAndPassword(auth,email,password);
//     const userProfile=results.user;
//     await updateProfile(userProfile,{displayName:name})
//     console.log(userProfile);

//   } catch (error) {
//     console.log(error.message);
//   }
 
// }
// const handleLogin=async()=>{
//   try {
//     const result=await signInWithEmailAndPassword(auth,email,password);
//     console.log(result.user);
    
//   } catch (error) {
//     console.log(error.message);
    
//   }
// }


// const handleSignOut=async()=>{
//   try {
//       await signOut(auth);
//       console.log("signout successsfully");
//   } catch (error) {
//     console.log(error.message); 
//   }
// }
//       {/* const [title,setTitle]=useState("");
// const [year,setYear]=useState("");
// const [isAward,setIsAward]=useState(true);
// const [newTitle,setNewTitle]=useState(""); */}
// const movieListRef = collection (dB,"movies");
// const getMovieList=async()=>{
//   try {
//   const data =await getDocs(movieListRef);
//   const filteredData= data.docs.map((doc)=>({...doc.data(),id:doc.id}))
//   setMovieList(filteredData);
    
//   } catch (error) {
//     console.log(error.message);
    
//   }

//  }
// const handleAdd=async()=>{
//   try {
//     const data=await addDoc(movieListRef,{
//       title:title,
//       receivedAward:isAward,
//       releaseDate:year
//     })
//    getMovieList()
    
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// const handleDelete =async(id)=>{
//   const newMovieDoc=doc(dB,"movies",id)
//    try {
//        await deleteDoc(newMovieDoc);
//        getMovieList();
//    } catch (error) {
//     console.log(error.message);
//    }
// }

// const handleUpdate=async(id)=>{
//   const newMovieDoc=doc(dB,"movies",id)
//    try {
//       const data=await updateDoc(newMovieDoc,{
//         title:newTitle
//       })
//       getMovieList()
//    } catch (error) {
//     console.log(error.message);
//    }
// }
// useEffect(()=>{
//    getMovieList();
// },[])

//   return (
//     <div>
//       {/* <h1>{count}</h1>
//       <button type="button" onClick={()=>handleOnclick()}>count</button> */}
//       {/* <Ref/> */}
//       {/* <Memo/> */}
//       {/* <Callback/> */}
//       {/* <Reducer/> */}
//       {/* <Event/> */}   
//       {/* <ControlledInputs/> */}
//       {/* <ToDo/> */}
//       {/* <Header/>
//       <Footer/>
//       <Routes>
//         <Route path='/' element={<DashBoard/>}/>
//         <Route path='home' element={<Home/>}/>
//         <Route path='about' element={<About/>}/>
//         <Route path='postPage'>
//           <Route index  element={<PostPage/>}/>
//           <Route path=':id' element={<Post/>}/>
//         </Route>
//         <Route path='*' element={<Missing/>}/>
//       </Routes> */}
//       <h1>Login using Google</h1>
//       <button type='button' onClick={()=>handleGoogleLogin()}>Login Using Google</button>
//       <form action="" onSubmit={(e)=>e.preventDefault()}>
//         <input type="text" placeholder='enter the name' value={name} onChange={(e)=>setName(e.target.value)}/>
//         <input type="email" placeholder='enter the email'  value={email} onChange={(e)=>setEmail(e.target.value)}/>
//         <input type="password" placeholder='enter the password'  value={password} onChange={(e)=>setPassword(e.target.value)} />
//         <button type='button' onClick={()=>handleSignUp()}> Sign Up using email and password </button>
//         <button type='button' onClick={()=>handleLogin()}> Sign Up using email and password </button>
//         <button type='button' onClick={()=>handleSignOut()}>SignOut</button>
//       </form>

//       <form action="" onSubmit={(e)=>e.preventDefault()}>
//         <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}  placeholder='enter the title'/>
//         <input type="number" value={year} onChange={(e)=>setYear(Number(e.target.value))}  placeholder='enter the movie year'  />
//         <input type="checkbox" checked={isAward} onChange={(e)=>setIsAward(e.target.checked)} />
//         <label>Received an oscar</label>
//         <button type='button' onClick={()=>handleAdd()}>Add</button>
//       </form>
//       <div>
//       {/* receivedAward
//       releaseDate
//        title */}

//           {movieList.map((movie)=>{
//             return <div key={movie.id}>
//               <h2 style={{color: movie.receivedAward? "green":"red"}}>{movie.title}</h2>
//               <p>{movie. releaseDate}</p>
//               <button type='button' onClick={()=>handleDelete(movie.id)}>Delete</button>
//               <input type='text' value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} placeholder='enter the new title'/>
//               <button type='button' onClick={()=>handleUpdate(movie.id)}>Update</button>
//             </div>
//           })}
//       </div>
//     </div>
//   )
// }

// export default App



import React from 'react'
import Counter from './Component/Counter'
import ToDoList from './Component/ToDoList'
// import { compose ,pipe} from "lodash/fp"
const App = () => {

// //   const array=[1,2,3,4]
// //   array.push(5); //it will change the original array
// //   console.log(array);//[1,2,3,4,5]

// //   const array1=array.concat(7)
// //   console.log(array1,"newarray");//it will not change the original arrayinstead it creates a new array
// //   //[1,2,3,4,5,7]

// //   const originalObj1={
// //     a:2,
// //     b:3,
// //     c:4
// //   }
// //   originalObj1.a=22
// //   console.log(originalObj1); //{a: 22, b: 3, c: 4} it changes the original object

// //   const obj1={
// //     ...originalObj1,
// //     a:45
// //   }
// //   console.log(obj1); //{a: 45, b: 3, c: 4} it does not chnage original object,it creates a new object

// //   //shallow Copy
// //     const basket ={
// //        fruit:"apple",
// //        vegetable:"tomato",
// //        snacks:"lays"
// //     } 
// //     const basket2={
// //       ...basket,
// //        fruit:"banana"
// //     }
// //     console.log(basket, "original");//{"fruit": "apple","vegetable": "tomato", "snacks": "lays"}
// //     console.log(basket2 ,"new");//{fruit: 'banana', vegetable: 'tomato', snacks: 'lays'}
// //     //Shallow copy has a challenge when we have nested objects.
// //     const newShopping={
// //       shop1:{
// //         fruits:"mango",
// //         vegetable:"brinjal",
// //         snacks:"biscuit"
// //       }
// //     }
// //     const basket3={
// //           ...newShopping,fruits:"no fruits"
// //     }
// //     console.log(newShopping,"original");
// //   //   {
// //   //     "shop1": {
// //   //         "fruits": "mango",
// //   //         "vegetable": "brinjal",
// //   //         "snacks": "biscuit"
// //   //     }
// //   // }
// //     console.log(basket3,"new");
// //   //   {
// //   //     "shop1": {
// //   //         "fruits": "mango",
// //   //         "vegetable": "brinjal",
// //   //         "snacks": "biscuit"
// //   //     },
// //   //     "fruits": "no fruits"
// //   // }  /// It does not change the fruit property in shop1 ,so we have to do something called deep copy

// //   //Deep Copy

// //   const basket4={
// //     ...newShopping,shop1:{
// //       ...newShopping.shop1, fruits:"no fruits"
// //     }
// //   }
// //   console.log(basket4,"deepcopy"); 
// // //   {
// // //     "shop1": {
// // //         "fruits": "no fruits",
// // //         "vegetable": "brinjal",
// // //         "snacks": "biscuit"
// // //     }
// // // }
// //   console.log(newShopping,"original");

// // //   {
// // //     "shop1": {
// // //         "fruits": "mango",
// // //         "vegetable": "brinjal",
// // //         "snacks": "biscuit"
// // //     }
// // // }

// //function reference

// function pressLike(){
//  return console.log("Thanks a lot");
// }
// const pl=pressLike // no output ,just referred
// pl() //Thanks a lot

// // Higher Order Function -Takes a function as argument in a function or return a function eg .map,filter,reduce
// function message (){
//   return "Hello world"
// }
// function SaySomething(func) {
//    console.log(func);
// }
// SaySomething(message) //ƒ message() { return "Hello world";}
// SaySomething(message())// "hello world"

// //example2 

// const text="   Redux  "
// const trim = str=> str.trim()
// const lowerCase= str=>str.toLowerCase()


// const result=(text)=>{
//   return console.log( `<div>${text}</div>`);
// }
// result(lowerCase(trim(text))) //<div>redux</div> left to right

// //introduced a library  lodash import { compose ,pipe} from "lodash/fp"
// //1. compose 
//  const composing=compose(result,lowerCase,trim) //right to left
// composing(text)
// //2.Pipe 
// const piping=pipe(trim,lowerCase,result) //easy ,left to right
// piping(text)

// //Currying Taking multiple arguments and taking one by one ,nesting in function
// function add(a){
//   return (b)=>{
//        return console.log(a+b); //5
//   }
// } 
// add(3)(2);
// const text2="   Redux  "
// const trim2 = str=> str.trim()
// const lowerCase2= str=>str.toLowerCase()
// const result2=(type)=>{
//  return (text) =>console.log( `<${type}>${text}</${type}>`);
// }
// const curryingPipe=pipe(trim2,lowerCase2,result2)
// curryingPipe("span")(text2)///<span>Redux</span>

// //Pure Function - result will not change 
// function randomNum(num){ //Impure function
//   return num* Math.random() // output changes ,not predicatable
// }
// function Num(num){ //pure function
//   return num* 3 // output not chnages , predicatable
// }

  return (
    <div>
      <Counter/>
      <ToDoList/>
    </div>
  )
}

export default App