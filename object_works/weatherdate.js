var weather=[
    {district:"tvm",temp:30},
    {district:"tvm",temp:31},
    {district:"apy",temp:24},
    {district:"ktm",temp:20},
    {district:"idk",temp:19},
    {district:"ekm",temp:31},
    {district:"tsr",temp:29},
    {district:"mpm",temp:30},
    
    {district:"apy",temp:25},
    {district:"ktm",temp:21},
    {district:"idk",temp:18},
    {district:"ekm",temp:30},
    {district:"tsr",temp:20},
    {district:"mpm",temp:31}
]

var forecast={}
for(let data of weather){
    let district_name=data.district
    let curr_temp=data.temp
    if(district_name in forecast){
        let old_temp=forecast[district_name]
        if(curr_temp>old_temp){
            forecast[district_name]=curr_temp
        }   
    }
    else{
        forecast[district_name]=curr_temp
    }
}
console.log(forecast);

//sorting
Object.entries(forecast).some((temp1,temp2)=>temp1[2]-temp2[1])
console.log();