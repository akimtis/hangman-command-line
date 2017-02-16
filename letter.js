var Letter = function() {

    this.charac = let;

    this.appear = false;

    this.letterRender = function() {
        //if appear is false then show the _
        //else appear is true then show character
        return (this.appear) ? this.charac : " _ " ;
     };
};

module.exports = Letter;
