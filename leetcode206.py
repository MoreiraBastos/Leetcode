# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
### Author: Edson Moreira Bastos
# Date: 2024/12/12
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        vetor=[]
        nova_lista=ListNode(0)
        p_nova_lista=dummy
        while head:
            vetor.append(head.val)
            head=head.next

        for i in vetor[::-1]:
            p_nova_lista.next=ListNode(i)
            p_nova_lista=p_nova_lista.next
            
        return nova_lista.next
    
    
