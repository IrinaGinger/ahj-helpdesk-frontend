import HelpDesk from './HelpDesk';
import TicketService from "./TicketService";

const root = document.getElementById('root');

const baseURL = 'https://ahj-helpdesk-backend-wu0n.onrender.com';
const service = new TicketService(baseURL);
const app = new HelpDesk(root, service);

app.init();
