
/* Annotated JavaScript File */
/* This file includes detailed explanations for each function, event listener, and line of code. */

document.addEventListener('DOMContentLoaded', () => { /* Set up a listener to ensure the DOM is fully loaded before executing */
    const carousels = document.querySelectorAll('.carousel-container'); /* Select specific element(s) from the DOM */

    carousels.forEach(carousel => { /* Define a function using arrow syntax */
        const track = carousel.querySelector('.carousel-track ul'); /* Select specific element(s) from the DOM */
        const leftButton = carousel.querySelector('.carousel-button.left'); /* Select specific element(s) from the DOM */
        const rightButton = carousel.querySelector('.carousel-button.right'); /* Select specific element(s) from the DOM */
        const items = Array.from(track.children); /* Declare a constant or variable */
        const itemWidth = items[0].getBoundingClientRect().width; /* Declare a constant or variable */
        const visibleWidth = carousel.offsetWidth; /* Declare a constant or variable */
        const totalWidth = itemWidth * items.length; /* Declare a constant or variable */
        const step = Math.ceil((totalWidth - visibleWidth) / 4); /* Declare a constant or variable */
        let currentOffset = 0; /* Declare a constant or variable */
        const extraClicks = itemWidth * 1; /* Declare a constant or variable */

        const updateTrackPosition = () => { /* Define a function using arrow syntax */
            currentOffset = Math.max(0, Math.min(currentOffset, totalWidth - visibleWidth + extraClicks));

            track.style.transition = 'transform 0.5s ease-in-out'; /* Dynamically update the styling of an element */
            track.style.transform = `translateX(-${currentOffset}px)`; /* Dynamically update the styling of an element */

            if (currentOffset + visibleWidth >= totalWidth + extraClicks) { /* Conditional logic */
                rightButton.style.display = 'none'; /* Dynamically update the styling of an element */
            } else { /* Conditional logic */
                rightButton.style.display = 'block'; /* Dynamically update the styling of an element */
            }

            if (currentOffset === 0) { /* Conditional logic */
                leftButton.style.display = 'none'; /* Dynamically update the styling of an element */
            } else { /* Conditional logic */
                leftButton.style.display = 'block'; /* Dynamically update the styling of an element */
            }
        };

        leftButton.addEventListener('click', () => { /* Attach an event listener to the selected element */
            currentOffset -= step;
            updateTrackPosition();
        });

        rightButton.addEventListener('click', () => { /* Attach an event listener to the selected element */
            currentOffset += step;
            updateTrackPosition();
        });

        updateTrackPosition();
    });
});

document.addEventListener('DOMContentLoaded', () => { /* Set up a listener to ensure the DOM is fully loaded before executing */
  const deliveryForm = document.querySelector('.delivery-form form'); /* Select specific element(s) from the DOM */
  const paymentForm = document.getElementById('payment-form'); /* Declare a constant or variable */
  const deliveryInputs = deliveryForm.querySelectorAll('input'); /* Select specific element(s) from the DOM */
  const deliveryButton = deliveryForm.querySelector('.save-button'); /* Select specific element(s) from the DOM */

  deliveryButton.addEventListener('click', (e) => { /* Attach an event listener to the selected element */
    e.preventDefault();

    const allFilled = Array.from(deliveryInputs).every(input => input.value.trim() !== ''); /* Define a function using arrow syntax */
    if (allFilled) { /* Conditional logic */
      paymentForm.classList.remove('hidden');
      alert('Delivery details saved! Proceed to payment.'); /* Display an alert message to the user */
    } else { /* Conditional logic */
      alert('Please fill in all the delivery details.'); /* Display an alert message to the user */
    }
  });
});

document.addEventListener('DOMContentLoaded', () => { /* Set up a listener to ensure the DOM is fully loaded before executing */
    const promoForm = document.querySelector('.basket-section form'); /* Select specific element(s) from the DOM */
    const promoInput = document.querySelector('.promo-code'); /* Select specific element(s) from the DOM */
    const totalAmountElement = document.querySelector('.basket-total p:last-child strong'); // Total amount element /* Select specific element(s) from the DOM */
    const basketTotalSection = document.querySelector('.basket-total'); // Basket totals container /* Select specific element(s) from the DOM */

    let baseTotal = 200.20; /* Declare a constant or variable */

    promoForm.addEventListener('submit', (e) => { /* Attach an event listener to the selected element */
        e.preventDefault();

        const discount = parseFloat((baseTotal * 0.05).toFixed(2)); /* Declare a constant or variable */
        const discountedTotal = (baseTotal - discount).toFixed(2); /* Declare a constant or variable */

        totalAmountElement.textContent = `S$${discountedTotal}`;

        let discountLine = document.querySelector('.promo-discount'); /* Select specific element(s) from the DOM */
        if (!discountLine) { /* Conditional logic */
            discountLine = document.createElement('p');
            discountLine.classList.add('promo-discount');
            basketTotalSection.insertBefore(discountLine, totalAmountElement.parentElement);
        }
        discountLine.textContent = `Promo Code: S$${discount}`; /* Define or update properties or variables */

        const successMessage = document.createElement('p'); /* Declare a constant or variable */
        successMessage.textContent = 'Promo code applied successfully!';
        successMessage.style.color = 'green'; /* Dynamically update the styling of an element */
        promoForm.appendChild(successMessage);
    });
});