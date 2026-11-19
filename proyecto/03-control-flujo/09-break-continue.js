let i = 0;

while (i < 6) {
    i++;

    if (i === 2) {  // i comienza desde 0 hacia el 5,
        continue;      // pero le decimos que si es 2 que se salte al 3 (continue)
    }
    if (i === 4)  // i comienza desde 0 hacia el 5,
        break; // pero le decimos que si es 4 que se detenga (break)

    console.log(i);
}