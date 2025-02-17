export class DatabaseService{
    save(email, price, timestamp){
        console.log(`Running query: Insert into orders Values (email, price, created) values (${email} ${price}, ${timestamp})`)
    }
}