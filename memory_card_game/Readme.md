
#  Memory Card Game

A simple JavaScript based memory matching game where players flip cards and try to find matching pairs.

---

## 🚀 Features

- Flip cards
- Match emoji pairs
- Shuffle cards randomly
- Track matched pairs
- Prevent multiple clicks during checking

---

##  Game Flow

1. Create shuffled cards  
2. User clicks first card  
3. Store `firstCard`  
4. User clicks second card  
5. Store `secondCard`  
6. Compare emojis  

### If MATCH:
- Keep cards open  
- Increase score  

### If NOT MATCH:
- Wait 1 second  
- Hide both cards again  

7. Repeat until all pairs are matched  
8. Show victory message 🎉

