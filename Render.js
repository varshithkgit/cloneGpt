import React, {useMemo} from 'react';
import { useSelector } from "react-redux";
let respond=[];
const set= new Set();
let result= [];

function check(){
  respond.forEach((obj)=>{
    let myJson=JSON.stringify(obj);
    if(!(set.has(myJson))){
         set.add(myJson);
         result.push(obj);
    }
  });
}

function Render({v}){
    let qna= useSelector(state=>state.slice1.qna);
    let reply= useSelector(state=>state.slice1.reply);
    
    respond.push({qna:qna,reply:reply});
    check();
    // console.log(set,result);
    return( 
    <>
    {
      result.map(({qna,reply})=>{
        if(qna!="" && reply!=""){
            return(
                <>
                <div className="reply">
                 {qna}
                </div>
                <div className="reply2">
                 {reply}
                </div>
               </>
            )
          }
        })
    }
    </>
    )
    
}

export default React.memo(Render);