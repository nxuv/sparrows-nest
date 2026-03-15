#include <stdio.h>

void some() {}

int main(void) {
    some(12, 48);
    printf("%d\n", '\'');
    printf("%d\n", '’');
    return 0;
}
