import Index from './components/Index'
import Form from './components/Form'

const routes = [
    {
        "path": "/",
        "label": "Home",
        "component": Index
    },
    {
        "path": "/consulta",
        "label": "Consulta",
        "component": Form
    },
];

export default routes;