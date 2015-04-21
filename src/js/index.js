import AppRouter from './router';
import Prism from '../../bower_components/prism/prism';

window.router = new AppRouter();
window.router.history.start({ pushState: true });
