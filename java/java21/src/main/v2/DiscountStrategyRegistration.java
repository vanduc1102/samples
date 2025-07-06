package v2;

import java.time.LocalDateTime;

public class DiscountStrategyRegistration {
    public static StrategyRegistry<CustomerType, DiscountRequest> createRegistry() {
        StrategyRegistry<CustomerType, DiscountRequest> registry = new StrategyRegistry<>();

        registry.register(CustomerType.REGULAR, req -> {
            double discount = req.amount() * 0.1;
            if (couponProperties.getFestive().equalsIgnoreCase(req.couponCode()))
                discount += 10;
            return discount;
        });

        registry.register(CustomerType.PREMIUM, req -> {
            double discount = req.amount() * 0.15;
            if (couponProperties.getFestive().equalsIgnoreCase(req.couponCode()))
                discount += 20;
            return discount;
        });

        registry.register(CustomerType.VIP, req -> {
            double discount = req.amount() * 0.25;
            if (req.orderCount() > 5 && req.firstOrderDate().isBefore(LocalDateTime.now().minusYears(2))) {
                discount += 50;
            }
            return discount;
        });

        return registry;
    }
}
