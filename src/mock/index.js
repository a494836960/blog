import Mock from 'mockjs';

Mock.mock(/\/article\/list/, 'get', function () {
    console.log('mock');
    return Mock.mock({
        'records|10': [
            {
                id: '@integer(1,100)',
                title: '@ctitle(1,30)',
                desc: '@ctitle(50,100)'
            }
        ]
    })
})

Mock.mock(/\/article\/\d?/, 'get', function (option) {
    return Mock.mock({
        id: "",
        title: '@ctitle(1,30)',
        content: "@ctitle(500,800)",
        next: {
            id: '@integer(1,100)',
            title: '@ctitle(1,30)',
        },
        prev: {
            id: '@integer(1,100)',
            title: '@ctitle(1,30)',
        }

    })
})