package v2;

import java.time.LocalDateTime;

public class DiscountCalculator2 {

    private final StrategyRegistry<CustomerType, DiscountRequest> registry;

    public DiscountCalculator2(StrategyRegistry<CustomerType, DiscountRequest> registry) {
        this.registry = registry;
    }

    public double calculate(String customerTypeStr, double amount, String couponCode, int orderCount,
            LocalDateTime firstOrderDate) {
        CustomerType type = CustomerType.from(customerTypeStr);
        DiscountRequest req = new DiscountRequest(amount, couponCode, orderCount, firstOrderDate);
        return Math.min(100, registry.apply(type, req));
    }

    public static void main(String[] args) {
        DiscountCalculator2 calculator = new DiscountCalculator2(DiscountStrategyRegistration.createRegistry());
        double value = calculator.calculate("REGULAR", 100, "FEST10", 1, null);
        System.out.println("Discount calculated :: " + value);
    }

}
