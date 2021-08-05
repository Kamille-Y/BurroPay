var formEl = $('#interest-form');
var firstNameEl = $('input[name="first-name"]');
var lastNameEl = $('input[name="last-name"]');
var principalEl =$('input[name="principal"]');
var interestEl =$('input[name="interest"]');
var durationEl =$('input[name="duration"]');


function handleFormSubmit(event) {
  // Prevent the default behavior
  event.preventDefault();

  /*console.log('First Name:', firstNameEl.val());
  console.log('Last Name:', lastNameEl.val());
  console.log('Email:', emailEl.val());
  console.log('GitHub:', githubEl.val());
  */
  
  var P=principalEl.val();
var I=(interestEl.val()/100)  / 12;
var N=durationEl.val() * 12;
var M1 =  ( I * (( 1 + I )**N) )/ ( (( 1 + I )**N) -1 )
var M2= P * M1;
var M3 = Math.round(M2);
var prin_and_int=M3 * N;


  // Clear input fields
  $('input[type="TotalPayment"]').val(prin_and_int.toString());


  // Clear input fields
  $('input[type="monthlyPayment"]').val(M3.toString());
  //$('input[type="email"]').val('');
  //$('input[type="checkbox"]').prop('checked', false);
}

// Submit event on the form
formEl.on('submit', handleFormSubmit);
