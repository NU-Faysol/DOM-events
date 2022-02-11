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
              //4) keydown
  // document.getElementById('delete-confirm').addEventListener('keydown', function(){

  //   const deleteField = document.getElementById('delete-confirm');
  //         console.log(deleteField.Value);
  // });
              //5) keypress
  // document.getElementById('delete-confirm').addEventListener('keypress', function(){

  //   const deleteField = document.getElementById('delete-confirm');
  //         console.log(deleteField.Value);
  // });


            //6) keyup
  // document.getElementById('delete-confirm').addEventListener('keyup', function(){

  //   const deleteField = document.getElementById('delete-confirm');
  //         console.log(deleteField.value);
  // });

          //7) change (যদি কিছু পরিবর্তন হয় তাহলে ধরে ফেলবে। তবে focus থেকে সরিয়ে নিলেই console এ পরিবর্তন দেখা যাবে।)

  // document.getElementById("delete-confirm").addEventListener('change', function(){

  //   const deleteField = document.getElementById("delete-confirm");
  //         console.log(deleteField.value);
  // })
