
    class SamsClub {
        constructor() {
            this.$louti = $('.loutinav li');
            this.$loutinav = $('.loutinav');
            this.$shoplist = $('.shopping-list');
            this.$top = $(window).scrollTop();
            this.$stickytop = $('.sticky-top');
        }
        init() {
            // let _this = this;
            this.floornav();
            this.stickynav();
        }

        // 吸顶nav
        stickynav() {
            $(window).on('scroll',()=>{
                if(this.$top>=102){
                    this.$stickytop.show();
                } else {
                    this.$stickytop.hide();
                }
            })
        }

        //  楼梯
        floornav() {
            let _this = this;
            // 楼梯点击
            this.$louti.not('.last').on('click', function () {
                let $litop = _this.$shoplist.eq($(this).index()).offset().top;
                $(this).addClass('active').siblings().removeClass('active');
                $('html').animate({ scrollTop: $litop - 88 });
            })

            // 回顶
            this.$louti.last().on('click', function () {
                $('html').stop(true).animate({ scrollTop: 0 });
            })

            // 楼梯初始

            if (this.$top > 600) {
                this.$loutinav.show();
            } else {
                this.$loutinav.hide();
            }

            // 页面滚动
            $(window).on('scroll', function () {
                _this.$top = $(window).scrollTop();
                if (_this.$top + 200 > _this.$shoplist.first().offset().top &&
                    _this.$top - 88 <= _this.$shoplist.last().offset().top) {
                    _this.$loutinav.show();
                    _this.$shoplist.each(function (index, element) {
                        if (_this.$top < $(element).offset().top + 88) {
                            _this.$louti.eq(index).addClass('active').siblings().removeClass('active');
                            return false;
                        }
                    })
                } else if (_this.$top - 88 > _this.$shoplist.last().offset().top) {
                    _this.$louti.removeClass('active');
                } else {
                    _this.$loutinav.hide();
                }
            })
        }


    }

    export {
        SamsClub
    }
