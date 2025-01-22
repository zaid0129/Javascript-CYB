function topic1(){

    let a="I am a bazzzigar sabse asli hn sabse alag "
    let a1="different caliber" 
    let a2="bhiksha nikla ab rover mere range mein "
    let a3="divine hnnnn gully gang"
    
    //length
    document.write(a.length) ///return the lenght of string..
    
    
    //concatination..
    document.write(a.concat(a2,a3))//combine 2 or more string in one
    
    //upper and lower case
    document.write(a.toUpperCase())
    document.write(a2.toLocaleLowerCase())
    
    //slice..
    document.write(a2.slice(1,2))
    
    
     }
    
    function topic2(){
    
        let a = "the indian cricket team "
        let b = "also&known&as&men&in&blue"
        let c = "upcoming series is england vs india series"
    
        //length...
        document.write(a.length)
    
        //concatination.......
        document.write(a.concat(b,c)) //addition of one or two 
    
        //slice.....
        document.write(a.slice(3,9)) //indexing no
    
        //uppercase and lower case.........
        document.write(a.toUpperCase())
        document.write(b.toLowerCase())
    }
        //trim...
        console.log(a)//it can trim extra white space the start and end words...
    
        //charat....
        document.write(a.charAt(5))//it can print particular character by the no..
    
        ///charcodeat....
        
        document.write(b.charCodeAt(3))
         //charat print the unique no code of the specific word..
    
      
        //indexof method......
        document.write(a.indexOf( ))
    
    // // split()
    function topic3(){
    let abc="cy$bro$m te$chn$olog$y pv$t $lt$d "
    let arr=[1,3,"hello",8,9]//array
    console.log(abc.split("$"))// "$" this is a seprator
    }
    
    
    // replace
    function topic4(){
    let abc="i am zaid khan, teaching mernstack web development at cybrom"
    document.write(abc.replace(/mernstack/gi,"fullstack"))
    }