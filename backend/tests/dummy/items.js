module.exports = {
    author: {
        name: 'Alejandro',
        lastname: 'Tidele'
    },
    categories: ['Something Parent', 'Something Child', 'Something Grandchild'],
    items: [
        {
            id: 'MLA684008289',
            title: 'Sample Title',
            price: {
                currency: 'ARS',
                amount: 132213.26,
                decimals: parseFloat((132213.26 % 1).toFixed(2)),
            },
            picture: 'https://topic.com',
            condition: 'NEW',
            free_shipping: true
        },
        {
            id: 'MLA653282516',
            title: 'Sample Title2',
            price: {
                currency: 'ARS',
                amount: 4323.345678,
                decimals: parseFloat((4323.345678 % 1).toFixed(2)),
            },
            picture: 'https://topic.com',
            condition: 'USED',
            free_shipping: true
        },
        {
            id: 'MLA781220452',
            title: 'Sample Title3',
            price: {
                currency: 'ARS',
                amount: 32.1,
                decimals: parseFloat((32.1 % 1).toFixed(2)),
            },
            picture: 'https://topic.com',
            condition: 'NEW',
            free_shipping: false
        },
        {
            id: 'MLA690647508',
            title: 'Sample Title3',
            price: {
                currency: 'ARS',
                amount: 23123,
                decimals: parseFloat((23123 % 1).toFixed(2)),
            },
            picture: 'https://topic.com',
            condition: 'USED',
            free_shipping: false
        },
    ]
}