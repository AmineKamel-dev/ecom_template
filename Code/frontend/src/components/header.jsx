
function Header({mode="simple"}){
    //TODO:implement searchbar and Userbar
 const display=(mode)=>{
    if(mode=="full") {
        return(
            <>
            <SearchBar/>
            <UserBar/>
            </>
        )
    }
    else if(mode="half") return <UserBar/>
    else return null;
 }
    return(
        <>
        <HeaderTitle mode={mode}/>
        {display(mode)}
        </>
        
    )
}
export default Header;

//TODO add css option : mode in header title controls style of component
//TODO add CSS to components
function HeaderTitle({mode}){
    const title="Ecommerce Website";
    return(
        <div className={`header-title ${mode}`}>
           <div className="logo-Container">
               <img src="/assets/react.svg" alt="website logo"></img>
           </div>
           {title}
       </div>
       ) 
}
