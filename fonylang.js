(function(exports){
    var vowels      = "aeiouyåäö";
    var consonants  = "bcdfghjklmnpqrstvwxyz";
    var exceptions  = "j";

    exports.toRobber = function(string){
        var re = new RegExp("["+consonants+"]", "gi");
        return string.replace(re,function(match){
            return match + 'o' +match.toLowerCase();
        });
    };

    exports.toPlang = function(string){
        var re = new RegExp("["+vowels+"]", "gi");
        return string.replace(re,function(match){
            return match + 'p' +match.toLowerCase();
        });
    }

    exports.toIlang = function(string){
        var re = new RegExp("["+vowels+"]", "gi");
        return string.replace(re,function(match){
            return 'i';
        });
    }

    exports.toFiglang = function(string){
        var wordsRe = new RegExp("["+consonants+vowels+"]+", "gi");
        var splitRe = new RegExp("(["+consonants+"]*["+vowels+"]*["+exceptions+"]?)(.*)", "i");
        return string.replace(wordsRe,function(word){
            if(match = word.toLowerCase().match(splitRe)){
                return 'fi' + match[2] + ' ' + match[1] + 'kon';
            } else return word;
        });
    }
})(typeof exports === 'undefined'? this['fonylang']={}: exports);
