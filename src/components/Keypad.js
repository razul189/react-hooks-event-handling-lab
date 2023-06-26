// Code Keypad Component Here

function Keypad (){
    function typing () {
        console.log("Entering password...")
    }
    return (
        <div> 
            <input 
            type = "password"
            onChange ={typing}
            />
        </div>    
    )
}

export default Keypad;