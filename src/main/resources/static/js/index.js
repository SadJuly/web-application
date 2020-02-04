var data = null;

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        
        xhr.addEventListener("readystatechange", function () {
          if (this.readyState === 4) {
            console.log(this.responseText);
          }
        });
        
        xhr.open("HEAD", "https://world-georss.waze.com/rtserver/web/TGeoRSS?tk=ccp_partner&ccp_partner_name=Kyiv%20City%20Council%20of%20Ukraine&format=JSON&types=traffic&polygon=30.310000%2C50.572000%3B30.241000%2C50.428000%3B30.594000%2C50.215000%3B30.711000%2C50.354000%3B30.824000%2C50.405000%3B30.740000%2C50.498000%3B30.817000%2C50.564000%3B30.720000%2C50.592000%3B30.503000%2C50.581000%3B30.310000%2C50.572000%3B30.310000%2C50.572000");
        xhr.setRequestHeader("content-type", "application/json");
        xhr.setRequestHeader('Access-Control-Allow-Headers', '*');

        
        xhr.send(data);