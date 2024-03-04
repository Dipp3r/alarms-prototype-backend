const Paginate = async function(alarms,pageSize){
    var n = 1;
    var paginate = [];
    var page=[];
    alarms.map(async(alarm)=>{
        page.push(alarm);
        if(n==pageSize){
            paginate.push(page);
            n=1;
            page=[];
        }
        else{
            n++;
        }
    })
    return paginate;
}

const optimized_paginate = async function(alarms,pages,pageSize){
    var result = {}
    pages.map((page)=>{
        if(parseInt(page)==0 || (parseInt(page)-1)*pageSize > alarms.length){
            result[page] = [];
        }
        else{
            var start_index = pageSize*(parseInt(page)-1);
            var end_index = Math.min(pageSize*parseInt(page),alarms.length);
            var page_content = [];
            for(var i=start_index;i<end_index;i++){
                page_content.push(alarms[i]);
            }
            result[page] = page_content;
        }
    })
    return result;
}

module.exports = {
    Paginate,
    optimized_paginate
}