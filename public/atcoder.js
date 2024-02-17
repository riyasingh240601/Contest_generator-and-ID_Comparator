$(function(){

    let problemsolved=[];
    $(".get1").on("click",function(){

        let user=$("#handle1").val();

        alert("nitin");
        let url="https://kenkoooo.com/atcoder/atcoder-api/results?user="+user;
        console.log(user);
        fetch(url).then(function(response){
            response.json().then(function(res){
                let len=res.result.length;
                for(let i=0;i<len;i++){
                    let str="";
                    str+=(res.result[i].problem.contestId).tostring();
                    str+=(res.result[i].problem.index);
                    if(res.result[i].verdict=="OK"){
                        problemsolved.push(str);
                    }
                }
            })
        })
    })
})


$(".find1").on("click",function(){
    // let tags=$(".tag1").val();
    let url="https://kenkoooo.com/atcoder/resources/problems.json";
    fetch(url).then(function(response){
        response.json().then(function(res){
            let rate=$(".rating1").val();
            let len=res.result.problem.length;

            for(let i=0;i<len;i++){
                if(res.result.problem[i].rating==rate){
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
                        $("#outp1").val(str)
                        break;
                    }
                }
            }
        })
    })
})
