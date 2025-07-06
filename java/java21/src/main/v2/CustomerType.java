package v2;

public enum CustomerType {
    REGULAR,
    PREMIUM,
    VIP;

    public static CustomerType from(String type) {
        try {
            return CustomerType.valueOf(type.toUpperCase());
        } catch (IllegalArgumentException e) {
            throw new IllegalArgumentException("Unknown customer type: " + type);
        }
    }
}
