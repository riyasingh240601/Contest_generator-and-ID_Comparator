$(function(){
    //  alert("nitin");
// ...............................................................................................................................................................................................................
// ...............................................CODEFORCES ........................................................................................................................................
    let problemsolved=[];
    let problemunsolved=[];
    $(".get").on("click",function(){

        let user=$("#handle").val();
        let users=[];
        let ss="";
        for(let i=0;i<user.length;i++){
            if(user[i]===' '){
                users.push(ss);
                ss="";
            }
            else{
                ss+=user[i];
            }
        }
        users.push(ss);

        // alert("nitin");
        for(let j=0;j<users.length;j++){
        let url="https://codeforces.com/api/user.status?handle="+users[j];
        console.log(user);
        fetch(url).then(function(response){
            response.json().then(function(res){
                let strr=res.status;
                if(strr==="FAILED"){
                    alert(users[j]+" is Not a valid username !!!!");
                    
                }
                let len=res.result.length;
                for(let i=0;i<len;i++){
                    let str="";
                    str+=(res.result[i].problem.contestId).toString();
                    str+=(res.result[i].problem.index);
                    if(res.result[i].verdict=="OK"){
                        problemsolved.push(str);
                    }
                }
            })
        })

    }
    })

    
    $(".find").on("click",function(){
        // let tags=$(".tag").val();
        let tags="";

    $('.styledSelect').each(function(){
        selectValue = $(this).children("select").val();
        tags=selectValue;
        if(selectValue == ""){selectValue = $(this).children("select").children("option:eq(0)").text();}
        // $(this).children(".styledSelectValue").text(selectValue);
    });
    $('.styledSelect select').change(function(){
        selectValue = $(this).val();
        if(selectValue == ""){selectValue = $(this).children("option:eq(0)").text();}
        $(this).parent(".styledSelect").children(".styledSelectValue").text(selectValue);
    });

    

    // console.log(tags);
    let url="https://codeforces.com/api/problemset.problems?tags="+tags;
    fetch(url).then(function(response){
        response.json().then(function(res){
            let rate=$(".rating").val();
            // console.log(rate);
            let len=res.result.problems.length;

            for(let i=0;i<len;i++){
                if(res.result.problems[i].rating==rate){
                    let str1=(res.result.problems[i].contestId).toString() + res.result.problems[i].index;
                        let len1=problemsolved.length;
                        let ok=true
                        for(let j=0;j<len1;j++){
                            if(problemsolved[j]===str1){
                                ok=false
                                break;
                            }
                        }
                        if(ok===true){
                        let str="https://codeforces.com/problemset/problem/"+(res.result.problems[i].contestId).toString() + "/" + res.result.problems[i].index;
                        $("#outp").val(str)
                        $("#visit").attr("href",str);
                        break;
                    }
                }
            }
        })
    })
})


// .......................................................ATCODER......................................................................................................................................................
// ..................................................................................................................................................................................


let problemsolved1=[];
    $(".get1").on("click",function(){

        let user=$("#handle1").val();
        let users=[];
        let ss="";
        for(let i=0;i<user.length;i++){
            if(user[i]===' '){
                users.push(ss);
                ss="";
            }
            else{
                ss+=user[i];
            }
        }
        users.push(ss);

        // alert("nitin");
        for(let j=0;j<users.length;j++){

        let url="https://kenkoooo.com/atcoder/atcoder-api/results?user="+users[j];
        console.log(user);
        fetch(url).then(function(response){
            response.json().then(function(res){
                let len=res.length;
                if(len==0){
                    alert("It seems that "+users[j]+" is wrong Handle name !!!");
                }
                for(let i=0;i<len;i++){
                    let str=res[i].problem_id;
                    if(res[i].result=="AC"){
                        problemsolved1.push(str);
                    }
                }
            })
        })

    }

    })





      
$(".find1").on("click",function(){
    // let tags=$(".tag1").val();
    // console.log(tags);
    let url="https://kenkoooo.com/atcoder/resources/problems.json";
    fetch(url).then(function(response){
        response.json().then(function(res){
            let rate;

            $('.styledSelect2').each(function(){
                selectValue = $(this).children("select").val();
                rate=selectValue;
                if(selectValue == ""){selectValue = $(this).children("select").children("option:eq(0)").text();}
                // $(this).children(".styledSelectValue").text(selectValue);
            });
            $('.styledSelect2 select').change(function(){
                selectValue = $(this).val();
                if(selectValue == ""){selectValue = $(this).children("option:eq(0)").text();}
                $(this).parent(".styledSelect2").children(".styledSelectValue2").text(selectValue);
            });

            console.log(rate);
            let len=res.length;
            // let tags=$(".tag1").val();

            let tags;
    
    $('.styledSelect1').each(function(){
        selectValue = $(this).children("select").val();
        tags=selectValue;
        if(selectValue == ""){selectValue = $(this).children("select").children("option:eq(0)").text();}
        // $(this).children(".styledSelectValue").text(selectValue);
    });
    $('.styledSelect1 select').change(function(){
        selectValue = $(this).val();
        if(selectValue == ""){selectValue = $(this).children("option:eq(0)").text();}
        $(this).parent(".styledSelect1").children(".styledSelectValue1").text(selectValue);
    });


            for(let i=len-1;i>=0;i--){
                let str1=res[i].id;
                let str2="";
                str2+=str1[0];
                str2+=str1[1];
                str2+=str1[2];
                let con_id=res[i].contest_id;
                let problem_ind=res[i].problem_index;
                if(str2===rate && problem_ind===tags){
                    
                        let len1=problemsolved1.length;
                        let ok=true
                        for(let j=0;j<len1;j++){
                            if(problemsolved1[j]===str1){
                                ok=false
                                break;
                            }
                        }
                        if(ok===true){
                        let strr="https://atcoder.jp/contests/"+con_id+"/tasks/"+str1;
                        $("#outp1").val(strr);
                        $("#visit1").attr("href",strr);
                        break;
                    }
                }
            }
        })
    })
})



//......................................................................................................................................................................
//......................................................................................................................................................................




})
