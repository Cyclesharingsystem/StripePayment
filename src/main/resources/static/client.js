// If the card requires authentication, Stripe shows a pop-up modal to prompt the user to enter authentication details without leaving your site.
var payWithCard = function(stripe, card, clientSecret) {
  loading(isLoading: true);
  stripe
    .confirmCardPayment(clientSecret, {
      payment_method: {
        card: card
      }
    })
    .then(function(result) {
      if (result.error) {
        // Show error to your customer
        showError(result.error.message);
      } else {
        // The payment succeeded!
        orderComplete(result.paymentIntent.id);
      }
    });
};

// Example usage:
const stripe = Stripe('your_publishable_key');
const elements = stripe.elements();
const card = elements.create('card');
card.mount('#card-element');

// When the user clicks the "Pay" button:
document.querySelector('#pay-button').addEventListener('click', async () => {
  const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
      card: card,
      billing_details: {
        email: 'user@example.com' // Pass the customer's email address here
      }
    }
  });

  if (error) {
    // Handle payment error
    console.error(error.message);
  } else {
    // Payment succeeded
    console.log('Payment successful:', paymentIntent.id);
  }
});
