// import React from 'react';
// import { CardForm } from 'react-payment';

// function Payment(card) {

//     const { number, exp_month, exp_year, cvc, name, zip } = card;
//     Stripe.card.createToken({
//       number,
//       exp_month,
//       exp_year,
//       cvc,
//       name,
//       address_zip: zip
//     }, (status, response) => {
//       if (response.error) {
//         alert('Adding card failed with error: ' + response.error.message);
//       } else {
//         const cardToken = response.id;
//         // send cardToken to server to be saved under the current user
//         // show success message and navigate away from form
//       }
//     });
//   return (<div>

// <CardForm
//   onSubmit={this.onSubmit}
//   getName={true}
//   getZip={true}
// />
//   </div>
//   );
// }

// export default Payment;
