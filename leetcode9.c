bool isPalindrome(int x) {
    // Números negativos nunca são palíndromos
    if (x < 0) return false;

    int original = x;
    long invertido = 0;

    while (x != 0) {
        int digit = x % 10;
        invertido = invertido * 10 + digit;
        x /= 10;
    }

    return original == invertido;
}
