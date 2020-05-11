function prettyPrint(text) {
    console.log('-'.repeat(text.length + 4));
    console.log(`- ${text} -`);
    console.log('-'.repeat(text.length + 4));
}

module.exports = {
    prettyPrint
}