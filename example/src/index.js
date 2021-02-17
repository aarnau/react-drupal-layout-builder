import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import HttpApi from 'i18next-http-backend';

var language = i18next.language || 'es';

i18next.use(HttpApi).init({
    interpolation: { escapeValue: false },
    lng: language,
    backend: {
        loadPath: 'http://drupal_react.local/sites/default/files/translations/{{lng}}.json',
    }
});

ReactDOM.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18next}>
            <App />
        </I18nextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
