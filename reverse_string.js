const rev = (sentence) => {
    const old_word = sentence.split("")
    const new_word = old_word.reverse()
    return new_word.join("")

}
console.log(rev("Welcome"))