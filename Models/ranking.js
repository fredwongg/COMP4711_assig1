rankings = document.getElementById("rankingBoard");

//get database data as json 
function getDataAndRank(){
    var jsonObj={};
    const data = firebase.database().ref().child('users/');
  
    data.on('value',snap => {
      jsonObj = JSON.stringify(snap.val(),null,2);
      jsonObj = JSON.parse(jsonObj);
      console.log(jsonObj);
    
      var array = [];

      //push database data to array
      for (var key in jsonObj) {
          array.push(jsonObj[key]); 
      }

      array.sort(function(a, b){
          return b.score - a.score;
      });
      
      var rank = 1;

      for (var i = 0; i < array.length; i++) {
        if (i > 0 && array[i].score < array[i - 1].score) {
            rank++;
        }
          array[i].rank = rank;
      }
      console.log(array);
      var tbl=$("<table/>").attr("id","mytable");
      $("#rankingBoard").append(tbl);
      for(var i=0;i<array.length;i++)
      {
          var tr="<tr>";
          var td1="<td>"+array[i]["rank"]+"</td>";
          var td2="<td>"+array[i]["name"]+"</td>";
          var td3="<td>"+array[i]["score"]+"</td></tr>";
          
         $("#mytable").append(tr+td1+td2+td3); 
        
      }
    });
  }

  getDataAndRank();

