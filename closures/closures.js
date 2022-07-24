const moneyBox = () => {
  let  saveCoins = 0;
  const countCoins = (coins) => {
    saveCoins += coins;
    console.log(`my money is $${saveCoins}`);
  };
  return countCoins;
};
 let myMoneyBox = moneyBox()
 myMoneyBox(5);
 myMoneyBox(10);
 myMoneyBox(15);
//lexico en closures//

function buildCount ( i ) {
    let count = i
    function displayCount () {
      console.log(count++);
    }
    return displayCount
  };
  
  const myCount = buildCount(1)
  myCount() // 1
  myCount() // 2
  myCount() // 3
  
  const myOtherCount = buildCount(10);
  myOtherCount() // 10
  myOtherCount() // 11

  ///variables privadas con closures///
  const person =() =>{
    let saveName = "Name";
    return{
      getName: ()=>{  //funcion anonima//
        return saveName
      },
      serName: (name)=>{
        saveName = name
      }
    };

  };

 const newPerson = person();
console.log(newPerson.getName()); //Name
newPerson.serName("Bladimir");
console.log(newPerson.getName());//Bladimir
