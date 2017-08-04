export var Chats = [
    {
        ChatID: 1,
        ChatTitle: 'Chat 1',
        Members: [
            {
                UserName: 'Alex',
                Logged: true

            },
            {
                UserName: 'John Doe',
                Logged: true

            },
            {
                UserName: 'Jane Doe',
                Logged: false

            }
        ],
        Messages: [
            {
                User: 'Jane Doe',
                Text: `Hi!`,
                Date: new Date(2017, 6, 30, 17, 45, 23)
            },
            {
                User: 'John Doe',
                Text: `teste teste teste teste teste teste teste teste teste teste teste 
                teste teste teste teste teste teste teste`,
                Date: new Date(2017, 6, 30, 18, 45, 23)
            }
        ],
        LastMessage: {
            User: 'John Doe',
            Text: `teste teste teste teste teste teste teste teste teste teste teste 
                teste teste teste teste teste teste teste`,
            Date: new Date(2017, 6, 30, 18, 45, 23)
        }
    },
    {
        ChatID: 2,
        ChatTitle: 'Chat 2',
        Members: [
            {
                UserName: 'Alex',
                Logged: true

            },
            {
                UserName: 'John Doe',
                Logged: true

            }
        ],
        Messages: [
            {
                User: 'Alex',
                Text: `Hi!`,
                Date: new Date(2017, 6, 30, 17, 45, 23)
            },
            {
                User: 'John Doe',
                Text: `teste teste teste teste teste teste teste teste teste teste teste 
                teste teste teste teste teste teste teste`,
                Date: new Date(2017, 6, 30, 18, 45, 23)
            }
        ],
        LastMessage: {
            User: 'John Doe',
            Text: `teste teste teste teste teste teste teste teste teste teste teste 
                teste teste teste teste teste teste teste`,
            Date: new Date(2017, 6, 30, 18, 45, 23)
        }
    }
]