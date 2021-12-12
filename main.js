function Translate() { 
  //initialization
  this.init =  function(attribute, lng){
      this.attribute = attribute;
      this.lng = lng;    
  }
  //translate 
  this.process = function(){
              _self = this;
              var xrhFile = new XMLHttpRequest();
              //load content data 
              xrhFile.open("GET", "./resources/"+this.lng+".json", false);
              xrhFile.onreadystatechange = function ()
              {
                  if(xrhFile.readyState === 4)
                  {
                      if(xrhFile.status === 200 || xrhFile.status == 0)
                      {
                          var LngObject = JSON.parse(xrhFile.responseText);
                          console.log(LngObject["name1"]);
                          var allDom = document.getElementsByTagName("*");
                          for(var i =0; i < allDom.length; i++){
                              var elem = allDom[i];
                              var key = elem.getAttribute(_self.attribute);
                               
                              if(key != null) {
                                   console.log(key);
                                   elem.innerHTML = LngObject[key]  ;
                              }
                          }
                   
                      }
                  }
              }
              xrhFile.send();

              xrhFile.open("GET", "./resources/titles_"+this.lng+".json", false);
              xrhFile.onreadystatechange = function ()
              {
                  if(xrhFile.readyState === 4)
                  {
                      if(xrhFile.status === 200 || xrhFile.status == 0)
                      {
                          var LngObject = JSON.parse(xrhFile.responseText);
                          console.log(LngObject["name1"]);
                          var allDom = document.getElementsByTagName("*");
                          for(var i =0; i < allDom.length; i++){
                              var elem = allDom[i];
                              var key = elem.getAttribute("title-tag");
                               
                              if(key != null) {
                                   console.log(key);
                                   elem.title = LngObject[key]  ;
                              }
                          }
                   
                      }
                  }
              }
              xrhFile.send();


              var allImg = document.getElementsByName("img")
              var page = location.href.split("/").pop().split(".").shift();
              for(var i =0; i < allImg.length; i++){
                var img = allImg[i];
                if(page==""){
                  document.getElementsByName("img")[i].style.backgroundImage="url(/Images/index/" + this.lng + "_" + i +".png)";
                }else{
                  document.getElementsByName("img")[i].style.backgroundImage="url(/Images/" + page + "/" + this.lng + "_" + i +".png)";
                }
                
              }
  }    
}
