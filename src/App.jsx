import { useState } from 'react'
import './App.css'
import { Reactmenu } from './components/Reactmenu'
import { Reactmenuitem } from './components/Reactmenuitem'
import { Reactsubmenu } from './components/Reactsubmenu'

function App() {
  
  return (
    <>
     
        <Reactmenu>
        <Reactmenuitem>ABC</Reactmenuitem>
        <Reactmenuitem>CDE</Reactmenuitem>
             <Reactsubmenu name="FGH">
                 <Reactmenuitem>sdfdf</Reactmenuitem>
                 <Reactmenuitem>sdfdf</Reactmenuitem>
                 <Reactmenuitem>sdfdf</Reactmenuitem>
                 <Reactmenuitem>sdfdf</Reactmenuitem>
                 <Reactmenuitem>sdfdf</Reactmenuitem>
                 <Reactmenuitem>sdfdf</Reactmenuitem>
                 <Reactmenuitem>sdfdf</Reactmenuitem>
             </Reactsubmenu>
        </Reactmenu>
      
    </>
  )
}

export default App
