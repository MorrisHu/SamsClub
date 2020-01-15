class RenderHome {
    constructor() {

    }
    init() {
        $.ajax({
            url: "../php/getgoods.php",
            dataType: 'json'
        }).done((d) => {
            $(d).each(function (index, value) {
                let $n = $('.floor .item').eq(index);
                $n.find('.i-img img').attr('src',value.imgurl+'_300x300.jpg');
                if(value.isjsd==1){
                    $n.find('.i-title').addClass('i-tags-mark');
                }
                $n.find('.i-title').append(value.title.replace(/Member's Mark/,'MM'));
                $n.find('.i-price').append(value.price);
            })
        })
    }
}

export {
    RenderHome
}