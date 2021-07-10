

export const filter = (string, word) => {
    const stringLower = string.toLocaleLowerCase();
    const wordLower = word.toLocaleLowerCase();

    const expression = new RegExp(wordLower);

    const index = stringLower.search(expression);
    if(index > 0 || index === 0) {
        return true;
    } else {
        return false;
    }
}