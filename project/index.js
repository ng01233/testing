
let ar =  [['a','1','b'],
            ['2','c','3'],
            ['d','4','e']];
             
let bt = [[false,false,false],[false,false,false],[false,false,false]];             
let str = "";
let p = 1000 ;

function floodfill(sr,sc,er,ec,ans,k)
{
     if(sr == er && sc == ec)
     {
        ans = ans + ar[sr][sc];
        if(p >= k && ans.length > 1)
        {
            p = k;
            str = ans;
        }
         return;
     }
     bt[sr][sc] = true;
     ans = ans + ar[sr][sc];
     const t = [[1,0],[0,1],[-1,0],[0,-1]];

     for(let i = 0;i<4;i++)
     {
         let x = sr + t[i][0];
         let y = sc + t[i][1];
         
         if(x>=0 && y>=0 && x<=er && y<=ec && !bt[x][y])
         {
             floodfill(x,y,er,ec,ans,k+1);
         }
     }
}             

document.getElementById("but").addEventListener("click",call);
function call()
{
floodfill(0,0,2,2,"",0);
alert(str);
for(let  i = 0;i<str.length;i++)
{
    document.getElementById(str[i]).style.backgroundColor = "green";
}
}
