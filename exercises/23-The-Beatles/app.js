

function sing() {
var string='';
for (let i = 0; i < 12; i++) {    
    
        if(i<4){string= string + 'let it be, ';}
        if(i==4){string= string +'words of wisdom, ';}
        if(i<10 && i>4){string= string +'let it be, ';}
        if(i==10){string= string +'there will be an answer, '; }   
        if(i>10){string= string +'let it be';}      
         
    }
    
    return string;
    
    

}
console.log(sing());