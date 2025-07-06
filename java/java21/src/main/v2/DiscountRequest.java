package v2;

import java.time.LocalDateTime;

public class DiscountRequest {
    private final double amount;
    private final String couponCode;
    private final int orderCount;
    private final LocalDateTime firstOrderDate;

    public DiscountRequest(double amount, String couponCode, int orderCount, LocalDateTime firstOrderDate) {
        this.amount = amount;
        this.couponCode = couponCode;
        this.orderCount = orderCount;
        this.firstOrderDate = firstOrderDate;
    }

    public double getAmount() {
        return amount;
    }

    public String getCouponCode() {
        return couponCode;
    }

    public int getOrderCount() {
        return orderCount;
    }

    public LocalDateTime getFirstOrderDate() {
        return firstOrderDate;
    }

}
