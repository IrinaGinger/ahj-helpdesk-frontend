import HelpDesk from './HelpDesk';
import TicketService from "./TicketService";

const root = document.getElementById('root');

const baseURL = 'http://localhost:7070';
const service = new TicketService(baseURL);
const app = new HelpDesk(root, service);

app.init();
