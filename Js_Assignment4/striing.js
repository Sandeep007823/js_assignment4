// 1.count Character

function char(str){
    let a = 0;
    let b = 0;
    for(let i=0;i<str.length;i++){
        if('A' == str[i]){
            a++;
        }
        if('D' == str[i]){
            b++;
        }
    }
        console.log(a,b)
    }
let str = "AbaDb";
char(str)

// 2.Count the heads

function head(str){
    let res = "";
    let charMap = {};
    for(let i =0 ;i<str.length;i++){
          let char = str[i]
          if(charMap[char]){
          charMap[char]++;
       }
       else{
       charMap[char]=1;
       }
    }
       for(let i in charMap){
        if(charMap[i]>1)
            res += i + charMap[i]
       }
    
    console.log(res)
    }

    head("prepbytes")

// 3.Count the Vowels

function findVowels(str){
    let count = 0;
    for(let char of str){
        if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
            char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U' )
            count++;
    }
    console.log(count)
}
findVowels('prepbytEs')

// 4.Concatenate the Strings

let S1 = "hello"
let s2 = S1.concat("javaScript")
console.log(s2)

// 5. Find lenght
let s = "afegrgtrbrtb";
console.log(s.length)

// 6.Find the Winner

function winner(strr){
         let p1 = 0;
         let p2 = 0;
    for(let char of strr){
        if(char === 'a' || char === 'A'){
            p1++;
    }
    else{
        p2++;
    }
}
      if(p1 > p2){
        console.log("winner is Player1")
      }
      else if(p1 == p2){
        console.log("match draw")
      }
      else{
        console.log("winner is Player2")
      }
}
winner("ADADADADD")

// 7. join Strings

 let f1 = "prepBytes"
 let f2 = f1.concat("Technologies")
 console.log(f2)

 // 8. Palindrome Check

 function palindrome(str){
    // let newS = str;
     for(let i =0;i< str.length/2;i++){
        if(str[i] !== str[str.length - 1 - i]){
            console.log("false")
            return
        }
     }
     console.log("true")
 }
palindrome("naman")
palindrome("hello")

// 9. Reverse the String

function rev(str){
    let r =""
    for(let i = str.length-1;i>=0;i--){
       r += str[i]
    }
    console.log("I love javascript")
    console.log("reverse :" , r)
}
rev("I love javascript")

// 10. Match the Strings

 function matchString(s1,s2){
    if(s1.length != s2.length){
        console.log("false")
        return
    }
    for(let ch = 0; ch<s1.length && ch <s2.length; ch++){
        if(s1[ch] != s2[ch]){
            console.log("false")
            return
        }
    }
     console.log("true")
 }
 matchString("PrepBytes","PrepBytes")

 // 11. String Replace

 let st1 ='Hi,I am You.You prepBytes'
 let st2 = st1.replace(/.You/g,"")
 console.log(st2)

 // 12. Split the Strings

   function splitString(str){
      let char = str.split(" ")

      for(let ch of char){
        console.log(ch)
      }
   }
  let str1 = "I am a Good Developer";
  splitString(str1)

  // 13. Count the Vowels and Consonants

   function countVow(str){
     let v = 0;
     let c = 0;
     for(let char of str){
        if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
            char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U' ){
            v++;
            }
            else{
                c++;
            }
     }
     console.log(v,c)
   }
   countVow('Prepbytes')