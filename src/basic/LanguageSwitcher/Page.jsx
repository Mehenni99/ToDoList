import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Page(){

   const [currentLang,setCurrentLang]=useState('AR')

   const displayMessage=()=>{
      switch (currentLang) {
         case 'AR' : return 'السلام عليكم'
         case 'FR' : return 'Bonjour'
         case 'EN' : return 'hello'
            
      }
   }
return <>
   <LanguageSwitcher onLanguageChange={value=>setCurrentLang(value)}/>

   <hr />
Current Language:{currentLang}  

<div
   className="alert alert-primary"
   role="alert"
>
   {displayMessage()}
</div>

</>

}