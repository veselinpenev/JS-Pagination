var Pagination = function (selectorId, paginationId, perPage){
    var default_per_page = 15;

    this.selector = selectorId ? selectorId : '';
    this.pagination = paginationId ? paginationId : '';
    this.perPage = perPage ? perPage : default_per_page;
    this.withNumber = false;
    
    var _this = this;
    var page = 1;
    var all = 0;
    var max_page = 0;
    var classUse = makeClass();
    
    this.render = function () {
        all = $(_this.selector).size();
        max_page = Math.ceil(all/_this.perPage);
        changePage();
    };
    
    function renderPagination(){
        var currentPage = page-1;
        var from = parseInt(currentPage*_this.perPage +1);
        var to = parseInt(currentPage*_this.perPage + _this.perPage);
        if(all< to){
            to = all;
        }
        
        var paginationHtml = '<strong>' + from + '-' + to + '/' + all + ' </strong>';
        
        if(_this.withNumber){
            paginationHtml += '<div class="btn-group"><a class="' + classUse + ' btn btn-default btn-sm';
            if(page == 1) {
                paginationHtml +=' disabled '
            }
            paginationHtml += '" data-page="' + (page-1) +'" title="Previous"><span class="glyphicon glyphicon-chevron-left"></span></a>';
            var page_from = 1;
            var page_to = max_page;
            var add_page = 0;
            if(page > 2){
                page_from = page - 2;
            }
            else if (page == 2){
                add_page = 1;
            }
            else if (page == 1){
                add_page = 2;
            }
            if((max_page - page) > 1){
                page_to = page + 2 + add_page;
            }
            else if((max_page - page) == 1){
                page_from -= 1;
            }
            else if((max_page - page) == 0){
                page_from -= 2;
            }
            
            page_from = (page_from < 1) ? 1 : page_from;
            page_to = (page_to > max_page) ? max_page : page_to;
            for(x = page_from; x<=page_to; x++){
                paginationHtml += '<a class="' + classUse + ' btn btn-default btn-sm ';
                if(x == page){
                    paginationHtml += ' active" data-page="' + x + '">' + x + '</a>';
                }
                else{
                    paginationHtml +='" data-page="' + x + '">' + x + '</a>';
                }
            }
            paginationHtml += '<a class="' + classUse + ' btn btn-default btn-sm ';
            if(page == max_page && max_page != 0){
                paginationHtml += ' disabled ';
            }
            paginationHtml += '" data-page="' + (page+1) + '"><span class="glyphicon glyphicon-chevron-right"></span></a>';
            paginationHtml += '</div>';
        }
        else{
            paginationHtml +='<div class="btn-group"><a class="' + classUse + ' btn btn-default btn-sm" data-page="' + (page-1) +'" title="Previous"><span class="glyphicon glyphicon-chevron-left"></span></a><a class="' + classUse + ' btn btn-default btn-sm" data-page="' + (page+1) + '"><span class="glyphicon glyphicon-chevron-right"></span></a></div>';
        }
        $(_this.pagination).html(paginationHtml);
    }

            
    function changePage(){
        renderPagination();
        $(_this.selector).hide();
        var currenrPage = page-1;
        $(_this.selector).slice(currenrPage*_this.perPage, currenrPage*_this.perPage + _this.perPage).show();
    }

    $(document).on( 'click', '.' + classUse, function () {
        page = parseInt($(this).attr('data-page'));
        if(page < 1){
            page = 1;
        }
        if(page > max_page && max_page > 0){
            page = max_page;
        }
        if(max_page == 0){
            page = 1;
        }
        changePage();
    });
    
    function makeClass()
    {
        var text = "";
        var possible = "abcdefghijklmnopqrstuvwxyz";

        for( var i=0; i < 10; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
};

