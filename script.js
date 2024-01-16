      document.querySelector("#push").onclick = function () {
        if (document.querySelector("#newtask input").value.length == 0) {
          alert("Please Enter a Task");
        } else {
          document.querySelector("#tasks").innerHTML += `
          <div class="task" style="text-align:center;display: grid;">
                <span id="taskname">
               <article class="tile" style="width: 100%;">
                <div class="tile-header" style="     width: 360px; ">
                  <i class="ph-lightning-light"></i>
                  <h3>
                    <span>${document.querySelector("#newtask input").value}</span>
                    <span></span>
                  </h3>
                </div>
                <a href="#">
                  <span>Go Ahead</span>
                  <span class="icon-button">
                    <i class="ph-caret-right-bold"></i>
                  </span>
                </a>
              </article>
                </span>
                <button class="delete"style="width:100%;padding:3px;margin-top:-1px;border-radius:10px;color:white;background: radial-gradient(circle at 10.6% 22.1%, rgb(206, 18, 18) 0%, rgb(122, 21, 21) 100.7%);">
                    Remove
                </button>
            </div>
            
        `;

          var current_tasks = document.querySelectorAll(".delete");
          for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
              this.parentNode.remove();
            };
          }
          document.getElementById("input").value = "";
        }
      };