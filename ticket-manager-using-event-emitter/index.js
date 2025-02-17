import { TicketManager } from "./ticketManager.js";
import { EmailService } from "./emailService.js";
import { DatabaseService } from "./databaseService.js";

const ticketManager = new TicketManager(3);
const emailService = new EmailService();
const databaseService = new DatabaseService();

ticketManager.on('buy', (email, price, timestamp) => {
    emailService.send(email);
    databaseService.save(email, price, timestamp);
})

ticketManager.on('error', (email, price, timestamp) => {
  console.error('Greacefully hanled the error');
})

ticketManager.buy('test@gmail.com', 10);
ticketManager.buy('test@gmail.com', 10);
ticketManager.buy('test@gmail.com', 10);
ticketManager.buy('test@gmail.com', 10);
ticketManager.buy('test@gmail.com', 10);