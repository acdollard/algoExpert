function minimumChangeWeCantCreate (coins) {
    coins.sort((a, b) => a-b);

    let minimumChange = 0;

    for(const coin of coins) {
    if (coin > minimumChange + 1) return minimumChange + 1;
    minimumChange += coin
    }

    return minimumChange + 1;

}