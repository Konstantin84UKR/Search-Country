import refs from './refs.js';
import { error, info } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import * as Confirm from '@pnotify/confirm';
import '@pnotify/confirm/dist/PNotifyConfirm.css';

function errorMsg(data) {
  refs.mainDiv.innerHTML = '';
  error({
    title: 'Error!',
    text: `status ${data.status} message ${data.message}`,
  });
}

function infoMsg(count) {
  refs.mainDiv.innerHTML = '';
  info({
    title: `Сервер вернул ${count} варианта`,
    text: `Необходимо сделать запрос более специфичным.`,
  });
}

export { errorMsg, infoMsg };
