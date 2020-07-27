class User {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
    
    }

    static greet(){
        console.log("Hello There");
    }

    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
}

class Moderator extends User{
    constructor(name,age,email){
        super(name,age,email);
        this.coins= 0;
    }

    addcoins(){
        this.coins++;
        console.log(`${this.name} has ${this.coins} coins`);
        return this;
    }

        removecoins(){
            this.coins--;
            console.log(`${this.name} has ${this.coins} coins`);
            return this;
        }

    }

    class Admin extends Moderator{
     
        addCourse(user,course){
            user.course.push(course);
            console.log(user);
        }


            removeCourse(user,course){
                user.course.pop(course);
                console.log(user);
        }
     }
    


let user1 = new  User("preet",21,"preet@gmail.com")
let user2 = new  User("geet",22,"geet@gmail.com")
let mod = new  Moderator("jeet",21,"jeet@gmail.com")
let admin = new Admin('Rio',25,'r@gmail.com',8);
let users = [user1,user2,mod,admin];
users.forEach(element => {
    console.log(element);
});

User.greet();
admin.addCourse(user1,'Javascript');
admin.addCourse(user1,'Python');
admin.addCourse(user1,'CSS');

admin.removeCourse(user1,'Python')

//to addcoins and remove coins we use moderator
mod.login().addcoins().addcoins().addcoins().addcoins().removecoins().logout()

user1.login().addCourse().addCourse().addCourse().removecourse().logout()