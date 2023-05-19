## Декомпозиция
Если взять наш исходный конфиг, то ориентироваться в нем при одном лоадере и 2-х плагинах становится
сложнее, поэтому мы можем его раздробить, чтобы сделать проще в чтении и его настройке.

Соответственно установим первые проблемы:
- Быстро разрастается, становится сложно ориентироваться
- Хардкодим настройки

Что мы можем сделать?
Вынести в отдельные модули разные части конфига. Например, плагины, лоадеры, resolver.
И это все надо типизировать.

Следует отметить, что у webpack есть готовая типизация, которую надо подключить.

**Loaders:**  
Поскольку это массив с объектами, где каждый представляет собой loader, то лучше их
выносить отдельно в переменные и передавать в массив, чтобы легче было в этом ориентироваться.

**Plugins:**  
Есть плагины, которые требуют какие-то пути. Хардкодить не вариант, поэтому мы создадим
отдельные настройки с опциями, которые будем передавать в конфиг и с одного места регулировать ее.

Соответственно, это тоже надо типизировать.