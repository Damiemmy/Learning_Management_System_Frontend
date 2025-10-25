function CartId(){
    const generatedRandomString=()=>{
        const length=6
        const character='134567890'
        let randomString=""

        for(let i=0; i<length; i++){
            const randomIndex=Math.floor(Math.random() *character.length)
            randomString +=character.charAt(randomIndex)
        }

        localStorage.setItem('randomString',randomString)
    };

    const existingRandomString=localStorage.getItem("randomString");

    if(!existingRandomString){
        generatedRandomString()
    }else{
        //pass
    }

    return existingRandomString


}

export default CartId