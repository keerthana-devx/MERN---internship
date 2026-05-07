


const Nav=function(){
    return(
        <nav style={{backgroundColor:"pink",height:"90px",margin:"30px",padding:"0px",borderRadius:"20px"}}>
            <ol style={ListStylings.orderList}>
                <li style={ListStylings.List}>Home</li>
                <li style={ListStylings.List}>Login</li>
                <li style={ListStylings.List}>Register</li>
                <li style={ListStylings.List}>About</li>
            </ol>
        </nav>
    )
}

//declaring stylings

const ListStylings={
    List:{
        backgroundColor:"mediumpurple",
        padding:"10px 20px",
        fontSize:"22px",
        fontStyle:"italic",
        fontWeight:"bold",
         borderRadius:"30px",
        
    },
    orderList:{
    display:"flex",
    justifyContent:"space-evenly",
    alignItems:"center",
    height:"80px",
   
    listStyle:"none",
   

    
    
}
}




export default Nav;




