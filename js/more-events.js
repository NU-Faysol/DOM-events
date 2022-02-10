                    // 2) focus
document
  .getElementById("delete-confirm")
  .addEventListener("focus", function () {
    
    document.body.style.backgroundColor = 'lightcoral';

  });

                // 3) blur
document
  .getElementById("delete-confirm")
  .addEventListener("blur", function () {
    
        document.body.style.backgroundColor = 'white';

  });
