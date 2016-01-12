# JS Pagination

Dependent on:
 - JQuery
 - Bootstrap


Using JQuery selectors. ('.class')

Parameters:

 - selector - elements that hide or show. ('table tbody tr') or ('div') ...
 - paginationDiv - place where navigation is located. < 1 2 3 >
 - perPage - elements per page. **Default is 15.**
 - withNumber - if is true navigation include numbers < 1 2 3 >. If is false navigation without numbers < > . **Default is false.**
    
### Example
    
    var p = new Pagination(selector, paginationDiv, perPage);
    p.withNumber = true;
    p.render();
    
OR
    
    var p = new Pagination();
    p.selector = 'table tbody tr';
    p.pagination = '#paginationDiv';
    p.perPage = 10;
    p.withNumber = true;
    p.render();