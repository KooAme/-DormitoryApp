import React from "react";
import './Menu.css';

function Menu(props){
    const menus = ["A/S", "헬스", "외박", "버스", "식단표", "버스", "휴일", "사용자"];
    const m = menus[props.menu];
    function ClickMenu(){
        const qs=document.getElementsByClassName("MenuDisappear");
        if(qs[0].style.display=== 'none'){
            qs[0].style.display = 'block';
            //qq.style.slideToggle
        }else{
            qs[0].style.display='none';
        }
    }

   function ClickMenu1(){
       const qz= document.getElementsByClassName("MenuDisappear1")
       console.log(qz[0].style.display);
       if(qz[0].style.display==="none"){
        qz[0].style.display="block";
       }
       else{
       qz[0].style.display="none"
       }
   }
     
    return(
            <div className="menu">
                <p className="MenuMenu"><strong>Menu</strong></p>
                 <p className="MenuName" onClick={ClickMenu}>▶ 예약관리</p> 
                <p className="MenuDisappear">
                    <li className="MenuText" onClick={m}>{menus[0]}</li>
                    <li className="MenuText" onClick={m}>{menus[1]}</li>
                    <li className="MenuText" onClick={m}>{menus[2]}</li>
                    <li className="MenuText" onClick={m}>{menus[3]}</li>
                </p>
                <p className="MenuName1" onClick={ClickMenu1}>▶ 생활관관리</p>
                <p className="MenuDisappear1">
                    <li className="MenuText" onClick={m}>{menus[4]}</li>
                    <li className="MenuText" onClick={m}>{menus[5]}</li>
                    <li className="MenuText" onClick={m}>{menus[6]}</li>
                    <li className="MenuText" onClick={m}>{menus[7]}</li>
                </p>
            </div>)
}
export default Menu;