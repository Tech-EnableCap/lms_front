function Loader(props) {    
    let stl = {
        display:(props.hide ? "none" : "flex"),
        alignItems:"center",
        position:"fixed",
        backgroundColor:"rgba(0, 0, 0, 0.5)",        
        height:"100vh",
        width:"100%",
        left:"0px",
        top:"0px",
        zIndex:"3",
    }
    return (
        <div className="ldMod" style={stl}>
            <div className="loader"></div>
        </div>
    );
}

export default Loader;