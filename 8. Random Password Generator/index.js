//Random Passwword Generator

function generatePassword(length, lower, upper, number, symbol){

    const lowerChar = 'abcdefghijklmnopqrstuvwxyz';
    const upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChar = '0123456789';
    const symbolChar = "!\#$%&()*+,-./:;<=>?@[\\]^_`{|}~";

    let allowedChar = '';
    let password = '';

    allowedChar += lower ? lowerChar : '';
    allowedChar += upper ? upperChar : '';
    allowedChar += number ? numberChar : '';
    allowedChar += symbol ? symbolChar : '';


    if(length <= 0){
        return `(Password length must be atleast 1)`;
    }
    else if (allowedChar.length<=0){
        return `(Atleast 1 set of character needs to be selected)`;
    }

    for(let i = 0; i<length; i++){
        const randomChar = Math.floor(Math.random()*allowedChar.length);
        password += allowedChar[randomChar];
    }

    return password;
}

const passwordLength = 12;
const lowerCase = false;
const upperCase = true;
const numbers  = true;
const symbol = true;


const password = generatePassword(passwordLength, 
                                        lowerCase, 
                                        upperCase, 
                                        numbers, 
                                        symbol);
console.log(`Generated Passsword: ${password}`);