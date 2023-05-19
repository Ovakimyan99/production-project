## DevServer
Темы:  
- Зачем нужен?
- Как его настроить?

---

При разработке возникает неприятная ситуация, когда мы пишем код, сохраняем его
и не видим сразу результат. Это проблема по причине того, что отнимает время.

Также, даже если у нас она автоматически собирается заново, нам нет необходимости
пересобирать абсолютно все. Только те файлы, в которые вносились изменения.

С этим нам поможет инструмент devServer, который нужно настроить.

В [доке webpack](https://webpack.js.org/guides/development/) есть
3 решения для этих целей:
1. webpack's Watch Mode
2. webpack-dev-server
3. webpack-dev-middleware

Выделим задачи в настройке:
1. Установить
2. Настроить конфиг
3. Настроить скрипты

Первый слишком простой, третий для продвинутый, а второй - это наша стихия.

### Установка
Дока предлагает:
```
npm install --save-dev webpack-dev-server
```

### Конфиг
Создаем отдельный файл для `devServer` в соответствии с нашей декомпозицией.
В топку с основными настройками конфига передаем и `port`.

Мне это исходно не нравилось, но в будущем мы перенесем это в переменные окружения `.env`, поэтому
временно можно так и поступить.

По сути в объект конфигурации для DevServer из множества опций пока что мы используем
только `port` и `open`;

`open` нужен для того, чтобы после сборки у нас проект открылся сам в браузере.

Сам `devServer` должен присутствовать в конфиге, если режим разработки `dev`.

### Скрипты
Из [доки](https://webpack.js.org/guides/development/):
```"start": "webpack serve --open"```
Обращаю внимание на то, что нам флаг `--open` уже не нужен, потому что мы
его задали в конфиге.