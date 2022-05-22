function Button(){
    function darkMode() {
        var element = document.body;
        var content = document.getElementById("App");
        element.className = "dark-mode";
        // content.innerText = "Dark Mode is ON";
        console.log("dark mode on");
        
      }
      function lightMode() {
        var element = document.body;
        var content = document.getElementById("App");
        element.className = "light-mode";
        // content.innerText = "Dark Mode is OFF";
        console.log("light mode on");
      }
      return(
          <div>
            <button class="dark-mode" onClick={darkMode}>Darkmode</button>
            <button class="light-mode" onClick={lightMode}>LightMode</button>
          </div>
      )

    }