const filter = function() {

    let portfolio__filter = document.querySelectorAll('.portfolio__filter li'),
        portfolio__list = document.querySelectorAll('.portfolio__list li'),
        portfolio__list_sites = document.querySelectorAll('.sites'),
        portfolio__list_design = document.querySelectorAll('.design'),
        portfolio__list_logo = document.querySelectorAll('.logo'),
        filter_all = document.querySelector('.filter_all'),
        filter_sites = document.querySelector('.filter_sites'),
        filter_design = document.querySelector('.filter_design'),
        filter_logo = document.querySelector('.filter_logo');


        filter_all.addEventListener('click',function(){

            portfolio__filter.forEach(function(element){
                element.classList.remove('activBat');
            });
            this.classList.add('activBat');

            portfolio__list.forEach(function(element){
                element.classList.remove('listNone');
            });
        });

        filter_sites.addEventListener('click',function(){
            portfolio__filter.forEach(function(element){
                element.classList.remove('activBat');
            });
            this.classList.add('activBat');

            portfolio__list.forEach(function(element){
                element.classList.add('listNone');
            });

            portfolio__list_sites.forEach(function(element){
                element.classList.remove('listNone');
            });
        });

        filter_design.addEventListener('click',function(){
            portfolio__filter.forEach(function(element){
                element.classList.remove('activBat');
            });
            this.classList.add('activBat');

            portfolio__list.forEach(function(element){
                element.classList.add('listNone');
            });

            portfolio__list_design.forEach(function(element){
                element.classList.remove('listNone');
            });
        });

        filter_logo.addEventListener('click',function(){
            portfolio__filter.forEach(function(element){
                element.classList.remove('activBat');
            });
            this.classList.add('activBat');

            portfolio__list.forEach(function(element){
                element.classList.add('listNone');
            });

            portfolio__list_logo.forEach(function(element){
                element.classList.remove('listNone');
            });
        });
};

filter();
