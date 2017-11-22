$(document).ready(function() {
//     $('#root'.append($('<ul id = list>ulul</ul>').text('asdasd')));
    $('#root').append('<ul id="Ul"></ul>');
    $('#Ul').append('<li id="Li"></li>');
    $('#Li').append('<span id="Span">Сделать задание #3 по web-программированию</span>');
    $('#Li').append('<button id="ButtonDelete">Удалить</button>');

    $('#ButtonDelete').click(function () {
        $('#Li').remove();
    });

    $('#root').append('<input type="text" id="add_task_input">');
    $('#root').append('<button id="add_task">Добавить Текст</button>');

    $('#add_task').click(function () {
        console.log($('add_task_input').val());
        $('#Ul').append('<li>' + $('#add_task_input').val() + '</li>');
    });
});



/*добавляет в div с id=root список ul,
    добавляет в этот список элемент li,
    добавляет в элемент li тэг span с текстом “Сделать задание #3 по web-программированию”,
добавляет в элемент li кнопку button с текстом “Удалить”, при нажатии на которую весь элемент li должен быть удален из DOM-дерева,
    добавляет в div с id=root input с id=add_task_input и кнопку button с id=add_task*/

/*При нажатии на кнопку с id=add_task добавляется новый элемент li с текстом из input,
    с требованиями как для “Сделать задание #3 по web-программированию*/