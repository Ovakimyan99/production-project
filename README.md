## Описание

---

Социальная сеть со статьями, профилем и главной страницей.

Проект спроектирован по [FSD методологии](https://feature-sliced.design/ru/docs/get-started/overview).

Подготавливается инфраструктура, а именно:

- [x] Webpack  
  - [x] типизировать
  - [x] декомпозировать
  - [x] настроить
- [x] Линтеры
  - [x] eslint
  - [ ] eslint: написать свой плагин
  - [x] stylelint
- [x] Tsconfig
- [x] Babel
- [x] Тестовая среда
  - [x] jest
  - [x] storybook
  - [x] loki
- [x] CssModules
- [x] i18n - интернационализация
- [ ] CI pipeline
- [x] Темы (Темная, светлая)
  
## Скрипты

---

0. `npm i` - установка зависимостей для запуска проекта
1. `start` - локальный запуск проекта на порту 3000
2. `build:prod` - сборка проекта в режиме "production"
3. `build:dev` - сборка проекта в режиме "development"
4. `lint:ts` - обнаружение проблем в ts и tsx файлах (eslint)
5. `lint:ts:fix` - исправление обнаруженных es-линтером проблем
6. `lint:scss` - обнаружение проблем в стилях (stylelint)
7. `lint:scss:fix` - исправление обнаруженных проблем style-линтером
8. `test:unit` - запуск тестов jest
9. `test:ui` - запуск loki, регрессионное тестирование
10. `test:ui:ok` - подтверждение изменений loki
11. `storybook` - запуск storybook
12. `storybook:build` - запуск build storybook
13. `analyze:build` - анализатор размера бандла в режиме production
14. `analyze:dev` - анализатор размера бандла в режиме development
