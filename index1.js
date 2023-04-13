// Реалізуйте клас Validator, який перевірятиме рядки.
// Наприклад, у нього буде метод isEmail параметром приймає рядок
// і перевіряє, чи є він коректним емейлом чи ні. Якщо є – повертає true,
// якщо не є – то false. Крім того, клас буде мати такі
// методи: метод isDomain для перевірки домену, isName 
// для перевірки довжини щоб була більше 2 та 1 літера повинна бути велика 



class Validator {
    static domains = ['ua', 'com', 'net'];
     
    constructor (string) {
        this.string = string;
    }

    isEmail() {
        const dogMailIndex = this.string.indexOf('@');
        const dotIndex = this.string.lastIndexOf('.');
        const domain = this.string.slice(dotIndex + 1, this.string.length);

        if (!Validator.domains.includes(domain)) {
            console.log("domain isn`t correct");
            return false
        }

        if(!(this.string.slice(0, dogMailIndex).length > 1)) { 
            console.log("The name is too short")
            return false
        }

        if (!this.string.slice(dogMailIndex + 1, dotIndex).length) {
            console.log("The name is too short")
            return false
        }

        return true;
    }


    test () {
        return this.string.isEmail() && this.string.isDomain() && this.string.isSmth()
    }
}

const valid = new Validator ('asd@sad.com');

console.log(valid.isEmail());

// asdasdasd@gmail.com


// ua com net 