function capitalizeWords(sentence) {
    // Split the sentence into words and Capitalize first letters.
    const words = sentence.split(' ');

    const capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    return capitalizedWords.join(' ');
}

module.exports = capitalizeWords;