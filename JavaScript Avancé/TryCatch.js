function division(nombre1, diviseur) {
    try {
        if (diviseur === 0) {
            throw new Error("Ne peut pas etre diviser par 0");
        }
        let result = nombre1 / num3;
        return result;
    }
    catch (error) {
        console.log(error);
    }

}


console.log(division(0, 50));


function accedElemtDOM(element) {
    let result = document.getElementsByTagName(element);
    try {
        if (!result) {
            throw new Error("Aucun element n'a été trouvé");
        } else {
            console.log(result);
        }


    }
    catch (error) {
        console.log(error);
    }
}

accedElemtDOM("div");