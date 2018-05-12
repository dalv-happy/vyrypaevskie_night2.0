# Запуск этого #

1. brew install node
2. npm install --save
3. npm start
4. Переходим по ссылке http://localhost:8080/

# Структуры данных #
- **Список сценариев.**
Такая структура позволяет динамически добавлять новые пункты в статистику, не требуя изменениий со стороны  *Front-end'a*
```
const scenarios = [
       {
           name: 'Aftersale', status: 'Active',
           statistics: [
               {name: 'Sent', value: 344},
               {name: 'Opened', value: 273},
               {name: 'Conversion', value: '45%'},
               {name: 'Sales', value: '$845'},
           ]
       },
       
       ....
       
       {
           name: 'Auto marketing campaigns', status: 'Inacvtive',
           statistics: [
               {name: 'Sent', value: 344},
               {name: 'Opened', value: 273},
               {name: 'Conversion', value: '45%'},
               {name: 'Sales', value: '$845'},
           ]
       },
   ];
```

- **Редактирование сценариев.**
Такая структура позволяет динамически добавлять новые пункты в ред. сценариев, не требуя изменениий со стороны  *Front-end'a*.  
Поля **saveUrl** _(ссылка по которой нужно отправить запрос для сохранения)_ и **defaultUrl** _(ссылка по которой приложение получает дефолтные данные)_.  
Предоставят динамический доступ со стороны бэка, если что-то меняется на серваке, то фрон не страдает достаточно будет обновить API метод, а фронт подхватит изменения.
```
const dataEdit = [
    {name: 'Welcome message', status: 'Active', saveUrl: '', defaultUrl: '',
    data: {
        send: {
            TextField: 4,
            Select: {
                active: 'today',//акивное значение(то значение которое выбрал пользователь на пред. сохранении) нужно передать value
                options: [
                    {label: 'Today', value: 'today'},
                    {label: 'Yesterday', value: 'yesterday'}
                ]
            }
        },
        preMessage: 4,
        promoMaterial: {
            Select: {
                active: 'video',//акивное значение(то значение которое выбрал пользователь на пред. сохранении) нужно передать value
                options: [
                    {label: 'link', value: 'video'},
                    {label: 'link', value: 'photo'}
                ]
            }
        },
        buttonUrl: 'http://exmple.com',
        postMessage: 4,
    }}
];
```