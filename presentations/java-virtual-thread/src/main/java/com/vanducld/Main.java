package com.vanducld;

public class Main {
    static class ListNode {
           int val;
           ListNode next;
           ListNode() {}
           ListNode(int val) { this.val = val; }
           ListNode(int val, ListNode next) { this.val = val; this.next = next; }

           @Override
           public String toString() {
                ListNode next = this.next;
                StringBuilder result = new StringBuilder("["+this.val+"]-->");
               while (next != null) {

               }
               return result.append("null").toString();
           }
    }

    public static void main(String[] args) {
        System.out.println("hello world.");
        int array[] = { 1, 2, 3, 4, 5 };
        System.out.println(createList(array) );
    }

    static ListNode createList(int[] arrays){
        ListNode head = new ListNode(arrays[0]);
        ListNode current = head;
        for (int i = 1; i < arrays.length ; i++) {
            current.next = new ListNode(arrays[i]);
        }
        return head;
    }
}
