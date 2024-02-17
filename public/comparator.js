
$(function(){

    let totalmap1=new Map();
    let totalmap2=new Map();
    let map1=new Map();
    let map2=new Map();



    $(".validate").on("click",function(){
    
        // alert("i m here ");
        totalmap1.clear();
        totalmap2.clear();
        map1.clear();
        map2.clear();
    // ............................................................................................................................................
        let user=$(".inp1").val();
        console.log(user);
        let url="https://codeforces.com/api/user.status?handle="+user;
        fetch(url).then(function(response){
            response.json().then(function(res){
                let strr=res.status;
                if(strr==="FAILED"){
                    alert("Wrong Handle 1 Name !!!!");
                }
                let len=res.result.length;
                for(let i=0;i<len;i++){
                    let str="";
                    str+=(res.result[i].problem.contestId).toString();
                    str+=(res.result[i].problem.index);
                    let rate=""+(res.result[i].problem.rating);
                    if(totalmap1.has(rate)){
                         totalmap1.set(rate,totalmap1.get(rate)+1);
                    }
                    else{
                        totalmap1.set(rate,1);
                    }
                    if(res.result[i].verdict==="OK"){
                        if(map1.has(rate)){
                          map1.set(rate,map1.get(rate)+1);
                        //   console.log(map1.get(rate));
                        }
                        else{
                            map1.set(rate,1);
                        }
                    }
                }
            })
        })



    //............................................................................................................................
        let user1=$(".inp2").val();
        let url1="https://codeforces.com/api/user.status?handle="+user1;
        fetch(url1).then(function(response){
            response.json().then(function(res){
                let strr=res.status;
                if(strr=="FAILED"){
                    alert("Wrong Handle 2 Name !!!!");
                }
                let len=res.result.length;
                for(let i=0;i<len;i++){
                    let str="";
                    str+=(res.result[i].problem.contestId).toString();
                    str+=(res.result[i].problem.index);
                    let rate=""+(res.result[i].problem.rating);
                    if(totalmap2.has(rate)){
                        totalmap2.set(rate,totalmap2.get(rate)+1);
                   }
                   else{
                       totalmap2.set(rate,1);
                   }
                   if(res.result[i].verdict==="OK"){
                       if(map2.has(rate)){
                         map2.set(rate,map2.get(rate)+1);
                      
                       }
                       else{
                           map2.set(rate,1);
                       }
                   }
                }
            })
        })
    //.........................................................................................................................
   

})


  $(".compare").on("click",function(){
    
    let cnt1=1;
    for(let i=800;i<=2500;i+=100){
        let str=".inpt";
        str=str+cnt1;
        str=str+1;
        let ss=""+i;

        let str1=".inpt";
        str1=str1+cnt1;
        str1=str1+2;
        
        // console.log(ss);
        let comp1=0,comp2=0;
        if(totalmap1.has(ss) && map1.has(ss)){
            let val1=map1.get(ss)/totalmap1.get(ss);
            val1=(val1*100);
            val1=Math.floor(val1);
            comp1=val1;
            let ans=""+val1;
            ans+="%";
            // console.log(val1);
            $(str).val(ans);
        }
        else{
            let ans="0%"
            $(str).val(ans);
        }

        if(totalmap2.has(ss) && map2.has(ss)){
            let val1=map2.get(ss)/totalmap2.get(ss);
            val1=(val1*100);
            val1=Math.floor(val1);
            let ans=""+val1;
            ans+="%";
            comp2=val1;
            // console.log(val1);
            $(str1).val(ans);
        }
        else{
            // $(str1).val(0);
            let ans="0%"
            $(str1).val(ans);
        }

        if(comp1>comp2){
            $(str).css("background-color","yellow");
            $(str1).css("background-color","red");
        }
        else if(comp1==comp2){
            $(str).css("background-color","blue");
            $(str1).css("background-color","blue");
        }
        else{
            $(str1).css("background-color","yellow");
            $(str).css("background-color","red");
        }

        cnt1++;
    }

  })
    
   
})
