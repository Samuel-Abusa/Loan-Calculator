$ (document).ready(function(){
  $ ("form").submit(function (event){
    event.preventDefault();

    var principal = $ ("#amount").val();
    var rte = $ ("#rate").val();
    var rAte = function (){
      return rte/100;
    };
    var pRiod = $ ("#term").val();
    

    function calCulate(){
      return principal * rAte() * pRiod;
    };

    var rePayment = function (){
      return (parseInt(principal) + calCulate()) / (pRiod * 12);
    };
    document.getElementById("totalRepayment").append(parseInt(principal)+calCulate());

    document.getElementById("monthlyRepayment").append(rePayment());
  });
});