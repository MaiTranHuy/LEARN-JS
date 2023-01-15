var users = [
    {
        id: 1,
        name: 'Tran Huy 1'
    },
    {
        id: 2,
        name: 'Tran Huy 2'
    },
    {
        id: 3,
        name: 'Tran Huy 3'
    },
];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Noi dung 1'
    },
    {
        id: 2,
        user_id: 2,
        content: 'Noi dung 2'
    }
]

//b1. Lấy ra comments
//b2. Từ comments lấy ra user_id
//b3. Từ user_id lấy ra user tương ứng

function getComments() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            //1. trả về danh sách comment cần lấy ra
            resolve(comments);
        }, 1000)
    })
}

function getUserByIds(userIds) {
    return new Promise(function (resolve) {
        //loc ra nhung user co trong list
        var result = users.filter(function (user) {
            //tim xem trong array co phan tu user.id khong
            return userIds.includes(user.id)
        })
        setTimeout(function () {
            resolve(result)
        }, 1000)
    })
}

getComments()
    //2. lấy ra userid trong danh sách comment
    .then(function (comments) {
        //sử dụng map để tách list comment ra 
        var userIds = comments.map(function (comment) {
            //trả về user_id của comment
            return comment.user_id;
        });
        //3. 
        return getUserByIds(userIds)
            .then(function (users) {
                return {
                    users: users,
                    comments: comments
                }
            });
    })

    .then(function (data) {
        var commentBlock = document.getElementById('comment-block')
        var html = ''
        data.comments.forEach(function (comment) {
            var user = data.users.find(function (user) {
                return user.id === comment.user_id;
            });
            html += `<li>${user.name}: ${comment.content}</li>`
        });
        commentBlock.innerHTML = html;
    });

