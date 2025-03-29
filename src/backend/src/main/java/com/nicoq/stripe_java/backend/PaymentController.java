package com.nicoq.stripe_java.backend;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Customer;
import com.stripe.model.Product;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import com.stripe.param.checkout.SessionCreateParams.LineItem.PriceData;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class PaymentController {

        @Value("${client.base.url}")
        private String clientBaseURL;

        @Value("${stripe.api.key}")
        private String stripeApiKey;

        @PostMapping("/checkout/hosted")
        public String hostedCheckout(@RequestBody RequestDTO requestDTO) throws StripeException {

                Stripe.apiKey = stripeApiKey;


                if (clientBaseURL == null || clientBaseURL.isEmpty()) {
                        throw new IllegalArgumentException("CLIENT_BASE_URL is not set in application properties.");
                }

                Customer customer = CustomerUtil.findOrCreateCustomer(requestDTO.getCustomerEmail(),
                                requestDTO.getCustomerName());

                SessionCreateParams.Builder paramsBuilder = SessionCreateParams.builder()
                                .setMode(SessionCreateParams.Mode.PAYMENT)
                                .setCustomer(customer.getId())
                                .setSuccessUrl(clientBaseURL + "/success?session_id={CHECKOUT_SESSION_ID}")
                                .setCancelUrl(clientBaseURL + "/failure");

                for (Product product : requestDTO.getItems()) {
                        paramsBuilder.addLineItem(
                                        SessionCreateParams.LineItem.builder()
                                                        .setQuantity(1L)
                                                        .setPriceData(
                                                                        PriceData.builder()
                                                                                        .setProductData(
                                                                                                        PriceData.ProductData
                                                                                                                        .builder()
                                                                                                                        .putMetadata("app_id",
                                                                                                                                        product.getId())
                                                                                                                        .setName(product.getName())
                                                                                                                        .build())
                                                                                        .setCurrency(ProductDAO
                                                                                                        .getProduct(product
                                                                                                                        .getId())
                                                                                                        .getDefaultPriceObject()
                                                                                                        .getCurrency())
                                                                                        .setUnitAmountDecimal(ProductDAO
                                                                                                        .getProduct(product
                                                                                                                        .getId())
                                                                                                        .getDefaultPriceObject()
                                                                                                        .getUnitAmountDecimal())
                                                                                        .build())
                                                        .build());
                }

                Session session = Session.create(paramsBuilder.build());

                return session.getUrl();
        }
}
